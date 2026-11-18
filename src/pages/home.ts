import { BLOG_POSTS, CATEGORIES, DISCORD, FAQ_ITEMS, PRODUCTS } from '../data/catalog';
import { ctaBand, faqList, icon, productCard, sectionHead, statStrip } from '../lib/ui';
import { ART, artCard } from '../lib/art';

interface Slide {
  eyebrow: string;
  title: string;
  em: string;
  text: string;
  primary: string;
  primaryHref: string;
  ghost: string;
  ghostHref: string;
  image: string;
  tags: string[];
  chipTop: string;
  chipBottom: string;
}

const SLIDES: Slide[] = [
  {
    eyebrow: 'فروشگاه رسمی انجمن کینیوا',
    title: 'اکانت ماینکرفت فول اکسس',
    em: 'با تحویل تا ۴۸ ساعت',
    text: 'اکانت کامل جاوا و بدراک با اطلاعات قابل تغییر، پشتیبانی واقعی و ضمانت بازگشت وجه.',
    primary: 'ثبت سفارش در دیسکورد',
    primaryHref: DISCORD,
    ghost: 'جزئیات محصول',
    ghostHref: 'cat-minecraft/',
    image: 'assets/img/products/p-minecraft-account.jpg',
    tags: ['فول اکسس', 'جاوا + بدراک', 'تغییر اطلاعات'],
    chipTop: '۷۶۳ عضو انجمن',
    chipBottom: 'ضمانت بازگشت وجه',
  },
  {
    eyebrow: 'دونات اس ام پی',
    title: 'پول دونات از ۴٬۰۰۰ تومان',
    em: 'هر میلیون، بدون واسطه',
    text: 'موجودی فعلی سرور ۳۰۰ میلیون است؛ حداقل خرید ۵۰ میلیون و تحویل مستقیم روی اکانت خودت.',
    primary: 'ثبت سفارش در دیسکورد',
    primaryHref: DISCORD,
    ghost: 'محاسبهٔ قیمت',
    ghostHref: 'cat-donut/',
    image: 'assets/img/products/p-donut-million.jpg',
    tags: ['موجودی ۳۰۰M', 'حداقل ۵۰M', 'تحویل ۴۸h'],
    chipTop: 'تحویل زیر ۲۴ ساعت',
    chipBottom: '۳۰ نفر آنلاین',
  },
  {
    eyebrow: 'خدمات گرافیک کینیوا',
    title: 'لوگو، بنر، تامنیل و اورلی',
    em: 'اختصاصی برای استریم تو',
    text: 'از طرح لوگو تا پک کامل اورلی استریم و انیمه‌آرت؛ همه با تحویل ۱ تا ۳ روز کاری.',
    primary: 'ثبت سفارش در دیسکورد',
    primaryHref: DISCORD,
    ghost: 'دیدن خدمات',
    ghostHref: 'cat-design/',
    image: 'assets/img/products/p-logo.jpg',
    tags: ['لوگو', 'اورلی', 'انیمه‌آرت'],
    chipTop: '۲ بازنگری رایگان',
    chipBottom: 'فایل لایه‌باز',
  },
];

const heroSlider = (): string => `
<section class="hero2">
  <div class="hero-glow" aria-hidden="true"><i></i><i></i><i></i></div>
  <div class="wrap">
    <div class="slider" id="heroSlider">
      ${SLIDES.map(
        (s, i) => `<article class="slide${i === 0 ? ' on' : ''}" data-i="${i}">
        <div class="slide-body">
          <span class="eyebrow">${s.eyebrow}</span>
          <h1>${s.title}<br><em class="grad">${s.em}</em></h1>
          <p>${s.text}</p>
          <div class="slide-tags">${s.tags.map((t) => `<span class="pill">${t}</span>`).join('')}</div>
          <div class="hero-btns">
            <a class="btn btn-gold btn-lg" href="${s.primaryHref}"${s.primaryHref.startsWith('http') ? ' target="_blank" rel="noopener"' : ''}>${icon('discord')} ${s.primary}</a>
            <a class="btn btn-ghost btn-lg" href="${s.ghostHref}">${s.ghost}</a>
          </div>
        </div>
        <div class="slide-art" data-par="0.05">
          <div class="slide-frame">
            <img src="${s.image}" alt="${s.title}" width="900" height="900" ${i === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}>
          </div>
          <span class="float-chip chip-a">${icon('bolt')} ${s.chipTop}</span>
          <span class="float-chip chip-b">${icon('shield')} ${s.chipBottom}</span>
        </div>
      </article>`,
      ).join('')}
      <button class="slide-nav prev" data-slide="prev" aria-label="قبلی">${icon('chevron')}</button>
      <button class="slide-nav next" data-slide="next" aria-label="بعدی">${icon('chevron')}</button>
      <div class="slider-dots" id="heroDots">${SLIDES.map((_, i) => `<i class="${i === 0 ? 'on' : ''}"></i>`).join('')}</div>
    </div>
  </div>
</section>`;

/* ── نوار متحرک محصولات: هر آیتم عکس اختصاصی خودش را دارد ─────────────── */
const productMarquee = (): string => {
  const items = PRODUCTS.slice(0, 10)
    .map(
      (p) => `<a class="marq-item" href="${p.href}">
      <img src="${p.image}" alt="${p.title}" width="76" height="76" loading="lazy">
      <span><b>${p.title}</b><i>${p.price}</i></span>
    </a>`,
    )
    .join('');
  return `
<div class="marq-band" data-marquee aria-label="محصولات کینیوا">
  <div class="marq-in">${items}</div>
</div>`;
};

const quickCats = (): string => `
<section class="quick-cats"><div class="wrap">
  ${sectionHead('دسته‌بندی', 'از کجا شروع کنیم؟', 'روی هر دسته بزن تا صفحهٔ کاملش با قیمت و جزئیات باز شود.', false, { href: 'products/', label: 'همهٔ محصولات' })}
  <div class="cat-rail">
    ${CATEGORIES.map(
      (c) => `<a class="cat-tile rv" href="${c.slug}" data-tilt>
        <img src="${c.image}" alt="${c.title}" loading="lazy" width="300" height="300">
        <span class="ct-body"><b>${c.title}</b><i>${c.en}</i></span>
        <span class="ct-note">${c.note}</span>
      </a>`,
    ).join('')}
  </div>
</div></section>`;

/* ── فصل‌های افقی: با اسکرول پایین، قصه از راست به چپ جلو می‌رود ──────── */
const STORY = [
  {
    art: 'design' as const,
    k: '۰۱',
    title: 'انتخاب می‌کنی',
    text: 'کاتالوگ را باز می‌کنی و دقیقاً همان چیزی را که می‌خواهی پیدا می‌کنی؛ بدون قیمت نامشخص و بدون «در دایرکت بپرسید».',
  },
  {
    art: 'support' as const,
    k: '۰۲',
    title: 'تیکت می‌زنی',
    text: 'در دیسکورد کینیوا یک تیکت باز می‌کنی؛ پشتیبانی جواب می‌دهد، موجودی و زمان تحویل همان‌جا تثبیت می‌شود.',
  },
  {
    art: 'pay' as const,
    k: '۰۳',
    title: 'ریالی پرداخت می‌کنی',
    text: 'فاکتور می‌گیری و مبلغ را ریالی واریز می‌کنی. هیچ کارت خارجی و هیچ واسطه‌ای در کار نیست.',
  },
  {
    art: 'delivery' as const,
    k: '۰۴',
    title: 'تحویل می‌گیری',
    text: 'در بازهٔ اعلام‌شدهٔ همان محصول — بین ۱ تا ۴۸ ساعت — سفارش تحویل می‌شود و تیکت تا رضایتت باز می‌ماند.',
  },
];

const story = (): string => `
<section class="story" id="story">
  <div class="story-pin">
    <div class="wrap story-head">
      <span class="eyebrow">قصهٔ یک سفارش</span>
      <h2 class="sec split">چهار قدم تا تحویل، بدون هیچ ابهامی</h2>
    </div>
    <div class="story-track">
      ${STORY.map(
        (s, i) => `<article class="story-card${i === 0 ? ' is-on' : ''}" data-i="${i}">
        <span class="sc-k">${s.k}</span>
        <div class="sc-art">${ART[s.art]}</div>
        <h3>${s.title}</h3>
        <p>${s.text}</p>
      </article>`,
      ).join('')}
      <div class="story-end">
        <span class="se-t">و تمام.</span>
        <p>سفارش بعدی‌ات را از همین‌جا شروع کن.</p>
        <a class="btn btn-gold" href="${DISCORD}" target="_blank" rel="noopener">${icon('discord')} ورود به دیسکورد</a>
      </div>
    </div>
    <div class="wrap story-foot"><div class="story-dots">${STORY.map(
      (_, i) => `<i class="${i === 0 ? 'on' : ''}"></i>`,
    ).join('')}</div><span class="sf-hint">اسکرول کن</span></div>
  </div>
</section>`;

const bestSellers = (): string => {
  const picks = PRODUCTS.filter((p) =>
    ['mc-account', 'donut-million', 'hypixel', 'skyblock', 'logo', 'overlay-best', 'cape', 'anime-art'].includes(p.id),
  );
  const filters: [string, string][] = [
    ['all', 'همه'],
    ['minecraft', 'ماینکرفت'],
    ['donut', 'دونات'],
    ['hypixel', 'هایپیکسل'],
    ['design', 'فتوشاپ'],
    ['overlay', 'اورلی'],
    ['cosmetics', 'کازمتیک'],
    ['cape', 'کیپ'],
  ];
  return `
<section class="best"><div class="wrap">
  ${sectionHead('پرفروش‌ها', 'محصولات پرطرفدار کینیوا', 'قیمت‌ها به تومان و به‌روز است؛ سفارش فقط از طریق تیکت دیسکورد ثبت می‌شود.', false, { href: 'products/', label: 'کاتالوگ کامل' })}
  <div class="filters" id="filters">
    ${filters.map(([f, l], i) => `<button${i === 0 ? ' class="act"' : ''} data-f="${f}">${l}</button>`).join('')}
  </div>
  <div class="grid g4" id="grid">${picks.map((p) => productCard(p, { compact: true })).join('')}</div>
  <div class="center-cta"><a class="btn btn-ghost" href="products/">مشاهدهٔ همهٔ ۱۸ محصول ${icon('arrow')}</a></div>
</div></section>`;
};

/* ── بخش «بی‌پرده»: بیانیهٔ کوتاه + جدول مشخصات ───────────────────────── */
const statement = (): string => `
<section class="statement">
  <div class="st-orb" data-par="-0.08" aria-hidden="true">${ART.secure}</div>
  <div class="wrap st-in">
    <span class="eyebrow">تعهد کینیوا</span>
    <h2 class="st-h split">هیچ چیز پنهان نیست؛ نه قیمت، نه زمان تحویل.</h2>
    <p class="st-p">همهٔ چیزهایی که یک فروشگاه باید شفاف بگوید، در همین چهار خط خلاصه شده است.</p>
    <div class="spec-list">
      <div class="spec-row rv"><span>بازهٔ تحویل</span><b>۱ تا ۴۸ ساعت</b><i>${icon('bolt')}</i></div>
      <div class="spec-row rv"><span>روش پرداخت</span><b>ریالی، با فاکتور</b><i>${icon('card')}</i></div>
      <div class="spec-row rv"><span>ضمانت</span><b>بازگشت کامل وجه</b><i>${icon('shield')}</i></div>
      <div class="spec-row rv"><span>پشتیبانی</span><b>۲۴/۷ در دیسکورد</b><i>${icon('clock')}</i></div>
    </div>
  </div>
</section>`;

const trustRow = (): string => `
<section class="tight"><div class="wrap"><div class="grid g4">
  ${artCard('delivery', 'تحویل سریع', 'بیشتر سفارش‌ها ۱ تا ۲۴ ساعت و حداکثر تا ۴۸ ساعت تحویل داده می‌شوند.')}
  ${artCard('pay', 'پرداخت ریالی', 'بدون کارت خارجی؛ مبلغ را ریالی پرداخت می‌کنید و فاکتور می‌گیرید.')}
  ${artCard('shield', 'ضمانت بازگشت وجه', 'اگر تحویل انجام نشود، مبلغ به‌صورت کامل بازگردانده می‌شود.')}
  ${artCard('support', 'پشتیبانی ۲۴/۷', 'تیم پشتیبانی همیشه در دیسکورد آنلاین است؛ تیکت بزنید و پاسخ بگیرید.')}
</div></div></section>`;

const steps = (): string => `
<section class="steps-sec"><div class="wrap">
  ${sectionHead('فقط ۴ قدم', 'چطور سفارش بدهیم؟')}
  <div class="steps">
    ${[
      ['ورود به دیسکورد', 'وارد سرور کینیوا شاپ شوید؛ لینک دعوت ثابت و عمومی است.'],
      ['ثبت تیکت', 'در چنل تیکت، محصول و مقدار مورد نظرتان را بنویسید.'],
      ['پرداخت ریالی', 'فاکتور و مبلغ نهایی اعلام می‌شود و ریالی پرداخت می‌کنید.'],
      ['تحویل و پشتیبانی', 'در بازهٔ اعلام‌شده تحویل می‌گیرید و تا پایان همراهتان هستیم.'],
    ]
      .map(([t, d], i) => `<div class="step rv"><span class="num">${i + 1}</span><h3>${t}</h3><p>${d}</p></div>`)
      .join('')}
  </div>
  <div class="center-cta"><a class="btn btn-ghost" href="process/">راهنمای کامل سفارش ${icon('arrow')}</a></div>
</div></section>`;

const TESTIMONIALS = [
  {
    name: 'آرمان',
    role: 'بازیکن دونات اس ام پی',
    text: 'دو بار پول دونات گرفتم، هر دو بار زیر ۲۴ ساعت تحویل شد. پشتیبانی هم توی تیکت سریع جواب داد.',
    initials: 'آ',
  },
  {
    name: 'سارا',
    role: 'استریمر تویچ',
    text: 'پک اورلی رو با هماهنگی برند خودم گرفتم؛ دقیقاً همون چیزی بود که می‌خواستم و دو بار بازنگری رایگان داشت.',
    initials: 'س',
  },
  {
    name: 'مهدی',
    role: 'ادمین سرور',
    text: 'برای سرور لوگو و بنر سفارش دادم. سه پیشنهاد اولیه دادند و تا نتیجهٔ نهایی اصلاح کردند.',
    initials: 'م',
  },
];

const testimonials = (): string => `
<section class="reviews"><div class="wrap">
  ${sectionHead('نظر مشتری‌ها', 'کینیوا از زبان خریدارها')}
  <div class="grid g3">
    ${TESTIMONIALS.map(
      (t) => `<figure class="review rv" data-tilt>
        <div class="stars">${Array.from({ length: 5 }, () => icon('star')).join('')}</div>
        <blockquote>${t.text}</blockquote>
        <figcaption><span class="ava">${t.initials}</span><span><b>${t.name}</b><i>${t.role}</i></span></figcaption>
      </figure>`,
    ).join('')}
  </div>
</div></section>`;

const blogTeaser = (): string => `
<section class="blog-teaser"><div class="wrap">
  ${sectionHead('وبلاگ کینیوا', 'راهنما و مقالات', 'چیزهایی که قبل از خرید باید بدانی.')}
  <div class="grid g3">
    ${BLOG_POSTS.map(
      (b) => `<a class="bcard rv" href="${b.slug}">
        <img src="${b.image}" alt="${b.title}" loading="lazy" width="1280" height="720">
        <div class="body"><span class="bmeta"><b>${b.tag}</b> · ${b.time}</span>
          <h3>${b.title}</h3><p>${b.desc}</p><span class="more">ادامهٔ مطلب ${icon('arrow')}</span></div>
      </a>`,
    ).join('')}
  </div>
</div></section>`;

export const homePage = (): string => `
${heroSlider()}
${productMarquee()}
${quickCats()}
${story()}
${bestSellers()}
${statement()}
${trustRow()}
<div class="wrap">${statStrip()}</div>
${steps()}
${testimonials()}
${blogTeaser()}
<section class="home-faq"><div class="wrap">
  ${sectionHead('سوالات متداول', 'سؤال‌های پرتکرار')}
  ${faqList(FAQ_ITEMS)}
  <div class="center-cta"><a class="btn btn-ghost" href="faq/">همهٔ سوالات ${icon('arrow')}</a></div>
</div></section>
${ctaBand('سفارش را در دیسکورد ثبت کن', 'کافی است در سرور کینیوا شاپ تیکت بزنی؛ بقیه‌اش با ما.')}`;
