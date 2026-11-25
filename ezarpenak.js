(function () {
  'use strict';
  if (window.__unblockedSettingsLoaded) return;
  window.__unblockedSettingsLoaded = true;

  const THEME_KEY = 'unblockedgames-theme';
  const LANGUAGE_KEY = 'unblockedgames-language';
  const dictionaries = window.UNBLOCKED_TRANSLATIONS || {};
  let theme = 'dark';
  let language = 'en';
  try {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const savedLanguage = localStorage.getItem(LANGUAGE_KEY);
    if (savedTheme === 'light' || savedTheme === 'dark') theme = savedTheme;
    if (['en', 'es', 'eu'].includes(savedLanguage)) language = savedLanguage;
  } catch (_) {}

  const style = document.createElement('style');
  style.id = 'unblocked-settings-styles';
  style.textContent = `
    :root { color-scheme: dark; }
    body { transition: background-color .18s ease, color .18s ease; }\n    a, button, input, select, textarea { -webkit-tap-highlight-color: transparent; }\n    a, button { transition: color .18s ease, background-color .18s ease, border-color .18s ease, box-shadow .18s ease, transform .18s ease; }\n    a:hover { text-decoration-thickness: 2px; }\n    button:hover { box-shadow: 0 4px 13px rgba(0,0,0,.2); }\n    img { transition: filter .2s ease; }\n    .nav-tab:hover { transform: translateY(-1px); }\n    @media (prefers-reduced-motion: reduce) { *, *::before, *::after { animation-duration: .01ms !important; transition-duration: .01ms !important; scroll-behavior: auto !important; } }
    #ug-settings-trigger {
      position: fixed; z-index: 2147483000; top: 16px; right: 16px;
      width: 48px; height: 48px; display: grid; place-items: center;
      padding: 0; border: 1px solid #555; border-radius: 50%;
      background: #242424; color: #f2f2f2; cursor: pointer;
      box-shadow: 0 3px 14px rgba(0,0,0,.35);
      font: 0 Arial, sans-serif; 
    }
    #ug-settings-trigger:hover { background: #383838; transform: rotate(8deg) scale(1.04); }\n    #ug-settings-trigger img { width:25px;height:25px;object-fit:contain;display:block; }\n    #ug-settings-trigger { transition: transform .2s ease, background .2s ease, box-shadow .2s ease; }\n    #ug-settings-panel { animation: ug-panel-in .18s ease both; }\n    @keyframes ug-panel-in { from { opacity:0; transform:translateY(-6px) scale(.98); } to { opacity:1; transform:translateY(0) scale(1); } }\n    #ug-theme-toggle, #ug-language-select { transition: background .18s ease, border-color .18s ease, transform .18s ease; }\n    #ug-theme-toggle:hover, #ug-language-select:hover { border-color:#777; transform:translateY(-1px); }
    #ug-settings-trigger:focus-visible, #ug-theme-toggle:focus-visible, #ug-language-select:focus-visible {
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
    #ug-language-select { display:block; }
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
    panel.querySelector('.ug-setting-label').textContent = t('Language');
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
    trigger.innerHTML = '<img src="argazkik/ezarpenak.png" alt="" width="25" height="25">';

    const panel = document.createElement('section');
    panel.id = 'ug-settings-panel';
    panel.hidden = true;
    panel.setAttribute('aria-label', 'Settings');
    panel.innerHTML = '<h2>Settings</h2><div class="ug-setting-row"><button id="ug-theme-toggle" type="button"><span class="ug-theme-label">Light mode</span><span class="ug-theme-state">Dark mode</span></button></div><div class="ug-setting-row"><label class="ug-setting-label" for="ug-language-select">Language</label><select id="ug-language-select"><option value="en">🇬🇧 English</option><option value="es">🇪🇸 Español</option><option value="eu">🟥⬜🟩 Euskara</option></select></div>';

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
    panel.querySelector('#ug-language-select').value = language;
    panel.querySelector('#ug-language-select').addEventListener('change', function () {
      applyLanguage(this.value);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !panel.hidden) {
        panel.hidden = true;
        trigger.setAttribute('aria-expanded', 'false');
        renderPanelText();
        trigger.focus();
      }
    });
    applyTheme(theme);
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