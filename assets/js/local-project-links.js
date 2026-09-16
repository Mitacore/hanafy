(() => {
  'use strict';

  const builtIn = {
    '1lf2cU8Ik7oJbmdrZ4o1oROo1jPh0r3Xi': 'assets/projects/drive/1lf2cU8Ik7oJbmdrZ4o1oROo1jPh0r3Xi.pdf',
    '10p3hql9ykMntPBlD6ZV-EIRg0oIK731o': 'assets/projects/zayed-race-hungary-2026.pdf',
    '1yZUWEpHQEO6JiA0yR_Yff02KHQnLu6yr': 'assets/projects/zayed-race-china-2026.pdf',
    '1d_uwcRS_Orty_LPEfDT38u4jh2HsMFFq': 'assets/projects/thumma-inqadat.png',
    '118-GXi9kPXF8JwGF_cs1xtq4GZz_wihA': 'assets/projects/hunalika-hubb.png'
  };

  const aliases = {
    '17FJs_ft4JCNUQbdLWBq267QjnoHj9iiV': '1lf2cU8Ik7oJbmdrZ4o1oROo1jPh0r3Xi',
    '1PYZEKhfVo2BZgqLpi-vyEGGGoRQxaLLt': '10p3hql9ykMntPBlD6ZV-EIRg0oIK731o',
    '12El-dIL-rmMTNX7LrcMU_tMnqrKJ5Axd': '1yZUWEpHQEO6JiA0yR_Yff02KHQnLu6yr'
  };

  const idFromDrive = value => {
    const match = String(value || '').match(/drive\.google\.com\/file\/d\/([A-Za-z0-9_-]+)/);
    return match ? match[1] : null;
  };

  const apply = mapping => {
    const all = Object.assign({}, mapping || {}, builtIn);
    document.querySelectorAll('a[href*="drive.google.com/file/d/"], [data-href*="drive.google.com/file/d/"]').forEach(el => {
      const attr = el.hasAttribute('href') ? 'href' : 'data-href';
      const driveId = idFromDrive(el.getAttribute(attr));
      if (!driveId) return;
      const resolved = aliases[driveId] || driveId;
      const local = all[resolved];
      if (!local) return;
      el.setAttribute(attr, local);
      const label = el.getAttribute('aria-label');
      if (label) el.setAttribute('aria-label', label.replace(/open image in Google Drive/i, 'open project'));
    });
  };

  apply(builtIn);
  fetch('assets/projects/drive-map.json', {cache: 'no-store'})
    .then(r => r.ok ? r.json() : null)
    .then(apply)
    .catch(() => {});
})();
