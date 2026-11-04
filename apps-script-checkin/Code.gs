const QCI_HEADERS = ['Challenge ID','Event ID','Email','Code HMAC','Created At (ms)','Expires At (ms)','Failed Attempts','Status','Checked In At (TH)'];

function qciLock_(work) {
  const lock=LockService.getScriptLock();
  if (!lock.tryLock(10000)) throw new Error('The system is busy. Please try again.');
  try { return work(); } finally { lock.releaseLock(); }
}
function qciOwner_() {
  if (Session.getEffectiveUser().getEmail().toLowerCase() !== QCI.sender) throw new Error('Install and run this app using '+QCI.sender);
}
function qciRandom_() { return Utilities.getUuid().replace(/-/g,''); }
function qciProps_() { return PropertiesService.getScriptProperties(); }
function qciSheet_() {
  const book=SpreadsheetApp.openById(QCI.spreadsheetId);
  let sheet=book.getSheetByName(QCI.sheetName);
  if (!sheet) {
    sheet=book.insertSheet(QCI.sheetName);
    sheet.getRange(1,1,1,QCI_HEADERS.length).setValues([QCI_HEADERS]);
    sheet.setFrozenRows(1);
    sheet.getRange('E:F').setNumberFormat('0');
  }
  const headers=sheet.getRange(1,1,1,QCI_HEADERS.length).getDisplayValues()[0];
  if (QCI_HEADERS.some((h,i)=>headers[i]!==h)) throw new Error('The check-in sheet headers do not match. Please contact the organizer.');
  return sheet;
}
function qciRows_(sheet) { return sheet.getLastRow()>1 ? sheet.getRange(2,1,sheet.getLastRow()-1,QCI_HEADERS.length).getValues() : []; }
function qciWrite_(sheet,index,row) {
  sheet.getRange(index+2,1,1,QCI_HEADERS.length).setValues([row]);
  SpreadsheetApp.flush();
}
function qciThai_(ms) { return Utilities.formatDate(new Date(ms),'Asia/Bangkok','dd/MM/yyyy HH:mm:ss'); }
function qciEvent_(eventId,invite,requireToday) {
  qciOwner_();
  const event=QCI.events.find(e=>e.id===eventId);
  const saved=event && qciProps_().getProperty('invite:'+event.id);
  if (!saved || typeof invite!=='string' || !qciEqual_(saved,invite)) throw new Error('Invalid link. Please use the link provided by the organizer.');
  if (requireToday && Utilities.formatDate(new Date(),'Asia/Bangkok','yyyy-MM-dd')!==event.date) throw new Error('Check-in is only available on '+event.date+' (Thailand time, UTC+7).');
  return event;
}
function qciEqual_(a,b) {
  if (a.length!==b.length) return false;
  let diff=0;for(let i=0;i<a.length;i++)diff|=a.charCodeAt(i)^b.charCodeAt(i);
  return diff===0;
}
function qciHash_(id,code) {
  const secret=qciProps_().getProperty('hmacSecret');
  if (!secret) throw new Error('The organizer has not set up check-in yet.');
  return Utilities.base64EncodeWebSafe(Utilities.computeHmacSha256Signature(id+':'+code,secret));
}
function qciEmail_(value) {
  const email=String(value||'').trim().toLowerCase();
  if (email.length>254 || !/^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9-]+(?:\.[a-z0-9-]+)+$/.test(email)) throw new Error('Please enter a valid email address.');
  if (QCI.testMode && email!==QCI.sender) throw new Error('Test mode is enabled. Only the organizer can request a code.');
  return email;
}

/** Run once in editor. Idempotent; does not send email or publish the app. */
function qciSetup_() {
  qciOwner_();
  return qciLock_(()=>{
    const props=qciProps_();
    if (!props.getProperty('hmacSecret')) props.setProperty('hmacSecret',qciRandom_()+qciRandom_());
    QCI.events.forEach(e=>{if(!props.getProperty('invite:'+e.id))props.setProperty('invite:'+e.id,qciRandom_());});
    qciSheet_();return 'Setup complete. No email has been sent.';
  });
}
/** Run after deploying. The logged URLs grant access: share only with attendees. */
function qciShowLinks_() {
  qciOwner_();const base=ScriptApp.getService().getUrl();
  if (!base) throw new Error('Deploy this project as a web app first.');
  const links=QCI.events.map(e=>({event:e.label,url:base+'?event='+encodeURIComponent(e.id)+'&invite='+encodeURIComponent(qciProps_().getProperty('invite:'+e.id)||'')}));
  console.log(JSON.stringify(links,null,2));return links;
}
function doGet(e) {
  try {
    const params=(e||{}).parameter||{};
    const event=qciEvent_(params.event,params.invite,false);
    const page=HtmlService.createTemplateFromFile('Checkin');
    page.eventId=event.id;page.invite=params.invite;page.eventLabel=event.label;
    return page.evaluate().setTitle('Qiskit — Check-in');
  } catch(error) { return HtmlService.createHtmlOutput('<p>Invalid link. Please ask the organizer for your check-in link.</p>'); }
}

function qciRequestCode(eventId,invite,emailValue) {
  const event=qciEvent_(eventId,invite,true),email=qciEmail_(emailValue);
  return qciLock_(()=>{
    const now=Date.now(),sheet=qciSheet_(),rows=qciRows_(sheet);
    if(rows.some(r=>r[1]===eventId && r[2]===email && r[7]==='CHECKED_IN')) throw new Error('This email has already checked in for this event.');
    const recent=rows.filter(r=>r[2]===email && now-Number(r[4])<3600000);
    if(recent.length>=QCI.requestsPerHour)throw new Error('You can request up to '+QCI.requestsPerHour+' codes per hour.');
    if(recent.some(r=>now-Number(r[4])<QCI.cooldownMs))throw new Error('Please wait 60 seconds before requesting another code.');
    // Rolling 24 hours, including failed/uncertain attempts; never auto-retry delivery.
    if(rows.filter(r=>now-Number(r[4])<86400000).length>=QCI.dailySendLimit || MailApp.getRemainingDailyQuota()<1)throw new Error('The email sending limit has been reached. Please contact the organizer.');
    rows.forEach((r,i)=>{if(r[1]===eventId && r[2]===email && r[7]==='ACTIVE'){r[7]='SUPERSEDED';qciWrite_(sheet,i,r);}});
    const id=qciRandom_(),code=qciRandom_().slice(0,8).toUpperCase();
    const row=[id,eventId,email,qciHash_(id,code),now,now+QCI.ttlMs,0,'SENDING',''];
    const index=rows.length;qciWrite_(sheet,index,row);
    try {
      MailApp.sendEmail({to:email,name:'Qiskit Fall Fest 2026 Thailand Team',
        subject:'Your check-in code — '+event.label,
        body:'Your check-in code: '+code+'\n\n'+event.label+'\nThis code expires in 10 minutes and can only be used once.\nReturn to the same check-in page to enter your code. Requesting a new code invalidates the previous one.\nIf you did not request this code, you can ignore this email.'});
      row[7]='ACTIVE';qciWrite_(sheet,index,row);
    } catch(error) {
      row[7]='REVIEW';qciWrite_(sheet,index,row);
      throw new Error('Code delivery failed or could not be confirmed. Please wait before requesting another code.');
    }
    return {challengeId:id,expiresAt:row[5],message:'Code sent. Please check your inbox or spam folder.'};
  });
}
function qciVerifyCode(eventId,invite,emailValue,challengeId,codeValue) {
  qciEvent_(eventId,invite,true);const email=qciEmail_(emailValue);
  const code=String(codeValue||'').trim().toUpperCase();
  if(!/^[A-F0-9]{8}$/.test(code) || !/^[a-f0-9]{32}$/.test(String(challengeId||'')))throw new Error('Incorrect code.');
  return qciLock_(()=>{
    const sheet=qciSheet_(),rows=qciRows_(sheet);
    const index=rows.findIndex(r=>r[0]===challengeId && r[1]===eventId && r[2]===email);
    if(index<0)throw new Error('The code is invalid or has expired.');
    const row=rows[index];
    if(row[7]!=='ACTIVE')throw new Error('This code is no longer valid. Use your latest code, or contact the organizer if you have already checked in.');
    if(rows.some(r=>r[1]===eventId && r[2]===email && r[7]==='CHECKED_IN'))throw new Error('This email has already checked in.');
    if(Date.now()>=Number(row[5])){row[7]='EXPIRED';qciWrite_(sheet,index,row);throw new Error('The code has expired. Please request a new code.');}
    if(!qciEqual_(row[3],qciHash_(challengeId,code))) {
      row[6]=Number(row[6])+1;if(row[6]>=5)row[7]='LOCKED';
      qciWrite_(sheet,index,row);throw new Error(row[7]==='LOCKED'?'Too many incorrect attempts (5). Please request a new code.':'Incorrect code.');
    }
    // One durable row is both the consumed token and authoritative attendance record.
    row[7]='CHECKED_IN';row[8]=qciThai_(Date.now());qciWrite_(sheet,index,row);
    return {message:'Check-in successful',checkedInAt:row[8]};
  });
}
