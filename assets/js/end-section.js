(() => {
  'use strict';

  document.querySelectorAll('.client-marquee, .client-wall, .clients-end, .contact-end').forEach(el => el.remove());

  const extraClients = [
    { label: 'Abu Dhabi TV', text: 'أبوظبي\nABU DHABI TV' },
    { label: 'Al Emarat TV', text: 'الإمارات\nAL EMARAT TV' },
    { label: 'Baynounah TV', text: 'بينونة\nBAYNOUNAH TV' },
    { label: 'ADMN', text: 'ADMN' },
    { label: 'LaLiga', text: 'LALIGA' }
  ];

  const style = document.createElement('style');
  style.textContent = `
    .clients-end{background:#f2f2f0;color:#111;padding:clamp(64px,7vw,108px) 0 clamp(58px,6vw,92px);overflow:hidden}
    .clients-end__head{width:min(1240px,90vw);margin:0 auto clamp(34px,4vw,54px);display:grid;grid-template-columns:minmax(0,1fr) minmax(260px,.4fr);align-items:end;gap:36px}
    .clients-end__eyebrow{font:700 12px/1 Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#777;margin-bottom:12px}
    .clients-end__title{font:700 clamp(40px,5vw,76px)/.95 Arial,sans-serif;letter-spacing:-.055em;margin:0;max-width:760px}
    .clients-end__note{font:400 14px/1.5 Arial,sans-serif;color:#777;max-width:320px;text-align:right;justify-self:end;margin:0 0 8px}
    .clients-marquee{display:grid;gap:clamp(24px,2.2vw,34px);overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 5%,#000 95%,transparent 100%);mask-image:linear-gradient(90deg,transparent 0,#000 5%,#000 95%,transparent 100%)}
    .clients-strip{display:flex;align-items:center;width:max-content;gap:clamp(42px,4.5vw,86px);will-change:transform;animation-timing-function:linear;animation-iteration-count:infinite;animation-play-state:running}
    .clients-strip.row-a{animation-name:clientsDriftA;animation-duration:42s}
    .clients-strip.row-b{animation-name:clientsDriftB;animation-duration:48s}
    .client-end-logo{flex:0 0 auto;width:clamp(135px,13vw,220px);height:clamp(72px,7.5vw,112px);display:flex;align-items:center;justify-content:center;color:#777;text-align:center;white-space:pre-line;font:700 clamp(18px,2vw,30px)/1.05 Arial,sans-serif;letter-spacing:-.03em}
    .client-end-logo img{max-width:100%;max-height:100%;object-fit:contain;display:block;filter:grayscale(1) brightness(.72) contrast(.92);opacity:.78;mix-blend-mode:multiply}
    @keyframes clientsDriftA{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}
    @keyframes clientsDriftB{from{transform:translate3d(-50%,0,0)}to{transform:translate3d(0,0,0)}}

    .contact-end{position:relative;isolation:isolate;background:#0d0d0c;color:#f5f2ea;padding:clamp(76px,8vw,128px) clamp(24px,5vw,82px) 44px;overflow:hidden}
    .contact-end__grid{width:min(1500px,94vw);margin:0 auto;display:grid;grid-template-columns:minmax(280px,.62fr) minmax(0,1.38fr);gap:clamp(34px,5vw,82px);align-items:center}
    .contact-end__kicker{font:700 11px/1 Arial,sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#85817b;margin-bottom:16px}
    .contact-end__title{font:700 clamp(58px,7vw,124px)/.86 Arial,sans-serif;letter-spacing:-.07em;margin:0 0 24px}
    .contact-end__sub{font:400 clamp(17px,1.5vw,24px)/1.45 Arial,sans-serif;color:#aaa59d;max-width:580px;margin:0}

    .paper-contact{position:relative;color:#2c2a27;background:radial-gradient(circle at 16% 14%,rgba(255,255,255,.55),transparent 24%),radial-gradient(circle at 88% 80%,rgba(103,82,54,.08),transparent 30%),linear-gradient(180deg,#e4ddd0 0%,#d5ccbc 100%);padding:clamp(38px,4.5vw,68px) clamp(30px,5vw,74px) clamp(48px,5vw,74px);min-height:500px;transform:rotate(-1.7deg);box-shadow:0 32px 90px rgba(0,0,0,.42);clip-path:polygon(1% 3%,7% 1.5%,13% 3.2%,20% 1.6%,27% 2.7%,35% 1.2%,43% 3%,52% 1.7%,61% 2.9%,70% 1.4%,79% 2.8%,89% 1.5%,99% 3%,98% 96%,91% 98%,83% 96.5%,74% 98.4%,65% 96.5%,57% 98.2%,48% 96.8%,40% 98.4%,31% 96.4%,23% 98.2%,14% 96.7%,7% 98.2%,1.5% 96%);overflow:hidden}
    .paper-contact:before{content:"";position:absolute;inset:0;pointer-events:none;opacity:.35;mix-blend-mode:multiply;background-image:repeating-linear-gradient(0deg,rgba(69,57,42,.035) 0,rgba(69,57,42,.035) 1px,transparent 1px,transparent 5px),repeating-linear-gradient(90deg,rgba(255,255,255,.06) 0,rgba(255,255,255,.06) 1px,transparent 1px,transparent 7px)}
    .paper-contact__top{position:relative;z-index:1;display:flex;justify-content:space-between;gap:24px;align-items:flex-start;padding-bottom:28px;border-bottom:1px solid rgba(69,59,48,.28)}
    .paper-contact__label{font:700 10px/1 Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#6e6258;margin-bottom:12px}
    .paper-contact__mail{display:inline-block;color:#263442;text-decoration:none;font:700 clamp(25px,2.65vw,43px)/1.04 Arial,sans-serif;letter-spacing:-.04em;word-break:break-word}
    .paper-contact__mail:hover{text-decoration:underline}
    .paper-contact__location{color:#4e4740;text-align:right;font:700 14px/1.35 Arial,sans-serif;white-space:nowrap}
    .paper-contact__links{position:relative;z-index:1;display:grid;grid-template-columns:1fr 1fr;margin-top:28px;border-top:1px solid rgba(69,59,48,.2)}
    .paper-contact__links a{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 4px;border-bottom:1px solid rgba(69,59,48,.2);color:#2b2b29;text-decoration:none;font:700 14px/1 Arial,sans-serif}
    .paper-contact__links a:nth-child(odd){padding-right:18px}.paper-contact__links a:nth-child(even){padding-left:18px;border-left:1px solid rgba(69,59,48,.2)}
    .paper-contact__links a:hover{opacity:.58}
    .paper-contact__note{position:relative;z-index:1;max-width:68%;margin:26px 0 0;color:#685e54;font:400 12px/1.55 Arial,sans-serif}
    .paper-stamp-crop{position:absolute;right:clamp(26px,4vw,56px);bottom:clamp(24px,3vw,46px);width:clamp(120px,12vw,178px);height:clamp(102px,10vw,148px);overflow:hidden;transform:rotate(8deg);z-index:2;filter:drop-shadow(0 8px 12px rgba(0,0,0,.14))}
    .paper-stamp-crop img{position:absolute;max-width:none;width:910px;height:auto;left:-722px;top:-1394px}
    .contact-end__footer{width:min(1500px,94vw);margin:52px auto 0;padding-top:20px;border-top:1px solid #2b2b29;display:flex;justify-content:space-between;gap:20px;color:#66635f;font:600 10px/1.2 Arial,sans-serif;letter-spacing:.1em;text-transform:uppercase}

    @media(max-width:850px){.clients-end__head{grid-template-columns:1fr}.clients-end__note{text-align:left;justify-self:start}.client-end-logo{width:150px;height:78px}.contact-end__grid{grid-template-columns:1fr}.paper-contact{transform:rotate(-.7deg)}}
    @media(max-width:560px){.client-end-logo{width:126px;height:66px}.paper-contact{padding:40px 22px 150px;min-height:520px}.paper-contact__top{flex-direction:column}.paper-contact__location{text-align:left}.paper-contact__links{grid-template-columns:1fr}.paper-contact__links a:nth-child(even){padding-left:4px;border-left:0}.paper-contact__links a:nth-child(odd){padding-right:4px}.paper-contact__note{max-width:100%}.paper-stamp-crop{right:18px;bottom:20px;width:126px;height:104px}.paper-stamp-crop img{width:700px;left:-555px;top:-1073px}.contact-end__footer{flex-direction:column}}
    @media(prefers-reduced-motion:reduce){.clients-strip{animation:none!important}}
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
    const all = [...baseClients, ...extraClients];
    const rowA = all.filter((_,i) => i % 2 === 0);
    const rowB = all.filter((_,i) => i % 2 === 1);

    const clients = document.createElement('section');
    clients.className = 'clients-end';
    clients.setAttribute('aria-label','Selected clients');
    clients.innerHTML = `<div class="clients-end__head"><div><div class="clients-end__eyebrow">Selected clients</div><h2 class="clients-end__title">Brands & teams I’ve worked with.</h2></div><p class="clients-end__note">Across media, gaming, sports, hospitality and global brands.</p></div>`;
    const marquee = document.createElement('div');
    marquee.className = 'clients-marquee';
    marquee.appendChild(buildRow(rowA,'row-a'));
    marquee.appendChild(buildRow(rowB,'row-b'));
    clients.appendChild(marquee);

    const contact = document.createElement('section');
    contact.className = 'contact-end';
    contact.id = 'contact';
    contact.innerHTML = `
      <div class="contact-end__grid">
        <div class="contact-end__copy"><div class="contact-end__kicker">Contact</div><h2 class="contact-end__title">Let’s work together.</h2><p class="contact-end__sub">Available for visual art, 2D art, illustration, concept development and selected freelance collaborations.</p></div>
        <div class="paper-contact">
          <div class="paper-contact__top"><div><div class="paper-contact__label">Email me</div><a class="paper-contact__mail" href="mailto:Hanafy.art@gmail.com">Hanafy.art@gmail.com</a></div><div class="paper-contact__location">Cologne<br>Germany</div></div>
          <div class="paper-contact__links"><a href="https://www.linkedin.com/in/mohamed-hanafy-78609a97/" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><span>↗</span></a><a href="https://www.instagram.com/mohanafy93/" target="_blank" rel="noopener noreferrer"><span>Instagram</span><span>↗</span></a><a href="https://www.facebook.com/hanafy93" target="_blank" rel="noopener noreferrer"><span>Facebook</span><span>↗</span></a><a href="mailto:Hanafy.art@gmail.com"><span>Email</span><span>↗</span></a></div>
          <p class="paper-contact__note">Thanks for taking the time to view my work. For collaborations, commissions, freelance opportunities, or project enquiries, feel free to get in touch.</p>
          <span class="paper-stamp-crop" aria-label="Mohamed Hanafy personal stamp"><img src="assets/images/portfolio-reference-new.webp" alt="" aria-hidden="true"></span>
        </div>
      </div>
      <div class="contact-end__footer"><span>Mohamed Hanafy — Visual Artist</span><span>Cologne, Germany</span></div>`;

    document.body.appendChild(clients);
    document.body.appendChild(contact);
  }

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
