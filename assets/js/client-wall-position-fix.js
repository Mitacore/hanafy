(() => {
  'use strict';
  const style = document.createElement('style');
  style.id = 'client-wall-position-fix';
  style.textContent = `
    #home.reference-intro .client-marquee{
      top:12.7%!important;
      height:15.2%!important;
      z-index:6!important;
      gap:clamp(26px,2.2vw,40px)!important;
      overflow:hidden!important;
    }
    #home.reference-intro .client-track{
      gap:clamp(44px,5.5vw,92px)!important;
    }
    #home.reference-intro .client-logo{
      width:clamp(120px,13vw,200px)!important;
      height:clamp(58px,6.2vw,96px)!important;
    }
    #home.reference-intro .client-logo img{
      max-width:100%!important;
      max-height:100%!important;
      width:auto!important;
      height:auto!important;
      object-fit:contain!important;
      opacity:.86!important;
    }
    @media(max-width:700px){
      #home.reference-intro .client-marquee{top:12.9%!important;height:15%!important;gap:18px!important}
      #home.reference-intro .client-track{gap:34px!important}
      #home.reference-intro .client-logo{width:120px!important;height:56px!important}
    }
  `;
  document.head.appendChild(style);

  const wall = document.querySelector('#home.reference-intro .client-marquee');
  if (wall) {
    wall.classList.add('is-visible');
    setTimeout(() => wall.classList.add('is-moving'), 1200);
  }
})();
