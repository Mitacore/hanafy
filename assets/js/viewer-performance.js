(() => {
  'use strict';

  // The carousel viewer only needs screen-resolution previews. Requesting 2400px
  // thumbnails for every slide makes navigation heavier than necessary.
  const targetWidth = window.matchMedia('(max-width: 768px)').matches ? 1080 : 1440;
  const optimizeUrl = value => {
    const url = String(value || '');
    if (!url.includes('drive.google.com/thumbnail')) return value;
    return url.replace(/([?&]sz=)w\d+/i, `$1w${targetWidth}`);
  };

  // Rewrite viewer image requests before the browser starts downloading them.
  const srcDescriptor = Object.getOwnPropertyDescriptor(HTMLImageElement.prototype, 'src');
  if (srcDescriptor?.set && srcDescriptor?.get) {
    Object.defineProperty(HTMLImageElement.prototype, 'src', {
      configurable: srcDescriptor.configurable,
      enumerable: srcDescriptor.enumerable,
      get: srcDescriptor.get,
      set(value) { srcDescriptor.set.call(this, optimizeUrl(value)); }
    });
  }

  const nativeSetAttribute = Element.prototype.setAttribute;
  Element.prototype.setAttribute = function(name, value) {
    if (this instanceof HTMLImageElement && String(name).toLowerCase() === 'src') {
      value = optimizeUrl(value);
    }
    return nativeSetAttribute.call(this, name, value);
  };

  // Slightly reduce the visual footprint too, leaving more breathing room around
  // portrait artwork and making the left/right interaction feel lighter.
  const style = document.createElement('style');
  style.textContent = `
    .pf-dialog{width:min(860px,90vw)!important;height:min(88vh,900px)!important}
    .pf-stage{height:calc(100% - 84px)!important}
    .pf-image{max-width:94%!important;max-height:94%!important}
    @media (max-width:768px){
      .pf-dialog{width:94vw!important;height:86vh!important}
      .pf-image{max-width:96%!important;max-height:92%!important}
    }
  `;
  document.head.appendChild(style);
})();