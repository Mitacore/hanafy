(() => {
  'use strict';

  const thumb = id => `https://drive.google.com/thumbnail?id=${id}&sz=w2400`;
  const sets = new Map([
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
    ['1h7Njao-THSPVi7-pWQtPuww3xNu8W5AB',['1h7Njao-THSPVi7-pWQtPuww3xNu8W5AB','1Y2b_Ng-m6SlGQPBgZ2Y7Uhhv1X9XDLgK','191QWOHLurGPrulFAWgn9DyqJ4kTysYVJ','1YLFRmt1gTRJ05r7rXO3tPKrENm-B5NK-','1RuGHL-e6JIN2-pR8d4oJn93s1bq9WQ47','1jDVTxL7ctqoozkKmb6sg6hr7koiidWSo']],
    ['1RInG9PfxPpMLgca_qvWhqgrDnntTAqhv',['1RInG9PfxPpMLgca_qvWhqgrDnntTAqhv','1L9kRhOkCfb9bjslKgu2pkFm4M1UatVzs','1RMsdkM7oWpRLPvfM7T14dZrPJ_dTdQuN','1X9xNI8QGm6HxY4hzVxMtmLVSDxP3rgpn','1fC6cCw56CDAVmyoM2L54sj5bPDCkI4as']],
    ['1rzajeP7L3oPipQ91Sc_SdRNwrSHMrsIA',['1rzajeP7L3oPipQ91Sc_SdRNwrSHMrsIA','1Ui3PmT5q0AXoQuAiGwswc96bf_62hWeM','1Zj4svIQXoHqdqyiV0EqogmQlAhKgneVg','1NUo9M-RnFQLokLNjT_3Ix-2i0pvq7wWQ','1QrmR64QdQwj-ZYiyw6TY3dTtcDhZZTKh']],
    ['1uO0IWVDi6gHBMG1f7PEJCK5v7cKOiPH4',['1uO0IWVDi6gHBMG1f7PEJCK5v7cKOiPH4','1grXwKuh_gu6mgDnx2QP47W9Cv-UpAS8j','1ggmT3MijJgLay8AQPBPfAm0FJaYrutfF','1n-70tcEKQW6PJKnOibWYS554eq5gHAGB']],
    ['1GKh3qd4ggJyA6KKLnBHBTSN6AkpdP6GK',['1GKh3qd4ggJyA6KKLnBHBTSN6AkpdP6GK','1RvjWeGJNSslk0n3RU4CA1p7r8zdfJL3Z','18cv6XNCImkrGYAGuqjm0e09dXVfYEBss','1PJzBZrJ6jUm8Nmp4OXCTqywi2jPVqqac','1Pmpn7sKSgpAxAUH1noXzTlYRpgAwSuma','1EQwyGzTGbPxYXAPWLjhSCMWvRi91Nteq','1x4IhTuIvDvnpcULDgzZInIO2jsjygMVc']],
    ['1wK1Vl8OB0yPa6VQ2Io06f-6PEqfCrixk',['1wK1Vl8OB0yPa6VQ2Io06f-6PEqfCrixk','1ORiMeRLAPio4cNvFdU6KOh_lEC40BGtI','1BAAlWDpjZ816oAAJ5Lx2416YygQ39tA-','1pU9nqhtsMcZkE9UmroVNrnuJr9WfEnSL','1EDP8007fMdA8PultCi6HRDi72XQ62Pq4','191s5-yYJhpA-jLRjbVgI6LrW-zP0nNvF','1rs4OAMxsAwUYbDGWFQpzHHSfCH-oN3nR','1LE_6qGjrptNFagmLhRM7VFo8gAV8GtgU','1Zt4PwtXIUE1BAmPuX8IV6kVj4ByS7zyw','1Qv-h_Xl-fQqxKYaD35HVQm_JucRxTmnu']],
    ['12El-dIL-rmMTNX7LrcMU_tMnqrKJ5Axd',['12El-dIL-rmMTNX7LrcMU_tMnqrKJ5Axd','1xP0ENLtMWHgHYQcJwRD4Fbj1GYtRhcQq','1K5CFum28e25-bwNF3SxV9bdQYEbl3A-a','1OM0ASArit2zZodr8Uh3Mx3zyjXGMWU5S','1GaEL69ETFLm-rlqPcFzdOEEdV0dbnh27','1ydhYCVAnQpy8zMQXLtyHESImYDmnC_oT','1Wy9P3nljCUaM930u8f0ahjmlEakmj7qM','1F1QIaE-JWKxucZIQTo-CRAPe194c8X1n','16VYCgvZhAinQdUXsZa4kZlNwE7gAYIRz']],
    ['1PYZEKhfVo2BZgqLpi-vyEGGGoRQxaLLt',['1PYZEKhfVo2BZgqLpi-vyEGGGoRQxaLLt','1GBNXz6T4SG836xOQfStoPGXjJ_54s75E','1AzQ8ul416dOehI8NKBDT29CMne1vucix','1sjKzNKIh1vbORXFcHfEBW20zTC8U1ozW','1TNh7Jr8ru9p3xsavXGSVTQPtcN1byzVu','1MZvs8RV3uluPNDijSUBJcDmRm5ZLwREv','1p6Gq1pxQNT8crBaz3AUrkPCNry8zElGR']],
    ['1AhzmWkk2-DIbH5wMCcSdEs9KQ969040Y',['1AhzmWkk2-DIbH5wMCcSdEs9KQ969040Y','1ILGfApglCr2g70GBNNokd13Bxg9R5_8J','1Vf7q_JGVh3VdH1ORnhJ4By0ilEXF6Mq8','10qCNBsG5xCQ5EaYjbHD-ORbf6zlzo5a_','1gCfLUOPffYRGcpE6KdNpDcQanvnzuVCW','1aXlND19DWGk0Zxo0F-zzqjftJ3KjT4Ug','1vTwOllKHqCjUXrCbETXSYIHgrl7M-0Kq']],
    ['1ZZSem2sVPhapIYsnAEsiZm-6bnyEGrL8',['1ZZSem2sVPhapIYsnAEsiZm-6bnyEGrL8','1qHzrvnNV8lHiO8KuDKmHyRltp_65NuMs','1ACxofBfVRadl_tzJtd6oYE9uilOWe2sm','1JvMUJYn-7ywNtvsucCOsuvem96GtnEaI','1pTub5AQFeiHqCtbBpMkaqOCDpeZzLowc']]
  ]);

  const style = document.createElement('style');
  style.textContent = `
    body.hf-view-open{overflow:hidden!important}
    .hf-view{position:fixed;inset:0;z-index:99999;display:none;align-items:center;justify-content:center;background:rgba(5,5,7,.95);backdrop-filter:blur(12px);padding:20px}
    .hf-view.open{display:flex;animation:hfIn .18s ease-out}
    .hf-stage{position:relative;width:min(96vw,1200px);height:min(94vh,980px);display:flex;align-items:center;justify-content:center}
    .hf-img{display:block;width:auto;height:auto;max-width:min(88vw,920px);max-height:86vh;object-fit:contain;box-shadow:0 24px 90px rgba(0,0,0,.55);border-radius:4px;user-select:none;-webkit-user-drag:none;transition:opacity .15s ease}
    .hf-top{position:absolute;top:8px;left:50%;transform:translateX(-50%);z-index:4;display:flex;align-items:center;gap:10px;max-width:calc(100% - 150px);padding:9px 14px;border:1px solid rgba(255,255,255,.12);border-radius:999px;background:rgba(15,15,18,.65);color:#fff;font:500 13px/1.2 Arial,sans-serif;backdrop-filter:blur(12px)}
    .hf-title{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.hf-count{flex:none;opacity:.62;font-variant-numeric:tabular-nums}
    .hf-close,.hf-nav{appearance:none;border:1px solid rgba(255,255,255,.14);background:rgba(15,15,18,.68);color:#fff;cursor:pointer;display:grid;place-items:center;backdrop-filter:blur(10px);transition:.16s ease}
    .hf-close:hover,.hf-nav:hover{background:rgba(45,45,50,.95);transform:scale(1.05)}
    .hf-close{position:absolute;top:8px;right:8px;width:44px;height:44px;border-radius:50%;font-size:27px;z-index:5}
    .hf-nav{position:absolute;top:50%;width:48px;height:48px;margin-top:-24px;border-radius:50%;font-size:30px;z-index:4}.hf-prev{left:6px}.hf-next{right:6px}.hf-nav[hidden]{display:none}
    .hf-dots{position:absolute;left:50%;bottom:8px;transform:translateX(-50%);z-index:4;display:flex;gap:6px;padding:8px 10px;border-radius:999px;background:rgba(15,15,18,.58);max-width:72vw;overflow:hidden}.hf-dot{width:6px;height:6px;flex:0 0 6px;border-radius:50%;background:rgba(255,255,255,.32)}.hf-dot.on{background:#fff;transform:scale(1.35)}
    @keyframes hfIn{from{opacity:0}to{opacity:1}}
    @media(max-width:700px){.hf-view{padding:6px}.hf-stage{width:100vw;height:100vh}.hf-img{max-width:94vw;max-height:84vh}.hf-nav{width:42px;height:42px;margin-top:-21px}.hf-prev{left:2px}.hf-next{right:2px}.hf-top{top:14px;max-width:calc(100% - 120px)}.hf-close{top:12px;right:12px;width:40px;height:40px}}
  `;
  document.head.appendChild(style);

  const modal = document.createElement('div');
  modal.className = 'hf-view';
  modal.setAttribute('role','dialog');
  modal.setAttribute('aria-modal','true');
  modal.innerHTML = `<div class="hf-stage"><div class="hf-top"><span class="hf-title"></span><span class="hf-count"></span></div><button class="hf-close" aria-label="Close" type="button">×</button><button class="hf-nav hf-prev" aria-label="Previous" type="button">‹</button><img class="hf-img" alt="" draggable="false"><button class="hf-nav hf-next" aria-label="Next" type="button">›</button><div class="hf-dots" aria-hidden="true"></div></div>`;
  document.body.appendChild(modal);

  const img = modal.querySelector('.hf-img');
  const title = modal.querySelector('.hf-title');
  const count = modal.querySelector('.hf-count');
  const dots = modal.querySelector('.hf-dots');
  const prev = modal.querySelector('.hf-prev');
  const next = modal.querySelector('.hf-next');
  const close = modal.querySelector('.hf-close');
  let list = [], index = 0, lastFocus = null, touchX = null;

  const driveId = href => (href || '').match(/\/d\/([^/]+)/)?.[1] || null;
  const label = a => (a.getAttribute('aria-label') || a.querySelector('img')?.alt || 'Artwork').replace(/\s*[—-]\s*open image in Google Drive\s*$/i,'').replace(/\s*[—-]\s*open.*$/i,'').trim() || 'Artwork';

  function render(){
    if(!list.length) return;
    index = (index + list.length) % list.length;
    img.style.opacity = '.25';
    img.src = list[index];
    img.alt = `${title.textContent} — ${index + 1}`;
    img.onload = () => img.style.opacity = '1';
    const many = list.length > 1;
    count.textContent = many ? `${index + 1} / ${list.length}` : '';
    prev.hidden = !many; next.hidden = !many; dots.hidden = !many;
    dots.innerHTML = many ? list.map((_,i)=>`<span class="hf-dot${i===index?' on':''}"></span>`).join('') : '';
  }

  function open(a){
    const cover = a.querySelector('img')?.currentSrc || a.querySelector('img')?.src;
    if(!cover) return;
    const id = driveId(a.getAttribute('href'));
    const ids = id ? sets.get(id) : null;
    list = ids && ids.length > 1 ? [cover, ...ids.slice(1).map(thumb)] : [cover];
    index = 0;
    title.textContent = label(a);
    lastFocus = document.activeElement;
    modal.classList.add('open');
    document.body.classList.add('hf-view-open');
    render();
    close.focus({preventScroll:true});
  }

  function shut(){
    modal.classList.remove('open');
    document.body.classList.remove('hf-view-open');
    img.removeAttribute('src');
    lastFocus?.focus?.({preventScroll:true});
  }

  const go = d => { if(list.length > 1){ index += d; render(); } };
  prev.addEventListener('click',e=>{e.stopPropagation();go(-1)});
  next.addEventListener('click',e=>{e.stopPropagation();go(1)});
  close.addEventListener('click',e=>{e.stopPropagation();shut()});
  modal.addEventListener('click',e=>{if(e.target===modal)shut()});
  modal.addEventListener('pointerdown',e=>{if(e.pointerType!=='mouse')touchX=e.clientX});
  modal.addEventListener('pointerup',e=>{if(touchX==null)return;const dx=e.clientX-touchX;touchX=null;if(Math.abs(dx)>45)go(dx>0?-1:1)});
  document.addEventListener('keydown',e=>{if(!modal.classList.contains('open'))return;if(e.key==='Escape')shut();else if(e.key==='ArrowLeft')go(-1);else if(e.key==='ArrowRight')go(1)});

  function artworkFromEvent(e){ return e.target?.closest?.('a.moving-frame[href]') || null; }
  document.addEventListener('pointerdown',e=>{
    const a=artworkFromEvent(e); if(!a)return;
    if(e.pointerType==='mouse'&&e.button!==0)return;
    e.preventDefault(); e.stopImmediatePropagation();
  },true);
  document.addEventListener('pointerup',e=>{
    const a=artworkFromEvent(e); if(!a)return;
    if(e.pointerType==='mouse'&&e.button!==0)return;
    e.preventDefault(); e.stopImmediatePropagation(); open(a);
  },true);
  document.addEventListener('click',e=>{
    const a=artworkFromEvent(e); if(!a)return;
    e.preventDefault(); e.stopImmediatePropagation();
    if(e.detail===0)open(a);
  },true);

  document.querySelectorAll('a.moving-frame[href]').forEach(a=>{
    a.removeAttribute('target');
    a.removeAttribute('rel');
    a.style.cursor='zoom-in';
    a.setAttribute('aria-haspopup','dialog');
  });
})();