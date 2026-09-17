(() => {
  'use strict';

  // Clean up the old home client wall if an older cached version created it.
  document.querySelectorAll('.client-marquee, .client-wall').forEach(el => el.remove());

  const extraClients = [
    { label: 'Abu Dhabi TV', text: 'أبوظبي\nABU DHABI TV' },
    { label: 'Al Emarat TV', text: 'الإمارات\nAL EMARAT TV' },
    { label: 'Baynounah TV', text: 'بينونة\nBAYNOUNAH TV' },
    { label: 'ADMN', text: 'ADMN' },
    { label: 'LaLiga', text: 'LALIGA' }
  ];

  const style = document.createElement('style');
  style.textContent = `
    .clients-end{background:#f1f1ef;color:#111;padding:clamp(64px,7vw,108px) 0 clamp(58px,6vw,92px);overflow:hidden}
    .clients-end__head{width:min(1240px,90vw);margin:0 auto clamp(34px,4vw,54px);display:flex;align-items:flex-end;justify-content:space-between;gap:28px}
    .clients-end__eyebrow{font:700 12px/1 Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#777;margin-bottom:12px}
    .clients-end__title{font:700 clamp(40px,5vw,76px)/.95 Arial,sans-serif;letter-spacing:-.055em;margin:0;max-width:760px}
    .clients-end__note{font:400 14px/1.5 Arial,sans-serif;color:#777;max-width:320px;text-align:right}
    .clients-marquee{display:grid;gap:clamp(22px,2.3vw,34px);overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 5%,#000 95%,transparent 100%);mask-image:linear-gradient(90deg,transparent 0,#000 5%,#000 95%,transparent 100%)}
    .clients-strip{display:flex;align-items:center;width:max-content;gap:clamp(46px,5vw,92px);will-change:transform;opacity:0;transform:translateY(18px);filter:blur(4px)}
    .client-end-logo{flex:0 0 auto;width:clamp(135px,13vw,220px);height:clamp(66px,7vw,108px);display:flex;align-items:center;justify-content:center;color:#727272;text-align:center;white-space:pre-line;font:700 clamp(18px,2vw,30px)/1.05 Arial,sans-serif;letter-spacing:-.03em}
    .client-end-logo img{max-width:100%;max-height:100%;object-fit:contain;display:block;filter:grayscale(1);opacity:.72;mix-blend-mode:multiply}
    .clients-end.is-visible .clients-strip{animation:clientsReveal .8s cubic-bezier(.2,.7,.2,1) forwards}
    .clients-end.is-visible .clients-strip:nth-child(2){animation-delay:.16s}
    .clients-end.is-visible .clients-strip:nth-child(3){animation-delay:.32s}
    .clients-end.is-moving .clients-strip.row-a{animation:clientsDriftA 38s linear infinite}
    .clients-end.is-moving .clients-strip.row-b{animation:clientsDriftB 42s linear infinite}
    .clients-end.is-moving .clients-strip.row-c{animation:clientsDriftA 46s linear infinite}
    @keyframes clientsReveal{to{opacity:1;transform:translateY(0);filter:blur(0)}}
    @keyframes clientsDriftA{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}
    @keyframes clientsDriftB{from{transform:translate3d(-50%,0,0)}to{transform:translate3d(0,0,0)}}

    .contact-end{position:relative;background:#0d0d0d;color:#f4f4f1;padding:clamp(74px,8vw,126px) clamp(24px,6vw,92px) 48px;overflow:hidden;display:grid;grid-template-columns:minmax(0,1.15fr) minmax(360px,.85fr);gap:clamp(36px,6vw,90px);align-items:center}
    .contact-end__copy{position:relative;z-index:2}
    .contact-end__kicker{font:700 12px/1 Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#777;margin-bottom:18px}
    .contact-end__title{font:700 clamp(62px,8vw,146px)/.84 Arial,sans-serif;letter-spacing:-.07em;margin:0 0 26px;max-width:900px}
    .contact-end__sub{font:400 clamp(18px,2vw,27px)/1.35 Arial,sans-serif;color:#aaa;max-width:720px}
    .contact-card{position:relative;z-index:3;background:#cfcfcb;color:#111;padding:clamp(28px,4vw,52px);min-height:440px;display:flex;flex-direction:column;justify-content:space-between;transform:rotate(-2.3deg);box-shadow:0 30px 90px rgba(0,0,0,.38)}
    .contact-card__top{display:flex;justify-content:space-between;gap:24px;align-items:flex-start}
    .contact-card__label{font:700 11px/1 Arial,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#555}
    .contact-card__mail{font:700 clamp(24px,2.7vw,42px)/1.05 Arial,sans-serif;letter-spacing:-.04em;color:#111;text-decoration:none;display:inline-block;margin-top:14px;word-break:break-word}
    .contact-card__mail:hover{text-decoration:underline}
    .contact-card__location{font:600 16px/1.35 Arial,sans-serif;color:#333;text-align:right}
    .contact-card__links{display:grid;grid-template-columns:1fr 1fr;gap:0;border-top:1px solid rgba(0,0,0,.22);margin-top:46px}
    .contact-card__links a{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:17px 4px;border-bottom:1px solid rgba(0,0,0,.18);color:#111;text-decoration:none;font:700 15px/1 Arial,sans-serif}
    .contact-card__links a:nth-child(odd){padding-right:18px}.contact-card__links a:nth-child(even){padding-left:18px;border-left:1px solid rgba(0,0,0,.18)}
    .contact-card__links a:hover{opacity:.6}
    .contact-end__footer{grid-column:1/-1;margin-top:48px;padding-top:22px;border-top:1px solid #262626;display:flex;justify-content:space-between;gap:20px;color:#666;font:600 11px/1.2 Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase}
    @media(max-width:850px){.clients-end__head{align-items:flex-start;flex-direction:column}.clients-end__note{text-align:left}.client-end-logo{width:150px;height:74px}.contact-end{grid-template-columns:1fr}.contact-end__title{font-size:clamp(62px,17vw,118px)}.contact-card{transform:rotate(-1deg);min-height:400px}.contact-card__top{flex-direction:column}.contact-card__location{text-align:left}}
    @media(max-width:560px){.client-end-logo{width:126px;height:62px}.contact-card__links{grid-template-columns:1fr}.contact-card__links a:nth-child(even){padding-left:4px;border-left:0}.contact-card__links a:nth-child(odd){padding-right:4px}.contact-end__footer{flex-direction:column}}
    @media(prefers-reduced-motion:reduce){.clients-strip{opacity:1;transform:none;filter:none;animation:none!important}}
  `;
  document.head.appendChild(style);

  function makeLogo(item) {
    const box = document.createElement('span');
    box.className = 'client-end-logo';
    if (item.data) {
      const img = document.createElement('img');
      img.src = item.data;
      img.alt = item.label;
      box.appendChild(img);
    } else {
      box.textContent = item.text || item.label;
      box.setAttribute('aria-label', item.label);
    }
    return box;
  }

  function buildRow(items, cls) {
    const row = document.createElement('div');
    row.className = `clients-strip ${cls}`;
    [...items, ...items].forEach(item => row.appendChild(makeLogo(item)));
    return row;
  }

  function render(baseClients) {
    if (document.querySelector('.clients-end')) return;
    const first = baseClients.slice(0,5);
    const second = baseClients.slice(5,10);

    const clients = document.createElement('section');
    clients.className = 'clients-end';
    clients.setAttribute('aria-label','Selected clients');
    clients.innerHTML = `<div class="clients-end__head"><div><div class="clients-end__eyebrow">Selected clients</div><h2 class="clients-end__title">Brands & teams I’ve worked with.</h2></div><p class="clients-end__note">Across media, gaming, sports, hospitality and global brands.</p></div>`;
    const marquee = document.createElement('div');
    marquee.className = 'clients-marquee';
    marquee.appendChild(buildRow(first,'row-a'));
    marquee.appendChild(buildRow(second,'row-b'));
    marquee.appendChild(buildRow(extraClients,'row-c'));
    clients.appendChild(marquee);

    const contact = document.createElement('section');
    contact.className = 'contact-end';
    contact.id = 'contact';
    contact.innerHTML = `
      <div class="contact-end__copy"><div class="contact-end__kicker">Contact</div><h2 class="contact-end__title">Let’s work together.</h2><p class="contact-end__sub">Available for visual art, 2D art, illustration, concept development and selected freelance collaborations.</p></div>
      <div class="contact-card"><div class="contact-card__top"><div><div class="contact-card__label">Email me</div><a class="contact-card__mail" href="mailto:Hanafy.art@gmail.com">Hanafy.art@gmail.com</a></div><div class="contact-card__location">Cologne<br>Germany</div></div><div class="contact-card__links"><a href="https://www.linkedin.com/in/mohamed-hanafy-78609a97/" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><span>↗</span></a><a href="https://www.instagram.com/mohanafy93/" target="_blank" rel="noopener noreferrer"><span>Instagram</span><span>↗</span></a><a href="https://www.facebook.com/hanafy93" target="_blank" rel="noopener noreferrer"><span>Facebook</span><span>↗</span></a><a href="mailto:Hanafy.art@gmail.com"><span>Email</span><span>↗</span></a></div></div>
      <div class="contact-end__footer"><span>Mohamed Hanafy — Visual Artist</span><span>Cologne, Germany</span></div>`;

    document.body.appendChild(clients);
    document.body.appendChild(contact);

    const io = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        clients.classList.add('is-visible');
        setTimeout(() => clients.classList.add('is-moving'), 1700);
        io.disconnect();
      }
    }, { threshold:.18 });
    io.observe(clients);
  }

  // Reuse the already embedded, working logo data from client-wall.js without showing it on the home page.
  fetch('assets/js/client-wall.js?v=20260917a')
    .then(r => r.text())
    .then(text => {
      const match = text.match(/const clients = (\[[\s\S]*?\]);/);
      if (!match) throw new Error('Client logo data not found');
      render(JSON.parse(match[1]));
    })
    .catch(err => {
      console.error('Client section failed to load', err);
      render(extraClients);
    });
})();