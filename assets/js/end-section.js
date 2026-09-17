(() => {
  'use strict';

  document.querySelectorAll('.client-marquee, .client-wall, .clients-end, .contact-end').forEach(el => el.remove());

  const style = document.createElement('style');
  style.textContent = `
    .clients-end{background:#f2f2f0;color:#111;padding:clamp(64px,7vw,108px) 0 clamp(58px,6vw,92px);overflow:hidden}
    .clients-end__head{width:min(1240px,90vw);margin:0 auto clamp(34px,4vw,54px);display:grid;grid-template-columns:minmax(0,1fr) minmax(260px,.4fr);align-items:end;gap:36px}
    .clients-end__eyebrow{font:700 12px/1 Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#777;margin-bottom:12px}
    .clients-end__title{font:700 clamp(40px,5vw,76px)/.95 Arial,sans-serif;letter-spacing:-.055em;margin:0;max-width:760px}
    .clients-end__note{font:400 14px/1.5 Arial,sans-serif;color:#777;max-width:320px;text-align:right;justify-self:end;margin:0 0 8px}

    .logos-marquee{display:grid;gap:clamp(20px,2vw,30px);overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent 0,#000 5%,#000 95%,transparent 100%);mask-image:linear-gradient(90deg,transparent 0,#000 5%,#000 95%,transparent 100%)}
    .logos-track{display:flex;align-items:center;width:max-content;gap:28px;will-change:transform;animation-timing-function:linear;animation-iteration-count:infinite;animation-play-state:running}
    .logos-track.row-one{animation:logosLeft 46s linear infinite}
    .logos-track.row-two{animation:logosRight 50s linear infinite}
    .logos-piece{position:relative;flex:0 0 auto;width:clamp(760px,82vw,1180px);aspect-ratio:3/1;overflow:hidden;background:#f2f2f0}
    .logos-piece img{position:absolute;left:0;width:100%;height:auto;max-width:none;display:block;filter:grayscale(1) contrast(.9);opacity:.82;mix-blend-mode:multiply;user-select:none;pointer-events:none}
    .row-one .logos-piece img{top:0}
    .row-two .logos-piece img{top:-100%}
    @keyframes logosLeft{from{transform:translate3d(0,0,0)}to{transform:translate3d(calc(-50% - 14px),0,0)}}
    @keyframes logosRight{from{transform:translate3d(calc(-50% - 14px),0,0)}to{transform:translate3d(0,0,0)}}

    .contact-end{position:relative;isolation:isolate;background:#0d0d0c;color:#f5f2ea;padding:clamp(76px,8vw,128px) clamp(24px,5vw,82px) 44px;overflow:hidden}
    .contact-end__grid{width:min(1500px,94vw);margin:0 auto;display:grid;grid-template-columns:minmax(280px,.62fr) minmax(0,1.38fr);gap:clamp(34px,5vw,82px);align-items:center}
    .contact-end__kicker{font:700 11px/1 Arial,sans-serif;letter-spacing:.22em;text-transform:uppercase;color:#85817b;margin-bottom:16px}
    .contact-end__title{font:700 clamp(58px,7vw,124px)/.86 Arial,sans-serif;letter-spacing:-.07em;margin:0 0 24px}
    .contact-end__sub{font:400 clamp(17px,1.5vw,24px)/1.45 Arial,sans-serif;color:#aaa59d;max-width:580px;margin:0}
    .paper-contact{position:relative;color:#2c2a27;background:radial-gradient(circle at 16% 14%,rgba(255,255,255,.55),transparent 24%),radial-gradient(circle at 88% 80%,rgba(103,82,54,.08),transparent 30%),linear-gradient(180deg,#e4ddd0 0%,#d5ccbc 100%);padding:clamp(38px,4.5vw,68px) clamp(30px,5vw,74px) clamp(48px,5vw,74px);min-height:500px;transform:rotate(-1.7deg);box-shadow:0 32px 90px rgba(0,0,0,.42);clip-path:polygon(1% 3%,7% 1.5%,13% 3.2%,20% 1.6%,27% 2.7%,35% 1.2%,43% 3%,52% 1.7%,61% 2.9%,70% 1.4%,79% 2.8%,89% 1.5%,99% 3%,98% 96%,91% 98%,83% 96.5%,74% 98.4%,65% 96.5%,57% 98.2%,48% 96.8%,40% 98.4%,31% 96.4%,23% 98.2%,14% 96.7%,7% 98.2%,1.5% 96%);overflow:hidden}
    .paper-contact__top{display:flex;justify-content:space-between;gap:24px;align-items:flex-start;padding-bottom:28px;border-bottom:1px solid rgba(69,59,48,.28)}
    .paper-contact__label{font:700 10px/1 Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#6e6258;margin-bottom:12px}
    .paper-contact__mail{display:inline-block;color:#263442;text-decoration:none;font:700 clamp(25px,2.65vw,43px)/1.04 Arial,sans-serif;letter-spacing:-.04em;word-break:break-word}
    .paper-contact__location{color:#4e4740;text-align:right;font:700 14px/1.35 Arial,sans-serif;white-space:nowrap}
    .paper-contact__links{display:grid;grid-template-columns:1fr 1fr;margin-top:28px;border-top:1px solid rgba(69,59,48,.2)}
    .paper-contact__links a{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 4px;border-bottom:1px solid rgba(69,59,48,.2);color:#2b2b29;text-decoration:none;font:700 14px/1 Arial,sans-serif}
    .paper-contact__links a:nth-child(odd){padding-right:18px}.paper-contact__links a:nth-child(even){padding-left:18px;border-left:1px solid rgba(69,59,48,.2)}
    .paper-contact__note{max-width:68%;margin:26px 0 0;color:#685e54;font:400 12px/1.55 Arial,sans-serif}
    .contact-end__footer{width:min(1500px,94vw);margin:52px auto 0;padding-top:20px;border-top:1px solid #2b2b29;display:flex;justify-content:space-between;gap:20px;color:#66635f;font:600 10px/1.2 Arial,sans-serif;letter-spacing:.1em;text-transform:uppercase}

    @media(max-width:850px){.clients-end__head{grid-template-columns:1fr}.clients-end__note{text-align:left;justify-self:start}.logos-piece{width:860px}.contact-end__grid{grid-template-columns:1fr}.paper-contact{transform:rotate(-.7deg)}}
    @media(max-width:560px){.logos-piece{width:620px}.paper-contact{padding:40px 22px 70px}.paper-contact__top{flex-direction:column}.paper-contact__location{text-align:left}.paper-contact__links{grid-template-columns:1fr}.paper-contact__links a:nth-child(even){padding-left:4px;border-left:0}.paper-contact__links a:nth-child(odd){padding-right:4px}.paper-contact__note{max-width:100%}.contact-end__footer{flex-direction:column}}
    @media(prefers-reduced-motion:reduce){.logos-track{animation:none!important}}
  `;
  document.head.appendChild(style);

  const makePiece = () => {
    const piece = document.createElement('div');
    piece.className = 'logos-piece';
    const img = document.createElement('img');
    img.src = 'assets/images/logos.png?v=20260917i';
    img.alt = 'Selected client logos';
    img.loading = 'eager';
    img.decoding = 'async';
    piece.appendChild(img);
    return piece;
  };

  const clients = document.createElement('section');
  clients.className = 'clients-end';
  clients.innerHTML = `<div class="clients-end__head"><div><div class="clients-end__eyebrow">Selected clients</div><h2 class="clients-end__title">Brands & teams I’ve worked with.</h2></div><p class="clients-end__note">Across media, gaming, sports, hospitality and global brands.</p></div>`;

  const marquee = document.createElement('div');
  marquee.className = 'logos-marquee';
  const row1 = document.createElement('div'); row1.className = 'logos-track row-one';
  const row2 = document.createElement('div'); row2.className = 'logos-track row-two';
  row1.append(makePiece(), makePiece());
  row2.append(makePiece(), makePiece());
  marquee.append(row1,row2);
  clients.appendChild(marquee);

  const contact = document.createElement('section');
  contact.className = 'contact-end';
  contact.id = 'contact';
  contact.innerHTML = `
    <div class="contact-end__grid">
      <div><div class="contact-end__kicker">Contact</div><h2 class="contact-end__title">Let’s work together.</h2><p class="contact-end__sub">Available for visual art, 2D art, illustration, concept development and selected freelance collaborations.</p></div>
      <div class="paper-contact">
        <div class="paper-contact__top"><div><div class="paper-contact__label">Email me</div><a class="paper-contact__mail" href="mailto:Hanafy.art@gmail.com">Hanafy.art@gmail.com</a></div><div class="paper-contact__location">Cologne<br>Germany</div></div>
        <div class="paper-contact__links"><a href="https://www.linkedin.com/in/mohamed-hanafy-78609a97/" target="_blank" rel="noopener noreferrer"><span>LinkedIn</span><span>↗</span></a><a href="https://www.instagram.com/mohanafy93/" target="_blank" rel="noopener noreferrer"><span>Instagram</span><span>↗</span></a><a href="https://www.facebook.com/hanafy93" target="_blank" rel="noopener noreferrer"><span>Facebook</span><span>↗</span></a><a href="mailto:Hanafy.art@gmail.com"><span>Email</span><span>↗</span></a></div>
        <p class="paper-contact__note">Thanks for taking the time to view my work. For collaborations, commissions, freelance opportunities, or project enquiries, feel free to get in touch.</p>
      </div>
    </div>
    <div class="contact-end__footer"><span>Mohamed Hanafy — Visual Artist</span><span>Cologne, Germany</span></div>`;

  document.body.append(clients,contact);
})();