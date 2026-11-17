import { ICONS } from './icons';
import { CATEGORIES, DISCORD } from '../data/catalog';

export interface NavItem {
  href: string;
  label: string;
  key?: string;
}

export const NAV: NavItem[] = [
  { href: 'index.html', label: 'خانه', key: 'home' },
  { href: 'products.html', label: 'محصولات', key: 'products' },
  { href: 'prices.html', label: 'قیمت‌ها', key: 'prices' },
  { href: 'guarantee.html', label: 'ضمانت', key: 'guarantee' },
  { href: 'blog.html', label: 'وبلاگ', key: 'blog' },
  { href: 'about.html', label: 'درباره ما', key: 'about' },
  { href: 'contact.html', label: 'تماس', key: 'contact' },
];

const megaMenu = (): string => `
<div class="mega" role="menu">
  <div class="mega-grid">
    ${CATEGORIES.map(
      (c) => `<a class="mega-item" href="${c.slug}" role="menuitem">
        <img src="${c.image}" alt="" loading="lazy" width="120" height="120">
        <span><b>${c.title}</b><i>${c.short}</i></span>
      </a>`,
    ).join('')}
  </div>
  <div class="mega-foot">
    <span>۱۷ محصول در ۷ دسته</span>
    <a href="products.html">دیدن کاتالوگ کامل ${ICONS.chevron}</a>
  </div>
</div>`;

export const renderHeader = (active: string): string => `
<div class="topstrip">
  <div class="wrap ts-in">
    <div class="ts-msg"><i class="dotlive"></i> پشتیبانی آنلاین در دیسکورد · پاسخ‌گویی لحظه‌ای</div>
    <div class="ts-links">
      <span>${ICONS.shield} ضمانت بازگشت وجه</span>
      <span>${ICONS.card} پرداخت ریالی</span>
      <a href="${DISCORD}" target="_blank" rel="noopener">${ICONS.discord} ورود به دیسکورد</a>
    </div>
  </div>
</div>

<header class="site-head" id="siteHead">
  <div class="wrap head-row">
    <a class="brand" href="index.html" aria-label="کینیوا شاپ">
      <img src="assets/img/logo.png" alt="کینیوا شاپ" width="56" height="56">
      <span class="brand-txt"><b>کینیوا <em>شاپ</em></b><i>KINIWA SHOP</i></span>
    </a>

    <form class="head-search" id="headSearch" autocomplete="off" role="search">
      ${ICONS.search}
      <input id="searchInput" type="search" placeholder="جستجوی محصول… مثلاً پول دونات، اورلی، اسکین" aria-label="جستجو">
      <div class="search-pop" id="searchPop" hidden></div>
    </form>

    <div class="head-actions">
      <a class="btn btn-gold btn-sm head-cta" href="${DISCORD}" target="_blank" rel="noopener">${ICONS.discord} ثبت سفارش</a>
      <button class="burger" id="burger" aria-label="منو" aria-expanded="false">${ICONS.menu}</button>
    </div>
  </div>

  <nav class="main-nav" aria-label="منوی اصلی">
    <div class="wrap nav-in">
      <ul>
        ${NAV.map((n) => {
          const act = n.key === active ? ' class="act"' : '';
          if (n.key === 'products') {
            return `<li class="has-mega"><a href="${n.href}"${act}>${n.label} ${ICONS.chevron}</a>${megaMenu()}</li>`;
          }
          return `<li><a href="${n.href}"${act}>${n.label}</a></li>`;
        }).join('')}
      </ul>
      <span class="nav-note">${ICONS.bolt} تحویل ۱ تا ۴۸ ساعت</span>
    </div>
  </nav>
</header>

<div class="drawer" id="drawer" hidden>
  <div class="drawer-panel">
    <div class="drawer-head">
      <b>منو</b>
      <button id="drawerClose" aria-label="بستن">${ICONS.close}</button>
    </div>
    <a href="index.html">خانه</a>
    <a href="products.html">همهٔ محصولات</a>
    ${CATEGORIES.map((c) => `<a href="${c.slug}">${c.title}</a>`).join('')}
    <a href="prices.html">قیمت‌ها</a>
    <a href="process.html">مراحل سفارش</a>
    <a href="guarantee.html">ضمانت</a>
    <a href="faq.html">سوالات متداول</a>
    <a href="blog.html">وبلاگ</a>
    <a href="about.html">درباره ما</a>
    <a href="contact.html">تماس</a>
    <a class="btn btn-gold" href="${DISCORD}" target="_blank" rel="noopener">${ICONS.discord} ورود به دیسکورد</a>
  </div>
</div>`;

export const renderFooter = (): string => `
<footer class="site-foot">
  <div class="wrap foot-grid">
    <div class="fbrand">
      <a class="brand" href="index.html">
        <img src="assets/img/logo.png" alt="کینیوا شاپ" width="52" height="52">
        <span class="brand-txt"><b>کینیوا <em>شاپ</em></b><i>KINIWA SHOP</i></span>
      </a>
      <p>فروشگاه گیمینگ کینیوا؛ اکانت ماینکرفت، پول سرورها، خدمات طراحی، اورلی استریم، کازمتیک و کیپ اپتیفاین — با پرداخت ریالی و ضمانت بازگشت وجه.</p>
      <div class="fsocial">
        <a href="${DISCORD}" target="_blank" rel="noopener" aria-label="دیسکورد">${ICONS.discord}</a>
      </div>
    </div>
    <div class="fcol">
      <h4>محصولات</h4>
      ${CATEGORIES.map((c) => `<a href="${c.slug}">${c.title}</a>`).join('')}
    </div>
    <div class="fcol">
      <h4>خدمات</h4>
      <a href="cat-design.html">طراحی لوگو و بنر</a>
      <a href="cat-design.html">تامنیل و اسکین</a>
      <a href="cat-design.html">انیمه‌آرت</a>
      <a href="cat-overlay.html">اورلی استریم</a>
      <a href="prices.html">جدول قیمت‌ها</a>
    </div>
    <div class="fcol">
      <h4>راهنما</h4>
      <a href="process.html">مراحل سفارش</a>
      <a href="guarantee.html">ضمانت و بازگشت وجه</a>
      <a href="faq.html">سوالات متداول</a>
      <a href="terms.html">قوانین و شرایط</a>
      <a href="blog.html">وبلاگ</a>
    </div>
  </div>
  <div class="wrap foot-badges">
    <span>${ICONS.shield} ضمانت اصالت</span>
    <span>${ICONS.card} پرداخت ریالی</span>
    <span>${ICONS.bolt} تحویل سریع</span>
    <span>${ICONS.clock} پشتیبانی ۲۴/۷</span>
  </div>
  <div class="foot-bottom"><div class="wrap fb-in">
    <span>© ۱۴۰۵ کینیوا شاپ — تمام حقوق محفوظ است.</span>
    <span>ساخته‌شده با ❤ برای انجمن کینیوا</span>
  </div></div>
  <div class="foot-mark" aria-hidden="true">KINIWA</div>
</footer>
<div class="mobar"><a class="btn btn-gold" href="${DISCORD}" target="_blank" rel="noopener">${ICONS.discord} ثبت سفارش در دیسکورد</a></div>`;

export const renderLayout = (active: string): string => `
<div id="progress"></div>
${renderHeader(active)}
<main id="main">`;
