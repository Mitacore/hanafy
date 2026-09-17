(() => {
  'use strict';

  document.querySelectorAll('.client-marquee,.client-wall,.clients-end,.logos-marquee,.hf-clients-section,.contact-end').forEach(el => el.remove());

  const row1 = [
    ['15.png','Aramex'],['14.png','Visa'],['13.png','Mountain View'],['12.png','Bitaraf'],['11.png','Aroma'],['10.png','Al Ahly'],['9.png','Dominos'],['8.png','Milestone Games']
  ];
  const row2 = [
    ['7.png','Steam'],['6.png','Moro'],['5.png','Abu Dhabi TV'],['4.png','Al Emarat TV'],['3.png','Baynounah TV'],['2.png','ADMN'],['1.png','LaLiga']
  ];

  const style = document.createElement('style');
  style.id = 'hf-client-marquee-style';
  style.textContent = `
    .hf-clients-section{background:#f2f2f0!important;color:#111!important;padding:80px 0 86px!important;overflow:hidden!important;position:relative!important}
    .hf-clients-head{width:min(1240px,90vw)!important;margin:0 auto 54px!important;display:grid!important;grid-template-columns:minmax(0,1fr) minmax(260px,.4fr)!important;align-items:end!important;gap:36px!important}
    .hf-clients-kicker{font:700 12px/1 Arial,sans-serif!important;letter-spacing:.2em!important;text-transform:uppercase!important;color:#777!important;margin-bottom:12px!important}
    .hf-clients-title{font:700 clamp(40px,5vw,76px)/.95 Arial,sans-serif!important;letter-spacing:-.055em!important;margin:0!important;max-width:760px!important}
    .hf-clients-note{font:400 14px/1.5 Arial,sans-serif!important;color:#777!important;max-width:320px!important;text-align:right!important;justify-self:end!important;margin:0 0 8px!important}

    .hf-marquee{display:grid!important;grid-template-rows:140px 140px!important;gap:22px!important;overflow:hidden!important;width:100%!important;position:relative!important;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 4%,#000 96%,transparent 100%)!important;mask-image:linear-gradient(90deg,transparent 0,#000 4%,#000 96%,transparent 100%)!important}
    .hf-track{--hf-gap:58px;display:flex!important;flex-wrap:nowrap!important;align-items:center!important;width:max-content!important;height:140px!important;min-height:140px!important;max-height:140px!important;gap:0!important;will-change:transform!important;animation-timing-function:linear!important;animation-iteration-count:infinite!important;animation-play-state:running!important}
    .hf-track-a{animation:hfMoveLeft 48s linear infinite!important}
    .hf-track-b{animation:hfMoveRight 54s linear infinite!important}
    .hf-group{display:flex!important;flex-wrap:nowrap!important;align-items:center!important;height:140px!important;gap:var(--hf-gap)!important;padding-right:var(--hf-gap)!important;flex:0 0 auto!important}
    .hf-logo{flex:0 0 auto!important;width:190px!important;height:120px!important;display:flex!important;align-items:center!important;justify-content:center!important;overflow:visible!important;opacity:1!important;transform:none!important;filter:none!important;animation:none!important;position:relative!important}
    .hf-logo img{display:block!important;width:auto!important;height:auto!important;max-width:100%!important;max-height:100%!important;object-fit:contain!important;object-position:center!important;filter:grayscale(1) brightness(.82) contrast(.94)!important;opacity:.82!important;mix-blend-mode:multiply!important;position:static!important;transform:none!important;margin:0!important;padding:0!important;clip-path:none!important}
    .hf-logo.hf-tall{width:145px!important;height:128px!important}
    .hf-logo.hf-wide{width:235px!important;height:118px!important}
    @keyframes hfMoveLeft{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}
    @keyframes hfMoveRight{from{transform:translate3d(-50%,0,0)}to{transform:translate3d(0,0,0)}}

    .contact-end{background:#0d0d0c;color:#f5f2ea;padding:100px 5vw 48px;display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center;overflow:hidden}
    .contact-end__copy small{display:block;color:#777;text-transform:uppercase;letter-spacing:.22em;font:700 11px/1 Arial,sans-serif;margin-bottom:16px}
    .contact-end__title{font:700 clamp(58px,7vw,112px)/.88 Arial,sans-serif;letter-spacing:-.065em;margin:0 0 22px}
    .contact-end__sub{font:400 18px/1.5 Arial,sans-serif;color:#a9a9a4;max-width:620px;margin:0}
    .contact-card{background:#d8d1c5;color:#24211d;padding:42px;transform:rotate(-1.4deg);box-shadow:0 30px 90px rgba(0,0,0,.38);min-height:360px;display:flex;flex-direction:column;justify-content:space-between}
    .contact-card__label{font:700 10px/1 Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#6b6259;margin-bottom:12px}
    .contact-card__mail{display:inline-block;color:#24211d;text-decoration:none;font:700 clamp(24px,2.7vw,42px)/1.05 Arial,sans-serif;word-break:break-word}
    .contact-card__top{display:flex;justify-content:space-between;gap:24px;align-items:flex-start}
    .contact-card__location{text-align:right;color:#514a43;font:700 14px/1.4 Arial,sans-serif}
    .contact-card__links{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid rgba(0,0,0,.2);margin-top:34px}
    .contact-card__links a{display:flex;justify-content:space-between;align-items:center;padding:17px 4px;color:#24211d;text-decoration:none;border-bottom:1px solid rgba(0,0,0,.2);font:700 14px/1 Arial,sans-serif}
    .contact-card__links a:nth-child(even){border-left:1px solid rgba(0,0,0,.2);padding-left:18px}.contact-card__links a:nth-child(odd){padding-right:18px}
    .contact-end__footer{grid-column:1/-1;border-top:1px solid #242423;margin-top:20px;padding-top:18px;display:flex;justify-content:space-between;gap:18px;color:#666;font:600 10px/1.2 Arial,sans-serif;letter-spacing:.09em;text-transform:uppercase}

    @media(max-width:850px){.hf-clients-head{grid-template-columns:1fr!important}.hf-clients-note{text-align:left!important;justify-self:start!important}.contact-end{grid-template-columns:1fr}.contact-card{transform:rotate(-.6deg)}}
    @media(max-width:600px){.hf-marquee{grid-template-rows:100px 100px!important;gap:16px!important}.hf-track,.hf-group{height:100px!important;min-height:100px!important;max-height:100px!important}.hf-track{--hf-gap:34px}.hf-logo{width:132px!important;height:86px!important}.hf-logo.hf-tall{width:100px!important;height:90px!important}.hf-logo.hf-wide{width:160px!important;height:86px!important}.contact-card__top{flex-direction:column}.contact-card__location{text-align:left}.contact-card__links{grid-template-columns:1fr}.contact-card__links a:nth-child(even){border-left:0;padding-left:4px}.contact-card__links a:nth-child(odd){padding-right:4px}.contact-end__footer{flex-direction:column}}
    @media(prefers-reduced-motion:reduce){.hf-track{animation:none!important}}
  `;
  document.head.appendChild(style);

  const makeLogo = ([file,label]) => {
    const box = document.createElement('div');
    box.className = 'hf-logo';
    if (file === '10.png' || file === '13.png' || file === '1.png') box.classList.add('hf-tall');
    if (['5.png','4.png','3.png','2.png','11.png','15.png','14.png'].includes(file)) box.classList.add('hf-wide');
    const img = document.createElement('img');
    img.src = `assets/images/client-logos/${file}?v=20260917m`;
    img.alt = label;
    img.loading = 'eager';
    img.decoding = 'sync';
    box.appendChild(img);
    return box;
  };

  const makeGroup = (items, hidden=false) => {
    const g = document.createElement('div');
    g.className = 'hf-group';
    if (hidden) g.setAttribute('aria-hidden','true');
    items.forEach(item => g.appendChild(makeLogo(item)));
    return g;
  };

  const makeTrack = (items, cls) => {
    const t = document.createElement('div');
    t.className = `hf-track ${cls}`;
    t.append(makeGroup(items), makeGroup(items,true));
    return t;
  };

  const clients = document.createElement('section');
  clients.className = 'hf-clients-section';
  clients.setAttribute('aria-label','Selected clients');
  clients.innerHTML = `<div class="hf-clients-head"><div><div class="hf-clients-kicker">Selected clients</div><h2 class="hf-clients-title">Brands & teams I’ve worked with.</h2></div><p class="hf-clients-note">Across media, gaming, sports, hospitality and global brands.</p></div>`;
  const marquee = document.createElement('div');
  marquee.className = 'hf-marquee';
  marquee.append(makeTrack(row1,'hf-track-a'), makeTrack(row2,'hf-track-b'));
  clients.appendChild(marquee);

  const contact = document.createElement('section');
  contact.className = 'contact-end';
  contact.id = 'contact';
  contact.innerHTML = `<div class="contact-end__copy"><small>Contact</small><h2 class="contact-end__title">Let’s work together.</h2><p class="contact-end__sub">Available for visual art, 2D art, illustration, concept development and selected freelance collaborations.</p></div><div class="contact-card"><div class="contact-card__top"><div><div class="contact-card__label">Email me</div><a class="contact-card__mail" href="mailto:Hanafy.art@gmail.com">Hanafy.art@gmail.com</a></div><div class="contact-card__location">Cologne<br>Germany</div></div><div class="contact-card__links"><a href="https://www.linkedin.com/in/mohamed-hanafy-78609a97/" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><span>↗</span></a><a href="https://www.instagram.com/mohanafy93/" target="_blank" rel="noopener noreferrer"><span>Instagram</span><span>↗</span></a><a href="https://www.facebook.com/hanafy93" target="_blank" rel="noopener noreferrer"><span>Facebook</span><span>↗</span></a><a href="mailto:Hanafy.art@gmail.com"><span>Email</span><span>↗</span></a></div></div><div class="contact-end__footer"><span>Mohamed Hanafy — Visual Artist</span><span>Cologne, Germany</span></div>`;

  document.body.append(clients, contact);
})();