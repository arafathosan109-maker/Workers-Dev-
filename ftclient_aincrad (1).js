(function () {
  "use strict";

  if (document.getElementById("shortner-aincrad-root")) return;

  const APP_CSS = "#shortner-aincrad-root{position:fixed;inset:0;z-index:2147483647;overflow:auto;background:linear-gradient(135deg,#eafcff 0%,#f7fbff 45%,#eef0ff 100%)}\n\n*{box-sizing:border-box;-webkit-tap-highlight-color:transparent}\nhtml,body{margin:0;width:100%;height:100%;overflow:hidden;font-family:Inter,system-ui,-apple-system,BlinkMacSystemFont,\"Segoe UI\",sans-serif;color:#17324d}\nbody{background:transparent}\n#water{display:block;position:fixed;inset:0;width:100%;height:100%;z-index:14;pointer-events:none}\n.blob{display:none;position:fixed;border-radius:50%;filter:blur(34px);opacity:.42;pointer-events:none;z-index:1}\n.b1{width:230px;height:230px;background:#59e9ff;top:-80px;left:-60px}\n.b2{width:260px;height:260px;background:#8e83ff;right:-90px;bottom:-80px}\n.b3{width:170px;height:170px;background:#62dfff;left:45%;top:20%;opacity:.22}\n.page{position:absolute;inset:0;z-index:2;display:grid;place-items:center;padding:22px;opacity:0;visibility:hidden;transform:translateY(10px) scale(.985);transition:opacity .18s ease,transform .18s ease,visibility .18s}\n.page.active{opacity:1;visibility:visible;transform:none}\n.card{width:min(430px,100%);padding:30px 24px 22px;border:1px solid rgba(255,255,255,.8);border-radius:30px;background:rgba(255,255,255,.42);box-shadow:0 24px 70px rgba(63,119,155,.18),inset 0 1px 0 rgba(255,255,255,.95);backdrop-filter:blur(22px);-webkit-backdrop-filter:blur(22px);text-align:center;position:relative;overflow:hidden}\n.card:before{content:\"\";position:absolute;left:-30%;top:-65%;width:160%;height:90%;background:linear-gradient(115deg,transparent 30%,rgba(255,255,255,.5) 48%,transparent 63%);transform:rotate(-8deg);pointer-events:none}\n.logo{width:74px;height:74px;margin:0 auto 13px;filter:drop-shadow(0 10px 15px rgba(36,171,214,.22))}\nh1{font-size:30px;letter-spacing:5px;margin:0;font-weight:800}\n.sub{margin:6px 0 19px;font-size:11px;letter-spacing:3px;color:#5f7d91;font-weight:700}\n.status{display:inline-flex;align-items:center;gap:7px;padding:7px 11px;border-radius:99px;background:rgba(255,255,255,.55);font-size:10px;font-weight:800;letter-spacing:1.4px;color:#477086;margin-bottom:19px}\n.dot{width:7px;height:7px;border-radius:50%;background:#19d69b;box-shadow:0 0 0 5px rgba(25,214,155,.12)}\n.field{width:100%;height:54px;border:1px solid rgba(117,164,185,.25);border-radius:17px;background:rgba(255,255,255,.57);outline:none;padding:0 16px;text-align:center;font-size:16px;letter-spacing:2px;color:#17324d;box-shadow:inset 0 1px 2px rgba(40,100,130,.06)}\n.field:focus{border-color:rgba(46,197,231,.65);box-shadow:0 0 0 4px rgba(52,207,235,.1)}\nbutton{width:100%;height:52px;border:0;border-radius:17px;margin-top:12px;color:white;font-weight:800;letter-spacing:1.7px;font-size:12px;cursor:pointer;box-shadow:0 13px 27px rgba(62,128,184,.22);position:relative;overflow:hidden;transition:transform .12s ease}\n.primary{background:linear-gradient(100deg,#18cfe8,#477cf6,#895cf4);background-size:180% 100%}\n@keyframes grad{to{background-position:180% 0}}\n.primary.animating{animation:grad .55s ease-in-out 1}\n.secondary{background:rgba(255,255,255,.58);color:#46728b;border:1px solid rgba(104,160,185,.2);box-shadow:none}\nbutton:active{transform:scale(.985)}\n.hint{font-size:10px;color:#7892a3;margin:12px 0 0}\n.footer{font-size:9px;letter-spacing:2px;color:#7d98a8;margin-top:20px}\n.notice-wrap{position:fixed;right:14px;top:14px;z-index:20;pointer-events:none}\n.notice{width:min(310px,calc(100vw - 28px));padding:14px 16px;border-radius:18px;background:rgba(255,255,255,.72);border:1px solid rgba(255,255,255,.9);box-shadow:0 18px 45px rgba(46,101,132,.2);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);transform:translateY(-24px);opacity:0;transition:transform .16s ease,opacity .16s ease;display:flex;align-items:center;gap:11px}\n.notice.show{transform:translateY(0);opacity:1}\n.notice.hide-down{transform:translateY(38px);opacity:0}\n.nicon{width:31px;height:31px;border-radius:11px;display:grid;place-items:center;background:linear-gradient(135deg,#18d9e8,#6672f6);color:#fff;font-weight:900}\n.ntitle{font-size:12px;font-weight:900;letter-spacing:1.3px}\n.ntext{font-size:10px;color:#6b8596;margin-top:2px}\n.time-inputs{width:100%;display:flex;align-items:center;justify-content:center;gap:10px;margin-top:10px}\n.time-box{width:42%;position:relative}\n.time-box .field{width:100%;padding:0 10px;font-size:20px;font-weight:800;letter-spacing:1px}\n.time-box span{display:block;margin-top:6px;font-size:8px;font-weight:800;letter-spacing:1.5px;color:#7893a2}\n.time-separator{font-size:28px;font-weight:800;color:#66879a;margin-top:-18px}\n.time-box input::-webkit-outer-spin-button,.time-box input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}\n.time-box input[type=number]{appearance:textfield;-moz-appearance:textfield}\n.count-ring{width:190px;height:190px;margin:18px auto;border-radius:50%;padding:8px;overflow:hidden;background:conic-gradient(#18cfe8 0%,#537bf6 0%,rgba(117,164,185,.18) 0%);box-shadow:0 10px 28px rgba(62,128,184,.18);display:grid;place-items:center;transition:background .12s linear}.count-ring-inner{width:100%;height:100%;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.58);border:1px solid rgba(255,255,255,.82);box-shadow:inset 0 2px 8px rgba(40,100,130,.08)}.count{font-size:0;width:0;height:0;overflow:hidden;font-weight:850;letter-spacing:3px;line-height:1;margin:18px 0;color:#23425b;text-shadow:0 7px 20px rgba(68,132,164,.13)}\n.small-label{font-size:10px;letter-spacing:2px;color:#7893a2;font-weight:800}\n.progress-shell{margin-top:30px;width:100%;height:38px;border-radius:99px;padding:5px;background:rgba(255,255,255,.55);border:1px solid rgba(255,255,255,.82);box-shadow:inset 0 2px 7px rgba(40,100,130,.08)}\n.progress{height:100%;width:0%;border-radius:99px;position:relative;overflow:hidden;background:linear-gradient(90deg,#1bd6e9,#5879f5,#875df3);transition:width .12s linear}\n.progress:after{content:\"\";position:absolute;inset:0;background:linear-gradient(110deg,transparent,rgba(255,255,255,.55),transparent);animation:shine 1.2s linear infinite}\n@keyframes shine{from{transform:translateX(-100%)}to{transform:translateX(100%)}}\n.progress-text{margin-top:9px;font-size:10px;font-weight:900;letter-spacing:1.8px;color:#5e7d90}\n.process-messages{position:fixed;right:14px;top:14px;z-index:21;width:min(310px,calc(100vw - 28px));display:flex;flex-direction:column;align-items:flex-end;pointer-events:none}.process-msg{width:100%;padding:14px 16px;border-radius:18px;background:rgba(255,255,255,.72);border:1px solid rgba(255,255,255,.9);box-shadow:0 18px 45px rgba(46,101,132,.2);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);text-align:left;font-size:10px;font-weight:900;letter-spacing:1.3px;color:#52758b;opacity:0;transform:translateY(-24px) scale(.97)}.process-msg.show{animation:processIn .16s ease forwards}.process-msg.leaving{animation:processOut .24s ease forwards}@keyframes processIn{to{opacity:1;transform:translateY(0) scale(1)}}@keyframes processOut{to{opacity:0;transform:translateY(38px) scale(.96)}}@media(max-width:480px){.process-messages{top:10px;right:10px;width:min(310px,calc(100vw - 20px))}}\n.ripple{position:fixed;z-index:15;width:18px;height:18px;border-radius:50%;pointer-events:none;border:2px solid rgba(55,204,232,.62);box-shadow:0 0 0 1px rgba(255,255,255,.18),inset 0 0 8px rgba(55,204,232,.12);transform:translate(-50%,-50%) scale(.35);animation:ripple .72s cubic-bezier(.15,.7,.2,1) forwards}.ripple:after{content:"";position:absolute;inset:4px;border-radius:50%;border:1px solid rgba(83,123,246,.34)}\n.drop{position:fixed;z-index:15;width:5px;height:5px;border-radius:50%;background:rgba(64,195,230,.6);box-shadow:0 1px 4px rgba(55,204,232,.2);pointer-events:none;animation:drop .52s ease-out forwards}\n@keyframes ripple{0%{opacity:.82;transform:translate(-50%,-50%) scale(.35)}55%{opacity:.42}100%{opacity:0;transform:translate(-50%,-50%) scale(9)}}\n@keyframes drop{to{opacity:0;transform:translate(var(--dx),var(--dy)) scale(.2)}}\n@media(max-width:480px){.card{padding:27px 19px 20px;border-radius:27px}h1{font-size:27px}.notice-wrap{top:10px;right:10px}}\n";
  const APP_MARKUP = "<canvas id=\"water\"></canvas>\n<div class=\"blob b1\"></div>\n<div class=\"blob b2\"></div>\n<div class=\"blob b3\"></div>\n\n<div class=\"notice-wrap\">\n  <div id=\"notice\" class=\"notice\">\n    <div id=\"nicon\" class=\"nicon\">✓</div>\n    <div>\n      <div id=\"ntitle\" class=\"ntitle\">KEY VERIFIED</div>\n      <div id=\"ntext\" class=\"ntext\">Access confirmed</div>\n    </div>\n  </div>\n</div>\n\n<section id=\"accessPage\" class=\"page active\">\n  <div class=\"card\">\n    <svg class=\"logo\" viewBox=\"0 0 100 100\">\n      <defs><linearGradient id=\"lg\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop stop-color=\"#17d9eb\"/><stop offset=\".55\" stop-color=\"#537bf6\"/><stop offset=\"1\" stop-color=\"#8a5cf3\"/></linearGradient></defs>\n      <path fill=\"url(#lg)\" d=\"M50 5C50 5 17 42 17 63C17 83 32 95 50 95S83 83 83 63C83 42 50 5 50 5Z\"/>\n      <path fill=\"none\" stroke=\"white\" stroke-width=\"5\" stroke-linecap=\"round\" d=\"M27 66c8-7 16 7 24 0s16-7 22 0\"/>\n    </svg>\n    <h1>SHORTNER</h1>\n    <div class=\"sub\">SECURE ACCESS</div>\n    <div class=\"status\"><span class=\"dot\"></span>ONLINE SYSTEM</div>\n    <input id=\"license\" class=\"field\" autocomplete=\"off\" spellcheck=\"false\" placeholder=\"ENTER LICENSE KEY\">\n    <button id=\"verify\" class=\"primary\">VERIFY ACCESS</button>\n    <button id=\"community\" class=\"secondary\">JOIN COMMUNITY</button>\n    <div class=\"hint\">Secure liquid gateway • Ready</div>\n    <div class=\"footer\">SHORTNER TEAM • BUILD 3.1.0</div>\n  </div>\n</section>\n\n<section id=\"timePage\" class=\"page\">\n  <div class=\"card\">\n    <svg class=\"logo\" viewBox=\"0 0 100 100\">\n      <defs><linearGradient id=\"lg2\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop stop-color=\"#17d9eb\"/><stop offset=\".55\" stop-color=\"#537bf6\"/><stop offset=\"1\" stop-color=\"#8a5cf3\"/></linearGradient></defs>\n      <path fill=\"url(#lg2)\" d=\"M50 5C50 5 17 42 17 63C17 83 32 95 50 95S83 83 83 63C83 42 50 5 50 5Z\"/>\n      <path fill=\"none\" stroke=\"white\" stroke-width=\"5\" stroke-linecap=\"round\" d=\"M27 66c8-7 16 7 24 0s16-7 22 0\"/>\n    </svg>\n    <h1>SHORTNER</h1>\n    <div class=\"sub\">TARGET TIMER</div>\n    <div class=\"status\"><span class=\"dot\"></span>TARGET DETECTED</div>\n    <div class=\"small-label\">SET DURATION</div>\n\n    <div class=\"time-inputs\">\n      <div class=\"time-box\">\n        <input id=\"minutes\" class=\"field\" type=\"number\" min=\"0\" max=\"999\" value=\"\" placeholder=\"00\">\n        <span>MIN</span>\n      </div>\n      <div class=\"time-separator\">:</div>\n      <div class=\"time-box\">\n        <input id=\"seconds\" class=\"field\" type=\"number\" min=\"0\" max=\"999999\" value=\"\" placeholder=\"00\">\n        <span>SEC</span>\n      </div>\n    </div>\n\n    <button id=\"start\" class=\"primary\">START</button>\n    <button id=\"back\" class=\"secondary\">BACK</button>\n    <div class=\"footer\">SHORTNER TEAM • BUILD 3.1.0</div>\n  </div>\n</section>\n\n<div id=\"processMessages\" class=\"process-messages\"></div>\n\n<section id=\"countPage\" class=\"page\">\n  <div class=\"card\">\n    <svg class=\"logo\" viewBox=\"0 0 100 100\">\n      <defs><linearGradient id=\"lg3\" x1=\"0\" y1=\"0\" x2=\"1\" y2=\"1\"><stop stop-color=\"#17d9eb\"/><stop offset=\".55\" stop-color=\"#537bf6\"/><stop offset=\"1\" stop-color=\"#8a5cf3\"/></linearGradient></defs>\n      <path fill=\"url(#lg3)\" d=\"M50 5C50 5 17 42 17 63C17 83 32 95 50 95S83 83 83 63C83 42 50 5 50 5Z\"/>\n      <path fill=\"none\" stroke=\"white\" stroke-width=\"5\" stroke-linecap=\"round\" d=\"M27 66c8-7 16 7 24 0s16-7 22 0\"/>\n    </svg>\n    <h1>SHORTNER</h1>\n    <div class=\"sub\">PROCESSING</div>\n    <div id=\"countRing\" class=\"count-ring\" style=\"--ring-progress:0%\">\n      <div class=\"count-ring-inner\"><div id=\"count\" class=\"count\">00:00</div></div>\n    </div>\n    <div class=\"small-label\">ACTIVE PROCESS</div>\n    <div class=\"progress-shell\"><div id=\"progress\" class=\"progress\"></div></div>\n    <div id=\"progressText\" class=\"progress-text\">PROCESSING 0%</div>\n    <button id=\"reset\" class=\"secondary\">RESET</button>\n    <div class=\"footer\">SHORTNER TEAM • BUILD 3.1.0</div>\n  </div>\n</section>";

  const style = document.createElement("style");
  style.id = "shortner-aincrad-styles";
  style.textContent = APP_CSS;
  (document.head || document.documentElement).appendChild(style);

  const root = document.createElement("div");
  root.id = "shortner-aincrad-root";
  root.innerHTML = APP_MARKUP;
  (document.body || document.documentElement).appendChild(root);

  // Application logic from the supplied Liquid Access UI.
  "use strict";
  
  const LICENSE_API_URL = "https://licensedevices.akhildotto338.workers.dev/api/trpc/license.validate";
  const SCRIPT_NAME = "AINCRAD";
  const DEVICE_STORAGE_KEY = "aincrad_device_id";
  const SUPPORTED_DOMAINS = ["tarviral.com", "rodaemotor.com", "donpviral.xyz"];
  
  const canvas = document.getElementById("water");
  const ctx = canvas.getContext("2d", {alpha:true});
  let W=0,H=0,dpr=1;
  function resize(){
    dpr=Math.min(devicePixelRatio||1,1.5);
    W=innerWidth; H=innerHeight;
    canvas.width=W*dpr; canvas.height=H*dpr;
    canvas.style.width=W+"px"; canvas.style.height=H+"px";
    ctx.setTransform(dpr,0,0,dpr,0,0);
  }
  addEventListener("resize",resize,{passive:true});
  resize();
  let t=0;
  function drawWater(){
    t+=0.012;
    ctx.clearRect(0,0,W,H);
    ctx.lineWidth=1;
    ctx.strokeStyle="rgba(55,190,220,.10)";
    const gap=48;
    for(let y=-gap;y<H+gap;y+=gap){
      ctx.beginPath();
      for(let x=-20;x<=W+20;x+=20){
        const yy=y+Math.sin(x*.012+t+y*.018)*4;
        if(x===-20)ctx.moveTo(x,yy);else ctx.lineTo(x,yy);
      }
      ctx.stroke();
    }
    requestAnimationFrame(drawWater);
  }
  drawWater();
  
  const notice=document.getElementById("notice");
  const ntitle=document.getElementById("ntitle");
  const ntext=document.getElementById("ntext");
  const nicon=document.getElementById("nicon");
  let noticeTimer;
  function showNotice(title,text,icon="✓",ms=900){
    clearTimeout(noticeTimer);
    notice.classList.remove("hide-down");
    ntitle.textContent=title;
    ntext.textContent=text;
    nicon.textContent=icon;
    notice.classList.add("show");
    noticeTimer=setTimeout(()=>{
      notice.classList.add("hide-down");
      setTimeout(()=>notice.classList.remove("show","hide-down"),170);
    },ms);
  }
  function page(id){
    document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
    requestAnimationFrame(()=>document.getElementById(id).classList.add("active"));
  }
  
  function getDeviceId(){
    let id=localStorage.getItem(DEVICE_STORAGE_KEY);
    if(!id){
      const seed=[screen.width+"x"+screen.height,screen.colorDepth,Intl.DateTimeFormat().resolvedOptions().timeZone,navigator.language,navigator.userAgent,navigator.hardwareConcurrency||"na",Date.now(),Math.random()].join("###");
      id="WEB_"+Array.from(new TextEncoder().encode(seed)).map(b=>b.toString(16).padStart(2,"0")).join("").slice(0,64);
      localStorage.setItem(DEVICE_STORAGE_KEY,id);
    }
    return id;
  }
  
  async function verifyLicense(licenseKey){
    try{
      const response=await fetch(LICENSE_API_URL,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({licenseKey,hwid:getDeviceId(),scriptName:SCRIPT_NAME})});
      const responseJson=await response.json();
      const data=responseJson?.result?.data;
      if(!data)return {allowed:false,message:"Invalid server response"};
      if(data.allowed)return {allowed:true,data};
      return {allowed:false,reason:data.reason,message:data.message||"License access denied"};
    }catch(error){
      return {allowed:false,message:"Network error: "+(error.message||"Unable to connect")};
    }
  }
  
  function targetSequence(){
    showNotice("KEY VERIFIED","Access confirmed","✓",420);
    setTimeout(()=>{
      showNotice("TARGET DETECTED","Destination is ready","≈",520);
      setTimeout(()=>page("timePage"),150);
    },390);
  }
  
  document.getElementById("verify").addEventListener("click",async()=>{
    const btn=document.getElementById("verify");
    const key=document.getElementById("license").value.trim();
    btn.classList.remove("animating");
    void btn.offsetWidth;
    btn.classList.add("animating");
    setTimeout(()=>btn.classList.remove("animating"),600);
    if(!key){showNotice("ENTER LICENSE","Please enter a key","!",700);return;}
    btn.disabled=true;
    btn.textContent="VERIFYING...";
    const result=await verifyLicense(key);
    if(result.allowed){
      btn.textContent="VERIFIED";
      showNotice("KEY VERIFIED",result.data?.message||"Access confirmed","✓",800);
      setTimeout(()=>{btn.disabled=false;btn.textContent="VERIFY ACCESS";targetSequence();},850);
    }else{
      const reason=result.reason?"Reason: "+result.reason:"";
      showNotice("ACCESS DENIED",(result.message||"License validation failed")+(reason?" • "+reason:""),"!",2400);
      btn.disabled=false;
      btn.textContent="VERIFY ACCESS";
    }
  });
  document.getElementById("license").addEventListener("keydown",e=>{if(e.key==="Enter")document.getElementById("verify").click();});
  document.getElementById("community").addEventListener("click",()=>{location.href="https://t.me/+Qjrl3DUTGVU2MWZl";});
  
  const minutesInput=document.getElementById("minutes");
  const secondsInput=document.getElementById("seconds");
  function getDuration(){
    let minutes=parseInt(minutesInput.value,10)||0;
    let seconds=parseInt(secondsInput.value,10)||0;
    minutes+=Math.floor(seconds/60);
    seconds=seconds%60;
    minutesInput.value=minutes;
    secondsInput.value=String(seconds).padStart(2,"0");
    return minutes*60+seconds;
  }
  let timerId=0,endAt=0,totalSec=60;
  function fmt(sec){
    sec=Math.max(0,Math.ceil(sec));
    const minutes=Math.floor(sec/60),seconds=sec%60;
    return String(minutes).padStart(2,"0")+":"+String(seconds).padStart(2,"0");
  }
  
  const processMessages=document.getElementById("processMessages");
  let processMessageTimer=0,processMessageRunning=false,processMessageQueue=[],processMessageBusy=false;
  function pumpProcessingMessages(){
    if(!processMessageRunning||processMessageBusy||!processMessageQueue.length)return;
    processMessageBusy=true;
    const text=processMessageQueue.shift();
    const msg=document.createElement("div");
    msg.className="process-msg";
    msg.textContent=text;
    processMessages.appendChild(msg);
    requestAnimationFrame(()=>msg.classList.add("show"));
    processMessageTimer=setTimeout(()=>{
      msg.classList.remove("show");
      msg.classList.add("leaving");
      setTimeout(()=>{
        if(msg.isConnected)msg.remove();
        processMessageBusy=false;
        pumpProcessingMessages();
      },700);
    },1400);
  }
  function showProcessingMessage(text){
    if(!processMessageRunning)return;
    processMessageQueue.push(text);
    pumpProcessingMessages();
  }
  function startProcessingMessages(){stopProcessingMessages();processMessageRunning=true;}
  function stopProcessingMessages(){processMessageRunning=false;clearTimeout(processMessageTimer);processMessageTimer=0;processMessageQueue=[];processMessageBusy=false;processMessages.innerHTML="";}
  function originalLog(icon,text){
    showProcessingMessage(text);
    showNotice(text,"Aincrad process update",icon,950);
  }
  
  let pendingDestination=null;
  let requestFinished=false;
  let timerFinished=false;
  let redirectStarted=false;
  function getCurrentDomain(){
    const host=location.host.toLowerCase();
    return SUPPORTED_DOMAINS.find(d=>host.includes(d))||null;
  }
  function parseDestination(text){
    let dest=null;
    text.trim().split("\n").forEach(line=>{
      try{
        const j=JSON.parse(line);
        dest=j?.json?.[2]?.[0]?.[0]?.destinationLink||j?.json?.[2]?.[0]?.[0]?.url||dest;
      }catch(e){}
    });
    return dest;
  }
  
  async function requestDestination(){
    const domain=getCurrentDomain();
    if(!domain)throw new Error("DOMAIN NOT SUPPORTED: "+location.host);
    originalLog("🛰️","CONNECTING TO "+domain.toUpperCase()+"...");
    originalLog("⏳","Please Wait We Will Feace The Letest Data");
    const proto=location.protocol;
    const sessionRes=await fetch(`${proto}//${domain}/api/session-info`,{credentials:"include"});
    if(!sessionRes.ok)throw new Error("Session request failed with HTTP "+sessionRes.status);
    const sessionData=await sessionRes.json();
    originalLog("✅","Data Found");
    originalLog("📥","Data Collect");
    if(!sessionData.sessionToken)throw new Error("Token Error: sessionToken was not returned");
    originalLog("🛠️","Working");
    originalLog("🔐","TOKEN: "+sessionData.sessionToken.substring(0,15)+"...");
    originalLog("🔗","ESTABLISHING BYPASS TUNNEL...");
    const input=encodeURIComponent(JSON.stringify({"0":{"json":{"token":sessionData.sessionToken,"progress":sessionData.totalStage+1,"stageId":sessionData.stageId}}}));
    originalLog("🧬","INJECTING BYPASS PAYLOAD...");
    const bypassRes=await fetch(`${proto}//${domain}/api/trpc/linkSession.nextStage?batch=1&input=${input}`,{credentials:"include",headers:{"trpc-accept":"application/jsonl","x-trpc-source":"nextjs-react"}});
    if(!bypassRes.ok)throw new Error("Destination request failed with HTTP "+bypassRes.status);
    originalLog("📦","PARSING RESPONSE HEADERS...");
    const dest=parseDestination(await bypassRes.text());
    if(!dest)throw new Error("Destination link was not found in the server response");
    originalLog("🎯","REDIRECT TARGET: "+dest.substring(0,40)+"...");
    originalLog("🔑","TOKEN ON: "+dest);
    [
      ["🛡️","BYPASSING CLOUDFLARE WAF..."],
      ["🧬","DECRYPTING DESTINATION HASH..."],
      ["🛰️","STABILIZING UPLINK..."],
      ["✔️","PAYLOAD VERIFIED & EXECUTED"],
      ["🚀","OPTIMIZING CONNECTION ROUTE..."]
    ].forEach(([i,t],n)=>setTimeout(()=>{if(!redirectStarted)originalLog(i,t);},2000*(n+1)));
    return dest;
  }
  
  function redirectIfReady(){
    if(redirectStarted||!timerFinished||!requestFinished||!pendingDestination)return;
    redirectStarted=true;
    showNotice("PROCESSING COMPLETE","Redirecting to destination","✓",1000);
    setTimeout(()=>{location.href=pendingDestination;},250);
  }
  function updateCountdown(){
    const remain=Math.max(0,endAt-performance.now());
    const left=remain/1000;
    const pct=Math.min(100,Math.max(1,Math.floor((1-left/totalSec)*100)));
    document.getElementById("count").textContent=fmt(left);
    document.getElementById("countRing").style.background=`conic-gradient(#18cfe8 ${pct}%,#5379f5 ${pct}%,rgba(117,164,185,.18) ${pct}%)`;
    document.getElementById("progress").style.width=pct+"%";
    document.getElementById("progressText").textContent="PROCESSING "+pct+"%";
    if(remain>0)timerId=requestAnimationFrame(updateCountdown);
    else{
      document.getElementById("count").textContent="00:00";
      document.getElementById("countRing").style.background="conic-gradient(#18cfe8 100%,#5379f5 100%,rgba(117,164,185,.18) 100%)";
      document.getElementById("progress").style.width="100%";
      document.getElementById("progressText").textContent="PROCESSING 100%";
      timerFinished=true;
      redirectIfReady();
    }
  }
  
  document.getElementById("start").addEventListener("click",async()=>{
    const btn=document.getElementById("start");
    btn.classList.remove("animating");void btn.offsetWidth;btn.classList.add("animating");
    setTimeout(()=>btn.classList.remove("animating"),600);
    const sec=getDuration();
    if(sec<=0){showNotice("INVALID TIME","Enter minutes or seconds","!",900);return;}
    totalSec=sec;endAt=performance.now()+sec*1000;pendingDestination=null;requestFinished=false;timerFinished=false;redirectStarted=false;
    page("countPage");startProcessingMessages();cancelAnimationFrame(timerId);updateCountdown();
    originalLog("⚡","INITIALIZING FT BYPASS CORE...");
    originalLog("📡","TARGET DETECTED: "+location.host.toUpperCase());
    originalLog("🛡️","ANALYZING SECURITY PROTOCOLS...");
    originalLog("🔍","SCANNING FOR API VULNERABILITIES...");
    try{
      pendingDestination=await requestDestination();
      requestFinished=true;
      redirectIfReady();
    }catch(error){
      requestFinished=true;
      cancelAnimationFrame(timerId);
      stopProcessingMessages();
      const reason=error.message||"Unknown error";
      showNotice("PROCESSING ERROR",reason+" • Please try again","!",3500);
      const msg=document.createElement("div");
      msg.className="process-msg show";
      msg.textContent="ERROR: "+reason+" — PLEASE TRY AGAIN";
      processMessages.appendChild(msg);
    }
  });
  document.getElementById("back").addEventListener("click",()=>{stopProcessingMessages();cancelAnimationFrame(timerId);page("accessPage");});
  document.getElementById("reset").addEventListener("click",()=>{stopProcessingMessages();cancelAnimationFrame(timerId);minutesInput.value="";secondsInput.value="";document.getElementById("progress").style.width="0%";document.getElementById("countRing").style.background="conic-gradient(#18cfe8 0%,#5379f5 0%,rgba(117,164,185,.18) 0%)";document.getElementById("progressText").textContent="PROCESSING 0%";document.getElementById("count").textContent="00:00";page("timePage");});
  
  let lastRipple=0;
  function ripple(x,y){
    const now=performance.now();if(now-lastRipple<55)return;lastRipple=now;
    const r=document.createElement("span");r.className="ripple";r.style.left=x+"px";r.style.top=y+"px";document.body.appendChild(r);
    for(let i=0;i<3;i++){
      const d=document.createElement("span");d.className="drop";d.style.left=x+"px";d.style.top=y+"px";
      const angle=Math.random()*Math.PI*2,distance=18+Math.random()*18;
      d.style.setProperty("--dx",Math.cos(angle)*distance+"px");d.style.setProperty("--dy",Math.sin(angle)*distance+"px");
      document.body.appendChild(d);setTimeout(()=>d.remove(),480);
    }
    setTimeout(()=>r.remove(),520);
  }
  addEventListener("pointerdown",e=>ripple(e.clientX,e.clientY),{passive:true});
})();
