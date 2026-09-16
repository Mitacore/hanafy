(() => {
  'use strict';

  const viewer = document.querySelector('.pf-viewer');
  if (!viewer) return;

  const style = document.createElement('style');
  style.textContent = `
    /* Compact preview + an obvious, consistent way back to the portfolio. */
    .pf-dialog{width:min(900px,92vw)!important;height:min(88vh,860px)!important}
    .pf-stage{height:min(68vh,700px)!important;margin-top:46px!important}
    .pf-image{max-width:min(84vw,740px)!important;max-height:66vh!important}
    .pf-close{width:46px!important;height:46px!important;background:rgba(255,255,255,.96)!important;color:#111!important;box-shadow:0 8px 30px rgba(0,0,0,.34)!important;font-size:30px!important;font-weight:500!important}
    .pf-bottom{height:auto!important;min-height:86px!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:7px!important;flex-wrap:wrap!important;padding:12px 8px 4px!important}
    .pf-back{flex-basis:100%;margin:8px auto 0;border:1px solid rgba(255,255,255,.26);background:rgba(255,255,255,.14);color:#fff;height:44px;padding:0 20px;border-radius:999px;font:600 13px/1 inherit;letter-spacing:.01em;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:9px;transition:.18s ease;max-width:220px;backdrop-filter:blur(10px);box-shadow:0 10px 34px rgba(0,0,0,.3)}
    .pf-back:hover{background:#fff;color:#111;transform:translateY(-1px)}
    .pf-back-x{font-size:21px;line-height:1;margin-top:-1px}

    @media(max-width:700px){
      .pf-viewer{padding:4px!important}
      .pf-dialog{width:100vw!important;height:100dvh!important;max-height:100dvh!important}
      .pf-stage{height:calc(100dvh - 210px)!important;max-height:calc(100dvh - 210px)!important;margin-top:38px!important;padding-bottom:4px!important}
      .pf-image{max-width:92vw!important;max-height:calc(100dvh - 235px)!important}
      .pf-top{padding:7px 12px!important;pointer-events:none}
      .pf-title,.pf-count{pointer-events:auto}
      /* The browser chrome can cover the top-right X on phones, so hide it there. */
      .pf-close{display:none!important}
      /* Keep dots + Back in one fixed, always-visible bottom control tray. */
      .pf-bottom{position:fixed!important;left:50%!important;transform:translateX(-50%)!important;right:auto!important;bottom:calc(12px + env(safe-area-inset-bottom))!important;width:min(92vw,430px)!important;min-height:92px!important;padding:11px 14px 10px!important;border-radius:24px!important;background:rgba(16,16,18,.86)!important;border:1px solid rgba(255,255,255,.12)!important;backdrop-filter:blur(16px)!important;-webkit-backdrop-filter:blur(16px)!important;box-shadow:0 16px 44px rgba(0,0,0,.42)!important;z-index:20!important}
      .pf-dot{width:7px!important;height:7px!important}
      .pf-back{height:48px!important;max-width:260px!important;font-size:14px!important;margin-top:8px!important;background:rgba(255,255,255,.96)!important;color:#111!important;border-color:transparent!important;box-shadow:0 7px 24px rgba(0,0,0,.28)!important}
      .pf-back-x{font-size:22px!important}
    }
  `;
  document.head.appendChild(style);

  const bottom = viewer.querySelector('.pf-bottom');
  const close = viewer.querySelector('.pf-close');
  if (!bottom || !close) return;

  let back = bottom.querySelector('.pf-back');
  if (!back) {
    back = document.createElement('button');
    back.type = 'button';
    back.className = 'pf-back';
    back.setAttribute('aria-label', 'Back to portfolio');
    back.innerHTML = '<span class="pf-back-x" aria-hidden="true">×</span><span>Back to Portfolio</span>';
    bottom.appendChild(back);
  }

  back.addEventListener('click', () => close.click());
})();