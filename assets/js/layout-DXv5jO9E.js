import{D as t,I as a,G as n,N as e,C as c}from"./entry-CZMWsw9g.js";const o=[{href:"./",label:"خانه",key:"home"},{href:"gta-vi/",label:"GTA VI",key:"gta"},{href:"products/",label:"محصولات",key:"products"},{href:"about/",label:"درباره ما",key:"about"},{href:"contact/",label:"تماس",key:"contact"}],d=r=>`
<div class="nav-shell" id="navShell">
<div class="topstrip">
  <div class="wrap ts-in">
    <div class="ts-msg"><i class="dotlive"></i> پشتیبانی آنلاین در دیسکورد · پاسخ‌گویی لحظه‌ای</div>
    <div class="ts-links">
      <span>${a.shield} ضمانت بازگشت وجه</span>
      <span>${a.card} پرداخت ریالی</span>
      <a href="${t}" target="_blank" rel="noopener">${a.discord} ورود به دیسکورد</a>
    </div>
  </div>
</div>

<header class="site-head" id="siteHead">
  <div class="wrap head-row">
    <a class="brand" href="." aria-label="یوزورا شاپ">
      <img class="brand-mark" src="assets/img/logo.png" srcset="assets/img/logo.png 1x, assets/img/logo@2x.png 2x" alt="یوزورا شاپ" width="165" height="165" decoding="async">
      <span class="brand-txt"><b>یوزورا <em>شاپ</em></b><i>YOZORA SHOP</i></span>
    </a>

    <form class="head-search" id="headSearch" autocomplete="off" role="search">
      ${a.search}
      <input id="searchInput" type="search" placeholder="جستجوی محصول، دسته یا قیمت…" aria-label="جستجو">
      <div class="search-pop" id="searchPop" hidden></div>
    </form>

    <div class="head-actions">
      <a class="btn btn-gold head-cta" href="${t}" target="_blank" rel="noopener">${a.discord} ثبت سفارش</a>
      <button class="theme-btn" id="themeBtn" data-theme-btn type="button" aria-label="حالت روشن و تیره" aria-pressed="false" title="تغییر حالت نمایش">
        <span class="tb-ico tb-sun" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4.6"/><path d="M11 1.6h2v3.4h-2zM11 19h2v3.4h-2zM1.6 11h3.4v2H1.6zM19 11h3.4v2H19zM4.5 3.1l2.4 2.4-1.4 1.4-2.4-2.4zM18.5 17.1l2.4 2.4-1.4 1.4-2.4-2.4zM19.5 3.1l1.4 1.4-2.4 2.4-1.4-1.4zM5.5 17.1l1.4 1.4-2.4 2.4-1.4-1.4z"/></svg></span>
        <span class="tb-ico tb-moon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 14.8A8.6 8.6 0 0 1 9.2 3.6a8.8 8.8 0 1 0 11.2 11.2Z"/></svg></span>
      </button>
      <button class="burger" id="burger" aria-label="منو" aria-expanded="false">${a.menu}</button>
    </div>
  </div>
</header>

<nav class="main-nav" id="mainNav" aria-label="منوی اصلی">
  <div class="wrap nav-in">
    <ul>
      ${o.map(s=>{const i=s.key===r?' class="act"':"",l=s.key&&s.key in e?e[s.key]:"";return`<li><a href="${s.href}"${i}>${l}<span>${s.label}</span></a></li>`}).join("")}
    </ul>
    <span class="nav-note">
      <svg class="nav-signal" viewBox="0 0 34 14" fill="currentColor" aria-hidden="true"><rect x="0" y="5.6" width="4" height="2.8" rx="1.4" opacity=".45"/><rect x="8" y="2.6" width="2.4" height="8.8" rx="1.2" opacity=".7"/><rect x="12.6" y="0.8" width="2.4" height="12.4" rx="1.2"/><rect x="17.2" y="3.4" width="2.4" height="7.2" rx="1.2" opacity=".8"/><rect x="21.8" y="1.6" width="2.4" height="10.8" rx="1.2" opacity=".9"/><rect x="26.4" y="4.6" width="2.4" height="4.8" rx="1.2" opacity=".6"/><rect x="31" y="5.6" width="3" height="2.8" rx="1.4" opacity=".45"/></svg>
      تحویل ۱ تا ۴۸ ساعت
    </span>
  </div>
</nav>
</div><!-- /nav-shell -->

<div class="drawer" id="drawer" hidden>
  <div class="drawer-panel">
    <div class="drawer-head">
      <b>منو</b>
      <button id="drawerClose" aria-label="بستن">${a.close}</button>
    </div>
    <a href=".">${e.home}<span>خانه</span></a>
    <a href="products/">${e.products}<span>همهٔ محصولات</span></a>
    <a href="faq/">${e.help}<span>سؤالات متداول</span></a>
    <a href="about/">${e.about}<span>درباره ما</span></a>
    <a href="contact/">${e.contact}<span>تماس با ما</span></a>
    <span class="dr-label">دسته‌بندی‌ها</span>
    ${c.map(s=>`<a href="${s.slug}">${s.title}</a>`).join("")}
    <a class="btn btn-gold" href="${t}" target="_blank" rel="noopener">${a.discord} ورود به دیسکورد</a>
  </div>
</div>`,b=()=>`
<footer class="site-foot">
  <div class="wrap foot-min">
    <a class="fbrand" href="." aria-label="یوزورا شاپ">
      <img class="brand-mark" src="assets/img/logo.png" srcset="assets/img/logo.png 1x, assets/img/logo@2x.png 2x" alt="یوزورا شاپ" width="165" height="165" loading="lazy" decoding="async">
      <span class="brand-txt"><b>یوزورا <em>شاپ</em></b><i>YOZORA SHOP</i></span>
    </a>
    <nav class="foot-links" aria-label="پیوندهای پانوشت">
      <a href="products/">محصولات</a>
      <a href="faq/">سؤالات متداول</a>
      <a href="process/">مراحل سفارش</a>
      <a href="about/">درباره</a>
      <a href="contact/">تماس</a>
      <a href="terms/">قوانین</a>
    </nav>
    <a class="btn btn-gold foot-cta" href="${t}" target="_blank" rel="noopener">${a.discord} دیسکورد</a>
  </div>

  <div class="wrap foot-note">
    <p class="fg-item">${a.shield} <b>ضمانت بازگشت وجه:</b> اگر سفارش تحویل نشود، مبلغ کامل برمی‌گردد.</p>
    <p class="fg-item">${a.card} پرداخت ریالی با فاکتور</p>
    <p class="fg-item">${a.clock} پشتیبانی ۲۴ ساعته در دیسکورد</p>
  </div>

  <div class="wrap foot-bottom">
    <span>© ۱۴۰۵ یوزورا شاپ</span>
    <span class="fc-by">طراحی ${n} <b>گسلایت استودیو</b></span>
  </div>
</footer>
<div class="mobar"><a class="btn btn-gold" href="${t}" target="_blank" rel="noopener">${a.discord} ثبت سفارش در دیسکورد</a></div>`,p=()=>`
<a class="vice-bar" id="viceBar" href="gta-vi/" aria-label="کمپین GTA VI — ۸۸٪ تخفیف">
  <span class="vb-flag">${a.spark} کمپین ویژه</span>
  <span class="vb-text">تخفیف ویژه GTA VI ۸۸٪</span>
  <span class="vb-price">۱۶٬۹۴۰٬۰۰۰ → <b>۲٬۰۳۲٬۸۰۰</b> تومان</span>
  <span class="vb-go">دیدن کمپین</span>
  <button class="vb-close" type="button" aria-label="بستن بنر" data-vice-close>${a.close}</button>
</a>`,v=r=>`
${p()}
<div id="progress"></div>
<a class="skip-link" href="#main">پرش به محتوای اصلی</a>
${d(r)}
<main id="main">`;export{o as NAV,b as renderFooter,d as renderHeader,v as renderLayout};
