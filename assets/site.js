/* ===== Kiniwa Shop — shared scripts ===== */
(function () {
  var hd = document.getElementById('hd');
  if (hd) addEventListener('scroll', function () { hd.classList.toggle('on', scrollY > 12); }, { passive: true });

  var burger = document.getElementById('burger'), mnav = document.getElementById('mnav');
  if (burger && mnav) {
    burger.addEventListener('click', function () { mnav.classList.toggle('open'); });
    mnav.addEventListener('click', function (e) { if (e.target.tagName === 'A') mnav.classList.remove('open'); });
  }

  // dropdown menus
  document.querySelectorAll('.has-menu').forEach(function (m) {
    var btn = m.querySelector('.navbtn');
    if (!btn) return;
    btn.addEventListener('click', function (e) { e.stopPropagation(); m.classList.toggle('open'); });
  });
  document.addEventListener('click', function () {
    document.querySelectorAll('.has-menu.open').forEach(function (m) { m.classList.remove('open'); });
  });

  // reveal on scroll
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: .1, rootMargin: '0px 0px -40px' });
    document.querySelectorAll('.rv').forEach(function (el) { io.observe(el); });

    var band = document.querySelector('.statsband');
    if (band) {
      var done = false;
      var cio = new IntersectionObserver(function (es) {
        if (!es[0].isIntersecting || done) return; done = true;
        var fa = '۰۱۲۳۴۵۶۷۸۹';
        document.querySelectorAll('[data-count]').forEach(function (el) {
          var to = +el.dataset.count, t0 = performance.now(), dur = 1300;
          (function tick(t) {
            var p = Math.min(1, (t - t0) / dur), v = Math.round(to * (1 - Math.pow(1 - p, 3)));
            el.textContent = String(v).replace(/\d/g, function (d) { return fa[+d]; });
            if (p < 1) requestAnimationFrame(tick);
          })(t0);
        });
      }, { threshold: .4 });
      cio.observe(band);
    }
  } else {
    document.querySelectorAll('.rv').forEach(function (el) { el.classList.add('in'); });
  }

  // product filter
  var filters = document.getElementById('filters'), grid = document.getElementById('pgrid');
  if (filters && grid) {
    var cards = [].slice.call(grid.children);
    filters.addEventListener('click', function (e) {
      var b = e.target.closest('button'); if (!b) return;
      [].forEach.call(this.children, function (x) { x.classList.toggle('act', x === b); });
      var f = b.dataset.f;
      cards.forEach(function (c) {
        var show = (f === 'all' || c.dataset.cat === f);
        c.style.display = show ? '' : 'none';
        if (show) { c.classList.remove('in'); void c.offsetWidth; c.classList.add('in'); }
      });
    });
    // deep link: products.html?cat=donut
    var q = new URLSearchParams(location.search).get('cat');
    if (q) {
      var t = filters.querySelector('button[data-f="' + q + '"]');
      if (t) t.click();
    }
  }

  // calculators
  function fa(n) { return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '٬').replace(/\d/g, function (d) { return '۰۱۲۳۴۵۶۷۸۹'[+d]; }); }
  document.querySelectorAll('input[data-rate]').forEach(function (r) {
    var rate = +r.dataset.rate, out = document.getElementById(r.dataset.out), lbl = document.getElementById(r.dataset.lbl);
    function upd() {
      var m = +r.value, pct = (m - r.min) / (r.max - r.min) * 100;
      r.style.setProperty('--p', pct + '%');
      if (lbl) lbl.textContent = fa(m);
      if (out) out.textContent = fa(m * rate);
    }
    r.addEventListener('input', upd); upd();
  });
})();
