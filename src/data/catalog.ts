export type Tone = 'gold' | 'green' | 'blue' | 'plain';

export interface Pill {
  text: string;
  tone?: Tone;
}

export interface Product {
  id: string;
  title: string;
  category: CategoryKey;
  image: string;
  desc: string;
  priceLabel: string;
  price: string;
  pills: Pill[];
  href: string;
  ask?: boolean;
  badge?: string;
}

export type CategoryKey =
  | 'minecraft'
  | 'donut'
  | 'hypixel'
  | 'design'
  | 'overlay'
  | 'cosmetics'
  | 'cape';

export interface Category {
  key: CategoryKey;
  slug: string;
  title: string;
  short: string;
  image: string;
  note: string;
}

export const DISCORD = 'https://discord.gg/KHsEBj6kG3';

export const CATEGORIES: Category[] = [
  {
    key: 'minecraft',
    slug: 'cat-minecraft.html',
    title: 'اکانت ماینکرفت',
    short: 'فول اکسس، جاوا و بدراک',
    image: 'assets/img/products/p-minecraft-account.jpg',
    note: 'تحویل تا ۴۸ ساعت',
  },
  {
    key: 'donut',
    slug: 'cat-donut.html',
    title: 'پول دونات اس ام پی',
    short: 'هر میلیون ۴٬۰۰۰ تومان',
    image: 'assets/img/products/p-donut-million.jpg',
    note: 'موجودی ۳۰۰ میلیون',
  },
  {
    key: 'hypixel',
    slug: 'cat-hypixel.html',
    title: 'هایپیکسل و اسکای‌بلاک',
    short: 'رنک، کوین و بوستر',
    image: 'assets/img/products/p-hypixel.jpg',
    note: 'تحویل ۱ تا ۲۴ ساعت',
  },
  {
    key: 'design',
    slug: 'cat-design.html',
    title: 'خدمات فتوشاپ',
    short: 'لوگو، بنر، تامنیل، اسکین',
    image: 'assets/img/products/p-logo.jpg',
    note: 'از ۲۰۰٬۰۰۰ تومان',
  },
  {
    key: 'overlay',
    slug: 'cat-overlay.html',
    title: 'اورلی استریم',
    short: 'پک کامل + فونت اختصاصی',
    image: 'assets/img/products/p-overlay-good.jpg',
    note: 'از ۲۴۵٬۰۰۰ تومان',
  },
  {
    key: 'cosmetics',
    slug: 'cat-cosmetics.html',
    title: 'کازمتیک',
    short: 'هاله، بال، کلاه',
    image: 'assets/img/products/p-cosmetics.jpg',
    note: 'قیمت دلاری آیتم',
  },
  {
    key: 'cape',
    slug: 'cat-cape.html',
    title: 'کیپ اپتیفاین',
    short: 'اختصاصی روی اکانت شما',
    image: 'assets/img/products/p-cape.jpg',
    note: '۳۲۹٬۰۰۰ تومان',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'mc-account',
    title: 'اکانت ماینکرفت اقتصادی',
    category: 'minecraft',
    image: 'assets/img/products/p-minecraft-account.jpg',
    desc: 'اکانت کامل با فول اکسس برای جاوا و بدراک؛ اطلاعات هم قابل تغییر است.',
    priceLabel: 'قیمت',
    price: '۲٬۲۴۹٬۰۰۰ تومان',
    pills: [{ text: 'فول اکسس', tone: 'green' }, { text: 'جاوا + بدراک' }, { text: 'تغییر اطلاعات', tone: 'gold' }],
    href: 'p-mc-account.html',
    badge: 'پرفروش',
  },
  {
    id: 'mc-priority',
    title: 'اکانت با اولویت تحویل',
    category: 'minecraft',
    image: 'assets/img/products/p-skin-pro.jpg',
    desc: 'ثبت سفارش با اولویت در تیکت برای تحویل در کمترین زمان.',
    priceLabel: 'قیمت',
    price: '۲٬۲۴۹٬۰۰۰ تومان',
    pills: [{ text: 'اولویت', tone: 'green' }, { text: 'فول اکسس' }],
    href: 'p-mc-priority.html',
  },
  {
    id: 'donut-million',
    title: 'پول دونات — هر میلیون',
    category: 'donut',
    image: 'assets/img/products/p-donut-million.jpg',
    desc: 'حداقل خرید ۵۰ میلیون؛ موجودی فعلی سرور ۳۰۰ میلیون.',
    priceLabel: 'هر میلیون',
    price: '۴٬۰۰۰ تومان',
    pills: [{ text: 'موجودی ۳۰۰M', tone: 'green' }, { text: 'حداقل ۵۰M' }, { text: 'تحویل ۴۸h', tone: 'gold' }],
    href: 'p-donut-million.html',
    badge: 'تخفیف حجمی',
  },
  {
    id: 'hypixel',
    title: 'محصولات هایپیکسل',
    category: 'hypixel',
    image: 'assets/img/products/p-hypixel.jpg',
    desc: 'همهٔ آیتم‌های موجود؛ قیمت وابسته به دلار روز.',
    priceLabel: 'قیمت',
    price: 'استعلام در تیکت',
    pills: [{ text: '۱ تا ۲۴ ساعت', tone: 'green' }, { text: 'امن و قانونی' }],
    href: 'p-hypixel.html',
    ask: true,
  },
  {
    id: 'skyblock',
    title: 'کوین اسکای‌بلاک — هر میلیون',
    category: 'hypixel',
    image: 'assets/img/products/p-skyblock.jpg',
    desc: 'کوین اسکای‌بلاک با تحویل ۱ تا ۷۲ ساعت.',
    priceLabel: 'هر میلیون',
    price: '۶٬۰۰۰ تومان',
    pills: [{ text: '۷۲ ساعت', tone: 'green' }, { text: 'قیمت میلیونی' }],
    href: 'p-skyblock.html',
  },
  {
    id: 'logo',
    title: 'طراحی لوگو',
    category: 'design',
    image: 'assets/img/products/p-logo.jpg',
    desc: 'لوگوی اختصاصی برای سرور یا کانال شما؛ سه پیشنهاد اولیه.',
    priceLabel: 'قیمت',
    price: '۳۰۰٬۰۰۰ تومان',
    pills: [{ text: 'اختصاصی', tone: 'green' }],
    href: 'p-logo.html',
  },
  {
    id: 'banner-simple',
    title: 'بنر ساده',
    category: 'design',
    image: 'assets/img/products/p-logo.jpg',
    desc: 'بنر مناسب دیسکورد و شبکه‌های اجتماعی.',
    priceLabel: 'قیمت',
    price: '۳۵۰٬۰۰۰ تومان',
    pills: [{ text: 'ساده' }],
    href: 'p-banner-simple.html',
  },
  {
    id: 'banner-pro',
    title: 'بنر حرفه‌ای',
    category: 'design',
    image: 'assets/img/products/p-logo.jpg',
    desc: 'نسخهٔ کامل با جزئیات و بازنگری بیشتر.',
    priceLabel: 'قیمت',
    price: '۵۰۰٬۰۰۰ تومان',
    pills: [{ text: 'حرفه‌ای', tone: 'green' }],
    href: 'p-banner-pro.html',
  },
  {
    id: 'thumbnail-simple',
    title: 'تامنیل یوتیوب (ساده)',
    category: 'design',
    image: 'assets/img/products/p-logo.jpg',
    desc: 'تامنیل کلیک‌خور برای ویدیوهای گیمینگ.',
    priceLabel: 'قیمت',
    price: '۲۰۰٬۰۰۰ تومان',
    pills: [{ text: 'ساده' }],
    href: 'p-thumbnail-simple.html',
  },
  {
    id: 'thumbnail-pro',
    title: 'تامنیل یوتیوب (حرفه‌ای)',
    category: 'design',
    image: 'assets/img/products/p-logo.jpg',
    desc: 'نسخهٔ حرفه‌ای با ترکیب‌بندی قوی‌تر.',
    priceLabel: 'قیمت',
    price: '۳۰۰٬۰۰۰ تومان',
    pills: [{ text: 'حرفه‌ای', tone: 'green' }],
    href: 'p-thumbnail-pro.html',
  },
  {
    id: 'skin-simple',
    title: 'اسکین ماینکرفت (ساده)',
    category: 'design',
    image: 'assets/img/products/p-skin-pro.jpg',
    desc: 'اسکین اختصاصی آمادهٔ آپلود.',
    priceLabel: 'قیمت',
    price: '۲۴۵٬۰۰۰ تومان',
    pills: [{ text: 'ساده' }],
    href: 'p-skin-simple.html',
  },
  {
    id: 'skin-pro',
    title: 'اسکین ماینکرفت (حرفه‌ای)',
    category: 'design',
    image: 'assets/img/products/p-skin-pro.jpg',
    desc: 'اسکین با جزئیات و سایه‌پردازی بیشتر.',
    priceLabel: 'قیمت',
    price: '۳۰۰٬۰۰۰ تومان',
    pills: [{ text: 'حرفه‌ای', tone: 'green' }],
    href: 'p-skin-pro.html',
  },
  {
    id: 'anime-art',
    title: 'انیمه‌آرت',
    category: 'design',
    image: 'assets/img/products/p-anime.jpg',
    desc: 'آرت انیمه‌استایل در سه سطح کیفیت.',
    priceLabel: 'از',
    price: '۲۵۰٬۰۰۰ تومان',
    pills: [{ text: '۳ سطح', tone: 'gold' }],
    href: 'p-anime-art.html',
  },
  {
    id: 'overlay-good',
    title: 'اورلی استریم — کیفیت خوب',
    category: 'overlay',
    image: 'assets/img/products/p-overlay-good.jpg',
    desc: 'پک اورلی شامل فریم وب‌کم، چت‌باکس و هشدارها.',
    priceLabel: 'قیمت',
    price: '۲۴۵٬۰۰۰ تومان',
    pills: [{ text: 'کیفیت خوب' }],
    href: 'p-overlay-good.html',
  },
  {
    id: 'overlay-best',
    title: 'اورلی استریم — کیفیت عالی',
    category: 'overlay',
    image: 'assets/img/products/p-overlay-good.jpg',
    desc: 'نسخهٔ کامل و پرجزئیات با هماهنگی کامل با برند شما.',
    priceLabel: 'قیمت',
    price: '۳۰۰٬۰۰۰ تومان',
    pills: [{ text: 'کیفیت عالی', tone: 'green' }],
    href: 'p-overlay-best.html',
  },
  {
    id: 'font-pack',
    title: 'پک فونت اختصاصی',
    category: 'overlay',
    image: 'assets/img/products/p-font.jpg',
    desc: 'پک فونت فارسی/لاتین مناسب اورلی و تامنیل.',
    priceLabel: 'قیمت',
    price: '۱۰۰٬۰۰۰ تومان',
    pills: [{ text: 'پک فونت' }],
    href: 'p-font-pack.html',
  },
  {
    id: 'cosmetics',
    title: 'کازمتیک کلاینت‌های ماینکرفت',
    category: 'cosmetics',
    image: 'assets/img/products/p-cosmetics.jpg',
    desc: 'همهٔ کلاینت‌ها؛ قیمت بر اساس دلاری بودن آیتم.',
    priceLabel: 'قیمت',
    price: 'استعلام در تیکت',
    pills: [{ text: 'همهٔ کلاینت‌ها', tone: 'green' }, { text: 'دلاری', tone: 'gold' }],
    href: 'p-cosmetics.html',
    ask: true,
  },
  {
    id: 'cape',
    title: 'کیپ اپتیفاین',
    category: 'cape',
    image: 'assets/img/products/p-cape.jpg',
    desc: 'کیپ اختصاصی روی اکانت شما؛ برای همهٔ بازیکن‌های سرور قابل مشاهده است.',
    priceLabel: 'قیمت',
    price: '۳۲۹٬۰۰۰ تومان',
    pills: [{ text: 'اختصاصی', tone: 'green' }, { text: '۱ تا ۷۲ ساعت', tone: 'gold' }],
    href: 'p-cape.html',
  },
];

export const BLOG_POSTS = [
  {
    slug: 'blog-minecraft-account.html',
    title: 'راهنمای کامل خرید اکانت ماینکرفت',
    desc: 'تفاوت اکانت فول اکسس و اکانت معمولی، ریسک‌ها و چک‌لیست قبل از خرید.',
    image: 'assets/img/blog-account.jpg',
    tag: 'راهنمای خرید',
    time: '۶ دقیقه',
  },
  {
    slug: 'blog-donut-smp.html',
    title: 'اقتصاد پول دونات اس ام پی چطور کار می‌کند؟',
    desc: 'قیمت هر میلیون، حداقل خرید و بهترین زمان برای خرید حجم بالا.',
    image: 'assets/img/blog-donut.jpg',
    tag: 'دونات اس ام پی',
    time: '۵ دقیقه',
  },
  {
    slug: 'blog-stream-overlay.html',
    title: 'چک‌لیست اورلی استریم حرفه‌ای',
    desc: 'چه اجزایی یک پک اورلی کامل باید داشته باشد و چطور با برند شما هماهنگ شود.',
    image: 'assets/img/blog-overlay.jpg',
    tag: 'استریم',
    time: '۴ دقیقه',
  },
];

export const FAQ_ITEMS = [
  {
    q: 'چطور سفارش ثبت کنم؟',
    a: 'وارد سرور دیسکورد کینیوا شاپ شوید، در کانال تیکت یک تیکت باز کنید و محصول مورد نظر را بنویسید. سفارش شما در صف قرار می‌گیرد و زمان تحویل اعلام می‌شود.',
  },
  {
    q: 'پرداخت چگونه انجام می‌شود؟',
    a: 'همهٔ پرداخت‌ها ریالی و داخل ایران انجام می‌شود؛ نیازی به کارت خارجی یا رمزارز ندارید. فاکتور و رسید هم ارائه می‌شود.',
  },
  {
    q: 'زمان تحویل چقدر است؟',
    a: 'اکانت ماینکرفت تا ۴۸ ساعت، محصولات هایپیکسل ۱ تا ۲۴ ساعت، اسکای‌بلاک تا ۷۲ ساعت و خدمات طراحی بین ۱ تا ۳ روز کاری.',
  },
  {
    q: 'اگر سفارش انجام نشود چه می‌شود؟',
    a: 'اگر به هر دلیلی تحویل انجام نشود، مبلغ به‌صورت کامل بازگردانده می‌شود. شرایط در صفحهٔ ضمانت کامل توضیح داده شده است.',
  },
];
