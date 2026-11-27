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
      #ug-settings-panel{position:fixed!important;top:70px!important;right:16px!important;z-index:2147483646!important;width:min(270px,calc(100vw - 32px))!important;padding:16px!important;border:1px solid #555!important;border-radius:12px!important;background:#202020!important;color:#fff!important;box-shadow:0 8px 28px #0007!important;font:14px/1.5 Arial,sans-serif!important}
      #ug-settings-panel[hidden]{display:none!important}
      #ug-settings-panel button,#ug-settings-panel input{box-sizing:border-box}
      button:not(#ug-settings-trigger){border-radius:11px;transition:background .18s ease,color .18s ease,border-color .18s ease,box-shadow .18s ease,transform .18s ease}
      button:not(#ug-settings-trigger):hover{transform:translateY(-1px);box-shadow:0 5px 14px #0003}
      button:not(#ug-settings-trigger):active{transform:scale(.97)}
      .ug-control{width:100%;min-height:40px;margin-top:6px;padding:9px 11px;border:1px solid #555;border-radius:11px;background:#303030;color:#fff;text-align:left;cursor:pointer}
      .ug-flag{width:23px;height:15px;object-fit:cover;vertical-align:middle;margin-right:8px}
      #ug-accent-picker{width:100%;height:40px;margin-top:6px;border:1px solid #555;border-radius:7px;background:#303030}
      .ug-beta{display:inline-block;margin-left:6px;padding:1px 6px;border-radius:6px;background:#5b3b91;color:#fff;font-size:10px;font-weight:700;vertical-align:middle}
      .ug-wallpaper-box{margin-top:14px;padding-top:12px;border-top:1px solid #484848}
      .ug-wallpaper-box label{display:block;margin:9px 0 4px}
      .ug-wallpaper-box input[type="url"]{width:100%;padding:9px;border:1px solid #555;background:#303030;color:#fff;border-radius:9px}
      .ug-wallpaper-box input[type="file"]{width:100%;font-size:12px;margin-top:5px;color:#ddd}
      .ug-wallpaper-box input[type="range"]{width:100%;accent-color:var(--ug-accent)}
      .ug-wallpaper-row{display:flex;gap:7px;margin-top:7px}
      .ug-wallpaper-row button{flex:1}
      .ug-wallpaper-preview{position:relative;width:100%;max-height:230px;margin-top:10px;overflow:hidden;border:1px solid #777;border-radius:9px;background:#111;touch-action:none}
      .ug-wallpaper-preview[data-mode="scroll"]{aspect-ratio:3/4}
      .ug-wallpaper-preview[data-mode="fixed"]{aspect-ratio:16/9}
      .ug-wallpaper-preview img{width:100%;height:100%;object-fit:cover;object-position:50% 50%;transform:scale(1);user-select:none;-webkit-user-drag:none;pointer-events:none}
      .ug-wallpaper-help{font-size:11px;color:#bbb;margin-top:5px;line-height:1.4}
      .ug-wallpaper-error{font-size:11px;color:#ff9b9b;margin-top:6px}
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
    panel.innerHTML += `
      <div class="ug-wallpaper-box">
        <label><span>Wallpaper</span><span class="ug-beta">BETA</span></label>
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
          <div class="ug-wallpaper-preview" id="ug-wallpaper-preview" data-mode="scroll"><img id="ug-wallpaper-image" alt="Wallpaper crop preview"></div>
          <div class="ug-wallpaper-help">Drag the image to choose the crop, or adjust the controls.</div>
          <label for="ug-wallpaper-x">Horizontal position</label><input id="ug-wallpaper-x" type="range" min="0" max="100" value="50">
          <label for="ug-wallpaper-y">Vertical position</label><input id="ug-wallpaper-y" type="range" min="0" max="100" value="50">
          <label for="ug-wallpaper-zoom">Zoom</label><input id="ug-wallpaper-zoom" type="range" min="100" max="300" value="100">
          <div class="ug-wallpaper-row"><button class="ug-control" id="ug-wallpaper-apply" type="button">Apply wallpaper</button><button class="ug-control" id="ug-wallpaper-cancel" type="button">Cancel</button></div>
        </div>
        <button class="ug-control" id="ug-wallpaper-remove" type="button">Remove wallpaper</button>
        <div class="ug-wallpaper-error" id="ug-wallpaper-error" role="status" aria-live="polite"></div>
      </div>`;
    document.body.appendChild(button); document.body.appendChild(panel);
    let wallpaperImage = null;
    const wallpaperEditor = panel.querySelector('#ug-wallpaper-editor');
    const wallpaperPreview = panel.querySelector('#ug-wallpaper-preview');
    const wallpaperPreviewImage = panel.querySelector('#ug-wallpaper-image');
    const wallpaperMode = panel.querySelector('#ug-wallpaper-mode');
    const wallpaperX = panel.querySelector('#ug-wallpaper-x');
    const wallpaperY = panel.querySelector('#ug-wallpaper-y');
    const wallpaperZoom = panel.querySelector('#ug-wallpaper-zoom');
    const wallpaperError = panel.querySelector('#ug-wallpaper-error');
    let dragPoint = null;
    function setWallpaperError(message) { wallpaperError.textContent = message || ''; }
    function refreshWallpaperPreview() {
      if (!wallpaperImage) return;
      wallpaperPreview.dataset.mode = wallpaperMode.value;
      wallpaperPreviewImage.style.objectPosition = wallpaperX.value + '% ' + wallpaperY.value + '%';
      wallpaperPreviewImage.style.transform = 'scale(' + (Number(wallpaperZoom.value) / 100) + ')';
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
      };
      image.onerror = function() {
        setWallpaperError('Could not load this image. Check the URL or choose another image.');
      };
      image.src = source;
    }
    panel.querySelector('#ug-wallpaper-file').addEventListener('change', function(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;
      if (!file.type.startsWith('image/')) { setWallpaperError('Please choose an image file.'); return; }
      const reader = new FileReader();
      reader.onload = () => loadWallpaperSource(reader.result, false);
      reader.onerror = () => setWallpaperError('Could not read this image file.');
      reader.readAsDataURL(file);
    });
    panel.querySelector('#ug-wallpaper-url-load').addEventListener('click', function() {
      const url = panel.querySelector('#ug-wallpaper-url').value.trim();
      if (!/^https?:\/\//i.test(url)) { setWallpaperError('Enter a valid image URL starting with http:// or https://.'); return; }
      loadWallpaperSource(url, true);
    });
    [wallpaperMode, wallpaperX, wallpaperY, wallpaperZoom].forEach(control => control.addEventListener('input', refreshWallpaperPreview));
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
    panel.querySelector('#ug-wallpaper-apply').addEventListener('click', function() {
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
      try { localStorage.setItem('unblockedgames-wallpaper',JSON.stringify(settings)); applyWallpaper(); wallpaperEditor.hidden=true; setWallpaperError('Wallpaper applied.'); }
      catch(error) { setWallpaperError('Could not save this image. Try a smaller image.'); }
    });
    panel.querySelector('#ug-wallpaper-cancel').addEventListener('click',()=>{wallpaperEditor.hidden=true;setWallpaperError('');});
    panel.querySelector('#ug-wallpaper-remove').addEventListener('click',function() {
      try { localStorage.removeItem('unblockedgames-wallpaper'); } catch (_) {}
      applyWallpaper(); wallpaperEditor.hidden=true; setWallpaperError('Wallpaper removed.');
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
    function applyTheme() {
      document.body.dataset.ugTheme = theme;
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