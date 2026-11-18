import { bodies } from '../data/bodies';
import { homePage } from './home';
import { productsPage } from './product';
import { ART, artCard } from '../lib/art';

export const pages: Record<string, () => string> = {
  index: homePage,
  products: productsPage,
};

const prettyLinks = (html: string): string =>
  html
    .replace(/href="index\.html"/g, 'href="./"')
    .replace(/href="((?:cat|blog|p)-[a-z0-9-]+|products|prices|process|guarantee|faq|about|contact|terms)\.html"/g, 'href="$1/"');

/** عکس‌های تزئینی محصول را از صفحه‌های غیرمحصولی برمی‌داریم. */
const stripDecor = (html: string): string =>
  html
    .replace(/<img class="bg" src="assets\/img\/[a-z0-9./-]+"[^>]*>/g, '')
    // مسیر (breadcrumb) دوتایی را یکی می‌کنیم
    .replace(/(<div class="wrap"><div class="crumbs">[\s\S]*?<\/div><\/div>)\s*(?=<div class="wrap"><div class="crumbs">)/g, '');

/** تصویرسازی‌های برداری که جای عکس محصول می‌نشینند. */
const injectArt = (slug: string, html: string): string => {
  let out = html;

  if (slug === 'guarantee') {
    out = out.replace(
      /<img src="assets\/img\/07-cape-optifine\.jpg" alt="ضمانت یوزورا"[^>]*>/,
      `<div class="guar-art">${ART.shield}</div>`,
    );
  }

  const rows: Record<string, string> = {
    guarantee: [
      ['secure', 'امنیت حساب', 'اطلاعات اکانت بعد از تحویل کامل به شما منتقل می‌شود و در اختیار ما نمی‌ماند.'],
      ['refund', 'بازگشت وجه واقعی', 'اگر سفارش انجام نشود، مبلغ بدون بحث و شرط اضافه برمی‌گردد.'],
      ['support', 'پیگیری تا نتیجه', 'تیکت باز می‌ماند تا مطمئن شویم سفارش درست به دستتان رسیده است.'],
    ]
      .map(([k, t, d]) => artCard(k as keyof typeof ART, t, d))
      .join(''),
    about: [
      ['community', 'یک انجمن، نه یک مغازه', 'یوزورا از دل یک انجمن ۷۶۳ نفری بیرون آمده؛ مشتری‌ها همان اعضای انجمن‌اند.'],
      ['delivery', 'تحویل ۱ تا ۴۸ ساعت', 'بازهٔ تحویل هر محصول روی همان صفحه نوشته شده، نه در تبلیغ.'],
      ['pay', 'پرداخت ریالی و فاکتور', 'بدون کارت خارجی؛ فاکتور رسمی برای هر سفارش صادر می‌شود.'],
    ]
      .map(([k, t, d]) => artCard(k as keyof typeof ART, t, d))
      .join(''),
    process: [
      ['support', 'قدم ۱ — تیکت', 'در دیسکورد تیکت می‌زنید و محصول را انتخاب می‌کنید.'],
      ['pay', 'قدم ۲ — پرداخت', 'فاکتور ریالی صادر و پرداخت انجام می‌شود.'],
      ['delivery', 'قدم ۳ — تحویل', 'تحویل در بازهٔ اعلام‌شده و پیگیری تا رضایت شما.'],
    ]
      .map(([k, t, d]) => artCard(k as keyof typeof ART, t, d))
      .join(''),
    prices: [
      ['pay', 'قیمت شفاف', 'قیمت هر محصول روی سایت است؛ عدد نهایی در تیکت تثبیت می‌شود.'],
      ['secure', 'ضمانت معامله', 'پرداخت و تحویل در یک مسیر مشخص و قابل پیگیری انجام می‌شود.'],
      ['refund', 'بدون ریسک', 'اگر تحویل نشود، مبلغ برمی‌گردد.'],
    ]
      .map(([k, t, d]) => artCard(k as keyof typeof ART, t, d))
      .join(''),
    faq: [
      ['support', 'سؤالی داری؟', 'اگر جوابت اینجا نبود، در دیسکورد تیکت بزن؛ زیر چند دقیقه جواب می‌گیری.'],
      ['secure', 'قبل از خرید', 'شرایط ضمانت و بازگشت وجه را قبل از پرداخت بخوان.'],
      ['delivery', 'بعد از خرید', 'زمان تحویل هر محصول در صفحهٔ خودش نوشته شده است.'],
    ]
      .map(([k, t, d]) => artCard(k as keyof typeof ART, t, d))
      .join(''),
    contact: [
      ['community', 'دیسکورد', 'سریع‌ترین راه ارتباط، تیکت در سرور یوزورا شاپ است.'],
      ['support', 'پشتیبانی ۲۴/۷', 'تیم پشتیبانی همیشه آنلاین است؛ حتی نصفه‌شب.'],
      ['pay', 'هماهنگی پرداخت', 'برای فاکتور و تسویه، در همان تیکت هماهنگ می‌کنیم.'],
    ]
      .map(([k, t, d]) => artCard(k as keyof typeof ART, t, d))
      .join(''),
  };

  const row = rows[slug];
  if (row) {
    // بعد از اولین بخش صفحه (هیرو) یک ردیف تصویرسازی اضافه می‌شود
    const i = out.indexOf('</section>');
    if (i > -1) {
      out = `${out.slice(0, i + 10)}
<section class="art-row"><div class="wrap"><div class="grid g3">${row}</div></div></section>${out.slice(i + 10)}`;
    }
  }

  if (slug === 'blog') {
    // تصویر شاخص بلاگ، عکس محصول نیست؛ همان تامنیل اختصاصی هر مطلب می‌ماند
    out = out.replace(/assets\/img\/01-minecraft\.jpg/g, 'assets/img/blog-account.jpg');
    out = out.replace(/assets\/img\/02-donutsmp\.jpg/g, 'assets/img/blog-donut.jpg');
  }

  return out;
};

for (const [slug, html] of Object.entries(bodies)) {
  if (slug in pages) continue; // TS-rendered pages win over extracted bodies
  pages[slug] = () => injectArt(slug, stripDecor(prettyLinks(html)));
}
