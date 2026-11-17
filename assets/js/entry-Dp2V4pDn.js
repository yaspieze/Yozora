(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const e of l)if(e.type==="childList")for(const d of e.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function t(l){const e={};return l.integrity&&(e.integrity=l.integrity),l.referrerPolicy&&(e.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?e.credentials="include":l.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function i(l){if(l.ep)return;l.ep=!0;const e=t(l);fetch(l.href,e)}})();const o=(s,a=24)=>`<svg width="${a}" height="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${s}</svg>`,c={discord:'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.32 4.37A19.8 19.8 0 0 0 15.4 2.9a13.7 13.7 0 0 0-.62 1.28 18.3 18.3 0 0 0-5.55 0A13.7 13.7 0 0 0 8.6 2.9a19.7 19.7 0 0 0-4.92 1.47C.6 9.05-.27 13.6.16 18.1a19.9 19.9 0 0 0 6.03 3.05c.48-.66.9-1.36 1.27-2.1-.7-.26-1.37-.58-2-.96.17-.12.33-.25.49-.38a14.2 14.2 0 0 0 12.1 0c.16.13.32.26.49.38-.63.38-1.3.7-2 .96.37.74.79 1.44 1.27 2.1a19.8 19.8 0 0 0 6.03-3.05c.5-5.2-.86-9.72-3.52-13.73ZM8.02 15.33c-1.18 0-2.15-1.08-2.15-2.4 0-1.33.95-2.41 2.15-2.41 1.2 0 2.17 1.09 2.15 2.41 0 1.32-.95 2.4-2.15 2.4Zm7.96 0c-1.18 0-2.15-1.08-2.15-2.4 0-1.33.95-2.41 2.15-2.41 1.2 0 2.17 1.09 2.15 2.41 0 1.32-.95 2.4-2.15 2.4Z"/></svg>',bolt:o('<path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5Z"/>'),card:o('<rect x="2.5" y="5" width="19" height="14" rx="3"/><path d="M2.5 10h19"/>'),shield:o('<path d="M12 3l7.5 3v6c0 4.5-3.2 7.7-7.5 9-4.3-1.3-7.5-4.5-7.5-9V6L12 3Z"/><path d="M9 12.2l2.1 2.1L15.4 10"/>'),clock:o('<circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 1.8"/>'),search:o('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>'),menu:o('<path d="M3.5 7h17M3.5 12h17M3.5 17h17"/>'),close:o('<path d="m6 6 12 12M18 6 6 18"/>'),cart:o('<path d="M3 4h2.4l2.2 11.2h9.9L19.5 7H6"/><circle cx="9.5" cy="19" r="1.6"/><circle cx="17" cy="19" r="1.6"/>'),chevron:o('<path d="m9 6 6 6-6 6"/>'),arrow:o('<path d="M5 12h14M13 6l6 6-6 6"/>'),star:o('<path d="m12 3.6 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.9-5.2 2.9 1-5.9L3.5 9.8l5.9-.8L12 3.6Z"/>'),spark:o('<path d="M12 3v5M12 16v5M3 12h5M16 12h5M6.2 6.2l3 3M14.8 14.8l3 3M17.8 6.2l-3 3M9.2 14.8l-3 3"/>')},v="https://discord.gg/KHsEBj6kG3",y=[{key:"minecraft",slug:"cat-minecraft.html",title:"اکانت ماینکرفت",short:"فول اکسس، جاوا و بدراک",image:"assets/img/products/p-minecraft-account.jpg",note:"تحویل تا ۴۸ ساعت"},{key:"donut",slug:"cat-donut.html",title:"پول دونات اس ام پی",short:"هر میلیون ۴٬۰۰۰ تومان",image:"assets/img/products/p-donut-million.jpg",note:"موجودی ۳۰۰ میلیون"},{key:"hypixel",slug:"cat-hypixel.html",title:"هایپیکسل و اسکای‌بلاک",short:"رنک، کوین و بوستر",image:"assets/img/products/p-hypixel.jpg",note:"تحویل ۱ تا ۲۴ ساعت"},{key:"design",slug:"cat-design.html",title:"خدمات فتوشاپ",short:"لوگو، بنر، تامنیل، اسکین",image:"assets/img/products/p-logo.jpg",note:"از ۲۰۰٬۰۰۰ تومان"},{key:"overlay",slug:"cat-overlay.html",title:"اورلی استریم",short:"پک کامل + فونت اختصاصی",image:"assets/img/products/p-overlay-good.jpg",note:"از ۲۴۵٬۰۰۰ تومان"},{key:"cosmetics",slug:"cat-cosmetics.html",title:"کازمتیک",short:"هاله، بال، کلاه",image:"assets/img/products/p-cosmetics.jpg",note:"قیمت دلاری آیتم"},{key:"cape",slug:"cat-cape.html",title:"کیپ اپتیفاین",short:"اختصاصی روی اکانت شما",image:"assets/img/products/p-cape.jpg",note:"۳۲۹٬۰۰۰ تومان"}],j=[{id:"mc-account",title:"اکانت ماینکرفت اقتصادی",category:"minecraft",image:"assets/img/products/p-minecraft-account.jpg",desc:"اکانت کامل با فول اکسس برای جاوا و بدراک؛ اطلاعات هم قابل تغییر است.",priceLabel:"قیمت",price:"۲٬۲۴۹٬۰۰۰ تومان",pills:[{text:"فول اکسس",tone:"green"},{text:"جاوا + بدراک"},{text:"تغییر اطلاعات",tone:"gold"}],href:"cat-minecraft.html",badge:"پرفروش"},{id:"mc-priority",title:"اکانت با اولویت تحویل",category:"minecraft",image:"assets/img/products/p-skin-pro.jpg",desc:"ثبت سفارش با اولویت در تیکت برای تحویل در کمترین زمان.",priceLabel:"قیمت",price:"۲٬۲۴۹٬۰۰۰ تومان",pills:[{text:"اولویت",tone:"green"},{text:"فول اکسس"}],href:"cat-minecraft.html"},{id:"donut-million",title:"پول دونات — هر میلیون",category:"donut",image:"assets/img/products/p-donut-million.jpg",desc:"حداقل خرید ۵۰ میلیون؛ موجودی فعلی سرور ۳۰۰ میلیون.",priceLabel:"هر میلیون",price:"۴٬۰۰۰ تومان",pills:[{text:"موجودی ۳۰۰M",tone:"green"},{text:"حداقل ۵۰M"},{text:"تحویل ۴۸h",tone:"gold"}],href:"cat-donut.html",badge:"تخفیف حجمی"},{id:"hypixel",title:"محصولات هایپیکسل",category:"hypixel",image:"assets/img/products/p-hypixel.jpg",desc:"همهٔ آیتم‌های موجود؛ قیمت وابسته به دلار روز.",priceLabel:"قیمت",price:"استعلام در تیکت",pills:[{text:"۱ تا ۲۴ ساعت",tone:"green"},{text:"امن و قانونی"}],href:"cat-hypixel.html",ask:!0},{id:"skyblock",title:"کوین اسکای‌بلاک — هر میلیون",category:"hypixel",image:"assets/img/products/p-skyblock.jpg",desc:"کوین اسکای‌بلاک با تحویل ۱ تا ۷۲ ساعت.",priceLabel:"هر میلیون",price:"۶٬۰۰۰ تومان",pills:[{text:"۷۲ ساعت",tone:"green"},{text:"قیمت میلیونی"}],href:"cat-hypixel.html"},{id:"logo",title:"طراحی لوگو",category:"design",image:"assets/img/products/p-logo.jpg",desc:"لوگوی اختصاصی برای سرور یا کانال شما؛ سه پیشنهاد اولیه.",priceLabel:"قیمت",price:"۳۰۰٬۰۰۰ تومان",pills:[{text:"اختصاصی",tone:"green"}],href:"cat-design.html"},{id:"banner-simple",title:"بنر ساده",category:"design",image:"assets/img/products/p-logo.jpg",desc:"بنر مناسب دیسکورد و شبکه‌های اجتماعی.",priceLabel:"قیمت",price:"۳۵۰٬۰۰۰ تومان",pills:[{text:"ساده"}],href:"cat-design.html"},{id:"banner-pro",title:"بنر حرفه‌ای",category:"design",image:"assets/img/products/p-logo.jpg",desc:"نسخهٔ کامل با جزئیات و بازنگری بیشتر.",priceLabel:"قیمت",price:"۵۰۰٬۰۰۰ تومان",pills:[{text:"حرفه‌ای",tone:"green"}],href:"cat-design.html"},{id:"thumbnail-simple",title:"تامنیل یوتیوب (ساده)",category:"design",image:"assets/img/products/p-logo.jpg",desc:"تامنیل کلیک‌خور برای ویدیوهای گیمینگ.",priceLabel:"قیمت",price:"۲۰۰٬۰۰۰ تومان",pills:[{text:"ساده"}],href:"cat-design.html"},{id:"thumbnail-pro",title:"تامنیل یوتیوب (حرفه‌ای)",category:"design",image:"assets/img/products/p-logo.jpg",desc:"نسخهٔ حرفه‌ای با ترکیب‌بندی قوی‌تر.",priceLabel:"قیمت",price:"۳۰۰٬۰۰۰ تومان",pills:[{text:"حرفه‌ای",tone:"green"}],href:"cat-design.html"},{id:"skin-simple",title:"اسکین ماینکرفت (ساده)",category:"design",image:"assets/img/products/p-skin-pro.jpg",desc:"اسکین اختصاصی آمادهٔ آپلود.",priceLabel:"قیمت",price:"۲۴۵٬۰۰۰ تومان",pills:[{text:"ساده"}],href:"cat-design.html"},{id:"skin-pro",title:"اسکین ماینکرفت (حرفه‌ای)",category:"design",image:"assets/img/products/p-skin-pro.jpg",desc:"اسکین با جزئیات و سایه‌پردازی بیشتر.",priceLabel:"قیمت",price:"۳۰۰٬۰۰۰ تومان",pills:[{text:"حرفه‌ای",tone:"green"}],href:"cat-design.html"},{id:"anime-art",title:"انیمه‌آرت",category:"design",image:"assets/img/products/p-anime.jpg",desc:"آرت انیمه‌استایل در سه سطح کیفیت.",priceLabel:"از",price:"۲۵۰٬۰۰۰ تومان",pills:[{text:"۳ سطح",tone:"gold"}],href:"cat-design.html"},{id:"overlay-good",title:"اورلی استریم — کیفیت خوب",category:"overlay",image:"assets/img/products/p-overlay-good.jpg",desc:"پک اورلی شامل فریم وب‌کم، چت‌باکس و هشدارها.",priceLabel:"قیمت",price:"۲۴۵٬۰۰۰ تومان",pills:[{text:"کیفیت خوب"}],href:"cat-overlay.html"},{id:"overlay-best",title:"اورلی استریم — کیفیت عالی",category:"overlay",image:"assets/img/products/p-overlay-good.jpg",desc:"نسخهٔ کامل و پرجزئیات با هماهنگی کامل با برند شما.",priceLabel:"قیمت",price:"۳۰۰٬۰۰۰ تومان",pills:[{text:"کیفیت عالی",tone:"green"}],href:"cat-overlay.html"},{id:"font-pack",title:"پک فونت اختصاصی",category:"overlay",image:"assets/img/products/p-font.jpg",desc:"پک فونت فارسی/لاتین مناسب اورلی و تامنیل.",priceLabel:"قیمت",price:"۱۰۰٬۰۰۰ تومان",pills:[{text:"پک فونت"}],href:"cat-overlay.html"},{id:"cosmetics",title:"کازمتیک کلاینت‌های ماینکرفت",category:"cosmetics",image:"assets/img/products/p-cosmetics.jpg",desc:"همهٔ کلاینت‌ها؛ قیمت بر اساس دلاری بودن آیتم.",priceLabel:"قیمت",price:"استعلام در تیکت",pills:[{text:"همهٔ کلاینت‌ها",tone:"green"},{text:"دلاری",tone:"gold"}],href:"cat-cosmetics.html",ask:!0},{id:"cape",title:"کیپ اپتیفاین",category:"cape",image:"assets/img/products/p-cape.jpg",desc:"کیپ اختصاصی روی اکانت شما؛ برای همهٔ بازیکن‌های سرور قابل مشاهده است.",priceLabel:"قیمت",price:"۳۲۹٬۰۰۰ تومان",pills:[{text:"اختصاصی",tone:"green"},{text:"۱ تا ۷۲ ساعت",tone:"gold"}],href:"cat-cape.html"}],M=[{slug:"blog-minecraft-account.html",title:"راهنمای کامل خرید اکانت ماینکرفت",desc:"تفاوت اکانت فول اکسس و اکانت معمولی، ریسک‌ها و چک‌لیست قبل از خرید.",image:"assets/img/blog-account.jpg",tag:"راهنمای خرید",time:"۶ دقیقه"},{slug:"blog-donut-smp.html",title:"اقتصاد پول دونات اس ام پی چطور کار می‌کند؟",desc:"قیمت هر میلیون، حداقل خرید و بهترین زمان برای خرید حجم بالا.",image:"assets/img/blog-donut.jpg",tag:"دونات اس ام پی",time:"۵ دقیقه"},{slug:"blog-stream-overlay.html",title:"چک‌لیست اورلی استریم حرفه‌ای",desc:"چه اجزایی یک پک اورلی کامل باید داشته باشد و چطور با برند شما هماهنگ شود.",image:"assets/img/blog-overlay.jpg",tag:"استریم",time:"۴ دقیقه"}],C=[{q:"چطور سفارش ثبت کنم؟",a:"وارد سرور دیسکورد کینیوا شاپ شوید، در کانال تیکت یک تیکت باز کنید و محصول مورد نظر را بنویسید. سفارش شما در صف قرار می‌گیرد و زمان تحویل اعلام می‌شود."},{q:"پرداخت چگونه انجام می‌شود؟",a:"همهٔ پرداخت‌ها ریالی و داخل ایران انجام می‌شود؛ نیازی به کارت خارجی یا رمزارز ندارید. فاکتور و رسید هم ارائه می‌شود."},{q:"زمان تحویل چقدر است؟",a:"اکانت ماینکرفت تا ۴۸ ساعت، محصولات هایپیکسل ۱ تا ۲۴ ساعت، اسکای‌بلاک تا ۷۲ ساعت و خدمات طراحی بین ۱ تا ۳ روز کاری."},{q:"اگر سفارش انجام نشود چه می‌شود؟",a:"اگر به هر دلیلی تحویل انجام نشود، مبلغ به‌صورت کامل بازگردانده می‌شود. شرایط در صفحهٔ ضمانت کامل توضیح داده شده است."}],B=[{href:"index.html",label:"خانه",key:"home"},{href:"products.html",label:"محصولات",key:"products"},{href:"prices.html",label:"قیمت‌ها",key:"prices"},{href:"guarantee.html",label:"ضمانت",key:"guarantee"},{href:"blog.html",label:"وبلاگ",key:"blog"},{href:"about.html",label:"درباره ما",key:"about"},{href:"contact.html",label:"تماس",key:"contact"}],Z=()=>`
<div class="mega" role="menu">
  <div class="mega-grid">
    ${y.map(s=>`<a class="mega-item" href="${s.slug}" role="menuitem">
        <img src="${s.image}" alt="" loading="lazy" width="120" height="120">
        <span><b>${s.title}</b><i>${s.short}</i></span>
      </a>`).join("")}
  </div>
  <div class="mega-foot">
    <span>۱۷ محصول در ۷ دسته</span>
    <a href="products.html">دیدن کاتالوگ کامل ${c.chevron}</a>
  </div>
</div>`,H=s=>`
<div class="topstrip">
  <div class="wrap ts-in">
    <div class="ts-msg"><i class="dotlive"></i> پشتیبانی آنلاین در دیسکورد · پاسخ‌گویی لحظه‌ای</div>
    <div class="ts-links">
      <span>${c.shield} ضمانت بازگشت وجه</span>
      <span>${c.card} پرداخت ریالی</span>
      <a href="${v}" target="_blank" rel="noopener">${c.discord} ورود به دیسکورد</a>
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
      ${c.search}
      <input id="searchInput" type="search" placeholder="جستجوی محصول… مثلاً پول دونات، اورلی، اسکین" aria-label="جستجو">
      <div class="search-pop" id="searchPop" hidden></div>
    </form>

    <div class="head-actions">
      <a class="btn btn-gold btn-sm head-cta" href="${v}" target="_blank" rel="noopener">${c.discord} ثبت سفارش</a>
      <button class="burger" id="burger" aria-label="منو" aria-expanded="false">${c.menu}</button>
    </div>
  </div>

  <nav class="main-nav" aria-label="منوی اصلی">
    <div class="wrap nav-in">
      <ul>
        ${B.map(a=>{const t=a.key===s?' class="act"':"";return a.key==="products"?`<li class="has-mega"><a href="${a.href}"${t}>${a.label} ${c.chevron}</a>${Z()}</li>`:`<li><a href="${a.href}"${t}>${a.label}</a></li>`}).join("")}
      </ul>
      <span class="nav-note">${c.bolt} تحویل ۱ تا ۴۸ ساعت</span>
    </div>
  </nav>
</header>

<div class="drawer" id="drawer" hidden>
  <div class="drawer-panel">
    <div class="drawer-head">
      <b>منو</b>
      <button id="drawerClose" aria-label="بستن">${c.close}</button>
    </div>
    <a href="index.html">خانه</a>
    <a href="products.html">همهٔ محصولات</a>
    ${y.map(a=>`<a href="${a.slug}">${a.title}</a>`).join("")}
    <a href="prices.html">قیمت‌ها</a>
    <a href="process.html">مراحل سفارش</a>
    <a href="guarantee.html">ضمانت</a>
    <a href="faq.html">سوالات متداول</a>
    <a href="blog.html">وبلاگ</a>
    <a href="about.html">درباره ما</a>
    <a href="contact.html">تماس</a>
    <a class="btn btn-gold" href="${v}" target="_blank" rel="noopener">${c.discord} ورود به دیسکورد</a>
  </div>
</div>`,z=()=>`
<footer class="site-foot">
  <div class="wrap foot-grid">
    <div class="fbrand">
      <a class="brand" href="index.html">
        <img src="assets/img/logo.png" alt="کینیوا شاپ" width="52" height="52">
        <span class="brand-txt"><b>کینیوا <em>شاپ</em></b><i>KINIWA SHOP</i></span>
      </a>
      <p>فروشگاه گیمینگ کینیوا؛ اکانت ماینکرفت، پول سرورها، خدمات طراحی، اورلی استریم، کازمتیک و کیپ اپتیفاین — با پرداخت ریالی و ضمانت بازگشت وجه.</p>
      <div class="fsocial">
        <a href="${v}" target="_blank" rel="noopener" aria-label="دیسکورد">${c.discord}</a>
      </div>
    </div>
    <div class="fcol">
      <h4>محصولات</h4>
      ${y.map(s=>`<a href="${s.slug}">${s.title}</a>`).join("")}
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
    <span>${c.shield} ضمانت اصالت</span>
    <span>${c.card} پرداخت ریالی</span>
    <span>${c.bolt} تحویل سریع</span>
    <span>${c.clock} پشتیبانی ۲۴/۷</span>
  </div>
  <div class="foot-bottom"><div class="wrap fb-in">
    <span>© ۱۴۰۵ کینیوا شاپ — تمام حقوق محفوظ است.</span>
    <span>ساخته‌شده با ❤ برای انجمن کینیوا</span>
  </div></div>
  <div class="foot-mark" aria-hidden="true">KINIWA</div>
</footer>
<div class="mobar"><a class="btn btn-gold" href="${v}" target="_blank" rel="noopener">${c.discord} ثبت سفارش در دیسکورد</a></div>`,L=s=>`
<div id="progress"></div>
${H(s)}
<main id="main">`,n=(s,a=document)=>a.querySelector(s),g=(s,a=document)=>Array.from(a.querySelectorAll(s));function E(){const s=n("#progress");if(!s)return;const a=()=>{const t=document.documentElement,i=t.scrollHeight-t.clientHeight;s.style.width=`${i>0?t.scrollTop/i*100:0}%`};addEventListener("scroll",a,{passive:!0}),addEventListener("resize",a),a()}function q(){const s=g(".rv");if(!("IntersectionObserver"in window)||s.length===0){s.forEach(t=>t.classList.add("in"));return}const a=new IntersectionObserver(t=>{t.forEach(i=>{i.isIntersecting&&(i.target.classList.add("in"),a.unobserve(i.target))})},{rootMargin:"0px 0px -8% 0px",threshold:.08});s.forEach((t,i)=>{t.style.transitionDelay=`${Math.min(i%6,5)*45}ms`,a.observe(t)})}function A(){const s=n("#siteHead"),a=()=>{s==null||s.classList.toggle("stuck",window.scrollY>24)};addEventListener("scroll",a,{passive:!0}),a();const t=n("#burger"),i=n("#drawer"),l=n("#drawerClose"),e=d=>{i&&(i.hidden=!d,t==null||t.setAttribute("aria-expanded",String(d)),document.body.classList.toggle("locked",d))};t==null||t.addEventListener("click",()=>e((i==null?void 0:i.hidden)??!0)),l==null||l.addEventListener("click",()=>e(!1)),i==null||i.addEventListener("click",d=>{d.target===i&&e(!1)}),document.addEventListener("keydown",d=>{d.key==="Escape"&&e(!1)})}function _(){const s=n("#searchInput"),a=n("#searchPop"),t=n("#headSearch");if(!s||!a)return;const i=l=>{const e=l.trim();if(e.length<2){a.hidden=!0,a.innerHTML="";return}const d=j.filter(p=>p.title.includes(e)||p.desc.includes(e)||p.price.includes(e)).slice(0,6);a.hidden=!1,a.innerHTML=d.length?d.map(p=>`<a href="${p.href}" class="sp-item">
              <img src="${p.image}" alt="" width="44" height="44" loading="lazy">
              <span><b>${p.title}</b><i>${p.price}</i></span></a>`).join(""):'<div class="sp-empty">چیزی پیدا نشد — در تیکت دیسکورد بپرس.</div>'};s.addEventListener("input",()=>i(s.value)),s.addEventListener("focus",()=>i(s.value)),t==null||t.addEventListener("submit",l=>{l.preventDefault();const e=a.querySelector("a");e instanceof HTMLAnchorElement&&(location.href=e.href)}),document.addEventListener("click",l=>{l.target instanceof Node&&(t!=null&&t.contains(l.target)||(a.hidden=!0))})}function K(){document.addEventListener("pointermove",s=>{const a=s.target;if(!(a instanceof Element))return;const t=a.closest(".pcard,.card,.mega-item,.cat-tile");if(!t)return;const i=t.getBoundingClientRect();t.style.setProperty("--mx",`${s.clientX-i.left}px`),t.style.setProperty("--my",`${s.clientY-i.top}px`)},{passive:!0})}function G(){const s=n("#filters"),a=n("#grid");!s||!a||s.addEventListener("click",t=>{const i=t.target.closest("button[data-f]");if(!i)return;g("button",s).forEach(e=>e.classList.remove("act")),i.classList.add("act");const l=i.dataset.f??"all";g(".pcard",a).forEach(e=>{const d=l==="all"||e.dataset.cat===l;e.style.display=d?"":"none"})})}function S(){const s=g("[data-count]");if(!s.length)return;const a=t=>t.toLocaleString("fa-IR");s.forEach(t=>{const i=Number(t.dataset.count??0);let l=0;const e=Math.max(1,Math.round(i/28)),d=setInterval(()=>{l=Math.min(i,l+e),t.textContent=a(l),l>=i&&clearInterval(d)},28)})}function I(){var e,d;const s=n("#heroSlider");if(!s)return;const a=g(".slide",s),t=g("#heroDots i");if(a.length<2)return;let i=0;const l=p=>{i=(p+a.length)%a.length,a.forEach((m,f)=>m.classList.toggle("on",f===i)),t.forEach((m,f)=>m.classList.toggle("on",f===i))};t.forEach((p,m)=>p.addEventListener("click",()=>l(m))),(e=n('[data-slide="prev"]'))==null||e.addEventListener("click",()=>l(i-1)),(d=n('[data-slide="next"]'))==null||d.addEventListener("click",()=>l(i+1)),setInterval(()=>l(i+1),5200)}function P(){E(),q(),A(),_(),K(),G(),S(),I()}const O={404:`<section class="e404"><div class="wrap-narrow">
  <div class="art404"><svg class="e404art" width="676" height="260" viewBox="0 0 676 260" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip404)"><path d="M214.999 154.986V205.896H189.017V239.315H122.949V205.896H9V154.986L86.5745 20.6849H160.066L81.7493 154.986H122.949V115.633H189.017V154.986H214.999Z" fill="currentColor"/><path d="M667 154.986V205.896H641.018V239.315H574.95V205.896H461.001V154.986L538.575 20.6849H612.067L533.75 154.986H574.95V115.633H641.018V154.986H667Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M279.5 28.6747C315.7 7.77505 360.299 7.77504 396.499 28.6747C432.699 49.5746 454.999 88.1999 454.999 130C454.999 171.8 432.699 210.425 396.499 231.325C360.299 252.225 315.7 252.225 279.5 231.325C243.3 210.425 221 171.8 221 130C221 88.1999 243.3 49.5746 279.5 28.6747ZM340 51.3231C338.763 50.6086 337.238 50.6087 336 51.3231L270.863 88.9295C269.626 89.644 268.863 90.9644 268.863 92.3934V167.606C268.863 169.035 269.626 170.356 270.863 171.07L336 208.677C337.238 209.391 338.762 209.391 340 208.677L405.136 171.07C406.373 170.356 407.136 169.035 407.136 167.606V92.3934C407.136 90.9644 406.373 89.644 405.136 88.9295L340 51.3231Z" fill="currentColor"/></g><defs><clipPath id="clip404"><rect width="676" height="260" fill="white"/></clipPath></defs></svg></div>
  <h1 style="margin-top:1.4rem">این صفحه پیدا نشد</h1>
  <p class="lead" style="margin-top:.8rem">شاید آدرس عوض شده باشد. از این‌جا ادامه بده:</p>
  <div class="hero-btns" style="justify-content:center">
    <a class="btn btn-gold" href="index.html">صفحهٔ اصلی</a>
    <a class="btn btn-ghost" href="products.html">محصولات</a>
  </div>
</div></section>`,about:`<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><a href="about.html">درباره ما</a></div></div>

<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><span style="color:#c3c9d6">درباره ما</span></div></div>
<section class="phero"><div class="wrap">
  <span class="eyebrow">دربارهٔ کینیوا</span><h1>یک انجمن، یک فروشگاه، یک استاندارد</h1>
  <p class="lead" style="max-width:70ch">کینیوا شاپ فروشگاه رسمی انجمن کینیوا است؛ جایی که بازیکن‌ها اکانت، پول سرور، خدمات طراحی و کازمتیک را
  با قیمت شفاف و پشتیبانی واقعی تهیه می‌کنند.</p>
  <div class="badges"><span class="pill g">۷۶۳ عضو</span><span class="pill y">پشتیبانی ۲۴/۷</span><span class="pill b">پرداخت ریالی</span></div>
</div></section>
<section style="padding-top:0"><div class="wrap"><div class="statsband rv">
  <div class="stat"><b data-count="763">۰</b><span>عضو انجمن</span></div>
  <div class="stat"><b data-count="30">۰</b><span>آنلاین</span></div>
  <div class="stat"><b data-count="18">۰</b><span>محصول فعال</span></div>
  <div class="stat"><b data-count="7">۰</b><span>دستهٔ خدمت</span></div>
</div></div></section>
<section><div class="wrap grid g2">
  <div><h3 class="sub">ما چه می‌کنیم؟</h3>
    <p class="lead" style="font-size:.95rem">از اکانت ماینکرفت و پول سرور دونات اس ام پی تا کوین هایپیکسل و اسکای‌بلاک،
    و از طراحی لوگو و بنر تا اورلی استریم، کازمتیک و کیپ اپتیفاین. تمرکز ما روی سه چیز است: قیمت شفاف، زمان تحویل مشخص و پشتیبانی‌ای که رها نمی‌کند.</p>
    <div style="margin-top:1.2rem"><div class="note green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg><div>کینیوا با شعار کار نمی‌کند؛ تعهد کتبی می‌دهد. اگر سفارشی انجام نشود، مبلغ برمی‌گردد.</div></div></div>
  </div>
  <div><h3 class="sub">اصول کاری</h3>
    <div class="grid" style="gap:.8rem">
      <div class="card"><h3>۱. قیمت روی سایت</h3><p>قیمت‌ها پنهان نیست؛ همان چیزی است که می‌بینی.</p></div>
      <div class="card"><h3>۲. زمان تحویل واقعی</h3><p>بازهٔ تحویل هر محصول واقع‌بینانه اعلام می‌شود.</p></div>
      <div class="card"><h3>۳. پاسخ در دیسکورد</h3><p>همهٔ ارتباطات در یک جا و قابل پیگیری است.</p></div>
    </div>
  </div>
</div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay.jpg" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>به انجمن کینیوا بپیوند</h2>
    <p>۷۶۳ عضو از قبل آنجا هستند؛ خوش آمدی.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد کینیوا</a>
      <a class="btn btn-ghost" href="products.html">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,"blog-donut-smp":`<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><a href="blog.html">وبلاگ</a><span>/</span><span style="color:#c3c9d6">پول دونات اس ام پی چطور کار می‌کند؟</span></div></div>

<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><a href="blog.html">وبلاگ</a><span>/</span><span style="color:#c3c9d6">پول دونات اس ام پی چطور کار می‌کند؟</span></div></div>
<section class="phero"><div class="wrap-narrow" style="text-align:center">
  <span class="eyebrow">دونات اس ام پی</span><h1 style="font-size:clamp(1.6rem,3.4vw,2.5rem)">پول دونات اس ام پی چطور کار می‌کند؟</h1>
  <p class="lead" style="margin-top:.8rem">از موجودی سرور تا قیمت هر میلیون؛ همه‌چیز دربارهٔ اقتصاد دونات اس ام پی.</p>
  <div class="badges" style="justify-content:center"><span class="pill">۵ دقیقه مطالعه</span><span class="pill y">کینیوا شاپ</span></div>
</div></section>
<section style="padding-top:0"><div class="wrap"><div class="frame" style="border-radius:22px;overflow:hidden;border:1px solid var(--line-2)">
  <img src="assets/img/02-donutsmp.jpg" alt="پول دونات اس ام پی چطور کار می‌کند؟" style="aspect-ratio:21/9;object-fit:cover;width:100%" width="1600" height="700"></div></div></section>
<section style="padding-top:0"><div class="wrap-narrow"><div class="article">
<p>اقتصاد سرورهای SMP یکی از جذاب‌ترین بخش‌های بازی است و دونات اس ام پی هم از این قاعده مستثنا نیست.
در این مطلب می‌گوییم «پول دونات» چیست، چطور قیمت‌گذاری می‌شود و چه نکته‌ای قبل از خرید باید بدانی.</p>
<h2>پول دونات اس ام پی چیست؟</h2>
<p>در سرورهای SMP، پول درون‌بازی عنصر اصلی معامله است. بازیکن‌ها با پول، آیتم، زمین یا خدمات می‌خرند.
دونات اس ام پی هم یک سرور محبوب با اقتصاد فعال است و «پول» آن به‌صورت میلیونی معامله می‌شود.</p>
<h2>قیمت چطور محاسبه می‌شود؟</h2>
<p>قیمت پول دونات بر اساس «هر میلیون» حساب می‌شود. در کینیوا شاپ این نرخ ۴٬۰۰۰ تومان به ازای هر میلیون است،
یعنی مثلاً ۱۰۰ میلیون می‌شود ۴۰۰٬۰۰۰ تومان. حداقل خرید هم ۵۰ میلیون تعیین شده است.</p>
<h2>موجودی سرور چه معنایی دارد؟</h2>
<p>هر فروشنده‌ای مقدار محدودی پول در سرور دارد. موجودی فعلی کینیوا ۳۰۰ میلیون است و بعد از اتمام مجدد شارژ می‌شود.
اگر مقدار زیادی می‌خواهی، قبل از پرداخت موجودی را در تیکت چک کن.</p>
<h2>چرا تحویل ۴۸ ساعت طول می‌کشد؟</h2>
<p>انتقال پول در بازی زمان و هماهنگی می‌خواهد؛ مخصوصاً برای مقدارهای بالا. زمان اعلام‌شده واقع‌بینانه است تا سفارش نیمه‌کاره نماند.</p>
<h2>نکات مهم قبل از خرید</h2>
<ul>
  <li>مقدار دقیق مورد نیازت را مشخص کن.</li>
  <li>قوانین سرور دربارهٔ معاملهٔ پول را بدان (بعضی سرورها محدودیت دارند).</li>
  <li>ریسک‌های درون‌بازی مثل وایپ یا تغییر اقتصاد سرور را در نظر بگیر.</li>
  <li>همیشه از فروشندهٔ شناخته‌شده و با پشتیبانی خرید کن.</li>
</ul>
<h2>جمع‌بندی</h2>
<p>اگر مقدار مشخصی پول دونات می‌خواهی، از محاسبه‌گر صفحهٔ محصول استفاده کن؛ قیمت را همان لحظه می‌بینی و بعد در دیسکورد سفارش می‌دهی.</p></div>
  <div style="margin-top:2rem"><div class="note "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg><div>این مطلب راهنمای عمومی است؛ قیمت‌ها و شرایط دقیق را همیشه در صفحهٔ محصول یا تیکت دیسکورد بررسی کن.</div></div></div>
</div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay.jpg" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>سفارش خودت را ثبت کن</h2>
    <p>در دیسکورد تیکت بزن و قیمت و زمان تحویل را بگیر.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد کینیوا</a>
      <a class="btn btn-ghost" href="products.html">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,"blog-minecraft-account":`<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><a href="blog.html">وبلاگ</a><span>/</span><span style="color:#c3c9d6">راهنمای کامل خرید اکانت ماینکرفت</span></div></div>

<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><a href="blog.html">وبلاگ</a><span>/</span><span style="color:#c3c9d6">راهنمای کامل خرید اکانت ماینکرفت</span></div></div>
<section class="phero"><div class="wrap-narrow" style="text-align:center">
  <span class="eyebrow">راهنمای خرید</span><h1 style="font-size:clamp(1.6rem,3.4vw,2.5rem)">راهنمای کامل خرید اکانت ماینکرفت</h1>
  <p class="lead" style="margin-top:.8rem">قبل از خرید اکانت، این ۶ نکته را بدانید تا انتخاب درستی داشته باشید.</p>
  <div class="badges" style="justify-content:center"><span class="pill">۶ دقیقه مطالعه</span><span class="pill y">کینیوا شاپ</span></div>
</div></section>
<section style="padding-top:0"><div class="wrap"><div class="frame" style="border-radius:22px;overflow:hidden;border:1px solid var(--line-2)">
  <img src="assets/img/01-minecraft.jpg" alt="راهنمای کامل خرید اکانت ماینکرفت" style="aspect-ratio:21/9;object-fit:cover;width:100%" width="1600" height="700"></div></div></section>
<section style="padding-top:0"><div class="wrap-narrow"><div class="article">
<p>خرید اکانت ماینکرفت یکی از رایج‌ترین سفارش‌های فروشگاه‌های گیمینگ است، اما همهٔ اکانت‌ها یکسان نیستند.
در این راهنما ۶ نکته‌ای را می‌گوییم که قبل از پرداخت باید بررسی کنی تا بعداً به مشکل نخوری.</p>
<h2>۱. اکانت فول اکسس یعنی چه؟</h2>
<p>«فول اکسس» یعنی دسترسی کامل به اکانت؛ نه اکانت اشتراکی و نه محدود. در اکانت فول اکسس می‌توانی وارد شوی،
اطلاعات را تغییر دهی و مطمئن باشی که مالکیت واقعی داری. اگر فروشنده‌ای اصرار دارد «اکانت اشتراکی» بفروشد،
بدان که این مدل ریسک‌های خودش را دارد و مناسب همه نیست.</p>
<h2>۲. جاوا یا بدراک؟</h2>
<p>ماینکرفت دو نسخهٔ اصلی دارد: جاوا (برای PC) و بدراک (موبایل، کنسول و ویندوز). بعضی اکانت‌ها هر دو را دارند
و بعضی فقط یکی. قبل از خرید مشخص کن روی چه پلتفرمی بازی می‌کنی؛ در کینیوا شاپ اکانت‌های اقتصادی هر دو نسخه را پوشش می‌دهند.</p>
<h2>۳. امکان تغییر اطلاعات</h2>
<p>اگر اکانت را می‌خری، باید بتوانی ایمیل و رمز را عوض کنی. اکانتی که اطلاعاتش قابل تغییر نباشد، عملاً مال تو نیست.
این را قبل از پرداخت بپرس.</p>
<h2>۴. زمان تحویل را بپرس</h2>
<p>تحویل اکانت فوری نیست و به موجودی و بررسی‌ها بستگی دارد. در کینیوا این زمان حداکثر ۴۸ ساعت است و در صفحهٔ محصول هم نوشته شده.
هر فروشنده‌ای که «فوری» می‌گوید ولی زمان دقیق اعلام نمی‌کند، جای سؤال دارد.</p>
<h2>۵. ضمانت و پشتیبانی</h2>
<p>بهترین قیمت بدون پشتیبانی ارزش ندارد. مطمئن شو که فروشنده بعد از تحویل هم پاسخ می‌دهد و در صورت مشکل،
تعویض یا بازگشت وجه انجام می‌دهد.</p>
<h2>۶. مقایسهٔ قیمت، نه فقط ارزان‌ترین</h2>
<p>قیمت اکانت ماینکرفت در بازار بازهٔ مشخصی دارد. اگر قیمتی خیلی پایین‌تر از بازار است، احتمالاً یکی از موارد بالا (فول اکسس،
قابلیت تغییر اطلاعات یا پشتیبانی) کامل نیست.</p>
<h2>جمع‌بندی</h2>
<p>اکانت ماینکرفت اقتصادی کینیوا شاپ با فول اکسس، پشتیبانی از جاوا و بدراک، امکان تغییر اطلاعات و تحویل حداکثر ۴۸ ساعت
عرضه می‌شود. اگر سؤالی داری، قبل از خرید در دیسکورد تیکت بزن.</p></div>
  <div style="margin-top:2rem"><div class="note "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg><div>این مطلب راهنمای عمومی است؛ قیمت‌ها و شرایط دقیق را همیشه در صفحهٔ محصول یا تیکت دیسکورد بررسی کن.</div></div></div>
</div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay.jpg" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>سفارش خودت را ثبت کن</h2>
    <p>در دیسکورد تیکت بزن و قیمت و زمان تحویل را بگیر.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد کینیوا</a>
      <a class="btn btn-ghost" href="products.html">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,"blog-stream-overlay":`<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><a href="blog.html">وبلاگ</a><span>/</span><span style="color:#c3c9d6">اورلی استریم حرفه‌ای به چه چیزهایی نیاز دارد؟</span></div></div>

<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><a href="blog.html">وبلاگ</a><span>/</span><span style="color:#c3c9d6">اورلی استریم حرفه‌ای به چه چیزهایی نیاز دارد؟</span></div></div>
<section class="phero"><div class="wrap-narrow" style="text-align:center">
  <span class="eyebrow">استریم</span><h1 style="font-size:clamp(1.6rem,3.4vw,2.5rem)">اورلی استریم حرفه‌ای به چه چیزهایی نیاز دارد؟</h1>
  <p class="lead" style="margin-top:.8rem">چک‌لیست کامل اجزای یک پک اورلی تمیز و حرفه‌ای برای استریم.</p>
  <div class="badges" style="justify-content:center"><span class="pill">۴ دقیقه مطالعه</span><span class="pill y">کینیوا شاپ</span></div>
</div></section>
<section style="padding-top:0"><div class="wrap"><div class="frame" style="border-radius:22px;overflow:hidden;border:1px solid var(--line-2)">
  <img src="assets/img/05-overlay.jpg" alt="اورلی استریم حرفه‌ای به چه چیزهایی نیاز دارد؟" style="aspect-ratio:21/9;object-fit:cover;width:100%" width="1600" height="700"></div></div></section>
<section style="padding-top:0"><div class="wrap-narrow"><div class="article">
<p>اورلی استریم فقط چند تا کادر روی تصویر نیست؛ ترکیبی است از هویت بصری، خوانایی و نظم.
در این مقاله چک‌لیست اجزای یک پک اورلی تمیز را مرور می‌کنیم.</p>
<h2>۱. فریم وب‌کم</h2>
<p>اولین چیزی که بیننده می‌بیند. فریم باید با لوگو و رنگ برندت هماهنگ باشد و صورت را نپوشاند.
حاشیهٔ ضخیم و رنگ‌های شلوغ، تصویر را کوچک‌تر نشان می‌دهد.</p>
<h2>۲. چت‌باکس و دانیت</h2>
<p>چت باید خوانا باشد: فونت واضح، پس‌زمینهٔ نیمه‌شفاف و ارتفاع کافی. المان‌های دانیت و فالو باید دیده شوند ولی کل صفحه را نپوشانند.</p>
<h2>۳. هشدارها و انیمیشن‌ها</h2>
<p>هشدار دنبال‌کننده، ساب و دونیت باید کوتاه و تمیز باشند. انیمیشن طولانی، بیننده را از محتوا دور می‌کند.</p>
<h2>۴. تایپوگرافی</h2>
<p>یک خانوادهٔ فونت کافی است. اگر استریم فارسی است، فونت باید فارسی را کامل پشتیبانی کند؛ پک فونت اختصاصی همین کار را می‌کند.</p>
<h2>۵. پالت رنگ</h2>
<p>سه رنگ کافی است: یک رنگ اصلی، یک رنگ تأکید و یک رنگ خنثی. اورلی‌های شلوغ با ۷ رنگ، آماتور به‌نظر می‌رسند.</p>
<h2>۶. تست در سناریوی واقعی</h2>
<p>قبل از نهایی‌کردن، اورلی را روی تصویر بازی تست کن. چیزی که روی پس‌زمینهٔ خالی خوب است، همیشه روی گیم‌پلی خوب نیست.</p>
<h2>جمع‌بندی</h2>
<p>اورلی کینیوا در دو کیفیت (خوب ۲۴۵٬۰۰۰ و عالی ۳۰۰٬۰۰۰ تومان) ارائه می‌شود و پک فونت هم به‌صورت جداگانه ۱۰۰٬۰۰۰ تومان است.
برای سفارش، در دیسکورد تیکت بزن.</p></div>
  <div style="margin-top:2rem"><div class="note "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg><div>این مطلب راهنمای عمومی است؛ قیمت‌ها و شرایط دقیق را همیشه در صفحهٔ محصول یا تیکت دیسکورد بررسی کن.</div></div></div>
</div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay.jpg" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>سفارش خودت را ثبت کن</h2>
    <p>در دیسکورد تیکت بزن و قیمت و زمان تحویل را بگیر.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد کینیوا</a>
      <a class="btn btn-ghost" href="products.html">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,blog:`<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><a href="blog.html">وبلاگ</a></div></div>

<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><span style="color:#c3c9d6">وبلاگ</span></div></div>
<section class="phero"><div class="wrap"><span class="eyebrow">وبلاگ کینیوا</span><h1>راهنماها و مقاله‌های گیمینگ</h1>
<p class="lead" style="max-width:70ch">چیزهایی که قبل از خرید باید بدانی؛ کوتاه، بدون حاشیه و از تجربهٔ خودمان.</p></div></section>
<section style="padding-top:0"><div class="wrap"><div class="grid g3"><a class="bcard rv" href="blog-minecraft-account.html">
  <img src="assets/img/01-minecraft.jpg" alt="راهنمای کامل خرید اکانت ماینکرفت" loading="lazy" width="1600" height="900">
  <div class="body"><div class="meta"><span>راهنمای خرید</span><span>۶ دقیقه</span></div>
  <h3>راهنمای کامل خرید اکانت ماینکرفت</h3><p>قبل از خرید اکانت، این ۶ نکته را بدانید تا انتخاب درستی داشته باشید.</p><span class="go">ادامهٔ مطلب ←</span></div></a><a class="bcard rv" href="blog-donut-smp.html">
  <img src="assets/img/02-donutsmp.jpg" alt="پول دونات اس ام پی چطور کار می‌کند؟" loading="lazy" width="1600" height="900">
  <div class="body"><div class="meta"><span>دونات اس ام پی</span><span>۵ دقیقه</span></div>
  <h3>پول دونات اس ام پی چطور کار می‌کند؟</h3><p>از موجودی سرور تا قیمت هر میلیون؛ همه‌چیز دربارهٔ اقتصاد دونات اس ام پی.</p><span class="go">ادامهٔ مطلب ←</span></div></a><a class="bcard rv" href="blog-stream-overlay.html">
  <img src="assets/img/05-overlay.jpg" alt="اورلی استریم حرفه‌ای به چه چیزهایی نیاز دارد؟" loading="lazy" width="1600" height="900">
  <div class="body"><div class="meta"><span>استریم</span><span>۴ دقیقه</span></div>
  <h3>اورلی استریم حرفه‌ای به چه چیزهایی نیاز دارد؟</h3><p>چک‌لیست کامل اجزای یک پک اورلی تمیز و حرفه‌ای برای استریم.</p><span class="go">ادامهٔ مطلب ←</span></div></a></div></div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay.jpg" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>سوالی دربارهٔ خرید داری؟</h2>
    <p>در دیسکورد بپرس؛ تیم کینیوا راهنمایی‌ات می‌کند.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد کینیوا</a>
      <a class="btn btn-ghost" href="products.html">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,"cat-cape":`<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><a href="products.html">محصولات</a><span>/</span><span style="color:#c3c9d6">کیپ اپتیفاین</span></div></div>
<!--hero--><section class="phero">
  <div class="wrap phero-grid">
    <div>
      <span class="eyebrow">کیپ اپتیفاین</span>
      <h1>کیپ اپتیفاین — ۳۲۹٬۰۰۰ تومان با تحویل ۱ تا ۷۲ ساعت</h1>
      <p class="lead" style="margin-top:1rem">کیپ اختصاصی اپتیفاین روی اکانت شما؛ در بازی برای همهٔ بازیکن‌های سرور قابل مشاهده است و با استایل خودت هماهنگ می‌شود.</p>
      <div class="badges"><span class="pill g">اختصاصی</span><span class="pill ">قابل مشاهده برای همه</span><span class="pill y">۱ تا ۷۲ ساعت</span></div>
      <div class="hero-btns">
        <a class="btn btn-gold" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ثبت سفارش در دیسکورد</a>
        <a class="btn btn-ghost" href="prices.html">دیدن جدول قیمت</a>
      </div>
      <div class="badges" style="margin-top:1.4rem"><span class="pill y" style="font-size:.9rem;padding:.5rem 1rem">قیمت: ۳۲۹٬۰۰۰ تومان</span></div>
    </div>
    <div class="frame"><img src="assets/img/07-cape-optifine.jpg" alt="کیپ اپتیفاین" width="1600" height="1000"></div>
  </div>
</section><section class="tight"><div class="wrap grid g2">
      <div><div class="kv"><div class="row"><span>محصول</span><b>کیپ اپتیفاین</b></div><div class="row"><span>قیمت</span><b>۳۲۹٬۰۰۰ تومان</b></div><div class="row"><span>زمان تحویل</span><b>۱ تا ۷۲ ساعت</b></div><div class="row"><span>قابل مشاهده برای</span><b>همهٔ بازیکن‌های سرور</b></div></div></div>
      <div class="note green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12 5 5L20 6"/></svg><div>کیپ به‌صورت اختصاصی روی اکانت شما اعمال می‌شود و در بازی برای سایر بازیکن‌ها نمایش داده می‌شود.</div></div>
    </div></section><section><div class="wrap"><div class="sec-hd"><span class="eyebrow">سوالات این محصول</span><h2 class="sec">پرسش‌های پرتکرار</h2></div><div class="faq "><details class="q" open><summary>کیپ روی چه اکانتی اعمال می‌شود؟</summary><p>روی اکانت خودتان؛ نیازی به تغییر اکانت نیست.</p></details><details class="q"><summary>تحویل چقدر طول می‌کشد؟</summary><p>۱ تا ۷۲ ساعت.</p></details><details class="q"><summary>کیپ را همه می‌بینند؟</summary><p>بله، برای همهٔ بازیکن‌هایی که اپتیفاین دارند قابل مشاهده است.</p></details><details class="q"><summary>اگر مشکلی پیش بیاید؟</summary><p>طبق ضمانت کینیوا پیگیری و در صورت نیاز تعویض می‌شود.</p></details></div></div></section>
<section><div class="wrap"><div class="sec-hd row"><div><span class="eyebrow">بیشتر ببین</span><h2 class="sec">محصولات مرتبط</h2></div>
<a class="btn btn-ghost btn-sm" href="products.html">همهٔ محصولات ←</a></div><div class="grid g3"><a class="cat rv" href="cat-minecraft.html">
  <img src="assets/img/01-minecraft.jpg" alt="اکانت ماینکرفت" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>اکانت ماینکرفت</h3><p>فول اکسس، جاوا و بدراک، تحویل تا ۴۸ ساعت</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-donut.html">
  <img src="assets/img/02-donutsmp.jpg" alt="پول دونات اس ام پی" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>پول دونات اس ام پی</h3><p>موجودی ۳۰۰ میلیون، هر میلیون ۴٬۰۰۰ تومان</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-hypixel.html">
  <img src="assets/img/03-hypixel.jpg" alt="هایپیکسل و اسکای‌بلاک" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>هایپیکسل و اسکای‌بلاک</h3><p>همهٔ محصولات هایپیکسل + کوین اسکای‌بلاک</p><span class="go">مشاهده ←</span></div></a></div></div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay.jpg" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>همین حالا سفارش بده</h2>
    <p>قیمت نهایی و زمان تحویل را در تیکت دیسکورد بگیر و سفارشت را نهایی کن.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد کینیوا</a>
      <a class="btn btn-ghost" href="products.html">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,"cat-cosmetics":`<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><a href="products.html">محصولات</a><span>/</span><span style="color:#c3c9d6">کازمتیک</span></div></div>
<!--hero--><section class="phero">
  <div class="wrap phero-grid">
    <div>
      <span class="eyebrow">کازمتیک</span>
      <h1>کازمتیک و کلاینت‌های ماینکرفت — قیمت بر اساس آیتم</h1>
      <p class="lead" style="margin-top:1rem">آیتم‌های کازمتیکی کلاینت‌های مختلف ماینکرفت؛ از کیپ و بال تا افکت‌های ویژه. قیمت بر اساس دلاری بودن آیتم و کلاینت انتخابی محاسبه می‌شود.</p>
      <div class="badges"><span class="pill g">همهٔ کلاینت‌ها</span><span class="pill y">قیمت دلاری آیتم</span><span class="pill b">استعلام در تیکت</span></div>
      <div class="hero-btns">
        <a class="btn btn-gold" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ثبت سفارش در دیسکورد</a>
        <a class="btn btn-ghost" href="prices.html">دیدن جدول قیمت</a>
      </div>
      <div class="badges" style="margin-top:1.4rem"><span class="pill y" style="font-size:.9rem;padding:.5rem 1rem">قیمت: استعلام در تیکت</span></div>
    </div>
    <div class="frame"><img src="assets/img/06-cosmetics.jpg" alt="کازمتیک" width="1600" height="1000"></div>
  </div>
</section><section class="tight"><div class="wrap grid g2">
      <div><div class="kv"><div class="row"><span>کلاینت‌ها</span><b>همهٔ کلاینت‌های ماینکرفت</b></div><div class="row"><span>مبنای قیمت</span><b>دلاری بودن آیتم</b></div><div class="row"><span>زمان تحویل</span><b>بسته به آیتم</b></div><div class="row"><span>پرداخت</span><b>ریالی</b></div></div></div>
      <div><div class="note "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg><div>قیمت کازمتیک بر اساس دلاری بودن آیتم محاسبه می‌شود؛ قبل از سفارش، نام دقیق آیتم و کلاینت را در تیکت بنویسید تا قیمت لحظه‌ای اعلام شود.</div></div></div>
    </div></section><section><div class="wrap"><div class="sec-hd"><span class="eyebrow">سوالات این محصول</span><h2 class="sec">پرسش‌های پرتکرار</h2></div><div class="faq "><details class="q" open><summary>کدام کلاینت‌ها پشتیبانی می‌شوند؟</summary><p>همهٔ کلاینت‌های ماینکرفت که آیتم کازمتیکی دارند.</p></details><details class="q"><summary>قیمت چطور حساب می‌شود؟</summary><p>بر اساس دلاری بودن آیتم؛ در تیکت قیمت لحظه‌ای اعلام می‌شود.</p></details><details class="q"><summary>تحویل چقدر طول می‌کشد؟</summary><p>بسته به آیتم و کلاینت متفاوت است؛ در تیکت اعلام می‌شود.</p></details><details class="q"><summary>آیا امن است؟</summary><p>بله، انجام سفارش امن و طبق قوانین کلاینت است.</p></details></div></div></section>
<section><div class="wrap"><div class="sec-hd row"><div><span class="eyebrow">بیشتر ببین</span><h2 class="sec">محصولات مرتبط</h2></div>
<a class="btn btn-ghost btn-sm" href="products.html">همهٔ محصولات ←</a></div><div class="grid g3"><a class="cat rv" href="cat-minecraft.html">
  <img src="assets/img/01-minecraft.jpg" alt="اکانت ماینکرفت" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>اکانت ماینکرفت</h3><p>فول اکسس، جاوا و بدراک، تحویل تا ۴۸ ساعت</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-donut.html">
  <img src="assets/img/02-donutsmp.jpg" alt="پول دونات اس ام پی" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>پول دونات اس ام پی</h3><p>موجودی ۳۰۰ میلیون، هر میلیون ۴٬۰۰۰ تومان</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-hypixel.html">
  <img src="assets/img/03-hypixel.jpg" alt="هایپیکسل و اسکای‌بلاک" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>هایپیکسل و اسکای‌بلاک</h3><p>همهٔ محصولات هایپیکسل + کوین اسکای‌بلاک</p><span class="go">مشاهده ←</span></div></a></div></div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay.jpg" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>همین حالا سفارش بده</h2>
    <p>قیمت نهایی و زمان تحویل را در تیکت دیسکورد بگیر و سفارشت را نهایی کن.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد کینیوا</a>
      <a class="btn btn-ghost" href="products.html">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,"cat-design":`<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><a href="products.html">محصولات</a><span>/</span><span style="color:#c3c9d6">خدمات فتوشاپ</span></div></div>
<!--hero--><section class="phero">
  <div class="wrap phero-grid">
    <div>
      <span class="eyebrow">خدمات فتوشاپ</span>
      <h1>طراحی لوگو، بنر، تامنیل، اسکین و انیمه‌آرت — از ۲۰۰٬۰۰۰ تومان</h1>
      <p class="lead" style="margin-top:1rem">خدمات طراحی گرافیکی کینیوا برای سرور، کانال و استریم شما. لوگو و بنر اختصاصی، تامنیل کلیک‌خور، اسکین ماینکرفت و انیمه‌آرت — همه با تحویل ۱ تا ۷۲ ساعت.</p>
      <div class="badges"><span class="pill g">اختصاصی</span><span class="pill ">ساده و حرفه‌ای</span><span class="pill y">۱ تا ۷۲ ساعت</span><span class="pill b">۵ سرویس</span></div>
      <div class="hero-btns">
        <a class="btn btn-gold" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ثبت سفارش در دیسکورد</a>
        <a class="btn btn-ghost" href="prices.html">دیدن جدول قیمت</a>
      </div>
      <div class="badges" style="margin-top:1.4rem"><span class="pill y" style="font-size:.9rem;padding:.5rem 1rem">از ۲۰۰٬۰۰۰ تومان</span></div>
    </div>
    <div class="frame"><img src="assets/img/04-photoshop.jpg" alt="خدمات فتوشاپ" width="1600" height="1000"></div>
  </div>
</section><section class="tight"><div class="wrap"><div class="tablewrap rv"><table><thead><tr><th>خدمت</th><th>ساده</th><th>حرفه‌ای</th><th>توضیح</th></tr></thead><tbody><tr><td>لوگو</td><td><b>۳۰۰٬۰۰۰ تومان</b></td><td>—</td><td>طراحی اختصاصی و خروجی با کیفیت</td></tr><tr><td>بنر</td><td>۳۵۰٬۰۰۰ تومان</td><td><b>۵۰۰٬۰۰۰ تومان</b></td><td>مناسب دیسکورد و شبکه‌های اجتماعی</td></tr><tr><td>تامنیل</td><td>۲۰۰٬۰۰۰ تومان</td><td><b>۳۰۰٬۰۰۰ تومان</b></td><td>تامنیل یوتیوب و کاور ویدیو</td></tr><tr><td>اسکین ماینکرفت</td><td>۲۴۵٬۰۰۰ تومان</td><td><b>۳۰۰٬۰۰۰ تومان</b></td><td>اسکین اختصاصی آمادهٔ آپلود</td></tr><tr><td>انیمه‌آرت</td><td>۲۵۰٬۰۰۰ تومان</td><td><b>۲۸۰٬۰۰۰</b> بک‌گراند / <b>۳۰۰٬۰۰۰</b> بک‌گراند + تکست</td><td>سه سطح طراحی</td></tr></tbody></table></div></div></section>
    <section><div class="wrap"><div class="sec-hd"><span class="eyebrow">چه چیزی تحویل می‌گیری</span><h2 class="sec">فرآیند طراحی</h2></div>
      <div class="steps">
        <div class="step rv"><h3>بریف</h3><p>در تیکت می‌گویید چه چیزی می‌خواهید و نمونه‌های مورد علاقه‌تان را می‌فرستید.</p></div>
        <div class="step rv"><h3>پیش‌نمایش</h3><p>طرح اولیه را می‌بینید و بازخورد می‌دهید.</p></div>
        <div class="step rv"><h3>بازنگری</h3><p>اصلاحات اعمال می‌شود تا به نتیجهٔ نهایی برسیم.</p></div>
        <div class="step rv"><h3>تحویل فایل</h3><p>فایل نهایی با کیفیت بالا تحویل داده می‌شود.</p></div>
      </div></div></section><section><div class="wrap"><div class="sec-hd"><span class="eyebrow">سوالات این محصول</span><h2 class="sec">پرسش‌های پرتکرار</h2></div><div class="faq "><details class="q" open><summary>تفاوت ساده و حرفه‌ای چیست؟</summary><p>در جزئیات، تعداد بازنگری و کیفیت خروجی؛ نسخهٔ حرفه‌ای زمان بیشتری می‌برد.</p></details><details class="q"><summary>تحویل چقدر طول می‌کشد؟</summary><p>بین ۱ تا ۷۲ ساعت بسته به نوع سفارش.</p></details><details class="q"><summary>چند بار می‌توانم اصلاح بخواهم؟</summary><p>در نسخهٔ ساده محدود و در نسخهٔ حرفه‌ای بیشتر است؛ در تیکت مشخص می‌شود.</p></details><details class="q"><summary>فایل خروجی چه فرمتی است؟</summary><p>PNG با کیفیت بالا؛ بسته به سفارش فرمت‌های دیگر هم قابل ارائه است.</p></details></div></div></section>
<section><div class="wrap"><div class="sec-hd row"><div><span class="eyebrow">بیشتر ببین</span><h2 class="sec">محصولات مرتبط</h2></div>
<a class="btn btn-ghost btn-sm" href="products.html">همهٔ محصولات ←</a></div><div class="grid g3"><a class="cat rv" href="cat-minecraft.html">
  <img src="assets/img/01-minecraft.jpg" alt="اکانت ماینکرفت" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>اکانت ماینکرفت</h3><p>فول اکسس، جاوا و بدراک، تحویل تا ۴۸ ساعت</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-donut.html">
  <img src="assets/img/02-donutsmp.jpg" alt="پول دونات اس ام پی" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>پول دونات اس ام پی</h3><p>موجودی ۳۰۰ میلیون، هر میلیون ۴٬۰۰۰ تومان</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-hypixel.html">
  <img src="assets/img/03-hypixel.jpg" alt="هایپیکسل و اسکای‌بلاک" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>هایپیکسل و اسکای‌بلاک</h3><p>همهٔ محصولات هایپیکسل + کوین اسکای‌بلاک</p><span class="go">مشاهده ←</span></div></a></div></div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay.jpg" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>همین حالا سفارش بده</h2>
    <p>قیمت نهایی و زمان تحویل را در تیکت دیسکورد بگیر و سفارشت را نهایی کن.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد کینیوا</a>
      <a class="btn btn-ghost" href="products.html">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,"cat-donut":`<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><a href="products.html">محصولات</a><span>/</span><span style="color:#c3c9d6">دونات اس ام پی</span></div></div>
<!--hero--><section class="phero">
  <div class="wrap phero-grid">
    <div>
      <span class="eyebrow">دونات اس ام پی</span>
      <h1>پول دونات اس ام پی — از ۴٬۰۰۰ تومان به ازای هر میلیون</h1>
      <p class="lead" style="margin-top:1rem">پول سرور دونات اس ام پی با قیمت رقابتی و تحویل مستقیم روی اکانت شما. موجودی فعلی ۳۰۰ میلیون است و حداقل خرید ۵۰ میلیون.</p>
      <div class="badges"><span class="pill g">موجودی ۳۰۰ میلیون</span><span class="pill ">حداقل ۵۰ میلیون</span><span class="pill y">۴٬۰۰۰ / میلیون</span><span class="pill b">۴۸ ساعت</span></div>
      <div class="hero-btns">
        <a class="btn btn-gold" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ثبت سفارش در دیسکورد</a>
        <a class="btn btn-ghost" href="prices.html">دیدن جدول قیمت</a>
      </div>
      <div class="badges" style="margin-top:1.4rem"><span class="pill y" style="font-size:.9rem;padding:.5rem 1rem">هر میلیون: ۴٬۰۰۰ تومان</span></div>
    </div>
    <div class="frame"><img src="assets/img/02-donutsmp.jpg" alt="دونات اس ام پی" width="1600" height="1000"></div>
  </div>
</section><section class="tight"><div class="wrap grid g2">
      <div class="ccard">
        <h3>محاسبه‌گر پول دونات <span class="pill y">هر میلیون ۴٬۰۰۰</span></h3>
        <p class="hint">حداقل ۵۰ میلیون • موجودی فعلی ۳۰۰ میلیون</p>
        <div class="crow"><span>مقدار</span><b><span id="dv">۱۰۰</span> میلیون</b></div>
        <input type="range" min="50" max="300" step="10" value="100" data-rate="4000" data-out="dp" data-lbl="dv">
        <div class="crow" style="margin-top:1rem;font-size:.78rem;color:#7f8798"><span>۵۰ میلیون</span><span>۳۰۰ میلیون</span></div>
        <div class="cout"><span>مبلغ قابل پرداخت</span><b><span id="dp">۴۰۰٬۰۰۰</span> تومان</b></div>
      </div>
      <div>
        <div class="kv"><div class="row"><span>قیمت هر میلیون</span><b>۴٬۰۰۰ تومان</b></div><div class="row"><span>حداقل خرید</span><b>۵۰ میلیون</b></div><div class="row"><span>موجودی فعلی</span><b>۳۰۰ میلیون</b></div><div class="row"><span>زمان تحویل</span><b>حداقل ۴۸ ساعت</b></div></div>
        <div style="margin-top:1rem"><div class="note "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg><div>موجودی سرور محدود است؛ بعد از اتمام، مجدد شارژ می‌شود. برای مقدار زیاد قبل از پرداخت موجودی را در تیکت چک کنید.</div></div></div>
      </div>
    </div></section><section><div class="wrap"><div class="sec-hd"><span class="eyebrow">سوالات این محصول</span><h2 class="sec">پرسش‌های پرتکرار</h2></div><div class="faq "><details class="q" open><summary>حداقل خرید چقدر است؟</summary><p>۵۰ میلیون. کمتر از این مقدار سفارش ثبت نمی‌شود.</p></details><details class="q"><summary>موجودی چقدر است؟</summary><p>در حال حاضر ۳۰۰ میلیون؛ بعد از اتمام مجدد شارژ می‌شود.</p></details><details class="q"><summary>تحویل چقدر طول می‌کشد؟</summary><p>حداقل ۴۸ ساعت. برای مقدار زیاد زمان ممکن است بیشتر شود.</p></details><details class="q"><summary>سقف خرید چقدر است؟</summary><p>سقف خرید همان موجودی سرور است؛ تا ۳۰۰ میلیون با قیمت ۴٬۰۰۰ تومان به‌ازای هر میلیون.</p></details></div></div></section>
<section><div class="wrap"><div class="sec-hd row"><div><span class="eyebrow">بیشتر ببین</span><h2 class="sec">محصولات مرتبط</h2></div>
<a class="btn btn-ghost btn-sm" href="products.html">همهٔ محصولات ←</a></div><div class="grid g3"><a class="cat rv" href="cat-minecraft.html">
  <img src="assets/img/01-minecraft.jpg" alt="اکانت ماینکرفت" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>اکانت ماینکرفت</h3><p>فول اکسس، جاوا و بدراک، تحویل تا ۴۸ ساعت</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-hypixel.html">
  <img src="assets/img/03-hypixel.jpg" alt="هایپیکسل و اسکای‌بلاک" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>هایپیکسل و اسکای‌بلاک</h3><p>همهٔ محصولات هایپیکسل + کوین اسکای‌بلاک</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-design.html">
  <img src="assets/img/04-photoshop.jpg" alt="خدمات فتوشاپ" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>خدمات فتوشاپ</h3><p>لوگو، بنر، تامنیل، اسکین و انیمه‌آرت</p><span class="go">مشاهده ←</span></div></a></div></div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay.jpg" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>همین حالا سفارش بده</h2>
    <p>قیمت نهایی و زمان تحویل را در تیکت دیسکورد بگیر و سفارشت را نهایی کن.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد کینیوا</a>
      <a class="btn btn-ghost" href="products.html">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,"cat-hypixel":`<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><a href="products.html">محصولات</a><span>/</span><span style="color:#c3c9d6">هایپیکسل و اسکای‌بلاک</span></div></div>
<!--hero--><section class="phero">
  <div class="wrap phero-grid">
    <div>
      <span class="eyebrow">هایپیکسل و اسکای‌بلاک</span>
      <h1>محصولات هایپیکسل و کوین اسکای‌بلاک — سریع و قانونی</h1>
      <p class="lead" style="margin-top:1rem">همهٔ محصولات موجود هایپیکسل با تحویل سریع و کاملاً قانونی. قیمت‌ها بر اساس دلار روز محاسبه می‌شود؛ برای استعلام دقیق در دیسکورد تیکت بزنید.</p>
      <div class="badges"><span class="pill g">۱ تا ۲۴ ساعت</span><span class="pill ">امن و قانونی</span><span class="pill y">قیمت دلار روز</span><span class="pill b">اسکای‌بلاک ۶٬۰۰۰</span></div>
      <div class="hero-btns">
        <a class="btn btn-gold" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ثبت سفارش در دیسکورد</a>
        <a class="btn btn-ghost" href="prices.html">دیدن جدول قیمت</a>
      </div>
      <div class="badges" style="margin-top:1.4rem"><span class="pill y" style="font-size:.9rem;padding:.5rem 1rem">قیمت: استعلام در تیکت</span></div>
    </div>
    <div class="frame"><img src="assets/img/03-hypixel.jpg" alt="هایپیکسل و اسکای‌بلاک" width="1600" height="1000"></div>
  </div>
</section><section class="tight"><div class="wrap grid g2">
      <div class="ccard">
        <h3>محاسبه‌گر کوین اسکای‌بلاک <span class="pill y">هر میلیون ۶٬۰۰۰</span></h3>
        <p class="hint">تحویل ۱ تا ۷۲ ساعت • مناسب هایپیکسل</p>
        <div class="crow"><span>مقدار</span><b><span id="sv">۱۰۰</span> میلیون</b></div>
        <input type="range" min="10" max="500" step="10" value="100" data-rate="6000" data-out="sp" data-lbl="sv">
        <div class="crow" style="margin-top:1rem;font-size:.78rem;color:#7f8798"><span>۱۰ میلیون</span><span>۵۰۰ میلیون</span></div>
        <div class="cout"><span>مبلغ قابل پرداخت</span><b><span id="sp">۶۰۰٬۰۰۰</span> تومان</b></div>
      </div>
      <div><div class="kv"><div class="row"><span>محصولات هایپیکسل</span><b>قیمت دلار روز</b></div><div class="row"><span>زمان تحویل</span><b>۱ تا ۲۴ ساعت</b></div><div class="row"><span>کوین اسکای‌بلاک</span><b>۶٬۰۰۰ / میلیون</b></div><div class="row"><span>زمان تحویل اسکای‌بلاک</span><b>۱ تا ۷۲ ساعت</b></div><div class="row"><span>وضعیت</span><b>امن و قانونی</b></div></div></div>
    </div></section><section><div class="wrap"><div class="sec-hd"><span class="eyebrow">سوالات این محصول</span><h2 class="sec">پرسش‌های پرتکرار</h2></div><div class="faq "><details class="q" open><summary>چرا قیمت ثابت نیست؟</summary><p>قیمت محصولات هایپیکسل و کازمتیک بر اساس دلار روز محاسبه می‌شود.</p></details><details class="q"><summary>تحویل چقدر طول می‌کشد؟</summary><p>هایپیکسل ۱ تا ۲۴ ساعت و کوین اسکای‌بلاک ۱ تا ۷۲ ساعت.</p></details><details class="q"><summary>آیا امن است؟</summary><p>بله، همهٔ سفارش‌ها به‌صورت قانونی و امن انجام می‌شود.</p></details><details class="q"><summary>چه محصولی از هایپیکسل موجود است؟</summary><p>در حال حاضر همهٔ محصولات موجود قابل تهیه است؛ در تیکت بپرسید.</p></details></div></div></section>
<section><div class="wrap"><div class="sec-hd row"><div><span class="eyebrow">بیشتر ببین</span><h2 class="sec">محصولات مرتبط</h2></div>
<a class="btn btn-ghost btn-sm" href="products.html">همهٔ محصولات ←</a></div><div class="grid g3"><a class="cat rv" href="cat-minecraft.html">
  <img src="assets/img/01-minecraft.jpg" alt="اکانت ماینکرفت" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>اکانت ماینکرفت</h3><p>فول اکسس، جاوا و بدراک، تحویل تا ۴۸ ساعت</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-donut.html">
  <img src="assets/img/02-donutsmp.jpg" alt="پول دونات اس ام پی" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>پول دونات اس ام پی</h3><p>موجودی ۳۰۰ میلیون، هر میلیون ۴٬۰۰۰ تومان</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-design.html">
  <img src="assets/img/04-photoshop.jpg" alt="خدمات فتوشاپ" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>خدمات فتوشاپ</h3><p>لوگو، بنر، تامنیل، اسکین و انیمه‌آرت</p><span class="go">مشاهده ←</span></div></a></div></div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay.jpg" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>همین حالا سفارش بده</h2>
    <p>قیمت نهایی و زمان تحویل را در تیکت دیسکورد بگیر و سفارشت را نهایی کن.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد کینیوا</a>
      <a class="btn btn-ghost" href="products.html">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,"cat-minecraft":`<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><a href="products.html">محصولات</a><span>/</span><span style="color:#c3c9d6">اکانت ماینکرفت</span></div></div>
<!--hero--><section class="phero">
  <div class="wrap phero-grid">
    <div>
      <span class="eyebrow">اکانت ماینکرفت</span>
      <h1>اکانت ماینکرفت با فول اکسس — تحویل تا ۴۸ ساعت</h1>
      <p class="lead" style="margin-top:1rem">اکانت اقتصادی ماینکرفت با دسترسی کامل، مناسب بازیکنانی که می‌خواهند بدون دردسر وارد بازی شوند. هم نسخهٔ جاوا و هم بدراک، با امکان تغییر اطلاعات بعد از تحویل.</p>
      <div class="badges"><span class="pill g">فول اکسس</span><span class="pill ">جاوا + بدراک</span><span class="pill y">تغییر اطلاعات</span><span class="pill b">۴۸ ساعت</span></div>
      <div class="hero-btns">
        <a class="btn btn-gold" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ثبت سفارش در دیسکورد</a>
        <a class="btn btn-ghost" href="prices.html">دیدن جدول قیمت</a>
      </div>
      <div class="badges" style="margin-top:1.4rem"><span class="pill y" style="font-size:.9rem;padding:.5rem 1rem">قیمت: ۲٬۲۴۹٬۰۰۰ تومان</span></div>
    </div>
    <div class="frame"><img src="assets/img/01-minecraft.jpg" alt="اکانت ماینکرفت" width="1600" height="1000"></div>
  </div>
</section><section class="tight"><div class="wrap grid g2">
      <div><div class="kv"><div class="row"><span>نوع اکانت</span><b>اقتصادی (فول اکسس)</b></div><div class="row"><span>نسخه‌ها</span><b>جاوا و بدراک</b></div><div class="row"><span>تغییر اطلاعات</span><b>دارد</b></div><div class="row"><span>زمان تحویل</span><b>حداکثر ۴۸ ساعت</b></div><div class="row"><span>پرداخت</span><b>ریالی</b></div></div></div>
      <div class="note"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg><div><b>نکته:</b> بعد از تحویل، اطلاعات اکانت را در اختیار دارید و می‌توانید تغییر دهید.
      اگر اکانت را روی چند دستگاه استفاده می‌کنید، قبل از سفارش با پشتیبانی هماهنگ کنید.</div></div>
    </div></section>
    <section><div class="wrap"><div class="sec-hd"><span class="eyebrow">چه چیزی می‌گیری</span><h2 class="sec">جزئیات اکانت ماینکرفت</h2></div>
      <div class="grid g3">
        <div class="card hover rv"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12 5 5L20 6"/></svg></div><h3>فول اکسس</h3><p>دسترسی کامل به اکانت، بدون محدودیت در بازی.</p></div>
        <div class="card hover rv"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="13" rx="2.5"/><path d="M2 10h20"/></svg></div><h3>تغییر اطلاعات</h3><p>امکان تغییر ایمیل و رمز بعد از تحویل.</p></div>
        <div class="card hover rv"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"/></svg></div><h3>جاوا + بدراک</h3><p>قابل استفاده هم روی نسخهٔ جاوا و هم بدراک.</p></div>
      </div></div></section><section><div class="wrap"><div class="sec-hd"><span class="eyebrow">سوالات این محصول</span><h2 class="sec">پرسش‌های پرتکرار</h2></div><div class="faq "><details class="q" open><summary>اکانت اطلاعاتش قابل تغییر است؟</summary><p>بله، اکانت‌های اقتصادی با فول اکسس تحویل داده می‌شوند و امکان تغییر اطلاعات وجود دارد.</p></details><details class="q"><summary>چقدر طول می‌کشد؟</summary><p>حداکثر ۴۸ ساعت. برای اولویت بیشتر، در تیکت هماهنگ کنید.</p></details><details class="q"><summary>پرداخت به چه صورت است؟</summary><p>ریالی و داخل تیکت دیسکورد؛ فاکتور هم صادر می‌شود.</p></details><details class="q"><summary>اگر مشکلی پیش بیاید؟</summary><p>طبق ضمانت کینیوا تعویض یا بازگشت وجه انجام می‌شود.</p></details></div></div></section>
<section><div class="wrap"><div class="sec-hd row"><div><span class="eyebrow">بیشتر ببین</span><h2 class="sec">محصولات مرتبط</h2></div>
<a class="btn btn-ghost btn-sm" href="products.html">همهٔ محصولات ←</a></div><div class="grid g3"><a class="cat rv" href="cat-donut.html">
  <img src="assets/img/02-donutsmp.jpg" alt="پول دونات اس ام پی" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>پول دونات اس ام پی</h3><p>موجودی ۳۰۰ میلیون، هر میلیون ۴٬۰۰۰ تومان</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-hypixel.html">
  <img src="assets/img/03-hypixel.jpg" alt="هایپیکسل و اسکای‌بلاک" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>هایپیکسل و اسکای‌بلاک</h3><p>همهٔ محصولات هایپیکسل + کوین اسکای‌بلاک</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-design.html">
  <img src="assets/img/04-photoshop.jpg" alt="خدمات فتوشاپ" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>خدمات فتوشاپ</h3><p>لوگو، بنر، تامنیل، اسکین و انیمه‌آرت</p><span class="go">مشاهده ←</span></div></a></div></div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay.jpg" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>همین حالا سفارش بده</h2>
    <p>قیمت نهایی و زمان تحویل را در تیکت دیسکورد بگیر و سفارشت را نهایی کن.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد کینیوا</a>
      <a class="btn btn-ghost" href="products.html">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,"cat-overlay":`<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><a href="products.html">محصولات</a><span>/</span><span style="color:#c3c9d6">اورلی استریم</span></div></div>
<!--hero--><section class="phero">
  <div class="wrap phero-grid">
    <div>
      <span class="eyebrow">اورلی استریم</span>
      <h1>اورلی استریم حرفه‌ای — کیفیت خوب ۲۴۵٬۰۰۰ و عالی ۳۰۰٬۰۰۰</h1>
      <p class="lead" style="margin-top:1rem">پک اورلی استریم شامل فریم وب‌کم، چت‌باکس، هشدارها و المان‌های دونیت. در دو کیفیت و با امکان افزودن پک فونت اختصاصی.</p>
      <div class="badges"><span class="pill ">کیفیت خوب</span><span class="pill g">کیفیت عالی</span><span class="pill y">پک فونت</span><span class="pill b">۱ تا ۷۲ ساعت</span></div>
      <div class="hero-btns">
        <a class="btn btn-gold" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ثبت سفارش در دیسکورد</a>
        <a class="btn btn-ghost" href="prices.html">دیدن جدول قیمت</a>
      </div>
      <div class="badges" style="margin-top:1.4rem"><span class="pill y" style="font-size:.9rem;padding:.5rem 1rem">از ۲۴۵٬۰۰۰ تومان</span></div>
    </div>
    <div class="frame"><img src="assets/img/05-overlay.jpg" alt="اورلی استریم" width="1600" height="1000"></div>
  </div>
</section><section class="tight"><div class="wrap"><div class="tablewrap rv"><table><thead><tr><th>محصول</th><th>قیمت</th><th>زمان تحویل</th><th>شامل</th></tr></thead><tbody><tr><td>اورلی استریم — کیفیت خوب</td><td><b>۲۴۵٬۰۰۰ تومان</b></td><td>۱ تا ۷۲ ساعت</td><td>فریم وب‌کم، چت‌باکس، هشدارها</td></tr><tr><td>اورلی استریم — کیفیت عالی</td><td><b>۳۰۰٬۰۰۰ تومان</b></td><td>۱ تا ۷۲ ساعت</td><td>نسخهٔ کامل و پرجزئیات</td></tr><tr><td>پک فونت اختصاصی</td><td><b>۱۰۰٬۰۰۰ تومان</b></td><td>فوری</td><td>فونت فارسی/لاتین هماهنگ با اورلی</td></tr></tbody></table></div></div></section>
    <section><div class="wrap grid g3">
      <div class="card hover rv"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12 5 5L20 6"/></svg></div><h3>هماهنگ با برند</h3><p>رنگ و فونت اورلی با لوگو و استایل کانال شما هماهنگ می‌شود.</p></div>
      <div class="card hover rv"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"/></svg></div><h3>آمادهٔ استفاده</h3><p>فایل‌های لایه‌باز و آمادهٔ ایمپورت در نرم‌افزار استریم.</p></div>
      <div class="card hover rv"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="13" rx="2.5"/><path d="M2 10h20"/></svg></div><h3>پک فونت</h3><p>در صورت نیاز، پک فونت اختصاصی هم اضافه می‌شود.</p></div>
    </div></section><section><div class="wrap"><div class="sec-hd"><span class="eyebrow">سوالات این محصول</span><h2 class="sec">پرسش‌های پرتکرار</h2></div><div class="faq "><details class="q" open><summary>اورلی برای چه نرم‌افزاری است؟</summary><p>برای نرم‌افزارهای رایج استریم؛ فایل‌ها آمادهٔ ایمپورت تحویل داده می‌شوند.</p></details><details class="q"><summary>چند ساعت طول می‌کشد؟</summary><p>۱ تا ۷۲ ساعت بسته به کیفیت انتخابی.</p></details><details class="q"><summary>می‌توانم رنگ‌ها را تغییر دهم؟</summary><p>بله، در نسخهٔ حرفه‌ای هماهنگ‌سازی کامل با برند انجام می‌شود.</p></details><details class="q"><summary>پک فونت چرا لازم است؟</summary><p>برای یکدست شدن تایپوگرافی اورلی با محتوای شما.</p></details></div></div></section>
<section><div class="wrap"><div class="sec-hd row"><div><span class="eyebrow">بیشتر ببین</span><h2 class="sec">محصولات مرتبط</h2></div>
<a class="btn btn-ghost btn-sm" href="products.html">همهٔ محصولات ←</a></div><div class="grid g3"><a class="cat rv" href="cat-minecraft.html">
  <img src="assets/img/01-minecraft.jpg" alt="اکانت ماینکرفت" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>اکانت ماینکرفت</h3><p>فول اکسس، جاوا و بدراک، تحویل تا ۴۸ ساعت</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-donut.html">
  <img src="assets/img/02-donutsmp.jpg" alt="پول دونات اس ام پی" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>پول دونات اس ام پی</h3><p>موجودی ۳۰۰ میلیون، هر میلیون ۴٬۰۰۰ تومان</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-hypixel.html">
  <img src="assets/img/03-hypixel.jpg" alt="هایپیکسل و اسکای‌بلاک" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>هایپیکسل و اسکای‌بلاک</h3><p>همهٔ محصولات هایپیکسل + کوین اسکای‌بلاک</p><span class="go">مشاهده ←</span></div></a></div></div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay.jpg" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>همین حالا سفارش بده</h2>
    <p>قیمت نهایی و زمان تحویل را در تیکت دیسکورد بگیر و سفارشت را نهایی کن.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد کینیوا</a>
      <a class="btn btn-ghost" href="products.html">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,contact:`<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><a href="contact.html">تماس</a></div></div>

<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><span style="color:#c3c9d6">تماس</span></div></div>
<section class="phero"><div class="wrap">
  <span class="eyebrow">پشتیبانی</span><h1>با ما در تماس باش</h1>
  <p class="lead" style="max-width:70ch">کل ارتباط کینیوا در دیسکورد انجام می‌شود؛ سریع‌ترین راه، زدن تیکت در سرور است.</p>
</div></section>
<section style="padding-top:0"><div class="wrap grid g3">
  <div class="card hover rv"><div class="ic"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg></div><h3>دیسکورد (اصلی)</h3><p>سرور کینیوا شاپ؛ ثبت سفارش، پیگیری و پشتیبانی.</p>
    <div style="margin-top:1rem"><a class="btn btn-gold btn-sm" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener">ورود به سرور</a></div></div>
  <div class="card hover rv"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/></svg></div><h3>ساعت پاسخ‌گویی</h3><p>همه‌روزه؛ معمولاً در کمتر از چند ساعت پاسخ داده می‌شود.</p></div>
  <div class="card hover rv"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7.5 3.5v5c0 4.4-3.1 8.3-7.5 9.5-4.4-1.2-7.5-5.1-7.5-9.5v-5L12 3Z"/><path d="m9 12 2 2 4-4"/></svg></div><h3>پیگیری سفارش</h3><p>هر سفارش یک تیکت جدا دارد؛ همان‌جا وضعیت را می‌بینی.</p></div>
</div></section>
<section><div class="wrap-narrow">
  <h3 class="sub">قبل از تیکت، این‌ها را بنویس</h3>
  <div class="kv"><div class="row"><span>نام محصول</span><b>مثلاً پول دونات اس ام پی</b></div><div class="row"><span>مقدار</span><b>مثلاً ۱۰۰ میلیون</b></div><div class="row"><span>نام اکانت / کلاینت</span><b>برای کازمتیک، کیپ و اکانت</b></div><div class="row"><span>نمونه</span><b>برای سفارش‌های طراحی یک نمونه یا توضیح استایل</b></div></div>
  <div style="margin-top:1.2rem"><div class="note blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg><div>هیچ‌وقت اطلاعات حساب خود را در جای دیگری جز تیکت رسمی سرور ارسال نکنید.</div></div></div>
</div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay.jpg" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>آماده‌ای؟ تیکت بزن</h2>
    <p>ثبت سفارش در دیسکورد کمتر از یک دقیقه وقت می‌برد.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد کینیوا</a>
      <a class="btn btn-ghost" href="products.html">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,faq:`<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><a href="faq.html">سوالات متداول</a></div></div>

<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><span style="color:#c3c9d6">سوالات متداول</span></div></div>
<section class="phero"><div class="wrap"><span class="eyebrow">سوالات متداول</span><h1>هر چیزی که باید بدانی</h1>
<p class="lead" style="max-width:70ch">اگر جواب سؤالت را پیدا نکردی، در دیسکورد تیکت بزن؛ سریع پاسخ می‌گیری.</p></div></section>
<section style="padding-top:0"><div class="wrap-narrow"><div style="margin-bottom:2rem"><h3 class="sub">عمومی و سفارش</h3><div class="faq "><details class="q" open><summary>سفارش چطور ثبت می‌شود؟</summary><p>از طریق تیکت در سرور دیسکورد کینیوا. وارد سرور شوید، در چنل تیکت محصول و مقدار را بنویسید.</p></details><details class="q"><summary>آیا سایت فروشگاه آنلاین دارد؟</summary><p>سایت کاتالوگ و قیمت‌هاست؛ ثبت و پرداخت سفارش داخل دیسکورد انجام می‌شود تا بتوانیم دقیق راهنمایی کنیم.</p></details><details class="q"><summary>حداقل سفارش چقدر است؟</summary><p>برای پول دونات ۵۰ میلیون و برای بقیهٔ محصولات محدودیت خاصی نیست.</p></details><details class="q"><summary>می‌توانم چند سفارش همزمان ثبت کنم؟</summary><p>بله، اما بهتر است هر سفارش تیکت جدا داشته باشد تا پیگیری راحت‌تر باشد.</p></details></div></div><div style="margin-bottom:2rem"><h3 class="sub">پرداخت و تحویل</h3><div class="faq "><details class="q" open><summary>پرداخت ریالی است؟</summary><p>بله، هیچ پرداخت دلاری لازم نیست و فاکتور صادر می‌شود.</p></details><details class="q"><summary>زمان تحویل چقدر است؟</summary><p>هایپیکسل ۱ تا ۲۴ ساعت، طراحی و کیپ ۱ تا ۷۲ ساعت، اکانت ماینکرفت تا ۴۸ ساعت.</p></details><details class="q"><summary>اگر دیرتر تحویل شود؟</summary><p>طبق ضمانت کینیوا پیگیری می‌شود و در صورت عدم انجام، وجه بازگردانده می‌شود.</p></details><details class="q"><summary>تحویل در چه ساعتی انجام می‌شود؟</summary><p>در بازهٔ اعلام‌شده؛ برای هماهنگی دقیق‌تر در تیکت بپرسید.</p></details></div></div><div style="margin-bottom:2rem"><h3 class="sub">محصولات</h3><div class="faq "><details class="q" open><summary>قیمت هایپیکسل چرا ثابت نیست؟</summary><p>چون بر اساس دلار روز محاسبه می‌شود؛ در تیکت قیمت لحظه‌ای اعلام می‌شود.</p></details><details class="q"><summary>اکانت ماینکرفت فول اکسس است؟</summary><p>بله، دسترسی کامل دارد و اطلاعات هم قابل تغییر است.</p></details><details class="q"><summary>کیپ اپتیفاین را همه می‌بینند؟</summary><p>برای همهٔ بازیکن‌هایی که اپتیفاین دارند قابل مشاهده است.</p></details><details class="q"><summary>تفاوت اورلی خوب و عالی چیست؟</summary><p>نسخهٔ عالی جزئیات بیشتر، انیمیشن و هماهنگی کامل با برند دارد.</p></details></div></div></div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay.jpg" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>جوابت اینجا نبود؟</h2>
    <p>در دیسکورد بپرس؛ پشتیبانی کینیوا همه‌روزه آنلاین است.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد کینیوا</a>
      <a class="btn btn-ghost" href="products.html">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,guarantee:`<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><a href="guarantee.html">ضمانت</a></div></div>

<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><span style="color:#c3c9d6">ضمانت</span></div></div>
<section class="phero"><div class="wrap">
  <span class="eyebrow">ضمانت کینیوا</span><h1>ضمانت، بازگشت وجه و امنیت سفارش</h1>
  <p class="lead" style="max-width:70ch">ما با اعتبار انجمن کار می‌کنیم. برای هر سفارش یک تعهد روشن داریم و پشتیبانی تا رسیدن به نتیجه باز می‌ماند.</p>
</div></section>
<section style="padding-top:0"><div class="wrap"><div class="guar">
  <img src="assets/img/07-cape-optifine.jpg" alt="ضمانت کینیوا" loading="lazy" width="1600" height="900">
  <div><h2 class="sec">تعهد ما در هر سفارش</h2>
    <ul>
      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12 5 5L20 6"/></svg> تحویل در بازهٔ زمانی اعلام‌شده برای همان محصول</li>
      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12 5 5L20 6"/></svg> بازگشت کامل مبلغ در صورت عدم انجام سفارش</li>
      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12 5 5L20 6"/></svg> تعویض محصول در صورت مشکل فنی</li>
      <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12 5 5L20 6"/></svg> تیکت باز و پیگیری تا رضایت شما</li>
    </ul>
  </div>
</div></div></section>
<section><div class="wrap grid g2">
  <div><h3 class="sub">در چه شرایطی بازگشت وجه انجام می‌شود؟</h3>
    <div class="faq">
      <details class="q" open><summary>سفارش در بازهٔ اعلام‌شده تحویل نشود</summary><p>اگر نتوانیم سفارش را در زمان اعلام‌شده تحویل دهیم و راه‌حل جایگزینی هم نباشد، مبلغ به‌صورت کامل بازگردانده می‌شود.</p></details>
      <details class="q"><summary>محصول تحویل‌شده مشکل فنی داشته باشد</summary><p>در صورت وجود مشکل، ابتدا تلاش می‌کنیم اصلاح کنیم؛ اگر حل نشود تعویض یا بازگشت وجه انجام می‌شود.</p></details>
      <details class="q"><summary>سفارش اشتباهی ثبت شده باشد</summary><p>اگر پرداخت انجام شده ولی سفارش هنوز شروع نشده باشد، با هماهنگی در تیکت قابل لغو است.</p></details>
      <details class="q"><summary>سفارش‌های طراحی</summary><p>بعد از تحویل فایل نهایی و انجام بازنگری‌های توافق‌شده، سفارش تمام‌شده محسوب می‌شود.</p></details>
    </div>
  </div>
  <div><h3 class="sub">امنیت اطلاعات</h3>
    <div class="card"><p style="font-size:.9rem;line-height:2">اطلاعاتی که برای انجام سفارش می‌دهید فقط برای همان سفارش استفاده می‌شود و در جای دیگری منتشر نخواهد شد.
    توصیه می‌کنیم بعد از تحویل، رمز حسابتان را تغییر دهید. برای سفارش‌هایی که نیاز به ورود به اکانت ندارند (مثل اورلی یا پک فونت)
    هیچ اطلاعات ورودی خواسته نمی‌شود.</p></div>
    <div style="margin-top:1rem"><div class="note green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg><div>هیچ‌وقت اطلاعات حساب خود را بیرون از تیکت رسمی سرور کینیوا ارسال نکنید.</div></div></div>
  </div>
</div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay.jpg" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>با خیال راحت سفارش بده</h2>
    <p>اگر سوالی دربارهٔ ضمانت داری، قبل از خرید در تیکت بپرس.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد کینیوا</a>
      <a class="btn btn-ghost" href="products.html">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,prices:`<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><a href="prices.html">قیمت‌ها</a></div></div>

<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><span style="color:#c3c9d6">قیمت‌ها</span></div></div>
<section class="phero"><div class="wrap">
  <span class="eyebrow">تعرفهٔ کامل</span>
  <h1>جدول قیمت‌ها و محاسبه‌گر</h1>
  <p class="lead" style="max-width:70ch">همهٔ قیمت‌های کینیوا شاپ در یک صفحه. قیمت‌هایی که به دلار وابسته‌اند با «استعلام» مشخص شده‌اند.</p>
</div></section>

<section style="padding-top:0"><div class="wrap">
  <h3 class="sub">اکانت و پول سرورها</h3>
  <div class="tablewrap rv"><table><thead><tr><th>محصول</th><th>دسته</th><th>قیمت</th><th>زمان تحویل</th></tr></thead><tbody><tr><td>اکانت ماینکرفت اقتصادی</td><td>ماینکرفت</td><td><b>۲٬۲۴۹٬۰۰۰ تومان</b></td><td>تا ۴۸ ساعت</td></tr><tr><td>پول دونات — هر میلیون</td><td>دونات اس ام پی</td><td><b>۴٬۰۰۰ تومان</b></td><td>حداقل ۴۸ ساعت</td></tr><tr><td>کوین اسکای‌بلاک — هر میلیون</td><td>هایپیکسل</td><td><b>۶٬۰۰۰ تومان</b></td><td>۱ تا ۷۲ ساعت</td></tr><tr><td>محصولات هایپیکسل</td><td>هایپیکسل</td><td>استعلام (دلار روز)</td><td>۱ تا ۲۴ ساعت</td></tr><tr><td>کازمتیک کلاینت‌ها</td><td>کازمتیک</td><td>استعلام (آیتم دلاری)</td><td>بسته به آیتم</td></tr></tbody></table></div>
</div></section>

<section style="padding-top:0"><div class="wrap">
  <h3 class="sub">خدمات طراحی</h3>
  <div class="tablewrap rv"><table><thead><tr><th>خدمت</th><th>ساده</th><th>حرفه‌ای</th><th>زمان تحویل</th></tr></thead><tbody><tr><td>لوگو</td><td><b>۳۰۰٬۰۰۰ تومان</b></td><td>—</td><td>۱ تا ۷۲ ساعت</td></tr><tr><td>بنر</td><td>۳۵۰٬۰۰۰ تومان</td><td><b>۵۰۰٬۰۰۰ تومان</b></td><td>۱ تا ۷۲ ساعت</td></tr><tr><td>تامنیل</td><td>۲۰۰٬۰۰۰ تومان</td><td><b>۳۰۰٬۰۰۰ تومان</b></td><td>۱ تا ۷۲ ساعت</td></tr><tr><td>اسکین ماینکرفت</td><td>۲۴۵٬۰۰۰ تومان</td><td><b>۳۰۰٬۰۰۰ تومان</b></td><td>۱ تا ۷۲ ساعت</td></tr><tr><td>انیمه‌آرت</td><td>۲۵۰٬۰۰۰ تومان</td><td>۲۸۰٬۰۰۰ (بک‌گراند) / <b>۳۰۰٬۰۰۰</b> (+تکست)</td><td>۱ تا ۷۲ ساعت</td></tr></tbody></table></div>
</div></section>

<section style="padding-top:0"><div class="wrap">
  <h3 class="sub">اورلی و کیپ</h3>
  <div class="tablewrap rv"><table><thead><tr><th>محصول</th><th>قیمت</th><th>زمان تحویل</th></tr></thead><tbody><tr><td>اورلی استریم — کیفیت خوب</td><td><b>۲۴۵٬۰۰۰ تومان</b></td><td>۱ تا ۷۲ ساعت</td></tr><tr><td>اورلی استریم — کیفیت عالی</td><td><b>۳۰۰٬۰۰۰ تومان</b></td><td>۱ تا ۷۲ ساعت</td></tr><tr><td>پک فونت اختصاصی</td><td><b>۱۰۰٬۰۰۰ تومان</b></td><td>فوری</td></tr><tr><td>کیپ اپتیفاین</td><td><b>۳۲۹٬۰۰۰ تومان</b></td><td>۱ تا ۷۲ ساعت</td></tr></tbody></table></div>
</div></section>

<section><div class="wrap">
  <div class="sec-hd"><span class="eyebrow">محاسبه‌گر</span><h2 class="sec">قیمت پول سرورها را حساب کن</h2></div>
  <div class="grid g2">
    <div class="ccard rv">
      <h3>پول دونات اس ام پی <span class="pill y">هر میلیون ۴٬۰۰۰</span></h3>
      <p class="hint">حداقل خرید ۵۰ میلیون • موجودی ۳۰۰ میلیون</p>
      <div class="crow"><span>مقدار</span><b><span id="dv">۱۰۰</span> میلیون</b></div>
      <input type="range" min="50" max="300" step="10" value="100" data-rate="4000" data-out="dp" data-lbl="dv">
      <div class="crow" style="margin-top:1rem;font-size:.78rem;color:#7f8798"><span>۵۰ میلیون</span><span>۳۰۰ میلیون</span></div>
      <div class="cout"><span>مبلغ قابل پرداخت</span><b><span id="dp">۴۰۰٬۰۰۰</span> تومان</b></div>
    </div>
    <div class="ccard rv">
      <h3>کوین اسکای‌بلاک <span class="pill y">هر میلیون ۶٬۰۰۰</span></h3>
      <p class="hint">تحویل ۱ تا ۷۲ ساعت</p>
      <div class="crow"><span>مقدار</span><b><span id="sv">۱۰۰</span> میلیون</b></div>
      <input type="range" min="10" max="500" step="10" value="100" data-rate="6000" data-out="sp" data-lbl="sv">
      <div class="crow" style="margin-top:1rem;font-size:.78rem;color:#7f8798"><span>۱۰ میلیون</span><span>۵۰۰ میلیون</span></div>
      <div class="cout"><span>مبلغ قابل پرداخت</span><b><span id="sp">۶۰۰٬۰۰۰</span> تومان</b></div>
    </div>
  </div>
  <div style="margin-top:1.2rem"><div class="note "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg><div>قیمت‌ها ممکن است بر اساس نرخ ارز به‌روزرسانی شوند؛ قیمت قطعی هنگام ثبت سفارش در تیکت اعلام می‌شود.</div></div></div>
</div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay.jpg" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>قیمت را دیدی؟ حالا سفارش بده.</h2>
    <p>در دیسکورد تیکت بزن، محصول و مقدار را بگو، فاکتور بگیر و پرداخت کن.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد کینیوا</a>
      <a class="btn btn-ghost" href="products.html">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,process:`<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><a href="process.html">مراحل سفارش</a></div></div>

<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><span style="color:#c3c9d6">راهنما</span><span>/</span><span style="color:#c3c9d6">مراحل سفارش</span></div></div>
<section class="phero"><div class="wrap">
  <span class="eyebrow">راهنما</span><h1>مراحل سفارش در کینیوا</h1>
  <p class="lead" style="max-width:70ch">کل فرآیند داخل دیسکورد انجام می‌شود؛ بدون فرم پیچیده، بدون ثبت‌نام اضافه و بدون نیاز به کارت خارجی.</p>
</div></section>
<section style="padding-top:0"><div class="wrap"><div class="steps">
  <div class="step rv"><h3>ورود به دیسکورد</h3><p>با لینک دعوت وارد سرور کینیوا شاپ شوید.</p></div>
  <div class="step rv"><h3>ثبت تیکت</h3><p>نام محصول، مقدار و اگر لازم است نام اکانت را بنویسید.</p></div>
  <div class="step rv"><h3>پرداخت ریالی</h3><p>فاکتور صادر می‌شود و مبلغ را ریالی پرداخت می‌کنید.</p></div>
  <div class="step rv"><h3>تحویل</h3><p>سفارش در بازهٔ اعلام‌شده تحویل و تا پایان پیگیری می‌شود.</p></div>
</div></div></section>
<section><div class="wrap grid g2">
  <div><h3 class="sub">زمان تحویل هر دسته</h3>
  <div class="tablewrap rv"><table><thead><tr><th>دسته</th><th>زمان تحویل</th></tr></thead><tbody><tr><td>اکانت ماینکرفت</td><td>تا ۴۸ ساعت</td></tr><tr><td>پول دونات اس ام پی</td><td>حداقل ۴۸ ساعت</td></tr><tr><td>محصولات هایپیکسل</td><td>۱ تا ۲۴ ساعت</td></tr><tr><td>کوین اسکای‌بلاک</td><td>۱ تا ۷۲ ساعت</td></tr><tr><td>خدمات طراحی</td><td>۱ تا ۷۲ ساعت</td></tr><tr><td>کیپ اپتیفاین</td><td>۱ تا ۷۲ ساعت</td></tr><tr><td>پک فونت</td><td>فوری</td></tr></tbody></table></div>
  </div>
  <div><h3 class="sub">قبل از سفارش آماده کن</h3>
    <div class="card">
      <ul style="list-style:none;display:grid;gap:.7rem;font-size:.9rem;color:#c8cede">
        <li style="display:flex;gap:.6rem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12 5 5L20 6"/></svg><span>نام دقیق محصول یا سرویس</span></li>
        <li style="display:flex;gap:.6rem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12 5 5L20 6"/></svg><span>مقدار (مثلاً چند میلیون پول)</span></li>
        <li style="display:flex;gap:.6rem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12 5 5L20 6"/></svg><span>نام اکانت یا کلاینت (برای کازمتیک، کیپ و اکانت)</span></li>
        <li style="display:flex;gap:.6rem"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12 5 5L20 6"/></svg><span>نمونهٔ مورد علاقه (برای سفارش‌های طراحی)</span></li>
      </ul>
    </div>
    <div style="margin-top:1rem"><div class="note blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg><div>اگر مطمئن نیستی کدام محصول مناسب توست، در تیکت توضیح بده تا راهنمایی شوی — بدون اجبار به خرید.</div></div></div>
  </div>
</div></section>
<section><div class="wrap"><div class="sec-hd"><span class="eyebrow">بعد از سفارش</span><h2 class="sec">چه اتفاقی می‌افتد؟</h2></div>
<div class="grid g3">
  <div class="card hover rv"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/></svg></div><h3>پردازش</h3><p>سفارش ثبت و در صف انجام قرار می‌گیرد؛ وضعیت را در همان تیکت می‌بینی.</p></div>
  <div class="card hover rv"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="13" rx="2.5"/><path d="M2 10h20"/></svg></div><h3>تحویل</h3><p>اطلاعات یا فایل نهایی در تیکت ارسال می‌شود.</p></div>
  <div class="card hover rv"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7.5 3.5v5c0 4.4-3.1 8.3-7.5 9.5-4.4-1.2-7.5-5.1-7.5-9.5v-5L12 3Z"/><path d="m9 12 2 2 4-4"/></svg></div><h3>پیگیری</h3><p>اگر مشکلی باشد، همان تیکت باز می‌ماند تا حل شود.</p></div>
</div></div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay.jpg" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>سوالی داری؟ تیکت بزن</h2>
    <p>پشتیبانی کینیوا همه‌روزه در دیسکورد آنلاین است.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد کینیوا</a>
      <a class="btn btn-ghost" href="products.html">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,products:`<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><a href="products.html">محصولات</a></div></div>

<section class="phero"><div class="wrap">
  <span class="eyebrow">کاتالوگ کامل</span>
  <h1>همهٔ محصولات کینیوا شاپ</h1>
  <p class="lead" style="max-width:70ch">۱۷ محصول و سرویس فعال در ۷ دسته. با فیلترها دستهٔ مورد نظرت را انتخاب کن،
  یا روی هر محصول بزن تا وارد صفحهٔ اختصاصی‌اش شوی.</p>
  <div class="badges"><span class="pill g">پرداخت ریالی</span><span class="pill y">ضمانت بازگشت وجه</span><span class="pill b">سفارش با تیکت</span></div>
</div></section>
<section style="padding-top:0"><div class="wrap">
  <div class="filters" id="filters">
    <button class="act" data-f="all">همه</button>
    <button data-f="minecraft">ماینکرفت</button>
    <button data-f="donut">دونات اس ام پی</button>
    <button data-f="hypixel">هایپیکسل</button>
    <button data-f="design">فتوشاپ</button>
    <button data-f="overlay">اورلی</button>
    <button data-f="cosmetic">کازمتیک</button>
    <button data-f="cape">کیپ</button>
  </div>
  <div class="pgrid grid g3" id="pgrid"><article data-cat="minecraft" class="pcard rv">
  <a class="thumb" href="cat-minecraft.html"><img src="assets/img/products/p-minecraft-account.jpg" alt="اکانت ماینکرفت اقتصادی" loading="lazy" width="1600" height="900"><span class="tag">ماینکرفت</span></a>
  <div class="body">
    <h3><a href="cat-minecraft.html">اکانت ماینکرفت اقتصادی</a></h3>
    <p class="desc">اکانت کامل با فول اکسس؛ جاوا و بدراک؛ اطلاعات قابل تغییر.</p>
    <div class="pills"><span class="pill g">فول اکسس</span><span class="pill y">۴۸ ساعت</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۲٬۲۴۹٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="minecraft" class="pcard rv">
  <a class="thumb" href="cat-minecraft.html"><img src="assets/img/products/p-skin-pro.jpg" alt="اکانت با اولویت تحویل" loading="lazy" width="1600" height="900"><span class="tag">ماینکرفت</span></a>
  <div class="body">
    <h3><a href="cat-minecraft.html">اکانت با اولویت تحویل</a></h3>
    <p class="desc">ثبت سفارش با اولویت در تیکت برای تحویل در کمترین زمان.</p>
    <div class="pills"><span class="pill g">اولویت</span><span class="pill ">فول اکسس</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۲٬۲۴۹٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="donut" class="pcard rv">
  <a class="thumb" href="cat-donut.html"><img src="assets/img/products/p-donut-million.jpg" alt="پول دونات — هر میلیون" loading="lazy" width="1600" height="900"><span class="tag">دونات</span></a>
  <div class="body">
    <h3><a href="cat-donut.html">پول دونات — هر میلیون</a></h3>
    <p class="desc">حداقل ۵۰ میلیون؛ موجودی سرور ۳۰۰ میلیون.</p>
    <div class="pills"><span class="pill g">۳۰۰M موجودی</span><span class="pill y">۴۸ ساعت</span></div>
    <div class="pfoot">
      <div class="price"><span>هر میلیون</span><b>۴٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="hypixel" class="pcard rv">
  <a class="thumb" href="cat-hypixel.html"><img src="assets/img/products/p-hypixel.jpg" alt="محصولات هایپیکسل" loading="lazy" width="1600" height="900"><span class="tag">هایپیکسل</span></a>
  <div class="body">
    <h3><a href="cat-hypixel.html">محصولات هایپیکسل</a></h3>
    <p class="desc">همهٔ آیتم‌های موجود؛ قیمت دلار روز.</p>
    <div class="pills"><span class="pill g">۱ تا ۲۴ ساعت</span><span class="pill ">امن و قانونی</span></div>
    <div class="pfoot">
      <div class="price ask"><span>قیمت</span><b>استعلام در تیکت</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="hypixel" class="pcard rv">
  <a class="thumb" href="cat-hypixel.html"><img src="assets/img/products/p-skyblock.jpg" alt="کوین اسکای‌بلاک — هر میلیون" loading="lazy" width="1600" height="900"><span class="tag">اسکای‌بلاک</span></a>
  <div class="body">
    <h3><a href="cat-hypixel.html">کوین اسکای‌بلاک — هر میلیون</a></h3>
    <p class="desc">کوین اسکای‌بلاک با تحویل ۱ تا ۷۲ ساعت.</p>
    <div class="pills"><span class="pill g">۷۲ ساعت</span><span class="pill ">قیمت میلیونی</span></div>
    <div class="pfoot">
      <div class="price"><span>هر میلیون</span><b>۶٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="design" class="pcard rv">
  <a class="thumb" href="cat-design.html"><img src="assets/img/products/p-logo.jpg" alt="طراحی لوگو" loading="lazy" width="1600" height="900"><span class="tag">فتوشاپ</span></a>
  <div class="body">
    <h3><a href="cat-design.html">طراحی لوگو</a></h3>
    <p class="desc">لوگوی اختصاصی برای سرور یا کانال شما.</p>
    <div class="pills"><span class="pill g">اختصاصی</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۳۰۰٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="design" class="pcard rv">
  <a class="thumb" href="cat-design.html"><img src="assets/img/products/p-logo.jpg" alt="بنر ساده" loading="lazy" width="1600" height="900"><span class="tag">فتوشاپ</span></a>
  <div class="body">
    <h3><a href="cat-design.html">بنر ساده</a></h3>
    <p class="desc">بنر مناسب دیسکورد و شبکه‌های اجتماعی.</p>
    <div class="pills"><span class="pill ">ساده</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۳۵۰٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="design" class="pcard rv">
  <a class="thumb" href="cat-design.html"><img src="assets/img/products/p-logo.jpg" alt="بنر حرفه‌ای" loading="lazy" width="1600" height="900"><span class="tag">فتوشاپ</span></a>
  <div class="body">
    <h3><a href="cat-design.html">بنر حرفه‌ای</a></h3>
    <p class="desc">نسخهٔ کامل با جزئیات و بازنگری بیشتر.</p>
    <div class="pills"><span class="pill g">حرفه‌ای</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۵۰۰٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="design" class="pcard rv">
  <a class="thumb" href="cat-design.html"><img src="assets/img/products/p-logo.jpg" alt="تامنیل یوتیوب (ساده)" loading="lazy" width="1600" height="900"><span class="tag">فتوشاپ</span></a>
  <div class="body">
    <h3><a href="cat-design.html">تامنیل یوتیوب (ساده)</a></h3>
    <p class="desc">تامنیل کلیک‌خور برای ویدیوهای گیمینگ.</p>
    <div class="pills"><span class="pill ">ساده</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۲۰۰٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="design" class="pcard rv">
  <a class="thumb" href="cat-design.html"><img src="assets/img/products/p-logo.jpg" alt="تامنیل یوتیوب (حرفه‌ای)" loading="lazy" width="1600" height="900"><span class="tag">فتوشاپ</span></a>
  <div class="body">
    <h3><a href="cat-design.html">تامنیل یوتیوب (حرفه‌ای)</a></h3>
    <p class="desc">نسخهٔ حرفه‌ای با ترکیب‌بندی قوی‌تر.</p>
    <div class="pills"><span class="pill g">حرفه‌ای</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۳۰۰٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="design" class="pcard rv">
  <a class="thumb" href="cat-design.html"><img src="assets/img/products/p-skin-pro.jpg" alt="اسکین ماینکرفت (ساده)" loading="lazy" width="1600" height="900"><span class="tag">فتوشاپ</span></a>
  <div class="body">
    <h3><a href="cat-design.html">اسکین ماینکرفت (ساده)</a></h3>
    <p class="desc">اسکین اختصاصی آمادهٔ آپلود.</p>
    <div class="pills"><span class="pill ">ساده</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۲۴۵٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="design" class="pcard rv">
  <a class="thumb" href="cat-design.html"><img src="assets/img/products/p-skin-pro.jpg" alt="اسکین ماینکرفت (حرفه‌ای)" loading="lazy" width="1600" height="900"><span class="tag">فتوشاپ</span></a>
  <div class="body">
    <h3><a href="cat-design.html">اسکین ماینکرفت (حرفه‌ای)</a></h3>
    <p class="desc">اسکین با جزئیات و سایه‌پردازی بیشتر.</p>
    <div class="pills"><span class="pill g">حرفه‌ای</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۳۰۰٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="design" class="pcard rv">
  <a class="thumb" href="cat-design.html"><img src="assets/img/products/p-anime.jpg" alt="انیمه‌آرت" loading="lazy" width="1600" height="900"><span class="tag">فتوشاپ</span></a>
  <div class="body">
    <h3><a href="cat-design.html">انیمه‌آرت</a></h3>
    <p class="desc">آرت انیمه‌استایل در سه سطح.</p>
    <div class="pills"><span class="pill y">۳ سطح</span></div>
    <div class="pfoot">
      <div class="price"><span>از</span><b>۲۵۰٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="overlay" class="pcard rv">
  <a class="thumb" href="cat-overlay.html"><img src="assets/img/products/p-overlay-good.jpg" alt="اورلی استریم — کیفیت خوب" loading="lazy" width="1600" height="900"><span class="tag">اورلی</span></a>
  <div class="body">
    <h3><a href="cat-overlay.html">اورلی استریم — کیفیت خوب</a></h3>
    <p class="desc">پک اورلی شامل فریم وب‌کم، چت‌باکس و هشدارها.</p>
    <div class="pills"><span class="pill ">کیفیت خوب</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۲۴۵٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="overlay" class="pcard rv">
  <a class="thumb" href="cat-overlay.html"><img src="assets/img/products/p-overlay-good.jpg" alt="اورلی استریم — کیفیت عالی" loading="lazy" width="1600" height="900"><span class="tag">اورلی</span></a>
  <div class="body">
    <h3><a href="cat-overlay.html">اورلی استریم — کیفیت عالی</a></h3>
    <p class="desc">نسخهٔ کامل و پرجزئیات با هماهنگی کامل با برند شما.</p>
    <div class="pills"><span class="pill g">کیفیت عالی</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۳۰۰٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="overlay" class="pcard rv">
  <a class="thumb" href="cat-overlay.html"><img src="assets/img/products/p-font.jpg" alt="پک فونت اختصاصی" loading="lazy" width="1600" height="900"><span class="tag">اورلی</span></a>
  <div class="body">
    <h3><a href="cat-overlay.html">پک فونت اختصاصی</a></h3>
    <p class="desc">پک فونت فارسی/لاتین مناسب اورلی و تامنیل.</p>
    <div class="pills"><span class="pill ">پک فونت</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۱۰۰٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="cosmetic" class="pcard rv">
  <a class="thumb" href="cat-cosmetics.html"><img src="assets/img/products/p-cosmetics.jpg" alt="کازمتیک کلاینت‌های ماینکرفت" loading="lazy" width="1600" height="900"><span class="tag">کازمتیک</span></a>
  <div class="body">
    <h3><a href="cat-cosmetics.html">کازمتیک کلاینت‌های ماینکرفت</a></h3>
    <p class="desc">همهٔ کلاینت‌ها؛ قیمت بر اساس دلاری بودن آیتم.</p>
    <div class="pills"><span class="pill g">همهٔ کلاینت‌ها</span><span class="pill y">دلاری</span></div>
    <div class="pfoot">
      <div class="price ask"><span>قیمت</span><b>استعلام در تیکت</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="cape" class="pcard rv">
  <a class="thumb" href="cat-cape.html"><img src="assets/img/products/p-cape.jpg" alt="کیپ اپتیفاین" loading="lazy" width="1600" height="900"><span class="tag">کیپ</span></a>
  <div class="body">
    <h3><a href="cat-cape.html">کیپ اپتیفاین</a></h3>
    <p class="desc">کیپ اختصاصی روی اکانت شما.</p>
    <div class="pills"><span class="pill g">اختصاصی</span><span class="pill y">۷۲ ساعت</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۳۲۹٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article></div>
</div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay.jpg" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>محصولی پیدا نکردی؟ در تیکت بپرس.</h2>
    <p>اگر محصول یا سرویس خاصی می‌خواهی که در لیست نیست، در دیسکورد تیکت بزن؛ اگر قابل تهیه باشد برایت انجام می‌دهیم.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/KHsEBj6kG3" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد کینیوا</a>
      <a class="btn btn-ghost" href="products.html">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,terms:`<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><a href="terms.html">قوانین</a></div></div>

<div class="wrap"><div class="crumbs"><a href="index.html">خانه</a><span>/</span><span style="color:#c3c9d6">قوانین</span></div></div>
<section class="phero"><div class="wrap"><span class="eyebrow">قوانین</span><h1>قوانین و شرایط استفاده</h1>
<p class="lead" style="max-width:70ch">این صفحه شرایط خرید از کینیوا شاپ را مشخص می‌کند. با ثبت سفارش، این شرایط را می‌پذیری.</p></div></section>
<section style="padding-top:0"><div class="wrap-narrow"><div class="article">
  <h2>۱. ثبت سفارش</h2><p>سفارش‌ها فقط از طریق تیکت در سرور رسمی دیسکورد کینیوا ثبت می‌شوند. اطلاعات محصول، مقدار و قیمت در همان تیکت نهایی می‌شود.</p>
  <h2>۲. قیمت‌ها</h2><p>قیمت‌های سایت به تومان است. قیمت محصولاتی که به دلار وابسته‌اند (هایپیکسل و کازمتیک) هنگام سفارش اعلام می‌شود. کینیوا حق به‌روزرسانی قیمت‌ها را دارد.</p>
  <h2>۳. پرداخت</h2><p>پرداخت ریالی و بعد از صدور فاکتور انجام می‌شود. سفارش پس از تأیید پرداخت وارد صف انجام می‌شود.</p>
  <h2>۴. تحویل</h2><p>زمان تحویل هر محصول در صفحهٔ همان محصول نوشته شده است. تأخیرهای خارج از کنترل (مثل اختلال سرور مقصد) به مشتری اطلاع داده می‌شود.</p>
  <h2>۵. بازگشت وجه</h2><p>اگر سفارش در بازهٔ اعلام‌شده انجام نشود و راه‌حل جایگزینی نباشد، مبلغ بازگردانده می‌شود. جزئیات در صفحهٔ ضمانت آمده است.</p>
  <h2>۶. مسئولیت‌ها</h2><p>مشتری مسئول درست بودن اطلاعاتی است که ارسال می‌کند. کینیوا مسئول عواقب ناشی از نقض قوانین خود بازی یا سرور مقصد نیست.</p>
  <h2>۷. حریم خصوصی</h2><p>اطلاعات شما فقط برای انجام سفارش استفاده می‌شود و در اختیار شخص ثالث قرار نمی‌گیرد.</p>
</div></div></section>`},r=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),h=s=>c[s],V=s=>`<span class="pill ${s.tone==="green"?"g":s.tone==="gold"?"y":s.tone==="blue"?"b":""}">${r(s.text)}</span>`,N=(s,a={})=>`
<article class="pcard rv" data-cat="${s.category}">
  <a class="thumb" href="${s.href}" aria-label="${r(s.title)}">
    <img src="${s.image}" alt="${r(s.title)}" loading="lazy" width="900" height="900">
    ${s.badge?`<span class="badge-hot">${r(s.badge)}</span>`:""}
  </a>
  <div class="body">
    <h3><a href="${s.href}">${r(s.title)}</a></h3>
    ${a.compact?"":`<p class="desc">${r(s.desc)}</p>`}
    <div class="pills">${s.pills.map(V).join("")}</div>
    <div class="pfoot">
      <div class="price${s.ask?" ask":""}"><span>${r(s.priceLabel)}</span><b>${r(s.price)}</b></div>
      <a class="btn btn-gold btn-sm" href="${v}" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article>`,b=(s,a,t="",i=!0)=>`
<div class="sec-hd${i?" center":""}">
  <span class="eyebrow">${r(s)}</span>
  <h2 class="sec">${a}</h2>
  ${t?`<p class="sec-p">${r(t)}</p>`:""}
</div>`,u=(s,a,t)=>`
<div class="card hover rv"><div class="ic">${h(s)}</div>
  <h3>${r(a)}</h3><p>${r(t)}</p></div>`,T=s=>`
<div class="faq">${s.map((a,t)=>`<details class="rv"${t===0?" open":""}><summary>${r(a.q)}</summary><div class="ans">${r(a.a)}</div></details>`).join("")}</div>`,D=(s,a)=>`
<section class="cta-band"><div class="wrap cta-in">
  <div>
    <h2>${r(s)}</h2>
    <p>${r(a)}</p>
  </div>
  <a class="btn btn-gold btn-lg" href="${v}" target="_blank" rel="noopener">${h("discord")} ثبت سفارش در دیسکورد</a>
</div></section>`,R=()=>`
<div class="stat-strip rv">
  <div><b data-count="763">۷۶۳</b><span>عضو انجمن</span></div>
  <div><b data-count="30">۳۰</b><span>آنلاین</span></div>
  <div><b data-count="17">۱۷</b><span>محصول فعال</span></div>
  <div><b>۴۸h</b><span>حداکثر تحویل</span></div>
</div>`,k=[{eyebrow:"فروشگاه رسمی انجمن کینیوا",title:"اکانت ماینکرفت فول اکسس",em:"با تحویل تا ۴۸ ساعت",text:"اکانت کامل جاوا و بدراک با اطلاعات قابل تغییر، پشتیبانی واقعی و ضمانت بازگشت وجه.",primary:"ثبت سفارش در دیسکورد",primaryHref:v,ghost:"جزئیات محصول",ghostHref:"cat-minecraft.html",image:"assets/img/products/p-minecraft-account.jpg",tags:["فول اکسس","جاوا + بدراک","تغییر اطلاعات"]},{eyebrow:"دونات اس ام پی",title:"پول دونات از ۴٬۰۰۰ تومان",em:"هر میلیون، بدون واسطه",text:"موجودی فعلی سرور ۳۰۰ میلیون است؛ حداقل خرید ۵۰ میلیون و تحویل مستقیم روی اکانت خودت.",primary:"ثبت سفارش در دیسکورد",primaryHref:v,ghost:"محاسبهٔ قیمت",ghostHref:"cat-donut.html",image:"assets/img/products/p-donut-million.jpg",tags:["موجودی ۳۰۰M","حداقل ۵۰M","تحویل ۴۸h"]},{eyebrow:"خدمات گرافیک کینیوا",title:"لوگو، بنر، تامنیل و اورلی",em:"اختصاصی برای استریم تو",text:"از طرح لوگو تا پک کامل اورلی استریم و انیمه‌آرت؛ همه با تحویل ۱ تا ۳ روز کاری.",primary:"ثبت سفارش در دیسکورد",primaryHref:v,ghost:"دیدن خدمات",ghostHref:"cat-design.html",image:"assets/img/products/p-logo.jpg",tags:["لوگو","اورلی","انیمه‌آرت"]}],F=()=>`
<section class="hero2">
  <div class="wrap">
    <div class="slider" id="heroSlider">
      ${k.map((s,a)=>`<article class="slide${a===0?" on":""}" data-i="${a}">
        <div class="slide-art"><img src="${s.image}" alt="${s.title}" width="900" height="900" ${a===0?'fetchpriority="high"':'loading="lazy"'}></div>
        <div class="slide-body">
          <span class="eyebrow">${s.eyebrow}</span>
          <h1>${s.title}<br><em class="grad">${s.em}</em></h1>
          <p>${s.text}</p>
          <div class="slide-tags">${s.tags.map(t=>`<span class="pill">${t}</span>`).join("")}</div>
          <div class="hero-btns">
            <a class="btn btn-gold btn-lg" href="${s.primaryHref}"${s.primaryHref.startsWith("http")?' target="_blank" rel="noopener"':""}>${h("discord")} ${s.primary}</a>
            <a class="btn btn-ghost btn-lg" href="${s.ghostHref}">${s.ghost}</a>
          </div>
        </div>
      </article>`).join("")}
      <button class="slide-nav prev" data-slide="prev" aria-label="قبلی">${h("chevron")}</button>
      <button class="slide-nav next" data-slide="next" aria-label="بعدی">${h("chevron")}</button>
      <div class="slider-dots" id="heroDots">${k.map((s,a)=>`<i class="${a===0?"on":""}"></i>`).join("")}</div>
    </div>
  </div>
</section>`,W=()=>`
<section class="quick-cats"><div class="wrap">
  ${b("دسته‌بندی","از کجا شروع کنیم؟","روی هر دسته بزن تا صفحهٔ کاملش با قیمت و جزئیات باز شود.")}
  <div class="cat-rail">
    ${y.map(s=>`<a class="cat-tile rv" href="${s.slug}">
        <img src="${s.image}" alt="${s.title}" loading="lazy" width="300" height="300">
        <span class="ct-body"><b>${s.title}</b><i>${s.note}</i></span>
      </a>`).join("")}
  </div>
</div></section>`,Y=()=>{const s=j.filter(t=>["mc-account","donut-million","hypixel","skyblock","logo","overlay-best","cape","anime-art"].includes(t.id)),a=[["all","همه"],["minecraft","ماینکرفت"],["donut","دونات"],["hypixel","هایپیکسل"],["design","فتوشاپ"],["overlay","اورلی"],["cosmetics","کازمتیک"],["cape","کیپ"]];return`
<section class="best"><div class="wrap">
  ${b("پرفروش‌ها","محصولات پرطرفدار کینیوا","قیمت‌ها به تومان و به‌روز است؛ سفارش فقط از طریق تیکت دیسکورد ثبت می‌شود.")}
  <div class="filters" id="filters">
    ${a.map(([t,i],l)=>`<button${l===0?' class="act"':""} data-f="${t}">${i}</button>`).join("")}
  </div>
  <div class="grid g4" id="grid">${s.map(t=>N(t,{compact:!0})).join("")}</div>
  <div class="center-cta"><a class="btn btn-ghost" href="products.html">مشاهدهٔ همهٔ ۱۷ محصول ${h("arrow")}</a></div>
</div></section>`},Q=()=>`
<section class="tight"><div class="wrap"><div class="grid g4">
  ${u("bolt","تحویل سریع","بیشتر سفارش‌ها ۱ تا ۲۴ ساعت و حداکثر تا ۴۸ ساعت تحویل داده می‌شوند.")}
  ${u("card","پرداخت ریالی","بدون کارت خارجی؛ مبلغ را ریالی پرداخت می‌کنید و فاکتور می‌گیرید.")}
  ${u("shield","ضمانت بازگشت وجه","اگر تحویل انجام نشود، مبلغ به‌صورت کامل بازگردانده می‌شود.")}
  ${u("clock","پشتیبانی ۲۴/۷","تیم پشتیبانی همیشه در دیسکورد آنلاین است؛ تیکت بزنید و پاسخ بگیرید.")}
</div></div></section>`,U=()=>`
<section class="steps-sec"><div class="wrap">
  ${b("فقط ۴ قدم","چطور سفارش بدهیم؟")}
  <div class="steps">
    ${[["ورود به دیسکورد","وارد سرور کینیوا شاپ شوید؛ لینک دعوت ثابت و عمومی است."],["ثبت تیکت","در چنل تیکت، محصول و مقدار مورد نظرتان را بنویسید."],["پرداخت ریالی","فاکتور و مبلغ نهایی اعلام می‌شود و ریالی پرداخت می‌کنید."],["تحویل و پشتیبانی","در بازهٔ اعلام‌شده تحویل می‌گیرید و تا پایان همراهتان هستیم."]].map(([s,a],t)=>`<div class="step rv"><span class="num">${t+1}</span><h3>${s}</h3><p>${a}</p></div>`).join("")}
  </div>
  <div class="center-cta"><a class="btn btn-ghost" href="process.html">راهنمای کامل سفارش ${h("arrow")}</a></div>
</div></section>`,X=()=>`
<section class="blog-teaser"><div class="wrap">
  ${b("وبلاگ کینیوا","راهنما و مقالات","چیزهایی که قبل از خرید باید بدانی.")}
  <div class="grid g3">
    ${M.map(s=>`<a class="bcard rv" href="${s.slug}">
        <img src="${s.image}" alt="${s.title}" loading="lazy" width="1280" height="720">
        <div class="body"><span class="bmeta"><b>${s.tag}</b> · ${s.time}</span>
          <h3>${s.title}</h3><p>${s.desc}</p><span class="more">ادامهٔ مطلب ${h("arrow")}</span></div>
      </a>`).join("")}
  </div>
</div></section>`,J=()=>`
${F()}
${W()}
${Y()}
${Q()}
<div class="wrap">${R()}</div>
${U()}
${X()}
<section class="home-faq"><div class="wrap">
  ${b("سوالات متداول","سؤال‌های پرتکرار")}
  ${T(C)}
  <div class="center-cta"><a class="btn btn-ghost" href="faq.html">همهٔ سوالات ${h("arrow")}</a></div>
</div></section>
${D("سفارش را در دیسکورد ثبت کن","کافی است در سرور کینیوا شاپ تیکت بزنی؛ بقیه‌اش با ما.")}`,w={index:J};for(const[s,a]of Object.entries(O))w[s]=()=>a;const $=document.body.dataset.page??"index",ss=document.body.dataset.active??$,x=document.getElementById("app");if(x){const s=w[$]??w.index;x.innerHTML=`${L(ss)}${s()}</main>${z()}`,document.body.dataset.ready="1",P()}else console.error("[kiniwa] #app not found");
