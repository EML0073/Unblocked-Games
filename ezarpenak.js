(function () {
  'use strict';
  if (window.__unblockedSettingsLoaded) return;
  window.__unblockedSettingsLoaded = true;

  const THEME_KEY = 'unblockedgames-theme';
  const LANGUAGE_KEY = 'unblockedgames-language';
  const ACCENT_KEY = 'unblockedgames-accent';
  const dictionaries = window.UNBLOCKED_TRANSLATIONS || {};
  let theme = 'dark';
  let language = 'en';
  let accent = '#e50914';
  try {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
    const savedAccent = localStorage.getItem(ACCENT_KEY);
    if (savedTheme === 'light' || savedTheme === 'dark') theme = savedTheme;
    if (['en', 'es', 'eu'].includes(savedLanguage)) language = savedLanguage;
    if (savedAccent && /^#[0-9a-f]{6}$/i.test(savedAccent)) accent = savedAccent;
  } catch (_) {}

  const style = document.createElement('style');
  style.id = 'unblocked-settings-styles';
  style.textContent = `
    :root { color-scheme: dark; }
    body { transition: background-color .18s ease, color .18s ease; }
    a, button, input, select, textarea { -webkit-tap-highlight-color: transparent; }
    a, button { transition: color .18s ease, background-color .18s ease, border-color .18s ease, box-shadow .18s ease, transform .18s ease; }
    a:hover { text-decoration-thickness: 2px; }
    button:hover { box-shadow: 0 4px 13px rgba(0,0,0,.2); }
    img { transition: filter .2s ease; }
    .nav-tab:hover { transform: translateY(-1px); }
    @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; scroll-behavior: auto !important; } }
    #ug-settings-trigger {
      position: fixed; z-index: 2147483000; top: 16px; right: 16px;
      width: 48px; height: 48px; display: grid; place-items: center;
      padding: 0; border: 1px solid #555; border-radius: 50%;
      background: #242424; color: #f2f2f2; cursor: pointer;
      box-shadow: 0 3px 14px rgba(0,0,0,.35);
      font: 0 Arial, sans-serif; 
    }
    #ug-settings-trigger:hover { background: #383838; transform: rotate(8deg) scale(1.04); }
    #ug-settings-trigger img { width:20px;height:20px;object-fit:contain;display:block;filter:brightness(0) invert(1); }
    #ug-settings-trigger { transition: transform .2s ease, background .2s ease, box-shadow .2s ease; }
    #ug-settings-panel { animation: ug-panel-in .18s ease both; }
    @keyframes ug-panel-in { from { opacity:0; transform:translateY(-6px) scale(.98); } to { opacity:1; transform:translateY(0) scale(1); } }
    #ug-theme-toggle, #ug-language-select, #ug-accent-picker { transition: background .18s ease, border-color .18s ease, transform .18s ease; }
    #ug-theme-toggle:hover, #ug-language-select:hover, #ug-accent-picker:hover { border-color:#777; transform:translateY(-1px); }
    #ug-settings-trigger:focus-visible, #ug-theme-toggle:focus-visible, #ug-language-select:focus-visible, #ug-accent-picker:focus-visible {
      outline: 2px solid #e50914; outline-offset: 3px;
    }
    #ug-settings-panel {
      position: fixed; z-index: 2147482999; top: 74px; right: 16px;
      width: 270px; padding: 15px; border: 1px solid #444;
      border-radius: 10px; background: #202020; color: #eee;
      box-shadow: 0 8px 28px rgba(0,0,0,.42);
      font: 14px/1.4 Arial, Helvetica, sans-serif;
    }
    #ug-settings-panel[hidden] { display: none; }
    #ug-settings-panel h2 { margin: 0 0 13px; font: 600 16px/1.3 Arial, Helvetica, sans-serif; color: inherit; }
    #ug-settings-panel .ug-setting-row { margin-top: 10px; }
    #ug-settings-panel .ug-setting-label { display:block; margin:0 0 6px; color:#bbb; font-size:12px; }
    #ug-theme-toggle, #ug-language-select {
      width: 100%; min-height: 42px; display: flex; align-items: center; justify-content: space-between;
      gap: 10px; padding: 10px 11px; border: 1px solid #555; border-radius: 6px;
      background: #303030; color: #f5f5f5; font: 14px Arial, Helvetica, sans-serif;
      text-align: left; cursor: pointer;
    }
    #ug-theme-toggle:hover { background: #3c3c3c; }
    #ug-theme-toggle .ug-theme-state { color: #bbb; font-size: 12px; }
    #ug-language-select { display:flex; align-items:center; justify-content:space-between; gap:9px; }
    #ug-language-select img, .ug-language-option img { width:23px;height:15px;object-fit:cover;border-radius:2px;box-shadow:0 0 0 1px rgba(128,128,128,.35); }
    #ug-language-select .ug-language-current { display:flex;align-items:center;gap:9px; }
    #ug-language-menu { display:grid;gap:4px;margin-top:6px;padding:5px;border:1px solid #555;border-radius:7px;background:#292929; }
    #ug-language-menu[hidden] { display:none; }
    .ug-language-option { display:flex;align-items:center;gap:9px;width:100%;padding:8px;border:0;border-radius:5px;background:transparent;color:inherit;text-align:left;cursor:pointer; }
    .ug-language-option:hover,.ug-language-option[aria-selected="true"] { background:#3a3a3a; }
    #ug-accent-picker { width:100%;height:42px;padding:5px 8px;border:1px solid #555;border-radius:6px;background:#303030;cursor:pointer; }
    #ug-accent-picker::-webkit-color-swatch-wrapper { padding:2px; }
    #ug-accent-picker::-webkit-color-swatch { border:0;border-radius:4px; }
    body[data-ug-theme="light"] { background: #f4f5f7 !important; color: #202124 !important; color-scheme: light; }
    body[data-ug-theme="light"] .top-bar,
    body[data-ug-theme="light"] .site-footer,
    body[data-ug-theme="light"] footer,
    body[data-ug-theme="light"] .panel,
    body[data-ug-theme="light"] .report-dialog,
    body[data-ug-theme="light"] .grandv-shortcut {
      background: #fff !important; color: #202124 !important; border-color: #d5d8dc !important;
    }
    body[data-ug-theme="light"] .nav-tab { color: #555 !important; }
    body[data-ug-theme="light"] .nav-tab:hover,
    body[data-ug-theme="light"] .nav-tab.active { color: #111 !important; background: #e8eaed !important; border-color: #d5d8dc !important; }
    body[data-ug-theme="light"] .game-genre,
    body[data-ug-theme="light"] .search-input,
    body[data-ug-theme="light"] .genre-select,
    body[data-ug-theme="light"] .btn-clear,
    body[data-ug-theme="light"] .btn-new-tab,
    body[data-ug-theme="light"] .btn-report,
    body[data-ug-theme="light"] .maximize-btn,
    body[data-ug-theme="light"] .maximize-btn:not(:hover),
    body[data-ug-theme="light"] button:not(.btn-play):not(.btn-maximize):not(.btn-report-send):not(.primary):not(.success):not(.danger):not(#ug-settings-trigger):not(#ug-theme-toggle) {
      background: #e9ecef !important; color: #202124 !important; border-color: #c8cdd3 !important;
    }
    body[data-ug-theme="light"] input,
    body[data-ug-theme="light"] select,
    body[data-ug-theme="light"] textarea {
      background: #fff !important; color: #202124 !important; border-color: #c8cdd3 !important;
    }
    body[data-ug-theme="light"] .row-header { border-color: #d8dce1 !important; }
    body[data-ug-theme="light"] .card { background: #fff !important; border-color: #e0e3e7 !important; }
    body[data-ug-theme="light"] .card p,
    body[data-ug-theme="light"] .game-info h1,
    body[data-ug-theme="light"] .row-title,
    body[data-ug-theme="light"] h1,
    body[data-ug-theme="light"] h2 { color: #202124 !important; }
    body[data-ug-theme="light"] .card span,
    body[data-ug-theme="light"] .muted,
    body[data-ug-theme="light"] .game-views,
    body[data-ug-theme="light"] .proxy-note,
    body[data-ug-theme="light"] .site-footer,
    body[data-ug-theme="light"] footer { color: #5f6368 !important; }
    body[data-ug-theme="light"] .report-overlay { background: rgba(0,0,0,.45) !important; }
    body[data-ug-theme="light"] .iframe-wrapper,
    body[data-ug-theme="light"] .proxy-frame-wrap { border-color: #c8cdd3 !important; }
    body[data-ug-theme="light"] a { color: #1756a9; }
    body[data-ug-theme="light"] #ug-settings-panel { background:#fff; color:#202124; border-color:#d5d8dc; }
    body[data-ug-theme="light"] #ug-theme-toggle,
    body[data-ug-theme="light"] #ug-language-select { background:#f1f3f4; color:#202124; border-color:#c8cdd3; }
    body[data-ug-theme="light"] #ug-theme-toggle .ug-theme-state,
    body[data-ug-theme="light"] #ug-settings-panel .ug-setting-label { color:#5f6368; }
    body[data-ug-theme="light"] #ug-settings-trigger { background:#fff; color:#202124; border-color:#c8cdd3; }
    @media (max-width: 520px) {
      #ug-settings-trigger { top: 10px; right: 10px; width:44px; height:44px; }
      #ug-settings-panel { top: 62px; right: 10px; width: min(270px, calc(100vw - 20px)); }
    }
    @media (prefers-reduced-motion: reduce) { body { transition: none; } }
  `;

  style.textContent += '\n:root{--ug-accent:'+accent+';--ug-accent-soft:'+accent+'22}\n#ug-settings-trigger:focus-visible,#ug-theme-toggle:focus-visible,#ug-language-select:focus-visible,#ug-accent-picker:focus-visible{outline-color:var(--ug-accent)}\n#ug-theme-toggle:hover,#ug-language-select:hover,#ug-accent-picker:hover{border-color:var(--ug-accent)}\n.btn-play{background-color:var(--ug-accent)!important}\n.btn-play:hover,.arrow-btn:hover{background:var(--ug-accent)!important;border-color:var(--ug-accent)!important}\n.nav-tab.active{border-color:var(--ug-accent)!important;box-shadow:inset 0 -2px 0 var(--ug-accent)}\n::selection{background:var(--ug-accent-soft)}
.card:hover,.card:focus-within{background:var(--ug-accent-soft)!important;border-color:var(--ug-accent)!important;box-shadow:0 7px 18px var(--ug-accent-shadow),0 0 0 1px var(--ug-accent-soft)!important}
.card:hover p,.card:focus-within p{color:var(--ug-accent)!important}
.card:hover span,.card:focus-within span{color:var(--ug-accent)!important;opacity:.9}
.row-header{transition:border-color .18s ease}
.row:focus-within .row-header,.row:hover .row-header{border-color:var(--ug-accent-soft)}
.search-input:focus,.genre-select:focus,input:focus-visible,select:focus-visible{border-color:var(--ug-accent)!important;box-shadow:0 0 0 3px var(--ug-accent-soft)}
.view-all:hover{color:var(--ug-accent)!important}
.arrow-btn:hover{box-shadow:0 5px 16px var(--ug-accent-shadow)!important}';
  style.textContent += "\n/* Lightweight motion: transform/opacity only, with no continuous animation loops. */\n:root { scroll-behavior:smooth; }\n@media (prefers-reduced-motion: reduce) {\n  *, *::before, *::after { scroll-behavior:auto !important; animation-duration:.01ms !important; animation-iteration-count:1 !important; transition-duration:.01ms !important; }\n}\n#ug-settings-trigger { transition:transform .18s ease,background-color .18s ease,box-shadow .18s ease; }\n#ug-settings-trigger:hover { transform:rotate(7deg) scale(1.04); box-shadow:0 4px 14px rgba(0,0,0,.22); }\n#ug-settings-trigger:active { transform:scale(.94); }\n#ug-settings-panel { transform-origin:top right; animation:ug-panel-arrive .18s ease both; }\n@keyframes ug-panel-arrive { from { opacity:0; transform:translateY(-5px) scale(.985); } to { opacity:1; transform:translateY(0) scale(1); } }\nbutton, .nav-tab, a, input, select { -webkit-tap-highlight-color:transparent; }\nbutton:active, .nav-tab:active { transform:scale(.98); }\na:not(.card a) { text-underline-offset:3px; transition:color .16s ease,text-decoration-color .16s ease; }\na:focus-visible, button:focus-visible, input:focus-visible, select:focus-visible { outline:2px solid var(--ug-accent,#e50914); outline-offset:3px; }\n.nav-tab { position:relative; transition:color .18s ease,background-color .18s ease,transform .18s ease; }\n.nav-tab:hover { transform:translateY(-1px); }\n.nav-tab.active::after { content:\"\"; position:absolute; left:12px; right:12px; bottom:3px; height:2px; border-radius:2px; background:var(--ug-accent,#e50914); opacity:.85; }\n.card { transition:transform .2s ease,border-color .2s ease,box-shadow .2s ease,background-color .2s ease; }\n.card img { transition:transform .24s ease,filter .24s ease; }\n.card:hover img, .card:focus-within img { transform:scale(1.025); filter:brightness(1.045); }\n.arrow-btn { transition:transform .18s ease,background-color .18s ease,border-color .18s ease,opacity .18s ease; }\n.arrow-btn:hover { transform:translateY(-50%) scale(1.06); }\n.banner-dot { transition:transform .18s ease,background-color .18s ease,opacity .18s ease; }\n.banner-dot:hover { transform:scale(1.18); }\n.banner-info { animation:ug-banner-arrive .32s ease both; }\n@keyframes ug-banner-arrive { from { opacity:0; transform:translateY(7px); } to { opacity:1; transform:translateY(0); } }\n.row-title { transition:color .18s ease; }\n.row-header:hover .row-title { color:#fff; }\n#ug-theme-toggle, #ug-language-select, #ug-accent-picker { transition:transform .16s ease,border-color .16s ease,box-shadow .16s ease; }\n#ug-theme-toggle:active, #ug-language-select:active { transform:scale(.985); }\n#ug-accent-picker:focus-visible { box-shadow:0 0 0 3px var(--ug-accent-soft,rgba(229,9,20,.15)); }\n";
  (document.head || document.documentElement).appendChild(style);

  function t(key) {
    const dict = dictionaries[language] || dictionaries.en || {};
    return dict[key] ?? key;
  }

  const originalText = new WeakMap();
  const originalAttributes = new WeakMap();
  const originalDocumentTitle = document.title;
  function translateValue(value, dict) {
    if (!value) return value;
    if (Object.prototype.hasOwnProperty.call(dict, value.trim())) {
      const translated = dict[value.trim()];
      return value.replace(value.trim(), translated);
    }
    let result = value;
    const replacements = [
      [/\bviews\b/gi, dict.views || 'views'],
      [/\bview\b/gi, dict.view || 'view'],
      [/\bgames\b/gi, dict.games || 'games'],
      [/\bgame\b/gi, dict.game || 'game']
    ];
    replacements.forEach(([pattern, replacement]) => { result = result.replace(pattern, replacement); });
    return result;
  }

  function translateTextNode(node, dict) {
    if (!node || !node.parentElement || node.parentElement.closest('script,style,noscript,textarea,option,#ug-settings-panel')) return;
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const original = originalText.get(node);
    if (!original.trim()) return;
    const translated = translateValue(original, dict);
    if (node.nodeValue !== translated) node.nodeValue = translated;
  }

  function translateElement(element, dict) {
    if (!element || element.nodeType !== 1 || element.closest('#ug-settings-panel')) return;
    const attrs = ['placeholder', 'title', 'aria-label', 'alt'];
    let originals = originalAttributes.get(element);
    if (!originals) { originals = {}; originalAttributes.set(element, originals); }
    attrs.forEach(attr => {
      if (!element.hasAttribute(attr)) return;
      if (!(attr in originals)) originals[attr] = element.getAttribute(attr);
      const translated = translateValue(originals[attr], dict);
      if (element.getAttribute(attr) !== translated) element.setAttribute(attr, translated);
    });
    if (element.tagName === 'INPUT' && ['button','submit','reset'].includes(element.type)) {
      if (!('value' in originals)) originals.value = element.value;
      const translated = translateValue(originals.value, dict);
      if (element.value !== translated) element.value = translated;
    }
    if (element.tagName === 'OPTION') {
      if (!('text' in originals)) originals.text = element.textContent;
      const translated = translateValue(originals.text, dict);
      if (element.textContent !== translated) element.textContent = translated;
    }
  }

  function translateSubtree(root) {
    const dict = dictionaries[language] || dictionaries.en || {};
    if (root.nodeType === Node.TEXT_NODE) { translateTextNode(root, dict); return; }
    if (root.nodeType !== Node.ELEMENT_NODE && root !== document) return;
    const scope = root === document ? document.body : root;
    if (!scope) return;
    if (scope.nodeType === Node.ELEMENT_NODE) translateElement(scope, dict);
    const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT);
    let node;
    while ((node = walker.nextNode())) translateTextNode(node, dict);
    if (scope.querySelectorAll) scope.querySelectorAll('input,textarea,select,button,a,img,option').forEach(el => translateElement(el, dict));
  }

  function translatePage() {
    const dict = dictionaries[language] || dictionaries.en || {};
    translateSubtree(document.body);
    document.title = translateValue(originalDocumentTitle, dict);
    document.documentElement.lang = language;
  }

  function renderPanelText() {
    const panel = document.getElementById('ug-settings-panel');
    if (!panel) return;
    panel.querySelector('h2').textContent = t('Settings');
    panel.querySelector('.ug-theme-label').textContent = t(theme === 'dark' ? 'Light mode' : 'Dark mode');
    panel.querySelector('.ug-theme-state').textContent = t(theme === 'dark' ? 'Dark' : 'Light');
    panel.querySelector('.ug-language-label').textContent = t('Language');
    panel.querySelector('.ug-accent-label').textContent = t('Accent color');
    const names = { en: 'English', es: 'Español', eu: 'Euskara' };
    const flags = { en: 'argazkik/flag-en.svg', es: 'argazkik/flag-es.svg', eu: 'argazkik/ikurrina.svg' };
    const current = panel.querySelector('.ug-language-current');
    current.querySelector('img').src = flags[language];
    current.querySelector('span').textContent = names[language];
    panel.querySelectorAll('.ug-language-option').forEach(option => option.setAttribute('aria-selected', String(option.dataset.language === language)));
    const trigger = document.getElementById('ug-settings-trigger');
    trigger.setAttribute('aria-label', t(panel.hidden ? 'Open settings' : 'Close settings'));
    document.getElementById('ug-theme-toggle').setAttribute('aria-label', t(theme === 'dark' ? 'Light mode' : 'Dark mode'));
  }

  function applyTheme(nextTheme) {
    theme = nextTheme === 'light' ? 'light' : 'dark';
    document.body.setAttribute('data-ug-theme', theme);
    document.documentElement.style.colorScheme = theme;
    try { localStorage.setItem(THEME_KEY, theme); } catch (_) {}
    renderPanelText();
  }

  function applyAccent(nextAccent) {
    if (!/^#[0-9a-f]{6}$/i.test(nextAccent)) return;
    accent = nextAccent;
    document.documentElement.style.setProperty('--ug-accent', accent);
    document.documentElement.style.setProperty('--ug-accent-soft', accent + '22');
    document.documentElement.style.setProperty('--ug-accent-shadow', accent + '33');
    try { localStorage.setItem(ACCENT_KEY, accent); } catch (_) {}
    const picker = document.getElementById('ug-accent-picker');
    if (picker) picker.value = accent;
  }

  function applyLanguage(nextLanguage) {
    language = ['en','es','eu'].includes(nextLanguage) ? nextLanguage : 'en';
    try { localStorage.setItem(LANGUAGE_KEY, language); } catch (_) {}
    translatePage();
    renderPanelText();
  }

  function buildControls() {
    if (!document.body || document.getElementById('ug-settings-trigger')) return;
    const trigger = document.createElement('button');
    trigger.id = 'ug-settings-trigger';
    trigger.type = 'button';
    trigger.setAttribute('aria-label', t('Open settings'));
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', 'ug-settings-panel');
    trigger.innerHTML = '<img src="argazkik/ezarpenak.png" alt="" width="20" height="20">';
    trigger.style.cssText = 'position:fixed;z-index:2147483000;top:16px;right:16px;width:48px;height:48px;display:grid;place-items:center;padding:0;border:1px solid #555;border-radius:50%;background:#242424;color:#f2f2f2;cursor:pointer;box-shadow:0 3px 14px rgba(0,0,0,.35);';
    trigger.querySelector('img').addEventListener('error', function () { trigger.textContent = '⚙'; trigger.style.font = '24px Arial,sans-serif'; });

    const panel = document.createElement('section');
    panel.id = 'ug-settings-panel';
    panel.hidden = true;
    panel.setAttribute('aria-label', 'Settings');
    panel.innerHTML = '<h2>Settings</h2><div class="ug-setting-row"><button id="ug-theme-toggle" type="button"><span class="ug-theme-label">Light mode</span><span class="ug-theme-state">Dark mode</span></button></div><div class="ug-setting-row"><label class="ug-setting-label ug-accent-label" for="ug-accent-picker">Accent color</label><input id="ug-accent-picker" type="color" value="#e50914"></div><div class="ug-setting-row"><label class="ug-setting-label ug-language-label" for="ug-language-select">Language</label><button id="ug-language-select" type="button" aria-expanded="false" aria-controls="ug-language-menu"><span class="ug-language-current"><img src="argazkik/flag-en.svg" alt=""><span>English</span></span><span aria-hidden="true">⌄</span></button><div id="ug-language-menu" hidden><button class="ug-language-option" type="button" data-language="en"><img src="argazkik/flag-en.svg" alt=""><span>English</span></button><button class="ug-language-option" type="button" data-language="es"><img src="argazkik/flag-es.svg" alt=""><span>Español</span></button><button class="ug-language-option" type="button" data-language="eu"><img src="argazkik/ikurrina.svg" alt=""><span>Euskara</span></button></div></div>';

    document.body.appendChild(trigger);
    document.body.appendChild(panel);
    trigger.addEventListener('click', function () {
      panel.hidden = !panel.hidden;
      trigger.setAttribute('aria-expanded', String(!panel.hidden));
      renderPanelText();
    });
    panel.querySelector('#ug-theme-toggle').addEventListener('click', function () {
      applyTheme(theme === 'dark' ? 'light' : 'dark');
    });
    panel.querySelector('#ug-language-select').addEventListener('click', function () {
      const menu = panel.querySelector('#ug-language-menu');
      menu.hidden = !menu.hidden;
      this.setAttribute('aria-expanded', String(!menu.hidden));
    });
    panel.querySelectorAll('.ug-language-option').forEach(option => option.addEventListener('click', function () {
      applyLanguage(this.dataset.language);
      panel.querySelector('#ug-language-menu').hidden = true;
      panel.querySelector('#ug-language-select').setAttribute('aria-expanded', 'false');
    }));
    panel.querySelector('#ug-accent-picker').addEventListener('input', function () { applyAccent(this.value); });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !panel.hidden) {
        panel.hidden = true;
        trigger.setAttribute('aria-expanded', 'false');
        renderPanelText();
        trigger.focus();
      }
    });
    applyTheme(theme);
    applyAccent(accent);
    applyLanguage(language);
    const observer = new MutationObserver(records => {
      const dict = dictionaries[language] || dictionaries.en || {};
      records.forEach(record => {
        if (record.type === 'characterData') translateTextNode(record.target, dict);
        record.addedNodes && record.addedNodes.forEach(node => translateSubtree(node));
      });
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', buildControls, { once: true });
  else buildControls();
})();