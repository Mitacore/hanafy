(() => {
  'use strict';

  // Full carousel sets keyed by the Drive id currently attached to each cover.
  // Images are rendered inside the portfolio viewer; visitors never leave the site.
  const carouselSets = new Map([
    ['17FJs_ft4JCNUQbdLWBq267QjnoHj9iiV',['17FJs_ft4JCNUQbdLWBq267QjnoHj9iiV','1seM1Sfr11c6eOzvDteNYpnlc-Gz3XJb0','1HrfrFLfhlkSuvpHp-2IrBcYiR67GtFJ7','1uGdOcZA140a0SMsOvlwypzZ5g3R_0i3k','1blXqiDNxclczl6zWqvu624Niog1Yl_Zi','14PUXni14dJ4gDvYZ9u9ZSSysaNUD_vZl']],
    ['1mxQHXxxaF_HwYYT52iUBuHNQ0KD2avhb',['1mxQHXxxaF_HwYYT52iUBuHNQ0KD2avhb','1ihlGPNQ3qfP4H9591Lk4MyfX4CDPNHq1','1AQTVg51R0eEFyWSsDXnabHdPBc5XdwfS','1wvNB7DnRgHrqKnqYtt1360jXz7ZXFIhs','1f1Cf96hrVycmzjKK7oDeaMSQVIB4tHIH','13uz8L8OG0ZY3EIn7FLcJPAzMaJcIwH12','1lNEC-ywZ6CI0NYOJ5URbXbSC41Yme1Vl','1jJG17_BPcDxsppzIw_b_h8is3v1GhU3d']],
    ['1eHIn845ZYEr1SnwEjUTJa9xbsD1JTKcP',['1eHIn845ZYEr1SnwEjUTJa9xbsD1JTKcP','1QPFyvYcYAl6IXiTpGimEZZBQYcDt_ThL','1Ep0TfciC0n2bdn5Ck1kloVuDpTwliNDi','1sz7zkl8WT19_4eXMVn7QuNiCPg7e1nzk','1Md-svbRs2C9byJ7suGyNvdgDXsuj_uya','1p3ic8Wd2Wv4XSSjLQ4_j1pZOmpoN3nsi','1AHdjNca4PnX7bMgmELzKefGMbv2iRRcB']],
    ['1c2YmIGrf7P2FKbhVPpjozh_QxLXNT-KO',['1c2YmIGrf7P2FKbhVPpjozh_QxLXNT-KO','1GsST6BcQHsHELMmf971sq5Ejb64rSXiE','1YfL_VZp61jeNYBzUAsnT9rFbST0piHe_','1Vrn4nVNIemglTofREV7PYhyFKf7oitDE','1GP13PVK8m8AksvCozr2G3Cd6Twa-JULt']],
    ['1Oor2E44siEBOuLEjYcFS74LJ-Yz1Pk1N',['1Oor2E44siEBOuLEjYcFS74LJ-Yz1Pk1N','1JcC3eYowRBahXiUW_C7rx8wZxeom0B4Z','1P-Uf_fEKdhwZIKmUMxRQgcFFqI_qaINO','1bT9D00KrMYAkdsYZRXaEbrRp_pbZWrcm','1FnDFTqcZcggo7uievDSBEYglIYm3S4V1','1G_U0v10oFF5Wt2wOvJOOnkAaMrZadoII']],
    ['1Rbw391IVriArpmt0Yide9FgZQQvn5kIU',['1Rbw391IVriArpmt0Yide9FgZQQvn5kIU','1ypXLE_VoG-XaX3OBsrNEoJrQ65RTwKAL','1zJze8UiOywt1XfDOl38q65Bz7JWOc5Ir','14xR83OtZZ3LZlD4CBc6xolcuC34uZRhu','1Ov3HIWp8zxZRLMPEW3A8AYTYwOXiJpBL','1of56wzoct8BS70zcHhW9fcFxiT6gR1pj','1bX-AGbuh3IE1-Sl1wHoV634Rfstvj9we','1dbL0C11hKLg_9NAnYAH7E5x-uX-JvYGD','1enQpxpy_tZJecN_CiKcfJ-bWRR-fDtGs','1-Umw0BtucweWVuWm--ZVr_E-F5_8O5md']],
    ['1Qq45z_AuHvFow0hwhGdxr3tczv-lmp6h',['1Qq45z_AuHvFow0hwhGdxr3tczv-lmp6h','1ACtj10tKp0Dts3nRIDfn6EHHBrPGuZpK','16jwqgz09YW3zBm_2gia5Vdqh3NFs7Xl8','1h-COg-aS-OMw7JrHjFHs29tT7V1QT5Dd']],
    ['1gCit8U716bZW8ZiqAWrzvfi8l3B76qas',['1gCit8U716bZW8ZiqAWrzvfi8l3B76qas','1vO1E5Ov3e3aQTcrg0fV17AdEkzK52OBQ','1vPGoRRM4BBQIl3zvPsO-G51JdQmqCPaE','1-dAs-Ashm36o1D4_saV-eKT28Qcd2jP5','1PuYPRs-gOFAghsvMoJNn0kJkGGBHaRc7','1rFC2SUNIczk5zrtqDT9SAgS8LW0tXc9F','1QdAQwGhn38eyvxf2XwlV6I-OdABKMZn4']],
    ['18Fx1JCBvJoWstV9Zr6gi_B8daHfajFfU',['18Fx1JCBvJoWstV9Zr6gi_B8daHfajFfU','1vsV9vqnSOARxEv1RQgHZwBLXpmSuPRde','1LZ--g0lZ1X02SpDdVXRrPNUV5zDTCIwm','1dCAi1d5JEumallZditw4sgbl5s2_DthE','1ZzmoCUaQCr7H4oB1GShXs8ihZe_Mu6T9','1U0nFV2s3FYBmHjvtuS2U3s6yaKsPe_6g','1KqXjspOlvR-P9wNsKVb6gW_zfpcp6Jsz']],
    ['1E-yqjhRNz5GFiAeObCZvmA2Bhf0_ey0W',['1E-yqjhRNz5GFiAeObCZvmA2Bhf0_ey0W','1oxhj23tPPiYnS6ymcfjCUZoKED6W6EbP','1KwoRg1We74TyNzigVgXZVx_RAy5M1nIA']],
    ['1de9M0H7wJUVEx1PsPBFfPTTRa9-yB22l',['1de9M0H7wJUVEx1PsPBFfPTTRa9-yB22l','1bd9PUX71pMjYpFZsBjAmcbp0qK9SmDhh','17rw4qHQmaYP-dWiHB619e5P7wopvo1OQ','17kHESvW8J0rl-n2UXTDHtayRYl7p5bj0','15jK9WEk9V-oHppVC9f2ITRoPk-g6iELx']],
    ['1MONiVqv7VPpF4z1ZMXGeB3jGxz52mj7G',['1MONiVqv7VPpF4z1ZMXGeB3jGxz52mj7G','1NOVLF87_aBqmutkhs28glinvPHriHmD5','1UDfzqz-NJQXXiQwntyOfqRQTYtqm-8Of','12-lcvk3QIsm6tEpND7q2JB5EY7BeeA7N','1cMjtKM8uUkbbEd12Q8HQcoyz9HNw4F9X','1f6MBpQi4sMmlvHoELRt8McZx3PoTCoEG','13yBcPMrGnYzO4x62O8j0cIud8EbGP0Ar']],
    ['1W10kIpoqSkp_W24zEaIJNuhjUW1Eeupn',['1W10kIpoqSkp_W24zEaIJNuhjUW1Eeupn','1hU0A8jPid-1kwPjiM7RX4HM24iSr_Pnx','1agK0xI_xLQmAoGxZDg-AWgq432VHouvY','1GcgKS6uaQTuP4GWRrvKezSkg1mOTOq6r','1pZD64k4ZYyv_M3TKh4oVH1miZll6kUE8','1IsMSdhd79LJHwYScOh_xIPMox3ccGH5S','1SvN63_8_yViE7tpjStDRbxfHxL1xR4-Y','10luMnbEXkD7l4ZiHfWExhlFUoxVybEO0']],
    ['152m_6PR7Qya7BymmrdxRmVPH4D1dmA-B',['152m_6PR7Qya7BymmrdxRmVPH4D1dmA-B','1OC7k1jgs2VBdZDpc1B--xdl6gb-MKFJP','1zkNAYID2kB_cFLE99LA1Mcr8LwnG65um','1dPlrx4eiwqo4qFyeI5UMPCsLlUc8LqXX','174c7zw_tM18oVkbsn87irHpn1F62v9Qm']],
    ['1ytrL_vPAconcQv60Q1x6gRARNAEMyQl_',['1ytrL_vPAconcQv60Q1x6gRARNAEMyQl_','1_kLgpi6b45G6ONyY1FYaZiC00NDrr3ES']],
    ['12El-dIL-rmMTNX7LrcMU_tMnqrKJ5Axd',['12El-dIL-rmMTNX7LrcMU_tMnqrKJ5Axd','1xP0ENLtMWHgHYQcJwRD4Fbj1GYtRhcQq','1K5CFum28e25-bwNF3SxV9bdQYEbl3A-a','1OM0ASArit2zZodr8Uh3Mx3zyjXGMWU5S','1GaEL69ETFLm-rlqPcFzdOEEdV0dbnh27','1ydhYCVAnQpy8zMQXLtyHESImYDmnC_oT','1Wy9P3nljCUaM930u8f0ahjmlEakmj7qM','1F1QIaE-JWKxucZIQTo-CRAPe194c8X1n','16VYCgvZhAinQdUXsZa4kZlNwE7gAYIRz']],
    ['1PYZEKhfVo2BZgqLpi-vyEGGGoRQxaLLt',['1PYZEKhfVo2BZgqLpi-vyEGGGoRQxaLLt','1GBNXz6T4SG836xOQfStoPGXjJ_54s75E','1AzQ8ul416dOehI8NKBDT29CMne1vucix','1sjKzNKIh1vbORXFcHfEBW20zTC8U1ozW','1TNh7Jr8ru9p3xsavXGSVTQPtcN1byzVu','1MZvs8RV3uluPNDijSUBJcDmRm5ZLwREv','1p6Gq1pxQNT8crBaz3AUrkPCNry8zElGR']]
  ]);

  // Old PDF aliases: if app-core already rewrote a cover, resolve it back to the carousel.
  const aliases = new Map([
    ['1lf2cU8Ik7oJbmdrZ4o1oROo1jPh0r3Xi','17FJs_ft4JCNUQbdLWBq267QjnoHj9iiV'],
    ['10p3hql9ykMntPBlD6ZV-EIRg0oIK731o','1PYZEKhfVo2BZgqLpi-vyEGGGoRQxaLLt'],
    ['1yZUWEpHQEO6JiA0yR_Yff02KHQnLu6yr','12El-dIL-rmMTNX7LrcMU_tMnqrKJ5Axd']
  ]);

  const idFromHref = href => {
    const m = String(href || '').match(/\/d\/([^/]+)/);
    return m ? m[1] : null;
  };
  const driveImage = id => `https://drive.google.com/thumbnail?id=${encodeURIComponent(id)}&sz=w2400`;

  const style = document.createElement('style');
  style.textContent = `
    .pf-viewer{position:fixed;inset:0;z-index:99999;background:rgba(5,5,7,.94);backdrop-filter:blur(14px);display:none;align-items:center;justify-content:center;padding:18px;font-family:inherit;color:#fff}
    .pf-viewer.is-open{display:flex}
    .pf-dialog{position:relative;width:min(980px,94vw);height:min(92vh,980px);display:flex;flex-direction:column;align-items:center;justify-content:center}
    .pf-top{position:absolute;top:0;left:0;right:0;z-index:5;display:flex;align-items:center;justify-content:space-between;gap:16px;padding:8px 4px}
    .pf-title{font-size:14px;font-weight:600;max-width:70%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#f5f5f5}
    .pf-count{font-size:13px;color:#b7b7bd;margin-left:auto}
    .pf-close{width:40px;height:40px;border:0;border-radius:50%;background:rgba(255,255,255,.12);color:#fff;font-size:26px;line-height:1;cursor:pointer;display:grid;place-items:center;transition:.2s}
    .pf-close:hover{background:rgba(255,255,255,.22);transform:scale(1.04)}
    .pf-stage{position:relative;width:100%;height:calc(100% - 76px);margin-top:44px;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:18px}
    .pf-image{display:block;max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain;border-radius:12px;box-shadow:0 24px 80px rgba(0,0,0,.42);user-select:none;-webkit-user-drag:none;transition:opacity .18s ease,transform .18s ease}
    .pf-image.is-changing{opacity:.3;transform:scale(.992)}
    .pf-arrow{position:absolute;top:50%;translate:0 -50%;z-index:4;width:48px;height:48px;border:0;border-radius:50%;background:rgba(255,255,255,.92);color:#111;font-size:29px;line-height:1;display:grid;place-items:center;cursor:pointer;box-shadow:0 8px 30px rgba(0,0,0,.28);transition:.18s}
    .pf-arrow:hover{transform:scale(1.06)}
    .pf-prev{left:14px}.pf-next{right:14px}
    .pf-arrow[hidden]{display:none}
    .pf-bottom{height:32px;display:flex;align-items:center;justify-content:center;gap:6px;padding-top:12px}
    .pf-dot{width:6px;height:6px;border-radius:50%;border:0;padding:0;background:#67676c;transition:.2s}
    .pf-dot.active{background:#fff;transform:scale(1.35)}
    body.pf-lock{overflow:hidden}
    @media(max-width:700px){.pf-viewer{padding:8px}.pf-dialog{width:100vw;height:100vh}.pf-stage{height:calc(100% - 82px);border-radius:0}.pf-image{border-radius:4px}.pf-arrow{width:40px;height:40px;font-size:24px}.pf-prev{left:7px}.pf-next{right:7px}.pf-top{padding:10px 10px}.pf-title{max-width:58%}}
  `;
  document.head.appendChild(style);

  const viewer = document.createElement('div');
  viewer.className = 'pf-viewer';
  viewer.setAttribute('role','dialog');
  viewer.setAttribute('aria-modal','true');
  viewer.innerHTML = `
    <div class="pf-dialog">
      <div class="pf-top">
        <div class="pf-title"></div>
        <div class="pf-count"></div>
        <button class="pf-close" type="button" aria-label="Close preview">×</button>
      </div>
      <div class="pf-stage">
        <button class="pf-arrow pf-prev" type="button" aria-label="Previous image">‹</button>
        <img class="pf-image" alt="Portfolio preview" draggable="false" />
        <button class="pf-arrow pf-next" type="button" aria-label="Next image">›</button>
      </div>
      <div class="pf-bottom"></div>
    </div>`;
  document.body.appendChild(viewer);

  const image = viewer.querySelector('.pf-image');
  const titleEl = viewer.querySelector('.pf-title');
  const countEl = viewer.querySelector('.pf-count');
  const dotsEl = viewer.querySelector('.pf-bottom');
  const prev = viewer.querySelector('.pf-prev');
  const next = viewer.querySelector('.pf-next');
  const closeBtn = viewer.querySelector('.pf-close');

  let slides = [];
  let index = 0;
  let touchX = null;
  let previousPauseStates = [];

  function cleanTitle(a){
    return (a.getAttribute('aria-label') || 'Portfolio work')
      .replace(/\s*[—-]\s*open.*$/i,'')
      .replace(/\s*—\s*Carousel.*$/i,'')
      .trim();
  }

  function render(animate=true){
    if (!slides.length) return;
    if (animate) image.classList.add('is-changing');
    const src = slides[index];
    const preload = new Image();
    preload.onload = () => {
      image.src = src;
      requestAnimationFrame(() => image.classList.remove('is-changing'));
    };
    preload.onerror = () => {
      image.src = src;
      image.classList.remove('is-changing');
    };
    preload.src = src;
    countEl.textContent = slides.length > 1 ? `${index + 1} / ${slides.length}` : '';
    prev.hidden = next.hidden = slides.length < 2;
    [...dotsEl.children].forEach((d,i) => d.classList.toggle('active', i === index));
  }

  function go(delta){
    if (slides.length < 2) return;
    index = (index + delta + slides.length) % slides.length;
    render(true);
  }

  function pauseBackground(){
    previousPauseStates = [...document.querySelectorAll('.motion-panel')].map(panel => [panel, panel.dataset.paused]);
    previousPauseStates.forEach(([panel]) => panel.dataset.paused = 'true');
  }
  function restoreBackground(){
    previousPauseStates.forEach(([panel,state]) => panel.dataset.paused = state || 'false');
    previousPauseStates = [];
  }

  function openFrom(anchor){
    const localCover = anchor.querySelector('img')?.src;
    let id = idFromHref(anchor.getAttribute('href'));
    if (aliases.has(id)) id = aliases.get(id);
    const ids = carouselSets.get(id);

    // The first frame uses the local GitHub-hosted cover already present on the site.
    // Additional carousel frames are displayed in the site viewer, not in Drive/PDF UI.
    slides = ids && ids.length
      ? [localCover, ...ids.slice(1).map(driveImage)].filter(Boolean)
      : [localCover].filter(Boolean);

    index = 0;
    titleEl.textContent = cleanTitle(anchor);
    dotsEl.innerHTML = '';
    if (slides.length > 1) {
      slides.forEach((_,i) => {
        const d = document.createElement('button');
        d.className = 'pf-dot';
        d.type = 'button';
        d.setAttribute('aria-label', `Go to image ${i+1}`);
        d.addEventListener('click', () => { index=i; render(true); });
        dotsEl.appendChild(d);
      });
    }
    pauseBackground();
    document.body.classList.add('pf-lock');
    viewer.classList.add('is-open');
    render(false);
    closeBtn.focus({preventScroll:true});
  }

  function close(){
    viewer.classList.remove('is-open');
    document.body.classList.remove('pf-lock');
    restoreBackground();
    image.removeAttribute('src');
    slides=[];
  }

  // Capture phase is intentional: it beats the old exported runtime handler that used
  // window.location.assign(...) and was sending carousel covers to Google Drive/PDF.
  const artworkFromEvent = e => e.target.closest?.('a.moving-frame');
  document.addEventListener('pointerdown', e => {
    const a = artworkFromEvent(e);
    if (!a) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }, true);
  document.addEventListener('pointerup', e => {
    const a = artworkFromEvent(e);
    if (!a) return;
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    openFrom(a);
  }, true);
  document.addEventListener('click', e => {
    const a = artworkFromEvent(e);
    if (!a) return;
    e.preventDefault();
    e.stopImmediatePropagation();
  }, true);

  // Remove external navigation semantics after handlers are installed.
  document.querySelectorAll('a.moving-frame').forEach(a => {
    a.removeAttribute('target');
    a.removeAttribute('rel');
    a.style.cursor='zoom-in';
  });

  prev.addEventListener('click', e => { e.stopPropagation(); go(-1); });
  next.addEventListener('click', e => { e.stopPropagation(); go(1); });
  closeBtn.addEventListener('click', close);
  viewer.addEventListener('click', e => { if (e.target === viewer) close(); });

  const stage = viewer.querySelector('.pf-stage');
  stage.addEventListener('pointerdown', e => { touchX = e.clientX; });
  stage.addEventListener('pointerup', e => {
    if (touchX == null) return;
    const dx = e.clientX - touchX;
    touchX = null;
    if (Math.abs(dx) > 55) go(dx > 0 ? -1 : 1);
  });

  document.addEventListener('keydown', e => {
    if (!viewer.classList.contains('is-open')) return;
    if (e.key === 'Escape') close();
    if (e.key === 'ArrowLeft') go(-1);
    if (e.key === 'ArrowRight') go(1);
  });
})();