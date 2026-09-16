(() => {
  'use strict';

  const host = document.querySelector('#character-design');
  if (!host) return;

  // Fold the separate sketchbook strip into the main character-design story.
  document.querySelector('#sketches')?.remove();

  const characters = [
    {
      title: 'Pinocchio',
      ar: 'تصميم شخصية',
      meta: 'Stylized Character',
      image: 'assets/images/02-pinocchio.webp',
      tone: 'warm'
    },
    {
      title: "Jemey’s Adventure",
      ar: 'بطل المغامرة',
      meta: 'Adventure Character',
      image: 'assets/images/03-jemeys-adventure.webp',
      tone: 'sky'
    },
    {
      title: 'Character Development',
      ar: 'تطوير الشخصية',
      meta: 'Exploration & Shape Language',
      image: 'assets/images/04-character-development.webp',
      tone: 'paper'
    },
    {
      title: 'Assassin',
      ar: 'تصميم محارب',
      meta: 'Silhouette & Costume',
      image: 'assets/images/05-assassin.webp',
      tone: 'crimson'
    },
    {
      title: 'Island Fighter',
      ar: 'مقاتل الجزيرة',
      meta: 'Fighter Concept',
      image: 'assets/images/06-island-fighter.webp',
      tone: 'jungle'
    },
    {
      title: 'Character Sketches',
      ar: 'اسكتشات ودراسات',
      meta: 'Sketchbook & Studies',
      image: 'assets/images/07-character-sketches.webp',
      tone: 'ink'
    }
  ];

  const left = [characters[0], characters[2], characters[4]];
  const right = [characters[1], characters[3], characters[5]];

  const card = item => `
    <a class="cd-card moving-frame cd-${item.tone}" href="${item.image}" aria-label="${item.title} — open full character artwork">
      <span class="cd-card-bg" aria-hidden="true"></span>
      <span class="cd-art-wrap"><img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async" draggable="false"></span>
      <span class="cd-info">
        <span class="cd-copy">
          <strong>${item.title}</strong>
          <span class="cd-meta">${item.meta}</span>
        </span>
        <span class="cd-ar" dir="rtl" lang="ar">${item.ar}</span>
      </span>
      <span class="cd-view" aria-hidden="true">VIEW ↗</span>
    </a>`;

  const cycle = items => `<div class="cd-cycle">${items.map(card).join('')}</div>`;

  host.innerHTML = `
    <section class="character-showcase" aria-label="Character Design — تصميم الشخصيات">
      <div class="cd-head">
        <div class="cd-kicker">CHARACTER ART · DEVELOPMENT · SKETCHES</div>
        <div class="cd-title-wrap">
          <h2>CHARACTER<br><span>DESIGN</span></h2>
          <div class="cd-ar-title" dir="rtl" lang="ar">تصميم<br>الشخصيات</div>
        </div>
        <div class="cd-head-bottom">
          <p>From first sketch to final silhouette — character exploration, shape language, costume, expression and visual storytelling.</p>
          <button class="cd-pause" type="button" aria-pressed="false" aria-label="Pause character design animation"><span class="cd-pause-icon">Ⅱ</span><span class="cd-pause-text">Pause</span></button>
        </div>
      </div>
      <div class="cd-window">
        <div class="cd-lane" data-direction="up">${cycle(left)}${cycle(left)}</div>
        <div class="cd-lane cd-down" data-direction="down">${cycle(right)}${cycle(right)}</div>
        <div class="cd-vignette cd-vignette-top" aria-hidden="true"></div>
        <div class="cd-vignette cd-vignette-bottom" aria-hidden="true"></div>
      </div>
      <div class="cd-foot">
        <span>Character studies / visual development</span>
        <span dir="rtl" lang="ar">اضغط على أي عمل لمشاهدته بالكامل</span>
      </div>
    </section>`;

  const style = document.createElement('style');
  style.textContent = `
    #character-design{margin:0!important;padding:0!important}
    #character-design + *{margin-top:0}
    .character-showcase{position:relative;overflow:hidden;background:#0e0e10;color:#f6f3ed;padding:clamp(56px,7vw,104px) clamp(18px,4.7vw,76px) clamp(54px,6vw,88px);border-top:1px solid rgba(255,255,255,.08);border-bottom:1px solid rgba(255,255,255,.08)}
    .cd-head{max-width:1380px;margin:0 auto 34px}
    .cd-kicker{font-size:11px;letter-spacing:.24em;font-weight:700;color:#918f89;margin-bottom:18px}
    .cd-title-wrap{position:relative;display:flex;align-items:flex-end;gap:clamp(20px,5vw,80px);min-height:150px}
    .cd-title-wrap h2{margin:0;font-size:clamp(62px,10.4vw,164px);line-height:.77;letter-spacing:-.075em;font-weight:800;color:#f4f0e8}
    .cd-title-wrap h2 span{color:transparent;-webkit-text-stroke:1.4px rgba(244,240,232,.88)}
    .cd-ar-title{font-family:inherit;font-size:clamp(30px,5.2vw,76px);font-weight:700;line-height:.95;color:#d7c6a7;transform:translateY(-4px);white-space:nowrap}
    .cd-head-bottom{display:flex;align-items:flex-end;justify-content:space-between;gap:28px;margin-top:28px;padding-top:22px;border-top:1px solid rgba(255,255,255,.13)}
    .cd-head-bottom p{max-width:720px;margin:0;color:#aaa7a1;font-size:clamp(14px,1.25vw,18px);line-height:1.65}
    .cd-pause{flex:0 0 auto;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.055);color:#fff;border-radius:999px;height:42px;padding:0 16px;display:inline-flex;gap:9px;align-items:center;font:600 12px/1 inherit;letter-spacing:.05em;cursor:pointer}
    .cd-pause:hover{background:rgba(255,255,255,.12)}
    .cd-pause-icon{font-size:12px;letter-spacing:-2px}
    .cd-window{position:relative;max-width:1380px;height:clamp(760px,94vw,1180px);margin:0 auto;display:grid;grid-template-columns:1fr 1fr;gap:clamp(12px,2vw,28px);overflow:hidden;border-radius:26px;background:#09090b;padding:clamp(10px,1.2vw,18px)}
    .cd-lane{height:100%;overflow:hidden;scrollbar-width:none;overscroll-behavior:none;touch-action:pan-y}
    .cd-lane::-webkit-scrollbar{display:none}
    .cd-cycle{display:flex;flex-direction:column;gap:clamp(12px,1.7vw,24px);padding-bottom:clamp(12px,1.7vw,24px)}
    .cd-card{position:relative;display:block;text-decoration:none;color:#fff;border-radius:22px;overflow:hidden;min-height:clamp(410px,49vw,720px);isolation:isolate;border:1px solid rgba(255,255,255,.09);box-shadow:0 18px 60px rgba(0,0,0,.28);cursor:zoom-in}
    .cd-card-bg{position:absolute;inset:0;z-index:-3;background:var(--cd-bg)}
    .cd-card-bg:after{content:"";position:absolute;inset:0;background:radial-gradient(circle at 70% 16%,rgba(255,255,255,.17),transparent 34%),linear-gradient(to bottom,transparent 52%,rgba(0,0,0,.57));mix-blend-mode:screen;opacity:.52}
    .cd-warm{--cd-bg:linear-gradient(145deg,#573522 0%,#b4834f 48%,#30241d 100%)}
    .cd-sky{--cd-bg:linear-gradient(145deg,#143d58 0%,#4790a5 48%,#514168 100%)}
    .cd-paper{--cd-bg:linear-gradient(145deg,#696257 0%,#b2a897 48%,#3d3a37 100%)}
    .cd-crimson{--cd-bg:linear-gradient(145deg,#190f13 0%,#6e1e2b 48%,#171719 100%)}
    .cd-jungle{--cd-bg:linear-gradient(145deg,#10281d 0%,#356348 48%,#1c241e 100%)}
    .cd-ink{--cd-bg:linear-gradient(145deg,#181a24 0%,#414a64 48%,#22242f 100%)}
    .cd-art-wrap{position:absolute;inset:24px 22px 92px;display:flex;align-items:center;justify-content:center}
    .cd-art-wrap img{display:block;width:auto;height:auto;max-width:96%;max-height:96%;object-fit:contain;border-radius:12px;box-shadow:0 20px 54px rgba(0,0,0,.24);transition:transform .38s cubic-bezier(.2,.7,.2,1),filter .3s ease}
    .cd-card:hover .cd-art-wrap img{transform:scale(1.025);filter:saturate(1.04) contrast(1.02)}
    .cd-info{position:absolute;left:22px;right:22px;bottom:20px;display:flex;align-items:flex-end;justify-content:space-between;gap:15px;z-index:3}
    .cd-copy{display:flex;flex-direction:column;gap:5px;min-width:0}
    .cd-copy strong{font-size:clamp(16px,1.55vw,24px);letter-spacing:-.025em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .cd-meta{font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.63)}
    .cd-ar{font-size:clamp(15px,1.45vw,21px);font-weight:700;color:#f0debd;white-space:nowrap}
    .cd-view{position:absolute;top:16px;right:16px;z-index:5;background:rgba(10,10,12,.62);backdrop-filter:blur(8px);border:1px solid rgba(255,255,255,.15);border-radius:999px;padding:8px 10px;font-size:9px;font-weight:800;letter-spacing:.13em;opacity:.72;transition:.2s}
    .cd-card:hover .cd-view{opacity:1;background:#f5efe4;color:#111}
    .cd-vignette{position:absolute;left:0;right:0;height:110px;z-index:8;pointer-events:none}
    .cd-vignette-top{top:0;background:linear-gradient(#09090b,transparent)}
    .cd-vignette-bottom{bottom:0;background:linear-gradient(transparent,#09090b)}
    .cd-foot{max-width:1380px;margin:18px auto 0;display:flex;justify-content:space-between;gap:20px;color:#716f6a;font-size:11px;letter-spacing:.08em;text-transform:uppercase}
    .cd-foot [lang="ar"]{letter-spacing:0;text-transform:none;font-size:13px;color:#8f897f}
    @media(max-width:700px){
      .character-showcase{padding:48px 10px 42px}
      .cd-head{padding:0 8px;margin-bottom:22px}
      .cd-kicker{font-size:9px;letter-spacing:.17em;margin-bottom:14px}
      .cd-title-wrap{display:block;min-height:0}
      .cd-title-wrap h2{font-size:clamp(52px,18vw,86px);line-height:.8}
      .cd-ar-title{position:absolute;right:0;bottom:4px;font-size:clamp(25px,8.8vw,42px);text-shadow:0 3px 20px rgba(0,0,0,.38)}
      .cd-head-bottom{align-items:center;margin-top:22px;padding-top:16px}
      .cd-head-bottom p{font-size:12px;line-height:1.5;max-width:74%}
      .cd-pause{height:38px;padding:0 12px}
      .cd-pause-text{display:none}
      .cd-window{height:860px;border-radius:18px;gap:8px;padding:7px}
      .cd-cycle{gap:8px;padding-bottom:8px}
      .cd-card{min-height:430px;border-radius:16px}
      .cd-art-wrap{inset:14px 10px 78px}
      .cd-art-wrap img{max-width:100%;max-height:97%;border-radius:8px}
      .cd-info{left:12px;right:12px;bottom:13px;display:block}
      .cd-copy{gap:2px}
      .cd-copy strong{font-size:13px}
      .cd-meta{font-size:7px;letter-spacing:.09em}
      .cd-ar{display:block;margin-top:4px;font-size:12px}
      .cd-view{top:9px;right:9px;padding:6px 7px;font-size:7px}
      .cd-vignette{height:72px}
      .cd-foot{padding:0 8px;font-size:8px;align-items:flex-start}
      .cd-foot [lang="ar"]{font-size:10px;text-align:right}
    }
  `;
  document.head.appendChild(style);

  let paused = false;
  const pauseBtn = host.querySelector('.cd-pause');
  pauseBtn?.addEventListener('click', () => {
    paused = !paused;
    pauseBtn.setAttribute('aria-pressed', paused ? 'true' : 'false');
    pauseBtn.querySelector('.cd-pause-icon').textContent = paused ? '▶' : 'Ⅱ';
    pauseBtn.querySelector('.cd-pause-text').textContent = paused ? 'Play' : 'Pause';
  });

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  host.querySelectorAll('.cd-lane').forEach(lane => {
    const reverse = lane.dataset.direction === 'down';
    let cycleHeight = 0;
    let hover = false;
    let last = performance.now();

    const measure = () => {
      const first = lane.querySelector('.cd-cycle');
      cycleHeight = first ? first.getBoundingClientRect().height : lane.scrollHeight / 2;
      if (reverse && cycleHeight && lane.scrollTop < 2) lane.scrollTop = cycleHeight;
    };

    lane.addEventListener('mouseenter', () => hover = true);
    lane.addEventListener('mouseleave', () => hover = false);
    lane.addEventListener('focusin', () => hover = true);
    lane.addEventListener('focusout', () => hover = false);

    const tick = now => {
      const dt = Math.min((now - last) / 1000, .05);
      last = now;
      if (!paused && !hover && !reducedMotion && cycleHeight > 0 && !document.body.classList.contains('pf-lock')) {
        const speed = window.innerWidth <= 700 ? 24 : 30;
        lane.scrollTop += (reverse ? -1 : 1) * speed * dt;
        if (!reverse && lane.scrollTop >= cycleHeight) lane.scrollTop -= cycleHeight;
        if (reverse && lane.scrollTop <= 0) lane.scrollTop += cycleHeight;
      }
      requestAnimationFrame(tick);
    };

    requestAnimationFrame(() => { measure(); requestAnimationFrame(tick); });
    window.addEventListener('resize', measure, {passive:true});
  });
})();