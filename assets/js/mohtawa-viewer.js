(() => {
  'use strict';

  const sets = new Map([
    ['1AhzmWkk2-DIbH5wMCcSdEs9KQ969040Y', [
      '1AhzmWkk2-DIbH5wMCcSdEs9KQ969040Y',
      '1ILGfApglCr2g70GBNNokd13Bxg9R5_8J',
      '1Vf7q_JGVh3VdH1ORnhJ4By0ilEXF6Mq8',
      '10qCNBsG5xCQ5EaYjbHD-ORbf6zlzo5a_',
      '1gCfLUOPffYRGcpE6KdNpDcQanvnzuVCW',
      '1aXlND19DWGk0Zxo0F-zzqjftJ3KjT4Ug',
      '1vTwOllKHqCjUXrCbETXSYIHgrl7M-0Kq'
    ]],
    ['1ZZSem2sVPhapIYsnAEsiZm-6bnyEGrL8', [
      '1ZZSem2sVPhapIYsnAEsiZm-6bnyEGrL8',
      '1qHzrvnNV8lHiO8KuDKmHyRltp_65NuMs',
      '1ACxofBfVRadl_tzJtd6oYE9uilOWe2sm',
      '1JvMUJYn-7ywNtvsucCOsuvem96GtnEaI',
      '1pTub5AQFeiHqCtbBpMkaqOCDpeZzLowc'
    ]]
  ]);

  const idFromHref = href => {
    const m = String(href || '').match(/\/d\/([^/]+)/);
    return m ? m[1] : null;
  };

  const requestedWidth = () => window.matchMedia('(max-width:700px)').matches ? 1080 : 1440;
  const driveImage = id => `https://drive.google.com/thumbnail?id=${encodeURIComponent(id)}&sz=w${requestedWidth()}`;

  const style = document.createElement('style');
  style.textContent = `
    .mh-viewer{position:fixed;inset:0;z-index:100500;background:rgba(5,5,7,.96);display:none;align-items:center;justify-content:center;color:#fff;font-family:inherit;overscroll-behavior:contain}
    .mh-viewer.is-open{display:flex}
    .mh-dialog{width:min(900px,96vw);height:min(92dvh,900px);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:12px;box-sizing:border-box}
    .mh-head{width:min(760px,90vw);display:flex;align-items:center;gap:12px;margin-bottom:10px;min-height:38px}
    .mh-title{font-size:14px;font-weight:650;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}
    .mh-count{font-size:13px;color:#b8b8be;white-space:nowrap}
    .mh-stage{position:relative;width:100%;height:min(68dvh,690px);display:flex;align-items:center;justify-content:center;overflow:hidden}
    .mh-image{display:block;max-width:min(84vw,720px);max-height:66dvh;width:auto;height:auto;object-fit:contain;border-radius:10px;box-shadow:0 24px 80px rgba(0,0,0,.45);user-select:none;-webkit-user-drag:none}
    .mh-arrow{position:absolute;top:50%;transform:translateY(-50%);width:48px;height:48px;border:0;border-radius:50%;background:rgba(255,255,255,.94);color:#111;font-size:30px;display:grid;place-items:center;cursor:pointer;box-shadow:0 8px 30px rgba(0,0,0,.32);z-index:3}
    .mh-prev{left:14px}.mh-next{right:14px}
    .mh-foot{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:12px;padding-top:12px;min-height:82px}
    .mh-dots{display:flex;align-items:center;justify-content:center;gap:7px;min-height:10px}
    .mh-dot{width:7px;height:7px;padding:0;border:0;border-radius:50%;background:#66666d;cursor:pointer}
    .mh-dot.active{background:#fff;transform:scale(1.35)}
    .mh-back{height:44px;border:1px solid rgba(255,255,255,.24);border-radius:999px;background:rgba(255,255,255,.11);color:#fff;padding:0 20px;display:inline-flex;align-items:center;gap:9px;font:600 14px/1 inherit;cursor:pointer;backdrop-filter:blur(10px)}
    .mh-back:hover{background:#fff;color:#111}
    body.mh-lock{overflow:hidden!important}
    @media(max-width:700px){
      .mh-dialog{width:100vw;height:100dvh;padding:8px 6px}
      .mh-head{width:92vw;margin-top:6px}
      .mh-stage{height:calc(100dvh - 180px);max-height:68dvh}
      .mh-image{max-width:91vw;max-height:64dvh;border-radius:5px}
      .mh-arrow{width:42px;height:42px;font-size:25px}
      .mh-prev{left:8px}.mh-next{right:8px}
      .mh-foot{min-height:106px;padding-bottom:max(12px,env(safe-area-inset-bottom))}
      .mh-back{height:48px;min-width:200px;justify-content:center;font-size:14px;background:#fff;color:#111;border-color:#fff}
    }
  `;
  document.head.appendChild(style);

  const viewer = document.createElement('div');
  viewer.className = 'mh-viewer';
  viewer.setAttribute('role','dialog');
  viewer.setAttribute('aria-modal','true');
  viewer.innerHTML = `
    <div class="mh-dialog">
      <div class="mh-head"><div class="mh-title"></div><div class="mh-count"></div></div>
      <div class="mh-stage">
        <button class="mh-arrow mh-prev" type="button" aria-label="Previous image">‹</button>
        <img class="mh-image" alt="" draggable="false" />
        <button class="mh-arrow mh-next" type="button" aria-label="Next image">›</button>
      </div>
      <div class="mh-foot">
        <div class="mh-dots" aria-label="Carousel pages"></div>
        <button class="mh-back" type="button"><span aria-hidden="true">×</span><span>Back to Portfolio</span></button>
      </div>
    </div>
  `;
  document.body.appendChild(viewer);

  const image = viewer.querySelector('.mh-image');
  const title = viewer.querySelector('.mh-title');
  const count = viewer.querySelector('.mh-count');
  const dots = viewer.querySelector('.mh-dots');
  const prev = viewer.querySelector('.mh-prev');
  const next = viewer.querySelector('.mh-next');
  const back = viewer.querySelector('.mh-back');
  let slides = [];
  let index = 0;
  let touchX = null;

  const render = () => {
    if (!slides.length) return;
    image.src = slides[index];
    count.textContent = `${index + 1} / ${slides.length}`;
    [...dots.children].forEach((d,i) => d.classList.toggle('active', i === index));
    const nextIndex = (index + 1) % slides.length;
    const preload = new Image();
    preload.src = slides[nextIndex];
  };

  const open = anchor => {
    const id = idFromHref(anchor.getAttribute('href'));
    const ids = sets.get(id);
    if (!ids) return false;
    const localCover = anchor.querySelector('img')?.src;
    slides = [localCover, ...ids.slice(1).map(driveImage)].filter(Boolean);
    index = 0;
    title.textContent = (anchor.getAttribute('aria-label') || 'Mohtawa carousel').replace(/\s*[—-]\s*open.*$/i,'');
    dots.innerHTML = '';
    slides.forEach((_,i) => {
      const d = document.createElement('button');
      d.type = 'button';
      d.className = 'mh-dot';
      d.setAttribute('aria-label', `Go to image ${i + 1}`);
      d.addEventListener('click', () => { index = i; render(); });
      dots.appendChild(d);
    });
    document.querySelectorAll('.motion-panel').forEach(p => { p.dataset.mhWasPaused = p.dataset.paused || 'false'; p.dataset.paused = 'true'; });
    document.body.classList.add('mh-lock');
    viewer.classList.add('is-open');
    render();
    return true;
  };

  const close = () => {
    viewer.classList.remove('is-open');
    document.body.classList.remove('mh-lock');
    document.querySelectorAll('.motion-panel').forEach(p => {
      if (p.dataset.mhWasPaused != null) {
        p.dataset.paused = p.dataset.mhWasPaused;
        delete p.dataset.mhWasPaused;
      }
    });
    image.removeAttribute('src');
    slides = [];
  };

  const go = delta => {
    if (slides.length < 2) return;
    index = (index + delta + slides.length) % slides.length;
    render();
  };

  prev.addEventListener('click', () => go(-1));
  next.addEventListener('click', () => go(1));
  back.addEventListener('click', close);
  viewer.addEventListener('click', e => { if (e.target === viewer) close(); });
  viewer.querySelector('.mh-stage').addEventListener('touchstart', e => { touchX = e.changedTouches[0]?.clientX ?? null; }, {passive:true});
  viewer.querySelector('.mh-stage').addEventListener('touchend', e => {
    if (touchX == null) return;
    const x = e.changedTouches[0]?.clientX ?? touchX;
    const dx = x - touchX;
    touchX = null;
    if (Math.abs(dx) > 45) go(dx > 0 ? -1 : 1);
  }, {passive:true});
  document.addEventListener('keydown', e => {
    if (!viewer.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    else if (e.key === 'ArrowLeft') go(-1);
    else if (e.key === 'ArrowRight') go(1);
  });

  const handle = e => {
    const anchor = e.target.closest?.('a.moving-frame[href]');
    if (!anchor) return;
    const id = idFromHref(anchor.getAttribute('href'));
    if (!sets.has(id)) return;
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    open(anchor);
  };

  document.addEventListener('pointerup', handle, true);
  document.addEventListener('click', handle, true);
})();