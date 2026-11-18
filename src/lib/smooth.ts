/**
 * smooth.ts — موتور اسکرول نرم کینیوا.
 *
 * چرخ ماوس و کشیدن روی موبایل به یک «هدف» تبدیل می‌شوند و موقعیت واقعی صفحه
 * با میان‌یابی نمایی به سمت هدف می‌رود؛ نتیجه‌اش اسکرولی است که نه می‌لرزد، نه
 * گیر می‌کند و روی لمسی هم مومنتوم طبیعی دارد.
 */

type Engine = {
  to: (y: number, immediate?: boolean) => void;
  by: (dy: number) => void;
  current: () => number;
};

let engine: Engine | null = null;

export const smoothScrollTo = (y: number, immediate = false): void => {
  if (engine) engine.to(y, immediate);
  else window.scrollTo({ top: y, behavior: immediate ? 'auto' : 'smooth' });
};

/** المان‌هایی که داخلشان اسکرول بومی باید دست‌نخورده بماند */
const NATIVE_ZONE =
  'input,textarea,select,option,[contenteditable="true"],[data-native-scroll],.drawer,.mega,.search-pop,.modal,.table-wrap,.cat-rail,.h-rail,.no-smooth';

const inNativeZone = (t: EventTarget | null): boolean =>
  t instanceof Element ? !!t.closest(NATIVE_ZONE) : false;

export function initSmoothScrollEngine(): void {

  const doc = document.documentElement;
  let target = window.scrollY;
  let current = window.scrollY;
  let raf = 0;

  const maxY = (): number => Math.max(0, doc.scrollHeight - window.innerHeight);
  const clamp = (v: number): number => Math.min(maxY(), Math.max(0, v));

  const frame = (): void => {
    const diff = target - current;
    if (Math.abs(diff) < 0.4) {
      current = target;
      window.scrollTo(0, current);
      raf = 0;
      return;
    }
    // میان‌یابی نمایی: هر فریم ۱۶٪ باقی‌مانده — نرم ولی بدون تأخیر محسوس
    current += diff * 0.16;
    window.scrollTo(0, current);
    raf = requestAnimationFrame(frame);
  };

  const kick = (): void => {
    if (!raf) raf = requestAnimationFrame(frame);
  };

  engine = {
    to: (y, immediate = false) => {
      target = clamp(y);
      if (immediate) {
        current = target;
        window.scrollTo(0, current);
        return;
      }
      kick();
    },
    by: (dy) => {
      target = clamp(target + dy);
      kick();
    },
    current: () => current,
  };

  doc.classList.add('has-smooth');

  /* اگر اسکرول از راه دیگری (کیبورد، نوار اسکرول، focus) جابه‌جا شد، هم‌گام شو */
  window.addEventListener(
    'scroll',
    () => {
      if (document.documentElement.classList.contains('locked')) return;
      const real = window.scrollY;
      if (Math.abs(real - current) > 2) {
        current = real;
        target = real;
      }
    },
    { passive: true },
  );

  /* ── چرخ ماوس / ترک‌پد ───────────────────────────────────────────────── */
  const onWheel = (e: WheelEvent): void => {
    if (e.ctrlKey || e.metaKey) return; // زوم
    if (document.documentElement.classList.contains('locked')) return;
    if (inNativeZone(e.target)) return;
    if (Math.abs(e.deltaY) < Math.abs(e.deltaX) * 1.2) return; // اسکرول افقی

    let d = e.deltaY;
    if (e.deltaMode === 1) d *= 18;
    else if (e.deltaMode === 2) d *= window.innerHeight;

    e.preventDefault();
    target = clamp(target + d);
    kick();
  };
  window.addEventListener('wheel', onWheel, { passive: false });

  /* ── لمسی: کشیدن + مومنتوم ──────────────────────────────────────────── */
  let touching = false;
  let lastY = 0;
  let lastT = 0;
  let vel = 0;
  let axis: 'x' | 'y' | null = null;
  let startX = 0;
  let startY = 0;

  window.addEventListener(
    'touchstart',
    (e: TouchEvent) => {
      if (e.touches.length !== 1) {
        touching = false;
        return;
      }
      if (document.documentElement.classList.contains('locked') || inNativeZone(e.target)) {
        touching = false;
        return;
      }
      touching = true;
      axis = null;
      startX = e.touches[0].clientX;
      startY = lastY = e.touches[0].clientY;
      lastT = performance.now();
      vel = 0;
      current = target = window.scrollY;
    },
    { passive: true },
  );

  window.addEventListener(
    'touchmove',
    (e: TouchEvent) => {
      if (!touching || e.touches.length !== 1) return;
      const t = e.touches[0];
      const now = performance.now();

      if (!axis) {
        const dx = Math.abs(t.clientX - startX);
        const dy = Math.abs(t.clientY - startY);
        if (dx > 8 || dy > 8) axis = dy >= dx ? 'y' : 'x';
        if (axis !== 'y') {
          touching = false;
          return;
        }
      }

      e.preventDefault();
      const dy = lastY - t.clientY;
      const dt = Math.max(6, now - lastT);
      lastY = t.clientY;
      lastT = now;
      vel = (dy / dt) * 16; // پیکسل بر فریم
      target = clamp(target + dy);
      kick();
    },
    { passive: false },
  );

  const end = (): void => {
    if (!touching) return;
    touching = false;
    // مومنتوم: مقدار سرعت با میرایی
    const glide = Math.max(-900, Math.min(900, vel * 11));
    target = clamp(target + glide);
    kick();
    vel = 0;
  };
  window.addEventListener('touchend', end, { passive: true });
  window.addEventListener('touchcancel', end, { passive: true });

}
