/* Site-wide side tile bar for childspecialistrohini.com
   Computer (≥1100px wide): a fixed colourful tile rail on the left.
   Phone / tablet: a small "Menu" tab on the left edge that opens a tile drawer.
   Add to any page with:  <script src="/site-nav.js" defer></script>  */
(function () {
  if (window.__dmNav) return; window.__dmNav = true;

  var I = {
    home: '<path d="M3 11 12 3l9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
    book: '<rect x="3" y="4" width="18" height="17" rx="3"/><path d="M8 2v4M16 2v4M3 10h18M9 15l2 2 4-4"/>',
    diet: '<path d="M3 11h18a9 9 0 0 1-18 0z"/><path d="M12 3v4M8 5v2M16 5v2"/>',
    newborn: '<circle cx="12" cy="8" r="5"/><path d="M7 21v-2a5 5 0 0 1 10 0v2"/>',
    tools: '<path d="M12 21s-7-4.5-7-11a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 6.5-7 11-7 11z"/>',
    chart: '<path d="M3 3v18h18"/><path d="M7 15l4-5 3 3 5-7"/>',
    guides: '<path d="M4 4h6a3 3 0 0 1 3 3v13a2 2 0 0 0-2-2H4z"/><path d="M20 4h-6a3 3 0 0 0-3 3v13a2 2 0 0 1 2-2h7z"/>',
    vaccine: '<path d="m18 2 4 4M17 7l3-3M19 9 8.7 19.3a2.4 2.4 0 0 1-3.4 0l-.6-.6a2.4 2.4 0 0 1 0-3.4L15 5M9 11l4 4M5 19l-3 3M14 4l6 6"/>',
    visit: '<path d="M12 21s-7-6.2-7-12a7 7 0 0 1 14 0c0 5.8-7 12-7 12z"/><circle cx="12" cy="9" r="2.5"/>',
    call: '<path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/>',
    wa: '<path d="M4 20l1.3-3.9A8 8 0 1 1 8 18.8z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1-1.5-2-1-1 1a4 4 0 0 1-2-2l1-1-1-2z"/>'
  };
  var ITEMS = [
    { k: 'home', href: '/', en: 'Home', hi: 'होम', c: '#3d36b8' },
    { k: 'book', href: '/book.html', en: 'Book', hi: 'बुक करें', c: '#2f8f3a' },
    { k: 'diet', href: '/baby-diet-planner.html', en: 'Diet guide', hi: 'आहार गाइड', c: '#e0a100' },
    { k: 'newborn', href: '/newborn.html', en: 'Newborn', hi: 'नवजात', c: '#e2457a' },
    { k: 'chart', href: '/parent-tools/fever-chart.html', en: 'Fever chart', hi: 'बुख़ार चार्ट', c: '#f08a1c' },
    { k: 'tools', href: '/#tools', en: 'Parent tools', hi: 'पेरेंट टूल्स', c: '#c2410c' },
    { k: 'vaccine', href: '/iap-immunization-schedule.html', en: 'Vaccines', hi: 'टीके', c: '#0f9b8e' },
    { k: 'guides', href: '/blog.html', en: 'Guides', hi: 'गाइड', c: '#8b4fd6' },
    { k: 'visit', href: '/#visit', en: 'Timings & map', hi: 'समय और पता', c: '#2f8fe0' },
    { k: 'call', href: 'tel:+918130521456', en: 'Call', hi: 'कॉल', c: '#3c9d3c' },
    { k: 'wa', href: 'https://wa.me/918130521456', en: 'WhatsApp', hi: 'WhatsApp', c: '#1fae5b', ext: true }
  ];

  var css = '' +
    ':root{--dmr-w:0px}' +
    '.dmr-tile{display:flex;flex-direction:column;align-items:center;gap:5px;text-decoration:none;color:#fff;font:600 12px/1.15 "Anek Devanagari",system-ui,sans-serif;text-align:center;border-radius:16px;padding:7px 4px;-webkit-tap-highlight-color:transparent}' +
    '.dmr-tile .dmr-ic{width:46px;height:46px;border-radius:15px;display:grid;place-items:center;background:var(--c);box-shadow:inset 0 -3px 0 rgba(0,0,0,.18);transition:transform .15s}' +
    '.dmr-tile svg{width:24px;height:24px;fill:none;stroke:#fff;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}' +
    '.dmr-tile:hover .dmr-ic{transform:translateY(-2px)}' +
    '.dmr-tile[aria-current="page"]{background:rgba(255,255,255,.12)}' +
    '.dmr-tile:focus-visible{outline:3px solid #ffd166;outline-offset:2px}' +
    '.dmr-logo{display:grid;place-items:center;width:52px;height:52px;border-radius:50%;background:#fff;color:#2a2580;font:800 19px "Anek Devanagari",system-ui,sans-serif;text-decoration:none;margin:4px auto 10px;font-stretch:112%}' +
    '.dmr-rail{display:none}' +
    '.dmr-tab{position:fixed;left:0;top:50%;transform:translateY(-50%);z-index:60;width:20px;padding:10px 0;border:0;border-radius:0 14px 14px 0;background:#2a2580;color:#fff;display:flex;flex-direction:column;align-items:center;gap:5px;cursor:pointer;box-shadow:2px 4px 14px rgba(20,16,70,.3)}' +
    '.dmr-tab i{width:7px;height:7px;border-radius:50%;display:block}' +
    '.dmr-tab b{writing-mode:vertical-rl;transform:rotate(180deg);font:700 11px "Anek Devanagari",system-ui,sans-serif;letter-spacing:.04em;margin-top:4px}' +
    '.dmr-tab:focus-visible{outline:3px solid #ffd166;outline-offset:2px}' +
    '.dmr-back{position:fixed;inset:0;background:rgba(15,12,50,.5);z-index:70;opacity:0;pointer-events:none;transition:opacity .2s}' +
    '.dmr-drawer{position:fixed;left:0;top:0;bottom:0;width:min(320px,86vw);z-index:71;background:#2a2580;color:#fff;transform:translateX(-102%);transition:transform .25s ease;padding:16px 14px calc(16px + env(safe-area-inset-bottom,0px));overflow-y:auto;display:flex;flex-direction:column;gap:12px}' +
    '.dmr-open .dmr-back{opacity:1;pointer-events:auto}.dmr-open .dmr-drawer{transform:none}' +
    '.dmr-dh{display:flex;align-items:center;justify-content:space-between;gap:10px}' +
    '.dmr-dh b{font:800 20px/1.1 "Anek Devanagari",system-ui,sans-serif;font-stretch:112%}.dmr-dh small{display:block;font:500 13px "Anek Devanagari",system-ui,sans-serif;opacity:.8}' +
    '.dmr-x{width:42px;height:42px;border-radius:50%;border:0;background:rgba(255,255,255,.14);color:#fff;font-size:24px;cursor:pointer;flex:none}' +
    '.dmr-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:6px}' +
    '.dmr-grid .dmr-tile{font-size:13px;padding:10px 2px}.dmr-grid .dmr-ic{width:54px;height:54px;border-radius:18px}' +
    '@media (min-width:1100px){' +
      ':root{--dmr-w:96px}body{padding-left:96px!important}' +
      '.dmr-tab,.dmr-back,.dmr-drawer{display:none!important}' +
      '.dmr-rail{display:flex;position:fixed;left:0;top:0;bottom:0;width:96px;z-index:60;background:#2a2580;flex-direction:column;align-items:stretch;gap:2px;padding:12px 8px;overflow-y:auto;scrollbar-width:none}' +
    '}' +
    '@media print{.dmr-rail,.dmr-tab,.dmr-drawer,.dmr-back{display:none!important}body{padding-left:0!important}}' +
    '@media (prefers-reduced-motion:reduce){.dmr-drawer,.dmr-back,.dmr-tile .dmr-ic{transition:none}}';

  function lang() {
    var l = document.documentElement.getAttribute('data-lang');
    if (!l) { try { l = localStorage.getItem('preferredClinicLang'); } catch (e) {} }
    return l === 'hi' ? 'hi' : 'en';
  }
  function current(it) {
    var p = location.pathname.replace(/index\.html$/, '');
    if (it.k === 'home') return p === '/' && !/^#(tools|visit)$/.test(location.hash);
    if (it.href.indexOf('/#') === 0) return p === '/' && location.hash === it.href.slice(1);
    return it.href === p;
  }
  function tiles() {
    var l = lang();
    return ITEMS.map(function (it) {
      return '<a class="dmr-tile" href="' + it.href + '"' + (it.ext ? ' target="_blank" rel="noopener"' : '') +
        (current(it) ? ' aria-current="page"' : '') + ' style="--c:' + it.c + '">' +
        '<span class="dmr-ic"><svg viewBox="0 0 24 24" aria-hidden="true">' + I[it.k] + '</svg></span>' +
        '<span>' + (l === 'hi' ? it.hi : it.en) + '</span></a>';
    }).join('');
  }

  function build() {
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    var l = lang();
    var rail = document.createElement('nav');
    rail.className = 'dmr-rail'; rail.setAttribute('aria-label', 'Site menu');
    var tab = document.createElement('button');
    tab.type = 'button'; tab.className = 'dmr-tab'; tab.setAttribute('aria-label', 'Open menu'); tab.setAttribute('aria-expanded', 'false');
    var back = document.createElement('div'); back.className = 'dmr-back';
    var drawer = document.createElement('nav');
    drawer.className = 'dmr-drawer'; drawer.setAttribute('aria-label', 'Site menu'); drawer.setAttribute('aria-hidden', 'true');

    function render() {
      l = lang();
      rail.innerHTML = '<a class="dmr-logo" href="/" aria-label="Dr. Dinesh Mittal — home">DM</a>' + tiles();
      tab.innerHTML = '<i style="background:#e2457a"></i><i style="background:#f5ad1b"></i><i style="background:#0f9b8e"></i><i style="background:#2f8fe0"></i><b>' + (l === 'hi' ? 'मेन्यू' : 'Menu') + '</b>';
      drawer.innerHTML = '<div class="dmr-dh"><div><b>Dr. Dinesh Mittal</b><small>' + (l === 'hi' ? 'शिशु रोग विशेषज्ञ, रोहिणी' : 'Child Specialist, Rohini') + '</small></div><button type="button" class="dmr-x" aria-label="Close menu">×</button></div><div class="dmr-grid">' + tiles() + '</div>';
    }
    render();
    document.body.appendChild(rail); document.body.appendChild(tab); document.body.appendChild(back); document.body.appendChild(drawer);

    function setOpen(on) {
      document.documentElement.classList.toggle('dmr-open', on);
      tab.setAttribute('aria-expanded', String(on)); drawer.setAttribute('aria-hidden', String(!on));
      if (on) { var f = drawer.querySelector('.dmr-x'); if (f) f.focus(); } else tab.focus({ preventScroll: true });
    }
    tab.addEventListener('click', function () { setOpen(true); });
    back.addEventListener('click', function () { setOpen(false); });
    drawer.addEventListener('click', function (e) {
      if (e.target.closest('.dmr-x')) setOpen(false);
      else if (e.target.closest('.dmr-tile')) setTimeout(function () { setOpen(false); }, 50);
    });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && document.documentElement.classList.contains('dmr-open')) setOpen(false); });
    window.addEventListener('hashchange', render);
    new MutationObserver(render).observe(document.documentElement, { attributes: true, attributeFilter: ['data-lang'] });
  }
  if (document.body) build(); else document.addEventListener('DOMContentLoaded', build);
})();
