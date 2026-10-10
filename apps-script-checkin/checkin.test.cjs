const test=require('node:test');
const assert=require('node:assert/strict');
const vm=require('node:vm');
const fs=require('node:fs');
const path=require('node:path');
const crypto=require('node:crypto');
const EVENT='online-2026-10-10',EMAIL='person@example.com';
function setup(options={}) {
  let now=Date.parse('2026-10-10T07:00:00Z'),locked=false;
  const cells=[],props=new Map(),mail=[];
  class Clock extends Date {constructor(...args){super(...(args.length?args:[now]));}static now(){return now;}}
  const sheet={getLastRow:()=>cells.length,setFrozenRows(){},getRange(r,c,h=1,w=1){
    if(typeof r==='string')return {setNumberFormat(){}};
    return {setValues(values){values.forEach((row,i)=>{cells[r+i-1]||=[];row.forEach((v,j)=>cells[r+i-1][c+j-1]=v);});},
      getValues(){return Array.from({length:h},(_,i)=>Array.from({length:w},(_,j)=>cells[r+i-1]?.[c+j-1]??''));},
      getDisplayValues(){return this.getValues().map(r=>r.map(String));}};
  }};
  let exists=false;
  const ctx=vm.createContext({Date:Clock,console,
    Session:{getEffectiveUser:()=>({getEmail:()=>options.sender||'qiskit.th@gmail.com'})},
    PropertiesService:{getScriptProperties:()=>({getProperty:k=>props.get(k)||null,setProperty:(k,v)=>props.set(k,v)})},
    LockService:{getScriptLock:()=>({tryLock:()=>{if(locked||options.locked)return false;locked=true;return true;},releaseLock:()=>{locked=false;}})},
    SpreadsheetApp:{openById:()=>({getSheetByName:()=>exists?sheet:null,insertSheet:()=>{exists=true;return sheet;}}),flush(){}},
    Utilities:{getUuid:()=>crypto.randomUUID(),computeHmacSha256Signature:(v,k)=>[...crypto.createHmac('sha256',k).update(v).digest()],base64EncodeWebSafe:v=>Buffer.from(v).toString('base64url'),formatDate:(date,zone,format)=>{
      assert.equal(zone,'Asia/Bangkok');const iso=new Date(date.getTime()+7*3600000).toISOString();return format==='yyyy-MM-dd'?iso.slice(0,10):iso.slice(8,10)+'/'+iso.slice(5,7)+'/'+iso.slice(0,4)+' '+iso.slice(11,19);
    }},
    MailApp:{getRemainingDailyQuota:()=>options.quota??100,sendEmail:m=>{mail.push(m);if(options.sendFail)throw new Error('timeout');}},
    ScriptApp:{getService:()=>({getUrl:()=> 'https://script.google.com/macros/s/example/exec'})}
  });
  let config=fs.readFileSync(path.join(__dirname,'Config.gs'),'utf8');if(!options.testMode)config=config.replace('testMode: true','testMode: false');
  vm.runInContext(config,ctx);vm.runInContext(fs.readFileSync(path.join(__dirname,'Code.gs'),'utf8'),ctx);
  if(!options.noSetup&&!options.locked)ctx.qciSetup_();
  const invite=props.get('invite:'+EVENT);
  const request=(email=EMAIL,event=EVENT,key=invite)=>ctx.qciRequestCode(event,key,email);
  const code=()=>mail.at(-1).body.match(/: ([A-F0-9]{8})/)[1];
  const verify=(job,value=code(),email=EMAIL,event=EVENT,key=invite)=>ctx.qciVerifyCode(event,key,email,job.challengeId,value);
  return {ctx,cells,props,mail,request,verify,code,advance:ms=>{now+=ms;},setTime:ms=>{now=ms;}};
}
test('accepts unregistered email and records one check-in with Thai time, never plaintext code',()=>{
  const s=setup(),job=s.request(' PERSON@example.com '),code=s.code();
  assert.equal(s.mail[0].to,EMAIL);assert.equal(s.mail[0].cc,undefined);assert.equal(s.mail[0].bcc,undefined);
  assert.equal(s.cells[1][7],'ACTIVE');assert.ok(!JSON.stringify(s.cells).includes(code));
  assert.equal(s.verify(job).checkedInAt,'10/10/2026 14:00:00');assert.equal(s.cells[1][7],'CHECKED_IN');
  assert.throws(()=>s.verify(job),/no longer valid/);assert.throws(()=>s.request(),/checked in/);assert.equal(s.mail.length,1);
});
test('resend cooldown and hourly cap persist, newest code supersedes previous challenge',()=>{
  const s=setup(),first=s.request();assert.throws(()=>s.request(),/60/);s.advance(61000);
  const second=s.request();assert.throws(()=>s.verify(first),/no longer valid/);s.advance(61000);s.request();s.advance(61000);
  assert.throws(()=>s.request(),/3 codes/);assert.equal(s.cells[2][7],'SUPERSEDED');assert.ok(second.challengeId!==first.challengeId);
});
test('expires at ten minutes, wrong attempts lock after five and wrong email/event cannot use code',()=>{
  const s=setup(),job=s.request();assert.throws(()=>s.verify(job,s.code(),'other@example.com'),/invalid|Incorrect/);
  for(let i=0;i<5;i++)assert.throws(()=>s.verify(job,s.code()==='00000000'?'11111111':'00000000'),/Incorrect code|incorrect attempts/);
  assert.equal(s.cells[1][7],'LOCKED');assert.throws(()=>s.verify(job),/no longer valid/);
  const expired=setup(),old=expired.request();expired.advance(600000);assert.throws(()=>expired.verify(old),/expired/);
  assert.equal(expired.cells[1][7],'EXPIRED');
});
test('link capability, day window, quota and sender enforced before mail',()=>{
  const s=setup();assert.throws(()=>s.request(EMAIL,EVENT,'bad'),/link/);assert.throws(()=>s.request('bad'),/email/);
  s.advance(86400000);assert.throws(()=>s.request(),/only available/);assert.equal(s.mail.length,0);
  const noQuota=setup({quota:0});assert.throws(()=>noQuota.request(),/limit/);assert.equal(noQuota.mail.length,0);
  assert.throws(()=>setup({sender:'other@example.com'}),/qiskit.th/);
  const locked=setup({locked:true,noSetup:true});assert.throws(()=>locked.ctx.qciSetup_(),/busy/);
});
test('test mode sends only to organizer and setup is idempotent',()=>{
  const s=setup({testMode:true});assert.throws(()=>s.request(),/Test mode/);
  const before=JSON.stringify([...s.props]);s.ctx.qciSetup_();assert.equal(JSON.stringify([...s.props]),before);
  s.request('qiskit.th@gmail.com');assert.equal(s.mail.length,1);
});
test('uncertain delivery is not retried and does not leave a usable token',()=>{
  const s=setup({sendFail:true});assert.throws(()=>s.request(),/delivery/);assert.equal(s.cells[1][7],'REVIEW');
  assert.throws(()=>s.verify({challengeId:s.cells[1][0]}),/no longer valid/);assert.equal(s.mail.length,1);
});
test('same mailbox may check in once in each separate event with its own invite',()=>{
  const s=setup();s.verify(s.request());const next='online-2026-10-17',invite=s.props.get('invite:'+next);
  assert.throws(()=>s.request(EMAIL,next,s.props.get('invite:'+EVENT)),/link/);
  s.setTime(Date.parse('2026-10-17T07:00:00Z'));const job=s.request(EMAIL,next,invite);s.verify(job,s.code(),EMAIL,next,invite);
  assert.equal(s.cells.filter(r=>r[7]==='CHECKED_IN').length,2);
});
test('administrator functions are private to google.script.run',()=>{
  const code=fs.readFileSync(path.join(__dirname,'Code.gs'),'utf8');
  const names=[...code.matchAll(/^function (\w+)\(/gm)].map(m=>m[1]).filter(n=>!n.endsWith('_'));
  assert.deepEqual(names,['doGet','qciRequestCode','qciVerifyCode']);
});
