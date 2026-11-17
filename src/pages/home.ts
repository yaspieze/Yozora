import { BLOG_POSTS, CATEGORIES, DISCORD, FAQ_ITEMS, PRODUCTS } from '../data/catalog';
import { ctaBand, faqList, icon, productCard, sectionHead, statStrip, trustCard } from '../lib/ui';

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
    ghostHref: 'cat-minecraft.html',
    image: 'assets/img/products/p-minecraft-account.jpg',
    tags: ['فول اکسس', 'جاوا + بدراک', 'تغییر اطلاعات'],
  },
  {
    eyebrow: 'دونات اس ام پی',
    title: 'پول دونات از ۴٬۰۰۰ تومان',
    em: 'هر میلیون، بدون واسطه',
    text: 'موجودی فعلی سرور ۳۰۰ میلیون است؛ حداقل خرید ۵۰ میلیون و تحویل مستقیم روی اکانت خودت.',
    primary: 'ثبت سفارش در دیسکورد',
    primaryHref: DISCORD,
    ghost: 'محاسبهٔ قیمت',
    ghostHref: 'cat-donut.html',
    image: 'assets/img/products/p-donut-million.jpg',
    tags: ['موجودی ۳۰۰M', 'حداقل ۵۰M', 'تحویل ۴۸h'],
  },
  {
    eyebrow: 'خدمات گرافیک کینیوا',
    title: 'لوگو، بنر، تامنیل و اورلی',
    em: 'اختصاصی برای استریم تو',
    text: 'از طرح لوگو تا پک کامل اورلی استریم و انیمه‌آرت؛ همه با تحویل ۱ تا ۳ روز کاری.',
    primary: 'ثبت سفارش در دیسکورد',
    primaryHref: DISCORD,
    ghost: 'دیدن خدمات',
    ghostHref: 'cat-design.html',
    image: 'assets/img/products/p-logo.jpg',
    tags: ['لوگو', 'اورلی', 'انیمه‌آرت'],
  },
];

const heroSlider = (): string => `
<section class="hero2">
  <div class="wrap">
    <div class="slider" id="heroSlider">
      ${SLIDES.map(
        (s, i) => `<article class="slide${i === 0 ? ' on' : ''}" data-i="${i}">
        <div class="slide-art"><img src="${s.image}" alt="${s.title}" width="900" height="900" ${i === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}></div>
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
      </article>`,
      ).join('')}
      <button class="slide-nav prev" data-slide="prev" aria-label="قبلی">${icon('chevron')}</button>
      <button class="slide-nav next" data-slide="next" aria-label="بعدی">${icon('chevron')}</button>
      <div class="slider-dots" id="heroDots">${SLIDES.map((_, i) => `<i class="${i === 0 ? 'on' : ''}"></i>`).join('')}</div>
    </div>
  </div>
</section>`;

const quickCats = (): string => `
<section class="quick-cats"><div class="wrap">
  ${sectionHead('دسته‌بندی', 'از کجا شروع کنیم؟', 'روی هر دسته بزن تا صفحهٔ کاملش با قیمت و جزئیات باز شود.')}
  <div class="cat-rail">
    ${CATEGORIES.map(
      (c) => `<a class="cat-tile rv" href="${c.slug}">
        <img src="${c.image}" alt="${c.title}" loading="lazy" width="300" height="300">
        <span class="ct-body"><b>${c.title}</b><i>${c.note}</i></span>
      </a>`,
    ).join('')}
  </div>
</div></section>`;

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
  ${sectionHead('پرفروش‌ها', 'محصولات پرطرفدار کینیوا', 'قیمت‌ها به تومان و به‌روز است؛ سفارش فقط از طریق تیکت دیسکورد ثبت می‌شود.')}
  <div class="filters" id="filters">
    ${filters.map(([f, l], i) => `<button${i === 0 ? ' class="act"' : ''} data-f="${f}">${l}</button>`).join('')}
  </div>
  <div class="grid g4" id="grid">${picks.map((p) => productCard(p, { compact: true })).join('')}</div>
  <div class="center-cta"><a class="btn btn-ghost" href="products.html">مشاهدهٔ همهٔ ۱۷ محصول ${icon('arrow')}</a></div>
</div></section>`;
};

const trustRow = (): string => `
<section class="tight"><div class="wrap"><div class="grid g4">
  ${trustCard('bolt', 'تحویل سریع', 'بیشتر سفارش‌ها ۱ تا ۲۴ ساعت و حداکثر تا ۴۸ ساعت تحویل داده می‌شوند.')}
  ${trustCard('card', 'پرداخت ریالی', 'بدون کارت خارجی؛ مبلغ را ریالی پرداخت می‌کنید و فاکتور می‌گیرید.')}
  ${trustCard('shield', 'ضمانت بازگشت وجه', 'اگر تحویل انجام نشود، مبلغ به‌صورت کامل بازگردانده می‌شود.')}
  ${trustCard('clock', 'پشتیبانی ۲۴/۷', 'تیم پشتیبانی همیشه در دیسکورد آنلاین است؛ تیکت بزنید و پاسخ بگیرید.')}
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
  <div class="center-cta"><a class="btn btn-ghost" href="process.html">راهنمای کامل سفارش ${icon('arrow')}</a></div>
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
${quickCats()}
${bestSellers()}
${trustRow()}
<div class="wrap">${statStrip()}</div>
${steps()}
${blogTeaser()}
<section class="home-faq"><div class="wrap">
  ${sectionHead('سوالات متداول', 'سؤال‌های پرتکرار')}
  ${faqList(FAQ_ITEMS)}
  <div class="center-cta"><a class="btn btn-ghost" href="faq.html">همهٔ سوالات ${icon('arrow')}</a></div>
</div></section>
${ctaBand('سفارش را در دیسکورد ثبت کن', 'کافی است در سرور کینیوا شاپ تیکت بزنی؛ بقیه‌اش با ما.')}`;
