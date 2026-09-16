(() => {
  'use strict';

  const viewer = document.querySelector('.pf-viewer');
  if (!viewer) return;

  const style = document.createElement('style');
  style.textContent = `
    /* Keep the preview compact and make exit controls obvious on desktop + mobile. */
    .pf-dialog{width:min(900px,92vw)!important;height:min(88vh,860px)!important}
    .pf-stage{height:min(70vh,720px)!important;margin-top:46px!important}
    .pf-image{max-width:min(86vw,760px)!important;max-height:68vh!important}
    .pf-close{width:46px!important;height:46px!important;background:rgba(255,255,255,.96)!important;color:#111!important;box-shadow:0 8px 30px rgba(0,0,0,.34)!important;font-size:30px!important;font-weight:500!important}
    .pf-bottom{height:auto!important;min-height:86px!important;display:flex!important;align-items:center!important;justify-content:center!important;gap:7px!important;flex-wrap:wrap!important;padding:12px 8px 4px!important}
    .pf-back{flex-basis:100%;margin:8px auto 0;border:1px solid rgba(255,255,255,.22);background:rgba(255,255,255,.10);color:#fff;height:42px;padding:0 18px;border-radius:999px;font:600 13px/1 inherit;letter-spacing:.01em;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:9px;transition:.18s ease;max-width:210px;backdrop-filter:blur(8px)}
    .pf-back:hover{background:#fff;color:#111;transform:translateY(-1px)}
    .pf-back-x{font-size:20px;line-height:1;margin-top:-1px}
    @media(max-width:700px){
      .pf-viewer{padding:6px!important}
      .pf-dialog{width:100vw!important;height:100dvh!important;max-height:100dvh!important}
      .pf-stage{height:calc(100dvh - 170px)!important;max-height:70dvh!important;margin-top:50px!important}
      .pf-image{max-width:90vw!important;max-height:66dvh!important}
      .pf-top{padding:8px 12px!important}
      .pf-close{width:44px!important;height:44px!important;font-size:28px!important}
      .pf-bottom{min-height:100px!important;padding-top:10px!important;padding-bottom:12px!important}
      .pf-back{height:46px;max-width:230px;font-size:14px;margin-top:10px}
    }
  `;
  document.head.appendChild(style);

  const bottom = viewer.querySelector('.pf-bottom');
  const close = viewer.querySelector('.pf-close');
  if (!bottom || !close || bottom.querySelector('.pf-back')) return;

  const back = document.createElement('button');
  back.type = 'button';
  back.className = 'pf-back';
  back.setAttribute('aria-label', 'Back to portfolio');
  back.innerHTML = '<span class="pf-back-x" aria-hidden="true">×</span><span>Back to Portfolio</span>';
  back.addEventListener('click', () => close.click());
  bottom.appendChild(back);
})();