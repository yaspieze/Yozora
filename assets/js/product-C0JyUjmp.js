import{D as $,e as g,f as u,E as f,M as y}from"./deep-more-B6BSKaDd.js";import{D as h,b as v,i as n,P as d,p as w,C as b,a as E,c as k,s as p,f as R,d as x,S as D,e as O,U as j,M as q}from"./entry-Ue92FAXu.js";const A=(i="این بخش")=>`
${v([{label:"فروشگاه‌ها",href:"./"},{label:i}])}
<section class="maint"><div class="wrap-narrow">
  <div class="maint-card">
    <div class="maint-ico">${n("clock")}</div>
    <span class="eyebrow">در حال به‌روزرسانی</span>
    <h1>${i} موقتاً بسته است</h1>
    <p class="lead">این بخش را برای به‌روزرسانی قیمت‌ها و اضافه‌کردن محصولات تازه موقتاً بسته‌ایم.
    به‌زودی با قیمت‌های بهتر برمی‌گردد.</p>
    <div class="maint-links">
      <a class="btn btn-gold btn-lg" href="minecraft/">فروشگاه ماینکرفت</a>
      <a class="btn btn-ghost" href="products/">همهٔ محصولات فعال</a>
    </div>
    <p class="maint-note">سفارش‌های ثبت‌شده و تیکت‌های باز در دیسکورد مثل قبل پیگیری می‌شوند.</p>
    <a class="maint-dc" href="${h}" target="_blank" rel="noopener">${n("discord")} پشتیبانی در دیسکورد</a>
  </div>
</div></section>`,o=i=>i.toLocaleString("fa-IR"),M=i=>`product/${i}/`,P=i=>d.filter(s=>s.category===i.category&&s.id!==i.id).slice(0,3),S=i=>{const s=$[i.id],a=s==null?void 0:s.unit,t=a?a.price*(a.min+0):0;return`
<aside class="buy-box rv">
  <div class="bb-head">
    <span class="bb-pill">${n("shield")} ضمانت بازگشت وجه</span>
    <div class="bb-price"><span>${i.priceLabel}</span><b>${i.price}</b></div>
    <span class="bb-updated">${n("clock")} آخرین بازبینی قیمت: آبان ۱۴۰۵</span>
  </div>

  ${a?`<div class="calc">
    <label class="calc-lbl" for="qty">مقدار مورد نظر</label>
    <div class="calc-val"><b id="qtyOut">${o(a.min)}</b> <span>${a.label}</span></div>
    <input id="qty" type="range" min="${a.min}" max="${a.max}" step="${a.step}" value="${a.min}"
           data-price="${a.price}" data-lbl="${a.label}">
    <div class="calc-range"><span>${o(a.min)} ${a.label}</span><span>${a.maxLabel}</span></div>
    <div class="calc-total">مبلغ کل: <b id="totalOut">${o(t)} تومان</b></div>
  </div>`:`<div class="bb-note">${n("info")} قیمت نهایی و زمان دقیق تحویل در تیکت دیسکورد اعلام می‌شود.</div>`}

  <ul class="bb-list">
    <li>${n("bolt")} زمان تحویل: <b>${(s==null?void 0:s.delivery)??"۱ تا ۴۸ ساعت"}</b></li>
    <li>${n("card")} پرداخت ریالی، بدون کارت خارجی</li>
    <li>${n("clock")} پشتیبانی ۲۴/۷ در دیسکورد</li>
  </ul>

  <a class="btn btn-gold btn-lg bb-cta" href="${h}" target="_blank" rel="noopener">${n("discord")} ثبت سفارش در دیسکورد</a>
  <button class="btn btn-ghost btn-copy" id="copyOrder" data-title="${i.title}" data-unit="${a?a.label:""}">
    ${n("cart")} کپی متن سفارش
  </button>
  <p class="bb-fine">قیمت‌ها به تومان است؛ عدد نهایی همان روز سفارش در تیکت تثبیت می‌شود.</p>
</aside>`},_=i=>{const s=D[i.id];if(!s)return"";const a=s.reduce((l,e)=>l+e.items.length,0),t=l=>o(l),r=s.some(l=>l.items.some(e=>typeof e.usd!="number")),c=s.some(l=>l.items.some(e=>typeof e.usd=="number"));return`
<section class="items-sec"><div class="wrap">
  <div class="items-head rv">
    <span class="eyebrow">محصولات داخل پکیج</span>
    <h2 class="items-title">${o(a)} آیتم — هر کدام را جدا هم می‌توانی سفارش بدهی</h2>
    <p class="items-rate">
      ${c?`قیمت‌ها با نرخ روز دلار حساب شده‌اند: هر دلار <b>${t(j)} تومان</b>
      + کارمزد ثابت <b>${t(q)} تومان</b> (رُند به پایین، به‌نفع شما)`:""}
      ${r?`${c?" · ":""}آیتم‌های «گم» ارز داخلی فروشگاه Dawn هستند؛ قیمت تومانی‌شان هنگام سفارش در تیکت اعلام می‌شود.`:""}
    </p>
  </div>

  ${s.map(l=>`
  <div class="items-group">
    <div class="ig-head rv"><h3>${l.title}</h3>${l.note?`<p>${l.note}</p>`:""}</div>
    <div class="items-grid">
      ${l.items.map(e=>`
      <article class="item rv">
        ${e.badge?`<span class="item-badge">${e.badge}</span>`:""}
        <div class="item-ico">
          ${e.icon?`<img src="${e.icon}" alt="${e.name}" width="88" height="88" loading="lazy" decoding="async">`:`<span class="item-chip">${e.chip??e.name}</span>`}
        </div>
        <div class="item-body">
          <b>${e.name}</b>
          ${e.note?`<i>${e.note}</i>`:""}
          ${typeof e.usd=="number"?`<div class="item-price"><span>${t(O(e.usd))} تومان</span><em>$${e.usd.toFixed(2)}</em></div>`:`<div class="item-price"><span>${t(e.gems??0)} گم</span><em>Gem</em></div>`}
        </div>
      </article>`).join("")}
    </div>
  </div>`).join("")}
</div></section>`},m=i=>{var s;return[...((s=$[i])==null?void 0:s.faq)??[],...f[i]??[],...y[i]??[]]},T=i=>{const s=[...g[i]??[],...u[i]??[]];return s!=null&&s.length?`<section class="tight prose-sec"><div class="wrap">
  ${s.map(a=>`<article class="prose">
    <h2>${a.h}</h2>
    ${a.p.map(t=>`<p>${t}</p>`).join("")}
  </article>`).join("")}
</div></section>`:""},I=i=>{const s=d.find(c=>c.id===i);if(!s)return A("این محصول");const a=$[s.id],t=b.find(c=>c.key===s.category),r=P(s);return`
${v([{label:"محصولات",href:"products/"},...t?[{label:t.title,href:t.slug}]:[],{label:s.title}])}

<section class="prod"><div class="wrap prod-grid">
  <div class="prod-media rv">
    ${E(s.image,{alt:s.title,sizes:"(max-width:900px) 90vw, 500px",w:900,h:900,eager:!0})}
    <div class="pm-badges">
      ${s.pills.map(k).join("")}
    </div>
  </div>
  <div class="prod-info">
    ${t?`<a class="eyebrow" href="${t.slug}">${t.title}</a>`:""}
    <h1>${s.title}</h1>
    <p class="lead">${s.desc}</p>
    <p class="prod-long">${(a==null?void 0:a.long)??""}</p>
    <ul class="feat">
      ${((a==null?void 0:a.features)??[]).map(c=>`<li>${n("spark")} ${c}</li>`).join("")}
    </ul>
    ${S(s)}
  </div>
</div></section>

${_(s)}


${T(s.id)}

<section class="tight"><div class="wrap">
  <ul class="seo-links">
    ${t?`<li><a href="${t.slug}">همهٔ محصولات ${t.title}<span>${t.short}</span></a></li>`:""}
    <li><a href="products/">لیست کامل محصولات و قیمت‌ها<span>${o(d.length)} محصول در ${o(b.length)} دسته</span></a></li>
    <li><a href="faq/">سؤالات متداول خرید<span>پرداخت، تحویل و ضمانت</span></a></li>
    <li><a href="process/">مراحل سفارش و تحویل<span>از تیکت تا تحویل، سه قدم</span></a></li>
  </ul>
</div></section>

${a!=null&&a.steps?`<section class="tight"><div class="wrap">${p("مراحل","این محصول چطور تحویل داده می‌شود؟")}
  <ol class="mini-steps">${a.steps.map((c,l)=>`<li><span>${o(l+1)}</span>${c}</li>`).join("")}</ol>
</div></section>`:""}

${m(s.id).length?`<section class="tight" id="faq"><div class="wrap">${p("سوالات","سؤال‌های این محصول")}${R(m(s.id))}</div></section>`:""}

${r.length?`<section class="tight"><div class="wrap">${p("محصولات مرتبط","این‌ها را هم ببین")}
  <div class="grid g3">${r.map(c=>x(c,{compact:!0})).join("")}</div></div></section>`:""}

<div id="toast" class="toast" role="status" aria-live="polite"></div>`},L=()=>`
${v([{label:"محصولات"}])}
<section class="phero"><div class="wrap">
  <div class="phero-top">
    <div class="phero-txt">
      <span class="phero-k">کاتالوگ کامل · ${o(d.length)} محصول</span>
      <h1>همهٔ محصولات یوزورا شاپ</h1>
      <p class="lead" style="max-width:70ch">هر چی برای ماینکرفت لازم داری، همین‌جاست: اکانت، پول دونات، محصولات هایپیکسل، کاسمتیک لونار و بدلاین و داون، رنک ماینمن و کیپ.
  روی هر کارت بزن تا قیمت و جزئیات کاملش باز شود.</p>
    </div>
    <div class="phero-act">
      <a class="btn btn-gold" href="https://discord.gg/sVAa2rw4wM" target="_blank" rel="noopener">ثبت سفارش</a>
      <a class="btn btn-ghost" href="faq/">سؤالات متداول</a>
    </div>
  </div>
  <ul class="phero-tags">
    <li>پرداخت ریالی با فاکتور</li>
    <li>ضمانت بازگشت وجه</li>
    <li>سفارش با تیکت دیسکورد</li>
  </ul>
</div></section>
<section class="tight"><div class="wrap">
  <div class="poster-grid" id="grid">${d.map(i=>w(i)).join("")}</div>
</div></section>`;export{I as productPage,M as productUrl,L as productsPage};
