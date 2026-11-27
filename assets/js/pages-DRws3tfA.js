import{g as k,s as Z}from"./home-JgsCYzti.js";import{productsPage as j}from"./product-2wlZOvKd.js";import{P as g,C as b,D as n,b as d,i as l,p as q,s as y,f as C}from"./entry-CZMWsw9g.js";import{a as D,C as M}from"./deep-BBdFqBAy.js";import{a as m}from"./faq-CZkr9_3S.js";const P={terms:`<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><a href="terms/">قوانین</a></div></div>

<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><span style="color:#c3c9d6">قوانین</span></div></div>
<section class="phero"><div class="wrap"><span class="eyebrow">قوانین</span><h1>قوانین و شرایط استفاده</h1>
<p class="lead" style="max-width:70ch">این صفحه شرایط خرید از یوزورا شاپ را مشخص می‌کند. با ثبت سفارش، این شرایط را می‌پذیری. سعی کرده‌ایم کوتاه و بدون بندهای پیچیده باشد.</p></div></section>
<section style="padding-top:0"><div class="wrap-narrow"><div class="article">
  <h2>۱. ثبت سفارش</h2><p>سفارش‌ها فقط از طریق تیکت در سرور رسمی دیسکورد یوزورا ثبت می‌شوند. اطلاعات محصول، مقدار و قیمت در همان تیکت نهایی می‌شود.</p>
  <h2>۲. قیمت‌ها</h2><p>قیمت‌های سایت به تومان است. قیمت محصولاتی که به دلار وابسته‌اند (مثل محصولات هایپیکسل و پول دونات) هنگام سفارش اعلام می‌شود. یوزورا حق به‌روزرسانی قیمت‌ها را دارد.</p>
  <h2>۳. پرداخت</h2><p>پرداخت ریالی و بعد از صدور فاکتور انجام می‌شود. سفارش پس از تأیید پرداخت وارد صف انجام می‌شود.</p>
  <h2>۴. تحویل</h2><p>زمان تحویل هر محصول در صفحهٔ همان محصول نوشته شده است. تأخیرهای خارج از کنترل (مثل اختلال سرور مقصد) به مشتری اطلاع داده می‌شود.</p>
  <h2>۵. بازگشت وجه</h2><p>اگر سفارش در بازهٔ اعلام‌شده انجام نشود و راه‌حل جایگزینی نباشد، مبلغ بازگردانده می‌شود. همین تعهد در پانوشت همهٔ صفحات سایت نوشته شده است.</p>
  <h2>۶. مسئولیت‌ها</h2><p>مشتری مسئول درست بودن اطلاعاتی است که ارسال می‌کند. یوزورا مسئول عواقب ناشی از نقض قوانین خود بازی یا سرور مقصد نیست.</p>
  <h2>۷. حریم خصوصی</h2><p>اطلاعات شما فقط برای انجام سفارش استفاده می‌شود و در اختیار شخص ثالث قرار نمی‌گیرد.</p>
</div></div></section>`},u=["minecraft","donut","hypixel","cape"],_=s=>`<section class="tight prose-sec"><div class="wrap">
  ${s.map(a=>`<article class="prose">
    <h2>${a.h}</h2>
    ${a.p.map(t=>`<p>${t}</p>`).join("")}
  </article>`).join("")}
</div></section>`,G=s=>{const a=b.filter(t=>t.key!==s);return`<section class="tight"><div class="wrap" id="more">
  ${y("دسته‌های دیگر","بقیهٔ محصولات ماینکرفت")}
  <ul class="seo-links">${a.map(t=>`<li><a href="${t.slug}">${t.title} <span>${t.short}</span></a></li>`).join("")}</ul>
</div></section>`},w=s=>{var a,t;return`
${d([{label:"فروشگاه‌ها",href:"./"},{label:s.title}])}
<section class="phero"><div class="wrap">
  <div class="phero-top">
    <div class="phero-txt">
      <span class="phero-k">${s.kicker}</span>
      <h1>${s.title}</h1>
      <p class="lead" style="max-width:70ch">${s.lead}</p>
    </div>
    <div class="phero-act">
      <a class="btn btn-gold" href="${n}" target="_blank" rel="noopener">${l("discord")} ثبت سفارش</a>
      <a class="btn btn-ghost" href="./">صفحهٔ اصلی</a>
    </div>
  </div>
  <ul class="phero-tags">${s.tags.map(r=>`<li>${r}</li>`).join("")}</ul>
</div></section>
<section class="tight"><div class="wrap">
  <div class="poster-grid" id="grid">${s.items.map(r=>q(r)).join("")}</div>
</div></section>
${(a=s.deep)!=null&&a.length?_(s.deep):""}
${(t=s.faq)!=null&&t.length?`<section class="tight" id="faq"><div class="wrap">${y("سوالات","سؤال‌های این دسته")}${C(s.faq)}</div></section>`:""}
${s.otherCats?G(s.key):""}
<section class="tight"><div class="wrap"><div class="center-cta">
  <h2>سفارش را در دیسکورد ثبت کن</h2>
  <p>همهٔ سفارش‌ها با تیکت انجام می‌شود؛ مبلغ ریالی، فاکتور و پیگیری تا رسیدن سفارش.</p>
  <a class="btn btn-gold btn-lg" href="${n}" target="_blank" rel="noopener">${l("discord")} ورود به دیسکورد</a>
</div></div></section>`},A=()=>w({title:"فروشگاه محصولات ماینکرفت",kicker:`ماینکرفت · ${g.filter(s=>u.includes(s.category)).length} محصول`,lead:"اکانت ماینکرفت، پول دونات اس‌ام‌پی، محصولات هایپیکسل و کیپ اپتیفاین — همه با قیمت مشخص، تحویل معلوم و ضمانت بازگشت وجه.",tags:["اکانت فول اکسس","تحویل ۱ تا ۴۸ ساعت","پرداخت ریالی با فاکتور"],items:g.filter(s=>u.includes(s.category)),key:"minecraft",deep:[{h:"چرا خرید از یوزورا شاپ؟",p:["یوزورا شاپ با یک اصل کار می‌کند: چیزی که روی صفحه می‌بینی، همان چیزی است که تحویل می‌گیری. هر محصول قیمت مشخص، زمان تحویل معلوم و توضیح کامل دارد و سفارش با تیکت دیسکورد و پرداخت ریالی انجام می‌شود.","برای محصولات هایپیکسل و دونات، آیتم‌ها تک‌تک قیمت‌گذاری شده‌اند تا لازم نباشد برای قیمت یک رنک ساده منتظر جواب بمانی."]},{h:"تحویل، پرداخت و پیگیری سفارش",p:["پرداخت ریالی و با فاکتور است؛ کارت ارزی یا حساب خارجی لازم نداری. بعد از پرداخت، سفارش در همان تیکت پیگیری می‌شود تا تحویل نهایی.","زمان تحویل بین ۱ تا ۴۸ ساعت است؛ محصولاتی مثل هایپیکسل و دونات معمولاً ۱ تا ۲۴ ساعت و اکانت‌ها ۲۴ تا ۴۸ ساعت. اگر عجله داری، نسخهٔ با اولویت تحویل چند ساعته است."]},{h:"اگر مشکلی پیش بیاید چه می‌شود؟",p:["همهٔ سفارش‌ها ضمانت بازگشت وجه دارند. اگر محصول مطابق توضیحات این صفحه نبود، در تیکت اعلام کن تا بررسی و پیگیری شود.","پشتیبانی دیسکورد ۲۴ ساعته است؛ برای سؤال قبل از خرید هم می‌توانی همان‌جا بپرسی و بدون پرداخت راهنمایی بگیری."]}]}),H={minecraft:"اکانت ماینکرفت دستهٔ اول، دستهٔ دوم و اکانت با اولویت تحویل؛ همه با فول اکسس، ایمیل و رمز و تحویل ۱ تا ۴۸ ساعت.",donut:"همهٔ محصولات Donut SMP: رنک‌های Donut+، Donut++ و Donut+++ و پک‌های شرد از ۴۰۰ تا ۷۰٬۰۰۰ — با قیمت ریالی و تحویل ۱ تا ۲۴ ساعت.",hypixel:"همهٔ محصولات هایپیکسل در یک پکیج، به‌همراه کوین اسکای‌بلاک هدیه؛ تحویل ۱ تا ۲۴ ساعت.",cape:"کیپ اپتیفاین عمده با قیمت هر عدد؛ حداقل سفارش ۵ عدد و طرح اختصاصی روی اکانت خودتان."},h=s=>{const a=b.find(r=>r.key===s),t=g.filter(r=>r.category===s);return w({title:(a==null?void 0:a.title)??"محصولات",kicker:`${(a==null?void 0:a.en)??""} · ${t.length} محصول`,lead:H[s]??(a==null?void 0:a.short)??"",tags:[(a==null?void 0:a.note)??"تحویل ۱ تا ۴۸ ساعت","پرداخت ریالی با فاکتور","ضمانت بازگشت وجه"],items:t,key:s,deep:D[s],faq:M[s],otherCats:!0})},O=()=>m.map(s=>`
  <div class="faq-group">
    <h2 class="sub">${s.title}</h2>
    <div class="faq">
      ${s.items.map((a,t)=>`<details class="q"${t===0&&s===m[0]?" open":""}>
        <summary>${a.q}</summary>
        <p>${a.a}</p>
      </details>`).join("")}
    </div>
  </div>`).join(""),S=()=>`
${d([{label:"سؤالات متداول"}])}
<section class="phero"><div class="wrap">
  <span class="eyebrow">سؤالات متداول</span>
  <h1>چیزهایی که بیشتر از همه می‌پرسند</h1>
  <p class="lead" style="max-width:64ch">سعی کرده‌ایم کوتاه و بدون حاشیه جواب بدهیم. اگر جوابت اینجا نبود، در دیسکورد تیکت بزن؛ معمولاً چند دقیقه‌ای جواب می‌گیری.</p>
</div></section>

<section class="tight"><div class="wrap-narrow">
  ${O()}
</div></section>

<section class="tight"><div class="wrap"><div class="center-cta">
  <h2>هنوز سؤالی داری؟</h2>
  <p>در دیسکورد بپرس؛ خودمان راهنمایی می‌کنیم که کدام محصول به کارت می‌آید.</p>
  <a class="btn btn-gold btn-lg" href="${n}" target="_blank" rel="noopener">${l("discord")} ورود به دیسکورد</a>
</div></div></section>`,L=()=>`
${d([{label:"مراحل سفارش"}])}
<section class="phero"><div class="wrap">
  <span class="eyebrow">مراحل سفارش</span>
  <h1>از تیکت تا تحویل، سه قدم</h1>
  <p class="lead" style="max-width:64ch">نه فرم پر کردن دارد، نه ثبت‌نام. کل مسیر داخل دیسکورد انجام می‌شود تا هر جا سؤالی داشتی همان‌جا بپرسی.</p>
</div></section>

<section class="tight"><div class="wrap">
  <ol class="mini-steps">
    <li><span>۱</span>تیکت می‌زنی و می‌گویی چه محصولی می‌خواهی؛ اگر مطمئن نیستی، همان‌جا مشورت می‌گیری.</li>
    <li><span>۲</span>قیمت نهایی و زمان تحویل اعلام می‌شود؛ فاکتور ریالی صادر می‌کنی و پرداخت انجام می‌شود.</li>
    <li><span>۳</span>سفارش در بازهٔ اعلام‌شده تحویل داده می‌شود و تیکت تا مطمئن شدن از نتیجه باز می‌ماند.</li>
  </ol>
</div></section>

<section class="tight"><div class="wrap"><div class="center-cta">
  <h2>آماده‌ای شروع کنی؟</h2>
  <p>کافی است وارد دیسکورد شوی و تیکت بزنی؛ بقیه‌اش با ما.</p>
  <a class="btn btn-gold btn-lg" href="${n}" target="_blank" rel="noopener">${l("discord")} ثبت سفارش در دیسکورد</a>
</div></div></section>`,T=()=>`
${d([{label:"درباره ما"}])}
<section class="phero"><div class="wrap">
  <span class="eyebrow">دربارهٔ یوزورا</span>
  <h1>از یک انجمن ماینکرفت شروع شد</h1>
  <p class="lead" style="max-width:66ch">یوزورا شاپ فروشگاه انجمن یوزوراست؛ برای همان آدم‌هایی که داخل بازی اکانت و پول سرور لازم دارند و نمی‌خواهند وسط راه گیر بیفتند.</p>
</div></section>

<section class="tight"><div class="wrap grid g2">
  <div>
    <h2 class="sub">ما چه می‌کنیم؟</h2>
    <p class="lead" style="font-size:.95rem">اکانت ماینکرفت، پول دونات اس‌ام‌پی، محصولات هایپیکسل و اسکای‌بلاک و کیپ اپتیفاین؛ همین چهار چیز، اما درست و بدون حاشیه. هر محصول قیمت مشخص دارد و زمان تحویلش روی همان صفحه نوشته شده.</p>
    <div class="note green" style="margin-top:1.2rem">${l("shield")} اگر سفارشی انجام نشود، مبلغ برمی‌گردد. همین یک خط، خلاصهٔ کل قرار ماست.</div>
  </div>
  <div>
    <h2 class="sub">سه چیزی که سر آن معامله نمی‌کنیم</h2>
    <div class="grid" style="gap:.8rem">
      <div class="card"><h3>قیمت روی سایت</h3><p>قیمت‌ها پنهان نیست؛ همان چیزی است که می‌بینی.</p></div>
      <div class="card"><h3>زمان تحویل واقعی</h3><p>بازه‌ای اعلام می‌کنیم که بدانیم می‌رسیم.</p></div>
      <div class="card"><h3>پاسخ در دیسکورد</h3><p>همهٔ سفارش و پیگیری در یک جا و قابل مرور است.</p></div>
    </div>
  </div>
</div></section>

<section class="tight"><div class="wrap"><div class="center-cta">
  <h2>خوشحال می‌شویم ببینیمت</h2>
  <p>سرور دیسکورد ما باز است؛ هم می‌توانی سؤال بپرسی، هم سفارش بدهی.</p>
  <a class="btn btn-gold btn-lg" href="${n}" target="_blank" rel="noopener">${l("discord")} ورود به دیسکورد</a>
</div></div></section>`,E=()=>`
${d([{label:"تماس با ما"}])}
<section class="phero"><div class="wrap">
  <span class="eyebrow">پشتیبانی</span>
  <h1>با ما حرف بزن</h1>
  <p class="lead" style="max-width:62ch">همهٔ ارتباط‌ها در دیسکورد انجام می‌شود؛ سریع‌ترین راه، زدن تیکت در سرور است.</p>
</div></section>

<section class="tight"><div class="wrap grid g3">
  <div class="card hover"><h3>دیسکورد</h3><p>ثبت سفارش، پیگیری و پشتیبانی، همه در سرور یوزورا شاپ.</p>
    <div style="margin-top:1rem"><a class="btn btn-gold btn-sm" href="${n}" target="_blank" rel="noopener">ورود به سرور</a></div></div>
  <div class="card hover"><h3>ساعت پاسخ‌گویی</h3><p>همه‌روزه؛ معمولاً در کمتر از چند ساعت جواب می‌گیری.</p></div>
  <div class="card hover"><h3>پیگیری سفارش</h3><p>هر سفارش یک تیکت جدا دارد؛ همان‌جا وضعیتش را می‌بینی.</p></div>
</div></section>

<section class="tight"><div class="wrap-narrow">
  <h2 class="sub">قبل از تیکت، این‌ها را بنویس</h2>
  <div class="kv">
    <div class="row"><span>محصول</span><b>مثلاً پول دونات اس ام پی</b></div>
    <div class="row"><span>مقدار</span><b>مثلاً ۱۰۰ میلیون</b></div>
    <div class="row"><span>اکانت / سرور</span><b>نام اکانت یا سروری که سفارش رویش انجام می‌شود</b></div>
  </div>
  <div class="note blue" style="margin-top:1.2rem">${l("info")} اطلاعات حساب را فقط در تیکت رسمی سرور بفرست، هیچ‌جای دیگر.</div>
</div></section>`,v="#3ab8f0",R="#a9e5ff",V="#1b7fb0",z={shield:'<path fill-rule="evenodd" d="M120 40 56 66v47c0 38 27 68 64 82 37-14 64-44 64-82V66l-64-26Zm33 62-42 42-24-24 16-16 8 8 26-26 16 16Z"/>',card:'<path d="M44 78h152a14 14 0 0 1 14 14v10H30v-10a14 14 0 0 1 14-14Zm-14 40h180v54a14 14 0 0 1-14 14H44a14 14 0 0 1-14-14v-54Zm22 38v18h48v-18H52Z"/>',contact:'<path d="M46 62h148a16 16 0 0 1 16 16v76a16 16 0 0 1-16 16h-62l-40 30v-30H46a16 16 0 0 1-16-16V78a16 16 0 0 1 16-16Zm16 32v18h116v-18H62Zm0 40v18h74v-18H62Z"/>',clock:'<path fill-rule="evenodd" d="M120 34a86 86 0 1 0 0 172 86 86 0 0 0 0-172Zm0 22a64 64 0 1 1 0 128 64 64 0 0 1 0-128Zm-9 20v58l42 24 10-18-31-17V76h-21Z"/>',user:'<circle cx="120" cy="94" r="38"/><path d="M120 142c34 0 62 23 62 51 0 6-5 11-11 11H69c-6 0-11-5-11-11 0-28 28-51 62-51Z"/>',spark:'<path d="M120 32c7 46 25 64 71 71-46 7-64 25-71 71-7-46-25-64-71-71 46-7 64-25 71-71Z"/>',layers:'<path d="M120 38 30 84l90 46 90-46-90-46Z"/><path d="M44 118l-14 7 90 46 90-46-14-7-76 39-76-39Z" opacity=".62"/><path d="M44 152l-14 7 90 46 90-46-14-7-76 39-76-39Z" opacity=".36"/>',lock:'<path d="M120 34a44 44 0 0 1 44 44v14h8a16 16 0 0 1 16 16v64a16 16 0 0 1-16 16H68a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h8V78a44 44 0 0 1 44-44Zm0 20a24 24 0 0 0-24 24v14h48V78a24 24 0 0 0-24-24Zm0 66a17 17 0 0 1 9 31v15h-18v-15a17 17 0 0 1 9-31Z"/>',brush:'<path d="M168 34 96 122l22 22 88-72a20 20 0 0 0-38-38Z"/><path d="M86 130a30 30 0 0 0-30 30c0 14-6 26-16 34 24 8 56 4 70-26a30 30 0 0 0-24-38Z"/>'},o=s=>{const a=`ar-${s}`;return`<svg class="art-svg" viewBox="0 0 240 240" role="img" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="${a}-gl" cx="50%" cy="44%" r="56%">
      <stop offset="0" stop-color="${v}" stop-opacity=".26"/>
      <stop offset=".66" stop-color="${v}" stop-opacity=".07"/>
      <stop offset="1" stop-color="${v}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="${a}-g" x1=".2" y1="0" x2=".4" y2="1">
      <stop offset="0" stop-color="${R}"/>
      <stop offset=".5" stop-color="${v}"/>
      <stop offset="1" stop-color="${V}"/>
    </linearGradient>
    <linearGradient id="${a}-f" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fff" stop-opacity=".10"/>
      <stop offset="1" stop-color="#fff" stop-opacity=".01"/>
    </linearGradient>
  </defs>
  <circle cx="120" cy="118" r="98" fill="url(#${a}-gl)"/>
  <circle cx="120" cy="118" r="84" fill="url(#${a}-f)"/>
  <g fill="url(#${a}-g)">${z[s]}</g>
</svg>`},x={shield:o("shield"),refund:o("card"),support:o("contact"),pay:o("card"),delivery:o("clock"),secure:o("lock"),design:o("brush"),overlay:o("layers"),community:o("user")},p=(s,a,t)=>`
<article class="art-card rv">
  <div class="ac-art">${x[s]}</div>
  <h3>${a}</h3>
  <p>${t}</p>
</article>`,$={index:Z,"gta-vi":k,products:j,minecraft:A,"cat-minecraft":()=>h("minecraft"),"cat-donut":()=>h("donut"),"cat-hypixel":()=>h("hypixel"),"cat-cape":()=>h("cape"),faq:S,process:L,about:T,contact:E},I=s=>s.replace(/href="index\.html"/g,'href="./"').replace(/href="((?:cat|p)-[a-z0-9-]+|products|process|faq|about|contact|terms)\.html"/g,'href="$1/"'),B=s=>s.replace(/<img class="bg" src="assets\/img\/[a-z0-9./-]+"[^>]*>/g,"").replace(/(<div class="wrap"><div class="crumbs">[\s\S]*?<\/div><\/div>)\s*(?=<div class="wrap"><div class="crumbs">)/g,""),F=(s,a)=>{let t=a;s==="guarantee"&&(t=t.replace(/<img src="assets\/img\/07-cape-optifine\.jpg" alt="ضمانت یوزورا"[^>]*>/,`<div class="guar-art">${x.shield}</div>`));const f={guarantee:[["secure","امنیت حساب","اطلاعات اکانت بعد از تحویل کامل به شما منتقل می‌شود و در اختیار ما نمی‌ماند."],["refund","بازگشت وجه واقعی","اگر سفارش انجام نشود، مبلغ بدون بحث و شرط اضافه برمی‌گردد."],["support","پیگیری تا نتیجه","تیکت باز می‌ماند تا مطمئن شویم سفارش درست به دستتان رسیده است."]].map(([e,i,c])=>p(e,i,c)).join(""),about:[["community","از یک انجمن ۷۶۳ نفری","یوزورا از دل انجمن دیسکورد خودش بیرون آمده؛ بیشتر مشتری‌ها همان اعضا هستند."],["delivery","تحویل ۱ تا ۴۸ ساعت","بازهٔ تحویل هر محصول روی همان صفحه نوشته شده، نه در تبلیغ."],["pay","پرداخت ریالی و فاکتور","بدون کارت خارجی؛ فاکتور رسمی برای هر سفارش صادر می‌شود."]].map(([e,i,c])=>p(e,i,c)).join(""),process:[["support","قدم ۱ — تیکت","در دیسکورد تیکت می‌زنید و محصول را انتخاب می‌کنید."],["pay","قدم ۲ — پرداخت","فاکتور ریالی صادر و پرداخت انجام می‌شود."],["delivery","قدم ۳ — تحویل","تحویل در بازهٔ اعلام‌شده و پیگیری تا رضایت شما."]].map(([e,i,c])=>p(e,i,c)).join(""),prices:[["pay","قیمت شفاف","قیمت هر محصول روی سایت است؛ عدد نهایی در تیکت تثبیت می‌شود."],["secure","ضمانت معامله","پرداخت و تحویل در یک مسیر مشخص و قابل پیگیری انجام می‌شود."],["refund","بدون ریسک","اگر تحویل نشود، مبلغ برمی‌گردد."]].map(([e,i,c])=>p(e,i,c)).join(""),faq:[["support","سؤالی داری؟","اگر جوابت اینجا نبود، در دیسکورد تیکت بزن؛ زیر چند دقیقه جواب می‌گیری."],["secure","قبل از خرید","شرایط ضمانت و بازگشت وجه را قبل از پرداخت بخوان."],["delivery","بعد از خرید","زمان تحویل هر محصول در صفحهٔ خودش نوشته شده است."]].map(([e,i,c])=>p(e,i,c)).join(""),contact:[["community","دیسکورد","سریع‌ترین راه ارتباط، تیکت در سرور یوزورا شاپ است."],["support","پشتیبانی ۲۴/۷","تیم پشتیبانی همیشه آنلاین است؛ حتی نصفه‌شب."],["pay","هماهنگی پرداخت","برای فاکتور و تسویه، در همان تیکت هماهنگ می‌کنیم."]].map(([e,i,c])=>p(e,i,c)).join("")}[s];if(f){const e=t.indexOf("</section>");e>-1&&(t=`${t.slice(0,e+10)}
<section class="art-row"><div class="wrap"><div class="grid g3">${f}</div></div></section>${t.slice(e+10)}`)}return t};for(const[s,a]of Object.entries(P))s in $||($[s]=()=>F(s,B(I(a))));export{$ as pages};
