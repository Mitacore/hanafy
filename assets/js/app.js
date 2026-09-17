(() => {
  'use strict';

  const load = src => new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });

  load('assets/js/app-core.js?v=20260917b')
    .then(() => load('assets/js/concept-cinema.js?v=20260917a'))
    .then(() => load('assets/js/viewer-performance.js?v=20260917a'))
    .then(() => load('assets/js/viewer.js?v=20260917a'))
    .then(() => load('assets/js/viewer-floating.js?v=20260917a'))
    .then(() => load('assets/js/end-section.js?v=20260917m'))
    .then(() => load('assets/js/layout-fix.js?v=20260917e'))
    .then(() => load('assets/js/content-scale-fix.js?v=20260917b'))
    .then(() => load('assets/js/graphic-design-redesign.js?v=20260917a'))
    .catch(err => console.error('Portfolio runtime failed to load', err));
})();