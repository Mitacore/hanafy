(() => {
  'use strict';

  const section = document.querySelector('#graphic-design');
  if (!section) return;

  section.className = 'graphic-editorial-section';
  section.innerHTML = `
    <div class="gd-intro">
      <div class="gd-kicker">Selected work / 2024—2026</div>
      <h2 class="gd-title">GRAPHIC<br>DESIGN</h2>
      <div class="gd-intro-meta">
        <p>Brand campaigns, key visuals, posters and visual identities.</p>
        <span>04 selected projects</span>
      </div>
    </div>

    <div class="gd-projects">
      <article class="gd-project gd-project--ahly" id="posters">
        <div class="gd-visual gd-visual--ahly">
          <span class="gd-index">01</span>
          <div class="gd-logo-wrap gd-logo-wrap--crest">
            <img src="assets/images/client-logos/10.png" alt="Al Ahly" loading="lazy">
          </div>
          <div class="gd-display gd-display--ahly">AL AHLY</div>
          <span class="gd-corner">KEY VISUAL</span>
        </div>
        <div class="gd-info">
          <div>
            <span class="gd-label">Client</span>
            <h3>Al Ahly</h3>
          </div>
          <div>
            <span class="gd-label">Discipline</span>
            <p>Key Visual · Campaign Art</p>
          </div>
          <div class="gd-year">01 / 04</div>
        </div>
      </article>

      <article class="gd-project gd-project--pizza" id="brand-identity">
        <div class="gd-visual gd-visual--pizza">
          <span class="gd-index">02</span>
          <div class="gd-pizza-mark">
            <span>PIZZA</span>
            <strong>MAESTRO</strong>
          </div>
          <div class="gd-display gd-display--pizza">MAESTRO</div>
          <span class="gd-corner">CAMPAIGN / KV</span>
        </div>
        <div class="gd-info">
          <div>
            <span class="gd-label">Client</span>
            <h3>Pizza Maestro</h3>
          </div>
          <div>
            <span class="gd-label">Discipline</span>
            <p>Campaign · Key Visual</p>
          </div>
          <div class="gd-year">02 / 04</div>
        </div>
      </article>

      <article class="gd-project gd-project--moro" id="logos">
        <div class="gd-visual gd-visual--moro">
          <span class="gd-index">03</span>
          <div class="gd-logo-wrap gd-logo-wrap--wide">
            <img src="assets/images/client-logos/6.png" alt="Moro" loading="lazy">
          </div>
          <div class="gd-display gd-display--moro">MORO</div>
          <span class="gd-corner">BRAND / VISUAL</span>
        </div>
        <div class="gd-info">
          <div>
            <span class="gd-label">Client</span>
            <h3>Moro</h3>
          </div>
          <div>
            <span class="gd-label">Discipline</span>
            <p>Brand Visuals · Art Direction</p>
          </div>
          <div class="gd-year">03 / 04</div>
        </div>
      </article>

      <article class="gd-project gd-project--aroma">
        <div class="gd-visual gd-visual--aroma">
          <span class="gd-index">04</span>
          <div class="gd-logo-wrap gd-logo-wrap--aroma">
            <img src="assets/images/client-logos/11.png" alt="Aroma" loading="lazy">
          </div>
          <div class="gd-display gd-display--aroma">EL THAWRA</div>
          <span class="gd-corner">FILM / VISUAL ART</span>
        </div>
        <div class="gd-info">
          <div>
            <span class="gd-label">Studio</span>
            <h3>Aroma Films</h3>
          </div>
          <div>
            <span class="gd-label">Project</span>
            <p>El Thawra · Visual Artwork</p>
          </div>
          <div class="gd-year">04 / 04</div>
        </div>
      </article>
    </div>

    <div class="gd-categories" aria-label="Graphic design disciplines">
      <span>POSTERS</span><span>LOGOS</span><span>BRAND IDENTITY</span><span>CAMPAIGNS</span>
    </div>
  `;

  const style = document.createElement('style');
  style.id = 'hf-graphic-design-redesign';
  style.textContent = `
    .graphic-editorial-section{
      --gd-pad:clamp(24px,4.6vw,88px);
      width:100%;max-width:none;margin:0;padding:0;
      background:#e9e7e1;color:#111;overflow:hidden;
      border-top:1px solid rgba(0,0,0,.18);
      border-bottom:1px solid rgba(0,0,0,.18);
    }
    .gd-intro{
      padding:clamp(72px,9vw,150px) var(--gd-pad) clamp(62px,7vw,110px);
      display:grid;grid-template-columns:minmax(0,1.7fr) minmax(260px,.55fr);
      column-gap:clamp(30px,5vw,100px);position:relative;
    }
    .gd-kicker{
      grid-column:1/-1;margin-bottom:clamp(24px,3vw,52px);
      font:700 11px/1 Arial,sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#777;
    }
    .gd-title{
      margin:0;font:900 clamp(76px,12.2vw,230px)/.76 Arial,sans-serif;
      letter-spacing:-.085em;text-transform:uppercase;
    }
    .gd-intro-meta{
      align-self:end;padding-bottom:.65vw;border-top:1px solid rgba(0,0,0,.32);padding-top:18px;
      display:flex;flex-direction:column;gap:36px;
    }
    .gd-intro-meta p{margin:0;font:600 clamp(18px,1.7vw,30px)/1.12 Arial,sans-serif;letter-spacing:-.035em;max-width:380px}
    .gd-intro-meta span{font:700 10px/1 Arial,sans-serif;letter-spacing:.16em;text-transform:uppercase;color:#777}
    .gd-projects{display:flex;flex-direction:column}
    .gd-project{display:grid;grid-template-columns:minmax(0,1fr);border-top:1px solid rgba(0,0,0,.22)}
    .gd-visual{
      position:relative;min-height:clamp(480px,67vw,1080px);overflow:hidden;
      display:flex;align-items:center;justify-content:center;padding:var(--gd-pad);isolation:isolate;
    }
    .gd-visual:after{
      content:'';position:absolute;inset:0;z-index:-1;opacity:.16;pointer-events:none;
      background-image:linear-gradient(rgba(255,255,255,.35) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.35) 1px,transparent 1px);
      background-size:48px 48px;
    }
    .gd-index{position:absolute;top:24px;left:var(--gd-pad);font:700 11px/1 Arial,sans-serif;letter-spacing:.16em;color:currentColor;opacity:.72}
    .gd-corner{position:absolute;right:var(--gd-pad);bottom:26px;font:700 10px/1 Arial,sans-serif;letter-spacing:.18em;text-transform:uppercase;opacity:.7}
    .gd-logo-wrap{position:relative;z-index:2;display:flex;align-items:center;justify-content:center}
    .gd-logo-wrap img{display:block;max-width:100%;max-height:100%;object-fit:contain}
    .gd-logo-wrap--crest{width:clamp(130px,15vw,260px);height:clamp(160px,19vw,330px)}
    .gd-logo-wrap--wide{width:clamp(220px,28vw,520px);height:clamp(90px,12vw,200px)}
    .gd-logo-wrap--aroma{width:clamp(210px,26vw,480px);height:clamp(90px,11vw,180px)}
    .gd-display{
      position:absolute;z-index:1;white-space:nowrap;font:900 clamp(90px,18vw,360px)/.76 Arial,sans-serif;
      letter-spacing:-.09em;opacity:.12;left:50%;top:50%;transform:translate(-50%,-50%);
    }
    .gd-visual--ahly{background:#70141d;color:#f5eee7}
    .gd-visual--pizza{background:#ffd344;color:#171717}
    .gd-visual--moro{background:#d7d3c9;color:#111}
    .gd-visual--aroma{background:#151515;color:#eee9df}
    .gd-visual--moro .gd-logo-wrap img{filter:grayscale(1) contrast(1.2)}
    .gd-visual--aroma .gd-logo-wrap img{filter:grayscale(1) brightness(4)}
    .gd-pizza-mark{position:relative;z-index:2;text-align:center;border:3px solid currentColor;padding:22px 28px 19px;transform:rotate(-4deg)}
    .gd-pizza-mark span{display:block;font:700 clamp(16px,2vw,30px)/1 Arial,sans-serif;letter-spacing:.28em;padding-left:.28em}
    .gd-pizza-mark strong{display:block;margin-top:6px;font:900 clamp(44px,7vw,110px)/.8 Arial,sans-serif;letter-spacing:-.07em}
    .gd-info{
      padding:24px var(--gd-pad) 38px;display:grid;grid-template-columns:1.3fr 1fr auto;gap:28px;align-items:end;
      background:#e9e7e1;border-top:1px solid rgba(0,0,0,.18);
    }
    .gd-label{display:block;margin-bottom:8px;font:700 9px/1 Arial,sans-serif;letter-spacing:.17em;text-transform:uppercase;color:#777}
    .gd-info h3{margin:0;font:800 clamp(28px,3.4vw,62px)/.95 Arial,sans-serif;letter-spacing:-.055em}
    .gd-info p{margin:0;font:600 clamp(14px,1.25vw,22px)/1.15 Arial,sans-serif;letter-spacing:-.025em}
    .gd-year{font:700 10px/1 Arial,sans-serif;letter-spacing:.15em;color:#777;padding-bottom:4px}
    .gd-categories{
      padding:34px var(--gd-pad) 44px;display:grid;grid-template-columns:repeat(4,1fr);gap:18px;
      border-top:1px solid rgba(0,0,0,.22);font:800 clamp(13px,1.5vw,24px)/1 Arial,sans-serif;letter-spacing:-.02em;
    }
    .gd-categories span{padding-top:12px;border-top:2px solid #111}
    @media(min-width:980px){
      .gd-project:nth-child(even) .gd-visual{margin-left:7vw}
      .gd-project:nth-child(odd) .gd-visual{margin-right:7vw}
    }
    @media(max-width:900px){
      .gd-intro{grid-template-columns:1fr;row-gap:44px}
      .gd-intro-meta{max-width:520px}
      .gd-info{grid-template-columns:1fr 1fr}.gd-year{display:none}
      .gd-categories{grid-template-columns:1fr 1fr}
      .gd-visual{min-height:72vw}
    }
    @media(max-width:560px){
      .graphic-editorial-section{--gd-pad:20px}
      .gd-intro{padding-top:64px;padding-bottom:54px}
      .gd-title{font-size:22vw}
      .gd-visual{min-height:92vw}
      .gd-info{grid-template-columns:1fr;gap:22px;padding-top:20px;padding-bottom:28px}
      .gd-categories{grid-template-columns:1fr;padding-top:24px}
      .gd-categories span{padding-bottom:8px}
    }
  `;
  document.head.appendChild(style);
})();