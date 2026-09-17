(() => {
  'use strict';

  const style = document.createElement('style');
  style.id = 'hf-layout-fix';
  style.textContent = `
    html,body{width:100%;max-width:none!important;overflow-x:hidden}
    body{margin:0!important}

    .site-header{
      width:100%!important;
      max-width:none!important;
      margin:0!important;
      padding:18px clamp(24px,3vw,52px)!important;
      left:0!important;
      right:0!important;
    }

    main{width:100%!important;max-width:none!important;margin:0!important;padding:0!important}

    .reference-intro,
    .flow-intro,
    .social-flow,
    .work-section,
    .concept-composition,
    .concept-cinematic-section,
    #graphic-design,
    #concept-art,
    #game-art,
    #sketches{
      width:100%!important;
      max-width:none!important;
      margin-left:0!important;
      margin-right:0!important;
    }

    .reference-intro{container-type:inline-size!important}

    /* Full-bleed portfolio hero. */
    .flow-intro .portfolio-hero{
      width:100vw!important;
      max-width:100vw!important;
      margin-left:calc(50% - 50vw)!important;
      margin-right:calc(50% - 50vw)!important;
      position:relative!important;
      left:auto!important;
      right:auto!important;
      overflow:hidden!important;
    }
    .flow-intro .portfolio-hero>img{
      display:block!important;
      width:100vw!important;
      max-width:none!important;
      height:auto!important;
      margin:0!important;
      object-fit:cover!important;
    }

    .reference-intro>.reference-crop,
    .reference-intro>.reference-crop>img{
      width:100%!important;
      max-width:none!important;
    }

    .social-flow{
      padding-left:clamp(20px,2.6vw,48px)!important;
      padding-right:clamp(20px,2.6vw,48px)!important;
      box-sizing:border-box!important;
    }

    .social-flow .motion-panel,
    .social-flow .reference-divider{
      width:100%!important;
      max-width:none!important;
    }

    /* Mohtawa/content block should also touch the viewport edges at 100% zoom. */
    .social-flow .motion-mohtawa{
      width:100vw!important;
      max-width:100vw!important;
      margin-left:calc(50% - 50vw)!important;
      margin-right:calc(50% - 50vw)!important;
      padding-left:0!important;
      padding-right:0!important;
      box-sizing:border-box!important;
      overflow:hidden!important;
    }
    .social-flow .motion-mohtawa>.reference-divider,
    .social-flow .motion-mohtawa>.image-cover,
    .social-flow .motion-mohtawa .reference-divider,
    .social-flow .motion-mohtawa .image-cover,
    .social-flow .motion-mohtawa .original-crop,
    .social-flow .motion-mohtawa .original-crop>img{
      width:100%!important;
      max-width:none!important;
      margin-left:0!important;
      margin-right:0!important;
    }
    .social-flow .motion-mohtawa .reference-divider>img,
    .social-flow .motion-mohtawa>.reference-divider>img{
      display:block!important;
      width:100%!important;
      max-width:none!important;
      height:auto!important;
    }
    .social-flow .motion-mohtawa .reference-description{
      width:min(880px,88vw)!important;
      max-width:none!important;
      margin-left:auto!important;
      margin-right:auto!important;
      padding-left:0!important;
      padding-right:0!important;
    }

    .social-flow .hq-window{
      width:100%!important;
      max-width:none!important;
      padding-left:clamp(28px,7vw,120px)!important;
      padding-right:clamp(28px,7vw,120px)!important;
    }

    .work-section{
      padding-left:clamp(24px,4vw,72px)!important;
      padding-right:clamp(24px,4vw,72px)!important;
      box-sizing:border-box!important;
    }

    #concept-art{
      padding-left:0!important;
      padding-right:0!important;
    }

    #concept-art>.artwork-block{
      width:100%!important;
      max-width:none!important;
      margin-left:0!important;
      margin-right:0!important;
      padding-left:clamp(24px,4vw,72px)!important;
      padding-right:clamp(24px,4vw,72px)!important;
      box-sizing:border-box!important;
    }

    .concept-composition.concept-unified,
    .concept-cinema{
      width:100%!important;
      max-width:none!important;
      margin-left:0!important;
      margin-right:0!important;
    }

    #character-design,
    .art-ribbon,
    .ribbon-window,
    .sketches-section .art-ribbon{
      width:100%!important;
      max-width:none!important;
    }

    .game-section{
      width:100%!important;
      max-width:none!important;
      padding-left:clamp(24px,4vw,72px)!important;
      padding-right:clamp(24px,4vw,72px)!important;
    }

    .game-section .image-cover{
      width:100%!important;
      max-width:none!important;
    }

    .hf-clients-section,
    .contact-end{
      width:100%!important;
      max-width:none!important;
      margin:0!important;
    }

    footer{
      width:100%!important;
      max-width:none!important;
      margin:0!important;
      padding:28px clamp(24px,3vw,52px)!important;
      box-sizing:border-box!important;
    }

    @media(max-width:760px){
      .site-header{padding:12px 20px!important}
      .social-flow{padding-left:14px!important;padding-right:14px!important}
      .social-flow .motion-mohtawa{width:100vw!important;margin-left:calc(50% - 50vw)!important;margin-right:calc(50% - 50vw)!important}
      .work-section,
      #concept-art>.artwork-block,
      .game-section{padding-left:18px!important;padding-right:18px!important}
      footer{padding-left:20px!important;padding-right:20px!important}
    }
  `;
  document.head.appendChild(style);

  const footer = document.querySelector('body > footer');
  const clients = document.querySelector('.hf-clients-section');
  const contact = document.querySelector('.contact-end');

  if (footer) {
    if (contact) contact.insertAdjacentElement('afterend', footer);
    else if (clients) clients.insertAdjacentElement('afterend', footer);
  }
})();