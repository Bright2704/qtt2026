// Browser UI test with simulated google.script.run; no Google account or real mail.
const fs=require('node:fs');const path=require('node:path');const assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright');
(async()=>{
  const browser=await chromium.launch({channel:'chrome',headless:true});
  try {
    const page=await browser.newPage({viewport:{width:390,height:844}});
    const errors=[];page.on('pageerror',e=>errors.push(e.message));
    await page.addInitScript(()=>{});
    let html=fs.readFileSync(path.join(__dirname,'Checkin.html'),'utf8')
      .replaceAll('<?= eventLabel ?>','Online Session — 10 October 2026').replaceAll('<?= eventId ?>','online-2026-10-10').replaceAll('<?= invite ?>','preview-only');
    html=html.replace('<script>',`<script>window.calls=[];window.google={script:{get run(){let ok,fail;const rpc={withSuccessHandler(f){ok=f;return rpc},withFailureHandler(f){fail=f;return rpc},qciRequestCode(...args){calls.push(['request',...args]);ok({challengeId:'a'.repeat(32),message:'Code sent. Please check your inbox or spam folder.'})},qciVerifyCode(...args){calls.push(['verify',...args]);if(args[4]!=='1234ABCD')fail({message:'Incorrect code.'});else ok({message:'Check-in successful',checkedInAt:'10/10/2026 14:00:00'})}};return rpc}}};</script><script>`);
    await page.setContent(html);
    assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
    await page.locator('#email').fill('person@example.com');await page.locator('#request').click();
    assert.equal(await page.locator('#verifyForm').isVisible(),true);
    await page.locator('#code').fill('00000000');await page.locator('#verify').click();
    assert.match(await page.locator('#status').textContent(),/Incorrect code/);
    await page.locator('#code').fill('1234ABCD');await page.locator('#verify').click();
    assert.match(await page.locator('#status').textContent(),/Check-in successful/);
    assert.equal(await page.locator('#verifyForm').isVisible(),false);assert.deepEqual(errors,[]);
    if(process.env.CHECKIN_SCREENSHOT)await page.screenshot({path:process.env.CHECKIN_SCREENSHOT,fullPage:true});
    console.log('PASS: mobile layout, request, incorrect code, success, safe text rendering. Mock RPCs only.');
  } finally {await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1});
