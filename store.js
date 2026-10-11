/* store.js — بيانات الموقع المشتركة بين صفحة التصميم وصفحة الأدمن */
const SR = {
  KEY: 'sr_data_v1',
  defaults() {
    const c = (name, hex) => ({ id: SR.uid(), name, hex, price: 0 });
    return {
      settings: { whatsapp: '9647511429970', currency: '$', adminPass: 'admin123' },
      models: [1, 2, 3, 4, 5].map(n => ({ id: SR.uid(), name: 'موديل ' + n, img: 'Dress/' + n + '.png', price: 0 })),
      colors: [c('وردي', '#f3b5c7'), c('عنابي', '#8e1f4a'), c('زيتي', '#1f6b4a'), c('عاجي', '#f5ecd9'), c('أسود', '#161616'), c('كحلي', '#1b2a5a'), c('ذهبي', '#d9a62e'), c('رمادي', '#b9b9b9'), c('بنفسجي', '#6b2f96')],
      fabrics: ['ساتان', 'مخمل', 'حرير', 'دانتيل'].map(n => ({ id: SR.uid(), name: n, img: '', price: 0 })),
      kaftans: [1, 2, 3].map(n => ({ id: SR.uid(), name: 'خفتان ' + n, img: '', price: 0 }))
    };
  },
  uid() { return Math.random().toString(36).slice(2, 9) + Date.now().toString(36).slice(-4); },
  load() {
    try { const d = JSON.parse(localStorage.getItem(SR.KEY)); if (d && d.models) return d; } catch (e) {}
    const d = SR.defaults(); SR.save(d); return d;
  },
  save(d) {
    try { localStorage.setItem(SR.KEY, JSON.stringify(d)); return true; }
    catch (e) { alert('المساحة ممتلئة: صغّري عدد الصور أو حجمها'); return false; }
  },
  money(v) { return SR.load().settings.currency + Number(v || 0).toFixed(2); },
  /* رفع صورة وتصغيرها تلقائيًا */
  fileToDataURL(file, max = 720) {
    return new Promise((res, rej) => {
      const r = new FileReader();
      r.onerror = rej;
      r.onload = () => {
        const im = new Image();
        im.onload = () => {
          const k = Math.min(1, max / Math.max(im.width, im.height));
          const cv = document.createElement('canvas');
          cv.width = im.width * k; cv.height = im.height * k;
          cv.getContext('2d').drawImage(im, 0, 0, cv.width, cv.height);
          res(cv.toDataURL('image/webp', 0.82));
        };
        im.onerror = rej; im.src = r.result;
      };
      r.readAsDataURL(file);
    });
  }
};
