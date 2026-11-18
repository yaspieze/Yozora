import { DETAILS } from '../data/details';
import { CATEGORIES, DISCORD, PRODUCTS, type Product } from '../data/catalog';
import { breadcrumbs, faqList, icon, pill, productCard, sectionHead } from '../lib/ui';

const fa = (n: number): string => n.toLocaleString('fa-IR');

export const productUrl = (id: string): string => `product/${id}/`;

const related = (p: Product): Product[] =>
  PRODUCTS.filter((x) => x.category === p.category && x.id !== p.id).slice(0, 3);

const orderBox = (p: Product): string => {
  const detail = DETAILS[p.id];
  const unit = detail?.unit;
  const total = unit ? unit.price * (unit.min + 0) : 0;
  return `
<aside class="buy-box rv">
  <div class="bb-head">
    <span class="bb-pill">${icon('shield')} ضمانت بازگشت وجه</span>
    <div class="bb-price"><span>${p.priceLabel}</span><b>${p.price}</b></div>
  </div>

  ${
    unit
      ? `<div class="calc">
    <label class="calc-lbl" for="qty">مقدار مورد نظر</label>
    <div class="calc-val"><b id="qtyOut">${fa(unit.min)}</b> <span>${unit.label}</span></div>
    <input id="qty" type="range" min="${unit.min}" max="${unit.max}" step="${unit.step}" value="${unit.min}"
           data-price="${unit.price}" data-lbl="${unit.label}">
    <div class="calc-range"><span>${fa(unit.min)} ${unit.label}</span><span>${unit.maxLabel}</span></div>
    <div class="calc-total">مبلغ کل: <b id="totalOut">${fa(total)} تومان</b></div>
  </div>`
      : `<div class="bb-note">${icon('info')} قیمت نهایی و زمان دقیق تحویل در تیکت دیسکورد اعلام می‌شود.</div>`
  }

  <ul class="bb-list">
    <li>${icon('bolt')} زمان تحویل: <b>${detail?.delivery ?? '۱ تا ۴۸ ساعت'}</b></li>
    <li>${icon('card')} پرداخت ریالی، بدون کارت خارجی</li>
    <li>${icon('clock')} پشتیبانی ۲۴/۷ در دیسکورد</li>
  </ul>

  <a class="btn btn-gold btn-lg bb-cta" href="${DISCORD}" target="_blank" rel="noopener">${icon('discord')} ثبت سفارش در دیسکورد</a>
  <button class="btn btn-ghost btn-copy" id="copyOrder" data-title="${p.title}" data-unit="${unit ? unit.label : ''}">
    ${icon('cart')} کپی متن سفارش
  </button>
  <p class="bb-fine">با کپی متن سفارش، فقط کافی است آن را در تیکت دیسکورد بچسبانید.</p>
</aside>`;
};

export const productPage = (id: string): string => {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return '<section class="tight"><div class="wrap"><h1>محصول پیدا نشد</h1></div></section>';
  const detail = DETAILS[p.id];
  const cat = CATEGORIES.find((c) => c.key === p.category);
  const rel = related(p);

  return `
${breadcrumbs([
    { label: 'محصولات', href: 'products/' },
    ...(cat ? [{ label: cat.title, href: cat.slug }] : []),
    { label: p.title },
  ])}

<section class="prod"><div class="wrap prod-grid">
  <div class="prod-media rv">
    <img src="${p.image}" alt="${p.title}" width="900" height="900" fetchpriority="high">
    <span class="img-stamp" aria-hidden="true">YOZORA</span>
    <div class="pm-badges">
      ${p.pills.map(pill).join('')}
    </div>
  </div>
  <div class="prod-info">
    ${cat ? `<a class="eyebrow" href="${cat.slug}">${cat.title}</a>` : ''}
    <h1>${p.title}</h1>
    <p class="lead">${p.desc}</p>
    <p class="prod-long">${detail?.long ?? ''}</p>
    <ul class="feat">
      ${(detail?.features ?? []).map((f) => `<li>${icon('spark')} ${f}</li>`).join('')}
    </ul>
    ${orderBox(p)}
  </div>
</div></section>

${
  detail?.steps
    ? `<section class="tight"><div class="wrap">${sectionHead('مراحل', 'این محصول چطور تحویل داده می‌شود؟')}
  <ol class="mini-steps">${detail.steps.map((s, i) => `<li><span>${fa(i + 1)}</span>${s}</li>`).join('')}</ol>
</div></section>`
    : ''
}

${
  detail?.faq
    ? `<section class="tight"><div class="wrap">${sectionHead('سوالات', 'سؤال‌های این محصول')}${faqList(detail.faq)}</div></section>`
    : ''
}

${
  rel.length
    ? `<section class="tight"><div class="wrap">${sectionHead('محصولات مرتبط', 'این‌ها را هم ببین')}
  <div class="grid g3">${rel.map((r) => productCard(r, { compact: true })).join('')}</div></div></section>`
    : ''
}

<div id="toast" class="toast" role="status" aria-live="polite"></div>`;
};

export const productsPage = (): string => {
  const filters: [string, string][] = [
    ['all', 'همه'],
    ...CATEGORIES.map((c) => [c.key, c.title.split(' ')[0]] as [string, string]),
  ];
  return `
${breadcrumbs([{ label: 'محصولات' }])}
<section class="phero"><div class="wrap">
  <span class="eyebrow">کاتالوگ کامل</span>
  <h1>همهٔ محصولات یوزورا شاپ</h1>
  <p class="lead" style="max-width:70ch">۱۸ محصول و سرویس فعال در ۷ دسته. با فیلترها دستهٔ مورد نظرت را انتخاب کن،
  یا روی هر محصول بزن تا صفحهٔ اختصاصی‌اش با قیمت و جزئیات کامل باز شود.</p>
  <div class="badges">
    <span class="pill g">پرداخت ریالی</span>
    <span class="pill y">ضمانت بازگشت وجه</span>
    <span class="pill b">سفارش با تیکت</span>
  </div>
</div></section>
<section class="tight"><div class="wrap">
  <div class="filters" id="filters">
    ${filters.map(([f, l], i) => `<button${i === 0 ? ' class="act"' : ''} data-f="${f}">${l}</button>`).join('')}
  </div>
  <div class="grid g4" id="grid">${PRODUCTS.map((p) => productCard(p, { compact: true })).join('')}</div>
</div></section>`;
};
