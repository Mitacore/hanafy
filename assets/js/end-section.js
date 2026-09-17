(() => {
  'use strict';

  // Remove the old home-overlay client wall entirely.
  document.querySelectorAll('.client-marquee, .client-wall').forEach(el => el.remove());

  const style = document.createElement('style');
  style.textContent = `
    .clients-end{background:#f4f4f2;color:#111;padding:clamp(70px,8vw,120px) 0 clamp(60px,7vw,100px);overflow:hidden}
    .clients-end__head{width:min(1200px,90vw);margin:0 auto clamp(34px,4vw,54px);display:flex;align-items:flex-end;justify-content:space-between;gap:24px}
    .clients-end__eyebrow{font:700 12px/1 Arial,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#7a7a7a;margin-bottom:12px}
    .clients-end__title{font:700 clamp(38px,5vw,76px)/.95 Arial,sans-serif;letter-spacing:-.055em;margin:0;max-width:760px}
    .clients-end__note{font:400 14px/1.5 Arial,sans-serif;color:#777;max-width:320px;text-align:right}
    .clients-marquee{display:grid;gap:clamp(18px,2vw,28px);overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 7%,#000 93%,transparent 100%);mask-image:linear-gradient(90deg,transparent 0,#000 7%,#000 93%,transparent 100%)}
    .clients-strip{display:flex;width:max-content;will-change:transform;opacity:0;clip-path:inset(0 100% 0 0)}
    .clients-strip img{display:block;width:min(92vw,1400px);height:auto;flex:none}
    .clients-end.is-visible .clients-strip{animation:clientsReveal 1.65s steps(5,end) forwards}
    .clients-end.is-visible .clients-strip:nth-child(2){animation-delay:.35s}
    .clients-end.is-visible .clients-strip:nth-child(3){animation-delay:.7s}
    .clients-end.is-moving .clients-strip.row-a{animation:clientsDriftA 34s linear infinite}
    .clients-end.is-moving .clients-strip.row-b{animation:clientsDriftB 38s linear infinite}
    .clients-end.is-moving .clients-strip.row-c{animation:clientsDriftA 42s linear infinite}
    @keyframes clientsReveal{to{opacity:1;clip-path:inset(0 0 0 0)}}
    @keyframes clientsDriftA{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}
    @keyframes clientsDriftB{from{transform:translate3d(-50%,0,0)}to{transform:translate3d(0,0,0)}}

    .contact-end{position:relative;background:#101010;color:#f3f3f0;min-height:min(860px,92vh);padding:clamp(70px,8vw,120px) clamp(24px,6vw,90px);overflow:hidden;display:grid;grid-template-columns:minmax(0,1.1fr) minmax(360px,.9fr);gap:clamp(30px,6vw,90px);align-items:center}
    .contact-end__copy{position:relative;z-index:2}
    .contact-end__kicker{font:700 12px/1 Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#8e8e8e;margin-bottom:18px}
    .contact-end__title{font:700 clamp(64px,9vw,160px)/.82 Arial,sans-serif;letter-spacing:-.075em;margin:0 0 26px;max-width:900px}
    .contact-end__sub{font:400 clamp(18px,2vw,28px)/1.35 Arial,sans-serif;color:#aaa;max-width:700px}
    .contact-card{position:relative;z-index:3;background:#d7d7d4;color:#111;padding:clamp(28px,4vw,54px);min-height:460px;display:flex;flex-direction:column;justify-content:space-between;transform:rotate(-3.25deg);box-shadow:0 26px 80px rgba(0,0,0,.35)}
    .contact-card:before{content:"";position:absolute;inset:0;border:1px solid rgba(0,0,0,.08);pointer-events:none}
    .contact-card__top{display:flex;justify-content:space-between;gap:18px;align-items:flex-start}
    .contact-card__label{font:700 11px/1 Arial,sans-serif;letter-spacing:.18em;text-transform:uppercase;color:#555}
    .contact-card__mail{font:700 clamp(25px,3vw,44px)/1.05 Arial,sans-serif;letter-spacing:-.04em;color:#111;text-decoration:none;display:inline-block;margin-top:14px;word-break:break-word}
    .contact-card__mail:hover{text-decoration:underline}
    .contact-card__location{font:600 16px/1.35 Arial,sans-serif;color:#333;text-align:right}
    .contact-card__links{display:grid;grid-template-columns:1fr 1fr;gap:0;border-top:1px solid rgba(0,0,0,.22);margin-top:44px}
    .contact-card__links a{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:16px 4px;border-bottom:1px solid rgba(0,0,0,.18);color:#111;text-decoration:none;font:700 15px/1 Arial,sans-serif}
    .contact-card__links a:nth-child(odd){padding-right:18px}.contact-card__links a:nth-child(even){padding-left:18px;border-left:1px solid rgba(0,0,0,.18)}
    .contact-card__links a:hover{opacity:.6}
    .contact-end__footer{position:absolute;left:clamp(24px,6vw,90px);right:clamp(24px,6vw,90px);bottom:24px;display:flex;justify-content:space-between;gap:20px;color:#676767;font:600 11px/1.2 Arial,sans-serif;letter-spacing:.08em;text-transform:uppercase}

    @media(max-width:850px){
      .clients-end__head{align-items:flex-start;flex-direction:column}.clients-end__note{text-align:left}
      .clients-strip img{width:160vw;max-width:none}
      .contact-end{grid-template-columns:1fr;min-height:auto;padding-bottom:90px}.contact-end__title{font-size:clamp(62px,17vw,118px)}
      .contact-card{transform:rotate(-1.5deg);min-height:410px}.contact-card__top{flex-direction:column}.contact-card__location{text-align:left}
      .contact-end__footer{position:static;margin-top:34px;grid-column:1;flex-direction:column}
    }
    @media(max-width:560px){
      .clients-end{padding-top:56px}.clients-strip img{width:220vw}.contact-card__links{grid-template-columns:1fr}.contact-card__links a:nth-child(even){padding-left:4px;border-left:0}.contact-card__links a:nth-child(odd){padding-right:4px}
    }
    @media(prefers-reduced-motion:reduce){.clients-strip{opacity:1;clip-path:none;animation:none!important}}
  `;
  document.head.appendChild(style);

  const clients = document.createElement('section');
  clients.className = 'clients-end';
  clients.setAttribute('aria-label','Selected clients');
  clients.innerHTML = `
    <div class="clients-end__head">
      <div><div class="clients-end__eyebrow">Selected clients</div><h2 class="clients-end__title">Brands & teams I’ve worked with.</h2></div>
      <p class="clients-end__note">Across media, gaming, sports, hospitality and global brands.</p>
    </div>
    <div class="clients-marquee">
      <div class="clients-strip row-a"><img src="assets/images/clients-row-1.jpg" alt="Aroma, Bitaraf, Mountain View, Visa and Aramex"><img src="assets/images/clients-row-1.jpg" alt="" aria-hidden="true"></div>
      <div class="clients-strip row-b"><img src="assets/images/clients-row-2.jpg" alt="Al Ahly FC, Domino's, Milestone Games, Steam and Moro"><img src="assets/images/clients-row-2.jpg" alt="" aria-hidden="true"></div>
      <div class="clients-strip row-c"><img src="assets/images/clients-row-3.jpg" alt="Abu Dhabi TV, Al Emarat TV, Baynounah TV, ADMN and LaLiga"><img src="assets/images/clients-row-3.jpg" alt="" aria-hidden="true"></div>
    </div>`;

  const contact = document.createElement('section');
  contact.className = 'contact-end';
  contact.id = 'contact';
  contact.innerHTML = `
    <div class="contact-end__copy">
      <div class="contact-end__kicker">Contact</div>
      <h2 class="contact-end__title">Let’s work together.</h2>
      <p class="contact-end__sub">Available for visual art, 2D art, illustration, concept development and selected freelance collaborations.</p>
    </div>
    <div class="contact-card">
      <div class="contact-card__top">
        <div><div class="contact-card__label">Email me</div><a class="contact-card__mail" href="mailto:Hanafy.art@gmail.com">Hanafy.art@gmail.com</a></div>
        <div class="contact-card__location">Cologne<br>Germany</div>
      </div>
      <div class="contact-card__links">
        <a href="https://www.linkedin.com/in/mohamed-hanafy-78609a97/" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><span>↗</span></a>
        <a href="https://www.instagram.com/mohanafy93/" target="_blank" rel="noopener noreferrer"><span>Instagram</span><span>↗</span></a>
        <a href="https://www.facebook.com/hanafy93" target="_blank" rel="noopener noreferrer"><span>Facebook</span><span>↗</span></a>
        <a href="mailto:Hanafy.art@gmail.com"><span>Email</span><span>↗</span></a>
      </div>
    </div>
    <div class="contact-end__footer"><span>Mohamed Hanafy — Visual Artist</span><span>Cologne, Germany</span></div>`;

  document.body.appendChild(clients);
  document.body.appendChild(contact);

  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      clients.classList.add('is-visible');
      setTimeout(() => clients.classList.add('is-moving'), 2600);
      io.disconnect();
    });
  }, {threshold:.18});
  io.observe(clients);
})();