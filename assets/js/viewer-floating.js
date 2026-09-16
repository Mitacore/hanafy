(() => {
  'use strict';

  const viewer = document.querySelector('.pf-viewer');
  if (!viewer) return;

  const dialog = viewer.querySelector('.pf-dialog');
  const stage = viewer.querySelector('.pf-stage');
  const image = viewer.querySelector('.pf-image');
  const closeBtn = viewer.querySelector('.pf-close');
  const bottom = viewer.querySelector('.pf-bottom');
  if (!dialog || !stage || !image || !closeBtn || !bottom) return;

  // Remove the older bottom Back button if a cached controls script created it.
  dialog.querySelector('.pf-back')?.remove();

  const style = document.createElement('style');
  style.textContent = `
    /* Floating preview card over the portfolio page. */
    .pf-viewer{
      position:fixed!important;inset:0!important;z-index:99999!important;
      display:none!important;align-items:center!important;justify-content:center!important;
      padding:clamp(10px,2.2vw,28px)!important;
      background:rgba(3,4,8,.68)!important;
      backdrop-filter:blur(10px) saturate(.85)!important;
      -webkit-backdrop-filter:blur(10px) saturate(.85)!important;
      overflow:hidden!important;
    }
    .pf-viewer.is-open{display:flex!important}
    .pf-dialog{
      position:relative!important;
      width:min(960px,calc(100vw - 32px))!important;
      height:min(880px,calc(100dvh - 36px))!important;
      max-height:calc(100dvh - 36px)!important;
      display:flex!important;flex-direction:column!important;
      background:rgba(15,16,21,.96)!important;
      border:1px solid rgba(255,255,255,.12)!important;
      border-radius:24px!important;
      box-shadow:0 26px 90px rgba(0,0,0,.58)!important;
      overflow:hidden!important;
    }
    .pf-top{
      position:absolute!important;top:0!important;left:0!important;right:0!important;
      height:64px!important;z-index:20!important;
      display:flex!important;align-items:center!important;gap:10px!important;
      padding:0 76px 0 20px!important;
      background:linear-gradient(to bottom,rgba(15,16,21,.98),rgba(15,16,21,.72),transparent)!important;
      pointer-events:none!important;
    }
    .pf-title{font-size:14px!important;font-weight:600!important;max-width:70%!important;color:#fff!important;overflow:hidden!important;text-overflow:ellipsis!important;white-space:nowrap!important}
    .pf-count{margin-left:auto!important;font-size:13px!important;color:#c6c6cc!important}
    .pf-close{
      position:absolute!important;top:12px!important;right:12px!important;z-index:30!important;
      width:46px!important;height:46px!important;border:1px solid rgba(255,255,255,.16)!important;
      border-radius:50%!important;background:#fff!important;color:#111!important;
      display:grid!important;place-items:center!important;cursor:pointer!important;
      font:400 30px/1 Arial,sans-serif!important;box-shadow:0 8px 28px rgba(0,0,0,.36)!important;
      pointer-events:auto!important;transition:transform .16s ease,background .16s ease!important;
    }
    .pf-close:hover{background:#f2f2f2!important;transform:scale(1.06)!important}
    .pf-stage{
      position:relative!important;flex:1 1 auto!important;width:100%!important;height:auto!important;
      min-height:0!important;margin:0!important;padding:62px 74px 78px!important;
      display:flex!important;align-items:center!important;justify-content:center!important;
      overflow:hidden!important;border-radius:0!important;touch-action:pan-y!important;
    }
    .pf-image{
      display:block!important;width:auto!important;height:auto!important;
      max-width:100%!important;max-height:100%!important;object-fit:contain!important;
      border-radius:10px!important;box-shadow:0 18px 58px rgba(0,0,0,.45)!important;
      transform-origin:center center!important;will-change:transform!important;
      user-select:none!important;-webkit-user-drag:none!important;
    }
    .pf-image.pf-zoomed{cursor:grab!important}
    .pf-image.pf-panning{cursor:grabbing!important;transition:none!important}
    .pf-arrow{
      position:absolute!important;top:50%!important;translate:0 -50%!important;z-index:12!important;
      width:46px!important;height:46px!important;border:0!important;border-radius:50%!important;
      background:rgba(255,255,255,.94)!important;color:#111!important;font-size:28px!important;
      display:grid!important;place-items:center!important;box-shadow:0 8px 26px rgba(0,0,0,.28)!important;
      cursor:pointer!important;
    }
    .pf-prev{left:16px!important}.pf-next{right:16px!important}
    .pf-bottom{
      position:absolute!important;left:50%!important;bottom:18px!important;translate:-50% 0!important;z-index:14!important;
      width:auto!important;height:30px!important;min-height:0!important;padding:0 10px!important;
      display:flex!important;align-items:center!important;justify-content:center!important;gap:6px!important;
      border-radius:999px!important;background:rgba(9,10,14,.60)!important;backdrop-filter:blur(8px)!important;
    }
    .pf-dot{width:6px!important;height:6px!important;flex:0 0 6px!important}
    .pf-zoom-tools{
      position:absolute;right:18px;bottom:17px;z-index:16;
      height:38px;display:flex;align-items:center;gap:3px;padding:3px;
      border:1px solid rgba(255,255,255,.14);border-radius:12px;
      background:rgba(9,10,14,.72);backdrop-filter:blur(10px);
      box-shadow:0 8px 26px rgba(0,0,0,.24)
    }
    .pf-zoom-btn{width:32px;height:32px;border:0;border-radius:9px;background:transparent;color:#fff;font:600 20px/1 Arial,sans-serif;cursor:pointer;display:grid;place-items:center}
    .pf-zoom-btn:hover{background:rgba(255,255,255,.12)}
    .pf-zoom-value{min-width:48px;text-align:center;font:600 11px/1.1 Arial,sans-serif;color:#d8d8dc;user-select:none}
    body.pf-lock{overflow:hidden!important}

    @media(max-width:700px){
      .pf-viewer{padding:10px!important;align-items:center!important}
      .pf-dialog{
        width:calc(100vw - 20px)!important;height:calc(100dvh - 24px)!important;max-height:calc(100dvh - 24px)!important;
        border-radius:19px!important;
      }
      .pf-top{height:58px!important;padding:0 66px 0 14px!important}
      .pf-title{font-size:12px!important;max-width:63%!important}
      .pf-count{font-size:12px!important}
      .pf-close{display:grid!important;top:9px!important;right:9px!important;width:42px!important;height:42px!important;font-size:27px!important}
      .pf-stage{padding:58px 12px 78px!important;touch-action:pan-y!important}
      .pf-image{max-width:100%!important;max-height:100%!important;border-radius:7px!important}
      .pf-arrow{width:42px!important;height:42px!important;font-size:26px!important;background:rgba(255,255,255,.92)!important}
      .pf-prev{left:7px!important}.pf-next{right:7px!important}
      .pf-bottom{bottom:18px!important;max-width:44vw!important;overflow:hidden!important}
      .pf-zoom-tools{left:12px;right:auto;bottom:14px;height:42px}
      .pf-zoom-btn{width:34px;height:34px}
      .pf-zoom-value{min-width:42px;font-size:10px}
    }
  `;
  document.head.appendChild(style);

  const tools = document.createElement('div');
  tools.className = 'pf-zoom-tools';
  tools.setAttribute('aria-label','Image zoom controls');
  tools.innerHTML = `
    <button type="button" class="pf-zoom-btn pf-zoom-out" aria-label="Zoom out">−</button>
    <span class="pf-zoom-value">100%</span>
    <button type="button" class="pf-zoom-btn pf-zoom-in" aria-label="Zoom in">+</button>
    <button type="button" class="pf-zoom-btn pf-zoom-reset" aria-label="Reset zoom" title="Reset zoom">↺</button>
  `;
  dialog.appendChild(tools);

  const zoomOut = tools.querySelector('.pf-zoom-out');
  const zoomIn = tools.querySelector('.pf-zoom-in');
  const zoomReset = tools.querySelector('.pf-zoom-reset');
  const zoomValue = tools.querySelector('.pf-zoom-value');

  let scale = 1;
  let tx = 0;
  let ty = 0;
  let panning = false;
  let panStartX = 0;
  let panStartY = 0;
  let panBaseX = 0;
  let panBaseY = 0;

  const clamp = (n,min,max) => Math.max(min,Math.min(max,n));

  function limitPan(){
    if (scale <= 1){ tx = 0; ty = 0; return; }
    const r = stage.getBoundingClientRect();
    const maxX = Math.max(0,(r.width * (scale - 1)) / 2);
    const maxY = Math.max(0,(r.height * (scale - 1)) / 2);
    tx = clamp(tx,-maxX,maxX);
    ty = clamp(ty,-maxY,maxY);
  }

  function applyZoom(animate=true){
    limitPan();
    image.style.transition = animate ? 'transform .18s ease, opacity .18s ease' : 'none';
    image.style.transform = `translate3d(${tx}px,${ty}px,0) scale(${scale})`;
    image.classList.toggle('pf-zoomed',scale > 1.01);
    zoomValue.textContent = `${Math.round(scale * 100)}%`;
  }

  function setScale(next){
    scale = clamp(next,1,3.5);
    if (scale === 1){ tx = 0; ty = 0; }
    applyZoom(true);
  }

  function resetZoom(){
    scale = 1; tx = 0; ty = 0; panning = false;
    image.classList.remove('pf-panning');
    applyZoom(true);
  }

  zoomIn.addEventListener('click', e => { e.stopPropagation(); setScale(scale + .25); });
  zoomOut.addEventListener('click', e => { e.stopPropagation(); setScale(scale - .25); });
  zoomReset.addEventListener('click', e => { e.stopPropagation(); resetZoom(); });

  image.addEventListener('dblclick', e => {
    e.preventDefault(); e.stopPropagation();
    setScale(scale > 1.01 ? 1 : 2);
  });

  stage.addEventListener('wheel', e => {
    if (!viewer.classList.contains('is-open')) return;
    if (Math.abs(e.deltaY) < 1) return;
    e.preventDefault();
    setScale(scale + (e.deltaY < 0 ? .2 : -.2));
  }, {passive:false});

  stage.addEventListener('pointerdown', e => {
    if (scale <= 1.01) return; // At 100%, keep carousel swipe/navigation untouched.
    if (e.target.closest('.pf-arrow,.pf-zoom-tools,.pf-close')) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    panning = true;
    panStartX = e.clientX; panStartY = e.clientY;
    panBaseX = tx; panBaseY = ty;
    image.classList.add('pf-panning');
    try { stage.setPointerCapture(e.pointerId); } catch (_) {}
  }, true);

  stage.addEventListener('pointermove', e => {
    if (!panning) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    tx = panBaseX + (e.clientX - panStartX);
    ty = panBaseY + (e.clientY - panStartY);
    applyZoom(false);
  }, true);

  const endPan = e => {
    if (!panning) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    panning = false;
    image.classList.remove('pf-panning');
    try { stage.releasePointerCapture(e.pointerId); } catch (_) {}
    applyZoom(true);
  };
  stage.addEventListener('pointerup', endPan, true);
  stage.addEventListener('pointercancel', endPan, true);

  // Reset zoom whenever carousel changes to another image.
  new MutationObserver(() => resetZoom()).observe(image,{attributes:true,attributeFilter:['src']});

  // Keep X visually inside the floating window on every viewport change.
  window.addEventListener('resize', () => { limitPan(); applyZoom(false); }, {passive:true});
})();