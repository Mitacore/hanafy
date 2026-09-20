(() => {
  'use strict';

  const host = document.querySelector('#character-design');
  if (!host) return;

  const conceptCinema = document.querySelector('#concept-art .concept-cinema');
  const oldParent = host.parentElement;
  if (conceptCinema) conceptCinema.insertAdjacentElement('afterend', host);
  if (oldParent && oldParent !== host.parentElement && oldParent.children.length === 0) oldParent.remove();

  const jimmyImage = 'assets/images/03-jemeys-adventure.webp';
  const items = [
    {title:'Pinocchio', ar:'تصميم شخصية', meta:'STYLIZED CHARACTER', image:'assets/images/02-pinocchio.webp', tone:'sand'},
    {title:'Character Development', ar:'تطوير الشخصية', meta:'SHAPE · POSE · DEVELOPMENT', image:'assets/images/04-character-development.webp', tone:'paper'},
    {title:'Assassin', ar:'تصميم محارب', meta:'COSTUME · SILHOUETTE', image:'assets/images/05-assassin.webp', tone:'red'},
    {title:'Island Fighter', ar:'مقاتل الجزيرة', meta:'FIGHTER CONCEPT', image:'assets/images/06-island-fighter.webp', tone:'green'},
    {title:'Character Sketches', ar:'اسكتشات ودراسات', meta:'SKETCHBOOK · STUDIES', image:'assets/images/07-character-sketches.webp', tone:'ink'}
  ];

  const card = x => `
    <a class="cdx-card cdx-${x.tone}" href="${x.image}" aria-label="${x.title} — view full artwork">
      <span class="cdx-card-bg" style="background-image:url('${x.image}')" aria-hidden="true"></span>
      <span class="cdx-card-art"><img src="${x.image}" alt="${x.title}" loading="lazy" decoding="async" draggable="false"></span>
      <span class="cdx-card-index">CHARACTER STUDY</span>
      <span class="cdx-card-copy"><strong>${x.title}</strong><small>${x.meta}</small></span>
      <span class="cdx-card-ar" lang="ar" dir="rtl">${x.ar}</span>
      <span class="cdx-card-open" aria-hidden="true">↗</span>
    </a>`;

  host.innerHTML = `
    <section class="cdx" aria-label="Character Design">
      <div class="cdx-shell">
        <header class="cdx-head cdx-reveal">
          <div>
            <span class="cdx-kicker">CHARACTER DESIGN / 01</span>
            <h2>Character<br><em>Design</em></h2>
          </div>
          <p>From sketch and shape language to model development and final stylized character.</p>
        </header>

        <article class="jimmy-feature" id="jimmy-adventure" aria-label="Jemey's Adventure character design project">
          <div class="jimmy-copy cdx-reveal">
            <span class="jimmy-number">PROJECT 01</span>
            <h3>Jemey’s<br>Adventure</h3>
            <p>Character exploration moving from sketch to clay study, turnaround and final stylized render.</p>
          </div>

          <div class="jimmy-board cdx-reveal" role="img" aria-label="Jemey's Adventure character presentation board">
            <img class="jimmy-board-base" src="${jimmyImage}" alt="" loading="eager" decoding="async">
            <div class="jimmy-layer jimmy-logo-layer" aria-hidden="true"><img src="${jimmyImage}" alt=""></div>
            <div class="jimmy-layer jimmy-top-layer" aria-hidden="true"><img src="${jimmyImage}" alt=""></div>
            <div class="jimmy-layer jimmy-palette-layer" aria-hidden="true"><img src="${jimmyImage}" alt=""></div>
            <div class="jimmy-layer jimmy-bottom-layer" aria-hidden="true"><img src="${jimmyImage}" alt=""></div>
            <span class="jimmy-shine" aria-hidden="true"></span>
          </div>

          <div class="jimmy-meta cdx-reveal">
            <span>SKETCH</span><span>CLAY MODEL</span><span>COLOR PALETTE</span><span>FINAL RENDER</span><span>TURNAROUND</span>
          </div>
        </article>

        <div class="cdx-more cdx-reveal"><span>MORE CHARACTER WORK</span><span lang="ar" dir="rtl">مشاريع أخرى</span></div>
        <div class="cdx-grid">${items.map(card).join('')}</div>
      </div>
    </section>`;

  const style = document.createElement('style');
  style.id = 'cdx-jimmy-style';
  style.textContent = `
    #character-design{width:100%!important;max-width:none!important;margin:0!important;padding:0!important;overflow:visible!important;position:relative!important}
    .cdx{--bg:#202222;position:relative;background:var(--bg);color:#fff;padding:clamp(70px,8vw,130px) 0 clamp(80px,9vw,140px);overflow:hidden}
    .cdx-shell{width:min(1500px,calc(100% - 56px));margin:0 auto}
    .cdx-head{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(280px,.8fr);gap:50px;align-items:end;margin-bottom:clamp(48px,6vw,90px);padding-bottom:28px;border-bottom:1px solid rgba(255,255,255,.12)}
    .cdx-kicker{display:block;margin-bottom:16px;font:700 10px/1 Arial,sans-serif;letter-spacing:.22em;color:#c6c3bd}
    .cdx-head h2{margin:0;font:900 clamp(64px,9vw,150px)/.72 Arial,Helvetica,sans-serif;letter-spacing:-.085em;text-transform:uppercase}
    .cdx-head h2 em{font-style:normal;color:#dbeefd}
    .cdx-head p{max-width:510px;margin:0 0 8px;color:#b9b7b2;font:400 clamp(14px,1.35vw,20px)/1.65 Arial,sans-serif}
    .jimmy-feature{position:relative;margin-bottom:clamp(84px,10vw,150px)}
    .jimmy-copy{position:relative;z-index:6;display:grid;grid-template-columns:150px minmax(0,1fr) minmax(300px,520px);gap:24px;align-items:end;margin-bottom:24px}
    .jimmy-number{align-self:start;padding-top:12px;font:800 10px/1 Arial,sans-serif;letter-spacing:.2em;color:#f0a267}
    .jimmy-copy h3{margin:0;font:900 clamp(54px,7vw,116px)/.76 Arial,Helvetica,sans-serif;letter-spacing:-.07em;text-transform:uppercase}
    .jimmy-copy p{margin:0 0 6px;color:#c3c1bb;font:400 clamp(14px,1.3vw,19px)/1.55 Arial,sans-serif}
    .jimmy-board{position:relative;width:100%;aspect-ratio:1086/1448;background:#ece8e0;border-radius:26px;overflow:hidden;box-shadow:0 38px 100px rgba(0,0,0,.32);isolation:isolate;transform-style:preserve-3d;transition:transform .18s ease-out}
    .jimmy-board-base{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block;filter:saturate(.96);opacity:.34;transform:scale(1.012)}
    .jimmy-layer{position:absolute;overflow:hidden;pointer-events:none;will-change:transform,opacity}
    .jimmy-layer img{position:absolute;width:100%;height:auto;max-width:none;left:0;top:0}
    .jimmy-logo-layer{z-index:4;left:25%;top:1%;width:50%;height:18%}
    .jimmy-logo-layer img{width:200%;left:-50%;top:-2%}
    .jimmy-top-layer{z-index:3;left:0;top:17%;width:100%;height:39%}
    .jimmy-top-layer img{width:100%;left:0;top:-43.6%}
    .jimmy-palette-layer{z-index:5;left:7%;top:53.5%;width:86%;height:9.5%}
    .jimmy-palette-layer img{width:116.28%;left:-8.14%;top:-563%}
    .jimmy-bottom-layer{z-index:2;left:0;top:62%;width:100%;height:38%}
    .jimmy-bottom-layer img{width:100%;left:0;top:-163.2%}
    .jimmy-shine{position:absolute;z-index:7;inset:-30% auto -30% -28%;width:18%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.38),transparent);transform:skewX(-16deg);opacity:0}
    .jimmy-board.is-in .jimmy-logo-layer{animation:jLogo 5.2s ease-in-out infinite}
    .jimmy-board.is-in .jimmy-top-layer{animation:jTop 6.8s ease-in-out infinite}
    .jimmy-board.is-in .jimmy-palette-layer{animation:jPalette 4.4s ease-in-out infinite}
    .jimmy-board.is-in .jimmy-bottom-layer{animation:jBottom 7.5s ease-in-out infinite}
    .jimmy-board.is-in .jimmy-shine{animation:jShine 6.5s ease-in-out 1.3s infinite}
    @keyframes jLogo{0%,100%{transform:translate3d(0,0,30px) scale(1)}50%{transform:translate3d(0,-12px,42px) scale(1.018)}}
    @keyframes jTop{0%,100%{transform:translate3d(0,0,12px)}50%{transform:translate3d(0,-7px,22px)}}
    @keyframes jPalette{0%,100%{transform:translate3d(0,0,34px) scale(1)}50%{transform:translate3d(0,4px,44px) scale(1.018)}}
    @keyframes jBottom{0%,100%{transform:translate3d(0,0,8px)}50%{transform:translate3d(0,8px,14px)}}
    @keyframes jShine{0%,66%{left:-28%;opacity:0}72%{opacity:.65}85%{left:118%;opacity:0}100%{left:118%;opacity:0}}
    .jimmy-meta{display:flex;flex-wrap:wrap;justify-content:center;gap:9px;margin-top:22px}
    .jimmy-meta span{border:1px solid rgba(255,255,255,.15);border-radius:999px;padding:10px 15px;font:800 9px/1 Arial,sans-serif;letter-spacing:.14em;color:#c9c7c2;background:rgba(0,0,0,.16)}
    .cdx-more{display:flex;justify-content:space-between;gap:20px;align-items:center;margin:0 0 22px;padding:0 2px 16px;border-bottom:1px solid rgba(255,255,255,.12);font:800 9px/1 Arial,sans-serif;letter-spacing:.18em;color:#9f9d98}
    .cdx-more [lang="ar"]{font-size:13px;letter-spacing:0}
    .cdx-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:clamp(14px,2vw,28px)}
    .cdx-card{position:relative;display:block;aspect-ratio:4/5;border-radius:22px;overflow:hidden;color:#fff;text-decoration:none;background:#171819;border:1px solid rgba(255,255,255,.08);isolation:isolate}
    .cdx-card-bg{position:absolute;inset:-12%;z-index:-3;background-size:cover;background-position:center;filter:blur(32px) brightness(.42) saturate(.8);transform:scale(1.15)}
    .cdx-card:after{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(180deg,rgba(0,0,0,.03),rgba(0,0,0,.08) 56%,rgba(0,0,0,.82))}
    .cdx-card-art{position:absolute;inset:54px 34px 112px;display:flex;align-items:center;justify-content:center}
    .cdx-card-art img{max-width:100%;max-height:100%;object-fit:contain;border-radius:9px;box-shadow:0 18px 50px rgba(0,0,0,.28);transition:transform .45s cubic-bezier(.2,.75,.2,1)}
    .cdx-card:hover .cdx-card-art img{transform:scale(1.035) rotate(-.4deg)}
    .cdx-card-index{position:absolute;left:18px;top:18px;font:800 8px/1 Arial,sans-serif;letter-spacing:.18em;color:rgba(255,255,255,.58)}
    .cdx-card-open{position:absolute;right:16px;top:14px;width:36px;height:36px;border:1px solid rgba(255,255,255,.18);border-radius:50%;display:grid;place-items:center;background:rgba(0,0,0,.18);backdrop-filter:blur(8px);transition:.25s}
    .cdx-card:hover .cdx-card-open{background:#fff;color:#111;transform:rotate(8deg)}
    .cdx-card-copy{position:absolute;left:20px;bottom:18px;display:flex;flex-direction:column;gap:5px;max-width:70%}
    .cdx-card-copy strong{font:800 clamp(18px,1.8vw,28px)/1 Arial,sans-serif;letter-spacing:-.035em}
    .cdx-card-copy small{font:700 8px/1 Arial,sans-serif;letter-spacing:.13em;color:rgba(255,255,255,.58)}
    .cdx-card-ar{position:absolute;right:20px;bottom:18px;color:#e8c99c;font-size:clamp(13px,1.2vw,18px);font-weight:800}
    .cdx-reveal{opacity:0;transform:translateY(30px);transition:opacity .8s ease,transform .8s cubic-bezier(.2,.7,.2,1)}
    .cdx-reveal.is-in{opacity:1;transform:none}
    .jimmy-board.cdx-reveal{transform:translateY(38px) scale(.985)}
    .jimmy-board.cdx-reveal.is-in{transform:none}
    @media(max-width:800px){.cdx{padding:64px 0 76px}.cdx-shell{width:calc(100% - 20px)}.cdx-head{grid-template-columns:1fr;gap:22px;margin-bottom:48px}.cdx-head h2{font-size:clamp(56px,18vw,92px)}.jimmy-copy{grid-template-columns:1fr;gap:10px;margin-bottom:18px}.jimmy-number{padding-top:0}.jimmy-copy h3{font-size:clamp(48px,16vw,82px)}.jimmy-copy p{max-width:92%}.jimmy-board{border-radius:16px}.jimmy-meta{gap:6px;margin-top:14px}.jimmy-meta span{padding:8px 10px;font-size:7px}.cdx-grid{grid-template-columns:1fr;gap:12px}.cdx-card{border-radius:16px}}
    @media(prefers-reduced-motion:reduce){.jimmy-board.is-in .jimmy-logo-layer,.jimmy-board.is-in .jimmy-top-layer,.jimmy-board.is-in .jimmy-palette-layer,.jimmy-board.is-in .jimmy-bottom-layer,.jimmy-board.is-in .jimmy-shine{animation:none!important}.cdx-reveal{opacity:1!important;transform:none!important}}
  `;
  document.head.appendChild(style);

  const revealEls = host.querySelectorAll('.cdx-reveal');
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:.16});
  revealEls.forEach(el => io.observe(el));

  const board = host.querySelector('.jimmy-board');
  if (board && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    board.addEventListener('pointermove', e => {
      const r = board.getBoundingClientRect();
      const x = (e.clientX-r.left)/r.width-.5;
      const y = (e.clientY-r.top)/r.height-.5;
      board.style.transform = `perspective(1400px) rotateX(${(-y*2.2).toFixed(2)}deg) rotateY(${(x*2.8).toFixed(2)}deg)`;
    });
    board.addEventListener('pointerleave', () => { board.style.transform = ''; });
  }
})();
