import{b as p,s as c,f as o,c as r,i as t}from"./entry-CZMWsw9g.js";const n=s=>s.toLocaleString("fa-IR"),e={name:"GTA VI",basePrice:1694e4,discount:88,artWebp:"assets/img/gta-vi.webp",artPng:"assets/img/gta-vi.png"},v=e.basePrice*(100-e.discount)/100,a={baseFmt:n(e.basePrice),nowFmt:n(v),offFmt:`${n(e.discount)}٪`},d=[{id:"gta-vi-ps5",platform:"ps5",title:"نسخهٔ PlayStation 5",en:"PlayStation 5",status:"live",statusText:"قابل سفارش",bullets:["نسخهٔ کامل بازی روی PS5",`قیمت کمپین با ${a.offFmt} تخفیف`,"تحویل از طریق تیکت دیسکورد با فاکتور رسمی"],cta:"سفارش نسخهٔ PS5",href:"https://discord.gg/sVAa2rw4wM",note:"پرداخت ریالی با فاکتور و ضمانت بازگشت وجه"},{id:"gta-vi-pc",platform:"pc",title:"نسخهٔ PC",en:"Windows / PC",status:"presave",statusText:"منتشر نشده",bullets:["فقط پیش‌ثبت، بدون هیچ پرداختی","به‌محض عرضهٔ نسخهٔ PC خبر می‌دهیم","قیمت پیش‌ثبت فعلاً اعلام نشده"],cta:"Pre-Save",href:"#presave",note:"این دکمه فقط علاقه‌مندی را ذخیره می‌کند"}],b=s=>`
<article class="edition${s.status==="live"?" is-live":""} rv" id="${s.platform==="pc"?"pc":"ps5"}">
  <div class="edition-top">
    <span class="edition-plat">${t(s.platform==="ps5"?"cart":"clock")} ${s.title}</span>
    <span class="pill ${s.status==="live"?"gold":"plain"}">${s.statusText}</span>
  </div>

  ${s.status==="live"?`<div class="edition-price">
          <s>${a.baseFmt}</s>
          <b>${a.nowFmt}</b>
          <span class="off-chip">${a.offFmt}</span>
          <em>تومان</em>
        </div>`:'<div class="edition-price"><b class="soon">به‌زودی</b><em>بدون پرداخت</em></div>'}

  <ul class="edition-list">${s.bullets.map(i=>`<li>${t("shield")}<span>${i}</span></li>`).join("")}</ul>

  ${s.status==="live"?`<a class="btn btn-vice" href="${s.href}" target="_blank" rel="noopener">${s.cta} ${t("arrow")}</a>`:`<button class="btn btn-vice-ghost" type="button" data-presave="${s.id}">${t("spark")} <span data-presave-label>${s.cta}</span></button>`}
  <p class="presave-note">${s.note}</p>
</article>`,$=()=>`
<section class="vice-sec">
  <div class="wrap">
    <div class="vice-hero rv">
      <div class="vice-hero-in">
        <div class="vice-copy">
          <span class="vice-eyebrow">${t("spark")} کمپین ویژهٔ ${e.name} · پالت ویچ‌سیتی</span>
          <h1 class="vice-title">${e.name}</h1>
          <p class="vice-sub">نسخهٔ PS5 همین حالا قابل سفارش است؛ نسخهٔ PC فعلاً فقط پیش‌ثبت می‌شود. قیمت کمپین برای مدت محدود با ${a.offFmt} تخفیف فعال است.</p>

          <div class="vice-price">
            <span class="vice-old">${a.baseFmt}</span>
            <span class="vice-now">${a.nowFmt}<small>تومان</small></span>
            <span class="vice-off">${t("spark")} ${a.offFmt} تخفیف</span>
          </div>

          <div class="vice-meta">
            <span>${t("cart")} نسخهٔ PS5 آمادهٔ سفارش</span>
            <span>${t("clock")} نسخهٔ PC — پیش‌ثبت</span>
          </div>

          <div class="vice-actions">
            <a class="btn btn-vice" href="#ps5">خرید نسخهٔ PS5 ${t("arrow")}</a>
            <a class="btn btn-vice-ghost" href="#pc">${t("spark")} پیش‌ثبت نسخهٔ PC</a>
          </div>
        </div>

        <div class="vice-art">
          <picture>
            <source srcset="${e.artWebp}" type="image/webp">
            <img src="${e.artPng}" alt="کاور ${e.name}" width="720" height="720" fetchpriority="high" decoding="async">
          </picture>
          <span class="va-tag">Vice City Edition</span>
        </div>
      </div>
    </div>
  </div>
</section>`,P=()=>`
<div class="wrap">${p([{label:"محصولات",href:"products/"},{label:e.name}])}</div>

${$()}

<section class="wrap sec">
  ${c("نسخه‌ها","دو نسخه، دو وضعیت","نسخهٔ PS5 آمادهٔ سفارش است و نسخهٔ PC هنوز عرضه نشده؛ برای PC فقط پیش‌ثبت داریم.")}
  <div class="editions">
    ${d.map(b).join("")}
  </div>
</section>

<section class="wrap sec">
  ${c("شفافیت قیمت","این قیمت از کجا آمده؟","قیمت پایهٔ کمپین و درصد تخفیف روی همین صفحه نوشته شده است؛ هیچ هزینهٔ پنهانی اضافه نمی‌شود.")}
  <div class="vice-facts">
    <div class="fact rv"><b>${a.baseFmt}</b><span>قیمت پایه پیش از تخفیف</span></div>
    <div class="fact rv"><b>${a.offFmt}</b><span>درصد تخفیف کمپین</span></div>
    <div class="fact rv"><b>${a.nowFmt}</b><span>مبلغ نهایی برای نسخهٔ PS5</span></div>
    <div class="fact rv"><b>۰</b><span>مبلغ قابل پرداخت برای پیش‌ثبت PC</span></div>
  </div>
</section>

<section class="wrap sec">
  ${c("پیش از خرید","سؤال‌های سریع","")}
  ${o([{q:"نسخهٔ PC کی عرضه می‌شود؟",a:"تاریخ انتشار نسخهٔ PC هنوز اعلام نشده است. دکمهٔ Pre-Save فقط علاقه‌مندی شما را در همین مرورگر ذخیره می‌کند و هیچ پرداختی ندارد."},{q:"نسخهٔ PS5 چطور تحویل داده می‌شود؟",a:"سفارش از طریق تیکت دیسکورد ثبت می‌شود، فاکتور رسمی صادر می‌شود و تحویل در بازهٔ اعلام‌شده انجام می‌گیرد."},{q:"تخفیف تا چه زمانی فعال است؟",a:"قیمت کمپین تا پایان دورهٔ تخفیف روی همین صفحه نمایش داده می‌شود و بعد از آن به قیمت پایه برمی‌گردد."}])}
</section>

<section class="wrap sec">
  ${r("برای نسخهٔ PS5 آماده‌ای؟","سفارش را در دیسکورد ثبت کن؛ فاکتور رسمی و ضمانت بازگشت وجه برای همهٔ سفارش‌ها اعمال می‌شود.")}
</section>`,h=()=>`
<a class="vice-bar" href="gta-vi/" aria-label="کمپین GTA VI — ۸۸٪ تخفیف">
  <span class="vb-flag">کمپین ویژه</span>
  <span class="vb-text">تخفیف ویژه GTA VI ۸۸٪</span>
  <span class="vb-price">${a.baseFmt} → <b>${a.nowFmt}</b> تومان</span>
  <span class="vb-go">دیدن کمپین</span>
</a>`,m=(s,i,l)=>`
  <a class="splash-btn" href="${s}" aria-label="${l}">
    <picture>
      <source srcset="${i}.webp" type="image/webp">
      <img src="${i}.png" alt="${l}" width="2520" height="1080" fetchpriority="high" decoding="async">
    </picture>
  </a>`,f=`
<button class="theme-btn splash-theme" data-theme-btn type="button" aria-label="حالت روشن و تیره" aria-pressed="false" title="تغییر حالت نمایش">
  <span class="tb-ico tb-sun" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="4.6"/><path d="M11 1.6h2v3.4h-2zM11 19h2v3.4h-2zM1.6 11h3.4v2H1.6zM19 11h3.4v2H19zM4.5 3.1l2.4 2.4-1.4 1.4-2.4-2.4zM18.5 17.1l2.4 2.4-1.4 1.4-2.4-2.4zM19.5 3.1l1.4 1.4-2.4 2.4-1.4-1.4zM5.5 17.1l1.4 1.4-2.4 2.4-1.4-1.4z"/></svg></span>
  <span class="tb-ico tb-moon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.4 14.8A8.6 8.6 0 0 1 9.2 3.6a8.8 8.8 0 1 0 11.2 11.2Z"/></svg></span>
</button>`,g=()=>`${h()}${f}
<div class="splash">
  <div class="splash-intro">
    <p class="splash-kicker">یوزورا شاپ، معتبرترین فروشگاه محصولات دیجیتال</p>
    <h1 class="splash-title">فروشگاه خود را انتخاب کنید</h1>
  </div>
  <div class="splash-list">
    ${m("minecraft/","assets/img/banner-minecraft","ورود به فروشگاه محصولات ماینکرفت")}
  </div>
</div>`,w=Object.freeze(Object.defineProperty({__proto__:null,splashPage:g},Symbol.toStringTag,{value:"Module"}));export{P as g,w as h,g as s};
