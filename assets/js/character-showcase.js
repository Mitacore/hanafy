(() => {
  'use strict';

  const host = document.querySelector('#character-design');
  if (!host) return;

  // Move Character Design out of the old narrow artwork wrapper so it truly
  // aligns with the full-width Concept Art section.
  const oldParent = host.parentElement;
  const concept = document.querySelector('#concept-art .concept-composition');
  if (concept) concept.insertAdjacentElement('afterend', host);
  if (oldParent && oldParent !== host.parentElement && oldParent.children.length === 0) oldParent.remove();
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
    <a class="cd3-card moving-frame cd3-${x.tone}" href="${x.image}" aria-label="${x.title} — view full artwork">
      <span class="cd3-blur" style="background-image:url('${x.image}')" aria-hidden="true"></span>
      <span class="cd3-shade" aria-hidden="true"></span>
      <span class="cd3-art"><img src="${x.image}" alt="${x.title}" loading="lazy" decoding="async" draggable="false"></span>
      <span class="cd3-tag">CHARACTER STUDY</span>
      <span class="cd3-caption">
        <span class="cd3-name"><strong>${x.title}</strong><small>${x.meta}</small></span>
        <span class="cd3-ar" lang="ar" dir="rtl">${x.ar}</span>
      </span>
      <span class="cd3-open" aria-hidden="true">↗</span>
    </a>`;

  const cycle = list => `<div class="cd3-cycle">${list.map(card).join('')}</div>`;

  host.innerHTML = `
    <section class="cd3" aria-label="Character Design — تصميم الشخصيات">
      <div class="cd3-bridge" aria-hidden="true"></div>
      <div class="cd3-inner">
        <header class="cd3-head">
          <div class="cd3-title-art" aria-label="Character Design — تصميم الشخصيات">
            <span class="cd3-word cd3-word-a">Character</span>
            <span class="cd3-word cd3-word-b">Design</span>
            <span class="cd3-ar-title" lang="ar" dir="rtl">تصميم الشخصيات</span>
            <span class="cd3-line cd3-line-h"></span>
            <span class="cd3-line cd3-line-v"></span>
            <span class="cd3-diamond cd3-d1"></span>
            <span class="cd3-diamond cd3-d2"></span>
          </div>
          <div class="cd3-intro">
            <p>From rough sketch to final character — shape language, costume, pose, expression and visual identity.</p>
            <button class="cd3-pause" type="button" aria-pressed="false"><span class="cd3-pause-icon">Ⅱ</span><span class="cd3-pause-label">Pause</span></button>
          </div>
        </header>

        <div class="cd3-window">
          <div class="cd3-lane" data-dir="up">${cycle(left)}${cycle(left)}</div>
          <div class="cd3-lane cd3-down" data-dir="down">${cycle(right)}${cycle(right)}</div>
          <span class="cd3-fade cd3-fade-top" aria-hidden="true"></span>
          <span class="cd3-fade cd3-fade-bottom" aria-hidden="true"></span>
        </div>
        <div class="cd3-bottom"><span>SELECTED CHARACTER WORK</span><span lang="ar" dir="rtl">اضغط على أي تصميم لمشاهدته بالكامل</span></div>
      </div>
    </section>`;

  const style = document.createElement('style');
  style.textContent = `
    #character-design{clip-path:none!important;-webkit-clip-path:none!important;width:100%!important;max-width:none!important;margin:0!important;padding:0!important;position:relative!important;overflow:visible!important}
    .cd3{--cream:#f5f2ec;--blue:#d9efff;--red:#b61f38;position:relative;isolation:isolate;background:transparent;color:var(--cream);margin-top:-92px;padding:175px 0 90px;overflow:visible}
    .cd3-bridge{position:absolute;z-index:-1;left:0;right:0;top:-120px;height:430px;background-image:linear-gradient(180deg,rgba(41,43,43,0) 0%,rgba(41,43,43,.12) 26%,rgba(41,43,43,.72) 67%,#292b2b 100%),var(--cd-bridge-image,none);background-size:cover;background-position:center bottom;filter:saturate(.92);pointer-events:none}
    .cd3-inner{width:min(calc(100% - 64px),1450px);margin:0 auto}
    .cd3-head{position:relative;margin-bottom:34px}
    .cd3-title-art{position:relative;min-height:clamp(220px,25vw,390px);max-width:980px;margin:0 auto 8px}
    .cd3-word{position:absolute;left:4%;font-family:"Arial Black","Arial Rounded MT Bold",Arial,sans-serif;font-weight:900;letter-spacing:-.085em;line-height:.74;color:#fff;text-shadow:0 2px 2px rgba(0,0,0,.05)}
    .cd3-word-a{top:0;font-size:clamp(72px,9.8vw,158px)}
    .cd3-word-b{top:37%;left:8%;font-size:clamp(78px,10.6vw,170px)}
    .cd3-ar-title{position:absolute;z-index:3;left:13%;top:60%;font-size:clamp(38px,6.1vw,94px);font-weight:800;line-height:.9;color:var(--blue);transform:rotate(-3deg);white-space:nowrap;text-shadow:0 6px 22px rgba(0,0,0,.24)}
    .cd3-line{position:absolute;z-index:2;background:rgba(217,239,255,.72)}
    .cd3-line-h{height:1px;left:4%;right:14%;top:79%}
    .cd3-line-v{width:1px;right:18%;top:48%;height:45%}
    .cd3-diamond{position:absolute;z-index:4;width:15px;height:15px;background:var(--red);transform:rotate(45deg)}
    .cd3-d1{left:7%;top:66%}.cd3-d2{left:9.2%;top:69%;width:9px;height:9px;background:var(--blue)}
    .cd3-intro{display:flex;justify-content:space-between;align-items:center;gap:28px;max-width:1000px;margin:0 auto;padding:18px 0 26px;border-top:1px solid rgba(255,255,255,.10)}
    .cd3-intro p{max-width:700px;margin:0;color:#c8c6c1;font-size:clamp(13px,1.25vw,18px);line-height:1.65}
    .cd3-pause{height:42px;border:1px solid rgba(255,255,255,.16);background:rgba(0,0,0,.18);color:#fff;border-radius:999px;padding:0 16px;display:flex;align-items:center;gap:9px;font:700 11px/1 Arial,sans-serif;letter-spacing:.08em;cursor:pointer}
    .cd3-window{position:relative;height:clamp(820px,86vw,1160px);display:grid;grid-template-columns:1fr 1fr;gap:clamp(12px,2vw,28px);overflow:hidden;border-radius:24px;background:rgba(9,10,10,.68);border:1px solid rgba(255,255,255,.06);padding:clamp(9px,1.1vw,16px);box-shadow:0 26px 80px rgba(0,0,0,.18)}
    .cd3-lane{height:100%;overflow:hidden;scrollbar-width:none;overscroll-behavior:none;touch-action:pan-y}.cd3-lane::-webkit-scrollbar{display:none}
    .cd3-cycle{display:flex;flex-direction:column;gap:clamp(12px,1.6vw,24px);padding-bottom:clamp(12px,1.6vw,24px)}
    .cd3-card{position:relative;display:block;aspect-ratio:4/5;border-radius:20px;overflow:hidden;text-decoration:none;color:#fff;border:1px solid rgba(255,255,255,.10);isolation:isolate;cursor:zoom-in;background:#1a1a1a}
    .cd3-blur{position:absolute;inset:-10%;z-index:-4;background-size:cover;background-position:center;filter:blur(28px) saturate(.72) brightness(.54);transform:scale(1.13);opacity:.8}
    .cd3-shade{position:absolute;inset:0;z-index:-3;background:linear-gradient(180deg,rgba(0,0,0,.08),rgba(0,0,0,.03) 50%,rgba(0,0,0,.78)),radial-gradient(circle at 50% 24%,rgba(255,255,255,.14),transparent 44%)}
    .cd3-sand{background:#5b4636}.cd3-blue{background:#203849}.cd3-paper{background:#5e5a52}.cd3-red{background:#35161b}.cd3-green{background:#1b3427}.cd3-ink{background:#252936}
    .cd3-art{position:absolute;inset:44px 24px 106px;display:flex;align-items:center;justify-content:center}.cd3-art img{display:block;max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain;border-radius:8px;box-shadow:0 16px 48px rgba(0,0,0,.28);transition:transform .35s cubic-bezier(.2,.72,.2,1)}.cd3-card:hover .cd3-art img{transform:scale(1.025)}
    .cd3-tag{position:absolute;left:17px;top:16px;font-size:8px;font-weight:800;letter-spacing:.18em;color:rgba(255,255,255,.62)}
    .cd3-open{position:absolute;right:14px;top:13px;width:34px;height:34px;border:1px solid rgba(255,255,255,.19);background:rgba(0,0,0,.26);backdrop-filter:blur(8px);border-radius:50%;display:grid;place-items:center;font-size:18px}.cd3-card:hover .cd3-open{background:#f4eee5;color:#111}
    .cd3-caption{position:absolute;left:19px;right:19px;bottom:17px;display:flex;justify-content:space-between;align-items:flex-end;gap:18px}.cd3-name{display:flex;flex-direction:column;gap:4px;min-width:0}.cd3-name strong{font-size:clamp(17px,1.5vw,24px);line-height:1.08;letter-spacing:-.03em;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cd3-name small{font-size:8px;letter-spacing:.15em;color:rgba(255,255,255,.58);font-weight:700}.cd3-ar{color:#ead1a6;font-size:clamp(14px,1.25vw,19px);font-weight:800;white-space:nowrap}
    .cd3-fade{position:absolute;left:0;right:0;height:110px;z-index:8;pointer-events:none}.cd3-fade-top{top:0;background:linear-gradient(rgba(9,10,10,.9),transparent)}.cd3-fade-bottom{bottom:0;background:linear-gradient(transparent,rgba(9,10,10,.9))}
    .cd3-bottom{display:flex;justify-content:space-between;gap:18px;padding-top:16px;color:#8a8781;font-size:9px;font-weight:700;letter-spacing:.15em}.cd3-bottom [lang="ar"]{letter-spacing:0;font-size:12px;font-weight:600;color:#a29d94}
    @media(max-width:700px){.cd3{margin-top:-52px;padding:110px 0 50px}.cd3-bridge{top:-70px;height:250px}.cd3-inner{width:calc(100% - 16px)}.cd3-title-art{min-height:210px}.cd3-word-a{font-size:clamp(54px,18vw,86px);left:2%}.cd3-word-b{font-size:clamp(58px,19vw,92px);left:6%;top:36%}.cd3-ar-title{font-size:clamp(29px,9.5vw,45px);left:12%;top:60%}.cd3-line-h{left:2%;right:9%;top:80%}.cd3-line-v{right:12%;top:47%;height:44%}.cd3-diamond{width:10px;height:10px}.cd3-intro{padding:13px 4px 18px}.cd3-intro p{font-size:11px;line-height:1.45;max-width:78%}.cd3-pause{width:38px;height:38px;padding:0;justify-content:center}.cd3-pause-label{display:none}.cd3-window{height:820px;border-radius:16px;gap:7px;padding:6px}.cd3-cycle{gap:7px;padding-bottom:7px}.cd3-card{border-radius:13px;aspect-ratio:3/4}.cd3-art{inset:34px 8px 86px}.cd3-tag{left:9px;top:9px;font-size:5.6px}.cd3-open{right:7px;top:7px;width:26px;height:26px;font-size:13px}.cd3-caption{left:9px;right:9px;bottom:9px;display:block}.cd3-name{gap:2px}.cd3-name strong{font-size:12px}.cd3-name small{font-size:5.5px;letter-spacing:.08em}.cd3-ar{display:block;margin-top:3px;font-size:10px}.cd3-fade{height:65px}.cd3-bottom{padding:12px 7px 0;font-size:6.5px}.cd3-bottom [lang="ar"]{font-size:9px;text-align:right}}
  `;
  document.head.appendChild(style);

  // Use the current Concept Art image in the handoff so the two sections become one scene.
  const syncBridge = () => {
    const active = document.querySelector('#concept-art .concept-backdrop img.is-current');
    if (active) host.style.setProperty('--cd-bridge-image', `url("${active.getAttribute('src')}")`);
  };
  syncBridge();
  document.querySelectorAll('#concept-art .concept-backdrop img').forEach(img => new MutationObserver(syncBridge).observe(img,{attributes:true,attributeFilter:['class']}));

  let paused = false;
  const pause = host.querySelector('.cd3-pause');
  pause?.addEventListener('click',()=>{paused=!paused;pause.setAttribute('aria-pressed',String(paused));pause.querySelector('.cd3-pause-icon').textContent=paused?'▶':'Ⅱ';pause.querySelector('.cd3-pause-label').textContent=paused?'Play':'Pause'});

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  host.querySelectorAll('.cd3-lane').forEach(lane => {
    const down = lane.dataset.dir === 'down';
    let cycleHeight=0, hover=false, dragging=false, y0=0, s0=0, last=performance.now();
    const measure=()=>{const first=lane.querySelector('.cd3-cycle');cycleHeight=first?first.getBoundingClientRect().height:lane.scrollHeight/2;if(down&&cycleHeight&&lane.scrollTop<2)lane.scrollTop=cycleHeight};
    lane.addEventListener('mouseenter',()=>hover=true);lane.addEventListener('mouseleave',()=>hover=false);
    lane.addEventListener('pointerdown',e=>{if(e.target.closest('a.cd3-card'))return;dragging=true;y0=e.clientY;s0=lane.scrollTop;try{lane.setPointerCapture(e.pointerId)}catch(_){}});
    lane.addEventListener('pointermove',e=>{if(dragging)lane.scrollTop=s0-(e.clientY-y0)});
    const end=e=>{dragging=false;try{lane.releasePointerCapture(e.pointerId)}catch(_){}};lane.addEventListener('pointerup',end);lane.addEventListener('pointercancel',end);
    const tick=now=>{const dt=Math.min((now-last)/1000,.05);last=now;if(!paused&&!hover&&!dragging&&!reduced&&cycleHeight>0&&!document.body.classList.contains('pf-lock')){const speed=window.innerWidth<=700?19:25;lane.scrollTop+=(down?-1:1)*speed*dt;if(!down&&lane.scrollTop>=cycleHeight)lane.scrollTop-=cycleHeight;if(down&&lane.scrollTop<=0)lane.scrollTop+=cycleHeight}requestAnimationFrame(tick)};
    requestAnimationFrame(()=>{measure();requestAnimationFrame(tick)});window.addEventListener('resize',measure,{passive:true});
  });
})();