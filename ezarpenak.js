(function () {
  'use strict';
  if (window.__ugSettingsReady) return;
  window.__ugSettingsReady = true;
  const get = (key, fallback) => { try { return localStorage.getItem(key) || fallback; } catch (_) { return fallback; } };
  const save = (key, value) => { try { localStorage.setItem(key, value); } catch (_) {} };
  const flags = { en: 'argazkik/flag-en.svg', es: 'argazkik/flag-es.svg', eu: 'argazkik/ikurrina.svg' };
  const names = { en: 'English', es: 'Español', eu: 'Euskara' };
  let theme = get('unblockedgames-theme', 'dark');
  let accent = get('unblockedgames-accent', '#e50914');
  let language = get('unblockedgames-language', 'en');
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
    panel.innerHTML = '<strong style="display:block;font-size:16px;margin-bottom:12px">Settings</strong><label for="ug-theme-toggle">Appearance</label><button class="ug-control" id="ug-theme-toggle" type="button">Switch to light mode</button><label for="ug-accent-picker" style="display:block;margin-top:12px">Accent color</label><input id="ug-accent-picker" type="color"><label style="display:block;margin-top:12px">Language</label><div id="ug-language-options"><button class="ug-control" data-lang="en"><img class="ug-flag" src="argazkik/flag-en.svg" alt="">English</button><button class="ug-control" data-lang="es"><img class="ug-flag" src="argazkik/flag-es.svg" alt="">Español</button><button class="ug-control" data-lang="eu"><img class="ug-flag" src="argazkik/ikurrina.svg" alt="">Euskara</button></div>';
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
      document.documentElement.style.setProperty('--ug-accent-shadow',accent+'33');
      style.textContent = style.textContent.split('/* USER ACCENT RULES */')[0] + `
        /* USER ACCENT RULES */
        :root{--ug-accent:${accent};--ug-accent-soft:${accent}22;--ug-accent-shadow:${accent}33}
        .card:hover,.game-card:hover,.game:hover{background-color:var(--ug-accent-soft)!important;border-color:var(--ug-accent)!important;box-shadow:0 6px 22px var(--ug-accent-shadow)!important}
        button:not(#ug-settings-trigger):hover,a.button:hover,.btn:hover{border-color:var(--ug-accent)!important}
        .active, .nav-link.active, .selected{color:var(--ug-accent)!important}
        input:focus,select:focus,textarea:focus{outline:2px solid var(--ug-accent)!important;outline-offset:1px}
        ::selection{background:var(--ug-accent);color:#fff}
      `;
      save('unblockedgames-accent',accent);
      panel.querySelector('#ug-accent-picker').value = accent;
    }
    function applyLanguage() {
      panel.querySelectorAll('[data-lang]').forEach(el => el.style.outline = el.dataset.lang === language ? '2px solid '+accent : 'none');
      save('unblockedgames-language',language);
    }
    button.addEventListener('click',()=>{panel.hidden=!panel.hidden;button.setAttribute('aria-expanded',String(!panel.hidden));});
    panel.querySelector('#ug-theme-toggle').addEventListener('click',()=>{theme=theme==='dark'?'light':'dark';applyTheme();});
    panel.querySelector('#ug-accent-picker').addEventListener('input',e=>{accent=e.target.value;applyAccent();applyLanguage();});\n    panel.querySelector('#ug-accent-picker').addEventListener('change',e=>{accent=e.target.value;applyAccent();applyLanguage();});
    panel.querySelectorAll('[data-lang]').forEach(el=>el.addEventListener('click',()=>{language=el.dataset.lang;applyLanguage();}));
    document.addEventListener('keydown',e=>{if(e.key==='Escape'){panel.hidden=true;button.setAttribute('aria-expanded','false');}});
    applyTheme();applyAccent();applyLanguage();
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start,{once:true}); else start();
  window.addEventListener('load',()=>{if(!document.getElementById('ug-settings-trigger'))start();},{once:true});
})();