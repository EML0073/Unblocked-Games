(function () {
  'use strict';
  if (window.__ugSettingsReady) return;
  window.__ugSettingsReady = true;
  const get = (key, fallback) => { try { return localStorage.getItem(key) || fallback; } catch (_) { return fallback; } };
  const save = (key, value) => { try { localStorage.setItem(key, value); } catch (_) {} };
  const flags = { en: 'argazkik/flag-en.svg', es: 'argazkik/1312.webp', eu: 'argazkik/ikurriña.svg' };
  const names = { en: 'English', es: 'Español', eu: 'Euskara' };
  let theme = get('unblockedgames-theme', 'dark');
  let accent = get('unblockedgames-accent', '#e50914');
  let language = get('unblockedgames-language', 'en');
  const originalTextNodes = new WeakMap();
  if (!/^#[0-9a-f]{6}$/i.test(accent)) accent = '#e50914';
  if (!flags[language]) language = 'en';

  function start() {
    if (!document.body || document.getElementById('ug-settings-trigger')) return;
    const style = document.createElement('style');
    style.textContent = `
      #ug-settings-trigger{position:fixed!important;top:16px!important;right:16px!important;z-index:2147483647!important;width:44px!important;height:44px!important;display:flex!important;align-items:center!important;justify-content:center!important;padding:0!important;border:1px solid #777!important;border-radius:50%!important;background:#242424!important;box-shadow:0 3px 14px #0006!important;cursor:pointer!important;opacity:1!important;visibility:visible!important}
      #ug-settings-trigger img{display:block!important;width:20px!important;height:20px!important;object-fit:contain!important;filter:brightness(0) invert(1)!important}
      #ug-settings-panel{position:fixed!important;top:70px!important;right:16px!important;z-index:2147483646!important;width:min(320px,calc(100vw - 32px))!important;max-height:calc(100vh - 82px)!important;overflow-y:auto!important;padding:16px!important;border:1px solid #555!important;border-radius:12px!important;background:#202020!important;color:#fff!important;box-shadow:0 8px 28px #0007!important;font:14px/1.5 Arial,sans-serif!important}
      #ug-settings-panel[hidden]{display:none!important}
      #ug-settings-panel button,#ug-settings-panel input{box-sizing:border-box}
      button:not(#ug-settings-trigger){border-radius:11px;transition:background .18s ease,color .18s ease,border-color .18s ease,box-shadow .18s ease,transform .18s ease}
      button:not(#ug-settings-trigger):hover{transform:translateY(-1px);box-shadow:0 5px 14px #0003}
      button:not(#ug-settings-trigger):active{transform:scale(.97)}
      .ug-control{width:100%;min-height:40px;margin-top:6px;padding:9px 11px;border:1px solid #555;border-radius:11px;background:#303030;color:#fff;text-align:left;cursor:pointer}
      .ug-flag{width:23px;height:15px;object-fit:cover;vertical-align:middle;margin-right:8px}
      #ug-accent-picker{width:100%;height:40px;margin-top:6px;border:1px solid #555;border-radius:7px;background:#303030}
      .ug-beta{display:inline-block;margin-left:6px;padding:1px 6px;border-radius:6px;background:#5b3b91;color:#fff;font-size:10px;font-weight:700;vertical-align:middle}
      #ug-wallpaper-open{position:relative!important;margin-top:22px!important}\n      #ug-wallpaper-open::before{content:"";position:absolute;left:0;right:0;top:-12px;height:1px;background:#555}\n      body[data-ug-theme="light"] #ug-wallpaper-open::before{background:#d5d9e0}\n      .ug-wallpaper-launch{display:flex;align-items:center;justify-content:space-between;gap:10px}
      #ug-wallpaper-overlay{position:fixed;inset:0;z-index:2147483645;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(0,0,0,.62);backdrop-filter:blur(3px)}
      #ug-wallpaper-overlay[hidden]{display:none!important}
      #ug-wallpaper-modal{width:min(520px,100%);max-height:min(86vh,760px);overflow-y:auto;padding:20px;border:1px solid #555;border-radius:18px;background:#202020;color:#fff;box-shadow:0 20px 70px #0009;font:14px/1.5 Arial,sans-serif}
      .ug-wallpaper-modal-head{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-bottom:12px}
      .ug-wallpaper-modal-head strong{font-size:18px}
      #ug-wallpaper-close{width:34px;height:34px;border:1px solid #555;border-radius:50%;background:#303030;color:#fff;font-size:20px;cursor:pointer}
      .ug-wallpaper-box label{display:block;margin:9px 0 4px}
      .ug-wallpaper-box input[type="url"]{width:100%;padding:9px;border:1px solid #555;background:#303030;color:#fff;border-radius:9px}
      .ug-wallpaper-box input[type="file"]{width:100%;font-size:12px;margin-top:5px;color:#ddd}
      .ug-wallpaper-box input[type="range"]{width:100%;accent-color:var(--ug-accent)}
      .ug-wallpaper-row{display:flex;gap:7px;margin-top:7px}
      .ug-wallpaper-row button{flex:1}
      .ug-wallpaper-crop-stage{position:relative;margin:14px auto 8px;width:100%;display:flex;justify-content:center;padding:0 8px}
      .ug-wallpaper-preview{position:relative;width:min(100%,360px);max-height:320px;margin:0 auto;overflow:hidden;border:2px solid var(--ug-accent,#7c5cff);border-radius:12px;background:#111;touch-action:none;box-shadow:0 0 0 5px color-mix(in srgb,var(--ug-accent,#7c5cff) 17%,transparent),0 10px 28px #0005}
      .ug-wallpaper-preview[data-mode="scroll"]{aspect-ratio:3/4;width:min(100%,240px);height:auto}
      .ug-wallpaper-preview[data-mode="fixed"]{aspect-ratio:16/9;width:min(100%,420px);height:auto}
      .ug-wallpaper-preview img{position:absolute;max-width:none;max-height:none;width:auto;height:auto;object-fit:fill;user-select:none;-webkit-user-drag:none;pointer-events:none}
      .ug-crop-grid{position:absolute;inset:0;pointer-events:none;background:linear-gradient(to right,transparent 33.15%,#fff8 33.33%,transparent 33.55%,transparent 66.45%,#fff8 66.66%,transparent 66.85%),linear-gradient(to bottom,transparent 33.15%,#fff8 33.33%,transparent 33.55%,transparent 66.45%,#fff8 66.66%,transparent 66.85%);box-shadow:inset 0 0 0 1px #fff9}
      .ug-crop-ratio{position:absolute;top:9px;left:9px;padding:4px 8px;border-radius:6px;background:#101318d9;color:#fff;font-size:10px;font-weight:800;letter-spacing:.08em;text-shadow:0 1px 2px #000}
      .ug-crop-corner{position:absolute;width:18px;height:18px;border-color:#fff;border-style:solid;filter:drop-shadow(0 1px 2px #000)}
      .ug-crop-tl{top:0;left:0;border-width:3px 0 0 3px}.ug-crop-tr{top:0;right:0;border-width:3px 3px 0 0}.ug-crop-bl{bottom:0;left:0;border-width:0 0 3px 3px}.ug-crop-br{bottom:0;right:0;border-width:0 3px 3px 0}
      .ug-wallpaper-help{font-size:11px;color:#bbb;margin-top:5px;line-height:1.4}
      .ug-wallpaper-error{font-size:11px;color:#ff9b9b;margin-top:6px}
      body[data-ug-theme="light"] #ug-wallpaper-modal{background:#fff;color:#202124;border-color:#d5d9e0}
      body[data-ug-theme="light"] #ug-wallpaper-close{background:#f1f3f6;color:#202124;border-color:#d5d9e0}
      body[data-ug-theme="light"] .ug-wallpaper-box input[type="url"]{background:#f7f8fa;color:#202124;border-color:#cbd1da}
      body[data-ug-theme="light"] .ug-wallpaper-box input[type="file"]{color:#444}
      body[data-ug-theme="light"] .ug-wallpaper-help{color:#626875}
      #ug-feedback-overlay{position:fixed;inset:0;z-index:2147483645;display:flex;align-items:center;justify-content:center;padding:20px;background:rgba(0,0,0,.62);backdrop-filter:blur(3px)}
      #ug-feedback-overlay[hidden]{display:none!important}
      #ug-feedback-modal{width:min(560px,100%);max-height:min(88vh,780px);overflow-y:auto;padding:20px;border:1px solid #555;border-radius:18px;background:#202020;color:#fff;box-shadow:0 20px 70px #0009;font:14px/1.5 Arial,sans-serif}
      .ug-feedback-tabs{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:7px;margin:12px 0 16px}
      .ug-feedback-tabs button{min-width:0;padding:9px 5px;border:1px solid #555;border-radius:9px;background:#303030;color:inherit;cursor:pointer;font-size:12px}
      .ug-feedback-tabs button[aria-selected="true"]{border-color:var(--ug-accent);background:var(--ug-accent);color:#fff}
      .ug-feedback-form label{display:block;margin:10px 0 4px}
      .ug-feedback-form input,.ug-feedback-form select,.ug-feedback-form textarea{box-sizing:border-box;width:100%;padding:10px;border:1px solid #555;border-radius:9px;background:#303030;color:inherit;font:inherit}
      .ug-feedback-form textarea{min-height:120px;resize:vertical}
      .ug-feedback-form .ug-feedback-help{margin-top:4px;color:#aaa;font-size:11px}
      .ug-feedback-actions{display:flex;justify-content:flex-end;gap:8px;margin-top:16px}
      .ug-feedback-actions button{min-width:95px}
      #ug-feedback-status{min-height:18px;margin-top:8px;font-size:12px;color:#ffaaaa}
      body[data-ug-theme="light"] #ug-feedback-modal{background:#fff;color:#202124;border-color:#d5d9e0}
      body[data-ug-theme="light"] .ug-feedback-tabs button,body[data-ug-theme="light"] .ug-feedback-form input,body[data-ug-theme="light"] .ug-feedback-form select,body[data-ug-theme="light"] .ug-feedback-form textarea{background:#f7f8fa;color:#202124;border-color:#cbd1da}
      body[data-ug-theme="light"] .ug-feedback-tabs button[aria-selected="true"]{background:var(--ug-accent);color:#fff;border-color:var(--ug-accent)}
      body[data-ug-theme="light"] .ug-feedback-form .ug-feedback-help{color:#626875}
      body[data-ug-theme="light"] #ug-feedback-status{color:#b42318}
      #ug-feedback-close{width:34px;height:34px;border:1px solid #555;border-radius:50%;background:#303030;color:inherit;font-size:20px;cursor:pointer}
      #ug-feedback-open{position:relative!important;margin-top:8px!important}
      @media(max-width:440px){.ug-feedback-tabs button{font-size:11px;padding:8px 3px}#ug-feedback-modal{padding:15px}}
      @media(max-width:520px){#ug-settings-trigger{top:10px!important;right:10px!important}#ug-settings-panel{top:62px!important;right:10px!important}}
    `;
    document.head.appendChild(style);
    const button = document.createElement('button');
    button.id = 'ug-settings-trigger'; button.type = 'button'; button.title = 'Settings'; button.setAttribute('aria-label','Open settings'); button.setAttribute('aria-expanded','false');
    button.innerHTML = '<img src="argazkik/ezarpenak.png" alt="">';
    button.querySelector('img').addEventListener('error', function(){ button.textContent='⚙'; button.style.color='#fff'; button.style.font='24px Arial,sans-serif'; });
    const panel = document.createElement('section');
    panel.id = 'ug-settings-panel'; panel.hidden = true;
    panel.innerHTML = '<strong style="display:block;font-size:16px;margin-bottom:12px">Settings</strong><label for="ug-theme-toggle">Appearance</label><button class="ug-control" id="ug-theme-toggle" type="button">Switch to light mode</button><label for="ug-accent-picker" style="display:block;margin-top:12px">Accent color</label><input id="ug-accent-picker" type="color"><label style="display:block;margin-top:12px">Language</label><div id="ug-language-options"><button class="ug-control" data-lang="eu"><img class="ug-flag" src="argazkik/ikurriña.svg" alt="">Euskara</button><button class="ug-control" data-lang="en"><img class="ug-flag" src="argazkik/flag-en.svg" alt="">English</button><button class="ug-control" data-lang="es"><img class="ug-flag" src="argazkik/1312.webp" alt="">Español</button></div>';
    panel.innerHTML += '<button class="ug-control ug-wallpaper-launch" id="ug-wallpaper-open" type="button"><span>Wallpaper</span><span class="ug-beta">BETA</span></button>';
    panel.innerHTML += '<button class="ug-control" id="ug-feedback-open" type="button">Suggest a game / Feedback / Bugs</button>';
    const feedbackOverlay=document.createElement('div');
    feedbackOverlay.id='ug-feedback-overlay'; feedbackOverlay.hidden=true;
    feedbackOverlay.innerHTML=`
      <section id="ug-feedback-modal" role="dialog" aria-modal="true" aria-labelledby="ug-feedback-title">
        <div class="ug-wallpaper-modal-head"><strong id="ug-feedback-title">Suggest a game / Feedback / Bugs</strong><button id="ug-feedback-close" type="button" aria-label="Close">×</button></div>
        <div class="ug-feedback-tabs" role="tablist" aria-label="Submission type">
          <button type="button" data-feedback-tab="suggestion" role="tab" aria-selected="true">Suggest a game</button>
          <button type="button" data-feedback-tab="feedback" role="tab" aria-selected="false">Feedback</button>
          <button type="button" data-feedback-tab="bug" role="tab" aria-selected="false">Report a bug</button>
        </div>
        <form class="ug-feedback-form" id="ug-suggestion-form" data-feedback-form="suggestion">
          <label for="ug-suggestion-title">Game title *</label><input id="ug-suggestion-title" name="title" type="text" maxlength="160" required>
          <label for="ug-suggestion-raw">Raw URL</label><input id="ug-suggestion-raw" name="rawUrl" type="url" placeholder="https://...">
          <label for="ug-suggestion-image">Image URL</label><input id="ug-suggestion-image" name="image" type="url" placeholder="https://...">
          <label for="ug-suggestion-genre">Genre</label><input id="ug-suggestion-genre" name="genre" type="text" placeholder="e.g. Action, Puzzle, Racing">
          <label for="ug-suggestion-notes">Additional details</label><textarea id="ug-suggestion-notes" name="details" maxlength="3000"></textarea>
          <div class="ug-feedback-help">Only the game title is required.</div>
          <div class="ug-feedback-actions"><button class="ug-control" type="button" data-feedback-cancel>Cancel</button><button class="ug-control" type="submit">Send</button></div>
        </form>
        <form class="ug-feedback-form" id="ug-feedback-form" data-feedback-form="feedback" hidden>
          <label for="ug-feedback-message">Your feedback</label><textarea id="ug-feedback-message" name="message" maxlength="3000" required placeholder="Write your feedback..."></textarea>
          <div class="ug-feedback-actions"><button class="ug-control" type="button" data-feedback-cancel>Cancel</button><button class="ug-control" type="submit">Send</button></div>
        </form>
        <form class="ug-feedback-form" id="ug-bug-form" data-feedback-form="bug" hidden>
          <label for="ug-bug-type">Type of error</label>
          <select id="ug-bug-type" name="type" class="ug-control">
            <option value="Translation">Translation</option><option value="Game does not work">Game does not work</option>
            <option value="Something does not work">Something does not work</option><option value="Game image is incorrect">A game image is incorrect</option>
            <option value="Something does not look right">Something does not look right</option><option value="General error">General error</option>
            <option value="Other">None of the above</option>
          </select>
          <div id="ug-bug-other-wrap" hidden><label for="ug-bug-other">Specify the error type</label><input id="ug-bug-other" name="otherType" type="text" maxlength="160"></div>
          <label for="ug-bug-message">Describe the error</label><textarea id="ug-bug-message" name="message" maxlength="3000" required placeholder="Describe the error you found..."></textarea>
          <div class="ug-feedback-actions"><button class="ug-control" type="button" data-feedback-cancel>Cancel</button><button class="ug-control" type="submit">Send</button></div>
        </form>
        <div id="ug-feedback-status" role="status" aria-live="polite"></div>
      </section>`;
    const wallpaperOverlay=document.createElement('div');
    wallpaperOverlay.id='ug-wallpaper-overlay'; wallpaperOverlay.hidden=true;
    wallpaperOverlay.innerHTML=`
      <section id="ug-wallpaper-modal" role="dialog" aria-modal="true" aria-labelledby="ug-wallpaper-title">
        <div class="ug-wallpaper-modal-head"><strong id="ug-wallpaper-title">Wallpaper</strong><button id="ug-wallpaper-close" type="button" aria-label="Close">×</button></div>
        <div class="ug-wallpaper-box">
        <label for="ug-wallpaper-file">Upload an image</label>
        <input id="ug-wallpaper-file" type="file" accept="image/*">
        <label for="ug-wallpaper-url">Or paste an image URL</label>
        <input id="ug-wallpaper-url" type="url" placeholder="https://example.com/image.jpg">
        <button class="ug-control" id="ug-wallpaper-url-load" type="button">Load image URL</button>
        <div id="ug-wallpaper-editor" hidden>
          <label for="ug-wallpaper-mode">Background movement</label>
          <select class="ug-control" id="ug-wallpaper-mode">
            <option value="scroll">Moves with the page (vertical crop)</option>
            <option value="fixed">Stays fixed (horizontal crop)</option>
          </select>
          <div class="ug-wallpaper-crop-stage"><div class="ug-wallpaper-preview" id="ug-wallpaper-preview" data-mode="scroll"><img id="ug-wallpaper-image" alt="Wallpaper crop preview"><div class="ug-crop-grid" aria-hidden="true"><i></i><i></i></div><span class="ug-crop-ratio" id="ug-crop-ratio">VERTICAL · 3:4</span><span class="ug-crop-corner ug-crop-tl"></span><span class="ug-crop-corner ug-crop-tr"></span><span class="ug-crop-corner ug-crop-bl"></span><span class="ug-crop-corner ug-crop-br"></span></div></div>
          <div class="ug-wallpaper-help">Drag the image inside the frame. The outlined area is exactly what will be used as your wallpaper.</div>
          <label for="ug-wallpaper-x">Horizontal position</label><input id="ug-wallpaper-x" type="range" min="0" max="100" value="50">
          <label for="ug-wallpaper-y">Vertical position</label><input id="ug-wallpaper-y" type="range" min="0" max="100" value="50">
          <label for="ug-wallpaper-zoom">Zoom</label><input id="ug-wallpaper-zoom" type="range" min="100" max="300" value="100">
          <div class="ug-wallpaper-row"><button class="ug-control" id="ug-wallpaper-apply" type="button">Apply wallpaper</button><button class="ug-control" id="ug-wallpaper-cancel" type="button">Cancel</button></div>
        </div>
        <button class="ug-control" id="ug-wallpaper-remove" type="button">Remove wallpaper</button>
        <div class="ug-wallpaper-error" id="ug-wallpaper-error" role="status" aria-live="polite"></div>
        </div>
      </section>`;
    document.body.appendChild(button); document.body.appendChild(panel); document.body.appendChild(wallpaperOverlay); document.body.appendChild(feedbackOverlay);
    const feedbackModal=feedbackOverlay.querySelector('#ug-feedback-modal');
    const feedbackStatus=feedbackModal.querySelector('#ug-feedback-status');
    const feedbackScriptUrl='https://script.google.com/macros/s/AKfycbyFGqYXjtI_Y5YWV0RFX0zmpvBdoUbldOMO9ULWb3wcKLpgfng8UdEuiBCc1jcqSelFtA/exec';
    function closeFeedbackModal(){feedbackOverlay.hidden=true;feedbackStatus.textContent='';}
    function selectFeedbackTab(name){
      feedbackModal.querySelectorAll('[data-feedback-tab]').forEach(tab=>tab.setAttribute('aria-selected',String(tab.dataset.feedbackTab===name)));
      feedbackModal.querySelectorAll('[data-feedback-form]').forEach(form=>form.hidden=form.dataset.feedbackForm!==name);
      feedbackStatus.textContent='';
    }
    panel.querySelector('#ug-feedback-open').addEventListener('click',()=>{
      panel.hidden=true;button.setAttribute('aria-expanded','false');feedbackOverlay.hidden=false;selectFeedbackTab('suggestion');feedbackModal.querySelector('#ug-suggestion-title').focus();
    });
    feedbackModal.querySelectorAll('[data-feedback-tab]').forEach(tab=>tab.addEventListener('click',()=>selectFeedbackTab(tab.dataset.feedbackTab)));
    feedbackOverlay.addEventListener('click',e=>{if(e.target===feedbackOverlay)closeFeedbackModal();});
    feedbackModal.querySelector('#ug-feedback-close').addEventListener('click',closeFeedbackModal);
    feedbackModal.querySelectorAll('[data-feedback-cancel]').forEach(el=>el.addEventListener('click',closeFeedbackModal));
    feedbackModal.querySelector('#ug-bug-type').addEventListener('change',e=>{
      const other=feedbackModal.querySelector('#ug-bug-other-wrap');other.hidden=e.target.value!=='Other';
      feedbackModal.querySelector('#ug-bug-other').required=e.target.value==='Other';
    });
    feedbackModal.querySelectorAll('[data-feedback-form]').forEach(form=>form.addEventListener('submit',async e=>{
      e.preventDefault();if(!form.reportValidity())return;
      const submit=form.querySelector('button[type="submit"]'),original=submit.textContent;
      let title='',message='';
      if(form.dataset.feedbackForm==='suggestion'){
        const data=new FormData(form);title='Game suggestion: '+String(data.get('title')||'').trim();
        message=['Game title: '+String(data.get('title')||'').trim(),'Raw URL: '+String(data.get('rawUrl')||'').trim(),'Image URL: '+String(data.get('image')||'').trim(),'Genre: '+String(data.get('genre')||'').trim(),'Additional details: '+String(data.get('details')||'').trim()].join('\\n');
      }else if(form.dataset.feedbackForm==='feedback'){
        title='Website feedback';message=String(new FormData(form).get('message')||'').trim();
      }else{
        const data=new FormData(form),type=String(data.get('type')||''),custom=String(data.get('otherType')||'').trim();
        title='Website bug report: '+(type==='Other'?custom:type);
        message='Error type: '+(type==='Other'?custom:type)+'\\nDescription: '+String(data.get('message')||'').trim();
      }
      submit.disabled=true;submit.textContent='Sending...';feedbackStatus.textContent='';
      try{
        await fetch(feedbackScriptUrl,{method:'POST',mode:'no-cors',headers:{'Content-Type':'text/plain;charset=utf-8'},body:JSON.stringify({action:'report',id:'site-feedback',title,message})});
        feedbackStatus.textContent='Submitted. Thank you!';form.reset();
        if(form.dataset.feedbackForm==='bug'){feedbackModal.querySelector('#ug-bug-other-wrap').hidden=true;feedbackModal.querySelector('#ug-bug-other').required=false;}
        setTimeout(closeFeedbackModal,1100);
      }catch(error){console.error('Could not submit site feedback:',error);feedbackStatus.textContent='Could not submit. Please try again later.';}
      finally{submit.disabled=false;submit.textContent=original;}
    }));
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!feedbackOverlay.hidden)closeFeedbackModal();});
    const wallpaperModal=wallpaperOverlay.querySelector('#ug-wallpaper-modal');
    function closeWallpaperModal(){wallpaperOverlay.hidden=true;}
    panel.querySelector('#ug-wallpaper-open').addEventListener('click',()=>{panel.hidden=true;button.setAttribute('aria-expanded','false');wallpaperOverlay.hidden=false;wallpaperModal.querySelector('#ug-wallpaper-file').focus();});
    wallpaperOverlay.addEventListener('click',e=>{if(e.target===wallpaperOverlay)closeWallpaperModal();});
    wallpaperOverlay.querySelector('#ug-wallpaper-close').addEventListener('click',closeWallpaperModal);
    document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!wallpaperOverlay.hidden)closeWallpaperModal();});
    let wallpaperImage = null;
    const wallpaperEditor = wallpaperModal.querySelector('#ug-wallpaper-editor');
    const wallpaperPreview = wallpaperModal.querySelector('#ug-wallpaper-preview');
    const wallpaperPreviewImage = wallpaperModal.querySelector('#ug-wallpaper-image');
    const wallpaperMode = wallpaperModal.querySelector('#ug-wallpaper-mode');
    const wallpaperX = wallpaperModal.querySelector('#ug-wallpaper-x');
    const wallpaperY = wallpaperModal.querySelector('#ug-wallpaper-y');
    const wallpaperZoom = wallpaperModal.querySelector('#ug-wallpaper-zoom');
    const wallpaperError = wallpaperModal.querySelector('#ug-wallpaper-error');
    let dragPoint = null;
    function setWallpaperError(message) { wallpaperError.textContent = message || ''; }
    function refreshWallpaperPreview() {
      if (!wallpaperImage) return;
      const ratio = wallpaperMode.value === 'scroll' ? 3/4 : 16/9;
      wallpaperPreview.dataset.mode = wallpaperMode.value;
      const ratioLabel = wallpaperModal.querySelector('#ug-crop-ratio');
      ratioLabel.textContent = wallpaperMode.value === 'scroll' ? 'VERTICAL · 3:4' : 'HORIZONTAL · 16:9';
      const boxWidth = wallpaperPreview.clientWidth;
      const boxHeight = wallpaperPreview.clientHeight;
      if (!boxWidth || !boxHeight) return;
      const scale = Math.max(boxWidth / wallpaperImage.naturalWidth, boxHeight / wallpaperImage.naturalHeight) * Number(wallpaperZoom.value) / 100;
      const renderedWidth = wallpaperImage.naturalWidth * scale;
      const renderedHeight = wallpaperImage.naturalHeight * scale;
      const left = (boxWidth - renderedWidth) * Number(wallpaperX.value) / 100;
      const top = (boxHeight - renderedHeight) * Number(wallpaperY.value) / 100;
      wallpaperPreviewImage.style.width = renderedWidth + 'px';
      wallpaperPreviewImage.style.height = renderedHeight + 'px';
      wallpaperPreviewImage.style.left = left + 'px';
      wallpaperPreviewImage.style.top = top + 'px';
    }
    function loadWallpaperSource(source, crossOrigin) {
      setWallpaperError('');
      const image = new Image();
      if (crossOrigin) image.crossOrigin = 'anonymous';
      image.onload = function() {
        wallpaperImage = image;
        wallpaperPreviewImage.src = source;
        wallpaperEditor.hidden = false;
        wallpaperX.value = 50; wallpaperY.value = 50; wallpaperZoom.value = 100;
        refreshWallpaperPreview();
        requestAnimationFrame(refreshWallpaperPreview);
      };
      image.onerror = function() {
        setWallpaperError('Could not load this image. Check the URL or choose another image.');
      };
      image.src = source;
    }
    wallpaperModal.querySelector('#ug-wallpaper-file').addEventListener('change', function(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      if (!file.type.startsWith('image/')) { setWallpaperError('Please choose an image file.'); return; }
      const reader = new FileReader();
      reader.onload = () => loadWallpaperSource(reader.result, false);
      reader.onerror = () => setWallpaperError('Could not read this image file.');
      reader.readAsDataURL(file);
    });
    wallpaperModal.querySelector('#ug-wallpaper-url-load').addEventListener('click', function() {
      const url = wallpaperModal.querySelector('#ug-wallpaper-url').value.trim();
      if (!/^https?:\/\//i.test(url)) { setWallpaperError('Enter a valid image URL starting with http:// or https://.'); return; }
      loadWallpaperSource(url, true);
    });
    [wallpaperMode, wallpaperX, wallpaperY, wallpaperZoom].forEach(control => control.addEventListener('input', refreshWallpaperPreview));
    if (typeof ResizeObserver !== 'undefined') new ResizeObserver(refreshWallpaperPreview).observe(wallpaperPreview);
    wallpaperPreview.addEventListener('pointerdown', function(event) {
      if (!wallpaperImage) return;
      dragPoint = {x:event.clientX,y:event.clientY,xValue:Number(wallpaperX.value),yValue:Number(wallpaperY.value)};
      wallpaperPreview.setPointerCapture(event.pointerId);
    });
    wallpaperPreview.addEventListener('pointermove', function(event) {
      if (!dragPoint) return;
      const rect=wallpaperPreview.getBoundingClientRect();
      wallpaperX.value=Math.max(0,Math.min(100,dragPoint.xValue-(event.clientX-dragPoint.x)*100/rect.width));
      wallpaperY.value=Math.max(0,Math.min(100,dragPoint.yValue-(event.clientY-dragPoint.y)*100/rect.height));
      refreshWallpaperPreview();
    });
    ['pointerup','pointercancel','lostpointercapture'].forEach(name=>wallpaperPreview.addEventListener(name,()=>{dragPoint=null;}));
    wallpaperModal.querySelector('#ug-wallpaper-apply').addEventListener('click', function() {
      if (!wallpaperImage) return;
      const ratio = wallpaperMode.value === 'scroll' ? 3/4 : 16/9;
      const zoom = Number(wallpaperZoom.value)/100;
      let cropWidth=Math.min(wallpaperImage.naturalWidth,wallpaperImage.naturalHeight*ratio)/zoom;
      let cropHeight=cropWidth/ratio;
      const maxX=wallpaperImage.naturalWidth-cropWidth;
      const maxY=wallpaperImage.naturalHeight-cropHeight;
      const sx=maxX*Number(wallpaperX.value)/100;
      const sy=maxY*Number(wallpaperY.value)/100;
      const outputWidth=1600, outputHeight=Math.round(outputWidth/ratio);
      const canvas=document.createElement('canvas');
      canvas.width=outputWidth; canvas.height=outputHeight;
      const context=canvas.getContext('2d');
      context.drawImage(wallpaperImage,sx,sy,cropWidth,cropHeight,0,0,outputWidth,outputHeight);
      const data=canvas.toDataURL('image/jpeg',0.86);
      const settings={image:data,mode:wallpaperMode.value};
      try { localStorage.setItem('unblockedgames-wallpaper',JSON.stringify(settings)); applyWallpaper(); wallpaperEditor.hidden=true; closeWallpaperModal(); setWallpaperError('Wallpaper applied.'); }
      catch(error) { setWallpaperError('Could not save this image. Try a smaller image.'); }
    });
    wallpaperModal.querySelector('#ug-wallpaper-cancel').addEventListener('click',()=>{wallpaperEditor.hidden=true;setWallpaperError('');});
    wallpaperModal.querySelector('#ug-wallpaper-remove').addEventListener('click',function() {
      try { localStorage.removeItem('unblockedgames-wallpaper'); } catch (_) {}
      applyWallpaper(); wallpaperEditor.hidden=true; closeWallpaperModal(); setWallpaperError('Wallpaper removed.');
    });
    function applyWallpaper() {
      let settings=null;
      try { settings=JSON.parse(localStorage.getItem('unblockedgames-wallpaper')||'null'); } catch (_) {}
      if (!settings || !settings.image) {
        document.body.style.removeProperty('background-image');
        document.body.style.removeProperty('background-size');
        document.body.style.removeProperty('background-position');
        document.body.style.removeProperty('background-repeat');
        document.body.style.removeProperty('background-attachment');
        return;
      }
      document.body.style.backgroundImage='url("' + settings.image + '")';
      document.body.style.backgroundSize='cover';
      document.body.style.backgroundPosition='center center';
      document.body.style.backgroundRepeat='no-repeat';
      document.body.style.backgroundAttachment=settings.mode==='fixed'?'fixed':'scroll';
    }
    const globalThemeStyle=document.createElement("style");
    globalThemeStyle.id="ug-global-theme-style";
    document.head.appendChild(globalThemeStyle);
    function applyTheme() {
      document.body.dataset.ugTheme = theme;
      globalThemeStyle.textContent = theme === "light" ? `
        body[data-ug-theme="light"]{background-color:#f4f5f7!important;color:#202124!important}
        body[data-ug-theme="light"] :is(header.top-bar,.top-bar){background:linear-gradient(110deg,#fff,#edf0f5)!important;border-color:#d9dee7!important;color:#202124!important}
        body[data-ug-theme="light"] .brand-logo{filter:brightness(0)!important}
        body[data-ug-theme="light"] #filterTrigger img,body[data-ug-theme="light"] .filter-trigger img{filter:brightness(0)!important}
        body[data-ug-theme="light"] :is(.nav-tab,.btn-back,.view-all,.back){color:#4b5360!important}
        body[data-ug-theme="light"] .nav-tab.active,body[data-ug-theme="light"] .nav-tab[aria-current="page"]{background:#e4e8ef!important;color:#202124!important;border-color:#c3cad5!important}
        body[data-ug-theme="light"] :is(.nav-tab:hover,.btn-back:hover){background:#e7ebf1!important;color:#202124!important}
        body[data-ug-theme="light"] :is(.site-footer,footer){background:#eceff3!important;color:#555d6b!important;border-color:#d9dee7!important}
        body[data-ug-theme="light"] .site-footer a{color:#303744!important}
        body[data-ug-theme="light"] :is(h1,h2,h3,h4,.row-title,.game-info,.game-info h1,label){color:#202124!important}
        body[data-ug-theme="light"] :is(p,.game-views,.game-rating,.rating-status,.game-genre,.game-info p,.no-results){color:#555d6b!important}
        body[data-ug-theme="light"] :is(.card,.game-card,.game,.game-item,.game-tile,.game-box,.grandv-shortcut,.game-header,.report-dialog,.filter-menu,.privacy-main){background:#fff!important;color:#202124!important;border-color:#d9dee7!important;box-shadow:0 5px 18px #17203312!important}
        body[data-ug-theme="light"] :is(.card p,.card a,.game-card p,.game-card a,.game-title){color:#202124!important}
        body[data-ug-theme="light"] :is(.card span,.game-card span,.grandv-info p){color:#626875!important}
        body[data-ug-theme="light"] :is(.search-input,.filter-trigger,.btn-clear,.filter-menu,.filter-option,.filter-menu-head,.btn-new-tab,.btn-report,.rating-submit,.report-dialog textarea,.btn-report-cancel){background:#fff!important;color:#303744!important;border-color:#cbd1da!important}
        body[data-ug-theme="light"] :is(.filter-option:hover,.filter-menu-head button:hover){background:#edf0f5!important;color:#202124!important}
        body[data-ug-theme="light"] .game-genre{background:#edf0f5!important;color:#4b5360!important;border-color:#d5d9e0!important}
        body[data-ug-theme="light"] :is(.btn-back,.back){background:#fff!important;border-color:#d5d9e0!important}
        body[data-ug-theme="light"] .arrow-btn{background:rgba(255,255,255,.94)!important;color:#202124!important;border-color:#cbd1da!important}
        body[data-ug-theme="light"] .grandv-art{background:linear-gradient(135deg,#dce7df,#aab8ad)!important;color:#202124!important;text-shadow:none!important}
        body[data-ug-theme="light"] .report-dialog p{color:#555d6b!important}
        body[data-ug-theme="light"] .report-dialog textarea{background:#f7f8fa!important;color:#202124!important}
        body[data-ug-theme="light"] .game-loading{background:#f4f5f7!important;color:#303744!important}
        body[data-ug-theme="light"] .catalog-separator{background:#d7dce4!important}
        body[data-ug-theme="light"] .catalog-separator-strong{background:linear-gradient(90deg,#c5ccd7,#e2e6ec)!important;box-shadow:none!important}
        body[data-ug-theme="light"] .row-header{border-bottom-color:#d9dee7!important}
        body[data-ug-theme="light"] .privacy-main p{color:#4b5360!important}
        body[data-ug-theme="light"] #ug-settings-trigger{background:#fff!important;border-color:#cbd1da!important}
        body[data-ug-theme="light"] #ug-settings-trigger img{filter:brightness(0)!important}
        body[data-ug-theme="light"] #ug-settings-panel{background:#fff!important;color:#202124!important;border-color:#d5d9e0!important}
        body[data-ug-theme="light"] #ug-settings-panel .ug-control{background:#f1f3f6!important;color:#202124!important;border-color:#cbd1da!important}
        body[data-ug-theme="light"] .banner-info{background:rgba(255,255,255,.92)!important;color:#202124!important;border-color:#d5d9e0!important}
        body[data-ug-theme="light"] .banner-info p{color:#4b5360!important}
        body[data-ug-theme="light"] .top-bar .search-input::placeholder{color:#7a8290!important}
        body[data-ug-theme="light"] :is(.card img,.game-card img,.game img,.game-item img,.game-tile img){background:#e8ebf0!important}
        body[data-ug-theme="light"] :is(.banner-indicators){background:rgba(255,255,255,.55)!important}
        body[data-ug-theme="light"] .banner-dot{border-color:#303744!important}
        body[data-ug-theme="light"] .banner-dot.active{background:#303744!important}
      ` : "";
      document.documentElement.style.colorScheme = theme;
      if (theme === 'light') { document.body.style.backgroundColor = '#f4f5f7'; document.body.style.color = '#202124'; }
      else { document.body.style.removeProperty('background-color'); document.body.style.removeProperty('color'); }
      panel.querySelector('#ug-theme-toggle').textContent = theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
      save('unblockedgames-theme',theme);
    }
    function applyAccent() {
      document.documentElement.style.setProperty('--ug-accent',accent);
      document.documentElement.style.setProperty('--ug-accent-soft',accent+'22');
      document.documentElement.style.setProperty('--ug-accent-shadow',accent+'44');
      style.textContent = style.textContent.split('/* USER ACCENT RULES */')[0] + `
        /* USER ACCENT RULES */
        :root{--ug-accent:${accent};--ug-accent-soft:${accent}22;--ug-accent-shadow:${accent}44;--accent-color:${accent}}
        a:not(.brand-logo):hover{border-color:var(--ug-accent)!important}
        /* Accent-coloured glow for interactive surfaces and focus states. */
        button:hover:not(.rating-star-button):not(.rating-half),.btn:hover,.nav-tab:hover,.nav-link:hover,.filter-trigger:hover,.view-all:hover,.arrow-btn:hover,.btn-back:hover{box-shadow:0 6px 18px var(--ug-accent-shadow)!important}
        button:focus-visible,a:focus-visible,input:focus-visible,select:focus-visible,textarea:focus-visible{outline-color:var(--ug-accent)!important;box-shadow:0 0 0 3px var(--ug-accent-soft)!important}
        input:focus,select:focus,textarea:focus{box-shadow:0 0 0 3px var(--ug-accent-shadow)!important}
        .btn-play{box-shadow:0 5px 16px var(--ug-accent-shadow)!important}
        .btn-play:hover,.btn-maximize:hover{box-shadow:0 7px 22px var(--ug-accent-shadow)!important}
        #ug-settings-trigger{box-shadow:0 3px 14px var(--ug-accent-shadow)!important}
        #ug-settings-trigger:hover{box-shadow:0 6px 18px var(--ug-accent-shadow)!important}
        .iframe-wrapper,.proxy-frame-wrap{box-shadow:0 10px 30px var(--ug-accent-shadow)!important}
        .report-dialog,.filter-menu,#ug-settings-panel{box-shadow:0 16px 38px var(--ug-accent-shadow)!important}
        .btn-play,.btn-maximize{background:var(--ug-accent)!important;color:#fff!important;border-color:var(--ug-accent)!important}
        .btn-play:hover,.btn-maximize:hover{background:var(--ug-accent)!important;color:#fff!important;filter:brightness(.88)}
        .view-all:hover{color:#b4bdcb!important}
        .nav-tab:hover{color:#b5bac5!important}
        .filter-trigger:hover{color:#e8ebf1!important}
        .arrow-btn:hover{transform:translateY(-50%) scale(1.015)!important}
        .btn-report-send:hover,.pagination button.active:hover,.filter-button.active:hover{background:#343b47!important;color:inherit!important}
        .card:hover,.game-card:hover,.game:hover,.game-item:hover,.game-tile:hover,.game-box:hover{background:var(--ug-accent-soft)!important;border-color:var(--ug-accent)!important;box-shadow:0 7px 24px var(--ug-accent-shadow)!important;transform:translateY(-2px)}
        .card:hover img,.game-card:hover img,.game:hover img{filter:drop-shadow(0 3px 7px var(--ug-accent-shadow))}
        button:hover,.btn:hover,.nav-tab:hover,.nav-link:hover{border-color:var(--ug-accent)!important}
        .active,.nav-tab.active,.nav-link.active,.selected,[aria-current="page"]{color:inherit!important;border-color:var(--ug-accent)!important}
        input:focus,select:focus,textarea:focus{outline:2px solid var(--ug-accent)!important;outline-offset:1px;border-color:var(--ug-accent)!important}
        input[type="checkbox"],input[type="radio"]{accent-color:var(--ug-accent)}
        input[type="range"]{accent-color:var(--ug-accent)}
        ::selection{background:var(--ug-accent);color:#fff}
        .btn-maximize{background:var(--ug-accent)!important;color:#fff!important;border-color:var(--ug-accent)!important}
        .btn-report-send,.pagination button.active,.filter-button.active{background:transparent!important;color:inherit!important;border-color:var(--ug-accent)!important}
        .site-footer a:hover{color:var(--ug-accent)!important}
        .ug-control:focus-visible,#ug-settings-trigger:focus-visible{outline:2px solid var(--ug-accent)!important;outline-offset:3px}
      `;
      save('unblockedgames-accent',accent);
      panel.querySelector('#ug-accent-picker').value = accent;
    }
    function applyLanguage() {
      const dictionary = (window.UNBLOCKED_TRANSLATIONS && window.UNBLOCKED_TRANSLATIONS[language]) || {};
      const originals = originalTextNodes;
      function translateTextNode(node) {
        if (!node || !node.parentElement || node.parentElement.closest('script,style,noscript,textarea,code,pre,[contenteditable="true"]')) return;
        let record=originals.get(node);
        if (!record || node.nodeValue!==record.translated) {
          record={original:node.nodeValue,translated:node.nodeValue};
          originals.set(node,record);
        }
        const original=record.original;
        const trimmed=original.trim();
        if (!trimmed) return;
        const translated=dictionary[trimmed] || trimmed;
        record.translated=translated;
        if (node.nodeValue!==translated) node.nodeValue=translated;
      }
      function translateElement(el) {
        if (!el || el.nodeType!==1) return;
        ['placeholder','title','aria-label','alt'].forEach(attr=>{
          if (!el.hasAttribute(attr)) return;
          const key='data-ug-original-'+attr;
          if (!el.hasAttribute(key)) el.setAttribute(key,el.getAttribute(attr));
          const original=el.getAttribute(key);
          el.setAttribute(attr,dictionary[original]||original);
        });
        if (el.matches('input[type="button"],input[type="submit"]')) {
          if (!el.hasAttribute('data-ug-original-value')) el.setAttribute('data-ug-original-value',el.value);
          const original=el.getAttribute('data-ug-original-value');
          el.value=dictionary[original]||original;
        }
      }
      function translateTree(root) {
        if (!root) return;
        if (root.nodeType===3) { translateTextNode(root); return; }
        if (root.nodeType!==1 && root!==document) return;
        if (root.nodeType===1) translateElement(root);
        const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
        let node; while((node=walker.nextNode())) translateTextNode(node);
        if (root.querySelectorAll) root.querySelectorAll('*').forEach(translateElement);
      }
      translateTree(document.body);
      document.documentElement.lang=language;
      if (document.title) {
        if (!document.documentElement.dataset.ugOriginalTitle) document.documentElement.dataset.ugOriginalTitle=document.title;
        const originalTitle=document.documentElement.dataset.ugOriginalTitle;
        document.title=dictionary[originalTitle]||originalTitle;
      }
      panel.querySelectorAll('[data-lang]').forEach(el=>{
        el.style.outline=el.dataset.lang===language?'2px solid '+accent:'none';
        el.setAttribute('aria-pressed',String(el.dataset.lang===language));
      });
      save('unblockedgames-language',language);
      if (window.__ugTranslationObserver) window.__ugTranslationObserver.disconnect();
      window.__ugTranslationObserver=new MutationObserver(records=>{
        records.forEach(record=>{
          record.addedNodes.forEach(node=>translateTree(node));
          if(record.type==='characterData') translateTextNode(record.target);
        });
      });
      window.__ugTranslationObserver.observe(document.body,{childList:true,subtree:true,characterData:true});
    }
    button.addEventListener('click',()=>{panel.hidden=!panel.hidden;button.setAttribute('aria-expanded',String(!panel.hidden));});
    panel.querySelector('#ug-theme-toggle').addEventListener('click',()=>{theme=theme==='dark'?'light':'dark';applyTheme();});
    panel.querySelector('#ug-accent-picker').addEventListener('input',e=>{accent=e.target.value;applyAccent();applyLanguage();});
    panel.querySelector('#ug-accent-picker').addEventListener('change',e=>{accent=e.target.value;applyAccent();applyLanguage();});
    panel.querySelectorAll('[data-lang]').forEach(el=>el.addEventListener('click',()=>{language=el.dataset.lang;applyLanguage();}));
    document.addEventListener('keydown',e=>{if(e.key==='Escape'){panel.hidden=true;button.setAttribute('aria-expanded','false');}});
    applyTheme();applyAccent();applyLanguage();applyWallpaper();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start,{once:true}); else start();
  window.addEventListener('load',()=>{if(!document.getElementById('ug-settings-trigger'))start();},{once:true});
})();