import{D as i,I as a,G as o,N as r,C as n,p as c}from"./entry-DN_U859h.js";const p=[{href:"./",label:"خانه",key:"home"},{href:"hosting/",label:"سرور و هاست",key:"hosting"},{href:"products/",label:"محصولات",key:"products"},{href:"prices/",label:"قیمت‌ها",key:"prices"},{href:"guarantee/",label:"ضمانت",key:"guarantee"},{href:"blog/",label:"وبلاگ",key:"blog"},{href:"about/",label:"درباره ما",key:"about"},{href:"contact/",label:"تماس",key:"contact"}],h=()=>`
<div class="mega" role="menu">
  <div class="mega-grid">
    ${n.map((e,s)=>`<a class="mega-item" href="${e.slug}" role="menuitem" style="--i:${s}">
        ${c(e.image,{alt:"",sizes:"120px",w:120,h:120})}
        <span><b>${e.title}</b><i>${e.short}</i></span>
      </a>`).join("")}
  </div>
  <div class="mega-foot">
    <span>۶ محصول فعال · تحویل ۱ تا ۴۸ ساعت</span>
    <a href="products/">دیدن کاتالوگ کامل ${a.chevron}</a>
  </div>
</div>`,v=e=>`
<div class="nav-shell" id="navShell">
<div class="topstrip">
  <div class="wrap ts-in">
    <div class="ts-msg"><i class="dotlive"></i> پشتیبانی آنلاین در دیسکورد · پاسخ‌گویی لحظه‌ای</div>
    <div class="ts-links">
      <span>${a.shield} ضمانت بازگشت وجه</span>
      <span>${a.card} پرداخت ریالی</span>
      <a href="${i}" target="_blank" rel="noopener">${a.discord} ورود به دیسکورد</a>
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
      <a class="head-chip" href="prices/">${a.card}<span>لیست قیمت</span></a>
      <a class="btn btn-gold head-cta" href="${i}" target="_blank" rel="noopener">${a.discord} ثبت سفارش</a>
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
      ${p.map(s=>{const l=s.key===e?' class="act"':"",t=s.key&&s.key in r?r[s.key]:"";if(s.key==="products")return`<li class="has-mega"><a href="${s.href}"${l} aria-haspopup="true" aria-expanded="false">${t}<span>${s.label}</span> ${a.chevron}</a>${h()}</li>`;const d=s.key==="hosting"?'<i class="nav-new nav-off">تعمیر</i>':"";return`<li><a href="${s.href}"${l}>${t}<span>${s.label}</span>${d}</a></li>`}).join("")}
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
    <a href=".">${r.home}<span>خانه</span></a>
    <a href="hosting/">${r.products}<span>سرور و هاستینگ</span><i class="nav-new nav-off">تعمیر</i></a>
    <a href="products/">${r.products}<span>همهٔ محصولات</span></a>
    <a href="prices/">${r.prices}<span>قیمت‌ها</span></a>
    <a href="guarantee/">${r.guarantee}<span>ضمانت</span></a>
    <a href="blog/">${r.blog}<span>وبلاگ</span></a>
    <a href="about/">${r.about}<span>درباره ما</span></a>
    <a href="contact/">${r.contact}<span>تماس</span></a>
    <span class="dr-label">دسته‌بندی‌ها</span>
    ${n.map(s=>`<a href="${s.slug}">${s.title}</a>`).join("")}
    <span class="dr-label">بیشتر</span>
    <a href="process/">مراحل سفارش</a>
    <a href="faq/">سوالات متداول</a>
    <a class="btn btn-gold" href="${i}" target="_blank" rel="noopener">${a.discord} ورود به دیسکورد</a>
  </div>
</div>`,b=()=>`
<footer class="site-foot">
  <div class="wrap foot-grid">
    <div class="fbrand">
      <a class="brand" href=".">
        <img class="brand-mark" src="assets/img/logo.png" srcset="assets/img/logo.png 1x, assets/img/logo@2x.png 2x" alt="یوزورا شاپ" width="165" height="165" loading="lazy" decoding="async">
        <span class="brand-txt"><b>یوزورا <em>شاپ</em></b><i>YOZORA SHOP</i></span>
      </a>
      <p>فروشگاه گیمینگ یوزورا؛ اکانت ماینکرفت دستهٔ اول و دوم، اولویت تحویل، پول دونات اس‌ام‌پی، محصولات هایپیکسل و کیپ اپتیفاین عمده — با پرداخت ریالی و ضمانت بازگشت وجه.</p>
      <div class="fsocial">
        <a href="${i}" target="_blank" rel="noopener" aria-label="دیسکورد">${a.discord}</a>
      </div>
    </div>
    <div class="fcol">
      <h4>محصولات</h4>
      ${n.map(e=>`<a href="${e.slug}">${e.title}</a>`).join("")}
    </div>
    <div class="fcol">
      <h4>خدمات</h4>
      <a href="cat-donut/">پول دونات اس ام پی</a>
      <a href="cat-hypixel/">محصولات هایپیکسل</a>
      <a href="cat-cape/">کیپ اپتیفاین عمده</a>
      <a href="prices/">جدول قیمت‌ها</a>
    </div>
    <div class="fcol">
      <h4>راهنما</h4>
      <a href="process/">مراحل سفارش</a>
      <a href="guarantee/">ضمانت و بازگشت وجه</a>
      <a href="faq/">سوالات متداول</a>
      <a href="terms/">قوانین و شرایط</a>
      <a href="blog/">وبلاگ</a>
    </div>
  </div>
  <div class="wrap foot-badges">
    <span>${a.shield} ضمانت اصالت</span>
    <span>${a.card} پرداخت ریالی</span>
    <span>${a.bolt} تحویل سریع</span>
    <span>${a.clock} پشتیبانی ۲۴/۷</span>
  </div>
  <div class="foot-credit"><div class="wrap fc-in">
    <span class="fc-by">طراحی شده توسط ${o} <b>گسلایت استودیو</b></span>
    <span class="fc-line" aria-hidden="true"></span>
    <span class="fc-note">Gaslight Studio — interface &amp; motion</span>
  </div></div>
  <div class="foot-bottom"><div class="wrap fb-in">
    <span>© ۱۴۰۵ یوزورا شاپ — تمام حقوق محفوظ است.</span>
    <span>پشتیبانی ۲۴/۷ در دیسکورد یوزورا</span>
  </div></div>
  <div class="foot-mark" aria-hidden="true">YOZORA</div>
</footer>
<div class="side-wm" aria-hidden="true">YOZORA · GASLIGHT STUDIO</div>
<div class="mobar"><a class="btn btn-gold" href="${i}" target="_blank" rel="noopener">${a.discord} ثبت سفارش در دیسکورد</a></div>`,g=e=>`
<div id="progress"></div>
<a class="skip-link" href="#main">پرش به محتوای اصلی</a>
${v(e)}
<main id="main">`;export{p as NAV,b as renderFooter,v as renderHeader,g as renderLayout};
