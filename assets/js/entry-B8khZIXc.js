(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))e(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&e(c)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function e(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();const b=(s,a=24)=>`<svg width="${a}" height="${a}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${s}</svg>`,m={discord:'<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.32 4.37A19.8 19.8 0 0 0 15.4 2.9a13.7 13.7 0 0 0-.62 1.28 18.3 18.3 0 0 0-5.55 0A13.7 13.7 0 0 0 8.6 2.9a19.7 19.7 0 0 0-4.92 1.47C.6 9.05-.27 13.6.16 18.1a19.9 19.9 0 0 0 6.03 3.05c.48-.66.9-1.36 1.27-2.1-.7-.26-1.37-.58-2-.96.17-.12.33-.25.49-.38a14.2 14.2 0 0 0 12.1 0c.16.13.32.26.49.38-.63.38-1.3.7-2 .96.37.74.79 1.44 1.27 2.1a19.8 19.8 0 0 0 6.03-3.05c.5-5.2-.86-9.72-3.52-13.73ZM8.02 15.33c-1.18 0-2.15-1.08-2.15-2.4 0-1.33.95-2.41 2.15-2.41 1.2 0 2.17 1.09 2.15 2.41 0 1.32-.95 2.4-2.15 2.4Zm7.96 0c-1.18 0-2.15-1.08-2.15-2.4 0-1.33.95-2.41 2.15-2.41 1.2 0 2.17 1.09 2.15 2.41 0 1.32-.95 2.4-2.15 2.4Z"/></svg>',bolt:b('<path d="M13 2 4.5 13.5H11l-1 8.5 8.5-11.5H12l1-8.5Z"/>'),card:b('<rect x="2.5" y="5" width="19" height="14" rx="3"/><path d="M2.5 10h19"/>'),shield:b('<path d="M12 3l7.5 3v6c0 4.5-3.2 7.7-7.5 9-4.3-1.3-7.5-4.5-7.5-9V6L12 3Z"/><path d="M9 12.2l2.1 2.1L15.4 10"/>'),clock:b('<circle cx="12" cy="12" r="9"/><path d="M12 7.5V12l3 1.8"/>'),search:b('<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>'),menu:b('<path d="M3.5 7h17M3.5 12h17M3.5 17h17"/>'),close:b('<path d="m6 6 12 12M18 6 6 18"/>'),cart:b('<path d="M3 4h2.4l2.2 11.2h9.9L19.5 7H6"/><circle cx="9.5" cy="19" r="1.6"/><circle cx="17" cy="19" r="1.6"/>'),chevron:b('<path d="m9 6 6 6-6 6"/>'),arrow:b('<path d="M5 12h14M13 6l6 6-6 6"/>'),star:b('<path d="m12 3.6 2.6 5.4 5.9.8-4.3 4.1 1 5.9-5.2-2.9-5.2 2.9 1-5.9L3.5 9.8l5.9-.8L12 3.6Z"/>'),info:b('<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>'),spark:b('<path d="M12 3v5M12 16v5M3 12h5M16 12h5M6.2 6.2l3 3M14.8 14.8l3 3M17.8 6.2l-3 3M9.2 14.8l-3 3"/>')},Z=s=>`<svg class="nav-ic" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${s}</svg>`,M={home:Z('<path d="M4 10.6 12 4l8 6.6V19a1.4 1.4 0 0 1-1.4 1.4h-3.2v-5.6H9.6V20.4H5.4A1.4 1.4 0 0 1 4 19Z"/><path d="M8.6 9.8 12 7l3.4 2.8" stroke-opacity=".55"/>'),products:Z('<rect x="3.2" y="3.2" width="7.4" height="7.4" rx="1.8"/><rect x="13.4" y="3.2" width="7.4" height="7.4" rx="1.8"/><rect x="3.2" y="13.4" width="7.4" height="7.4" rx="1.8"/><path d="M14.6 14.6h4.8v4.8h-4.8z" stroke-opacity=".45"/>'),prices:Z('<path d="M12.6 3.4h6.4a.6.6 0 0 1 .6.6v6.4a2 2 0 0 1-.6 1.4l-7.4 7.4a2 2 0 0 1-2.8 0l-5-5a2 2 0 0 1 0-2.8l7.4-7.4a2 2 0 0 1 1.4-.6Z"/><circle cx="16.2" cy="7.4" r="1.5"/>'),guarantee:Z('<path d="M12 3.2 19 6v6c0 4.3-3 7.3-7 8.8-4-1.5-7-4.5-7-8.8V6Z"/><path d="m9 12 2 2 4-4.2" />'),blog:Z('<path d="M5 19.4 8.4 18.6 19 8a2.2 2.2 0 0 0-3.1-3.1L5.3 15.5 4.6 19Z"/><path d="m14.8 6.2 3 3M5.4 15.6l3 3" stroke-opacity=".55"/>'),about:Z('<circle cx="12" cy="12" r="8.6"/><path d="M12 10.8v5.4"/><circle cx="12" cy="8" r=".9" fill="currentColor" stroke="none"/>'),contact:Z('<path d="M4.4 6.6A2.2 2.2 0 0 1 6.6 4.4h10.8a2.2 2.2 0 0 1 2.2 2.2v7.2a2.2 2.2 0 0 1-2.2 2.2H9.8L5.6 19.2V16a2.2 2.2 0 0 1-1.2-2Z"/><path d="M8.4 9h7.2M8.4 11.8h4.6" stroke-opacity=".55"/>')},vs=`<svg class="gs-mark" width="26" height="26" viewBox="0 0 32 32" fill="none" aria-hidden="true">
  <path d="M16 2.5 27.7 9v14L16 29.5 4.3 23V9Z" stroke="currentColor" stroke-width="1.2" stroke-opacity=".55"/>
  <path d="M16 8.2 22.6 12v7.6L16 23.4 9.4 19.6V12Z" stroke="currentColor" stroke-width="1.1"/>
  <path d="M16 12.4l3.2 1.9v3.8L16 20l-3.2-1.9v-3.8Z" fill="currentColor" fill-opacity=".85"/>
  <path d="M16 2.5v5.7M27.7 9l-5.1 3M4.3 9l5.1 3" stroke="currentColor" stroke-width=".9" stroke-opacity=".4"/>
</svg>`,y="https://discord.gg/sVAa2rw4wM",E=[{key:"minecraft",slug:"cat-minecraft/",title:"اکانت ماینکرفت",en:"Minecraft Accounts",short:"فول اکسس، جاوا و بدراک",image:"assets/img/products/p-minecraft-account.jpg",note:"تحویل تا ۴۸ ساعت"},{key:"donut",slug:"cat-donut/",title:"پول دونات اس ام پی",en:"Donut SMP",short:"هر میلیون ۴٬۷۰۰ تومان",image:"assets/img/products/p-donut-million.jpg",note:"موجودی ۳۰۰ میلیون"},{key:"hypixel",slug:"cat-hypixel/",title:"هایپیکسل و اسکای‌بلاک",en:"Hypixel & SkyBlock",short:"رنک، کوین و بوستر",image:"assets/img/products/p-hypixel.jpg",note:"تحویل ۱ تا ۲۴ ساعت"},{key:"design",slug:"cat-design/",title:"خدمات فتوشاپ",en:"Design Services",short:"لوگو، بنر، تامنیل، اسکین",image:"assets/img/products/p-logo.jpg",note:"از ۲۰۰٬۰۰۰ تومان"},{key:"overlay",slug:"cat-overlay/",title:"اورلی استریم",en:"Stream Overlay",short:"پک کامل + فونت اختصاصی",image:"assets/img/products/p-overlay-good.jpg",note:"از ۲۴۵٬۰۰۰ تومان"},{key:"cosmetics",slug:"cat-cosmetics/",title:"کازمتیک",en:"Cosmetics",short:"هاله، بال، کلاه",image:"assets/img/products/p-cosmetics.jpg",note:"قیمت دلاری آیتم"},{key:"cape",slug:"cat-cape/",title:"کیپ اپتیفاین",en:"OptiFine Capes",short:"اختصاصی روی اکانت شما",image:"assets/img/products/p-cape.jpg",note:"۳۲۹٬۰۰۰ تومان"}],$=[{id:"mc-account",title:"اکانت ماینکرفت اقتصادی",category:"minecraft",image:"assets/img/products/p-minecraft-account.jpg",desc:"اکانت کامل با فول اکسس برای جاوا و بدراک؛ اطلاعات هم قابل تغییر است.",priceLabel:"قیمت",price:"۳٬۴۷۰٬۰۰۰ تومان",pills:[{text:"فول اکسس",tone:"green"},{text:"جاوا + بدراک"},{text:"تغییر اطلاعات",tone:"gold"}],href:"product/mc-account/",badge:"پرفروش"},{id:"mc-priority",title:"اکانت با اولویت تحویل",category:"minecraft",image:"assets/img/products/p-mc-priority.jpg",desc:"همان اکانت با اولویت تحویل در تیکت.",priceLabel:"قیمت",price:"۳٬۸۹۰٬۰۰۰ تومان",pills:[{text:"اولویت",tone:"green"},{text:"فول اکسس"}],href:"product/mc-priority/"},{id:"donut-million",title:"پول دونات — هر میلیون",category:"donut",image:"assets/img/products/p-donut-million.jpg",desc:"حداقل خرید ۵۰ میلیون؛ موجودی فعلی سرور ۳۰۰ میلیون.",priceLabel:"هر میلیون",price:"۴٬۷۰۰ تومان",pills:[{text:"موجودی ۳۰۰M",tone:"green"},{text:"حداقل ۵۰M"},{text:"تحویل ۴۸h",tone:"gold"}],href:"product/donut-million/",badge:"تخفیف حجمی"},{id:"hypixel",title:"محصولات هایپیکسل",category:"hypixel",image:"assets/img/products/p-hypixel.jpg",desc:"رنک‌ها، بوستر و آیتم‌های هایپیکسل؛ قیمت وابسته به دلار روز.",priceLabel:"از",price:"۳٬۵۴۰٬۰۰۰ تومان",pills:[{text:"۱ تا ۲۴ ساعت",tone:"green"},{text:"امن و قانونی"}],href:"product/hypixel/"},{id:"skyblock",title:"کوین اسکای‌بلاک — هر میلیون",category:"hypixel",image:"assets/img/products/p-skyblock.jpg",desc:"کوین اسکای‌بلاک با تحویل ۱ تا ۷۲ ساعت.",priceLabel:"هر میلیون",price:"۶٬۹۰۰ تومان",pills:[{text:"۷۲ ساعت",tone:"green"},{text:"قیمت میلیونی"}],href:"product/skyblock/"},{id:"logo",title:"طراحی لوگو",category:"design",image:"assets/img/products/p-logo.jpg",desc:"لوگوی اختصاصی برای سرور یا کانال شما؛ سه پیشنهاد اولیه.",priceLabel:"قیمت",price:"۳۸۵٬۰۰۰ تومان",pills:[{text:"اختصاصی",tone:"green"}],href:"product/logo/"},{id:"banner-simple",title:"بنر ساده",category:"design",image:"assets/img/products/p-banner-simple.jpg",desc:"بنر مناسب دیسکورد و شبکه‌های اجتماعی.",priceLabel:"قیمت",price:"۴۳۰٬۰۰۰ تومان",pills:[{text:"ساده"}],href:"product/banner-simple/"},{id:"banner-pro",title:"بنر حرفه‌ای",category:"design",image:"assets/img/products/p-banner-pro.jpg",desc:"نسخهٔ کامل با جزئیات و بازنگری بیشتر.",priceLabel:"قیمت",price:"۶۲۰٬۰۰۰ تومان",pills:[{text:"حرفه‌ای",tone:"green"}],href:"product/banner-pro/"},{id:"thumbnail-simple",title:"تامنیل یوتیوب (ساده)",category:"design",image:"assets/img/products/p-thumb-simple.jpg",desc:"تامنیل کلیک‌خور برای ویدیوهای گیمینگ.",priceLabel:"قیمت",price:"۲۶۵٬۰۰۰ تومان",pills:[{text:"ساده"}],href:"product/thumbnail-simple/"},{id:"thumbnail-pro",title:"تامنیل یوتیوب (حرفه‌ای)",category:"design",image:"assets/img/products/p-thumb-pro.jpg",desc:"نسخهٔ حرفه‌ای با ترکیب‌بندی قوی‌تر.",priceLabel:"قیمت",price:"۳۸۵٬۰۰۰ تومان",pills:[{text:"حرفه‌ای",tone:"green"}],href:"product/thumbnail-pro/"},{id:"skin-simple",title:"اسکین ماینکرفت (ساده)",category:"design",image:"assets/img/products/p-skin-simple.jpg",desc:"اسکین اختصاصی آمادهٔ آپلود.",priceLabel:"قیمت",price:"۳۱۰٬۰۰۰ تومان",pills:[{text:"ساده"}],href:"product/skin-simple/"},{id:"skin-pro",title:"اسکین ماینکرفت (حرفه‌ای)",category:"design",image:"assets/img/products/p-skin-pro.jpg",desc:"اسکین با جزئیات و سایه‌پردازی بیشتر.",priceLabel:"قیمت",price:"۳۸۵٬۰۰۰ تومان",pills:[{text:"حرفه‌ای",tone:"green"}],href:"product/skin-pro/"},{id:"overlay-good",title:"اورلی استریم — کیفیت خوب",category:"overlay",image:"assets/img/products/p-overlay-good.jpg",desc:"پک اورلی شامل فریم وب‌کم، چت‌باکس و هشدارها.",priceLabel:"قیمت",price:"۳۱۰٬۰۰۰ تومان",pills:[{text:"کیفیت خوب"}],href:"product/overlay-good/"},{id:"overlay-best",title:"اورلی استریم — کیفیت عالی",category:"overlay",image:"assets/img/products/p-overlay-best.jpg",desc:"نسخهٔ کامل و پرجزئیات با هماهنگی کامل با برند شما.",priceLabel:"قیمت",price:"۳۸۵٬۰۰۰ تومان",pills:[{text:"کیفیت عالی",tone:"green"}],href:"product/overlay-best/"},{id:"font-pack",title:"پک فونت اختصاصی",category:"overlay",image:"assets/img/products/p-font.jpg",desc:"پک فونت فارسی/لاتین مناسب اورلی و تامنیل.",priceLabel:"قیمت",price:"۱۴۵٬۰۰۰ تومان",pills:[{text:"پک فونت"}],href:"product/font-pack/"},{id:"cosmetics",title:"کازمتیک کلاینت‌های ماینکرفت",category:"cosmetics",image:"assets/img/products/p-cosmetics.jpg",desc:"همهٔ کلاینت‌ها؛ قیمت بر اساس دلاری بودن آیتم.",priceLabel:"قیمت",price:"استعلام در تیکت",pills:[{text:"همهٔ کلاینت‌ها",tone:"green"},{text:"دلاری",tone:"gold"}],href:"product/cosmetics/",ask:!0},{id:"cape",title:"کیپ اپتیفاین",category:"cape",image:"assets/img/products/p-cape.jpg",desc:"کیپ اختصاصی روی اکانت شما؛ برای همهٔ بازیکن‌های سرور قابل مشاهده است.",priceLabel:"قیمت",price:"۴۲۰٬۰۰۰ تومان",pills:[{text:"اختصاصی",tone:"green"},{text:"۱ تا ۷۲ ساعت",tone:"gold"}],href:"product/cape/"}],hs=[{slug:"blog-minecraft-account/",title:"راهنمای کامل خرید اکانت ماینکرفت",desc:"تفاوت اکانت فول اکسس و اکانت معمولی، ریسک‌ها و چک‌لیست قبل از خرید.",image:"assets/img/blog-account.jpg",tag:"راهنمای خرید",time:"۶ دقیقه"},{slug:"blog-donut-smp/",title:"اقتصاد پول دونات اس ام پی چطور کار می‌کند؟",desc:"قیمت هر میلیون، حداقل خرید و بهترین زمان برای خرید حجم بالا.",image:"assets/img/blog-donut.jpg",tag:"دونات اس ام پی",time:"۵ دقیقه"},{slug:"blog-stream-overlay/",title:"چک‌لیست اورلی استریم حرفه‌ای",desc:"چه اجزایی یک پک اورلی کامل باید داشته باشد و چطور با برند شما هماهنگ شود.",image:"assets/img/blog-overlay.jpg",tag:"استریم",time:"۴ دقیقه"}],ls=[{q:"چطور سفارش ثبت کنم؟",a:"در سرور دیسکورد یوزورا تیکت بزنید و محصول را بنویسید؛ زمان تحویل اعلام می‌شود."},{q:"پرداخت چگونه انجام می‌شود؟",a:"پرداخت ریالی و داخل ایران است؛ کارت خارجی لازم نیست و فاکتور صادر می‌شود."},{q:"زمان تحویل چقدر است؟",a:"اکانت ماینکرفت تا ۴۸ ساعت، محصولات هایپیکسل ۱ تا ۲۴ ساعت، اسکای‌بلاک تا ۷۲ ساعت و خدمات طراحی بین ۱ تا ۳ روز کاری."},{q:"اگر سفارش انجام نشود چه می‌شود؟",a:"اگر تحویل انجام نشود، مبلغ کامل برمی‌گردد. جزئیات در صفحهٔ ضمانت است."}],p=s=>s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),o=s=>m[s],gs=[400,800,1280],ms=[280,480,900],z=(s,a)=>{const t=/^assets\/img\/(.+)\.(?:jpg|png)$/.exec(s),e=a.cls?` class="${a.cls}"`:"",r=a.eager?'fetchpriority="high"':'loading="lazy"';if(!t)return`<img src="${s}" alt="${p(a.alt)}" width="${a.w}" height="${a.h}"${e} ${r} decoding="async">`;const i=`assets/img/${t[1]}`,c=i.includes("/blog-")||i.includes("blog-")?gs:ms,l=c.map(n=>`${i}-${n}.webp ${n}w`).join(", "),g=c[Math.min(1,c.length-1)];return`<img src="${i}-${g}.webp" srcset="${l}" sizes="${a.sizes}" alt="${p(a.alt)}" width="${a.w}" height="${a.h}"${e} ${r} decoding="async"${a.attrs?" "+a.attrs:""}>`},cs=s=>`<span class="pill ${s.tone==="green"?"g":s.tone==="gold"?"y":s.tone==="blue"?"b":""}">${p(s.text)}</span>`,R=(s,a={})=>`
<article class="pcard rv" data-cat="${s.category}">
  <a class="thumb" href="${s.href}" aria-label="${p(s.title)}">
    ${z(s.image,{alt:s.title,sizes:"(max-width:700px) 90vw, (max-width:1100px) 45vw, 340px",w:900,h:900})}
    ${s.badge?`<span class="badge-hot">${p(s.badge)}</span>`:""}
  </a>
  <div class="body">
    <h3><a href="${s.href}">${p(s.title)}</a></h3>
    ${a.compact?"":`<p class="desc">${p(s.desc)}</p>`}
    <div class="pmeta">
      <span class="pcode">کد ${p(s.id.slice(0,2).toUpperCase())}-${String($.findIndex(t=>t.id===s.id)+1).padStart(2,"0")}</span>
      <span class="prate">${o("star")} ۴٫۹ <i>(${18+s.id.length*7%60} نظر)</i></span>
    </div>
    <div class="pills">${s.pills.map(cs).join("")}</div>
    <div class="pfoot">
      <div class="price${s.ask?" ask":""}"><span>${p(s.priceLabel)}</span><b>${p(s.price)}</b></div>
      <a class="btn btn-gold btn-sm" href="${y}" target="_blank" rel="noopener">سفارش ${o("arrow")}</a>
    </div>
  </div>
</article>`,L=(s,a,t="",e=!0,r)=>r?`<div class="sec-hd row">
  <div>${s?`<span class="eyebrow">${p(s)}</span>`:""}<h2 class="sec">${a}</h2>
  ${t?`<p class="sec-p">${p(t)}</p>`:""}</div>
  <a class="btn btn-ghost btn-sm" href="${r.href}">${p(r.label)} ${o("arrow")}</a>
</div>`:`<div class="sec-hd${e?" center":""}">
  ${s?`<span class="eyebrow">${p(s)}</span>`:""}
  <h2 class="sec">${a}</h2>
  ${t?`<p class="sec-p">${p(t)}</p>`:""}
</div>`,ds=s=>`
<div class="faq">${s.map((a,t)=>`<details class="rv"${t===0?" open":""}><summary>${p(a.q)}</summary><div class="ans">${p(a.a)}</div></details>`).join("")}</div>`,ws=(s,a)=>`
<section class="cta-band"><div class="wrap cta-in">
  <div>
    <h2>${p(s)}</h2>
    <p>${p(a)}</p>
  </div>
  <a class="btn btn-gold btn-lg" href="${y}" target="_blank" rel="noopener">${o("discord")} ثبت سفارش در دیسکورد</a>
</div></section>`,ns=s=>`
<div class="wrap"><nav class="crumbs" aria-label="مسیر">
  <a href=".">خانه</a>
  ${s.map(a=>`<span>/</span>${a.href?`<a href="${a.href}">${p(a.label)}</a>`:`<span class="cur">${p(a.label)}</span>`}`).join("")}
</nav></div>`,bs=()=>`
<div class="stat-strip rv">
  <div><b data-count="763">۷۶۳</b><span>عضو انجمن</span></div>
  <div><b data-count="30">۳۰</b><span>آنلاین</span></div>
  <div><b data-count="18">۱۸</b><span>محصول فعال</span></div>
  <div><b>۴۸h</b><span>حداکثر تحویل</span></div>
</div>`,us=[{href:"./",label:"خانه",key:"home"},{href:"products/",label:"محصولات",key:"products"},{href:"prices/",label:"قیمت‌ها",key:"prices"},{href:"guarantee/",label:"ضمانت",key:"guarantee"},{href:"blog/",label:"وبلاگ",key:"blog"},{href:"about/",label:"درباره ما",key:"about"},{href:"contact/",label:"تماس",key:"contact"}],ys=()=>`
<div class="mega" role="menu">
  <div class="mega-grid">
    ${E.map((s,a)=>`<a class="mega-item" href="${s.slug}" role="menuitem" style="--i:${a}">
        ${z(s.image,{alt:"",sizes:"120px",w:120,h:120})}
        <span><b>${s.title}</b><i>${s.short}</i></span>
      </a>`).join("")}
  </div>
  <div class="mega-foot">
    <span>۱۷ محصول در ۷ دسته</span>
    <a href="products/">دیدن کاتالوگ کامل ${m.chevron}</a>
  </div>
</div>`,fs=s=>`
<div class="topstrip">
  <div class="wrap ts-in">
    <div class="ts-msg"><i class="dotlive"></i> پشتیبانی آنلاین در دیسکورد · پاسخ‌گویی لحظه‌ای</div>
    <div class="ts-links">
      <span>${m.shield} ضمانت بازگشت وجه</span>
      <span>${m.card} پرداخت ریالی</span>
      <a href="${y}" target="_blank" rel="noopener">${m.discord} ورود به دیسکورد</a>
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
      ${m.search}
      <input id="searchInput" type="search" placeholder="جستجوی محصول…" aria-label="جستجو">
      <div class="search-pop" id="searchPop" hidden></div>
    </form>

    <div class="head-actions">
      <a class="btn btn-gold btn-sm head-cta" href="${y}" target="_blank" rel="noopener">${m.discord} ثبت سفارش</a>
      <button class="burger" id="burger" aria-label="منو" aria-expanded="false">${m.menu}</button>
    </div>
  </div>

  <nav class="main-nav" aria-label="منوی اصلی">
    <div class="wrap nav-in">
      <ul>
        ${us.map(a=>{const t=a.key===s?' class="act"':"",e=a.key&&a.key in M?M[a.key]:"";return a.key==="products"?`<li class="has-mega"><a href="${a.href}"${t} aria-haspopup="true" aria-expanded="false">${e}<span>${a.label}</span> ${m.chevron}</a>${ys()}</li>`:`<li><a href="${a.href}"${t}>${e}<span>${a.label}</span></a></li>`}).join("")}
      </ul>
      <span class="nav-note">
        <svg class="nav-signal" viewBox="0 0 34 14" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round">
          <path d="M1 7h4M9 3v8M14 1v12M19 4v6M24 2v10M29 5v4M33 7h-1"/>
        </svg>
        تحویل ۱ تا ۴۸ ساعت
      </span>
    </div>
  </nav>
</header>

<div class="drawer" id="drawer" hidden>
  <div class="drawer-panel">
    <div class="drawer-head">
      <b>منو</b>
      <button id="drawerClose" aria-label="بستن">${m.close}</button>
    </div>
    <a href=".">${M.home}<span>خانه</span></a>
    <a href="products/">${M.products}<span>همهٔ محصولات</span></a>
    <a href="prices/">${M.prices}<span>قیمت‌ها</span></a>
    <a href="guarantee/">${M.guarantee}<span>ضمانت</span></a>
    <a href="blog/">${M.blog}<span>وبلاگ</span></a>
    <a href="about/">${M.about}<span>درباره ما</span></a>
    <a href="contact/">${M.contact}<span>تماس</span></a>
    <span class="dr-label">دسته‌بندی‌ها</span>
    ${E.map(a=>`<a href="${a.slug}">${a.title}</a>`).join("")}
    <span class="dr-label">بیشتر</span>
    <a href="process/">مراحل سفارش</a>
    <a href="faq/">سوالات متداول</a>
    <a class="btn btn-gold" href="${y}" target="_blank" rel="noopener">${m.discord} ورود به دیسکورد</a>
  </div>
</div>`,xs=()=>`
<footer class="site-foot">
  <div class="wrap foot-grid">
    <div class="fbrand">
      <a class="brand" href=".">
        <img class="brand-mark" src="assets/img/logo.png" srcset="assets/img/logo.png 1x, assets/img/logo@2x.png 2x" alt="یوزورا شاپ" width="165" height="165" loading="lazy" decoding="async">
        <span class="brand-txt"><b>یوزورا <em>شاپ</em></b><i>YOZORA SHOP</i></span>
      </a>
      <p>فروشگاه گیمینگ یوزورا؛ اکانت ماینکرفت، پول سرورها، خدمات طراحی، اورلی استریم، کازمتیک و کیپ اپتیفاین — با پرداخت ریالی و ضمانت بازگشت وجه.</p>
      <div class="fsocial">
        <a href="${y}" target="_blank" rel="noopener" aria-label="دیسکورد">${m.discord}</a>
      </div>
    </div>
    <div class="fcol">
      <h4>محصولات</h4>
      ${E.map(s=>`<a href="${s.slug}">${s.title}</a>`).join("")}
    </div>
    <div class="fcol">
      <h4>خدمات</h4>
      <a href="cat-design/">طراحی لوگو و بنر</a>
      <a href="cat-design/">تامنیل و اسکین</a>
      <a href="cat-overlay/">اورلی استریم</a>
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
    <span>${m.shield} ضمانت اصالت</span>
    <span>${m.card} پرداخت ریالی</span>
    <span>${m.bolt} تحویل سریع</span>
    <span>${m.clock} پشتیبانی ۲۴/۷</span>
  </div>
  <div class="foot-credit"><div class="wrap fc-in">
    <span class="fc-by">طراحی شده توسط ${vs} <b>گسلایت استودیو</b></span>
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
<div class="mobar"><a class="btn btn-gold" href="${y}" target="_blank" rel="noopener">${m.discord} ثبت سفارش در دیسکورد</a></div>`,ks=s=>`
<div id="progress"></div>
<a class="skip-link" href="#main">پرش به محتوای اصلی</a>
${fs(s)}
<main id="main">`;let T=!1;const Y=new Set,os=()=>{T||(T=!0,requestAnimationFrame(()=>{T=!1,Y.forEach(s=>s())}))};function $s(){const s=Array.from(document.querySelectorAll("[data-par]"));if(!s.length)return;const a=()=>{const t=window.innerHeight;s.forEach(e=>{const r=e.getBoundingClientRect();if(r.bottom<-200||r.top>t+200)return;const i=Number(e.dataset.par??.1),c=r.top+r.height/2-t/2;e.style.transform=`translate3d(0,${(-c*i).toFixed(2)}px,0)`})};Y.add(a),addEventListener("scroll",os,{passive:!0}),addEventListener("resize",a),a()}function _(){const s=document.querySelector(".site-head");if(!s)return;const a=Math.round(s.getBoundingClientRect().height);a>0&&document.documentElement.style.setProperty("--hd",`${a}px`)}function Ms(s){const a=s.querySelector("[data-pin-track]");if(!a)return;const t=Array.from(s.querySelectorAll(".story-dots i, .pin-dots i"));if(window.innerWidth<=780){s.style.removeProperty("height"),a.style.transform="";return}const e=window.innerHeight,r=s.querySelector(".pin-pin"),i=r?r.offsetHeight:e,c=s.offsetHeight-i,l=Math.min(c,Math.max(0,-s.getBoundingClientRect().top)),g=c>0?l/c:0,n=Math.max(0,a.scrollWidth-a.clientWidth);a.style.transform=`translate3d(${(g*n).toFixed(2)}px,0,0)`;const h=Math.min(t.length-1,Math.round(g*(t.length-1||1)));t.forEach((x,C)=>x.classList.toggle("on",C===h)),a.querySelectorAll(".story-card, .theater-card").forEach((x,C)=>{x.classList.toggle("is-on",C===h)});const w=s.querySelector(".pin-bar i");w&&(w.style.transform=`scaleX(${Math.max(.02,g).toFixed(3)})`)}function As(){const s=Array.from(document.querySelectorAll("[data-pin]"));if(!s.length)return;const a=()=>s.forEach(Ms);Y.add(a),addEventListener("scroll",os,{passive:!0}),addEventListener("resize",a),a()}function Ls(){document.querySelectorAll("[data-marquee]").forEach(s=>{const a=s.querySelector(".marq-in");if(!a||a.dataset.cloned)return;const t=document.createElement("div");t.className="marq-track",s.insertBefore(t,a);const e=a.cloneNode(!0);e.dataset.cloned="1",a.dataset.cloned="1",t.append(a),e.setAttribute("aria-hidden","true"),t.append(e),s.classList.add("mq-ready")})}function zs(){if(window.matchMedia("(hover:none)").matches)return;Array.from(document.querySelectorAll("[data-tilt]")).forEach(a=>{const t=r=>{const i=a.getBoundingClientRect(),c=(r.clientX-i.left)/i.width-.5,l=(r.clientY-i.top)/i.height-.5;a.style.setProperty("--tx",`${(-l*7).toFixed(2)}deg`),a.style.setProperty("--ty",`${(c*9).toFixed(2)}deg`)},e=()=>{a.style.setProperty("--tx","0deg"),a.style.setProperty("--ty","0deg")};a.addEventListener("pointermove",t,{passive:!0}),a.addEventListener("pointerleave",e,{passive:!0})})}function qs(){Array.from(document.querySelectorAll(".split")).forEach(a=>{if(a.dataset.split)return;a.dataset.split="1";const t=(a.textContent??"").trim().split(/\s+/);a.innerHTML=t.map((e,r)=>`<span class="w" style="--i:${r}">${e}</span>`).join(" ")})}function js(){const s=Array.from(document.querySelectorAll("[data-count]"));if(!s.length)return;const a=e=>e.toLocaleString("fa-IR"),t=new IntersectionObserver(e=>{e.forEach(r=>{if(!r.isIntersecting)return;const i=r.target;t.unobserve(i);const c=Number(i.dataset.count??0),l=performance.now(),g=1100,n=h=>{const w=Math.min(1,(h-l)/g),x=1-Math.pow(1-w,3);i.textContent=a(Math.round(c*x)),w<1&&requestAnimationFrame(n)};requestAnimationFrame(n)})},{threshold:.4});s.forEach(e=>{e.textContent=a(0),t.observe(e)})}function Cs(){qs(),$s(),As(),Ls(),zs()}let P=null;const Zs=(s,a=!1)=>{P?P.to(s,a):window.scrollTo({top:s,behavior:a?"auto":"smooth"})},Es='input,textarea,select,option,[contenteditable="true"],[data-native-scroll],.drawer,.mega,.search-pop,.modal,.table-wrap,.cat-rail,.h-rail,.no-smooth',ss=s=>s instanceof Element?!!s.closest(Es):!1;function Bs(){const s=document.documentElement;let a=window.scrollY,t=window.scrollY,e=0;const r=()=>Math.max(0,s.scrollHeight-window.innerHeight),i=d=>Math.min(r(),Math.max(0,d)),c=()=>{const d=a-t;if(Math.abs(d)<.4){t=a,window.scrollTo(0,t),e=0;return}t+=d*.16,window.scrollTo(0,t),e=requestAnimationFrame(c)},l=()=>{e||(e=requestAnimationFrame(c))};P={to:(d,k=!1)=>{if(a=i(d),k){t=a,window.scrollTo(0,t);return}l()},by:d=>{a=i(a+d),l()},current:()=>t},s.classList.add("has-smooth"),window.addEventListener("scroll",()=>{if(document.documentElement.classList.contains("locked"))return;const d=window.scrollY;Math.abs(d-t)>2&&(t=d,a=d)},{passive:!0});const g=d=>{if(d.ctrlKey||d.metaKey||document.documentElement.classList.contains("locked")||ss(d.target)||Math.abs(d.deltaY)<Math.abs(d.deltaX)*1.2)return;let k=d.deltaY;d.deltaMode===1?k*=18:d.deltaMode===2&&(k*=window.innerHeight),d.preventDefault(),a=i(a+k),l()};window.addEventListener("wheel",g,{passive:!1});let n=!1,h=0,w=0,x=0,C=null,F=0,U=0;window.addEventListener("touchstart",d=>{if(d.touches.length!==1){n=!1;return}if(document.documentElement.classList.contains("locked")||ss(d.target)){n=!1;return}n=!0,C=null,F=d.touches[0].clientX,U=h=d.touches[0].clientY,w=performance.now(),x=0,t=a=window.scrollY},{passive:!0}),window.addEventListener("touchmove",d=>{if(!n||d.touches.length!==1)return;const k=d.touches[0],W=performance.now();if(!C){const Q=Math.abs(k.clientX-F),J=Math.abs(k.clientY-U);if((Q>8||J>8)&&(C=J>=Q?"y":"x"),C!=="y"){n=!1;return}}d.preventDefault();const K=h-k.clientY,ps=Math.max(6,W-w);h=k.clientY,w=W,x=K/ps*16,a=i(a+K),l()},{passive:!1});const X=()=>{if(!n)return;n=!1;const d=Math.max(-900,Math.min(900,x*11));a=i(a+d),l(),x=0};window.addEventListener("touchend",X,{passive:!0}),window.addEventListener("touchcancel",X,{passive:!0})}const u=(s,a=document)=>a.querySelector(s),B=(s,a=document)=>Array.from(a.querySelectorAll(s));function Ss(){const s=u("#progress");if(!s)return;let a=!1;const t=()=>{a=!1;const r=document.documentElement,i=r.scrollHeight-r.clientHeight;s.style.transform=`scaleX(${i>0?r.scrollTop/i:0})`},e=()=>{a||(a=!0,requestAnimationFrame(t))};addEventListener("scroll",e,{passive:!0}),addEventListener("resize",e),t()}function Vs(){const s=B(".rv, .split");if(!("IntersectionObserver"in window)||s.length===0){s.forEach(t=>t.classList.add("in"));return}const a=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&(e.target.classList.add("in"),a.unobserve(e.target))})},{rootMargin:"0px 0px -8% 0px",threshold:.08});s.forEach((t,e)=>{t.style.transitionDelay=`${Math.min(e%6,5)*45}ms`,a.observe(t)})}function _s(){const s=u("#siteHead"),a=()=>{s==null||s.classList.toggle("stuck",window.scrollY>24)};addEventListener("scroll",a,{passive:!0}),a();const t=u("#burger"),e=u("#drawer"),r=u("#drawerClose");let i=0;const c=l=>{e&&(t==null||t.setAttribute("aria-expanded",String(l)),document.documentElement.classList.toggle("locked",l),document.body.classList.toggle("locked",l),window.clearTimeout(i),l?(e.hidden=!1,requestAnimationFrame(()=>e.classList.add("open"))):(e.classList.remove("open"),i=window.setTimeout(()=>{e.classList.contains("open")||(e.hidden=!0)},460)))};addEventListener("pageshow",()=>{document.documentElement.classList.remove("locked"),document.body.classList.remove("locked"),e&&(e.classList.remove("open"),e.hidden=!0)}),e==null||e.querySelectorAll("a").forEach(l=>l.addEventListener("click",()=>c(!1))),t==null||t.addEventListener("click",()=>c(!(e!=null&&e.classList.contains("open")))),r==null||r.addEventListener("click",()=>c(!1)),e==null||e.addEventListener("click",l=>{l.target===e&&c(!1)}),document.addEventListener("keydown",l=>{l.key==="Escape"&&c(!1)}),Hs()}function Hs(){const s=B(".has-mega");s.length&&(s.forEach(a=>{const t=a.querySelector("a");let e=0;const r=i=>{window.clearTimeout(e),i?(a.classList.add("open"),t==null||t.setAttribute("aria-expanded","true")):(a.classList.remove("open"),t==null||t.setAttribute("aria-expanded","false"))};a.addEventListener("pointerenter",()=>r(!0)),a.addEventListener("pointerleave",()=>{e=window.setTimeout(()=>r(!1),140)}),t==null||t.addEventListener("click",i=>{window.matchMedia("(hover:none)").matches&&(i.preventDefault(),r(!a.classList.contains("open")))}),a.addEventListener("keydown",i=>{i.key==="Escape"&&r(!1)})}),document.addEventListener("pointerdown",a=>{const t=a.target;t&&!t.closest(".has-mega")&&s.forEach(e=>e.classList.remove("open"))}))}function Os(){const s=u("#searchInput"),a=u("#searchPop"),t=u("#headSearch");if(!s||!a)return;const e=r=>{const i=r.trim();if(i.length<2){a.hidden=!0,a.innerHTML="";return}const c=$.filter(l=>l.title.includes(i)||l.desc.includes(i)||l.price.includes(i)).slice(0,6);a.hidden=!1,a.innerHTML=c.length?c.map(l=>`<a href="${l.href}" class="sp-item">
              ${z(l.image,{alt:"",sizes:"44px",w:44,h:44})}
              <span><b>${l.title}</b><i>${l.price}</i></span></a>`).join(""):'<div class="sp-empty">چیزی پیدا نشد — در تیکت دیسکورد بپرس.</div>'};s.addEventListener("input",()=>e(s.value)),s.addEventListener("focus",()=>e(s.value)),t==null||t.addEventListener("submit",r=>{r.preventDefault();const i=a.querySelector("a");i instanceof HTMLAnchorElement&&(location.href=i.href)}),document.addEventListener("click",r=>{r.target instanceof Node&&(t!=null&&t.contains(r.target)||(a.hidden=!0))})}function Is(){if(matchMedia("(hover: none)").matches)return;let s=0,a=null;const t=()=>{s=0;const e=a;if(a=null,!e)return;const r=e.target;if(!(r instanceof Element))return;const i=r.closest(".pcard,.card,.mega-item,.cat-tile");if(!i)return;const c=i.getBoundingClientRect();i.style.setProperty("--mx",`${e.clientX-c.left}px`),i.style.setProperty("--my",`${e.clientY-c.top}px`)};document.addEventListener("pointermove",e=>{a=e,!s&&(s=requestAnimationFrame(t))},{passive:!0})}function Ts(){const s=u("#filters"),a=u("#grid");!s||!a||s.addEventListener("click",t=>{const e=t.target.closest("button[data-f]");if(!e)return;B("button",s).forEach(i=>i.classList.remove("act")),e.classList.add("act");const r=e.dataset.f??"all";B(".pcard",a).forEach(i=>{const c=r==="all"||i.dataset.cat===r;i.style.display=c?"":"none"})})}function Ps(){var l,g;const s=u("#heroSlider");if(!s)return;const a=B(".slide",s),t=B("#heroDots i");if(a.length<2)return;let e=0;const r=n=>{e=(n+a.length)%a.length,a.forEach((h,w)=>h.classList.toggle("on",w===e)),t.forEach((h,w)=>h.classList.toggle("on",w===e))};t.forEach((n,h)=>n.addEventListener("click",()=>r(h))),(l=u('[data-slide="prev"]'))==null||l.addEventListener("click",()=>r(e-1)),(g=u('[data-slide="next"]'))==null||g.addEventListener("click",()=>r(e+1));let i=!0;new IntersectionObserver(n=>n.forEach(h=>i=h.isIntersecting),{threshold:.15}).observe(s),setInterval(()=>{i&&!document.hidden&&r(e+1)},5200)}function Ns(){Bs(),Ss(),Rs(),Vs(),_s(),Os(),Is(),Ts(),Ps(),Ys(),Cs(),js()}function as(s){const a=document.getElementById("toast");a&&(a.textContent=s,a.classList.add("on"),setTimeout(()=>a.classList.remove("on"),2600))}function Rs(){const s=document.getElementById("qty"),a=document.getElementById("qtyOut"),t=document.getElementById("totalOut"),e=document.getElementById("copyOrder"),r=s?Number(s.dataset.price??0):0,i=s?s.dataset.lbl??"":"",c=n=>n.toLocaleString("fa-IR"),l=()=>s?Number(s.value):0,g=()=>{if(!s)return;const n=l();a&&(a.textContent=c(n)),t&&(t.textContent=`${c(n*r)} تومان`),s.style.setProperty("--pct",`${(n-Number(s.min))/(Number(s.max)-Number(s.min))*100}%`)};s==null||s.addEventListener("input",g),g(),e==null||e.addEventListener("click",async()=>{const h=["سلام 👋",`درخواست سفارش: ${e.dataset.title??"محصول"}`];s&&h.push(`مقدار: ${c(l())} ${i}`,`مبلغ تقریبی: ${c(l()*r)} تومان`),h.push("ممنون، منتظر پاسخ هستم.");const w=h.join(`
`);try{await navigator.clipboard.writeText(w),as("متن سفارش کپی شد ✓ حالا در تیکت دیسکورد بچسبانید")}catch{as("کپی نشد — متن را دستی بنویسید")}})}function Ys(){const s=document.getElementById("siteHead");document.addEventListener("click",a=>{var l,g,n;const t=(g=(l=a.target)==null?void 0:l.closest)==null?void 0:g.call(l,'a[href^="#"]');if(!(t instanceof HTMLAnchorElement))return;const e=(n=t.getAttribute("href"))==null?void 0:n.slice(1);if(!e)return;const r=document.getElementById(e);if(!r)return;a.preventDefault();const i=((s==null?void 0:s.offsetHeight)??0)+14,c=r.getBoundingClientRect().top+window.scrollY-i;Zs(c),r.setAttribute("tabindex","-1"),r.focus({preventScroll:!0})})}const G={"mc-account":{long:"اکانت ماینکرفت با فول اکسس به‌صورت کامل تحویل داده می‌شود؛ ایمیل و رمز قابل تغییر است و روی هر دو نسخهٔ جاوا و بدراک کار می‌کند. اکانت‌ها بررسی‌شده هستند و پس از تحویل، راهنمای تغییر اطلاعات هم ارسال می‌شود.",features:["فول اکسس با ایمیل و رمز","فعال روی جاوا + بدراک","امکان تغییر ایمیل و رمز","تحویل حداکثر ۴۸ ساعت","ضمانت بازگشت وجه"],delivery:"۲۴ تا ۴۸ ساعت",steps:["تیکت با عنوان «اکانت ماینکرفت» بزنید","مبلغ را ریالی پرداخت کنید","اطلاعات اکانت در تیکت تحویل داده می‌شود"],faq:[{q:"اکانت هکری است؟",a:"نه. همهٔ اکانت‌ها فول اکسس هستند و اطلاعات کامل به شما منتقل می‌شود؛ نیازی به دور زدن هیچ محدودیتی نیست."},{q:"بعد از تحویل می‌توانم ایمیلش را عوض کنم؟",a:"بله، اطلاعات کامل در اختیار شماست و می‌توانید ایمیل و رمز را تغییر دهید."}]},"mc-priority":{long:"اگر عجله دارید، سفارش با اولویت در صف تیکت‌ها جلوتر قرار می‌گیرد و تحویل در کوتاه‌ترین زمان انجام می‌شود. مشخصات اکانت همان نسخهٔ فول اکسس است.",features:["اولویت در صف تحویل","فول اکسس کامل","جاوا + بدراک","پشتیبانی مستقیم تا تحویل"],delivery:"۱۲ تا ۲۴ ساعت",faq:[{q:"تفاوتش با اکانت معمولی چیست؟",a:"فقط زمان تحویل؛ محصول و اطلاعات اکانت دقیقاً یکسان است."}]},"donut-million":{long:"پول سرور دونات اس ام پی به‌صورت میلیونی فروخته می‌شود. موجودی سرور ۳۰۰ میلیون است و حداقل خرید ۵۰ میلیون. تحویل مستقیم روی اکانت شما انجام می‌شود.",features:["هر میلیون ۴٬۷۰۰ تومان","حداقل خرید ۵۰ میلیون","حداکثر موجودی ۳۰۰ میلیون","تحویل مستقیم روی اکانت","تحویل تا ۴۸ ساعت"],delivery:"حداقل ۴۸ ساعت",unit:{price:4e3,label:"میلیون",step:5,min:50,max:300,maxLabel:"۳۰۰ میلیون"},faq:[{q:"پول چطور تحویل داده می‌شود؟",a:"بعد از پرداخت، مبلغ در بازی یا از طریق روش توافق‌شده روی اکانت شما واریز می‌شود."},{q:"خرید بیشتر تخفیف دارد؟",a:"برای خریدهای حجم بالا در تیکت مذاکره کنید؛ قیمت پله‌ای داریم."}]},hypixel:{long:"تمام آیتم‌های فروشگاه هایپیکسل — از رنک و کوین تا بوستر و آیتم‌های ویژه — قابل تهیه است. قیمت بر اساس دلار روز محاسبه می‌شود و در تیکت استعلام می‌گیرید.",features:["رنک، کوین، بوستر و آیتم‌های ویژه","قیمت بر اساس دلار روز","تحویل ۱ تا ۲۴ ساعت","امن برای اکانت شما"],delivery:"۱ تا ۲۴ ساعت",faq:[{q:"چرا قیمت ثابت نیست؟",a:"چون مبنای قیمت‌گذاری دلار است و روزانه تغییر می‌کند؛ قبل از پرداخت استعلام دقیق می‌گیرید."}]},skyblock:{long:"کوین اسکای‌بلاک هایپیکسل با قیمت هر میلیون ۶٬۹۰۰ تومان و تحویل بین ۱ تا ۷۲ ساعت. مناسب برای خریدهای ملایم و مطمئن بدون ریسک برای اکانت.",features:["هر میلیون ۶٬۹۰۰ تومان","تحویل ۱ تا ۷۲ ساعت","روش امن و بدون ریسک","پشتیبانی تا پایان سفارش"],delivery:"۱ تا ۷۲ ساعت",unit:{price:6e3,label:"میلیون",step:5,min:10,max:500,maxLabel:"۵۰۰ میلیون"},faq:[{q:"حداقل خرید چقدر است؟",a:"از ۱۰ میلیون به بالا سفارش ثبت می‌شود."}]},logo:{long:"طراحی لوگوی اختصاصی برای سرور، کانال یا برند شما. سه پیشنهاد اولیه دریافت می‌کنید و تا رسیدن به نتیجهٔ نهایی اصلاح انجام می‌شود.",features:["سه پیشنهاد اولیه","فایل خروجی PNG با پس‌زمینهٔ شفاف","اصلاح تا رضایت","تحویل ۱ تا ۳ روز کاری"],delivery:"۱ تا ۳ روز کاری",faq:[{q:"فایل لایه‌باز هم می‌دهید؟",a:"در صورت نیاز، فایل لایه‌باز با هزینهٔ جداگانه ارائه می‌شود."}]},"banner-simple":{long:"بنر ساده و تمیز برای دیسکورد و شبکه‌های اجتماعی، با ترکیب‌بندی سریع و مناسب استفادهٔ روزمره.",features:["ابعاد استاندارد دیسکورد","تحویل ۲۴ ساعته","یک بار اصلاح رایگان"],delivery:"۲۴ ساعت"},"banner-pro":{long:"بنر حرفه‌ای با ترکیب‌بندی قوی‌تر، جزئیات بیشتر و دو مرحله بازنگری؛ مناسب برندهای جدی و سرورهای بزرگ.",features:["طراحی اختصاصی","دو مرحله بازنگری","خروجی با کیفیت بالا","تحویل ۱ تا ۳ روز"],delivery:"۱ تا ۳ روز کاری"},"thumbnail-simple":{long:"تامنیل یوتیوب ساده و خوانا؛ مناسب ویدیوهای گیمینگ روزمره با نرخ کلیک بهتر.",features:["۱۲۸۰×۷۲۰","تحویل ۲۴ ساعته","یک بار اصلاح"],delivery:"۲۴ ساعت"},"thumbnail-pro":{long:"تامنیل حرفه‌ای با ترکیب‌بندی، رنگ‌بندی و تایپوگرافی قوی‌تر برای ویدیوهایی که باید دیده شوند.",features:["۱۲۸۰×۷۲۰","دو مرحله بازنگری","ترکیب‌بندی اختصاصی"],delivery:"۱ تا ۲ روز کاری"},"skin-simple":{long:"اسکین ماینکرفت ساده و آمادهٔ آپلود؛ فایل PNG استاندارد که مستقیم روی اکانت یا لانچر ست می‌شود.",features:["فایل PNG استاندارد","آمادهٔ آپلود","تحویل ۲۴ تا ۴۸ ساعت"],delivery:"۲۴ تا ۴۸ ساعت"},"skin-pro":{long:"اسکین حرفه‌ای با جزئیات، سایه‌پردازی و رندر سه‌بعدی برای معرفی؛ مناسب استریم و شبکه‌های اجتماعی.",features:["فایل PNG + رندر سه‌بعدی","سایه‌پردازی حرفه‌ای","تحویل ۲ تا ۳ روز"],delivery:"۲ تا ۳ روز کاری"},"overlay-good":{long:"پک اورلی استریم شامل فریم وب‌کم، چت‌باکس، هشدارها و اسکرین‌های حالت آماده‌به‌کار — با کیفیت خوب و قیمت مناسب.",features:["فریم وب‌کم","چت‌باکس","هشدارها و اسکرین","سازگار با OBS"],delivery:"۱ تا ۲ روز کاری"},"overlay-best":{long:"نسخهٔ کامل و پرجزئیات اورلی با هماهنگی کامل با برند شما؛ شامل تمام اجزای پک خوب به‌علاوهٔ اسکرین‌های اضافه و پک فونت هدیه.",features:["تمام اجزای پک کامل","هماهنگ با برند شما","پک فونت هدیه","دو مرحله بازنگری"],delivery:"۱ تا ۳ روز کاری"},"font-pack":{long:"پک فونت اختصاصی فارسی و لاتین، انتخاب‌شده برای خوانایی روی اورلی و تامنیل؛ همراه با راهنمای استفاده.",features:["فونت فارسی + لاتین","مناسب اورلی و تامنیل","راهنمای نصب","تحویل فوری"],delivery:"فوری تا ۲۴ ساعت"},cosmetics:{long:"کازمتیک کلاینت‌های ماینکرفت — هاله، بال، کلاه و آیتم‌های ظاهری — برای همهٔ کلاینت‌ها قابل تهیه است. قیمت بر اساس دلاری بودن آیتم محاسبه می‌شود.",features:["همهٔ کلاینت‌ها","هاله، بال، کلاه و بیشتر","قیمت بر اساس دلار روز","تحویل ۱ تا ۲۴ ساعت"],delivery:"۱ تا ۲۴ ساعت",faq:[{q:"کدام کلاینت‌ها پشتیبانی می‌شوند؟",a:"کازمتیک‌های کلاینت‌های محبوب ماینکرفت؛ در تیکت نام کلاینت و آیتم را بگویید تا استعلام بگیریم."}]},cape:{long:"کیپ اختصاصی اپتیفاین روی اکانت خودتان؛ طرح دلخواه شما روی کیپ اعمال می‌شود و برای همهٔ بازیکن‌های سرور قابل مشاهده است.",features:["اختصاصی روی اکانت شما","قابل مشاهده برای همه","طرح دلخواه","تحویل ۱ تا ۷۲ ساعت"],delivery:"۱ تا ۷۲ ساعت"}},S="https://yaspieze.github.io/kiniwa",H=s=>{const a=document.createElement("script");a.type="application/ld+json",a.textContent=JSON.stringify(s),document.head.appendChild(a)};function Gs(s,a){if(H({"@context":"https://schema.org","@type":"Organization",name:"یوزورا شاپ",alternateName:"Yozora Shop",url:`${S}/`,logo:`${S}/assets/img/logo.png`,sameAs:[y],description:"فروشگاه گیمینگ یوزورا؛ اکانت ماینکرفت، پول دونات اس ام پی، هایپیکسل، خدمات فتوشاپ، اورلی استریم، کازمتیک و کیپ اپتیفاین."}),a){const t=$.find(e=>e.id===a);if(t){const e=G[t.id];H({"@context":"https://schema.org","@type":"Product",name:t.title,description:(e==null?void 0:e.long)??t.desc,image:`${S}/${t.image}`,brand:{"@type":"Brand",name:"یوزورا شاپ"},offers:{"@type":"Offer",priceCurrency:t.price.includes("تومان")?"IRR":void 0,price:t.price.replace(/[^۰-۹0-9]/g,"")||void 0,availability:"https://schema.org/InStock",url:`${S}/product/${t.id}/`,seller:{"@type":"Organization",name:"یوزورا شاپ"}}})}}(s==="faq"||s==="index")&&H({"@context":"https://schema.org","@type":"FAQPage",mainEntity:ls.map(t=>({"@type":"Question",name:t.q,acceptedAnswer:{"@type":"Answer",text:t.a}}))}),s==="products"&&H({"@context":"https://schema.org","@type":"ItemList",itemListElement:[...$,...E.map(()=>null)].filter(Boolean).map((t,e)=>({"@type":"ListItem",position:e+1,name:t.title,url:`${S}/product/${t.id}/`}))})}const Ds={404:`<section class="e404"><div class="wrap-narrow">
  <div class="art404"><svg class="e404art" width="676" height="260" viewBox="0 0 676 260" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip404)"><path d="M214.999 154.986V205.896H189.017V239.315H122.949V205.896H9V154.986L86.5745 20.6849H160.066L81.7493 154.986H122.949V115.633H189.017V154.986H214.999Z" fill="currentColor"/><path d="M667 154.986V205.896H641.018V239.315H574.95V205.896H461.001V154.986L538.575 20.6849H612.067L533.75 154.986H574.95V115.633H641.018V154.986H667Z" fill="currentColor"/><path fill-rule="evenodd" clip-rule="evenodd" d="M279.5 28.6747C315.7 7.77505 360.299 7.77504 396.499 28.6747C432.699 49.5746 454.999 88.1999 454.999 130C454.999 171.8 432.699 210.425 396.499 231.325C360.299 252.225 315.7 252.225 279.5 231.325C243.3 210.425 221 171.8 221 130C221 88.1999 243.3 49.5746 279.5 28.6747ZM340 51.3231C338.763 50.6086 337.238 50.6087 336 51.3231L270.863 88.9295C269.626 89.644 268.863 90.9644 268.863 92.3934V167.606C268.863 169.035 269.626 170.356 270.863 171.07L336 208.677C337.238 209.391 338.762 209.391 340 208.677L405.136 171.07C406.373 170.356 407.136 169.035 407.136 167.606V92.3934C407.136 90.9644 406.373 89.644 405.136 88.9295L340 51.3231Z" fill="currentColor"/></g><defs><clipPath id="clip404"><rect width="676" height="260" fill="white"/></clipPath></defs></svg></div>
  <h1 style="margin-top:1.4rem">این صفحه پیدا نشد</h1>
  <p class="lead" style="margin-top:.8rem">شاید آدرس عوض شده باشد. از این‌جا ادامه بده:</p>
  <div class="hero-btns" style="justify-content:center">
    <a class="btn btn-gold" href="./">صفحهٔ اصلی</a>
    <a class="btn btn-ghost" href="products/">محصولات</a>
  </div>
</div></section>`,about:`<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><a href="about/">درباره ما</a></div></div>

<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><span style="color:#c3c9d6">درباره ما</span></div></div>
<section class="phero"><div class="wrap">
  <span class="eyebrow">دربارهٔ یوزورا</span><h1>یک انجمن، یک فروشگاه، یک استاندارد</h1>
  <p class="lead" style="max-width:70ch">یوزورا شاپ فروشگاه رسمی انجمن یوزورا است؛ جایی که بازیکن‌ها اکانت، پول سرور، خدمات طراحی و کازمتیک را
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
    <div style="margin-top:1.2rem"><div class="note green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg><div>یوزورا با شعار کار نمی‌کند؛ تعهد کتبی می‌دهد. اگر سفارشی انجام نشود، مبلغ برمی‌گردد.</div></div></div>
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
  <img class="bg" src="assets/img/05-overlay-800.webp" srcset="assets/img/05-overlay-480.webp 480w, assets/img/05-overlay-800.webp 800w, assets/img/05-overlay-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>به انجمن یوزورا بپیوند</h2>
    <p>۷۶۳ عضو از قبل آنجا هستند؛ خوش آمدی.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد یوزورا</a>
      <a class="btn btn-ghost" href="products/">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,"blog-donut-smp":`<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><a href="blog/">وبلاگ</a><span>/</span><span style="color:#c3c9d6">پول دونات اس ام پی چطور کار می‌کند؟</span></div></div>

<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><a href="blog/">وبلاگ</a><span>/</span><span style="color:#c3c9d6">پول دونات اس ام پی چطور کار می‌کند؟</span></div></div>
<section class="phero"><div class="wrap-narrow" style="text-align:center">
  <span class="eyebrow">دونات اس ام پی</span><h1 style="font-size:clamp(1.6rem,3.4vw,2.5rem)">پول دونات اس ام پی چطور کار می‌کند؟</h1>
  <p class="lead" style="margin-top:.8rem">از موجودی سرور تا قیمت هر میلیون؛ همه‌چیز دربارهٔ اقتصاد دونات اس ام پی.</p>
  <div class="badges" style="justify-content:center"><span class="pill">۵ دقیقه مطالعه</span><span class="pill y">یوزورا شاپ</span></div>
</div></section>
<section style="padding-top:0"><div class="wrap"><div class="frame" style="border-radius:22px;overflow:hidden;border:1px solid var(--line-2)">
  <img src="assets/img/02-donutsmp-800.webp" srcset="assets/img/02-donutsmp-480.webp 480w, assets/img/02-donutsmp-800.webp 800w, assets/img/02-donutsmp-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="پول دونات اس ام پی چطور کار می‌کند؟" style="aspect-ratio:21/9;object-fit:cover;width:100%" width="1600" height="700"></div></div></section>
<section style="padding-top:0"><div class="wrap-narrow"><div class="article">
<p>اقتصاد سرورهای SMP یکی از جذاب‌ترین بخش‌های بازی است و دونات اس ام پی هم از این قاعده مستثنا نیست.
در این مطلب می‌گوییم «پول دونات» چیست، چطور قیمت‌گذاری می‌شود و چه نکته‌ای قبل از خرید باید بدانی.</p>
<h2>پول دونات اس ام پی چیست؟</h2>
<p>در سرورهای SMP، پول درون‌بازی عنصر اصلی معامله است. بازیکن‌ها با پول، آیتم، زمین یا خدمات می‌خرند.
دونات اس ام پی هم یک سرور محبوب با اقتصاد فعال است و «پول» آن به‌صورت میلیونی معامله می‌شود.</p>
<h2>قیمت چطور محاسبه می‌شود؟</h2>
<p>قیمت پول دونات بر اساس «هر میلیون» حساب می‌شود. در یوزورا شاپ این نرخ ۴٬۷۰۰ تومان به ازای هر میلیون است،
یعنی مثلاً ۱۰۰ میلیون می‌شود ۳۹۰٬۰۰۰ تومان. حداقل خرید هم ۵۰ میلیون تعیین شده است.</p>
<h2>موجودی سرور چه معنایی دارد؟</h2>
<p>هر فروشنده‌ای مقدار محدودی پول در سرور دارد. موجودی فعلی یوزورا ۳۰۰ میلیون است و بعد از اتمام مجدد شارژ می‌شود.
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
  <img class="bg" src="assets/img/05-overlay-800.webp" srcset="assets/img/05-overlay-480.webp 480w, assets/img/05-overlay-800.webp 800w, assets/img/05-overlay-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>سفارش خودت را ثبت کن</h2>
    <p>در دیسکورد تیکت بزن و قیمت و زمان تحویل را بگیر.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد یوزورا</a>
      <a class="btn btn-ghost" href="products/">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,"blog-minecraft-account":`<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><a href="blog/">وبلاگ</a><span>/</span><span style="color:#c3c9d6">راهنمای کامل خرید اکانت ماینکرفت</span></div></div>

<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><a href="blog/">وبلاگ</a><span>/</span><span style="color:#c3c9d6">راهنمای کامل خرید اکانت ماینکرفت</span></div></div>
<section class="phero"><div class="wrap-narrow" style="text-align:center">
  <span class="eyebrow">راهنمای خرید</span><h1 style="font-size:clamp(1.6rem,3.4vw,2.5rem)">راهنمای کامل خرید اکانت ماینکرفت</h1>
  <p class="lead" style="margin-top:.8rem">قبل از خرید اکانت، این ۶ نکته را بدانید تا انتخاب درستی داشته باشید.</p>
  <div class="badges" style="justify-content:center"><span class="pill">۶ دقیقه مطالعه</span><span class="pill y">یوزورا شاپ</span></div>
</div></section>
<section style="padding-top:0"><div class="wrap"><div class="frame" style="border-radius:22px;overflow:hidden;border:1px solid var(--line-2)">
  <img src="assets/img/01-minecraft-800.webp" srcset="assets/img/01-minecraft-480.webp 480w, assets/img/01-minecraft-800.webp 800w, assets/img/01-minecraft-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="راهنمای کامل خرید اکانت ماینکرفت" style="aspect-ratio:21/9;object-fit:cover;width:100%" width="1600" height="700"></div></div></section>
<section style="padding-top:0"><div class="wrap-narrow"><div class="article">
<p>خرید اکانت ماینکرفت یکی از رایج‌ترین سفارش‌های فروشگاه‌های گیمینگ است، اما همهٔ اکانت‌ها یکسان نیستند.
در این راهنما ۶ نکته‌ای را می‌گوییم که قبل از پرداخت باید بررسی کنی تا بعداً به مشکل نخوری.</p>
<h2>۱. اکانت فول اکسس یعنی چه؟</h2>
<p>«فول اکسس» یعنی دسترسی کامل به اکانت؛ نه اکانت اشتراکی و نه محدود. در اکانت فول اکسس می‌توانی وارد شوی،
اطلاعات را تغییر دهی و مطمئن باشی که مالکیت واقعی داری. اگر فروشنده‌ای اصرار دارد «اکانت اشتراکی» بفروشد،
بدان که این مدل ریسک‌های خودش را دارد و مناسب همه نیست.</p>
<h2>۲. جاوا یا بدراک؟</h2>
<p>ماینکرفت دو نسخهٔ اصلی دارد: جاوا (برای PC) و بدراک (موبایل، کنسول و ویندوز). بعضی اکانت‌ها هر دو را دارند
و بعضی فقط یکی. قبل از خرید مشخص کن روی چه پلتفرمی بازی می‌کنی؛ در یوزورا شاپ اکانت‌های اقتصادی هر دو نسخه را پوشش می‌دهند.</p>
<h2>۳. امکان تغییر اطلاعات</h2>
<p>اگر اکانت را می‌خری، باید بتوانی ایمیل و رمز را عوض کنی. اکانتی که اطلاعاتش قابل تغییر نباشد، عملاً مال تو نیست.
این را قبل از پرداخت بپرس.</p>
<h2>۴. زمان تحویل را بپرس</h2>
<p>تحویل اکانت فوری نیست و به موجودی و بررسی‌ها بستگی دارد. در یوزورا این زمان حداکثر ۴۸ ساعت است و در صفحهٔ محصول هم نوشته شده.
هر فروشنده‌ای که «فوری» می‌گوید ولی زمان دقیق اعلام نمی‌کند، جای سؤال دارد.</p>
<h2>۵. ضمانت و پشتیبانی</h2>
<p>بهترین قیمت بدون پشتیبانی ارزش ندارد. مطمئن شو که فروشنده بعد از تحویل هم پاسخ می‌دهد و در صورت مشکل،
تعویض یا بازگشت وجه انجام می‌دهد.</p>
<h2>۶. مقایسهٔ قیمت، نه فقط ارزان‌ترین</h2>
<p>قیمت اکانت ماینکرفت در بازار بازهٔ مشخصی دارد. اگر قیمتی خیلی پایین‌تر از بازار است، احتمالاً یکی از موارد بالا (فول اکسس،
قابلیت تغییر اطلاعات یا پشتیبانی) کامل نیست.</p>
<h2>جمع‌بندی</h2>
<p>اکانت ماینکرفت اقتصادی یوزورا شاپ با فول اکسس، پشتیبانی از جاوا و بدراک، امکان تغییر اطلاعات و تحویل حداکثر ۴۸ ساعت
عرضه می‌شود. اگر سؤالی داری، قبل از خرید در دیسکورد تیکت بزن.</p></div>
  <div style="margin-top:2rem"><div class="note "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg><div>این مطلب راهنمای عمومی است؛ قیمت‌ها و شرایط دقیق را همیشه در صفحهٔ محصول یا تیکت دیسکورد بررسی کن.</div></div></div>
</div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay-800.webp" srcset="assets/img/05-overlay-480.webp 480w, assets/img/05-overlay-800.webp 800w, assets/img/05-overlay-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>سفارش خودت را ثبت کن</h2>
    <p>در دیسکورد تیکت بزن و قیمت و زمان تحویل را بگیر.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد یوزورا</a>
      <a class="btn btn-ghost" href="products/">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,"blog-stream-overlay":`<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><a href="blog/">وبلاگ</a><span>/</span><span style="color:#c3c9d6">اورلی استریم حرفه‌ای به چه چیزهایی نیاز دارد؟</span></div></div>

<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><a href="blog/">وبلاگ</a><span>/</span><span style="color:#c3c9d6">اورلی استریم حرفه‌ای به چه چیزهایی نیاز دارد؟</span></div></div>
<section class="phero"><div class="wrap-narrow" style="text-align:center">
  <span class="eyebrow">استریم</span><h1 style="font-size:clamp(1.6rem,3.4vw,2.5rem)">اورلی استریم حرفه‌ای به چه چیزهایی نیاز دارد؟</h1>
  <p class="lead" style="margin-top:.8rem">چک‌لیست کامل اجزای یک پک اورلی تمیز و حرفه‌ای برای استریم.</p>
  <div class="badges" style="justify-content:center"><span class="pill">۴ دقیقه مطالعه</span><span class="pill y">یوزورا شاپ</span></div>
</div></section>
<section style="padding-top:0"><div class="wrap"><div class="frame" style="border-radius:22px;overflow:hidden;border:1px solid var(--line-2)">
  <img src="assets/img/05-overlay-800.webp" srcset="assets/img/05-overlay-480.webp 480w, assets/img/05-overlay-800.webp 800w, assets/img/05-overlay-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="اورلی استریم حرفه‌ای به چه چیزهایی نیاز دارد؟" style="aspect-ratio:21/9;object-fit:cover;width:100%" width="1600" height="700"></div></div></section>
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
<p>اورلی یوزورا در دو کیفیت (خوب ۳۱۰٬۰۰۰ و عالی ۳۸۵٬۰۰۰ تومان) ارائه می‌شود و پک فونت هم به‌صورت جداگانه ۱۴۵٬۰۰۰ تومان است.
برای سفارش، در دیسکورد تیکت بزن.</p></div>
  <div style="margin-top:2rem"><div class="note "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg><div>این مطلب راهنمای عمومی است؛ قیمت‌ها و شرایط دقیق را همیشه در صفحهٔ محصول یا تیکت دیسکورد بررسی کن.</div></div></div>
</div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay-800.webp" srcset="assets/img/05-overlay-480.webp 480w, assets/img/05-overlay-800.webp 800w, assets/img/05-overlay-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>سفارش خودت را ثبت کن</h2>
    <p>در دیسکورد تیکت بزن و قیمت و زمان تحویل را بگیر.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد یوزورا</a>
      <a class="btn btn-ghost" href="products/">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,blog:`<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><a href="blog/">وبلاگ</a></div></div>

<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><span style="color:#c3c9d6">وبلاگ</span></div></div>
<section class="phero"><div class="wrap"><span class="eyebrow">وبلاگ یوزورا</span><h1>راهنماها و مقاله‌های گیمینگ</h1>
<p class="lead" style="max-width:70ch">چیزهایی که قبل از خرید باید بدانی؛ کوتاه، بدون حاشیه و از تجربهٔ خودمان.</p></div></section>
<section style="padding-top:0"><div class="wrap"><div class="grid g3"><a class="bcard rv" href="blog-minecraft-account/">
  <img src="assets/img/01-minecraft-800.webp" srcset="assets/img/01-minecraft-480.webp 480w, assets/img/01-minecraft-800.webp 800w, assets/img/01-minecraft-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="راهنمای کامل خرید اکانت ماینکرفت" loading="lazy" width="1600" height="900">
  <div class="body"><div class="meta"><span>راهنمای خرید</span><span>۶ دقیقه</span></div>
  <h3>راهنمای کامل خرید اکانت ماینکرفت</h3><p>قبل از خرید اکانت، این ۶ نکته را بدانید تا انتخاب درستی داشته باشید.</p><span class="go">ادامهٔ مطلب ←</span></div></a><a class="bcard rv" href="blog-donut-smp/">
  <img src="assets/img/02-donutsmp-800.webp" srcset="assets/img/02-donutsmp-480.webp 480w, assets/img/02-donutsmp-800.webp 800w, assets/img/02-donutsmp-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="پول دونات اس ام پی چطور کار می‌کند؟" loading="lazy" width="1600" height="900">
  <div class="body"><div class="meta"><span>دونات اس ام پی</span><span>۵ دقیقه</span></div>
  <h3>پول دونات اس ام پی چطور کار می‌کند؟</h3><p>از موجودی سرور تا قیمت هر میلیون؛ همه‌چیز دربارهٔ اقتصاد دونات اس ام پی.</p><span class="go">ادامهٔ مطلب ←</span></div></a><a class="bcard rv" href="blog-stream-overlay/">
  <img src="assets/img/05-overlay-800.webp" srcset="assets/img/05-overlay-480.webp 480w, assets/img/05-overlay-800.webp 800w, assets/img/05-overlay-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="اورلی استریم حرفه‌ای به چه چیزهایی نیاز دارد؟" loading="lazy" width="1600" height="900">
  <div class="body"><div class="meta"><span>استریم</span><span>۴ دقیقه</span></div>
  <h3>اورلی استریم حرفه‌ای به چه چیزهایی نیاز دارد؟</h3><p>چک‌لیست کامل اجزای یک پک اورلی تمیز و حرفه‌ای برای استریم.</p><span class="go">ادامهٔ مطلب ←</span></div></a></div></div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay-800.webp" srcset="assets/img/05-overlay-480.webp 480w, assets/img/05-overlay-800.webp 800w, assets/img/05-overlay-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>سوالی دربارهٔ خرید داری؟</h2>
    <p>در دیسکورد بپرس؛ تیم یوزورا راهنمایی‌ات می‌کند.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد یوزورا</a>
      <a class="btn btn-ghost" href="products/">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,"cat-cape":`<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><a href="products/">محصولات</a><span>/</span><span style="color:#c3c9d6">کیپ اپتیفاین</span></div></div>
<!--hero--><section class="phero">
  <div class="wrap phero-grid">
    <div>
      <span class="eyebrow">کیپ اپتیفاین</span>
      <h1>کیپ اپتیفاین — ۴۲۰٬۰۰۰ تومان با تحویل ۱ تا ۷۲ ساعت</h1>
      <p class="lead" style="margin-top:1rem">کیپ اختصاصی اپتیفاین روی اکانت شما؛ در بازی برای همهٔ بازیکن‌های سرور قابل مشاهده است و با استایل خودت هماهنگ می‌شود.</p>
      <div class="badges"><span class="pill g">اختصاصی</span><span class="pill ">قابل مشاهده برای همه</span><span class="pill y">۱ تا ۷۲ ساعت</span></div>
      <div class="hero-btns">
        <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ثبت سفارش در دیسکورد</a>
        <a class="btn btn-ghost" href="prices/">دیدن جدول قیمت</a>
      </div>
      <div class="badges" style="margin-top:1.4rem"><span class="pill y" style="font-size:.9rem;padding:.5rem 1rem">قیمت: ۴۲۰٬۰۰۰ تومان</span></div>
    </div>
    <div class="frame"><img src="assets/img/07-cape-optifine-800.webp" srcset="assets/img/07-cape-optifine-480.webp 480w, assets/img/07-cape-optifine-800.webp 800w, assets/img/07-cape-optifine-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="کیپ اپتیفاین" width="1600" height="1000"></div>
  </div>
</section><section class="tight"><div class="wrap grid g2">
      <div><div class="kv"><div class="row"><span>محصول</span><b>کیپ اپتیفاین</b></div><div class="row"><span>قیمت</span><b>۴۲۰٬۰۰۰ تومان</b></div><div class="row"><span>زمان تحویل</span><b>۱ تا ۷۲ ساعت</b></div><div class="row"><span>قابل مشاهده برای</span><b>همهٔ بازیکن‌های سرور</b></div></div></div>
      <div class="note green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12 5 5L20 6"/></svg><div>کیپ به‌صورت اختصاصی روی اکانت شما اعمال می‌شود و در بازی برای سایر بازیکن‌ها نمایش داده می‌شود.</div></div>
    </div></section><section><div class="wrap"><div class="sec-hd"><span class="eyebrow">سوالات این محصول</span><h2 class="sec">پرسش‌های پرتکرار</h2></div><div class="faq "><details class="q" open><summary>کیپ روی چه اکانتی اعمال می‌شود؟</summary><p>روی اکانت خودتان؛ نیازی به تغییر اکانت نیست.</p></details><details class="q"><summary>تحویل چقدر طول می‌کشد؟</summary><p>۱ تا ۷۲ ساعت.</p></details><details class="q"><summary>کیپ را همه می‌بینند؟</summary><p>بله، برای همهٔ بازیکن‌هایی که اپتیفاین دارند قابل مشاهده است.</p></details><details class="q"><summary>اگر مشکلی پیش بیاید؟</summary><p>طبق ضمانت یوزورا پیگیری و در صورت نیاز تعویض می‌شود.</p></details></div></div></section>
<section><div class="wrap"><div class="sec-hd row"><div><span class="eyebrow">بیشتر ببین</span><h2 class="sec">محصولات مرتبط</h2></div>
<a class="btn btn-ghost btn-sm" href="products/">همهٔ محصولات ←</a></div><div class="grid g3"><a class="cat rv" href="cat-minecraft/">
  <img src="assets/img/01-minecraft-800.webp" srcset="assets/img/01-minecraft-480.webp 480w, assets/img/01-minecraft-800.webp 800w, assets/img/01-minecraft-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="اکانت ماینکرفت" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>اکانت ماینکرفت</h3><p>فول اکسس، جاوا و بدراک، تحویل تا ۴۸ ساعت</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-donut/">
  <img src="assets/img/02-donutsmp-800.webp" srcset="assets/img/02-donutsmp-480.webp 480w, assets/img/02-donutsmp-800.webp 800w, assets/img/02-donutsmp-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="پول دونات اس ام پی" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>پول دونات اس ام پی</h3><p>موجودی ۳۰۰ میلیون، هر میلیون ۴٬۷۰۰ تومان</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-hypixel/">
  <img src="assets/img/03-hypixel-800.webp" srcset="assets/img/03-hypixel-480.webp 480w, assets/img/03-hypixel-800.webp 800w, assets/img/03-hypixel-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="هایپیکسل و اسکای‌بلاک" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>هایپیکسل و اسکای‌بلاک</h3><p>همهٔ محصولات هایپیکسل + کوین اسکای‌بلاک</p><span class="go">مشاهده ←</span></div></a></div></div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay-800.webp" srcset="assets/img/05-overlay-480.webp 480w, assets/img/05-overlay-800.webp 800w, assets/img/05-overlay-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>همین حالا سفارش بده</h2>
    <p>قیمت نهایی و زمان تحویل را در تیکت دیسکورد بگیر و سفارشت را نهایی کن.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد یوزورا</a>
      <a class="btn btn-ghost" href="products/">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,"cat-cosmetics":`<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><a href="products/">محصولات</a><span>/</span><span style="color:#c3c9d6">کازمتیک</span></div></div>
<!--hero--><section class="phero">
  <div class="wrap phero-grid">
    <div>
      <span class="eyebrow">کازمتیک</span>
      <h1>کازمتیک و کلاینت‌های ماینکرفت — قیمت بر اساس آیتم</h1>
      <p class="lead" style="margin-top:1rem">آیتم‌های کازمتیکی کلاینت‌های مختلف ماینکرفت؛ از کیپ و بال تا افکت‌های ویژه. قیمت بر اساس دلاری بودن آیتم و کلاینت انتخابی محاسبه می‌شود.</p>
      <div class="badges"><span class="pill g">همهٔ کلاینت‌ها</span><span class="pill y">قیمت دلاری آیتم</span><span class="pill b">استعلام در تیکت</span></div>
      <div class="hero-btns">
        <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ثبت سفارش در دیسکورد</a>
        <a class="btn btn-ghost" href="prices/">دیدن جدول قیمت</a>
      </div>
      <div class="badges" style="margin-top:1.4rem"><span class="pill y" style="font-size:.9rem;padding:.5rem 1rem">قیمت: استعلام در تیکت</span></div>
    </div>
    <div class="frame"><img src="assets/img/06-cosmetics-800.webp" srcset="assets/img/06-cosmetics-480.webp 480w, assets/img/06-cosmetics-800.webp 800w, assets/img/06-cosmetics-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="کازمتیک" width="1600" height="1000"></div>
  </div>
</section><section class="tight"><div class="wrap grid g2">
      <div><div class="kv"><div class="row"><span>کلاینت‌ها</span><b>همهٔ کلاینت‌های ماینکرفت</b></div><div class="row"><span>مبنای قیمت</span><b>دلاری بودن آیتم</b></div><div class="row"><span>زمان تحویل</span><b>بسته به آیتم</b></div><div class="row"><span>پرداخت</span><b>ریالی</b></div></div></div>
      <div><div class="note "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg><div>قیمت کازمتیک بر اساس دلاری بودن آیتم محاسبه می‌شود؛ قبل از سفارش، نام دقیق آیتم و کلاینت را در تیکت بنویسید تا قیمت لحظه‌ای اعلام شود.</div></div></div>
    </div></section><section><div class="wrap"><div class="sec-hd"><span class="eyebrow">سوالات این محصول</span><h2 class="sec">پرسش‌های پرتکرار</h2></div><div class="faq "><details class="q" open><summary>کدام کلاینت‌ها پشتیبانی می‌شوند؟</summary><p>همهٔ کلاینت‌های ماینکرفت که آیتم کازمتیکی دارند.</p></details><details class="q"><summary>قیمت چطور حساب می‌شود؟</summary><p>بر اساس دلاری بودن آیتم؛ در تیکت قیمت لحظه‌ای اعلام می‌شود.</p></details><details class="q"><summary>تحویل چقدر طول می‌کشد؟</summary><p>بسته به آیتم و کلاینت متفاوت است؛ در تیکت اعلام می‌شود.</p></details><details class="q"><summary>آیا امن است؟</summary><p>بله، انجام سفارش امن و طبق قوانین کلاینت است.</p></details></div></div></section>
<section><div class="wrap"><div class="sec-hd row"><div><span class="eyebrow">بیشتر ببین</span><h2 class="sec">محصولات مرتبط</h2></div>
<a class="btn btn-ghost btn-sm" href="products/">همهٔ محصولات ←</a></div><div class="grid g3"><a class="cat rv" href="cat-minecraft/">
  <img src="assets/img/01-minecraft-800.webp" srcset="assets/img/01-minecraft-480.webp 480w, assets/img/01-minecraft-800.webp 800w, assets/img/01-minecraft-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="اکانت ماینکرفت" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>اکانت ماینکرفت</h3><p>فول اکسس، جاوا و بدراک، تحویل تا ۴۸ ساعت</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-donut/">
  <img src="assets/img/02-donutsmp-800.webp" srcset="assets/img/02-donutsmp-480.webp 480w, assets/img/02-donutsmp-800.webp 800w, assets/img/02-donutsmp-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="پول دونات اس ام پی" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>پول دونات اس ام پی</h3><p>موجودی ۳۰۰ میلیون، هر میلیون ۴٬۷۰۰ تومان</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-hypixel/">
  <img src="assets/img/03-hypixel-800.webp" srcset="assets/img/03-hypixel-480.webp 480w, assets/img/03-hypixel-800.webp 800w, assets/img/03-hypixel-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="هایپیکسل و اسکای‌بلاک" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>هایپیکسل و اسکای‌بلاک</h3><p>همهٔ محصولات هایپیکسل + کوین اسکای‌بلاک</p><span class="go">مشاهده ←</span></div></a></div></div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay-800.webp" srcset="assets/img/05-overlay-480.webp 480w, assets/img/05-overlay-800.webp 800w, assets/img/05-overlay-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>همین حالا سفارش بده</h2>
    <p>قیمت نهایی و زمان تحویل را در تیکت دیسکورد بگیر و سفارشت را نهایی کن.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد یوزورا</a>
      <a class="btn btn-ghost" href="products/">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,"cat-design":`<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><a href="products/">محصولات</a><span>/</span><span style="color:#c3c9d6">خدمات فتوشاپ</span></div></div>
<!--hero--><section class="phero">
  <div class="wrap phero-grid">
    <div>
      <span class="eyebrow">خدمات فتوشاپ</span>
      <h1>طراحی لوگو، بنر، تامنیل و اسکین — از ۲۶۵٬۰۰۰ تومان</h1>
      <p class="lead" style="margin-top:1rem">خدمات طراحی گرافیکی یوزورا برای سرور، کانال و استریم شما. لوگو و بنر اختصاصی، تامنیل کلیک‌خور و اسکین ماینکرفت — همه با تحویل ۱ تا ۷۲ ساعت.</p>
      <div class="badges"><span class="pill g">اختصاصی</span><span class="pill ">ساده و حرفه‌ای</span><span class="pill y">۱ تا ۷۲ ساعت</span><span class="pill b">۴ سرویس</span></div>
      <div class="hero-btns">
        <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ثبت سفارش در دیسکورد</a>
        <a class="btn btn-ghost" href="prices/">دیدن جدول قیمت</a>
      </div>
      <div class="badges" style="margin-top:1.4rem"><span class="pill y" style="font-size:.9rem;padding:.5rem 1rem">از ۲۶۵٬۰۰۰ تومان</span></div>
    </div>
    <div class="frame"><img src="assets/img/04-photoshop-800.webp" srcset="assets/img/04-photoshop-480.webp 480w, assets/img/04-photoshop-800.webp 800w, assets/img/04-photoshop-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="خدمات فتوشاپ" width="1600" height="1000"></div>
  </div>
</section><section class="tight"><div class="wrap"><div class="tablewrap rv"><table><thead><tr><th>خدمت</th><th>ساده</th><th>حرفه‌ای</th><th>توضیح</th></tr></thead><tbody><tr><td>لوگو</td><td><b>۳۸۵٬۰۰۰ تومان</b></td><td>—</td><td>طراحی اختصاصی و خروجی با کیفیت</td></tr><tr><td>بنر</td><td>۴۳۰٬۰۰۰ تومان</td><td><b>۶۲۰٬۰۰۰ تومان</b></td><td>مناسب دیسکورد و شبکه‌های اجتماعی</td></tr><tr><td>تامنیل</td><td>۲۶۵٬۰۰۰ تومان</td><td><b>۳۸۵٬۰۰۰ تومان</b></td><td>تامنیل یوتیوب و کاور ویدیو</td></tr><tr><td>اسکین ماینکرفت</td><td>۳۱۰٬۰۰۰ تومان</td><td><b>۳۸۵٬۰۰۰ تومان</b></td><td>اسکین اختصاصی آمادهٔ آپلود</td></tr></tbody></table></div></div></section>
    <section><div class="wrap"><div class="sec-hd"><span class="eyebrow">چه چیزی تحویل می‌گیری</span><h2 class="sec">فرآیند طراحی</h2></div>
      <div class="steps">
        <div class="step rv"><h3>بریف</h3><p>در تیکت می‌گویید چه چیزی می‌خواهید و نمونه‌های مورد علاقه‌تان را می‌فرستید.</p></div>
        <div class="step rv"><h3>پیش‌نمایش</h3><p>طرح اولیه را می‌بینید و بازخورد می‌دهید.</p></div>
        <div class="step rv"><h3>بازنگری</h3><p>اصلاحات اعمال می‌شود تا به نتیجهٔ نهایی برسیم.</p></div>
        <div class="step rv"><h3>تحویل فایل</h3><p>فایل نهایی با کیفیت بالا تحویل داده می‌شود.</p></div>
      </div></div></section><section><div class="wrap"><div class="sec-hd"><span class="eyebrow">سوالات این محصول</span><h2 class="sec">پرسش‌های پرتکرار</h2></div><div class="faq "><details class="q" open><summary>تفاوت ساده و حرفه‌ای چیست؟</summary><p>در جزئیات، تعداد بازنگری و کیفیت خروجی؛ نسخهٔ حرفه‌ای زمان بیشتری می‌برد.</p></details><details class="q"><summary>تحویل چقدر طول می‌کشد؟</summary><p>بین ۱ تا ۷۲ ساعت بسته به نوع سفارش.</p></details><details class="q"><summary>چند بار می‌توانم اصلاح بخواهم؟</summary><p>در نسخهٔ ساده محدود و در نسخهٔ حرفه‌ای بیشتر است؛ در تیکت مشخص می‌شود.</p></details><details class="q"><summary>فایل خروجی چه فرمتی است؟</summary><p>PNG با کیفیت بالا؛ بسته به سفارش فرمت‌های دیگر هم قابل ارائه است.</p></details></div></div></section>
<section><div class="wrap"><div class="sec-hd row"><div><span class="eyebrow">بیشتر ببین</span><h2 class="sec">محصولات مرتبط</h2></div>
<a class="btn btn-ghost btn-sm" href="products/">همهٔ محصولات ←</a></div><div class="grid g3"><a class="cat rv" href="cat-minecraft/">
  <img src="assets/img/01-minecraft-800.webp" srcset="assets/img/01-minecraft-480.webp 480w, assets/img/01-minecraft-800.webp 800w, assets/img/01-minecraft-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="اکانت ماینکرفت" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>اکانت ماینکرفت</h3><p>فول اکسس، جاوا و بدراک، تحویل تا ۴۸ ساعت</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-donut/">
  <img src="assets/img/02-donutsmp-800.webp" srcset="assets/img/02-donutsmp-480.webp 480w, assets/img/02-donutsmp-800.webp 800w, assets/img/02-donutsmp-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="پول دونات اس ام پی" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>پول دونات اس ام پی</h3><p>موجودی ۳۰۰ میلیون، هر میلیون ۴٬۷۰۰ تومان</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-hypixel/">
  <img src="assets/img/03-hypixel-800.webp" srcset="assets/img/03-hypixel-480.webp 480w, assets/img/03-hypixel-800.webp 800w, assets/img/03-hypixel-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="هایپیکسل و اسکای‌بلاک" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>هایپیکسل و اسکای‌بلاک</h3><p>همهٔ محصولات هایپیکسل + کوین اسکای‌بلاک</p><span class="go">مشاهده ←</span></div></a></div></div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay-800.webp" srcset="assets/img/05-overlay-480.webp 480w, assets/img/05-overlay-800.webp 800w, assets/img/05-overlay-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>همین حالا سفارش بده</h2>
    <p>قیمت نهایی و زمان تحویل را در تیکت دیسکورد بگیر و سفارشت را نهایی کن.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد یوزورا</a>
      <a class="btn btn-ghost" href="products/">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,"cat-donut":`<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><a href="products/">محصولات</a><span>/</span><span style="color:#c3c9d6">دونات اس ام پی</span></div></div>
<!--hero--><section class="phero">
  <div class="wrap phero-grid">
    <div>
      <span class="eyebrow">دونات اس ام پی</span>
      <h1>پول دونات اس ام پی — از ۴٬۷۰۰ تومان به ازای هر میلیون</h1>
      <p class="lead" style="margin-top:1rem">پول سرور دونات اس ام پی با قیمت رقابتی و تحویل مستقیم روی اکانت شما. موجودی فعلی ۳۰۰ میلیون است و حداقل خرید ۵۰ میلیون.</p>
      <div class="badges"><span class="pill g">موجودی ۳۰۰ میلیون</span><span class="pill ">حداقل ۵۰ میلیون</span><span class="pill y">۴٬۷۰۰ / میلیون</span><span class="pill b">۴۸ ساعت</span></div>
      <div class="hero-btns">
        <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ثبت سفارش در دیسکورد</a>
        <a class="btn btn-ghost" href="prices/">دیدن جدول قیمت</a>
      </div>
      <div class="badges" style="margin-top:1.4rem"><span class="pill y" style="font-size:.9rem;padding:.5rem 1rem">هر میلیون: ۴٬۷۰۰ تومان</span></div>
    </div>
    <div class="frame"><img src="assets/img/02-donutsmp-800.webp" srcset="assets/img/02-donutsmp-480.webp 480w, assets/img/02-donutsmp-800.webp 800w, assets/img/02-donutsmp-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="دونات اس ام پی" width="1600" height="1000"></div>
  </div>
</section><section class="tight"><div class="wrap grid g2">
      <div class="ccard">
        <h3>محاسبه‌گر پول دونات <span class="pill y">هر میلیون ۴٬۷۰۰</span></h3>
        <p class="hint">حداقل ۵۰ میلیون • موجودی فعلی ۳۰۰ میلیون</p>
        <div class="crow"><span>مقدار</span><b><span id="dv">۱۰۰</span> میلیون</b></div>
        <input type="range" min="50" max="300" step="10" value="100" data-rate="4000" data-out="dp" data-lbl="dv">
        <div class="crow" style="margin-top:1rem;font-size:.78rem;color:#7f8798"><span>۵۰ میلیون</span><span>۳۰۰ میلیون</span></div>
        <div class="cout"><span>مبلغ قابل پرداخت</span><b><span id="dp">۳۹۰٬۰۰۰</span> تومان</b></div>
      </div>
      <div>
        <div class="kv"><div class="row"><span>قیمت هر میلیون</span><b>۴٬۷۰۰ تومان</b></div><div class="row"><span>حداقل خرید</span><b>۵۰ میلیون</b></div><div class="row"><span>موجودی فعلی</span><b>۳۰۰ میلیون</b></div><div class="row"><span>زمان تحویل</span><b>حداقل ۴۸ ساعت</b></div></div>
        <div style="margin-top:1rem"><div class="note "><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg><div>موجودی سرور محدود است؛ بعد از اتمام، مجدد شارژ می‌شود. برای مقدار زیاد قبل از پرداخت موجودی را در تیکت چک کنید.</div></div></div>
      </div>
    </div></section><section><div class="wrap"><div class="sec-hd"><span class="eyebrow">سوالات این محصول</span><h2 class="sec">پرسش‌های پرتکرار</h2></div><div class="faq "><details class="q" open><summary>حداقل خرید چقدر است؟</summary><p>۵۰ میلیون. کمتر از این مقدار سفارش ثبت نمی‌شود.</p></details><details class="q"><summary>موجودی چقدر است؟</summary><p>در حال حاضر ۳۰۰ میلیون؛ بعد از اتمام مجدد شارژ می‌شود.</p></details><details class="q"><summary>تحویل چقدر طول می‌کشد؟</summary><p>حداقل ۴۸ ساعت. برای مقدار زیاد زمان ممکن است بیشتر شود.</p></details><details class="q"><summary>سقف خرید چقدر است؟</summary><p>سقف خرید همان موجودی سرور است؛ تا ۳۰۰ میلیون با قیمت ۴٬۷۰۰ تومان به‌ازای هر میلیون.</p></details></div></div></section>
<section><div class="wrap"><div class="sec-hd row"><div><span class="eyebrow">بیشتر ببین</span><h2 class="sec">محصولات مرتبط</h2></div>
<a class="btn btn-ghost btn-sm" href="products/">همهٔ محصولات ←</a></div><div class="grid g3"><a class="cat rv" href="cat-minecraft/">
  <img src="assets/img/01-minecraft-800.webp" srcset="assets/img/01-minecraft-480.webp 480w, assets/img/01-minecraft-800.webp 800w, assets/img/01-minecraft-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="اکانت ماینکرفت" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>اکانت ماینکرفت</h3><p>فول اکسس، جاوا و بدراک، تحویل تا ۴۸ ساعت</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-hypixel/">
  <img src="assets/img/03-hypixel-800.webp" srcset="assets/img/03-hypixel-480.webp 480w, assets/img/03-hypixel-800.webp 800w, assets/img/03-hypixel-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="هایپیکسل و اسکای‌بلاک" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>هایپیکسل و اسکای‌بلاک</h3><p>همهٔ محصولات هایپیکسل + کوین اسکای‌بلاک</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-design/">
  <img src="assets/img/04-photoshop-800.webp" srcset="assets/img/04-photoshop-480.webp 480w, assets/img/04-photoshop-800.webp 800w, assets/img/04-photoshop-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="خدمات فتوشاپ" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>خدمات فتوشاپ</h3><p>لوگو، بنر، تامنیل و اسکین</p><span class="go">مشاهده ←</span></div></a></div></div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay-800.webp" srcset="assets/img/05-overlay-480.webp 480w, assets/img/05-overlay-800.webp 800w, assets/img/05-overlay-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>همین حالا سفارش بده</h2>
    <p>قیمت نهایی و زمان تحویل را در تیکت دیسکورد بگیر و سفارشت را نهایی کن.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد یوزورا</a>
      <a class="btn btn-ghost" href="products/">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,"cat-hypixel":`<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><a href="products/">محصولات</a><span>/</span><span style="color:#c3c9d6">هایپیکسل و اسکای‌بلاک</span></div></div>
<!--hero--><section class="phero">
  <div class="wrap phero-grid">
    <div>
      <span class="eyebrow">هایپیکسل و اسکای‌بلاک</span>
      <h1>محصولات هایپیکسل و کوین اسکای‌بلاک — سریع و قانونی</h1>
      <p class="lead" style="margin-top:1rem">همهٔ محصولات موجود هایپیکسل با تحویل سریع و کاملاً قانونی. قیمت‌ها بر اساس دلار روز محاسبه می‌شود؛ برای استعلام دقیق در دیسکورد تیکت بزنید.</p>
      <div class="badges"><span class="pill g">۱ تا ۲۴ ساعت</span><span class="pill ">امن و قانونی</span><span class="pill y">قیمت دلار روز</span><span class="pill b">اسکای‌بلاک ۶٬۹۰۰</span></div>
      <div class="hero-btns">
        <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ثبت سفارش در دیسکورد</a>
        <a class="btn btn-ghost" href="prices/">دیدن جدول قیمت</a>
      </div>
      <div class="badges" style="margin-top:1.4rem"><span class="pill y" style="font-size:.9rem;padding:.5rem 1rem">قیمت: استعلام در تیکت</span></div>
    </div>
    <div class="frame"><img src="assets/img/03-hypixel-800.webp" srcset="assets/img/03-hypixel-480.webp 480w, assets/img/03-hypixel-800.webp 800w, assets/img/03-hypixel-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="هایپیکسل و اسکای‌بلاک" width="1600" height="1000"></div>
  </div>
</section><section class="tight"><div class="wrap grid g2">
      <div class="ccard">
        <h3>محاسبه‌گر کوین اسکای‌بلاک <span class="pill y">هر میلیون ۶٬۹۰۰</span></h3>
        <p class="hint">تحویل ۱ تا ۷۲ ساعت • مناسب هایپیکسل</p>
        <div class="crow"><span>مقدار</span><b><span id="sv">۱۰۰</span> میلیون</b></div>
        <input type="range" min="10" max="500" step="10" value="100" data-rate="6000" data-out="sp" data-lbl="sv">
        <div class="crow" style="margin-top:1rem;font-size:.78rem;color:#7f8798"><span>۱۰ میلیون</span><span>۵۰۰ میلیون</span></div>
        <div class="cout"><span>مبلغ قابل پرداخت</span><b><span id="sp">۶۰۰٬۰۰۰</span> تومان</b></div>
      </div>
      <div><div class="kv"><div class="row"><span>محصولات هایپیکسل</span><b>قیمت دلار روز</b></div><div class="row"><span>زمان تحویل</span><b>۱ تا ۲۴ ساعت</b></div><div class="row"><span>کوین اسکای‌بلاک</span><b>۶٬۹۰۰ / میلیون</b></div><div class="row"><span>زمان تحویل اسکای‌بلاک</span><b>۱ تا ۷۲ ساعت</b></div><div class="row"><span>وضعیت</span><b>امن و قانونی</b></div></div></div>
    </div></section><section><div class="wrap"><div class="sec-hd"><span class="eyebrow">سوالات این محصول</span><h2 class="sec">پرسش‌های پرتکرار</h2></div><div class="faq "><details class="q" open><summary>چرا قیمت ثابت نیست؟</summary><p>قیمت محصولات هایپیکسل و کازمتیک بر اساس دلار روز محاسبه می‌شود.</p></details><details class="q"><summary>تحویل چقدر طول می‌کشد؟</summary><p>هایپیکسل ۱ تا ۲۴ ساعت و کوین اسکای‌بلاک ۱ تا ۷۲ ساعت.</p></details><details class="q"><summary>آیا امن است؟</summary><p>بله، همهٔ سفارش‌ها به‌صورت قانونی و امن انجام می‌شود.</p></details><details class="q"><summary>چه محصولی از هایپیکسل موجود است؟</summary><p>در حال حاضر همهٔ محصولات موجود قابل تهیه است؛ در تیکت بپرسید.</p></details></div></div></section>
<section><div class="wrap"><div class="sec-hd row"><div><span class="eyebrow">بیشتر ببین</span><h2 class="sec">محصولات مرتبط</h2></div>
<a class="btn btn-ghost btn-sm" href="products/">همهٔ محصولات ←</a></div><div class="grid g3"><a class="cat rv" href="cat-minecraft/">
  <img src="assets/img/01-minecraft-800.webp" srcset="assets/img/01-minecraft-480.webp 480w, assets/img/01-minecraft-800.webp 800w, assets/img/01-minecraft-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="اکانت ماینکرفت" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>اکانت ماینکرفت</h3><p>فول اکسس، جاوا و بدراک، تحویل تا ۴۸ ساعت</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-donut/">
  <img src="assets/img/02-donutsmp-800.webp" srcset="assets/img/02-donutsmp-480.webp 480w, assets/img/02-donutsmp-800.webp 800w, assets/img/02-donutsmp-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="پول دونات اس ام پی" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>پول دونات اس ام پی</h3><p>موجودی ۳۰۰ میلیون، هر میلیون ۴٬۷۰۰ تومان</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-design/">
  <img src="assets/img/04-photoshop-800.webp" srcset="assets/img/04-photoshop-480.webp 480w, assets/img/04-photoshop-800.webp 800w, assets/img/04-photoshop-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="خدمات فتوشاپ" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>خدمات فتوشاپ</h3><p>لوگو، بنر، تامنیل و اسکین</p><span class="go">مشاهده ←</span></div></a></div></div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay-800.webp" srcset="assets/img/05-overlay-480.webp 480w, assets/img/05-overlay-800.webp 800w, assets/img/05-overlay-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>همین حالا سفارش بده</h2>
    <p>قیمت نهایی و زمان تحویل را در تیکت دیسکورد بگیر و سفارشت را نهایی کن.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد یوزورا</a>
      <a class="btn btn-ghost" href="products/">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,"cat-minecraft":`<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><a href="products/">محصولات</a><span>/</span><span style="color:#c3c9d6">اکانت ماینکرفت</span></div></div>
<!--hero--><section class="phero">
  <div class="wrap phero-grid">
    <div>
      <span class="eyebrow">اکانت ماینکرفت</span>
      <h1>اکانت ماینکرفت با فول اکسس — تحویل تا ۴۸ ساعت</h1>
      <p class="lead" style="margin-top:1rem">اکانت اقتصادی ماینکرفت با دسترسی کامل، مناسب بازیکنانی که می‌خواهند بدون دردسر وارد بازی شوند. هم نسخهٔ جاوا و هم بدراک، با امکان تغییر اطلاعات بعد از تحویل.</p>
      <div class="badges"><span class="pill g">فول اکسس</span><span class="pill ">جاوا + بدراک</span><span class="pill y">تغییر اطلاعات</span><span class="pill b">۴۸ ساعت</span></div>
      <div class="hero-btns">
        <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ثبت سفارش در دیسکورد</a>
        <a class="btn btn-ghost" href="prices/">دیدن جدول قیمت</a>
      </div>
      <div class="badges" style="margin-top:1.4rem"><span class="pill y" style="font-size:.9rem;padding:.5rem 1rem">قیمت: ۳٬۴۷۰٬۰۰۰ تومان</span></div>
    </div>
    <div class="frame"><img src="assets/img/01-minecraft-800.webp" srcset="assets/img/01-minecraft-480.webp 480w, assets/img/01-minecraft-800.webp 800w, assets/img/01-minecraft-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="اکانت ماینکرفت" width="1600" height="1000"></div>
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
      </div></div></section><section><div class="wrap"><div class="sec-hd"><span class="eyebrow">سوالات این محصول</span><h2 class="sec">پرسش‌های پرتکرار</h2></div><div class="faq "><details class="q" open><summary>اکانت اطلاعاتش قابل تغییر است؟</summary><p>بله، اکانت‌های اقتصادی با فول اکسس تحویل داده می‌شوند و امکان تغییر اطلاعات وجود دارد.</p></details><details class="q"><summary>چقدر طول می‌کشد؟</summary><p>حداکثر ۴۸ ساعت. برای اولویت بیشتر، در تیکت هماهنگ کنید.</p></details><details class="q"><summary>پرداخت به چه صورت است؟</summary><p>ریالی و داخل تیکت دیسکورد؛ فاکتور هم صادر می‌شود.</p></details><details class="q"><summary>اگر مشکلی پیش بیاید؟</summary><p>طبق ضمانت یوزورا تعویض یا بازگشت وجه انجام می‌شود.</p></details></div></div></section>
<section><div class="wrap"><div class="sec-hd row"><div><span class="eyebrow">بیشتر ببین</span><h2 class="sec">محصولات مرتبط</h2></div>
<a class="btn btn-ghost btn-sm" href="products/">همهٔ محصولات ←</a></div><div class="grid g3"><a class="cat rv" href="cat-donut/">
  <img src="assets/img/02-donutsmp-800.webp" srcset="assets/img/02-donutsmp-480.webp 480w, assets/img/02-donutsmp-800.webp 800w, assets/img/02-donutsmp-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="پول دونات اس ام پی" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>پول دونات اس ام پی</h3><p>موجودی ۳۰۰ میلیون، هر میلیون ۴٬۷۰۰ تومان</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-hypixel/">
  <img src="assets/img/03-hypixel-800.webp" srcset="assets/img/03-hypixel-480.webp 480w, assets/img/03-hypixel-800.webp 800w, assets/img/03-hypixel-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="هایپیکسل و اسکای‌بلاک" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>هایپیکسل و اسکای‌بلاک</h3><p>همهٔ محصولات هایپیکسل + کوین اسکای‌بلاک</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-design/">
  <img src="assets/img/04-photoshop-800.webp" srcset="assets/img/04-photoshop-480.webp 480w, assets/img/04-photoshop-800.webp 800w, assets/img/04-photoshop-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="خدمات فتوشاپ" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>خدمات فتوشاپ</h3><p>لوگو، بنر، تامنیل و اسکین</p><span class="go">مشاهده ←</span></div></a></div></div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay-800.webp" srcset="assets/img/05-overlay-480.webp 480w, assets/img/05-overlay-800.webp 800w, assets/img/05-overlay-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>همین حالا سفارش بده</h2>
    <p>قیمت نهایی و زمان تحویل را در تیکت دیسکورد بگیر و سفارشت را نهایی کن.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد یوزورا</a>
      <a class="btn btn-ghost" href="products/">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,"cat-overlay":`<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><a href="products/">محصولات</a><span>/</span><span style="color:#c3c9d6">اورلی استریم</span></div></div>
<!--hero--><section class="phero">
  <div class="wrap phero-grid">
    <div>
      <span class="eyebrow">اورلی استریم</span>
      <h1>اورلی استریم حرفه‌ای — کیفیت خوب ۳۱۰٬۰۰۰ و عالی ۳۸۵٬۰۰۰</h1>
      <p class="lead" style="margin-top:1rem">پک اورلی استریم شامل فریم وب‌کم، چت‌باکس، هشدارها و المان‌های دونیت. در دو کیفیت و با امکان افزودن پک فونت اختصاصی.</p>
      <div class="badges"><span class="pill ">کیفیت خوب</span><span class="pill g">کیفیت عالی</span><span class="pill y">پک فونت</span><span class="pill b">۱ تا ۷۲ ساعت</span></div>
      <div class="hero-btns">
        <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ثبت سفارش در دیسکورد</a>
        <a class="btn btn-ghost" href="prices/">دیدن جدول قیمت</a>
      </div>
      <div class="badges" style="margin-top:1.4rem"><span class="pill y" style="font-size:.9rem;padding:.5rem 1rem">از ۳۱۰٬۰۰۰ تومان</span></div>
    </div>
    <div class="frame"><img src="assets/img/05-overlay-800.webp" srcset="assets/img/05-overlay-480.webp 480w, assets/img/05-overlay-800.webp 800w, assets/img/05-overlay-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="اورلی استریم" width="1600" height="1000"></div>
  </div>
</section><section class="tight"><div class="wrap"><div class="tablewrap rv"><table><thead><tr><th>محصول</th><th>قیمت</th><th>زمان تحویل</th><th>شامل</th></tr></thead><tbody><tr><td>اورلی استریم — کیفیت خوب</td><td><b>۳۱۰٬۰۰۰ تومان</b></td><td>۱ تا ۷۲ ساعت</td><td>فریم وب‌کم، چت‌باکس، هشدارها</td></tr><tr><td>اورلی استریم — کیفیت عالی</td><td><b>۳۸۵٬۰۰۰ تومان</b></td><td>۱ تا ۷۲ ساعت</td><td>نسخهٔ کامل و پرجزئیات</td></tr><tr><td>پک فونت اختصاصی</td><td><b>۱۴۵٬۰۰۰ تومان</b></td><td>فوری</td><td>فونت فارسی/لاتین هماهنگ با اورلی</td></tr></tbody></table></div></div></section>
    <section><div class="wrap grid g3">
      <div class="card hover rv"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m4 12 5 5L20 6"/></svg></div><h3>هماهنگ با برند</h3><p>رنگ و فونت اورلی با لوگو و استایل کانال شما هماهنگ می‌شود.</p></div>
      <div class="card hover rv"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M13 2 3 14h7l-1 8 10-12h-7l1-8Z"/></svg></div><h3>آمادهٔ استفاده</h3><p>فایل‌های لایه‌باز و آمادهٔ ایمپورت در نرم‌افزار استریم.</p></div>
      <div class="card hover rv"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="13" rx="2.5"/><path d="M2 10h20"/></svg></div><h3>پک فونت</h3><p>در صورت نیاز، پک فونت اختصاصی هم اضافه می‌شود.</p></div>
    </div></section><section><div class="wrap"><div class="sec-hd"><span class="eyebrow">سوالات این محصول</span><h2 class="sec">پرسش‌های پرتکرار</h2></div><div class="faq "><details class="q" open><summary>اورلی برای چه نرم‌افزاری است؟</summary><p>برای نرم‌افزارهای رایج استریم؛ فایل‌ها آمادهٔ ایمپورت تحویل داده می‌شوند.</p></details><details class="q"><summary>چند ساعت طول می‌کشد؟</summary><p>۱ تا ۷۲ ساعت بسته به کیفیت انتخابی.</p></details><details class="q"><summary>می‌توانم رنگ‌ها را تغییر دهم؟</summary><p>بله، در نسخهٔ حرفه‌ای هماهنگ‌سازی کامل با برند انجام می‌شود.</p></details><details class="q"><summary>پک فونت چرا لازم است؟</summary><p>برای یکدست شدن تایپوگرافی اورلی با محتوای شما.</p></details></div></div></section>
<section><div class="wrap"><div class="sec-hd row"><div><span class="eyebrow">بیشتر ببین</span><h2 class="sec">محصولات مرتبط</h2></div>
<a class="btn btn-ghost btn-sm" href="products/">همهٔ محصولات ←</a></div><div class="grid g3"><a class="cat rv" href="cat-minecraft/">
  <img src="assets/img/01-minecraft-800.webp" srcset="assets/img/01-minecraft-480.webp 480w, assets/img/01-minecraft-800.webp 800w, assets/img/01-minecraft-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="اکانت ماینکرفت" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>اکانت ماینکرفت</h3><p>فول اکسس، جاوا و بدراک، تحویل تا ۴۸ ساعت</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-donut/">
  <img src="assets/img/02-donutsmp-800.webp" srcset="assets/img/02-donutsmp-480.webp 480w, assets/img/02-donutsmp-800.webp 800w, assets/img/02-donutsmp-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="پول دونات اس ام پی" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>پول دونات اس ام پی</h3><p>موجودی ۳۰۰ میلیون، هر میلیون ۴٬۷۰۰ تومان</p><span class="go">مشاهده ←</span></div></a><a class="cat rv" href="cat-hypixel/">
  <img src="assets/img/03-hypixel-800.webp" srcset="assets/img/03-hypixel-480.webp 480w, assets/img/03-hypixel-800.webp 800w, assets/img/03-hypixel-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="هایپیکسل و اسکای‌بلاک" loading="lazy" width="1600" height="900">
  <div class="cat-in"><h3>هایپیکسل و اسکای‌بلاک</h3><p>همهٔ محصولات هایپیکسل + کوین اسکای‌بلاک</p><span class="go">مشاهده ←</span></div></a></div></div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay-800.webp" srcset="assets/img/05-overlay-480.webp 480w, assets/img/05-overlay-800.webp 800w, assets/img/05-overlay-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>همین حالا سفارش بده</h2>
    <p>قیمت نهایی و زمان تحویل را در تیکت دیسکورد بگیر و سفارشت را نهایی کن.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد یوزورا</a>
      <a class="btn btn-ghost" href="products/">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,contact:`<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><a href="contact/">تماس</a></div></div>

<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><span style="color:#c3c9d6">تماس</span></div></div>
<section class="phero"><div class="wrap">
  <span class="eyebrow">پشتیبانی</span><h1>با ما در تماس باش</h1>
  <p class="lead" style="max-width:70ch">کل ارتباط یوزورا در دیسکورد انجام می‌شود؛ سریع‌ترین راه، زدن تیکت در سرور است.</p>
</div></section>
<section style="padding-top:0"><div class="wrap grid g3">
  <div class="card hover rv"><div class="ic"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg></div><h3>دیسکورد (اصلی)</h3><p>سرور یوزورا شاپ؛ ثبت سفارش، پیگیری و پشتیبانی.</p>
    <div style="margin-top:1rem"><a class="btn btn-gold btn-sm" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener">ورود به سرور</a></div></div>
  <div class="card hover rv"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 2"/></svg></div><h3>ساعت پاسخ‌گویی</h3><p>همه‌روزه؛ معمولاً در کمتر از چند ساعت پاسخ داده می‌شود.</p></div>
  <div class="card hover rv"><div class="ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7.5 3.5v5c0 4.4-3.1 8.3-7.5 9.5-4.4-1.2-7.5-5.1-7.5-9.5v-5L12 3Z"/><path d="m9 12 2 2 4-4"/></svg></div><h3>پیگیری سفارش</h3><p>هر سفارش یک تیکت جدا دارد؛ همان‌جا وضعیت را می‌بینی.</p></div>
</div></section>
<section><div class="wrap-narrow">
  <h3 class="sub">قبل از تیکت، این‌ها را بنویس</h3>
  <div class="kv"><div class="row"><span>نام محصول</span><b>مثلاً پول دونات اس ام پی</b></div><div class="row"><span>مقدار</span><b>مثلاً ۱۰۰ میلیون</b></div><div class="row"><span>نام اکانت / کلاینت</span><b>برای کازمتیک، کیپ و اکانت</b></div><div class="row"><span>نمونه</span><b>برای سفارش‌های طراحی یک نمونه یا توضیح استایل</b></div></div>
  <div style="margin-top:1.2rem"><div class="note blue"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg><div>هیچ‌وقت اطلاعات حساب خود را در جای دیگری جز تیکت رسمی سرور ارسال نکنید.</div></div></div>
</div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay-800.webp" srcset="assets/img/05-overlay-480.webp 480w, assets/img/05-overlay-800.webp 800w, assets/img/05-overlay-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>آماده‌ای؟ تیکت بزن</h2>
    <p>ثبت سفارش در دیسکورد کمتر از یک دقیقه وقت می‌برد.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد یوزورا</a>
      <a class="btn btn-ghost" href="products/">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,faq:`<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><a href="faq/">سوالات متداول</a></div></div>

<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><span style="color:#c3c9d6">سوالات متداول</span></div></div>
<section class="phero"><div class="wrap"><span class="eyebrow">سوالات متداول</span><h1>هر چیزی که باید بدانی</h1>
<p class="lead" style="max-width:70ch">اگر جواب سؤالت را پیدا نکردی، در دیسکورد تیکت بزن؛ سریع پاسخ می‌گیری.</p></div></section>
<section style="padding-top:0"><div class="wrap-narrow"><div style="margin-bottom:2rem"><h3 class="sub">عمومی و سفارش</h3><div class="faq "><details class="q" open><summary>سفارش چطور ثبت می‌شود؟</summary><p>از طریق تیکت در سرور دیسکورد یوزورا. وارد سرور شوید، در چنل تیکت محصول و مقدار را بنویسید.</p></details><details class="q"><summary>آیا سایت فروشگاه آنلاین دارد؟</summary><p>سایت کاتالوگ و قیمت‌هاست؛ ثبت و پرداخت سفارش داخل دیسکورد انجام می‌شود تا بتوانیم دقیق راهنمایی کنیم.</p></details><details class="q"><summary>حداقل سفارش چقدر است؟</summary><p>برای پول دونات ۵۰ میلیون و برای بقیهٔ محصولات محدودیت خاصی نیست.</p></details><details class="q"><summary>می‌توانم چند سفارش همزمان ثبت کنم؟</summary><p>بله، اما بهتر است هر سفارش تیکت جدا داشته باشد تا پیگیری راحت‌تر باشد.</p></details></div></div><div style="margin-bottom:2rem"><h3 class="sub">پرداخت و تحویل</h3><div class="faq "><details class="q" open><summary>پرداخت ریالی است؟</summary><p>بله، هیچ پرداخت دلاری لازم نیست و فاکتور صادر می‌شود.</p></details><details class="q"><summary>زمان تحویل چقدر است؟</summary><p>هایپیکسل ۱ تا ۲۴ ساعت، طراحی و کیپ ۱ تا ۷۲ ساعت، اکانت ماینکرفت تا ۴۸ ساعت.</p></details><details class="q"><summary>اگر دیرتر تحویل شود؟</summary><p>طبق ضمانت یوزورا پیگیری می‌شود و در صورت عدم انجام، وجه بازگردانده می‌شود.</p></details><details class="q"><summary>تحویل در چه ساعتی انجام می‌شود؟</summary><p>در بازهٔ اعلام‌شده؛ برای هماهنگی دقیق‌تر در تیکت بپرسید.</p></details></div></div><div style="margin-bottom:2rem"><h3 class="sub">محصولات</h3><div class="faq "><details class="q" open><summary>قیمت هایپیکسل چرا ثابت نیست؟</summary><p>چون بر اساس دلار روز محاسبه می‌شود؛ در تیکت قیمت لحظه‌ای اعلام می‌شود.</p></details><details class="q"><summary>اکانت ماینکرفت فول اکسس است؟</summary><p>بله، دسترسی کامل دارد و اطلاعات هم قابل تغییر است.</p></details><details class="q"><summary>کیپ اپتیفاین را همه می‌بینند؟</summary><p>برای همهٔ بازیکن‌هایی که اپتیفاین دارند قابل مشاهده است.</p></details><details class="q"><summary>تفاوت اورلی خوب و عالی چیست؟</summary><p>نسخهٔ عالی جزئیات بیشتر، انیمیشن و هماهنگی کامل با برند دارد.</p></details></div></div></div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay-800.webp" srcset="assets/img/05-overlay-480.webp 480w, assets/img/05-overlay-800.webp 800w, assets/img/05-overlay-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>جوابت اینجا نبود؟</h2>
    <p>در دیسکورد بپرس؛ پشتیبانی یوزورا همه‌روزه آنلاین است.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد یوزورا</a>
      <a class="btn btn-ghost" href="products/">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,guarantee:`<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><a href="guarantee/">ضمانت</a></div></div>

<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><span style="color:#c3c9d6">ضمانت</span></div></div>
<section class="phero"><div class="wrap">
  <span class="eyebrow">ضمانت یوزورا</span><h1>ضمانت، بازگشت وجه و امنیت سفارش</h1>
  <p class="lead" style="max-width:70ch">ما با اعتبار انجمن کار می‌کنیم. برای هر سفارش یک تعهد روشن داریم و پشتیبانی تا رسیدن به نتیجه باز می‌ماند.</p>
</div></section>
<section style="padding-top:0"><div class="wrap"><div class="guar">
  <img src="assets/img/07-cape-optifine-800.webp" srcset="assets/img/07-cape-optifine-480.webp 480w, assets/img/07-cape-optifine-800.webp 800w, assets/img/07-cape-optifine-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="ضمانت یوزورا" loading="lazy" width="1600" height="900">
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
    <div style="margin-top:1rem"><div class="note green"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/></svg><div>هیچ‌وقت اطلاعات حساب خود را بیرون از تیکت رسمی سرور یوزورا ارسال نکنید.</div></div></div>
  </div>
</div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay-800.webp" srcset="assets/img/05-overlay-480.webp 480w, assets/img/05-overlay-800.webp 800w, assets/img/05-overlay-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>با خیال راحت سفارش بده</h2>
    <p>اگر سوالی دربارهٔ ضمانت داری، قبل از خرید در تیکت بپرس.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد یوزورا</a>
      <a class="btn btn-ghost" href="products/">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,prices:`<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><a href="prices/">قیمت‌ها</a></div></div>

<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><span style="color:#c3c9d6">قیمت‌ها</span></div></div>
<section class="phero"><div class="wrap">
  <span class="eyebrow">تعرفهٔ کامل</span>
  <h1>جدول قیمت‌ها و محاسبه‌گر</h1>
  <p class="lead" style="max-width:70ch">همهٔ قیمت‌های یوزورا شاپ در یک صفحه. قیمت‌هایی که به دلار وابسته‌اند با «استعلام» مشخص شده‌اند.</p><p class="sec-note">آخرین بازبینی قیمت‌ها: آبان ۱۴۰۵ — همهٔ اعداد به تومان است.</p>
</div></section>

<section style="padding-top:0"><div class="wrap">
  <h3 class="sub">اکانت و پول سرورها</h3>
  <div class="tablewrap rv"><table><thead><tr><th>محصول</th><th>دسته</th><th>قیمت</th><th>زمان تحویل</th></tr></thead><tbody><tr><td>اکانت ماینکرفت اقتصادی</td><td>ماینکرفت</td><td><b>۳٬۴۷۰٬۰۰۰ تومان</b></td><td>تا ۴۸ ساعت</td></tr><tr><td>پول دونات — هر میلیون</td><td>دونات اس ام پی</td><td><b>۴٬۷۰۰ تومان</b></td><td>حداقل ۴۸ ساعت</td></tr><tr><td>کوین اسکای‌بلاک — هر میلیون</td><td>هایپیکسل</td><td><b>۶٬۹۰۰ تومان</b></td><td>۱ تا ۷۲ ساعت</td></tr><tr><td>محصولات هایپیکسل</td><td>هایپیکسل</td><td>استعلام (دلار روز)</td><td>۱ تا ۲۴ ساعت</td></tr><tr><td>کازمتیک کلاینت‌ها</td><td>کازمتیک</td><td>استعلام (آیتم دلاری)</td><td>بسته به آیتم</td></tr></tbody></table></div>
</div></section>

<section style="padding-top:0"><div class="wrap">
  <h3 class="sub">خدمات طراحی</h3>
  <div class="tablewrap rv"><table><thead><tr><th>خدمت</th><th>ساده</th><th>حرفه‌ای</th><th>زمان تحویل</th></tr></thead><tbody><tr><td>لوگو</td><td><b>۳۸۵٬۰۰۰ تومان</b></td><td>—</td><td>۱ تا ۷۲ ساعت</td></tr><tr><td>بنر</td><td>۴۳۰٬۰۰۰ تومان</td><td><b>۶۲۰٬۰۰۰ تومان</b></td><td>۱ تا ۷۲ ساعت</td></tr><tr><td>تامنیل</td><td>۲۶۵٬۰۰۰ تومان</td><td><b>۳۸۵٬۰۰۰ تومان</b></td><td>۱ تا ۷۲ ساعت</td></tr><tr><td>اسکین ماینکرفت</td><td>۳۱۰٬۰۰۰ تومان</td><td><b>۳۸۵٬۰۰۰ تومان</b></td><td>۱ تا ۷۲ ساعت</td></tr></tbody></table></div>
</div></section>

<section style="padding-top:0"><div class="wrap">
  <h3 class="sub">اورلی و کیپ</h3>
  <div class="tablewrap rv"><table><thead><tr><th>محصول</th><th>قیمت</th><th>زمان تحویل</th></tr></thead><tbody><tr><td>اورلی استریم — کیفیت خوب</td><td><b>۳۱۰٬۰۰۰ تومان</b></td><td>۱ تا ۷۲ ساعت</td></tr><tr><td>اورلی استریم — کیفیت عالی</td><td><b>۳۸۵٬۰۰۰ تومان</b></td><td>۱ تا ۷۲ ساعت</td></tr><tr><td>پک فونت اختصاصی</td><td><b>۱۴۵٬۰۰۰ تومان</b></td><td>فوری</td></tr><tr><td>کیپ اپتیفاین</td><td><b>۴۲۰٬۰۰۰ تومان</b></td><td>۱ تا ۷۲ ساعت</td></tr></tbody></table></div>
</div></section>

<section><div class="wrap">
  <div class="sec-hd"><span class="eyebrow">محاسبه‌گر</span><h2 class="sec">قیمت پول سرورها را حساب کن</h2></div>
  <div class="grid g2">
    <div class="ccard rv">
      <h3>پول دونات اس ام پی <span class="pill y">هر میلیون ۴٬۷۰۰</span></h3>
      <p class="hint">حداقل خرید ۵۰ میلیون • موجودی ۳۰۰ میلیون</p>
      <div class="crow"><span>مقدار</span><b><span id="dv">۱۰۰</span> میلیون</b></div>
      <input type="range" min="50" max="300" step="10" value="100" data-rate="4000" data-out="dp" data-lbl="dv">
      <div class="crow" style="margin-top:1rem;font-size:.78rem;color:#7f8798"><span>۵۰ میلیون</span><span>۳۰۰ میلیون</span></div>
      <div class="cout"><span>مبلغ قابل پرداخت</span><b><span id="dp">۳۹۰٬۰۰۰</span> تومان</b></div>
    </div>
    <div class="ccard rv">
      <h3>کوین اسکای‌بلاک <span class="pill y">هر میلیون ۶٬۹۰۰</span></h3>
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
  <img class="bg" src="assets/img/05-overlay-800.webp" srcset="assets/img/05-overlay-480.webp 480w, assets/img/05-overlay-800.webp 800w, assets/img/05-overlay-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>قیمت را دیدی؟ حالا سفارش بده.</h2>
    <p>در دیسکورد تیکت بزن، محصول و مقدار را بگو، فاکتور بگیر و پرداخت کن.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد یوزورا</a>
      <a class="btn btn-ghost" href="products/">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,process:`<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><a href="process/">مراحل سفارش</a></div></div>

<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><span style="color:#c3c9d6">راهنما</span><span>/</span><span style="color:#c3c9d6">مراحل سفارش</span></div></div>
<section class="phero"><div class="wrap">
  <span class="eyebrow">راهنما</span><h1>مراحل سفارش در یوزورا</h1>
  <p class="lead" style="max-width:70ch">کل فرآیند داخل دیسکورد انجام می‌شود؛ بدون فرم پیچیده، بدون ثبت‌نام اضافه و بدون نیاز به کارت خارجی.</p>
</div></section>
<section style="padding-top:0"><div class="wrap"><div class="steps">
  <div class="step rv"><h3>ورود به دیسکورد</h3><p>با لینک دعوت وارد سرور یوزورا شاپ شوید.</p></div>
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
  <img class="bg" src="assets/img/05-overlay-800.webp" srcset="assets/img/05-overlay-480.webp 480w, assets/img/05-overlay-800.webp 800w, assets/img/05-overlay-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>سوالی داری؟ تیکت بزن</h2>
    <p>پشتیبانی یوزورا همه‌روزه در دیسکورد آنلاین است.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد یوزورا</a>
      <a class="btn btn-ghost" href="products/">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,products:`<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><a href="products/">محصولات</a></div></div>

<section class="phero"><div class="wrap">
  <span class="eyebrow">کاتالوگ کامل</span>
  <h1>همهٔ محصولات یوزورا شاپ</h1>
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
  <a class="thumb" href="cat-minecraft/"><img src="assets/img/products/p-minecraft-account.jpg" alt="اکانت ماینکرفت اقتصادی" loading="lazy" width="1600" height="900"><span class="tag">ماینکرفت</span></a>
  <div class="body">
    <h3><a href="cat-minecraft/">اکانت ماینکرفت اقتصادی</a></h3>
    <p class="desc">اکانت کامل با فول اکسس؛ جاوا و بدراک؛ اطلاعات قابل تغییر.</p>
    <div class="pills"><span class="pill g">فول اکسس</span><span class="pill y">۴۸ ساعت</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۳٬۴۷۰٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="minecraft" class="pcard rv">
  <a class="thumb" href="cat-minecraft/"><img src="assets/img/products/p-skin-pro.jpg" alt="اکانت با اولویت تحویل" loading="lazy" width="1600" height="900"><span class="tag">ماینکرفت</span></a>
  <div class="body">
    <h3><a href="cat-minecraft/">اکانت با اولویت تحویل</a></h3>
    <p class="desc">ثبت سفارش با اولویت در تیکت برای تحویل در کمترین زمان.</p>
    <div class="pills"><span class="pill g">اولویت</span><span class="pill ">فول اکسس</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۳٬۴۷۰٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="donut" class="pcard rv">
  <a class="thumb" href="cat-donut/"><img src="assets/img/products/p-donut-million.jpg" alt="پول دونات — هر میلیون" loading="lazy" width="1600" height="900"><span class="tag">دونات</span></a>
  <div class="body">
    <h3><a href="cat-donut/">پول دونات — هر میلیون</a></h3>
    <p class="desc">حداقل ۵۰ میلیون؛ موجودی سرور ۳۰۰ میلیون.</p>
    <div class="pills"><span class="pill g">۳۰۰M موجودی</span><span class="pill y">۴۸ ساعت</span></div>
    <div class="pfoot">
      <div class="price"><span>هر میلیون</span><b>۴٬۷۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="hypixel" class="pcard rv">
  <a class="thumb" href="cat-hypixel/"><img src="assets/img/products/p-hypixel.jpg" alt="محصولات هایپیکسل" loading="lazy" width="1600" height="900"><span class="tag">هایپیکسل</span></a>
  <div class="body">
    <h3><a href="cat-hypixel/">محصولات هایپیکسل</a></h3>
    <p class="desc">همهٔ آیتم‌های موجود؛ قیمت دلار روز.</p>
    <div class="pills"><span class="pill g">۱ تا ۲۴ ساعت</span><span class="pill ">امن و قانونی</span></div>
    <div class="pfoot">
      <div class="price ask"><span>قیمت</span><b>استعلام در تیکت</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="hypixel" class="pcard rv">
  <a class="thumb" href="cat-hypixel/"><img src="assets/img/products/p-skyblock.jpg" alt="کوین اسکای‌بلاک — هر میلیون" loading="lazy" width="1600" height="900"><span class="tag">اسکای‌بلاک</span></a>
  <div class="body">
    <h3><a href="cat-hypixel/">کوین اسکای‌بلاک — هر میلیون</a></h3>
    <p class="desc">کوین اسکای‌بلاک با تحویل ۱ تا ۷۲ ساعت.</p>
    <div class="pills"><span class="pill g">۷۲ ساعت</span><span class="pill ">قیمت میلیونی</span></div>
    <div class="pfoot">
      <div class="price"><span>هر میلیون</span><b>۶٬۹۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="design" class="pcard rv">
  <a class="thumb" href="cat-design/"><img src="assets/img/products/p-logo.jpg" alt="طراحی لوگو" loading="lazy" width="1600" height="900"><span class="tag">فتوشاپ</span></a>
  <div class="body">
    <h3><a href="cat-design/">طراحی لوگو</a></h3>
    <p class="desc">لوگوی اختصاصی برای سرور یا کانال شما.</p>
    <div class="pills"><span class="pill g">اختصاصی</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۳۸۵٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="design" class="pcard rv">
  <a class="thumb" href="cat-design/"><img src="assets/img/products/p-logo.jpg" alt="بنر ساده" loading="lazy" width="1600" height="900"><span class="tag">فتوشاپ</span></a>
  <div class="body">
    <h3><a href="cat-design/">بنر ساده</a></h3>
    <p class="desc">بنر مناسب دیسکورد و شبکه‌های اجتماعی.</p>
    <div class="pills"><span class="pill ">ساده</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۴۳۰٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="design" class="pcard rv">
  <a class="thumb" href="cat-design/"><img src="assets/img/products/p-logo.jpg" alt="بنر حرفه‌ای" loading="lazy" width="1600" height="900"><span class="tag">فتوشاپ</span></a>
  <div class="body">
    <h3><a href="cat-design/">بنر حرفه‌ای</a></h3>
    <p class="desc">نسخهٔ کامل با جزئیات و بازنگری بیشتر.</p>
    <div class="pills"><span class="pill g">حرفه‌ای</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۶۲۰٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="design" class="pcard rv">
  <a class="thumb" href="cat-design/"><img src="assets/img/products/p-logo.jpg" alt="تامنیل یوتیوب (ساده)" loading="lazy" width="1600" height="900"><span class="tag">فتوشاپ</span></a>
  <div class="body">
    <h3><a href="cat-design/">تامنیل یوتیوب (ساده)</a></h3>
    <p class="desc">تامنیل کلیک‌خور برای ویدیوهای گیمینگ.</p>
    <div class="pills"><span class="pill ">ساده</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۲۶۵٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="design" class="pcard rv">
  <a class="thumb" href="cat-design/"><img src="assets/img/products/p-logo.jpg" alt="تامنیل یوتیوب (حرفه‌ای)" loading="lazy" width="1600" height="900"><span class="tag">فتوشاپ</span></a>
  <div class="body">
    <h3><a href="cat-design/">تامنیل یوتیوب (حرفه‌ای)</a></h3>
    <p class="desc">نسخهٔ حرفه‌ای با ترکیب‌بندی قوی‌تر.</p>
    <div class="pills"><span class="pill g">حرفه‌ای</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۳۸۵٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="design" class="pcard rv">
  <a class="thumb" href="cat-design/"><img src="assets/img/products/p-skin-pro.jpg" alt="اسکین ماینکرفت (ساده)" loading="lazy" width="1600" height="900"><span class="tag">فتوشاپ</span></a>
  <div class="body">
    <h3><a href="cat-design/">اسکین ماینکرفت (ساده)</a></h3>
    <p class="desc">اسکین اختصاصی آمادهٔ آپلود.</p>
    <div class="pills"><span class="pill ">ساده</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۳۱۰٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="design" class="pcard rv">
  <a class="thumb" href="cat-design/"><img src="assets/img/products/p-skin-pro.jpg" alt="اسکین ماینکرفت (حرفه‌ای)" loading="lazy" width="1600" height="900"><span class="tag">فتوشاپ</span></a>
  <div class="body">
    <h3><a href="cat-design/">اسکین ماینکرفت (حرفه‌ای)</a></h3>
    <p class="desc">اسکین با جزئیات و سایه‌پردازی بیشتر.</p>
    <div class="pills"><span class="pill g">حرفه‌ای</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۳۸۵٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="overlay" class="pcard rv">
  <a class="thumb" href="cat-overlay/"><img src="assets/img/products/p-overlay-good.jpg" alt="اورلی استریم — کیفیت خوب" loading="lazy" width="1600" height="900"><span class="tag">اورلی</span></a>
  <div class="body">
    <h3><a href="cat-overlay/">اورلی استریم — کیفیت خوب</a></h3>
    <p class="desc">پک اورلی شامل فریم وب‌کم، چت‌باکس و هشدارها.</p>
    <div class="pills"><span class="pill ">کیفیت خوب</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۳۱۰٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="overlay" class="pcard rv">
  <a class="thumb" href="cat-overlay/"><img src="assets/img/products/p-overlay-good.jpg" alt="اورلی استریم — کیفیت عالی" loading="lazy" width="1600" height="900"><span class="tag">اورلی</span></a>
  <div class="body">
    <h3><a href="cat-overlay/">اورلی استریم — کیفیت عالی</a></h3>
    <p class="desc">نسخهٔ کامل و پرجزئیات با هماهنگی کامل با برند شما.</p>
    <div class="pills"><span class="pill g">کیفیت عالی</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۳۸۵٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="overlay" class="pcard rv">
  <a class="thumb" href="cat-overlay/"><img src="assets/img/products/p-font.jpg" alt="پک فونت اختصاصی" loading="lazy" width="1600" height="900"><span class="tag">اورلی</span></a>
  <div class="body">
    <h3><a href="cat-overlay/">پک فونت اختصاصی</a></h3>
    <p class="desc">پک فونت فارسی/لاتین مناسب اورلی و تامنیل.</p>
    <div class="pills"><span class="pill ">پک فونت</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۱۴۵٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="cosmetic" class="pcard rv">
  <a class="thumb" href="cat-cosmetics/"><img src="assets/img/products/p-cosmetics.jpg" alt="کازمتیک کلاینت‌های ماینکرفت" loading="lazy" width="1600" height="900"><span class="tag">کازمتیک</span></a>
  <div class="body">
    <h3><a href="cat-cosmetics/">کازمتیک کلاینت‌های ماینکرفت</a></h3>
    <p class="desc">همهٔ کلاینت‌ها؛ قیمت بر اساس دلاری بودن آیتم.</p>
    <div class="pills"><span class="pill g">همهٔ کلاینت‌ها</span><span class="pill y">دلاری</span></div>
    <div class="pfoot">
      <div class="price ask"><span>قیمت</span><b>استعلام در تیکت</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article><article data-cat="cape" class="pcard rv">
  <a class="thumb" href="cat-cape/"><img src="assets/img/products/p-cape.jpg" alt="کیپ اپتیفاین" loading="lazy" width="1600" height="900"><span class="tag">کیپ</span></a>
  <div class="body">
    <h3><a href="cat-cape/">کیپ اپتیفاین</a></h3>
    <p class="desc">کیپ اختصاصی روی اکانت شما.</p>
    <div class="pills"><span class="pill g">اختصاصی</span><span class="pill y">۷۲ ساعت</span></div>
    <div class="pfoot">
      <div class="price"><span>قیمت</span><b>۴۲۰٬۰۰۰ تومان</b></div>
      <a class="btn btn-gold btn-sm" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener">سفارش</a>
    </div>
  </div>
</article></div>
</div></section>
<section><div class="wrap"><div class="cta rv">
  <img class="bg" src="assets/img/05-overlay-800.webp" srcset="assets/img/05-overlay-480.webp 480w, assets/img/05-overlay-800.webp 800w, assets/img/05-overlay-900.webp 900w" sizes="(max-width:700px) 92vw, 780px" alt="" loading="lazy" width="1600" height="900">
  <div class="cta-in">
    <span class="eyebrow">همین حالا شروع کن</span>
    <h2>محصولی پیدا نکردی؟ در تیکت بپرس.</h2>
    <p>اگر محصول یا سرویس خاصی می‌خواهی که در لیست نیست، در دیسکورد تیکت بزن؛ اگر قابل تهیه باشد برایت انجام می‌دهیم.</p>
    <div class="hero-btns" style="margin-top:1.6rem">
      <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.3 4.5A18 18 0 0 0 15.9 3.2l-.3.7a13 13 0 0 0-3.2 0l-.3-.7A18 18 0 0 0 7.7 4.5C4.9 8.6 4.1 12.6 4.5 16.5a18 18 0 0 0 5.4 2.7l.7-1.2c-.6-.2-1.2-.5-1.8-.9l.4-.3a13 13 0 0 0 11.6 0l.4.3c-.6.4-1.2.7-1.8.9l.7 1.2a18 18 0 0 0 5.4-2.7c.5-4.5-.6-8.5-3.2-11.9ZM9.7 14.1c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Zm4.6 0c-1 0-1.9-1-1.9-2.2s.8-2.2 1.9-2.2 1.9 1 1.9 2.2-.9 2.2-1.9 2.2Z"/></svg> ورود به دیسکورد یوزورا</a>
      <a class="btn btn-ghost" href="products/">همهٔ محصولات</a>
    </div>
  </div>
</div></div></section>`,terms:`<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><a href="terms/">قوانین</a></div></div>

<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><span style="color:#c3c9d6">قوانین</span></div></div>
<section class="phero"><div class="wrap"><span class="eyebrow">قوانین</span><h1>قوانین و شرایط استفاده</h1>
<p class="lead" style="max-width:70ch">این صفحه شرایط خرید از یوزورا شاپ را مشخص می‌کند. با ثبت سفارش، این شرایط را می‌پذیری.</p></div></section>
<section style="padding-top:0"><div class="wrap-narrow"><div class="article">
  <h2>۱. ثبت سفارش</h2><p>سفارش‌ها فقط از طریق تیکت در سرور رسمی دیسکورد یوزورا ثبت می‌شوند. اطلاعات محصول، مقدار و قیمت در همان تیکت نهایی می‌شود.</p>
  <h2>۲. قیمت‌ها</h2><p>قیمت‌های سایت به تومان است. قیمت محصولاتی که به دلار وابسته‌اند (هایپیکسل و کازمتیک) هنگام سفارش اعلام می‌شود. یوزورا حق به‌روزرسانی قیمت‌ها را دارد.</p>
  <h2>۳. پرداخت</h2><p>پرداخت ریالی و بعد از صدور فاکتور انجام می‌شود. سفارش پس از تأیید پرداخت وارد صف انجام می‌شود.</p>
  <h2>۴. تحویل</h2><p>زمان تحویل هر محصول در صفحهٔ همان محصول نوشته شده است. تأخیرهای خارج از کنترل (مثل اختلال سرور مقصد) به مشتری اطلاع داده می‌شود.</p>
  <h2>۵. بازگشت وجه</h2><p>اگر سفارش در بازهٔ اعلام‌شده انجام نشود و راه‌حل جایگزینی نباشد، مبلغ بازگردانده می‌شود. جزئیات در صفحهٔ ضمانت آمده است.</p>
  <h2>۶. مسئولیت‌ها</h2><p>مشتری مسئول درست بودن اطلاعاتی است که ارسال می‌کند. یوزورا مسئول عواقب ناشی از نقض قوانین خود بازی یا سرور مقصد نیست.</p>
  <h2>۷. حریم خصوصی</h2><p>اطلاعات شما فقط برای انجام سفارش استفاده می‌شود و در اختیار شخص ثالث قرار نمی‌گیرد.</p>
</div></div></section>`},v="#3ab8f0",Fs="#a9e5ff",Us="#b27a00",q=(s,a,t="")=>`<svg class="art-svg" viewBox="0 0 240 240" role="img" aria-hidden="true" fill="none" ${t} xmlns="http://www.w3.org/2000/svg">${a}</svg>`,j=s=>`
  <defs>
    <radialGradient id="${s}-gl" cx="50%" cy="46%" r="52%">
      <stop offset="0" stop-color="${v}" stop-opacity=".22"/>
      <stop offset=".62" stop-color="${v}" stop-opacity=".07"/>
      <stop offset="1" stop-color="${v}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="${s}-g" x1="0" y1="0" x2=".35" y2="1">
      <stop offset="0" stop-color="${Fs}"/>
      <stop offset=".48" stop-color="${v}"/>
      <stop offset="1" stop-color="${Us}"/>
    </linearGradient>
    <linearGradient id="${s}-f" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fff" stop-opacity=".10"/>
      <stop offset="1" stop-color="#fff" stop-opacity=".015"/>
    </linearGradient>
    <pattern id="${s}-h" width="7" height="7" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="7" stroke="${v}" stroke-opacity=".24" stroke-width="1"/>
    </pattern>
    <pattern id="${s}-d" width="9" height="9" patternUnits="userSpaceOnUse">
      <circle cx="1.6" cy="1.6" r="1.05" fill="${v}" fill-opacity=".30"/>
    </pattern>
  </defs>
  <circle cx="120" cy="118" r="106" fill="url(#${s}-gl)"/>`,Xs=()=>q("ar-shield",`${j("ar-shield")}
  <g stroke="url(#ar-shield-g)" stroke-linecap="round" stroke-linejoin="round">
    <!-- هالهٔ بیرونی -->
    <path d="M120 22 206 56v62c0 50-34 82-86 100-52-18-86-50-86-100V56Z"
          stroke-width="1" stroke-opacity=".35" stroke-dasharray="2 7"/>
    <!-- بدنهٔ سپر -->
    <path d="M120 34 196 64v52c0 45-30 74-76 90-46-16-76-45-76-90V64Z"
          fill="url(#ar-shield-f)" stroke-width="2.6"/>
    <!-- صفحهٔ داخلی هاشور -->
    <path d="M120 54 178 77v40c0 34-23 57-58 70-35-13-58-36-58-70V77Z"
          fill="url(#ar-shield-h)" stroke-width="1.2" stroke-opacity=".55"/>
    <!-- قفل -->
    <rect x="98" y="110" width="44" height="36" rx="8" fill="#0d0e13" stroke-width="2.2"/>
    <path d="M107 110v-11a13 13 0 0 1 26 0v11" stroke-width="2.2"/>
    <circle cx="120" cy="124" r="4.4" fill="${v}"/>
    <path d="M120 128v9" stroke-width="2.2"/>
    <!-- پرچ‌ها -->
    <circle cx="76" cy="88" r="1.9" fill="${v}" stroke="none"/>
    <circle cx="164" cy="88" r="1.9" fill="${v}" stroke="none"/>
    <!-- برگ‌های لور -->
    <g stroke-width="1.3" stroke-opacity=".8">
      <path d="M52 172c-9-7-14-17-15-28"/>
      <path d="M46 168c-6 1-12-1-16-5 5-4 11-5 16-2"/>
      <path d="M42 158c-6 0-11-3-14-8 6-3 12-2 16 2"/>
      <path d="M40 148c-5-2-9-6-10-11 6-1 11 2 14 6"/>
      <path d="M188 172c9-7 14-17 15-28"/>
      <path d="M194 168c6 1 12-1 16-5-5-4-11-5-16-2"/>
      <path d="M198 158c6 0 11-3 14-8-6-3-12-2-16 2"/>
      <path d="M200 148c5-2 9-6 10-11-6-1-11 2-14 6"/>
    </g>
    <!-- جرقه‌ها -->
    <g stroke-width="1.6" stroke-opacity=".9">
      <path d="M120 12v9M120 219v-9M30 120h9M201 120h9"/>
      <path d="m62 62 5 5M173 173l5 5M178 62l-5 5M67 173l-5 5" stroke-opacity=".45"/>
    </g>
  </g>`),Ws=()=>q("ar-refund",`${j("ar-refund")}
  <g stroke="url(#ar-refund-g)" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="120" cy="118" r="72" stroke-width="1.1" stroke-opacity=".28" stroke-dasharray="3 8"/>
    <circle cx="120" cy="118" r="58" stroke-width="2.4" fill="url(#ar-refund-f)"/>
    <!-- فلش بازگشت (پادساعتگرد) -->
    <path d="M78 96a46 46 0 1 1-3 44" stroke-width="2.6"/>
    <path d="M74 76v22h22" stroke-width="2.6"/>
    <!-- سکهٔ وسط -->
    <circle cx="120" cy="118" r="26" fill="#0d0e13" stroke-width="2.2"/>
    <circle cx="120" cy="118" r="19" stroke-width="1.1" stroke-opacity=".6" stroke-dasharray="2 5"/>
    <path d="M114 108h9a6 6 0 0 1 0 12h-6a6 6 0 0 0 0 12h10" stroke-width="2.2"/>
    <path d="M120 102v32" stroke-width="2.2"/>
    <!-- سکه‌های پشته -->
    <g stroke-width="1.8">
      <ellipse cx="62" cy="170" rx="15" ry="5.4"/>
      <path d="M47 170v8c0 3 6.7 5.4 15 5.4s15-2.4 15-5.4v-8"/>
      <ellipse cx="62" cy="184" rx="15" ry="5.4" stroke-opacity=".6"/>
      <ellipse cx="182" cy="164" rx="13" ry="4.7" stroke-opacity=".85"/>
      <path d="M169 164v7c0 2.6 5.8 4.7 13 4.7s13-2.1 13-4.7v-7"/>
    </g>
    <circle cx="120" cy="118" r="72" fill="url(#ar-refund-h)" stroke="none" opacity=".35"/>
  </g>`),Ks=()=>q("ar-support",`${j("ar-support")}
  <g stroke="url(#ar-support-g)" stroke-linecap="round" stroke-linejoin="round">
    <!-- هدست -->
    <path d="M62 136v-16a58 58 0 0 1 116 0v16" stroke-width="2.6"/>
    <rect x="48" y="130" width="26" height="44" rx="12" fill="url(#ar-support-f)" stroke-width="2.2"/>
    <rect x="166" y="130" width="26" height="44" rx="12" fill="url(#ar-support-f)" stroke-width="2.2"/>
    <path d="M74 152c0 18 12 28 28 30" stroke-width="2.2"/>
    <rect x="98" y="176" width="20" height="11" rx="5.5" fill="${v}" stroke="none"/>
    <!-- حباب گفتگو -->
    <path d="M120 66c22 0 38 13 38 30s-16 30-38 30c-4 0-8-.4-11-1l-14 8 3-13c-10-5-16-14-16-24 0-17 16-30 38-30Z"
          fill="#0d0e13" stroke-width="2.2"/>
    <g stroke-width="1.8">
      <circle cx="104" cy="96" r="2.4" fill="${v}" stroke="none"/>
      <circle cx="120" cy="96" r="2.4" fill="${v}" stroke="none"/>
      <circle cx="136" cy="96" r="2.4" fill="${v}" stroke="none"/>
    </g>
    <!-- موج صدا -->
    <g stroke-width="1.8" stroke-opacity=".75">
      <path d="M196 150a22 22 0 0 1 0 20"/>
      <path d="M206 142a34 34 0 0 1 0 36" stroke-opacity=".45"/>
      <path d="M44 150a22 22 0 0 0 0 20"/>
      <path d="M34 142a34 34 0 0 0 0 36" stroke-opacity=".45"/>
    </g>
    <circle cx="120" cy="118" r="98" fill="url(#ar-support-h)" stroke="none" opacity=".22"/>
  </g>`),Qs=()=>q("ar-pay",`${j("ar-pay")}
  <g stroke="url(#ar-pay-g)" stroke-linecap="round" stroke-linejoin="round">
    <!-- کارت -->
    <rect x="40" y="86" width="160" height="96" rx="14" fill="url(#ar-pay-f)" stroke-width="2.4"/>
    <path d="M40 112h160" stroke-width="2"/>
    <!-- نوار مغناطیسی هاشور -->
    <rect x="40" y="120" width="160" height="16" fill="url(#ar-pay-h)" stroke="none" opacity=".5"/>
    <!-- چیپ -->
    <rect x="58" y="146" width="30" height="22" rx="5" stroke-width="1.8"/>
    <g stroke-width="1.2" stroke-opacity=".8">
      <path d="M58 153h30M58 161h30M70 146v22M79 146v22"/>
    </g>
    <!-- امواج بی‌تماس -->
    <g stroke-width="1.8" stroke-opacity=".8">
      <path d="M150 152a14 14 0 0 1 0 12"/>
      <path d="M160 146a24 24 0 0 1 0 24"/>
      <path d="M170 140a34 34 0 0 1 0 36" stroke-opacity=".45"/>
    </g>
    <!-- سکه‌ها -->
    <circle cx="184" cy="72" r="17" stroke-width="2.2"/>
    <circle cx="184" cy="72" r="11" stroke-width="1" stroke-opacity=".55" stroke-dasharray="2 4"/>
    <path d="M180 66h6a4 4 0 0 1 0 8h-4a4 4 0 0 0 0 8h7" stroke-width="1.8"/>
    <circle cx="62" cy="66" r="12" stroke-width="2" stroke-opacity=".8"/>
    <path d="M62 59v14M57 66h10" stroke-width="1.6" stroke-opacity=".8"/>
    <!-- رسید -->
    <path d="M104 34h44v18l-7-5-7 5-7-5-7 5-8-5-8 5Z" fill="#0d0e13" stroke-width="1.8"/>
    <g stroke-width="1.2" stroke-opacity=".55"><path d="M112 44h30M112 50h22"/></g>
    <circle cx="120" cy="118" r="100" fill="url(#ar-pay-h)" stroke="none" opacity=".18"/>
  </g>`),Js=()=>q("ar-delivery",`${j("ar-delivery")}
  <g stroke="url(#ar-delivery-g)" stroke-linecap="round" stroke-linejoin="round">
    <!-- جعبه -->
    <path d="M74 108 120 88l46 20v58l-46 20-46-20Z" fill="url(#ar-delivery-f)" stroke-width="2.4"/>
    <path d="M74 108l46 20 46-20M120 128v58" stroke-width="2"/>
    <path d="M97 97l46 20v26" stroke-width="1.4" stroke-opacity=".65"/>
    <rect x="104" y="140" width="32" height="18" rx="3" fill="url(#ar-delivery-h)" stroke="none"/>
    <path d="m112 132-8-4M128 132l8-4" stroke-width="1.4" stroke-opacity=".5"/>
    <!-- خطوط سرعت -->
    <g stroke-width="2" stroke-opacity=".55">
      <path d="M22 118h30M14 136h38M26 154h26M20 172h32"/>
    </g>
    <!-- جرقه‌های موتور -->
    <path d="M96 196c4 10 10 16 24 20 14-4 20-10 24-20" stroke-width="1.3" stroke-opacity=".45" stroke-dasharray="3 6"/>
    <!-- عقربه/فلش بالا -->
    <path d="M120 66V30M108 42l12-12 12 12" stroke-width="2.6"/>
    <circle cx="120" cy="118" r="100" fill="url(#ar-delivery-h)" stroke="none" opacity=".2"/>
  </g>`),sa=()=>q("ar-secure",`${j("ar-secure")}
  <g stroke="url(#ar-secure-g)" stroke-linecap="round" stroke-linejoin="round">
    <!-- شش‌ضلعی -->
    <path d="M120 30 196 72v88l-76 42-76-42V72Z" fill="url(#ar-secure-f)" stroke-width="2.4"/>
    <path d="M120 46 182 80v72l-62 34-62-34V80Z" stroke-width="1.1" stroke-opacity=".4" stroke-dasharray="2 7"/>
    <!-- قفل بزرگ -->
    <rect x="94" y="112" width="52" height="44" rx="10" fill="#0d0e13" stroke-width="2.4"/>
    <path d="M104 112v-13a16 16 0 0 1 32 0v13" stroke-width="2.4"/>
    <circle cx="120" cy="130" r="5.4" fill="${v}"/>
    <path d="M120 135v10" stroke-width="2.4"/>
    <!-- مدارها -->
    <g stroke-width="1.3" stroke-opacity=".6">
      <path d="M76 92h14v-14M164 92h-14V78M76 152h14v14M164 152h-14v14"/>
      <circle cx="90" cy="78" r="2.2" fill="${v}" stroke="none"/>
      <circle cx="150" cy="78" r="2.2" fill="${v}" stroke="none"/>
      <circle cx="90" cy="166" r="2.2" fill="${v}" stroke="none"/>
      <circle cx="150" cy="166" r="2.2" fill="${v}" stroke="none"/>
    </g>
    <path d="M120 30 196 72v88l-76 42-76-42V72Z" fill="url(#ar-secure-d)" stroke="none" opacity=".3"/>
  </g>`),aa=()=>q("ar-design",`${j("ar-design")}
  <g stroke="url(#ar-design-g)" stroke-linecap="round" stroke-linejoin="round">
    <!-- بوم -->
    <rect x="42" y="56" width="120" height="120" rx="10" fill="url(#ar-design-f)" stroke-width="2.2"/>
    <rect x="54" y="68" width="96" height="96" rx="6" stroke-width="1.1" stroke-opacity=".35" stroke-dasharray="2 6"/>
    <!-- منحنی بزیه -->
    <path d="M64 152c18-44 44-62 76-72" stroke-width="1.8" stroke-opacity=".8"/>
    <path d="M64 152 90 108M140 80l14-6" stroke-width="1" stroke-opacity=".45"/>
    <circle cx="64" cy="152" r="4" stroke-width="2"/>
    <circle cx="140" cy="80" r="4" stroke-width="2"/>
    <circle cx="90" cy="108" r="3" stroke-width="1.6" stroke-opacity=".8"/>
    <rect x="136" y="76" width="8" height="8" stroke-width="1.6" stroke-opacity=".8"/>
    <!-- قلم -->
    <path d="M150 168l40-40 14 14-40 40-19 5Z" fill="#0d0e13" stroke-width="2.2"/>
    <path d="M182 136l14 14" stroke-width="1.6"/>
    <!-- سواچ‌ها -->
    <g stroke-width="1.6">
      <circle cx="192" cy="70" r="9" fill="${v}" fill-opacity=".85" stroke="none"/>
      <circle cx="192" cy="94" r="9" stroke-opacity=".8"/>
      <circle cx="192" cy="118" r="9" stroke-opacity=".8"/>
    </g>
    <path d="M30 186h108" stroke-width="1.2" stroke-opacity=".3"/>
    <circle cx="120" cy="118" r="100" fill="url(#ar-design-d)" stroke="none" opacity=".22"/>
  </g>`),ta=()=>q("ar-overlay",`${j("ar-overlay")}
  <g stroke="url(#ar-overlay-g)" stroke-linecap="round" stroke-linejoin="round">
    <!-- مانیتور -->
    <rect x="34" y="58" width="172" height="112" rx="12" fill="url(#ar-overlay-f)" stroke-width="2.4"/>
    <path d="M96 188h48M120 170v18" stroke-width="2.2"/>
    <!-- فریم وب‌کم -->
    <rect x="128" y="118" width="62" height="40" rx="8" fill="#0d0e13" stroke-width="2"/>
    <circle cx="159" cy="138" r="9" stroke-width="1.8"/>
    <circle cx="159" cy="138" r="3.4" fill="${v}" stroke="none"/>
    <!-- چت‌باکس -->
    <g stroke-width="1.4" stroke-opacity=".8">
      <rect x="48" y="118" width="66" height="8" rx="4"/>
      <rect x="48" y="132" width="48" height="8" rx="4" stroke-opacity=".6"/>
      <rect x="48" y="146" width="56" height="8" rx="4" stroke-opacity=".4"/>
    </g>
    <!-- هدر استریم -->
    <rect x="48" y="74" width="40" height="10" rx="5" fill="${v}" stroke="none" opacity=".9"/>
    <rect x="96" y="74" width="22" height="10" rx="5" stroke-width="1.4" stroke-opacity=".7"/>
    <circle cx="190" cy="79" r="5" fill="#ff4d4d" stroke="none"/>
    <!-- نوار پیشرفت -->
    <path d="M48 104h120" stroke-width="3" stroke-opacity=".25"/>
    <path d="M48 104h74" stroke-width="3"/>
    <circle cx="120" cy="118" r="102" fill="url(#ar-overlay-h)" stroke="none" opacity=".2"/>
  </g>`),ea=()=>q("ar-community",`${j("ar-community")}
  <g stroke="url(#ar-community-g)" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="120" cy="118" r="76" stroke-width="1.1" stroke-opacity=".3" stroke-dasharray="2 8"/>
    <!-- حلقهٔ اعضا -->
    <g stroke-width="2">
      <circle cx="120" cy="48" r="13"/>
      <circle cx="182" cy="82" r="11" stroke-opacity=".85"/>
      <circle cx="182" cy="154" r="11" stroke-opacity=".7"/>
      <circle cx="120" cy="188" r="13" stroke-opacity=".85"/>
      <circle cx="58" cy="154" r="11" stroke-opacity=".7"/>
      <circle cx="58" cy="82" r="11" stroke-opacity=".85"/>
    </g>
    <path d="M120 61v34M172 88l-24 14M172 148l-24-14M120 175v-34M68 148l24-14M68 88l24 14"
          stroke-width="1.2" stroke-opacity=".45" stroke-dasharray="3 6"/>
    <!-- قلب مرکزی -->
    <circle cx="120" cy="118" r="34" fill="url(#ar-community-f)" stroke-width="2.4"/>
    <path d="M120 132c-12-8-18-14-18-21a9 9 0 0 1 18-4 9 9 0 0 1 18 4c0 7-6 13-18 21Z" stroke-width="2"/>
    <circle cx="120" cy="118" r="98" fill="url(#ar-community-d)" stroke="none" opacity=".22"/>
  </g>`),V={shield:Xs(),refund:Ws(),support:Ks(),pay:Qs(),delivery:Js(),secure:sa(),design:aa(),overlay:ta(),community:ea()},A=(s,a,t)=>`
<article class="art-card rv">
  <div class="ac-art">${V[s]}</div>
  <h3>${a}</h3>
  <p>${t}</p>
</article>`,ia=s=>s.toLocaleString("fa-IR"),f=(s,a)=>`<span class="chap"><i>${s}</i><b>${a}</b><span class="chap-line" aria-hidden="true"></span></span>`,ts=[{eyebrow:"فروشگاه رسمی انجمن یوزورا",title:"اکانت ماینکرفت فول اکسس",em:"تحویل تا ۴۸ ساعت",text:"اکانت جاوا و بدراک، با اطلاعات قابل تغییر و ضمانت بازگشت وجه.",primary:"ثبت سفارش در دیسکورد",primaryHref:y,ghost:"جزئیات محصول",ghostHref:"cat-minecraft/",image:"assets/img/products/p-minecraft-account.jpg",tags:["فول اکسس","جاوا + بدراک","تغییر اطلاعات"],chipTop:"۷۶۳ عضو انجمن",chipBottom:"ضمانت بازگشت وجه"},{eyebrow:"دونات اس ام پی",title:"پول دونات از ۴٬۷۰۰ تومان",em:"به ازای هر میلیون",text:"موجودی ۳۰۰ میلیون؛ حداقل خرید ۵۰ میلیون و تحویل مستقیم روی اکانت خودت.",primary:"ثبت سفارش در دیسکورد",primaryHref:y,ghost:"محاسبهٔ قیمت",ghostHref:"cat-donut/",image:"assets/img/products/p-donut-million.jpg",tags:["موجودی ۳۰۰M","حداقل ۵۰M","تحویل ۴۸h"],chipTop:"تحویل زیر ۲۴ ساعت",chipBottom:"۳۰ نفر آنلاین"},{eyebrow:"خدمات گرافیک یوزورا",title:"لوگو، بنر، تامنیل و اورلی",em:"برای استریم و کامیونیتی",text:"لوگو، بنر، تامنیل، اسکین و اورلی استریم؛ تحویل ۱ تا ۳ روز کاری.",primary:"ثبت سفارش در دیسکورد",primaryHref:y,ghost:"دیدن خدمات",ghostHref:"cat-design/",image:"assets/img/products/p-logo.jpg",tags:["لوگو","اورلی","تامنیل"],chipTop:"۲ بازنگری رایگان",chipBottom:"فایل لایه‌باز"}],ra=()=>`
<section class="hero2">
  <div class="hero-glow" aria-hidden="true"><i></i><i></i><i></i></div>
  <div class="wrap">
    <div class="slider" id="heroSlider">
      ${ts.map((s,a)=>`<article class="slide${a===0?" on":""}" data-i="${a}">
        <div class="slide-body">
          <span class="eyebrow">${s.eyebrow}</span>
          <h1>${s.title}<br><em class="grad">${s.em}</em></h1>
          <p>${s.text}</p>
          <div class="slide-tags">${s.tags.map(t=>`<span class="pill">${t}</span>`).join("")}</div>
          <div class="hero-btns">
            <a class="btn btn-gold btn-lg" href="${s.primaryHref}"${s.primaryHref.startsWith("http")?' target="_blank" rel="noopener"':""}>${o("discord")} ${s.primary}</a>
            <a class="btn btn-ghost btn-lg" href="${s.ghostHref}">${s.ghost}</a>
          </div>
          <div class="hero-meta">
            <span><b>۱۷</b><i>محصول فعال</i></span>
            <span><b>۱–۴۸h</b><i>بازهٔ تحویل</i></span>
            <span><b>۷۶۳</b><i>عضو انجمن</i></span>
          </div>
        </div>
        <div class="slide-art" data-par="0.05">
          <span class="art-orbit" aria-hidden="true"></span>
          <div class="slide-frame">
            ${z(s.image,{alt:s.title,sizes:"(max-width:980px) 80vw, 470px",w:900,h:900,eager:a===0})}
          </div>
          <span class="float-chip chip-a">${o("bolt")} ${s.chipTop}</span>
          <span class="float-chip chip-b">${o("shield")} ${s.chipBottom}</span>
        </div>
      </article>`).join("")}
      <button class="slide-nav prev" data-slide="prev" aria-label="قبلی">${o("chevron")}</button>
      <button class="slide-nav next" data-slide="next" aria-label="بعدی">${o("chevron")}</button>
      <div class="slider-dots" id="heroDots">${ts.map((s,a)=>`<i class="${a===0?"on":""}"></i>`).join("")}</div>
    </div>
  </div>
</section>`,la=()=>`
<div class="marq-band" data-marquee aria-label="محصولات یوزورا">
  <div class="marq-in">${$.slice(0,10).map(a=>`<a class="marq-item" href="${a.href}">
      ${z(a.image,{alt:a.title,sizes:"44px",w:76,h:76})}
      <span><b>${a.title}</b><i>${a.price}</i></span>
    </a>`).join("")}</div>
</div>`,ca=()=>`
<section class="quick-cats"><div class="wrap">
  ${f("۰۱","دسته‌بندی")}
  ${L("","از کجا شروع کنیم؟","قیمت و جزئیات هر دسته، همان‌جا.",!1,{href:"products/",label:"همهٔ محصولات"})}
  <div class="cat-rail">
    ${E.map(s=>`<a class="cat-tile rv" href="${s.slug}" data-tilt>
        ${z(s.image,{alt:s.title,sizes:"(max-width:700px) 45vw, 300px",w:300,h:300})}
        <span class="ct-body"><b>${s.title}</b><i>${s.en}</i></span>
        <span class="ct-note">${s.note}</span>
      </a>`).join("")}
  </div>
</div></section>`,es=[{art:"design",k:"۰۱",title:"انتخاب می‌کنی",text:"محصول را از کاتالوگ انتخاب می‌کنی؛ قیمت روی همین سایت است."},{art:"support",k:"۰۲",title:"تیکت می‌زنی",text:"در دیسکورد تیکت می‌زنی؛ موجودی و زمان تحویل همان‌جا مشخص می‌شود."},{art:"pay",k:"۰۳",title:"ریالی پرداخت می‌کنی",text:"فاکتور می‌گیری و ریالی پرداخت می‌کنی؛ کارت خارجی لازم نیست."},{art:"delivery",k:"۰۴",title:"تحویل می‌گیری",text:"تحویل بین ۱ تا ۴۸ ساعت است و تیکت تا تحویل باز می‌ماند."}],da=()=>`
<section class="story pin-sec" id="story" data-pin>
  <div class="story-pin pin-pin">
    <div class="wrap story-head">
      ${f("۰۲","مراحل سفارش")}
      <h2 class="sec split">چهار قدم تا تحویل</h2>
    </div>
    <div class="story-track" data-pin-track>
      ${es.map((s,a)=>`<article class="story-card${a===0?" is-on":""}" data-i="${a}">
        <span class="sc-k">${s.k}</span>
        <div class="sc-art">${V[s.art]}</div>
        <h3>${s.title}</h3>
        <p>${s.text}</p>
      </article>`).join("")}
      <div class="story-end">
        <span class="se-t">شروع کن</span>
        <p>سفارش را در دیسکورد ثبت کن.</p>
        <a class="btn btn-gold" href="${y}" target="_blank" rel="noopener">${o("discord")} ورود به دیسکورد</a>
      </div>
    </div>
    <div class="wrap story-foot">
      <div class="story-dots">${es.map((s,a)=>`<i class="${a===0?"on":""}"></i>`).join("")}</div>
    </div>
  </div>
</section>`,na=()=>`
<section class="theater pin-sec" id="theater" data-pin>
  <div class="theater-pin pin-pin">
    <div class="wrap theater-head">
      ${f("۰۳","کاتالوگ")}
      <h2 class="sec split">همهٔ محصولات، با قیمت مشخص</h2>
      <a class="btn btn-ghost btn-sm theater-all" href="products/">کاتالوگ کامل ${o("arrow")}</a>
    </div>
    <div class="theater-track" data-pin-track>
      ${$.map((s,a)=>`<a class="theater-card${a===0?" is-on":""}" href="${s.href}">
        <div class="tc-img">${z(s.image,{alt:s.title,sizes:"(max-width:780px) 86vw, 430px",w:900,h:900})}</div>
        <div class="tc-body">
          <span class="tc-i">${ia(a+1).padStart(2,"۰")}</span>
          <h3>${s.title}</h3>
          <p>${s.desc}</p>
          <span class="tc-price">${s.price}</span>
        </div>
      </a>`).join("")}
    </div>
    <div class="wrap theater-foot"><div class="pin-bar"><i></i></div></div>
  </div>
</section>`,oa=()=>{const s=$.filter(t=>["mc-account","donut-million","hypixel","skyblock","logo","overlay-best"].includes(t.id)),a=[["all","همه"],["minecraft","ماینکرفت"],["donut","دونات"],["hypixel","هایپیکسل"],["design","فتوشاپ"],["overlay","اورلی"],["cosmetics","کازمتیک"],["cape","کیپ"]];return`
<section class="best"><div class="wrap">
  ${f("۰۴","پرفروش‌ها")}
  ${L("","محصولات پرطرفدار یوزورا","قیمت‌ها به‌روزند؛ سفارش از تیکت دیسکورد.",!1,{href:"products/",label:"کاتالوگ کامل"})}
  <div class="filters" id="filters">
    ${a.map(([t,e],r)=>`<button${r===0?' class="act"':""} data-f="${t}">${e}</button>`).join("")}
  </div>
  <div class="grid g3" id="grid">${s.map(t=>R(t,{})).join("")}</div>
  <div class="center-cta"><a class="btn btn-ghost" href="products/">مشاهدهٔ همهٔ ۱۷ محصول ${o("arrow")}</a></div>
</div></section>`},pa=()=>`
<section class="numbers">
  <div class="num-art" data-par="-0.07" aria-hidden="true">${V.community}</div>
  <div class="wrap">
    ${f("۰۵","عددها")}
    <h2 class="num-h split">یوزورا در یک نگاه</h2>
    <div class="num-grid">
      <div class="num rv"><b data-count="763">۰</b><span>عضو انجمن یوزورا</span></div>
      <div class="num rv"><b data-count="17">۰</b><span>محصول فعال</span></div>
      <div class="num rv"><b data-count="48">۰</b><span>حداکثر ساعت تحویل</span></div>
      <div class="num rv"><b data-count="7">۰</b><span>دستهٔ خدمت</span></div>
    </div>
  </div>
</section>`,va=()=>`
<section class="statement">
  <div class="st-orb" data-par="-0.08" aria-hidden="true">${V.secure}</div>
  <div class="wrap st-in">
    ${f("۰۶","تعهد یوزورا")}
    <h2 class="st-h split">قیمت و زمان تحویل، شفاف.</h2>
    <div class="spec-list">
      <div class="spec-row rv"><span>بازهٔ تحویل</span><b>۱ تا ۴۸ ساعت</b><i>${o("bolt")}</i></div>
      <div class="spec-row rv"><span>روش پرداخت</span><b>ریالی، با فاکتور</b><i>${o("card")}</i></div>
      <div class="spec-row rv"><span>ضمانت</span><b>بازگشت کامل وجه</b><i>${o("shield")}</i></div>
      <div class="spec-row rv"><span>پشتیبانی</span><b>۲۴/۷ در دیسکورد</b><i>${o("clock")}</i></div>
    </div>
  </div>
</section>`,ha=()=>`
<section class="tight art-row-sec"><div class="wrap">
  ${f("۰۷","چرا یوزورا")}
  <div class="grid g3">
    ${A("delivery","تحویل سریع","بیشتر سفارش‌ها ۱ تا ۲۴ ساعت، حداکثر ۴۸ ساعت.")}
    ${A("pay","پرداخت ریالی","بدون کارت خارجی؛ فاکتور و پرداخت ریالی.")}
    ${A("shield","ضمانت بازگشت وجه","اگر تحویل انجام نشود، مبلغ کامل برمی‌گردد.")}
  </div>
</div></section>`,ga=()=>`
<section class="steps-sec"><div class="wrap">
  ${f("۰۸","مراحل")}
  ${L("","چطور سفارش بدهیم؟")}
  <div class="steps">
    ${[["ورود به دیسکورد","وارد سرور دیسکورد یوزورا شوید."],["ثبت تیکت","محصول و مقدار را در تیکت بنویسید."],["پرداخت ریالی","فاکتور صادر می‌شود و ریالی پرداخت می‌کنید."],["تحویل و پشتیبانی","در بازهٔ اعلام‌شده تحویل می‌گیرید."]].map(([s,a],t)=>`<div class="step rv"><span class="num">${t+1}</span><h3>${s}</h3><p>${a}</p></div>`).join("")}
  </div>
  <div class="center-cta"><a class="btn btn-ghost" href="process/">راهنمای کامل سفارش ${o("arrow")}</a></div>
</div></section>`,ma=[{name:"آرمان",role:"بازیکن دونات اس ام پی",text:"دو بار پول دونات گرفتم، هر دو زیر ۲۴ ساعت تحویل شد.",initials:"آ"},{name:"سارا",role:"استریمر تویچ",text:"پک اورلی رو با هماهنگی برند خودم گرفتم؛ نتیجه دقیقاً همونی بود که می‌خواستم.",initials:"س"},{name:"مهدی",role:"ادمین سرور",text:"برای سرور لوگو و بنر گرفتم؛ تا نتیجهٔ نهایی اصلاح کردند.",initials:"م"},{name:"نیلوفر",role:"طراح گرافیک",text:"تامنیل حرفه‌ای گرفتم؛ فایل لایه‌باز هم تحویل دادند.",initials:"ن"},{name:"کیان",role:"بازیکن هایپیکسل",text:"کوین هایپیکسل گرفتم؛ فاکتور صادر شد و همه‌چیز مرتب بود.",initials:"ک"}],wa=()=>`
<section class="reviews"><div class="wrap">
  ${f("۰۹","نظر مشتری‌ها")}
  ${L("","تجربهٔ خرید")}
</div>
<div class="marq-band q-band" data-marquee aria-label="نظر مشتری‌ها">
  <div class="marq-in q-in">
    ${ma.map(s=>`<figure class="q-card">
        <div class="stars">${Array.from({length:5},()=>o("star")).join("")}</div>
        <blockquote>${s.text}</blockquote>
        <figcaption><span class="ava">${s.initials}</span><span><b>${s.name}</b><i>${s.role}</i></span></figcaption>
      </figure>`).join("")}
  </div>
</div>
</section>`,ba=()=>`
<section class="blog-teaser"><div class="wrap">
  ${f("۱۰","وبلاگ")}
  ${L("","راهنما و مقالات","چیزهایی که قبل از خرید باید بدانی.")}
  <div class="grid g3">
    ${hs.map(s=>`<a class="bcard rv" href="${s.slug}">
        ${z(s.image,{alt:s.title,sizes:"(max-width:700px) 90vw, 420px",w:1280,h:720})}
        <div class="body"><span class="bmeta"><b>${s.tag}</b> · ${s.time}</span>
          <h3>${s.title}</h3><p>${s.desc}</p><span class="more">ادامهٔ مطلب ${o("arrow")}</span></div>
      </a>`).join("")}
  </div>
</div></section>`,ua=()=>`
${ra()}
${la()}
${ca()}
${da()}
${na()}
${oa()}
${pa()}
${va()}
${ha()}
<div class="wrap">${bs()}</div>
${ga()}
${wa()}
${ba()}
<section class="home-faq"><div class="wrap">
  ${f("۱۱","سؤال‌ها")}
  ${L("","سؤال‌های پرتکرار")}
  ${ds(ls)}
  <div class="center-cta"><a class="btn btn-ghost" href="faq/">همهٔ سوالات ${o("arrow")}</a></div>
</div></section>
${ws("سفارش را در دیسکورد ثبت کن","در سرور دیسکورد تیکت بزن؛ بقیهٔ کارها با ما.")}`,O=s=>s.toLocaleString("fa-IR"),ya=s=>$.filter(a=>a.category===s.category&&a.id!==s.id).slice(0,3),fa=s=>{const a=G[s.id],t=a==null?void 0:a.unit,e=t?t.price*(t.min+0):0;return`
<aside class="buy-box rv">
  <div class="bb-head">
    <span class="bb-pill">${o("shield")} ضمانت بازگشت وجه</span>
    <div class="bb-price"><span>${s.priceLabel}</span><b>${s.price}</b></div>
    <span class="bb-updated">${o("clock")} آخرین بازبینی قیمت: آبان ۱۴۰۵</span>
  </div>

  ${t?`<div class="calc">
    <label class="calc-lbl" for="qty">مقدار مورد نظر</label>
    <div class="calc-val"><b id="qtyOut">${O(t.min)}</b> <span>${t.label}</span></div>
    <input id="qty" type="range" min="${t.min}" max="${t.max}" step="${t.step}" value="${t.min}"
           data-price="${t.price}" data-lbl="${t.label}">
    <div class="calc-range"><span>${O(t.min)} ${t.label}</span><span>${t.maxLabel}</span></div>
    <div class="calc-total">مبلغ کل: <b id="totalOut">${O(e)} تومان</b></div>
  </div>`:`<div class="bb-note">${o("info")} قیمت نهایی و زمان دقیق تحویل در تیکت دیسکورد اعلام می‌شود.</div>`}

  <ul class="bb-list">
    <li>${o("bolt")} زمان تحویل: <b>${(a==null?void 0:a.delivery)??"۱ تا ۴۸ ساعت"}</b></li>
    <li>${o("card")} پرداخت ریالی، بدون کارت خارجی</li>
    <li>${o("clock")} پشتیبانی ۲۴/۷ در دیسکورد</li>
  </ul>

  <a class="btn btn-gold btn-lg bb-cta" href="${y}" target="_blank" rel="noopener">${o("discord")} ثبت سفارش در دیسکورد</a>
  <button class="btn btn-ghost btn-copy" id="copyOrder" data-title="${s.title}" data-unit="${t?t.label:""}">
    ${o("cart")} کپی متن سفارش
  </button>
  <p class="bb-fine">قیمت‌ها به تومان است؛ عدد نهایی همان روز سفارش در تیکت تثبیت می‌شود.</p>
</aside>`},xa=s=>{const a=$.find(i=>i.id===s);if(!a)return'<section class="tight"><div class="wrap"><h1>محصول پیدا نشد</h1></div></section>';const t=G[a.id],e=E.find(i=>i.key===a.category),r=ya(a);return`
${ns([{label:"محصولات",href:"products/"},...e?[{label:e.title,href:e.slug}]:[],{label:a.title}])}

<section class="prod"><div class="wrap prod-grid">
  <div class="prod-media rv">
    ${z(a.image,{alt:a.title,sizes:"(max-width:900px) 90vw, 500px",w:900,h:900,eager:!0})}
    <div class="pm-badges">
      ${a.pills.map(cs).join("")}
    </div>
  </div>
  <div class="prod-info">
    ${e?`<a class="eyebrow" href="${e.slug}">${e.title}</a>`:""}
    <h1>${a.title}</h1>
    <p class="lead">${a.desc}</p>
    <p class="prod-long">${(t==null?void 0:t.long)??""}</p>
    <ul class="feat">
      ${((t==null?void 0:t.features)??[]).map(i=>`<li>${o("spark")} ${i}</li>`).join("")}
    </ul>
    ${fa(a)}
  </div>
</div></section>

${t!=null&&t.steps?`<section class="tight"><div class="wrap">${L("مراحل","این محصول چطور تحویل داده می‌شود؟")}
  <ol class="mini-steps">${t.steps.map((i,c)=>`<li><span>${O(c+1)}</span>${i}</li>`).join("")}</ol>
</div></section>`:""}

${t!=null&&t.faq?`<section class="tight"><div class="wrap">${L("سوالات","سؤال‌های این محصول")}${ds(t.faq)}</div></section>`:""}

${r.length?`<section class="tight"><div class="wrap">${L("محصولات مرتبط","این‌ها را هم ببین")}
  <div class="grid g3">${r.map(i=>R(i,{compact:!0})).join("")}</div></div></section>`:""}

<div id="toast" class="toast" role="status" aria-live="polite"></div>`},ka=()=>{const s=[["all","همه"],...E.map(a=>[a.key,a.title.split(" ")[0]])];return`
${ns([{label:"محصولات"}])}
<section class="phero"><div class="wrap">
  <span class="eyebrow">کاتالوگ کامل</span>
  <h1>همهٔ محصولات یوزورا شاپ</h1>
  <p class="lead" style="max-width:70ch">۱۷ محصول و سرویس فعال در ۷ دسته. با فیلترها دستهٔ مورد نظرت را انتخاب کن،
  یا روی هر محصول بزن تا صفحهٔ اختصاصی‌اش با قیمت و جزئیات کامل باز شود.</p>
  <div class="badges">
    <span class="pill g">پرداخت ریالی</span>
    <span class="pill y">ضمانت بازگشت وجه</span>
    <span class="pill b">سفارش با تیکت</span>
  </div>
</div></section>
<section class="tight"><div class="wrap">
  <div class="filters" id="filters">
    ${s.map(([a,t],e)=>`<button${e===0?' class="act"':""} data-f="${a}">${t}</button>`).join("")}
  </div>
  <div class="grid g4" id="grid">${$.map(a=>R(a,{compact:!0})).join("")}</div>
</div></section>`},I={index:ua,products:ka},$a=s=>s.replace(/href="index\.html"/g,'href="./"').replace(/href="((?:cat|blog|p)-[a-z0-9-]+|products|prices|process|guarantee|faq|about|contact|terms)\.html"/g,'href="$1/"'),Ma=s=>s.replace(/<img class="bg" src="assets\/img\/[a-z0-9./-]+"[^>]*>/g,"").replace(/(<div class="wrap"><div class="crumbs">[\s\S]*?<\/div><\/div>)\s*(?=<div class="wrap"><div class="crumbs">)/g,""),Aa=(s,a)=>{let t=a;s==="guarantee"&&(t=t.replace(/<img src="assets\/img\/07-cape-optifine\.jpg" alt="ضمانت یوزورا"[^>]*>/,`<div class="guar-art">${V.shield}</div>`));const r={guarantee:[["secure","امنیت حساب","اطلاعات اکانت بعد از تحویل کامل به شما منتقل می‌شود و در اختیار ما نمی‌ماند."],["refund","بازگشت وجه واقعی","اگر سفارش انجام نشود، مبلغ بدون بحث و شرط اضافه برمی‌گردد."],["support","پیگیری تا نتیجه","تیکت باز می‌ماند تا مطمئن شویم سفارش درست به دستتان رسیده است."]].map(([i,c,l])=>A(i,c,l)).join(""),about:[["community","از یک انجمن ۷۶۳ نفری","یوزورا از دل انجمن دیسکورد خودش بیرون آمده؛ بیشتر مشتری‌ها همان اعضا هستند."],["delivery","تحویل ۱ تا ۴۸ ساعت","بازهٔ تحویل هر محصول روی همان صفحه نوشته شده، نه در تبلیغ."],["pay","پرداخت ریالی و فاکتور","بدون کارت خارجی؛ فاکتور رسمی برای هر سفارش صادر می‌شود."]].map(([i,c,l])=>A(i,c,l)).join(""),process:[["support","قدم ۱ — تیکت","در دیسکورد تیکت می‌زنید و محصول را انتخاب می‌کنید."],["pay","قدم ۲ — پرداخت","فاکتور ریالی صادر و پرداخت انجام می‌شود."],["delivery","قدم ۳ — تحویل","تحویل در بازهٔ اعلام‌شده و پیگیری تا رضایت شما."]].map(([i,c,l])=>A(i,c,l)).join(""),prices:[["pay","قیمت شفاف","قیمت هر محصول روی سایت است؛ عدد نهایی در تیکت تثبیت می‌شود."],["secure","ضمانت معامله","پرداخت و تحویل در یک مسیر مشخص و قابل پیگیری انجام می‌شود."],["refund","بدون ریسک","اگر تحویل نشود، مبلغ برمی‌گردد."]].map(([i,c,l])=>A(i,c,l)).join(""),faq:[["support","سؤالی داری؟","اگر جوابت اینجا نبود، در دیسکورد تیکت بزن؛ زیر چند دقیقه جواب می‌گیری."],["secure","قبل از خرید","شرایط ضمانت و بازگشت وجه را قبل از پرداخت بخوان."],["delivery","بعد از خرید","زمان تحویل هر محصول در صفحهٔ خودش نوشته شده است."]].map(([i,c,l])=>A(i,c,l)).join(""),contact:[["community","دیسکورد","سریع‌ترین راه ارتباط، تیکت در سرور یوزورا شاپ است."],["support","پشتیبانی ۲۴/۷","تیم پشتیبانی همیشه آنلاین است؛ حتی نصفه‌شب."],["pay","هماهنگی پرداخت","برای فاکتور و تسویه، در همان تیکت هماهنگ می‌کنیم."]].map(([i,c,l])=>A(i,c,l)).join("")}[s];if(r){const i=t.indexOf("</section>");i>-1&&(t=`${t.slice(0,i+10)}
<section class="art-row"><div class="wrap"><div class="grid g3">${r}</div></div></section>${t.slice(i+10)}`)}return s==="blog"&&(t=t.replace(/assets\/img\/01-minecraft\.jpg/g,"assets/img/blog-account.jpg"),t=t.replace(/assets\/img\/02-donutsmp\.jpg/g,"assets/img/blog-donut.jpg")),t};for(const[s,a]of Object.entries(Ds))s in I||(I[s]=()=>Aa(s,Ma($a(a))));const D=document.body,N=D.dataset.page??"index",La=D.dataset.active??N,is=document.getElementById("app");var rs;if(is){const s=D.dataset.product,a=s?()=>xa(s):I[N]??I.index;is.innerHTML=`${ks(La)}${a()}</main>${xs()}`,document.querySelectorAll(".sec-hd, .center-cta, .filters, .phero .lead, .phero .badges, .guar > div, .kv, .note, .mini-steps li, .story-head, .st-in > *, .bcard, .spec-row, .art-panel").forEach(t=>t.classList.add("rv")),document.body.classList.add("ready"),Ns(),Gs(N,s),_(),addEventListener("resize",_,{passive:!0}),(rs=document.fonts)!=null&&rs.ready&&document.fonts.ready.then(_),addEventListener("load",_)}else console.error("[kiniwa] #app not found");
