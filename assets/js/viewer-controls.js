(() => {
  'use strict';

  const viewer = document.querySelector('.pf-viewer');
  if (!viewer) return;

  const style = document.createElement('style');
  style.textContent = `
    /* Viewer controls: always provide an obvious escape route. */
    .pf-dialog{width:min(900px,92vw)!important;height:min(88vh,860px)!important}
    .pf-stage{height:min(68vh,700px)!important;margin-top:46px!important}
    .pf-image{max-width:min(84vw,740px)!important;max-height:66vh!important}

    .pf-close{
      width:46px!important;height:46px!important;
      background:rgba(255,255,255,.96)!important;color:#111!important;
      box-shadow:0 8px 30px rgba(0,0,0,.34)!important;
      font-size:30px!important;font-weight:500!important;
    }

    .pf-bottom{
      height:auto!important;min-height:44px!important;
      display:flex!important;align-items:center!important;justify-content:center!important;
      gap:7px!important;flex-wrap:wrap!important;padding:10px 8px!important;
    }

    .pf-back{
      flex-basis:100%;margin:8px auto 0;
      border:1px solid rgba(255,255,255,.26);
      background:rgba(255,255,255,.14);color:#fff;
      height:44px;padding:0 20px;border-radius:999px;
      font:600 13px/1 inherit;letter-spacing:.01em;cursor:pointer;
      display:inline-flex;align-items:center;justify-content:center;gap:9px;
      transition:.18s ease;max-width:220px;backdrop-filter:blur(10px);
      box-shadow:0 10px 34px rgba(0,0,0,.3)
    }
    .pf-back:hover{background:#fff;color:#111;transform:translateY(-1px)}
    .pf-back-x{font-size:21px;line-height:1;margin-top:-1px}

    /* Dedicated phone exit button. It does not depend on the dots tray. */
    .pf-mobile-exit{display:none}

    @media(max-width:700px){
      .pf-viewer{padding:0!important}
      .pf-dialog{width:100vw!important;height:100dvh!important;max-height:100dvh!important}
      .pf-stage{
        height:calc(100dvh - 178px)!important;
        max-height:calc(100dvh - 178px)!important;
        margin-top:48px!important;padding-bottom:2px!important
      }
      .pf-image{max-width:92vw!important;max-height:calc(100dvh - 205px)!important}
      .pf-top{padding:8px 12px!important;padding-right:70px!important}
      .pf-title{max-width:62%!important}

      /* Keep an actual X visible in the viewport on mobile. */
      .pf-close{
        display:grid!important;
        position:fixed!important;
        top:calc(10px + env(safe-area-inset-top))!important;
        right:12px!important;
        width:52px!important;height:52px!important;
        z-index:100003!important;
        border:1px solid rgba(0,0,0,.12)!important;
        background:#fff!important;color:#111!important;
        box-shadow:0 10px 34px rgba(0,0,0,.45)!important;
        font-size:34px!important;
      }

      /* Dots live in a small tray above the Back button. */
      .pf-bottom{
        position:fixed!important;
        left:50%!important;transform:translateX(-50%)!important;
        right:auto!important;
        bottom:calc(82px + env(safe-area-inset-bottom))!important;
        width:auto!important;min-width:136px!important;
        min-height:42px!important;height:42px!important;
        padding:0 16px!important;
        border-radius:999px!important;
        background:rgba(16,16,18,.88)!important;
        border:1px solid rgba(255,255,255,.12)!important;
        backdrop-filter:blur(16px)!important;-webkit-backdrop-filter:blur(16px)!important;
        box-shadow:0 10px 30px rgba(0,0,0,.35)!important;
        z-index:100001!important;
        flex-wrap:nowrap!important;
      }
      .pf-bottom .pf-back{display:none!important}
      .pf-dot{width:7px!important;height:7px!important}

      .pf-mobile-exit{
        display:flex!important;
        position:fixed!important;
        left:50%!important;transform:translateX(-50%)!important;
        bottom:calc(18px + env(safe-area-inset-bottom))!important;
        z-index:100002!important;
        height:52px!important;
        min-width:220px!important;
        padding:0 24px!important;
        border:0!important;border-radius:999px!important;
        background:#fff!important;color:#111!important;
        align-items:center!important;justify-content:center!important;gap:10px!important;
        font:700 14px/1 inherit!important;
        box-shadow:0 12px 34px rgba(0,0,0,.42)!important;
        cursor:pointer!important;
      }
      .pf-mobile-exit span:first-child{font-size:25px;line-height:1}
    }
  `;
  document.head.appendChild(style);

  const bottom = viewer.querySelector('.pf-bottom');
  const close = viewer.querySelector('.pf-close');
  if (!close) return;

  if (bottom) {
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
  }

  let mobileExit = viewer.querySelector('.pf-mobile-exit');
  if (!mobileExit) {
    mobileExit = document.createElement('button');
    mobileExit.type = 'button';
    mobileExit.className = 'pf-mobile-exit';
    mobileExit.setAttribute('aria-label', 'Close preview and return to portfolio');
    mobileExit.innerHTML = '<span aria-hidden="true">×</span><span>Back to Portfolio</span>';
    viewer.appendChild(mobileExit);
  }
  mobileExit.addEventListener('click', () => close.click());

  /* Android/browser back button closes the preview first instead of leaving the site. */
  let viewerHistoryActive = false;
  let closingFromHistory = false;

  const observer = new MutationObserver(() => {
    const isOpen = viewer.classList.contains('is-open');
    if (isOpen && !viewerHistoryActive) {
      history.pushState({ ...(history.state || {}), portfolioViewer: true }, '', location.href);
      viewerHistoryActive = true;
    }
    if (!isOpen && viewerHistoryActive && !closingFromHistory && history.state?.portfolioViewer) {
      viewerHistoryActive = false;
      history.back();
    }
  });
  observer.observe(viewer, {attributes:true, attributeFilter:['class']});

  window.addEventListener('popstate', () => {
    if (viewer.classList.contains('is-open')) {
      closingFromHistory = true;
      viewerHistoryActive = false;
      close.click();
      closingFromHistory = false;
    }
  });
})();