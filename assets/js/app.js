(() => {
  const theme = document.createElement('link');
  theme.rel = 'stylesheet';
  theme.href = 'assets/css/unified-theme.css?v=20260916c';
  document.head.appendChild(theme);

  const load = src => new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = src;
    s.onload = resolve;
    s.onerror = reject;
    document.head.appendChild(s);
  });

  load('assets/js/app-core.js?v=20260916b').then(() => {
    const restore = new Map([
      ['cover.webp','https://drive.google.com/file/d/17FJs_ft4JCNUQbdLWBq267QjnoHj9iiV/view?usp=drivesdk'],
      ['cover-v2(1).webp','https://drive.google.com/file/d/1PYZEKhfVo2BZgqLpi-vyEGGGoRQxaLLt/view?usp=drivesdk'],
      ['cover-v2(2).webp','https://drive.google.com/file/d/12El-dIL-rmMTNX7LrcMU_tMnqrKJ5Axd/view?usp=drivesdk']
    ]);
    document.querySelectorAll('a.moving-frame[href] img').forEach(img => {
      const file = decodeURIComponent((img.getAttribute('src') || '').split('/').pop() || '');
      const href = restore.get(file);
      if (href) img.closest('a.moving-frame').setAttribute('href', href);
    });
    return load('assets/js/viewer-performance.js?v=20260916a');
  }).then(() => load('assets/js/viewer.js?v=20260916d'))
    .then(() => load('assets/js/viewer-floating.js?v=20260916a'))
    .then(() => load('assets/js/mohtawa-viewer.js?v=20260916a'))
    .then(() => load('assets/js/character-showcase.js?v=20260916d'))
    .catch(err => console.error('Portfolio runtime failed to load', err));
})();