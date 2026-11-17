import { PRODUCTS } from '../data/catalog';

const $ = <T extends Element>(sel: string, root: ParentNode = document): T | null =>
  root.querySelector<T>(sel);
const $$ = <T extends Element>(sel: string, root: ParentNode = document): T[] =>
  Array.from(root.querySelectorAll<T>(sel));

/* ---------------------------------------------------------------- progress */
function initProgress(): void {
  const bar = $('#progress') as HTMLElement | null;
  if (!bar) return;
  const update = (): void => {
    const el = document.documentElement;
    const max = el.scrollHeight - el.clientHeight;
    bar.style.width = `${max > 0 ? (el.scrollTop / max) * 100 : 0}%`;
  };
  addEventListener('scroll', update, { passive: true });
  addEventListener('resize', update);
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
    document.body.classList.toggle('locked', open);
  };
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
  document.addEventListener(
    'pointermove',
    (e) => {
      const target = e.target;
      if (!(target instanceof Element)) return;
      const card = target.closest<HTMLElement>('.pcard,.card,.mega-item,.cat-tile');
      if (!card) return;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
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
  setInterval(() => go(i + 1), 5200);
}

export function initInteractions(): void {
  initProgress();
  initReveals();
  initHead();
  initSearch();
  initSpotlight();
  initFilters();
  initCounters();
  initHeroSlider();
}
