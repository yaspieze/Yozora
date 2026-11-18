/**
 * motion.ts — حرکت‌های اسکرول‌محور صفحهٔ اصلی.
 * همه‌چیز با یک rAF مشترک به‌روز می‌شود تا روی گوشی هم روان بماند.
 */

let ticking = false;
const queue = new Set<() => void>();

const onScroll = (): void => {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(() => {
    ticking = false;
    queue.forEach((fn) => fn());
  });
};

/* ── پارالاکس: هر المان با data-par سرعت متفاوت دارد ─────────────────── */
export function initParallax(): void {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-par]'));
  if (!els.length) return;

  const paint = (): void => {
    const vh = window.innerHeight;
    els.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.bottom < -200 || r.top > vh + 200) return;
      const speed = Number(el.dataset.par ?? 0.1);
      const center = r.top + r.height / 2 - vh / 2;
      el.style.transform = `translate3d(0,${(-center * speed).toFixed(2)}px,0)`;
    });
  };

  queue.add(paint);
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', paint);
  paint();
}

/* ── صحنه‌های پین‌شده: هر بخش با [data-pin] افقی سُر می‌خورد ─────────── */
function paintPin(sec: HTMLElement): void {
  const track = sec.querySelector<HTMLElement>('[data-pin-track]');
  if (!track) return;
  const dots = Array.from(sec.querySelectorAll<HTMLElement>('.story-dots i, .pin-dots i'));
  if (window.innerWidth <= 780) {
    sec.style.removeProperty('height');
    track.style.transform = '';
    return;
  }
  const vh = window.innerHeight;
  const total = sec.offsetHeight - vh;
  const passed = Math.min(total, Math.max(0, -sec.getBoundingClientRect().top));
  const p = total > 0 ? passed / total : 0;
  const over = Math.max(0, track.scrollWidth - track.clientWidth);
  track.style.transform = `translate3d(${(p * over).toFixed(2)}px,0,0)`;
  const active = Math.min(dots.length - 1, Math.round(p * (dots.length - 1 || 1)));
  dots.forEach((d, i) => d.classList.toggle('on', i === active));
  track.querySelectorAll<HTMLElement>('.story-card, .theater-card').forEach((c, i) => {
    c.classList.toggle('is-on', i === active);
  });
  const bar = sec.querySelector<HTMLElement>('.pin-bar i');
  if (bar) bar.style.transform = `scaleX(${Math.max(0.02, p).toFixed(3)})`;
}

export function initPinned(): void {
  const scenes = Array.from(document.querySelectorAll<HTMLElement>('[data-pin]'));
  if (!scenes.length) return;
  const paintAll = (): void => scenes.forEach(paintPin);
  queue.add(paintAll);
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', paintAll);
  paintAll();
}

/* ── مارکی: محتوا را دو برابر می‌کنیم تا حلقهٔ بی‌درز شود ─────────────── */
export function initMarquee(): void {
  document.querySelectorAll<HTMLElement>('[data-marquee]').forEach((band) => {
    const inner = band.querySelector<HTMLElement>('.marq-in');
    if (!inner || inner.dataset.cloned) return;
    const track = document.createElement('div');
    track.className = 'marq-track';
    band.insertBefore(track, inner);
    const copy = inner.cloneNode(true) as HTMLElement;
    copy.dataset.cloned = '1';
    inner.dataset.cloned = '1';
    track.append(inner);
    copy.setAttribute('aria-hidden', 'true');
    track.append(copy);
    band.classList.add('mq-ready');
  });
}

/* ── تیلت سه‌بعدی ملایم روی کارت‌ها ───────────────────────────────────── */
export function initTilt(): void {
  if (window.matchMedia('(hover:none)').matches) return;
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-tilt]'));
  els.forEach((el) => {
    const move = (e: PointerEvent): void => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty('--tx', `${(-y * 7).toFixed(2)}deg`);
      el.style.setProperty('--ty', `${(x * 9).toFixed(2)}deg`);
    };
    const out = (): void => {
      el.style.setProperty('--tx', '0deg');
      el.style.setProperty('--ty', '0deg');
    };
    el.addEventListener('pointermove', move, { passive: true });
    el.addEventListener('pointerleave', out, { passive: true });
  });
}

/* ── تیترها: کلمه‌به‌کلمه بالا می‌آیند ─────────────────────────────────── */
export function initSplit(): void {
  const targets = Array.from(document.querySelectorAll<HTMLElement>('.split'));
  targets.forEach((el) => {
    if (el.dataset.split) return;
    el.dataset.split = '1';
    const words = (el.textContent ?? '').trim().split(/\s+/);
    el.innerHTML = words
      .map((w, i) => `<span class="w" style="--i:${i}">${w}</span>`)
      .join(' ');
  });
}

/** شمارندهٔ اعداد فارسی که با دیده‌شدن اجرا می‌شود */
export function initCountUp(): void {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-count]'));
  if (!els.length) return;
  const fa = (n: number): string => n.toLocaleString('fa-IR');
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        const el = en.target as HTMLElement;
        io.unobserve(el);
        const target = Number(el.dataset.count ?? 0);
        const t0 = performance.now();
        const dur = 1100;
        const step = (t: number): void => {
          const p = Math.min(1, (t - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 3);
          el.textContent = fa(Math.round(target * eased));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    },
    { threshold: 0.4 },
  );
  els.forEach((el) => {
    el.textContent = fa(0);
    io.observe(el);
  });
}

export function initMotion(): void {
  initSplit();
  initParallax();
  initPinned();
  initMarquee();
  initTilt();
}
