import{D as p}from"./details-CplyxElW.js";import{D as b,b as o,i as t,C as $,P as r,a as g,p as u,c as m,s as n,f as h,d as f}from"./entry-b7Xcaj06.js";const y=(i="این بخش")=>`
${o([{label:"فروشگاه‌ها",href:"./"},{label:i}])}
<section class="maint"><div class="wrap-narrow">
  <div class="maint-card">
    <div class="maint-ico">${t("clock")}</div>
    <span class="eyebrow">در حال به‌روزرسانی</span>
    <h1>${i} موقتاً بسته است</h1>
    <p class="lead">این بخش را برای به‌روزرسانی قیمت‌ها و اضافه‌کردن محصولات تازه موقتاً بسته‌ایم.
    به‌زودی با قیمت‌های بهتر برمی‌گردد.</p>
    <div class="maint-links">
      <a class="btn btn-gold btn-lg" href="minecraft/">فروشگاه ماینکرفت</a>
      <a class="btn btn-ghost" href="products/">همهٔ محصولات فعال</a>
    </div>
    <p class="maint-note">سفارش‌های ثبت‌شده و تیکت‌های باز در دیسکورد مثل قبل پیگیری می‌شوند.</p>
    <a class="maint-dc" href="${b}" target="_blank" rel="noopener">${t("discord")} پشتیبانی در دیسکورد</a>
  </div>
</div></section>`,e=i=>i.toLocaleString("fa-IR"),w=i=>`product/${i}/`,k=i=>r.filter(a=>a.category===i.category&&a.id!==i.id).slice(0,3),x=i=>{const a=p[i.id],s=a==null?void 0:a.unit,l=s?s.price*(s.min+0):0;return`
<aside class="buy-box rv">
  <div class="bb-head">
    <span class="bb-pill">${t("shield")} ضمانت بازگشت وجه</span>
    <div class="bb-price"><span>${i.priceLabel}</span><b>${i.price}</b></div>
    <span class="bb-updated">${t("clock")} آخرین بازبینی قیمت: آبان ۱۴۰۵</span>
  </div>

  ${s?`<div class="calc">
    <label class="calc-lbl" for="qty">مقدار مورد نظر</label>
    <div class="calc-val"><b id="qtyOut">${e(s.min)}</b> <span>${s.label}</span></div>
    <input id="qty" type="range" min="${s.min}" max="${s.max}" step="${s.step}" value="${s.min}"
           data-price="${s.price}" data-lbl="${s.label}">
    <div class="calc-range"><span>${e(s.min)} ${s.label}</span><span>${s.maxLabel}</span></div>
    <div class="calc-total">مبلغ کل: <b id="totalOut">${e(l)} تومان</b></div>
  </div>`:`<div class="bb-note">${t("info")} قیمت نهایی و زمان دقیق تحویل در تیکت دیسکورد اعلام می‌شود.</div>`}

  <ul class="bb-list">
    <li>${t("bolt")} زمان تحویل: <b>${(a==null?void 0:a.delivery)??"۱ تا ۴۸ ساعت"}</b></li>
    <li>${t("card")} پرداخت ریالی، بدون کارت خارجی</li>
    <li>${t("clock")} پشتیبانی ۲۴/۷ در دیسکورد</li>
  </ul>

  <a class="btn btn-gold btn-lg bb-cta" href="${b}" target="_blank" rel="noopener">${t("discord")} ثبت سفارش در دیسکورد</a>
  <button class="btn btn-ghost btn-copy" id="copyOrder" data-title="${i.title}" data-unit="${s?s.label:""}">
    ${t("cart")} کپی متن سفارش
  </button>
  <p class="bb-fine">قیمت‌ها به تومان است؛ عدد نهایی همان روز سفارش در تیکت تثبیت می‌شود.</p>
</aside>`},j=i=>{const a=r.find(c=>c.id===i);if(!a)return y("این محصول");const s=p[a.id],l=$.find(c=>c.key===a.category),d=k(a);return`
${o([{label:"محصولات",href:"products/"},...l?[{label:l.title,href:l.slug}]:[],{label:a.title}])}

<section class="prod"><div class="wrap prod-grid">
  <div class="prod-media rv">
    ${u(a.image,{alt:a.title,sizes:"(max-width:900px) 90vw, 500px",w:900,h:900,eager:!0})}
    <div class="pm-badges">
      ${a.pills.map(m).join("")}
    </div>
  </div>
  <div class="prod-info">
    ${l?`<a class="eyebrow" href="${l.slug}">${l.title}</a>`:""}
    <h1>${a.title}</h1>
    <p class="lead">${a.desc}</p>
    <p class="prod-long">${(s==null?void 0:s.long)??""}</p>
    <ul class="feat">
      ${((s==null?void 0:s.features)??[]).map(c=>`<li>${t("spark")} ${c}</li>`).join("")}
    </ul>
    ${x(a)}
  </div>
</div></section>

${s!=null&&s.steps?`<section class="tight"><div class="wrap">${n("مراحل","این محصول چطور تحویل داده می‌شود؟")}
  <ol class="mini-steps">${s.steps.map((c,v)=>`<li><span>${e(v+1)}</span>${c}</li>`).join("")}</ol>
</div></section>`:""}

${s!=null&&s.faq?`<section class="tight"><div class="wrap">${n("سوالات","سؤال‌های این محصول")}${h(s.faq)}</div></section>`:""}

${d.length?`<section class="tight"><div class="wrap">${n("محصولات مرتبط","این‌ها را هم ببین")}
  <div class="grid g3">${d.map(c=>f(c,{compact:!0})).join("")}</div></div></section>`:""}

<div id="toast" class="toast" role="status" aria-live="polite"></div>`},O=()=>{const i=[["all","همه"],...$.map(a=>[a.key,a.title.split(" ")[0]])];return`
${o([{label:"محصولات"}])}
<section class="phero"><div class="wrap">
  <div class="phero-top">
    <div class="phero-txt">
      <span class="phero-k">کاتالوگ کامل · ۶ محصول</span>
      <h1>همهٔ محصولات یوزورا شاپ</h1>
      <p class="lead" style="max-width:70ch">۶ محصول فعال در دستهٔ ماینکرفت و سرورها. با فیلترها دستهٔ مورد نظرت را انتخاب کن،
  یا روی هر محصول بزن تا صفحهٔ اختصاصی‌اش با قیمت و جزئیات کامل باز شود.</p>
    </div>
    <div class="phero-act">
      <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener">ثبت سفارش</a>
      <a class="btn btn-ghost" href="prices/">لیست قیمت</a>
    </div>
  </div>
  <ul class="phero-tags">
    <li>پرداخت ریالی با فاکتور</li>
    <li>ضمانت بازگشت وجه</li>
    <li>سفارش با تیکت دیسکورد</li>
  </ul>
</div></section>
<section class="tight"><div class="wrap">
  <div class="filters" id="filters">
    ${i.map(([a,s],l)=>`<button${l===0?' class="act"':""} data-f="${a}">${s}</button>`).join("")}
  </div>
  <div class="poster-grid" id="grid">${r.map(a=>g(a)).join("")}</div>
</div></section>`},q=Object.freeze(Object.defineProperty({__proto__:null,productPage:j,productUrl:w,productsPage:O},Symbol.toStringTag,{value:"Module"}));export{q as a,y as m,O as p};
