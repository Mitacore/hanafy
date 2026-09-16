(() => {
  'use strict';

  const host = document.querySelector('#character-design');
  if (!host) return;

  // Character studies now live in one unified section.
  document.querySelector('#sketches')?.remove();

  const items = [
    {title:'Pinocchio', ar:'تصميم شخصية', meta:'STYLIZED CHARACTER', image:'assets/images/02-pinocchio.webp', tone:'sand'},
    {title:"Jemey’s Adventure", ar:'شخصية مغامرة', meta:'CHARACTER EXPLORATION', image:'assets/images/03-jemeys-adventure.webp', tone:'blue'},
    {title:'Character Development', ar:'تطوير الشخصية', meta:'SHAPE · POSE · DEVELOPMENT', image:'assets/images/04-character-development.webp', tone:'paper'},
    {title:'Assassin', ar:'تصميم محارب', meta:'COSTUME · SILHOUETTE', image:'assets/images/05-assassin.webp', tone:'red'},
    {title:'Island Fighter', ar:'مقاتل الجزيرة', meta:'FIGHTER CONCEPT', image:'assets/images/06-island-fighter.webp', tone:'green'},
    {title:'Character Sketches', ar:'اسكتشات ودراسات', meta:'SKETCHBOOK · STUDIES', image:'assets/images/07-character-sketches.webp', tone:'ink'}
  ];

  const left = [items[0], items[2], items[4]];
  const right = [items[1], items[3], items[5]];

  const card = x => `
    <a class="cd2-card moving-frame cd2-${x.tone}" href="${x.image}" aria-label="${x.title} — view full artwork">
      <span class="cd2-blur" style="background-image:url('${x.image}')" aria-hidden="true"></span>
      <span class="cd2-shade" aria-hidden="true"></span>
      <span class="cd2-art"><img src="${x.image}" alt="${x.title}" loading="lazy" decoding="async" draggable="false"></span>
      <span class="cd2-index">CHARACTER STUDY</span>
      <span class="cd2-caption">
        <span class="cd2-name"><strong>${x.title}</strong><small>${x.meta}</small></span>
        <span class="cd2-ar" lang="ar" dir="rtl">${x.ar}</span>
      </span>
      <span class="cd2-open" aria-hidden="true">↗</span>
    </a>`;

  const cycle = list => `<div class="cd2-cycle">${list.map(card).join('')}</div>`;

  host.innerHTML = `
    <section class="cd2" aria-label="Character Design — تصميم الشخصيات">
      <div class="cd2-head">
        <div class="cd2-eyebrow"><span>CHARACTER ART</span><span>VISUAL DEVELOPMENT</span><span>SKETCHES</span></div>
        <div class="cd2-title">
          <h2><span>CHARACTER</span><b>DESIGN</b></h2>
          <div class="cd2-ar-title" lang="ar" dir="rtl">تصميم الشخصيات</div>
        </div>
        <div class="cd2-intro">
          <p>Exploration from rough sketch to final character — shape language, costume, pose, expression and visual identity.</p>
          <button class="cd2-pause" type="button" aria-pressed="false"><span class="cd2-pause-icon">Ⅱ</span><span class="cd2-pause-label">Pause</span></button>
        </div>
      </div>

      <div class="cd2-window">
        <div class="cd2-lane" data-dir="up">${cycle(left)}${cycle(left)}</div>
        <div class="cd2-lane cd2-down" data-dir="down">${cycle(right)}${cycle(right)}</div>
        <span class="cd2-fade cd2-fade-top" aria-hidden="true"></span>
        <span class="cd2-fade cd2-fade-bottom" aria-hidden="true"></span>
      </div>

      <div class="cd2-bottom"><span>SELECTED CHARACTER WORK</span><span lang="ar" dir="rtl">اضغط على أي تصميم لمشاهدته بالكامل</span></div>
    </section>`;

  const style = document.createElement('style');
  style.textContent = `
    #character-design{margin:0!important;padding:0!important;width:100%!important;max-width:none!important}
    #character-design>.art-ribbon{display:none!important}
    .cd2{--cream:#f2eadf;--muted:#9f9a92;position:relative;background:#121313;color:var(--cream);padding:clamp(64px,8vw,118px) clamp(18px,4.8vw,82px) clamp(56px,7vw,96px);overflow:hidden;border-top:1px solid rgba(255,255,255,.08);border-bottom:1px solid rgba(255,255,255,.08)}
    .cd2-head,.cd2-window,.cd2-bottom{max-width:1450px;margin-left:auto;margin-right:auto}
    .cd2-eyebrow{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:18px;color:#928e87;font-size:10px;font-weight:700;letter-spacing:.18em}
    .cd2-eyebrow span{border:1px solid rgba(255,255,255,.12);border-radius:999px;padding:7px 10px}
    .cd2-title{position:relative;padding:6px 0 18px;border-bottom:1px solid rgba(255,255,255,.13)}
    .cd2-title h2{margin:0;display:flex;flex-direction:column;align-items:flex-start;font-size:clamp(70px,11vw,172px);line-height:.72;letter-spacing:-.078em;font-weight:900;text-transform:uppercase}
    .cd2-title h2 span{color:var(--cream)}
    .cd2-title h2 b{font:inherit;color:transparent;-webkit-text-stroke:1.5px rgba(242,234,223,.92);margin-left:clamp(36px,8vw,126px)}
    .cd2-ar-title{position:absolute;right:0;bottom:20px;color:#d6b987;font-weight:800;font-size:clamp(30px,4.7vw,70px);line-height:1;white-space:nowrap;letter-spacing:-.035em}
    .cd2-intro{display:flex;align-items:flex-start;justify-content:space-between;gap:28px;padding:22px 0 30px}
    .cd2-intro p{max-width:710px;margin:0;color:#aaa69f;font-size:clamp(13px,1.25vw,18px);line-height:1.65}
    .cd2-pause{height:42px;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.055);color:#fff;border-radius:999px;padding:0 16px;display:flex;align-items:center;gap:9px;font:700 11px/1 inherit;letter-spacing:.08em;cursor:pointer}
    .cd2-pause:hover{background:rgba(255,255,255,.11)}

    .cd2-window{position:relative;height:clamp(820px,86vw,1160px);display:grid;grid-template-columns:1fr 1fr;gap:clamp(12px,2vw,28px);overflow:hidden;border-radius:28px;background:#090a0a;padding:clamp(9px,1.1vw,16px)}
    .cd2-lane{height:100%;overflow:hidden;scrollbar-width:none;overscroll-behavior:none;touch-action:pan-y}
    .cd2-lane::-webkit-scrollbar{display:none}
    .cd2-cycle{display:flex;flex-direction:column;gap:clamp(12px,1.6vw,24px);padding-bottom:clamp(12px,1.6vw,24px)}
    .cd2-card{position:relative;display:block;aspect-ratio:4/5;min-height:0;border-radius:22px;overflow:hidden;text-decoration:none;color:#fff;border:1px solid rgba(255,255,255,.10);box-shadow:0 24px 70px rgba(0,0,0,.34);isolation:isolate;cursor:zoom-in;background:#1a1a1a}
    .cd2-blur{position:absolute;inset:-10%;z-index:-4;background-size:cover;background-position:center;filter:blur(30px) saturate(.72) brightness(.55);transform:scale(1.12);opacity:.78}
    .cd2-shade{position:absolute;inset:0;z-index:-3;background:linear-gradient(180deg,rgba(0,0,0,.10) 0%,rgba(0,0,0,.04) 52%,rgba(0,0,0,.78) 100%),radial-gradient(circle at 50% 24%,rgba(255,255,255,.14),transparent 44%)}
    .cd2-sand{background:#5b4636}.cd2-blue{background:#203849}.cd2-paper{background:#5e5a52}.cd2-red{background:#35161b}.cd2-green{background:#1b3427}.cd2-ink{background:#252936}
    .cd2-art{position:absolute;inset:46px 28px 108px;display:flex;align-items:center;justify-content:center}
    .cd2-art img{display:block;max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain;border-radius:9px;box-shadow:0 16px 50px rgba(0,0,0,.30);transition:transform .35s cubic-bezier(.2,.72,.2,1)}
    .cd2-card:hover .cd2-art img{transform:scale(1.025)}
    .cd2-index{position:absolute;left:18px;top:17px;font-size:8px;font-weight:800;letter-spacing:.18em;color:rgba(255,255,255,.62)}
    .cd2-open{position:absolute;right:15px;top:14px;width:34px;height:34px;border:1px solid rgba(255,255,255,.19);background:rgba(0,0,0,.26);backdrop-filter:blur(8px);border-radius:50%;display:grid;place-items:center;font-size:18px;transition:.2s}
    .cd2-card:hover .cd2-open{background:#f4eee5;color:#111;transform:rotate(5deg)}
    .cd2-caption{position:absolute;left:20px;right:20px;bottom:18px;display:flex;justify-content:space-between;align-items:flex-end;gap:18px}
    .cd2-name{display:flex;flex-direction:column;gap:4px;min-width:0}
    .cd2-name strong{font-size:clamp(17px,1.5vw,24px);line-height:1.08;letter-spacing:-.03em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .cd2-name small{font-size:8px;letter-spacing:.15em;color:rgba(255,255,255,.58);font-weight:700}
    .cd2-ar{color:#ead1a6;font-size:clamp(14px,1.25vw,19px);font-weight:800;white-space:nowrap}
    .cd2-fade{position:absolute;left:0;right:0;height:115px;z-index:8;pointer-events:none}
    .cd2-fade-top{top:0;background:linear-gradient(#090a0a,transparent)}
    .cd2-fade-bottom{bottom:0;background:linear-gradient(transparent,#090a0a)}
    .cd2-bottom{display:flex;justify-content:space-between;gap:18px;padding-top:16px;color:#77746f;font-size:9px;font-weight:700;letter-spacing:.15em}
    .cd2-bottom [lang="ar"]{letter-spacing:0;font-size:12px;font-weight:600;color:#918b82}

    @media(max-width:700px){
      .cd2{padding:48px 8px 46px}
      .cd2-head{padding:0 8px}
      .cd2-eyebrow{gap:5px;margin-bottom:13px;font-size:7px;letter-spacing:.12em}
      .cd2-eyebrow span{padding:5px 7px}
      .cd2-title{padding-bottom:52px}
      .cd2-title h2{font-size:clamp(52px,17.6vw,84px);line-height:.76}
      .cd2-title h2 b{margin-left:20px;-webkit-text-stroke-width:1px}
      .cd2-ar-title{left:22px;right:auto;bottom:14px;font-size:clamp(25px,8.5vw,38px)}
      .cd2-intro{padding:15px 0 20px;align-items:center}
      .cd2-intro p{font-size:11px;line-height:1.45;max-width:78%}
      .cd2-pause{width:38px;height:38px;padding:0;justify-content:center}
      .cd2-pause-label{display:none}
      .cd2-window{height:820px;border-radius:17px;gap:7px;padding:6px}
      .cd2-cycle{gap:7px;padding-bottom:7px}
      .cd2-card{border-radius:14px;aspect-ratio:3/4}
      .cd2-art{inset:35px 8px 88px}
      .cd2-art img{border-radius:5px}
      .cd2-index{left:10px;top:10px;font-size:5.7px;letter-spacing:.10em}
      .cd2-open{right:8px;top:8px;width:26px;height:26px;font-size:13px}
      .cd2-caption{left:10px;right:10px;bottom:10px;display:block}
      .cd2-name{gap:2px}.cd2-name strong{font-size:12px}.cd2-name small{font-size:5.6px;letter-spacing:.08em}
      .cd2-ar{display:block;margin-top:3px;font-size:10px}
      .cd2-fade{height:65px}
      .cd2-bottom{padding:12px 7px 0;font-size:6.5px}.cd2-bottom [lang="ar"]{font-size:9px;text-align:right}
    }
  `;
  document.head.appendChild(style);

  let paused = false;
  const pause = host.querySelector('.cd2-pause');
  pause?.addEventListener('click', () => {
    paused = !paused;
    pause.setAttribute('aria-pressed', String(paused));
    pause.querySelector('.cd2-pause-icon').textContent = paused ? '▶' : 'Ⅱ';
    pause.querySelector('.cd2-pause-label').textContent = paused ? 'Play' : 'Pause';
  });

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  host.querySelectorAll('.cd2-lane').forEach(lane => {
    const down = lane.dataset.dir === 'down';
    let cycleHeight = 0;
    let hover = false;
    let dragging = false;
    let y0 = 0, s0 = 0;
    let last = performance.now();

    const measure = () => {
      const first = lane.querySelector('.cd2-cycle');
      cycleHeight = first ? first.getBoundingClientRect().height : lane.scrollHeight / 2;
      if (down && cycleHeight && lane.scrollTop < 2) lane.scrollTop = cycleHeight;
    };
    lane.addEventListener('mouseenter',()=>hover=true);
    lane.addEventListener('mouseleave',()=>hover=false);
    lane.addEventListener('pointerdown',e=>{
      if(e.target.closest('a.cd2-card')) return;
      dragging=true;y0=e.clientY;s0=lane.scrollTop;
      try{lane.setPointerCapture(e.pointerId)}catch(_){}
    });
    lane.addEventListener('pointermove',e=>{if(dragging) lane.scrollTop=s0-(e.clientY-y0)});
    const end=e=>{dragging=false;try{lane.releasePointerCapture(e.pointerId)}catch(_){}};
    lane.addEventListener('pointerup',end);lane.addEventListener('pointercancel',end);

    const tick = now => {
      const dt=Math.min((now-last)/1000,.05);last=now;
      if(!paused&&!hover&&!dragging&&!reduced&&cycleHeight>0&&!document.body.classList.contains('pf-lock')){
        const speed=window.innerWidth<=700?19:25;
        lane.scrollTop+=(down?-1:1)*speed*dt;
        if(!down&&lane.scrollTop>=cycleHeight) lane.scrollTop-=cycleHeight;
        if(down&&lane.scrollTop<=0) lane.scrollTop+=cycleHeight;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(()=>{measure();requestAnimationFrame(tick)});
    window.addEventListener('resize',measure,{passive:true});
  });
})();