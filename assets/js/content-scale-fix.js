(() => {
  'use strict';

  const style = document.createElement('style');
  style.id = 'hf-content-scale-fix';
  style.textContent = `
    /* Enlarge the Mohtawa/content section itself, not only its container. */
    .social-flow .motion-mohtawa{
      width:110vw!important;
      max-width:110vw!important;
      margin-left:calc(50% - 55vw)!important;
      margin-right:calc(50% - 55vw)!important;
      transform:none!important;
      transform-origin:center top!important;
    }

    .social-flow .motion-mohtawa .reference-divider,
    .social-flow .motion-mohtawa .image-cover,
    .social-flow .motion-mohtawa .original-crop,
    .social-flow .motion-mohtawa .hq-window{
      width:100%!important;
      max-width:none!important;
    }

    .social-flow .motion-mohtawa .reference-divider>img,
    .social-flow .motion-mohtawa .image-cover>img,
    .social-flow .motion-mohtawa .original-crop>img{
      width:100%!important;
      max-width:none!important;
      height:auto!important;
    }

    /* Keep the paragraph readable while the visual block grows. */
    .social-flow .motion-mohtawa .reference-description{
      width:min(940px,82vw)!important;
      max-width:none!important;
      margin-left:auto!important;
      margin-right:auto!important;
    }

    @media(max-width:760px){
      .social-flow .motion-mohtawa{
        width:108vw!important;
        max-width:108vw!important;
        margin-left:calc(50% - 54vw)!important;
        margin-right:calc(50% - 54vw)!important;
      }
    }
  `;
  document.head.appendChild(style);
})();
