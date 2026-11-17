import { ICONS, type IconName } from './icons';
import { DISCORD, type Product, type Pill } from '../data/catalog';

const esc = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const icon = (name: IconName): string => ICONS[name];

export const pill = (p: Pill): string =>
  `<span class="pill ${p.tone === 'green' ? 'g' : p.tone === 'gold' ? 'y' : p.tone === 'blue' ? 'b' : ''}">${esc(p.text)}</span>`;

export interface ProductCardOptions {
  compact?: boolean;
}

export const productCard = (p: Product, opts: ProductCardOptions = {}): string => `
<article class="pcard rv" data-cat="${p.category}">
  <a class="thumb" href="${p.href}" aria-label="${esc(p.title)}">
    <img src="${p.image}" alt="${esc(p.title)}" loading="lazy" width="900" height="900">
    ${p.badge ? `<span class="badge-hot">${esc(p.badge)}</span>` : ''}
  </a>
  <div class="body">
    <h3><a href="${p.href}">${esc(p.title)}</a></h3>
    ${opts.compact ? '' : `<p class="desc">${esc(p.desc)}</p>`}
    <div class="pills">${	p.pills.map(pill).join('')}</div>
    <div class="pfoot">
      <div class="price${p.ask ? ' ask' : ''}"><span>${esc(p.priceLabel)}</span><b>${esc(p.price)}</b></div>
      <a class="btn btn-gold btn-sm" href="${DISCORD}" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article>`;

export const sectionHead = (eyebrow: string, title: string, text = '', center = true): string => `
<div class="sec-hd${center ? ' center' : ''}">
  <span class="eyebrow">${esc(eyebrow)}</span>
  <h2 class="sec">${title}</h2>
  ${text ? `<p class="sec-p">${esc(text)}</p>` : ''}
</div>`;

export const trustCard = (name: IconName, title: string, text: string): string => `
<div class="card hover rv"><div class="ic">${icon(name)}</div>
  <h3>${esc(title)}</h3><p>${esc(text)}</p></div>`;

export const faqList = (items: { q: string; a: string }[]): string => `
<div class="faq">${items
  .map(
    (f, i) => `<details class="rv"${i === 0 ? ' open' : ''}><summary>${esc(f.q)}</summary><div class="ans">${esc(f.a)}</div></details>`,
  )
  .join('')}</div>`;

export const ctaBand = (title: string, text: string): string => `
<section class="cta-band"><div class="wrap cta-in">
  <div>
    <h2>${esc(title)}</h2>
    <p>${esc(text)}</p>
  </div>
  <a class="btn btn-gold btn-lg" href="${DISCORD}" target="_blank" rel="noopener">${icon('discord')} ثبت سفارش در دیسکورد</a>
</div></section>`;

export const breadcrumbs = (trail: { label: string; href?: string }[]): string => `
<div class="wrap"><nav class="crumbs" aria-label="مسیر">
  <a href="index.html">خانه</a>
  ${trail.map((t) => `<span>/</span>${t.href ? `<a href="${t.href}">${esc(t.label)}</a>` : `<span class="cur">${esc(t.label)}</span>`}`).join('')}
</nav></div>`;

export const statStrip = (): string => `
<div class="stat-strip rv">
  <div><b data-count="763">۷۶۳</b><span>عضو انجمن</span></div>
  <div><b data-count="30">۳۰</b><span>آنلاین</span></div>
  <div><b data-count="17">۱۷</b><span>محصول فعال</span></div>
  <div><b>۴۸h</b><span>حداکثر تحویل</span></div>
</div>`;
