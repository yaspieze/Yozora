import { PRODUCTS } from '../data/catalog';

const $ = <T extends Element>(sel: string, root: ParentNode = document): T | null =>
  root.querySelector<T>(sel);
const $$ = <T extends Element>(sel: string, root: ParentNode = document): T[] =>
  Array.from(root.querySelectorAll<T>(sel));

/* ---------------------------------------------------------------- progress */
function initProgress(): void {
  const bar = $('#progress') as HTMLElement | null;
  if (!bar) return;
  let queued = false;
  const update = (): void => {
    queued = false;
    const el = document.documentElement;
    const max = el.scrollHeight - el.clientHeight;
    bar.style.transform = `scaleX(${max > 0 ? el.scrollTop / max : 0})`;
  };
  const ask = (): void => {
    if (queued) return;
    queued = true;
    requestAnimationFrame(update);
  };
  addEventListener('scroll', ask, { passive: true });
  addEventListener('resize', ask);
  update();
}

/* ----------------------------------------------------------------- reveals */
function initReveals(): void {
  const items = $$<HTMLElement>('.rv');
  if (!('IntersectionObserver' in window) || items.length === 0) {
    items.forEach((i) => i.classList.add('in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
  );
  items.forEach((i, idx) => {
    i.style.transitionDelay = `${Math.min(idx % 6, 5) * 45}ms`;
    io.observe(i);
  });
}

/* -------------------------------------------------------------- head state */
function initHead(): void {
  const head = $('#siteHead');
  const onScroll = (): void => {
    head?.classList.toggle('stuck', window.scrollY > 24);
  };
  addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  const burger = $('#burger');
  const drawer = $('#drawer') as HTMLElement | null;
  const close = $('#drawerClose');
  const toggle = (open: boolean): void => {
    if (!drawer) return;
    drawer.hidden = !open;
    burger?.setAttribute('aria-expanded', String(open));
    document.documentElement.classList.toggle('locked', open);
    document.body.classList.toggle('locked', open);
  };
  // never leave the page locked (back/forward cache, link clicks, touch cancel)
  addEventListener('pageshow', () => {
    document.documentElement.classList.remove('locked');
    document.body.classList.remove('locked');
    if (drawer) drawer.hidden = true;
  });
  drawer?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => toggle(false)));
  burger?.addEventListener('click', () => toggle(drawer?.hidden ?? true));
  close?.addEventListener('click', () => toggle(false));
  drawer?.addEventListener('click', (e) => {
    if (e.target === drawer) toggle(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') toggle(false);
  });
}

/* ------------------------------------------------------------------- search */
function initSearch(): void {
  const input = $<HTMLInputElement>('#searchInput');
  const pop = $('#searchPop') as HTMLElement | null;
  const form = $<HTMLFormElement>('#headSearch');
  if (!input || !pop) return;

  const render = (q: string): void => {
    const term = q.trim();
    if (term.length < 2) {
      pop.hidden = true;
      pop.innerHTML = '';
      return;
    }
    const hits = PRODUCTS.filter(
      (p) => p.title.includes(term) || p.desc.includes(term) || p.price.includes(term),
    ).slice(0, 6);
    pop.hidden = false;
    pop.innerHTML = hits.length
      ? hits
          .map(
            (p) => `<a href="${p.href}" class="sp-item">
              <img src="${p.image}" alt="" width="44" height="44" loading="lazy">
              <span><b>${p.title}</b><i>${p.price}</i></span></a>`,
          )
          .join('')
      : `<div class="sp-empty">چیزی پیدا نشد — در تیکت دیسکورد بپرس.</div>`;
  };

  input.addEventListener('input', () => render(input.value));
  input.addEventListener('focus', () => render(input.value));
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const first = pop.querySelector('a');
    if (first instanceof HTMLAnchorElement) location.href = first.href;
  });
  document.addEventListener('click', (e) => {
    if (!(e.target instanceof Node)) return;
    if (!form?.contains(e.target)) pop.hidden = true;
  });
}

/* ------------------------------------------------------------ card spotlight */
function initSpotlight(): void {
  if (matchMedia('(hover: none)').matches) return; // no hover on touch: skip entirely
  let frame = 0;
  let pending: PointerEvent | null = null;
  const paint = (): void => {
    frame = 0;
    const e = pending;
    pending = null;
    if (!e) return;
    const t = e.target;
    if (!(t instanceof Element)) return;
    const card = t.closest<HTMLElement>('.pcard,.card,.mega-item,.cat-tile');
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  };
  document.addEventListener(
    'pointermove',
    (e) => {
      pending = e as PointerEvent;
      if (frame) return;
      frame = requestAnimationFrame(paint);
    },
    { passive: true },
  );
}

/* ------------------------------------------------------------------ filters */
function initFilters(): void {
  const bar = $('#filters');
  const grid = $('#grid');
  if (!bar || !grid) return;
  bar.addEventListener('click', (e) => {
    const btn = (e.target as Element).closest<HTMLButtonElement>('button[data-f]');
    if (!btn) return;
    $$('button', bar).forEach((b) => b.classList.remove('act'));
    btn.classList.add('act');
    const f = btn.dataset.f ?? 'all';
    $$<HTMLElement>('.pcard', grid).forEach((card) => {
      const show = f === 'all' || card.dataset.cat === f;
      card.style.display = show ? '' : 'none';
    });
  });
}

/* ------------------------------------------------------------------ counters */
function initCounters(): void {
  const els = $$<HTMLElement>('[data-count]');
  if (!els.length) return;
  const fa = (n: number): string => n.toLocaleString('fa-IR');
  els.forEach((el) => {
    const target = Number(el.dataset.count ?? 0);
    let n = 0;
    const step = Math.max(1, Math.round(target / 28));
    const iv = setInterval(() => {
      n = Math.min(target, n + step);
      el.textContent = fa(n);
      if (n >= target) clearInterval(iv);
    }, 28);
  });
}

/* -------------------------------------------------------------------- slider */
function initHeroSlider(): void {
  const track = $<HTMLElement>('#heroSlider');
  if (!track) return;
  const slides = $$<HTMLElement>('.slide', track);
  const dots = $$<HTMLElement>('#heroDots i');
  if (slides.length < 2) return;
  let i = 0;
  const go = (n: number): void => {
    i = (n + slides.length) % slides.length;
    slides.forEach((s, k) => s.classList.toggle('on', k === i));
    dots.forEach((d, k) => d.classList.toggle('on', k === i));
  };
  dots.forEach((d, k) => d.addEventListener('click', () => go(k)));
  $('[data-slide="prev"]')?.addEventListener('click', () => go(i - 1));
  $('[data-slide="next"]')?.addEventListener('click', () => go(i + 1));

  let visible = true;
  const io = new IntersectionObserver(
    (entries) => entries.forEach((en) => (visible = en.isIntersecting)),
    { threshold: 0.15 },
  );
  io.observe(track);

  setInterval(() => {
    if (visible && !document.hidden) go(i + 1);
  }, 5200);
}

export function initInteractions(): void {
  initProgress();
  initOrderBuilder();
  initReveals();
  initHead();
  initSearch();
  initSpotlight();
  initFilters();
  initCounters();
  initHeroSlider();
  initSmoothScroll();
}

/* --------------------------------------------------------- order builder */
function showToast(msg: string): void {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('on');
  setTimeout(() => t.classList.remove('on'), 2600);
}

function initOrderBuilder(): void {
  const qty = document.getElementById('qty') as HTMLInputElement | null;
  const qtyOut = document.getElementById('qtyOut');
  const totalOut = document.getElementById('totalOut');
  const copy = document.getElementById('copyOrder') as HTMLButtonElement | null;
  const price = qty ? Number(qty.dataset.price ?? 0) : 0;
  const unitLabel = qty ? (qty.dataset.lbl ?? '') : '';

  const fa = (n: number): string => n.toLocaleString('fa-IR');
  const read = (): number => (qty ? Number(qty.value) : 0);

  const paint = (): void => {
    if (!qty) return;
    const v = read();
    if (qtyOut) qtyOut.textContent = fa(v);
    if (totalOut) totalOut.textContent = `${fa(v * price)} تومان`;
    qty.style.setProperty('--pct', `${((v - Number(qty.min)) / (Number(qty.max) - Number(qty.min))) * 100}%`);
  };

  qty?.addEventListener('input', paint);
  paint();

  copy?.addEventListener('click', async () => {
    const title = copy.dataset.title ?? 'محصول';
    const lines = [`سلام 👋`, `درخواست سفارش: ${title}`];
    if (qty) lines.push(`مقدار: ${fa(read())} ${unitLabel}`, `مبلغ تقریبی: ${fa(read() * price)} تومان`);
    lines.push('ممنون، منتظر پاسخ هستم.');
    const text = lines.join('\n');
    try {
      await navigator.clipboard.writeText(text);
      showToast('متن سفارش کپی شد ✓ حالا در تیکت دیسکورد بچسبانید');
    } catch {
      showToast('کپی نشد — متن را دستی بنویسید');
    }
  });
}

/* ------------------------------------------------------- smooth anchors */
function initSmoothScroll(): void {
  const header = document.getElementById('siteHead');
  document.addEventListener('click', (e) => {
    const a = (e.target as Element | null)?.closest?.('a[href^="#"]');
    if (!(a instanceof HTMLAnchorElement)) return;
    const id = a.getAttribute('href')?.slice(1);
    if (!id) return;
    const target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    const offset = (header?.offsetHeight ?? 0) + 14;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    target.setAttribute('tabindex', '-1');
    (target as HTMLElement).focus({ preventScroll: true });
  });
}
