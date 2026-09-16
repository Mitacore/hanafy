(() => {
  'use strict';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Portfolio link routing: single artworks keep their exact Google Drive image,
  // while carousel covers open the combined PDF preview.
  const portfolioLinkOverrides = new Map([
    ['https://drive.google.com/file/d/17FJs_ft4JCNUQbdLWBq267QjnoHj9iiV/view?usp=drivesdk', 'https://drive.google.com/file/d/1lf2cU8Ik7oJbmdrZ4o1oROo1jPh0r3Xi/view?usp=drivesdk'],
    ['https://drive.google.com/file/d/1PYZEKhfVo2BZgqLpi-vyEGGGoRQxaLLt/view?usp=drivesdk', 'https://drive.google.com/file/d/10p3hql9ykMntPBlD6ZV-EIRg0oIK731o/view?usp=drivesdk'],
    ['https://drive.google.com/file/d/12El-dIL-rmMTNX7LrcMU_tMnqrKJ5Axd/view?usp=drivesdk', 'https://drive.google.com/file/d/1yZUWEpHQEO6JiA0yR_Yff02KHQnLu6yr/view?usp=drivesdk']
  ]);
  document.querySelectorAll('a.moving-frame[href]').forEach(a => {
    const replacement = portfolioLinkOverrides.get(a.getAttribute('href'));
    if (replacement) a.setAttribute('href', replacement);
  });

  function setPauseIcon(button, paused, withText = false) {
    if (!button) return;
    button.setAttribute('aria-pressed', paused ? 'true' : 'false');
    const svg = button.querySelector('svg');
    if (svg) {
      svg.innerHTML = paused
        ? '<polygon points="5 3 19 12 5 21 5 3"></polygon>'
        : '<rect height="18" rx="1" width="5" x="14" y="3"></rect><rect height="18" rx="1" width="5" x="5" y="3"></rect>';
      svg.setAttribute('class', paused ? 'lucide lucide-play' : 'lucide lucide-pause');
    }
    if (withText) {
      const span = button.querySelector('span');
      if (span) span.textContent = paused ? 'Play' : 'Pause';
    }
    const old = button.getAttribute('aria-label') || '';
    if (old) button.setAttribute('aria-label', old.replace(/^(Pause|Play)/, paused ? 'Play' : 'Pause'));
  }

  // Keep all internal navigation independent from the original ChatGPT Site domain.
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href');
      if (!id || id === '#') return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({behavior: reducedMotion ? 'auto' : 'smooth', block: 'start'});
      history.replaceState(null, '', id);
    });
  });

  // Social-media vertical artwork streams.
  const hqControllers = [];
  document.querySelectorAll('.motion-panel').forEach(panel => {
    panel.dataset.paused = panel.dataset.paused || 'false';
    const btn = panel.querySelector('.motion-toggle');
    if (btn) btn.addEventListener('click', () => {
      const paused = panel.dataset.paused !== 'true';
      panel.dataset.paused = paused ? 'true' : 'false';
      setPauseIcon(btn, paused, true);
    });

    panel.querySelectorAll('.hq-column').forEach(col => {
      let hover = false, dragging = false, lastY = 0, startScroll = 0;
      let lastTime = performance.now();
      let cycleHeight = 0;
      const reverse = col.classList.contains('hq-down');
      const duration = panel.classList.contains('motion-mohtawa') ? 37 : 46;

      const measure = () => {
        const first = col.querySelector('.hq-cycle');
        cycleHeight = first ? first.getBoundingClientRect().height : col.scrollHeight / 2;
        if (reverse && col.scrollTop < 2 && cycleHeight > 0) col.scrollTop = cycleHeight;
      };
      const frame = now => {
        const dt = Math.min((now-lastTime)/1000, .05); lastTime = now;
        if (!reducedMotion && panel.dataset.paused !== 'true' && !hover && !dragging && cycleHeight > 0) {
          const speed = cycleHeight / duration;
          col.scrollTop += (reverse ? -1 : 1) * speed * dt;
          if (!reverse && col.scrollTop >= cycleHeight) col.scrollTop -= cycleHeight;
          if (reverse && col.scrollTop <= 0) col.scrollTop += cycleHeight;
        }
        requestAnimationFrame(frame);
      };
      col.addEventListener('mouseenter', () => hover = true);
      col.addEventListener('mouseleave', () => hover = false);
      col.addEventListener('focusin', () => hover = true);
      col.addEventListener('focusout', () => hover = false);
      col.addEventListener('pointerdown', e => {
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        dragging = true; lastY = e.clientY; startScroll = col.scrollTop;
        col.classList.add('is-dragging');
        try { col.setPointerCapture(e.pointerId); } catch (_) {}
      });
      col.addEventListener('pointermove', e => {
        if (!dragging) return;
        col.scrollTop = startScroll - (e.clientY - lastY);
      });
      const endDrag = e => {
        dragging = false; col.classList.remove('is-dragging');
        try { col.releasePointerCapture(e.pointerId); } catch (_) {}
      };
      col.addEventListener('pointerup', endDrag);
      col.addEventListener('pointercancel', endDrag);
      window.addEventListener('resize', measure, {passive:true});
      hqControllers.push(measure);
      requestAnimationFrame(frame);
    });
  });
  window.addEventListener('load', () => hqControllers.forEach(fn => fn()), {once:true});

  // CSS ribbon sections: Character Design and Sketchbook.
  document.querySelectorAll('.art-ribbon').forEach(ribbon => {
    const btn = ribbon.querySelector('.ribbon-toolbar button');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const paused = ribbon.dataset.paused !== 'true';
      ribbon.dataset.paused = paused ? 'true' : 'false';
      setPauseIcon(btn, paused, false);
    });
  });

  // Concept art album.
  document.querySelectorAll('.concept-composition').forEach(concept => {
    const pages = [...concept.querySelectorAll('.concept-page')];
    const backs = [...concept.querySelectorAll('.concept-backdrop img')];
    const controls = concept.querySelector('.concept-controls');
    if (!pages.length || !controls) return;
    const prevBtn = controls.querySelector('[aria-label^="Previous"]');
    const pauseBtn = controls.querySelector('[aria-label^="Pause"], [aria-label^="Play"]');
    const nextBtn = controls.querySelector('[aria-label^="Next"]');
    const counter = concept.querySelector('.concept-side p[aria-live]');
    let index = Math.max(0, pages.findIndex(p => p.classList.contains('is-current')));
    let paused = false;
    let timer = null;

    const render = () => {
      const n = pages.length;
      pages.forEach((p,i) => {
        p.classList.remove('is-previous','is-current','is-next');
        p.setAttribute('aria-hidden', i === index ? 'false' : 'true');
        p.tabIndex = i === index ? 0 : -1;
        if (i === index) p.classList.add('is-current');
        else if (i === (index - 1 + n) % n) p.classList.add('is-previous');
        else if (i === (index + 1) % n) p.classList.add('is-next');
      });
      backs.forEach((b,i) => b.classList.toggle('is-current', i === index));
      if (counter) counter.textContent = `${String(index+1).padStart(2,'0')} / ${String(n).padStart(2,'0')}`;
    };
    const go = delta => { index = (index + delta + pages.length) % pages.length; render(); restart(); };
    const restart = () => {
      if (timer) clearInterval(timer);
      if (!paused && !reducedMotion) timer = setInterval(() => { index = (index+1)%pages.length; render(); }, 6000);
    };
    prevBtn?.addEventListener('click', () => go(-1));
    nextBtn?.addEventListener('click', () => go(1));
    pauseBtn?.addEventListener('click', () => {
      paused = !paused; setPauseIcon(pauseBtn, paused, false); restart();
    });
    const area = concept.querySelector('.concept-pages');
    if (area) {
      let x0 = null;
      area.addEventListener('pointerdown', e => { x0 = e.clientX; try { area.setPointerCapture(e.pointerId); } catch(_) {} });
      area.addEventListener('pointerup', e => { if (x0 == null) return; const dx=e.clientX-x0; x0=null; if (Math.abs(dx)>45) go(dx>0?-1:1); });
    }
    render(); restart();
  });

  // Storyboard carousels.
  document.querySelectorAll('.story-player').forEach(player => {
    const track = player.querySelector('.story-slide-track');
    const slides = [...player.querySelectorAll('.story-slide')];
    const toolbar = player.querySelector('.story-toolbar');
    if (!track || !slides.length || !toolbar) return;
    const current = toolbar.querySelector('.story-current');
    const controls = player.querySelector('.story-controls');
    const prevBtn = controls?.querySelector('[aria-label^="Previous"]');
    const pauseBtn = controls?.querySelector('[aria-label^="Pause"], [aria-label^="Play"]');
    const nextBtn = controls?.querySelector('[aria-label^="Next"]');
    const originalBtn = controls?.querySelector('.story-original');
    let index = 0;
    const countText = current?.textContent || '';
    const m = countText.match(/(\d+)\s*\/\s*(\d+)/);
    if (m) index = Math.max(0, Math.min(slides.length-1, Number(m[1])-1));
    let paused = false, timer = null;

    const render = () => {
      track.style.transform = `translate3d(-${index*100}%,0,0)`;
      slides.forEach((s,i) => {
        s.setAttribute('aria-hidden', i===index ? 'false':'true');
        const a=s.querySelector('a'); if(a) a.tabIndex=i===index?0:-1;
      });
      if (current) {
        const label = slides[index].getAttribute('aria-label') || `Scene ${index+1}`;
        const name = label.replace(/,\s*scene\s+\d+\s+of\s+\d+.*/i,'');
        current.innerHTML = `${name} <span>${index+1} / ${slides.length}</span>`;
      }
    };
    const restart = () => {
      if (timer) clearInterval(timer);
      if (!paused && !reducedMotion) timer = setInterval(() => { index=(index+1)%slides.length; render(); }, 6500);
    };
    const go = d => { index=(index+d+slides.length)%slides.length; render(); restart(); };
    prevBtn?.addEventListener('click', ()=>go(-1));
    nextBtn?.addEventListener('click', ()=>go(1));
    pauseBtn?.addEventListener('click', ()=>{ paused=!paused; setPauseIcon(pauseBtn, paused, false); restart(); });
    originalBtn?.addEventListener('click', ()=>{
      const cover = player.querySelector('.story-image-heading img');
      if (cover?.src) window.open(cover.src, '_blank', 'noopener,noreferrer');
    });
    let x0=null;
    const viewport=player.querySelector('[data-slot="carousel-content"]');
    viewport?.addEventListener('pointerdown', e=>{x0=e.clientX; try{viewport.setPointerCapture(e.pointerId)}catch(_){}});
    viewport?.addEventListener('pointerup', e=>{if(x0==null)return; const dx=e.clientX-x0; x0=null; if(Math.abs(dx)>45) go(dx>0?-1:1);});
    render(); restart();
  });
})();