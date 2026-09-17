(() => {
  'use strict';

  const style = document.createElement('style');
  style.id = 'hf-content-scale-fix';
  style.textContent = `
    /* Keep Mohtawa aligned exactly like the Abu Dhabi TV block. */
    .social-flow .motion-mohtawa{
      width:100%!important;
      max-width:none!important;
      margin-left:0!important;
      margin-right:0!important;
      padding-left:0!important;
      padding-right:0!important;
      transform:none!important;
      box-sizing:border-box!important;
      overflow:hidden!important;
    }

    .social-flow .motion-mohtawa .reference-divider,
    .social-flow .motion-mohtawa .image-cover,
    .social-flow .motion-mohtawa .original-crop,
    .social-flow .motion-mohtawa .hq-window{
      width:100%!important;
      max-width:none!important;
      margin-left:0!important;
      margin-right:0!important;
      box-sizing:border-box!important;
    }

    .social-flow .motion-mohtawa .reference-divider>img,
    .social-flow .motion-mohtawa .image-cover>img,
    .social-flow .motion-mohtawa .original-crop>img{
      display:block!important;
      width:100%!important;
      max-width:none!important;
      height:auto!important;
      margin:0!important;
    }

    /* Use the same readable content alignment as the Abu Dhabi TV section. */
    .social-flow .motion-mohtawa .reference-description{
      width:100%!important;
      max-width:none!important;
      margin-left:0!important;
      margin-right:0!important;
      padding-left:0!important;
      padding-right:0!important;
      box-sizing:border-box!important;
    }

    @media(max-width:760px){
      .social-flow .motion-mohtawa{
        width:100%!important;
        max-width:none!important;
        margin-left:0!important;
        margin-right:0!important;
      }
    }
  `;
  document.head.appendChild(style);
})();
