import{D as r,I as a,G as i,N as e,C as o}from"./entry-Ue92FAXu.js";const d=[{href:"./",label:"خانه",key:"home"},{href:"products/",label:"محصولات",key:"products"},{href:"cat-lunar/",label:"لونار",key:"lunar"},{href:"cat-badlion/",label:"بدلاین",key:"badlion"},{href:"cat-dawn/",label:"داون",key:"dawn"},{href:"cat-minemen/",label:"ماینمن",key:"minemen"},{href:"about/",label:"درباره ما",key:"about"},{href:"contact/",label:"تماس",key:"contact"}],c=n=>`
<div class="nav-shell" id="navShell">
<div class="topstrip">
  <div class="wrap ts-in">
    <div class="ts-msg"><i class="dotlive"></i> پشتیبانی آنلاین در دیسکورد · پاسخ‌گویی لحظه‌ای</div>
    <div class="ts-links">
      <span>${a.shield} ضمانت بازگشت وجه</span>
      <span>${a.card} پرداخت ریالی</span>
      <a href="${r}" target="_blank" rel="noopener">${a.discord} ورود به دیسکورد</a>
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
      <a class="btn btn-gold head-cta" href="${r}" target="_blank" rel="noopener">${a.discord} ثبت سفارش</a>
      <button class="theme-btn" id="themeBtn" data-theme-btn type="button" aria-label="حالت روشن و تیره" aria-pressed="false" title="تغییر حالت نمایش">
        <span class="tb-ico tb-sun" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4L17 7M7 17l-1.6 1.6"/></svg></span>
        <span class="tb-ico tb-moon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.2 8.2 0 0 1 9.5 4a8.3 8.3 0 1 0 10.5 10.5Z"/></svg></span>
      </button>
      <button class="burger" id="burger" aria-label="منو" aria-expanded="false">${a.menu}</button>
    </div>
  </div>
</header>

<nav class="main-nav" id="mainNav" aria-label="منوی اصلی">
  <div class="wrap nav-in">
    <ul>
      ${d.map(s=>{const t=s.key===n?' class="act"':"",l=s.key&&s.key in e?e[s.key]:"";return`<li><a href="${s.href}"${t}>${l}<span>${s.label}</span></a></li>`}).join("")}
    </ul>
    <span class="nav-note">
      <svg class="nav-signal" viewBox="0 0 34 14" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round">
        <path d="M1 7h4M9 3v8M14 1v12M19 4v6M24 2v10M29 5v4M33 7h-1"/>
      </svg>
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
    ${o.map(s=>`<a href="${s.slug}">${s.title}</a>`).join("")}
    <a class="btn btn-gold" href="${r}" target="_blank" rel="noopener">${a.discord} ورود به دیسکورد</a>
  </div>
</div>`,h=()=>`
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
    <a class="btn btn-gold foot-cta" href="${r}" target="_blank" rel="noopener">${a.discord} دیسکورد</a>
  </div>

  <div class="wrap foot-note">
    <p class="fg-item">${a.shield} <b>ضمانت بازگشت وجه:</b> اگر سفارش تحویل نشود، مبلغ کامل برمی‌گردد.</p>
    <p class="fg-item">${a.card} پرداخت ریالی با فاکتور</p>
    <p class="fg-item">${a.clock} پشتیبانی ۲۴ ساعته در دیسکورد</p>
  </div>

  <div class="wrap foot-bottom">
    <span>© ۱۴۰۵ یوزورا شاپ</span>
    <span class="fc-by">طراحی ${i} <b>گسلایت استودیو</b></span>
  </div>
</footer>
<div class="mobar"><a class="btn btn-gold" href="${r}" target="_blank" rel="noopener">${a.discord} ثبت سفارش در دیسکورد</a></div>`,b=n=>`
<div id="progress"></div>
<a class="skip-link" href="#main">پرش به محتوای اصلی</a>
${c(n)}
<main id="main">`;export{d as NAV,h as renderFooter,c as renderHeader,b as renderLayout};
