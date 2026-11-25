(function () {
  'use strict';
  if (window.__ugSettingsReady) return;
  window.__ugSettingsReady = true;
  const get = (key, fallback) => { try { return localStorage.getItem(key) || fallback; } catch (_) { return fallback; } };
  const save = (key, value) => { try { localStorage.setItem(key, value); } catch (_) {} };
  const flags = { en: 'argazkik/flag-en.svg', es: 'argazkik/flag-es.svg', eu: 'argazkik/ikurriña.svg' };
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
      .ug-control{width:100%;min-height:40px;margin-top:6px;padding:9px 11px;border:1px solid #555;border-radius:7px;background:#303030;color:#fff;text-align:left;cursor:pointer}
      .ug-flag{width:23px;height:15px;object-fit:cover;vertical-align:middle;margin-right:8px}
      #ug-accent-picker{width:100%;height:40px;margin-top:6px;border:1px solid #555;border-radius:7px;background:#303030}
      @media(max-width:520px){#ug-settings-trigger{top:10px!important;right:10px!important}#ug-settings-panel{top:62px!important;right:10px!important}}
    `;
    document.head.appendChild(style);
    const button = document.createElement('button');
    button.id = 'ug-settings-trigger'; button.type = 'button'; button.title = 'Settings'; button.setAttribute('aria-label','Open settings'); button.setAttribute('aria-expanded','false');
    button.innerHTML = '<img src="argazkik/ezarpenak.png" alt="">';
    button.querySelector('img').addEventListener('error', function(){ button.textContent='⚙'; button.style.color='#fff'; button.style.font='24px Arial,sans-serif'; });
    const panel = document.createElement('section');
    panel.id = 'ug-settings-panel'; panel.hidden = true;
    panel.innerHTML = '<strong style="display:block;font-size:16px;margin-bottom:12px">Settings</strong><label for="ug-theme-toggle">Appearance</label><button class="ug-control" id="ug-theme-toggle" type="button">Switch to light mode</button><label for="ug-accent-picker" style="display:block;margin-top:12px">Accent color</label><input id="ug-accent-picker" type="color"><label style="display:block;margin-top:12px">Language</label><div id="ug-language-options"><button class="ug-control" data-lang="en"><img class="ug-flag" src="argazkik/flag-en.svg" alt="">English</button><button class="ug-control" data-lang="es"><img class="ug-flag" src="argazkik/flag-es.svg" alt="">Español</button><button class="ug-control" data-lang="eu"><img class="ug-flag" src="argazkik/ikurriña.svg" alt="">Euskara</button></div>';
    document.body.appendChild(button); document.body.appendChild(panel);
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
        a:not(.brand-logo):hover{color:var(--ug-accent)!important}
        .card:hover,.game-card:hover,.game:hover,.game-item:hover,.game-tile:hover,.game-box:hover{background:var(--ug-accent-soft)!important;border-color:var(--ug-accent)!important;box-shadow:0 7px 24px var(--ug-accent-shadow)!important;transform:translateY(-2px)}
        .card:hover img,.game-card:hover img,.game:hover img{filter:drop-shadow(0 3px 7px var(--ug-accent-shadow))}
        button:hover,.btn:hover,.nav-tab:hover,.nav-link:hover{border-color:var(--ug-accent)!important}
        .active,.nav-tab.active,.nav-link.active,.selected,[aria-current="page"]{color:var(--ug-accent)!important;border-color:var(--ug-accent)!important}
        input:focus,select:focus,textarea:focus{outline:2px solid var(--ug-accent)!important;outline-offset:1px;border-color:var(--ug-accent)!important}
        input[type="checkbox"],input[type="radio"]{accent-color:var(--ug-accent)}
        input[type="range"]{accent-color:var(--ug-accent)}
        ::selection{background:var(--ug-accent);color:#fff}
        .btn-maximize,.btn-report-send,.pagination button.active,.filter-button.active{background:var(--ug-accent)!important;border-color:var(--ug-accent)!important}
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
        const translated=language==='en' ? original : (dictionary[trimmed] || trimmed);
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
          el.setAttribute(attr,language==='en'?original:(dictionary[original]||original));
        });
        if (el.matches('input[type="button"],input[type="submit"]')) {
          if (!el.hasAttribute('data-ug-original-value')) el.setAttribute('data-ug-original-value',el.value);
          const original=el.getAttribute('data-ug-original-value');
          el.value=language==='en'?original:(dictionary[original]||original);
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
        document.title=language==='en'?originalTitle:(dictionary[originalTitle]||originalTitle);
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
    applyTheme();applyAccent();applyLanguage();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start,{once:true}); else start();
  window.addEventListener('load',()=>{if(!document.getElementById('ug-settings-trigger'))start();},{once:true});
})();