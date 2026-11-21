import{D as r}from"./details-CQ70rdPg.js";import{C as p,b,P as d,a as $,p as g,c as u,i as c,s as o,f as h,D as m}from"./entry-DmQP_zQH.js";const e=i=>i.toLocaleString("fa-IR"),k=i=>`product/${i}/`,f=i=>d.filter(a=>a.category===i.category&&a.id!==i.id).slice(0,3),y=i=>{const a=r[i.id],s=a==null?void 0:a.unit,t=s?s.price*(s.min+0):0;return`
<aside class="buy-box rv">
  <div class="bb-head">
    <span class="bb-pill">${c("shield")} ضمانت بازگشت وجه</span>
    <div class="bb-price"><span>${i.priceLabel}</span><b>${i.price}</b></div>
    <span class="bb-updated">${c("clock")} آخرین بازبینی قیمت: آبان ۱۴۰۵</span>
  </div>

  ${s?`<div class="calc">
    <label class="calc-lbl" for="qty">مقدار مورد نظر</label>
    <div class="calc-val"><b id="qtyOut">${e(s.min)}</b> <span>${s.label}</span></div>
    <input id="qty" type="range" min="${s.min}" max="${s.max}" step="${s.step}" value="${s.min}"
           data-price="${s.price}" data-lbl="${s.label}">
    <div class="calc-range"><span>${e(s.min)} ${s.label}</span><span>${s.maxLabel}</span></div>
    <div class="calc-total">مبلغ کل: <b id="totalOut">${e(t)} تومان</b></div>
  </div>`:`<div class="bb-note">${c("info")} قیمت نهایی و زمان دقیق تحویل در تیکت دیسکورد اعلام می‌شود.</div>`}

  <ul class="bb-list">
    <li>${c("bolt")} زمان تحویل: <b>${(a==null?void 0:a.delivery)??"۱ تا ۴۸ ساعت"}</b></li>
    <li>${c("card")} پرداخت ریالی، بدون کارت خارجی</li>
    <li>${c("clock")} پشتیبانی ۲۴/۷ در دیسکورد</li>
  </ul>

  <a class="btn btn-gold btn-lg bb-cta" href="${m}" target="_blank" rel="noopener">${c("discord")} ثبت سفارش در دیسکورد</a>
  <button class="btn btn-ghost btn-copy" id="copyOrder" data-title="${i.title}" data-unit="${s?s.label:""}">
    ${c("cart")} کپی متن سفارش
  </button>
  <p class="bb-fine">قیمت‌ها به تومان است؛ عدد نهایی همان روز سفارش در تیکت تثبیت می‌شود.</p>
</aside>`},j=i=>{const a=d.find(l=>l.id===i);if(!a)return'<section class="tight"><div class="wrap"><h1>محصول پیدا نشد</h1></div></section>';const s=r[a.id],t=p.find(l=>l.key===a.category),n=f(a);return`
${b([{label:"محصولات",href:"products/"},...t?[{label:t.title,href:t.slug}]:[],{label:a.title}])}

<section class="prod"><div class="wrap prod-grid">
  <div class="prod-media rv">
    ${g(a.image,{alt:a.title,sizes:"(max-width:900px) 90vw, 500px",w:900,h:900,eager:!0})}
    <div class="pm-badges">
      ${a.pills.map(u).join("")}
    </div>
  </div>
  <div class="prod-info">
    ${t?`<a class="eyebrow" href="${t.slug}">${t.title}</a>`:""}
    <h1>${a.title}</h1>
    <p class="lead">${a.desc}</p>
    <p class="prod-long">${(s==null?void 0:s.long)??""}</p>
    <ul class="feat">
      ${((s==null?void 0:s.features)??[]).map(l=>`<li>${c("spark")} ${l}</li>`).join("")}
    </ul>
    ${y(a)}
  </div>
</div></section>

${s!=null&&s.steps?`<section class="tight"><div class="wrap">${o("مراحل","این محصول چطور تحویل داده می‌شود؟")}
  <ol class="mini-steps">${s.steps.map((l,v)=>`<li><span>${e(v+1)}</span>${l}</li>`).join("")}</ol>
</div></section>`:""}

${s!=null&&s.faq?`<section class="tight"><div class="wrap">${o("سوالات","سؤال‌های این محصول")}${h(s.faq)}</div></section>`:""}

${n.length?`<section class="tight"><div class="wrap">${o("محصولات مرتبط","این‌ها را هم ببین")}
  <div class="grid g3">${n.map(l=>$(l,{compact:!0})).join("")}</div></div></section>`:""}

<div id="toast" class="toast" role="status" aria-live="polite"></div>`},q=()=>{const i=[["all","همه"],...p.map(a=>[a.key,a.title.split(" ")[0]])];return`
${b([{label:"محصولات"}])}
<section class="phero"><div class="wrap">
  <div class="phero-top">
    <div class="phero-txt">
      <span class="phero-k">کاتالوگ کامل · ۲۷ محصول</span>
      <h1>همهٔ محصولات یوزورا شاپ</h1>
      <p class="lead" style="max-width:70ch">۲۷ محصول و سرویس فعال در ۸ دسته. با فیلترها دستهٔ مورد نظرت را انتخاب کن،
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
    ${i.map(([a,s],t)=>`<button${t===0?' class="act"':""} data-f="${a}">${s}</button>`).join("")}
  </div>
  <div class="grid g4" id="grid">${d.map(a=>$(a,{compact:!0})).join("")}</div>
</div></section>`};export{j as productPage,k as productUrl,q as productsPage};
