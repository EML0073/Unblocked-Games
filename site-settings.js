(function () {
  'use strict';
  if (window.__unblockedSettingsLoaded) return;
  window.__unblockedSettingsLoaded = true;

  const STORAGE_KEY = 'unblockedgames-theme';
  let theme = 'dark';
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'light' || saved === 'dark') theme = saved;
  } catch (_) {}

  const style = document.createElement('style');
  style.id = 'unblocked-settings-styles';
  style.textContent = `
    :root { color-scheme: dark; }
    body { transition: background-color .18s ease, color .18s ease; }
    #ug-settings-trigger {
      position: fixed; z-index: 2147483000; top: 16px; right: 16px;
      width: 42px; height: 42px; display: grid; place-items: center;
      padding: 0; border: 1px solid #555; border-radius: 50%;
      background: #242424; color: #f2f2f2; cursor: pointer;
      box-shadow: 0 3px 14px rgba(0,0,0,.35);
    }
    #ug-settings-trigger:hover { background: #383838; }
    #ug-settings-trigger:focus-visible, #ug-theme-toggle:focus-visible {
      outline: 2px solid #e50914; outline-offset: 3px;
    }
    #ug-settings-trigger svg { width: 21px; height: 21px; }
    #ug-settings-panel {
      position: fixed; z-index: 2147482999; top: 16px; left: 16px;
      width: 230px; padding: 15px; border: 1px solid #444;
      border-radius: 9px; background: #202020; color: #eee;
      box-shadow: 0 8px 28px rgba(0,0,0,.42);
      font: 14px/1.4 Arial, Helvetica, sans-serif;
    }
    #ug-settings-panel[hidden] { display: none; }
    #ug-settings-panel h2 { margin: 0 0 12px; font: 600 15px/1.3 Arial, Helvetica, sans-serif; color: inherit; }
    #ug-theme-toggle {
      width: 100%; display: flex; align-items: center; justify-content: space-between;
      gap: 10px; padding: 10px 11px; border: 1px solid #555; border-radius: 6px;
      background: #303030; color: #f5f5f5; font: 14px Arial, Helvetica, sans-serif;
      text-align: left; cursor: pointer;
    }
    #ug-theme-toggle:hover { background: #3c3c3c; }
    #ug-theme-toggle .ug-theme-state { color: #bbb; font-size: 12px; }
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
    body[data-ug-theme="light"] #ug-settings-panel {
      background: #fff; color: #202124; border-color: #d5d8dc;
    }
    body[data-ug-theme="light"] #ug-theme-toggle {
      background: #f1f3f4; color: #202124; border-color: #c8cdd3;
    }
    body[data-ug-theme="light"] #ug-theme-toggle .ug-theme-state { color: #5f6368; }
    body[data-ug-theme="light"] #ug-settings-trigger {
      background: #fff; color: #202124; border-color: #c8cdd3;
    }
    @media (max-width: 520px) {
      #ug-settings-trigger { top: 10px; right: 10px; }
      #ug-settings-panel { top: 10px; left: 10px; width: min(230px, calc(100vw - 20px)); }
    }
    @media (prefers-reduced-motion: reduce) { body { transition: none; } }
  `;
  (document.head || document.documentElement).appendChild(style);

  function applyTheme(nextTheme) {
    theme = nextTheme === 'light' ? 'light' : 'dark';
    document.body.setAttribute('data-ug-theme', theme);
    document.documentElement.style.colorScheme = theme;
    const state = document.getElementById('ug-theme-state');
    const toggle = document.getElementById('ug-theme-toggle');
    if (state) state.textContent = theme === 'dark' ? 'Oscuro' : 'Claro';
    if (toggle) {
      toggle.setAttribute('aria-label', theme === 'dark' ? 'Activar modo claro' : 'Activar modo oscuro');
      const label = toggle.querySelector('.ug-theme-label');
      if (label) label.textContent = theme === 'dark' ? 'Modo claro' : 'Modo oscuro';
    }
    try { localStorage.setItem(STORAGE_KEY, theme); } catch (_) {}
  }

  function buildControls() {
    if (!document.body || document.getElementById('ug-settings-trigger')) return;
    const trigger = document.createElement('button');
    trigger.id = 'ug-settings-trigger';
    trigger.type = 'button';
    trigger.setAttribute('aria-label', 'Abrir configuración');
    trigger.setAttribute('aria-expanded', 'false');
    trigger.setAttribute('aria-controls', 'ug-settings-panel');
    trigger.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.7 1.7 0 0 0 .34 1.88l.06.06-1.7 2.94-.09-.02a1.7 1.7 0 0 0-1.75.5l-.06.07h-3.4l-.04-.09a1.7 1.7 0 0 0-1.5-1.02 1.7 1.7 0 0 0-1.25.55l-.07.08-2.94-1.7.02-.1a1.7 1.7 0 0 0-.5-1.74l-.07-.06v-3.4l.09-.04a1.7 1.7 0 0 0 1.02-1.5 1.7 1.7 0 0 0-.55-1.25l-.08-.07 1.7-2.94.1.02a1.7 1.7 0 0 0 1.74-.5l.06-.07h3.4l.04.09a1.7 1.7 0 0 0 1.5 1.02 1.7 1.7 0 0 0 1.25-.55l.07-.08 2.94 1.7-.02.1a1.7 1.7 0 0 0 .5 1.74l.07.06v3.4z"></path></svg>';

    const panel = document.createElement('section');
    panel.id = 'ug-settings-panel';
    panel.hidden = true;
    panel.setAttribute('aria-label', 'Configuración');
    panel.innerHTML = '<h2>Configuración</h2><button id="ug-theme-toggle" type="button"><span class="ug-theme-label">Modo claro</span><span class="ug-theme-state" id="ug-theme-state">Oscuro</span></button>';

    document.body.appendChild(trigger);
    document.body.appendChild(panel);
    trigger.addEventListener('click', function () {
      const open = panel.hidden;
      panel.hidden = !open;
      trigger.setAttribute('aria-expanded', String(open));
      trigger.setAttribute('aria-label', open ? 'Cerrar configuración' : 'Abrir configuración');
    });
    panel.querySelector('#ug-theme-toggle').addEventListener('click', function () {
      applyTheme(theme === 'dark' ? 'light' : 'dark');
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && !panel.hidden) {
        panel.hidden = true;
        trigger.setAttribute('aria-expanded', 'false');
        trigger.setAttribute('aria-label', 'Abrir configuración');
        trigger.focus();
      }
    });
    applyTheme(theme);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', buildControls, { once: true });
  else buildControls();
})();