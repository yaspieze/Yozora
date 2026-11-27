import{splashPage as b}from"./home-4WCbx8B_.js";import{productsPage as j}from"./product-C0JyUjmp.js";import{P as v,C as x,D as y,b as k,i as n,p as C,s as m,f as _}from"./entry-Ue92FAXu.js";import{C as O,a as D,b as P,c as q,d as A}from"./deep-more-B6BSKaDd.js";import{a as f}from"./faq-CZkr9_3S.js";const S={terms:`<div class="wrap"><div class="crumbs"><a href="./">خانه</a><span>/</span><a href="terms/">قوانین</a></div></div>

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
</div></div></section>`},w=["minecraft","donut","hypixel","cape"],E=t=>`<section class="tight prose-sec"><div class="wrap">
  ${t.map(r=>`<article class="prose">
    <h2>${r.h}</h2>
    ${r.p.map(e=>`<p>${e}</p>`).join("")}
  </article>`).join("")}
</div></section>`,G=t=>{const r=x.filter(e=>e.key!==t);return`<section class="tight"><div class="wrap" id="more">
  ${m("دسته‌های دیگر","بقیهٔ محصولات ماینکرفت")}
    <ul class="seo-links">${r.map(e=>`<li><a href="${e.slug}">${e.title} <span>${e.short}</span></a></li>`).join("")}</ul>
</div></section>`},$=t=>{var r,e;return`
${k([{label:"فروشگاه‌ها",href:"./"},{label:t.title}])}
<section class="phero"><div class="wrap">
  <div class="phero-top">
    <div class="phero-txt">
      <span class="phero-k">${t.kicker}</span>
      <h1>${t.title}</h1>
      <p class="lead" style="max-width:70ch">${t.lead}</p>
    </div>
    <div class="phero-act">
      <a class="btn btn-gold" href="${y}" target="_blank" rel="noopener">${n("discord")} ثبت سفارش</a>
      <a class="btn btn-ghost" href="./">صفحهٔ اصلی</a>
    </div>
  </div>
  <ul class="phero-tags">${t.tags.map(d=>`<li>${d}</li>`).join("")}</ul>
</div></section>
<section class="tight"><div class="wrap">
  <div class="poster-grid" id="grid">${t.items.map(d=>C(d)).join("")}</div>
</div></section>
${(r=t.deep)!=null&&r.length?E(t.deep):""}
${(e=t.faq)!=null&&e.length?`<section class="tight" id="faq"><div class="wrap">${m("سوالات","سؤال‌های این دسته")}${_(t.faq)}</div></section>`:""}
${t.otherCats?G(t.key):""}
<section class="tight"><div class="wrap"><div class="center-cta">
  <h2>سفارش را در دیسکورد ثبت کن</h2>
  <p>همهٔ سفارش‌ها با تیکت انجام می‌شود؛ مبلغ ریالی، فاکتور و پیگیری تا رسیدن سفارش.</p>
  <a class="btn btn-gold btn-lg" href="${y}" target="_blank" rel="noopener">${n("discord")} ورود به دیسکورد</a>
</div></div></section>`},R=()=>$({title:"فروشگاه محصولات ماینکرفت",kicker:`ماینکرفت · ${v.filter(t=>w.includes(t.category)).length} محصول`,lead:"اکانت ماینکرفت، پول دونات اس‌ام‌پی، محصولات هایپیکسل و کیپ اپتیفاین — همه با قیمت مشخص، تحویل معلوم و ضمانت بازگشت وجه.",tags:["اکانت فول اکسس","تحویل ۱ تا ۴۸ ساعت","پرداخت ریالی با فاکتور"],items:v.filter(t=>w.includes(t.category)),key:"minecraft",deep:[{h:"چرا خرید از یوزورا شاپ؟",p:["یوزورا شاپ با یک اصل کار می‌کند: چیزی که روی صفحه می‌بینی، همان چیزی است که تحویل می‌گیری. هر محصول قیمت مشخص، زمان تحویل معلوم و توضیح کامل دارد و سفارش با تیکت دیسکورد و پرداخت ریالی انجام می‌شود.","برای محصولات هایپیکسل و دونات، آیتم‌ها تک‌تک قیمت‌گذاری شده‌اند تا لازم نباشد برای قیمت یک رنک ساده منتظر جواب بمانی."]},{h:"تحویل، پرداخت و پیگیری سفارش",p:["پرداخت ریالی و با فاکتور است؛ کارت ارزی یا حساب خارجی لازم نداری. بعد از پرداخت، سفارش در همان تیکت پیگیری می‌شود تا تحویل نهایی.","زمان تحویل بین ۱ تا ۴۸ ساعت است؛ محصولاتی مثل هایپیکسل و دونات معمولاً ۱ تا ۲۴ ساعت و اکانت‌ها ۲۴ تا ۴۸ ساعت. اگر عجله داری، نسخهٔ با اولویت تحویل چند ساعته است."]},{h:"اگر مشکلی پیش بیاید چه می‌شود؟",p:["همهٔ سفارش‌ها ضمانت بازگشت وجه دارند. اگر محصول مطابق توضیحات این صفحه نبود، در تیکت اعلام کن تا بررسی و پیگیری شود.","پشتیبانی دیسکورد ۲۴ ساعته است؛ برای سؤال قبل از خرید هم می‌توانی همان‌جا بپرسی و بدون پرداخت راهنمایی بگیری."]},...A]}),T={minecraft:"اکانت ماینکرفت دستهٔ اول، دستهٔ دوم و اکانت با اولویت تحویل؛ همه با فول اکسس، ایمیل و رمز و تحویل ۱ تا ۴۸ ساعت.",donut:"همهٔ محصولات Donut SMP: رنک‌های Donut+، Donut++ و Donut+++ و پک‌های شرد از ۴۰۰ تا ۷۰٬۰۰۰ — با قیمت ریالی و تحویل ۱ تا ۲۴ ساعت.",hypixel:"همهٔ محصولات هایپیکسل در یک پکیج، به‌همراه کوین اسکای‌بلاک هدیه؛ تحویل ۱ تا ۲۴ ساعت.",cape:"کیپ اپتیفاین عمده با قیمت هر عدد؛ حداقل سفارش ۵ عدد و طرح اختصاصی روی اکانت خودتان.",lunar:"کاسمتیک‌های Lunar Client: کلوز، بال، ایموت، هدگیر، بندانا و اورا — با قیمت ریالی و فعال‌سازی روی یوزرنیم خودت.",badlion:"کاسمتیک‌های Badlion Client: بال، کلوز، کلاه، شیلد، کوله‌پشتی و کامپنیون — ارزان‌ترین دستهٔ کاسمتیک.",dawn:"کاسمتیک‌های Dawn Client با ارز داخلی گم: کالکشن فصلی Ocean & Outdoors، پت، ایموت و اشتراک Dawn Gold.",minemen:"رنک‌های سرور MineMen (VIP، PRO، MVP، ACE) و ارتقای رنک — اولویت صف، امکانات کلاب و پرداخت ریالی."},p=t=>{const r=x.find(d=>d.key===t),e=v.filter(d=>d.category===t);return $({title:(r==null?void 0:r.title)??"محصولات",kicker:`${(r==null?void 0:r.en)??""} · ${e.length.toLocaleString("fa-IR")} محصول`,lead:T[t]??(r==null?void 0:r.short)??"",tags:[(r==null?void 0:r.note)??"تحویل ۱ تا ۴۸ ساعت","پرداخت ریالی با فاکتور","ضمانت بازگشت وجه"],items:e,key:t,deep:[...P[t]??[],...q[t]??[]],faq:[...O[t]??[],...D[t]??[]],otherCats:!0})},Z=()=>f.map(t=>`
  <div class="faq-group">
    <h2 class="sub">${t.title}</h2>
    <div class="faq">
      ${t.items.map((r,e)=>`<details class="q"${e===0&&t===f[0]?" open":""}>
        <summary>${r.q}</summary>
        <p>${r.a}</p>
      </details>`).join("")}
    </div>
  </div>`).join(""),L=()=>`
${k([{label:"سؤالات متداول"}])}
<section class="phero"><div class="wrap">
  <span class="eyebrow">سؤالات متداول</span>
  <h1>چیزهایی که بیشتر از همه می‌پرسند</h1>
  <p class="lead" style="max-width:64ch">سعی کرده‌ایم کوتاه و بدون حاشیه جواب بدهیم. اگر جوابت اینجا نبود، در دیسکورد تیکت بزن؛ معمولاً چند دقیقه‌ای جواب می‌گیری.</p>
</div></section>

<section class="tight"><div class="wrap-narrow">
  ${Z()}
</div></section>

<section class="tight"><div class="wrap"><div class="center-cta">
  <h2>هنوز سؤالی داری؟</h2>
  <p>در دیسکورد بپرس؛ خودمان راهنمایی می‌کنیم که کدام محصول به کارت می‌آید.</p>
  <a class="btn btn-gold btn-lg" href="${y}" target="_blank" rel="noopener">${n("discord")} ورود به دیسکورد</a>
</div></div></section>`,V=()=>`
${k([{label:"مراحل سفارش"}])}
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
  <a class="btn btn-gold btn-lg" href="${y}" target="_blank" rel="noopener">${n("discord")} ثبت سفارش در دیسکورد</a>
</div></div></section>`,U=()=>`
${k([{label:"درباره ما"}])}
<section class="phero"><div class="wrap">
  <span class="eyebrow">دربارهٔ یوزورا</span>
  <h1>از یک انجمن ماینکرفت شروع شد</h1>
  <p class="lead" style="max-width:66ch">یوزورا شاپ فروشگاه انجمن یوزوراست؛ برای همان آدم‌هایی که داخل بازی اکانت و پول سرور لازم دارند و نمی‌خواهند وسط راه گیر بیفتند.</p>
</div></section>

<section class="tight"><div class="wrap grid g2">
  <div>
    <h2 class="sub">ما چه می‌کنیم؟</h2>
    <p class="lead" style="font-size:.95rem">اکانت ماینکرفت، پول دونات اس‌ام‌پی، محصولات هایپیکسل و اسکای‌بلاک و کیپ اپتیفاین؛ همین چهار چیز، اما درست و بدون حاشیه. هر محصول قیمت مشخص دارد و زمان تحویلش روی همان صفحه نوشته شده.</p>
    <div class="note green" style="margin-top:1.2rem">${n("shield")} اگر سفارشی انجام نشود، مبلغ برمی‌گردد. همین یک خط، خلاصهٔ کل قرار ماست.</div>
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
  <a class="btn btn-gold btn-lg" href="${y}" target="_blank" rel="noopener">${n("discord")} ورود به دیسکورد</a>
</div></div></section>`,I=()=>`
${k([{label:"تماس با ما"}])}
<section class="phero"><div class="wrap">
  <span class="eyebrow">پشتیبانی</span>
  <h1>با ما حرف بزن</h1>
  <p class="lead" style="max-width:62ch">همهٔ ارتباط‌ها در دیسکورد انجام می‌شود؛ سریع‌ترین راه، زدن تیکت در سرور است.</p>
</div></section>

<section class="tight"><div class="wrap grid g3">
  <div class="card hover"><h3>دیسکورد</h3><p>ثبت سفارش، پیگیری و پشتیبانی، همه در سرور یوزورا شاپ.</p>
    <div style="margin-top:1rem"><a class="btn btn-gold btn-sm" href="${y}" target="_blank" rel="noopener">ورود به سرور</a></div></div>
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
  <div class="note blue" style="margin-top:1.2rem">${n("info")} اطلاعات حساب را فقط در تیکت رسمی سرور بفرست، هیچ‌جای دیگر.</div>
</div></section>`,s="#3ab8f0",z="#a9e5ff",B="#b27a00",c=(t,r,e="")=>`<svg class="art-svg" viewBox="0 0 240 240" role="img" aria-hidden="true" fill="none" ${e} xmlns="http://www.w3.org/2000/svg">${r}</svg>`,l=t=>`
  <defs>
    <radialGradient id="${t}-gl" cx="50%" cy="46%" r="52%">
      <stop offset="0" stop-color="${s}" stop-opacity=".22"/>
      <stop offset=".62" stop-color="${s}" stop-opacity=".07"/>
      <stop offset="1" stop-color="${s}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="${t}-g" x1="0" y1="0" x2=".35" y2="1">
      <stop offset="0" stop-color="${z}"/>
      <stop offset=".48" stop-color="${s}"/>
      <stop offset="1" stop-color="${B}"/>
    </linearGradient>
    <linearGradient id="${t}-f" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fff" stop-opacity=".10"/>
      <stop offset="1" stop-color="#fff" stop-opacity=".015"/>
    </linearGradient>
    <pattern id="${t}-h" width="7" height="7" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="7" stroke="${s}" stroke-opacity=".24" stroke-width="1"/>
    </pattern>
    <pattern id="${t}-d" width="9" height="9" patternUnits="userSpaceOnUse">
      <circle cx="1.6" cy="1.6" r="1.05" fill="${s}" fill-opacity=".30"/>
    </pattern>
  </defs>
  <circle cx="120" cy="118" r="106" fill="url(#${t}-gl)"/>`,F=()=>c("ar-shield",`${l("ar-shield")}
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
    <circle cx="120" cy="124" r="4.4" fill="${s}"/>
    <path d="M120 128v9" stroke-width="2.2"/>
    <!-- پرچ‌ها -->
    <circle cx="76" cy="88" r="1.9" fill="${s}" stroke="none"/>
    <circle cx="164" cy="88" r="1.9" fill="${s}" stroke="none"/>
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
  </g>`),Q=()=>c("ar-refund",`${l("ar-refund")}
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
  </g>`),H=()=>c("ar-support",`${l("ar-support")}
  <g stroke="url(#ar-support-g)" stroke-linecap="round" stroke-linejoin="round">
    <!-- هدست -->
    <path d="M62 136v-16a58 58 0 0 1 116 0v16" stroke-width="2.6"/>
    <rect x="48" y="130" width="26" height="44" rx="12" fill="url(#ar-support-f)" stroke-width="2.2"/>
    <rect x="166" y="130" width="26" height="44" rx="12" fill="url(#ar-support-f)" stroke-width="2.2"/>
    <path d="M74 152c0 18 12 28 28 30" stroke-width="2.2"/>
    <rect x="98" y="176" width="20" height="11" rx="5.5" fill="${s}" stroke="none"/>
    <!-- حباب گفتگو -->
    <path d="M120 66c22 0 38 13 38 30s-16 30-38 30c-4 0-8-.4-11-1l-14 8 3-13c-10-5-16-14-16-24 0-17 16-30 38-30Z"
          fill="#0d0e13" stroke-width="2.2"/>
    <g stroke-width="1.8">
      <circle cx="104" cy="96" r="2.4" fill="${s}" stroke="none"/>
      <circle cx="120" cy="96" r="2.4" fill="${s}" stroke="none"/>
      <circle cx="136" cy="96" r="2.4" fill="${s}" stroke="none"/>
    </g>
    <!-- موج صدا -->
    <g stroke-width="1.8" stroke-opacity=".75">
      <path d="M196 150a22 22 0 0 1 0 20"/>
      <path d="M206 142a34 34 0 0 1 0 36" stroke-opacity=".45"/>
      <path d="M44 150a22 22 0 0 0 0 20"/>
      <path d="M34 142a34 34 0 0 0 0 36" stroke-opacity=".45"/>
    </g>
    <circle cx="120" cy="118" r="98" fill="url(#ar-support-h)" stroke="none" opacity=".22"/>
  </g>`),J=()=>c("ar-pay",`${l("ar-pay")}
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
  </g>`),K=()=>c("ar-delivery",`${l("ar-delivery")}
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
  </g>`),N=()=>c("ar-secure",`${l("ar-secure")}
  <g stroke="url(#ar-secure-g)" stroke-linecap="round" stroke-linejoin="round">
    <!-- شش‌ضلعی -->
    <path d="M120 30 196 72v88l-76 42-76-42V72Z" fill="url(#ar-secure-f)" stroke-width="2.4"/>
    <path d="M120 46 182 80v72l-62 34-62-34V80Z" stroke-width="1.1" stroke-opacity=".4" stroke-dasharray="2 7"/>
    <!-- قفل بزرگ -->
    <rect x="94" y="112" width="52" height="44" rx="10" fill="#0d0e13" stroke-width="2.4"/>
    <path d="M104 112v-13a16 16 0 0 1 32 0v13" stroke-width="2.4"/>
    <circle cx="120" cy="130" r="5.4" fill="${s}"/>
    <path d="M120 135v10" stroke-width="2.4"/>
    <!-- مدارها -->
    <g stroke-width="1.3" stroke-opacity=".6">
      <path d="M76 92h14v-14M164 92h-14V78M76 152h14v14M164 152h-14v14"/>
      <circle cx="90" cy="78" r="2.2" fill="${s}" stroke="none"/>
      <circle cx="150" cy="78" r="2.2" fill="${s}" stroke="none"/>
      <circle cx="90" cy="166" r="2.2" fill="${s}" stroke="none"/>
      <circle cx="150" cy="166" r="2.2" fill="${s}" stroke="none"/>
    </g>
    <path d="M120 30 196 72v88l-76 42-76-42V72Z" fill="url(#ar-secure-d)" stroke="none" opacity=".3"/>
  </g>`),W=()=>c("ar-design",`${l("ar-design")}
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
      <circle cx="192" cy="70" r="9" fill="${s}" fill-opacity=".85" stroke="none"/>
      <circle cx="192" cy="94" r="9" stroke-opacity=".8"/>
      <circle cx="192" cy="118" r="9" stroke-opacity=".8"/>
    </g>
    <path d="M30 186h108" stroke-width="1.2" stroke-opacity=".3"/>
    <circle cx="120" cy="118" r="100" fill="url(#ar-design-d)" stroke="none" opacity=".22"/>
  </g>`),X=()=>c("ar-overlay",`${l("ar-overlay")}
  <g stroke="url(#ar-overlay-g)" stroke-linecap="round" stroke-linejoin="round">
    <!-- مانیتور -->
    <rect x="34" y="58" width="172" height="112" rx="12" fill="url(#ar-overlay-f)" stroke-width="2.4"/>
    <path d="M96 188h48M120 170v18" stroke-width="2.2"/>
    <!-- فریم وب‌کم -->
    <rect x="128" y="118" width="62" height="40" rx="8" fill="#0d0e13" stroke-width="2"/>
    <circle cx="159" cy="138" r="9" stroke-width="1.8"/>
    <circle cx="159" cy="138" r="3.4" fill="${s}" stroke="none"/>
    <!-- چت‌باکس -->
    <g stroke-width="1.4" stroke-opacity=".8">
      <rect x="48" y="118" width="66" height="8" rx="4"/>
      <rect x="48" y="132" width="48" height="8" rx="4" stroke-opacity=".6"/>
      <rect x="48" y="146" width="56" height="8" rx="4" stroke-opacity=".4"/>
    </g>
    <!-- هدر استریم -->
    <rect x="48" y="74" width="40" height="10" rx="5" fill="${s}" stroke="none" opacity=".9"/>
    <rect x="96" y="74" width="22" height="10" rx="5" stroke-width="1.4" stroke-opacity=".7"/>
    <circle cx="190" cy="79" r="5" fill="#ff4d4d" stroke="none"/>
    <!-- نوار پیشرفت -->
    <path d="M48 104h120" stroke-width="3" stroke-opacity=".25"/>
    <path d="M48 104h74" stroke-width="3"/>
    <circle cx="120" cy="118" r="102" fill="url(#ar-overlay-h)" stroke="none" opacity=".2"/>
  </g>`),Y=()=>c("ar-community",`${l("ar-community")}
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
  </g>`),M={shield:F(),refund:Q(),support:H(),pay:J(),delivery:K(),secure:N(),design:W(),overlay:X(),community:Y()},h=(t,r,e)=>`
<article class="art-card rv">
  <div class="ac-art">${M[t]}</div>
  <h3>${r}</h3>
  <p>${e}</p>
</article>`,u={index:b,products:j,minecraft:R,"cat-minecraft":()=>p("minecraft"),"cat-donut":()=>p("donut"),"cat-hypixel":()=>p("hypixel"),"cat-cape":()=>p("cape"),"cat-lunar":()=>p("lunar"),"cat-badlion":()=>p("badlion"),"cat-dawn":()=>p("dawn"),"cat-minemen":()=>p("minemen"),faq:L,process:V,about:U,contact:I},tt=t=>t.replace(/href="index\.html"/g,'href="./"').replace(/href="((?:cat|p)-[a-z0-9-]+|products|process|faq|about|contact|terms)\.html"/g,'href="$1/"'),rt=t=>t.replace(/<img class="bg" src="assets\/img\/[a-z0-9./-]+"[^>]*>/g,"").replace(/(<div class="wrap"><div class="crumbs">[\s\S]*?<\/div><\/div>)\s*(?=<div class="wrap"><div class="crumbs">)/g,""),et=(t,r)=>{let e=r;t==="guarantee"&&(e=e.replace(/<img src="assets\/img\/07-cape-optifine\.jpg" alt="ضمانت یوزورا"[^>]*>/,`<div class="guar-art">${M.shield}</div>`));const g={guarantee:[["secure","امنیت حساب","اطلاعات اکانت بعد از تحویل کامل به شما منتقل می‌شود و در اختیار ما نمی‌ماند."],["refund","بازگشت وجه واقعی","اگر سفارش انجام نشود، مبلغ بدون بحث و شرط اضافه برمی‌گردد."],["support","پیگیری تا نتیجه","تیکت باز می‌ماند تا مطمئن شویم سفارش درست به دستتان رسیده است."]].map(([i,a,o])=>h(i,a,o)).join(""),about:[["community","از یک انجمن ۷۶۳ نفری","یوزورا از دل انجمن دیسکورد خودش بیرون آمده؛ بیشتر مشتری‌ها همان اعضا هستند."],["delivery","تحویل ۱ تا ۴۸ ساعت","بازهٔ تحویل هر محصول روی همان صفحه نوشته شده، نه در تبلیغ."],["pay","پرداخت ریالی و فاکتور","بدون کارت خارجی؛ فاکتور رسمی برای هر سفارش صادر می‌شود."]].map(([i,a,o])=>h(i,a,o)).join(""),process:[["support","قدم ۱ — تیکت","در دیسکورد تیکت می‌زنید و محصول را انتخاب می‌کنید."],["pay","قدم ۲ — پرداخت","فاکتور ریالی صادر و پرداخت انجام می‌شود."],["delivery","قدم ۳ — تحویل","تحویل در بازهٔ اعلام‌شده و پیگیری تا رضایت شما."]].map(([i,a,o])=>h(i,a,o)).join(""),prices:[["pay","قیمت شفاف","قیمت هر محصول روی سایت است؛ عدد نهایی در تیکت تثبیت می‌شود."],["secure","ضمانت معامله","پرداخت و تحویل در یک مسیر مشخص و قابل پیگیری انجام می‌شود."],["refund","بدون ریسک","اگر تحویل نشود، مبلغ برمی‌گردد."]].map(([i,a,o])=>h(i,a,o)).join(""),faq:[["support","سؤالی داری؟","اگر جوابت اینجا نبود، در دیسکورد تیکت بزن؛ زیر چند دقیقه جواب می‌گیری."],["secure","قبل از خرید","شرایط ضمانت و بازگشت وجه را قبل از پرداخت بخوان."],["delivery","بعد از خرید","زمان تحویل هر محصول در صفحهٔ خودش نوشته شده است."]].map(([i,a,o])=>h(i,a,o)).join(""),contact:[["community","دیسکورد","سریع‌ترین راه ارتباط، تیکت در سرور یوزورا شاپ است."],["support","پشتیبانی ۲۴/۷","تیم پشتیبانی همیشه آنلاین است؛ حتی نصفه‌شب."],["pay","هماهنگی پرداخت","برای فاکتور و تسویه، در همان تیکت هماهنگ می‌کنیم."]].map(([i,a,o])=>h(i,a,o)).join("")}[t];if(g){const i=e.indexOf("</section>");i>-1&&(e=`${e.slice(0,i+10)}
<section class="art-row"><div class="wrap"><div class="grid g3">${g}</div></div></section>${e.slice(i+10)}`)}return e};for(const[t,r]of Object.entries(S))t in u||(u[t]=()=>et(t,rt(tt(r))));export{u as pages};
