(() => {
  'use strict';

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  document.querySelectorAll('.concept-cinema').forEach(cinema => {
    const slides = [...cinema.querySelectorAll('.concept-cinema-slide')];
    const prev = cinema.querySelector('.concept-cinema-nav.prev');
    const next = cinema.querySelector('.concept-cinema-nav.next');
    const counter = cinema.querySelector('.concept-cinema-count');
    if (!slides.length) return;

    let index = 0;
    let timer = null;

    const render = () => {
      slides.forEach((slide, i) => slide.classList.toggle('is-current', i === index));
      if (counter) counter.textContent = `${String(index + 1).padStart(2,'0')} / ${String(slides.length).padStart(2,'0')}`;
      cinema.dataset.current = String(index);
    };

    const restart = () => {
      if (timer) clearInterval(timer);
      if (!reduced) {
        timer = setInterval(() => {
          index = (index + 1) % slides.length;
          render();
        }, 6500);
      }
    };

    const go = delta => {
      index = (index + delta + slides.length) % slides.length;
      render();
      restart();
    };

    prev?.addEventListener('click', () => go(-1));
    next?.addEventListener('click', () => go(1));

    let startX = null;
    cinema.addEventListener('pointerdown', e => { startX = e.clientX; });
    cinema.addEventListener('pointerup', e => {
      if (startX == null) return;
      const dx = e.clientX - startX;
      startX = null;
      if (Math.abs(dx) > 45) go(dx > 0 ? -1 : 1);
    });

    render();
    restart();
  });
})();
