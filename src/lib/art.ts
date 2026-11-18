/**
 * art.ts — دستهٔ تصویرسازی‌های برداری کینیوا.
 *
 * هر آیتم یک SVG پرجزئیات (نه عکس محصول) است؛ برای جاهایی که مفهوم را باید
 * نشان دهیم نه یک محصول مشخص را. خط‌های نازک، گرادیان طلایی، هاشور و نقطه‌های
 * ریز تا در سایز ۱۴۰ تا ۲۴۰ پیکسل هم «آیکن» بماند و هم جزئیات داشته باشد.
 */

const GOLD = '#f8c000';
const GOLD_HI = '#ffe27a';
const GOLD_LO = '#b27a00';

const wrap = (_id: string, inner: string, extra = ''): string =>
  `<svg class="art-svg" viewBox="0 0 240 240" role="img" aria-hidden="true" fill="none" ${extra} xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

const glow = (id: string): string => `
  <defs>
    <radialGradient id="${id}-gl" cx="50%" cy="46%" r="52%">
      <stop offset="0" stop-color="${GOLD}" stop-opacity=".22"/>
      <stop offset=".62" stop-color="${GOLD}" stop-opacity=".07"/>
      <stop offset="1" stop-color="${GOLD}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="${id}-g" x1="0" y1="0" x2=".35" y2="1">
      <stop offset="0" stop-color="${GOLD_HI}"/>
      <stop offset=".48" stop-color="${GOLD}"/>
      <stop offset="1" stop-color="${GOLD_LO}"/>
    </linearGradient>
    <linearGradient id="${id}-f" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fff" stop-opacity=".10"/>
      <stop offset="1" stop-color="#fff" stop-opacity=".015"/>
    </linearGradient>
    <pattern id="${id}-h" width="7" height="7" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="7" stroke="${GOLD}" stroke-opacity=".24" stroke-width="1"/>
    </pattern>
    <pattern id="${id}-d" width="9" height="9" patternUnits="userSpaceOnUse">
      <circle cx="1.6" cy="1.6" r="1.05" fill="${GOLD}" fill-opacity=".30"/>
    </pattern>
  </defs>
  <circle cx="120" cy="118" r="106" fill="url(#${id}-gl)"/>`;

/* ───────────────────────────────────────────── ۱. سپر ضمانت + قفل */
const shield = (): string =>
  wrap(
    'ar-shield',
    `${glow('ar-shield')}
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
    <circle cx="120" cy="124" r="4.4" fill="${GOLD}"/>
    <path d="M120 128v9" stroke-width="2.2"/>
    <!-- پرچ‌ها -->
    <circle cx="76" cy="88" r="1.9" fill="${GOLD}" stroke="none"/>
    <circle cx="164" cy="88" r="1.9" fill="${GOLD}" stroke="none"/>
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
  </g>`,
  );

/* ───────────────────────────────────────────── ۲. بازگشت وجه */
const refund = (): string =>
  wrap(
    'ar-refund',
    `${glow('ar-refund')}
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
  </g>`,
  );

/* ───────────────────────────────────────────── ۳. پشتیبانی ۲۴/۷ */
const support = (): string =>
  wrap(
    'ar-support',
    `${glow('ar-support')}
  <g stroke="url(#ar-support-g)" stroke-linecap="round" stroke-linejoin="round">
    <!-- هدست -->
    <path d="M62 136v-16a58 58 0 0 1 116 0v16" stroke-width="2.6"/>
    <rect x="48" y="130" width="26" height="44" rx="12" fill="url(#ar-support-f)" stroke-width="2.2"/>
    <rect x="166" y="130" width="26" height="44" rx="12" fill="url(#ar-support-f)" stroke-width="2.2"/>
    <path d="M74 152c0 18 12 28 28 30" stroke-width="2.2"/>
    <rect x="98" y="176" width="20" height="11" rx="5.5" fill="${GOLD}" stroke="none"/>
    <!-- حباب گفتگو -->
    <path d="M120 66c22 0 38 13 38 30s-16 30-38 30c-4 0-8-.4-11-1l-14 8 3-13c-10-5-16-14-16-24 0-17 16-30 38-30Z"
          fill="#0d0e13" stroke-width="2.2"/>
    <g stroke-width="1.8">
      <circle cx="104" cy="96" r="2.4" fill="${GOLD}" stroke="none"/>
      <circle cx="120" cy="96" r="2.4" fill="${GOLD}" stroke="none"/>
      <circle cx="136" cy="96" r="2.4" fill="${GOLD}" stroke="none"/>
    </g>
    <!-- موج صدا -->
    <g stroke-width="1.8" stroke-opacity=".75">
      <path d="M196 150a22 22 0 0 1 0 20"/>
      <path d="M206 142a34 34 0 0 1 0 36" stroke-opacity=".45"/>
      <path d="M44 150a22 22 0 0 0 0 20"/>
      <path d="M34 142a34 34 0 0 0 0 36" stroke-opacity=".45"/>
    </g>
    <circle cx="120" cy="118" r="98" fill="url(#ar-support-h)" stroke="none" opacity=".22"/>
  </g>`,
  );

/* ───────────────────────────────────────────── ۴. پرداخت ریالی */
const pay = (): string =>
  wrap(
    'ar-pay',
    `${glow('ar-pay')}
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
  </g>`,
  );

/* ───────────────────────────────────────────── ۵. ارسال سریع */
const delivery = (): string =>
  wrap(
    'ar-delivery',
    `${glow('ar-delivery')}
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
  </g>`,
  );

/* ───────────────────────────────────────────── ۶. امنیت حساب */
const secure = (): string =>
  wrap(
    'ar-secure',
    `${glow('ar-secure')}
  <g stroke="url(#ar-secure-g)" stroke-linecap="round" stroke-linejoin="round">
    <!-- شش‌ضلعی -->
    <path d="M120 30 196 72v88l-76 42-76-42V72Z" fill="url(#ar-secure-f)" stroke-width="2.4"/>
    <path d="M120 46 182 80v72l-62 34-62-34V80Z" stroke-width="1.1" stroke-opacity=".4" stroke-dasharray="2 7"/>
    <!-- قفل بزرگ -->
    <rect x="94" y="112" width="52" height="44" rx="10" fill="#0d0e13" stroke-width="2.4"/>
    <path d="M104 112v-13a16 16 0 0 1 32 0v13" stroke-width="2.4"/>
    <circle cx="120" cy="130" r="5.4" fill="${GOLD}"/>
    <path d="M120 135v10" stroke-width="2.4"/>
    <!-- مدارها -->
    <g stroke-width="1.3" stroke-opacity=".6">
      <path d="M76 92h14v-14M164 92h-14V78M76 152h14v14M164 152h-14v14"/>
      <circle cx="90" cy="78" r="2.2" fill="${GOLD}" stroke="none"/>
      <circle cx="150" cy="78" r="2.2" fill="${GOLD}" stroke="none"/>
      <circle cx="90" cy="166" r="2.2" fill="${GOLD}" stroke="none"/>
      <circle cx="150" cy="166" r="2.2" fill="${GOLD}" stroke="none"/>
    </g>
    <path d="M120 30 196 72v88l-76 42-76-42V72Z" fill="url(#ar-secure-d)" stroke="none" opacity=".3"/>
  </g>`,
  );

/* ───────────────────────────────────────────── ۷. طراحی / فتوشاپ */
const design = (): string =>
  wrap(
    'ar-design',
    `${glow('ar-design')}
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
      <circle cx="192" cy="70" r="9" fill="${GOLD}" fill-opacity=".85" stroke="none"/>
      <circle cx="192" cy="94" r="9" stroke-opacity=".8"/>
      <circle cx="192" cy="118" r="9" stroke-opacity=".8"/>
    </g>
    <path d="M30 186h108" stroke-width="1.2" stroke-opacity=".3"/>
    <circle cx="120" cy="118" r="100" fill="url(#ar-design-d)" stroke="none" opacity=".22"/>
  </g>`,
  );

/* ───────────────────────────────────────────── ۸. اورلی استریم */
const overlay = (): string =>
  wrap(
    'ar-overlay',
    `${glow('ar-overlay')}
  <g stroke="url(#ar-overlay-g)" stroke-linecap="round" stroke-linejoin="round">
    <!-- مانیتور -->
    <rect x="34" y="58" width="172" height="112" rx="12" fill="url(#ar-overlay-f)" stroke-width="2.4"/>
    <path d="M96 188h48M120 170v18" stroke-width="2.2"/>
    <!-- فریم وب‌کم -->
    <rect x="128" y="118" width="62" height="40" rx="8" fill="#0d0e13" stroke-width="2"/>
    <circle cx="159" cy="138" r="9" stroke-width="1.8"/>
    <circle cx="159" cy="138" r="3.4" fill="${GOLD}" stroke="none"/>
    <!-- چت‌باکس -->
    <g stroke-width="1.4" stroke-opacity=".8">
      <rect x="48" y="118" width="66" height="8" rx="4"/>
      <rect x="48" y="132" width="48" height="8" rx="4" stroke-opacity=".6"/>
      <rect x="48" y="146" width="56" height="8" rx="4" stroke-opacity=".4"/>
    </g>
    <!-- هدر استریم -->
    <rect x="48" y="74" width="40" height="10" rx="5" fill="${GOLD}" stroke="none" opacity=".9"/>
    <rect x="96" y="74" width="22" height="10" rx="5" stroke-width="1.4" stroke-opacity=".7"/>
    <circle cx="190" cy="79" r="5" fill="#ff4d4d" stroke="none"/>
    <!-- نوار پیشرفت -->
    <path d="M48 104h120" stroke-width="3" stroke-opacity=".25"/>
    <path d="M48 104h74" stroke-width="3"/>
    <circle cx="120" cy="118" r="102" fill="url(#ar-overlay-h)" stroke="none" opacity=".2"/>
  </g>`,
  );

/* ───────────────────────────────────────────── ۹. انجمن / دیسکورد */
const community = (): string =>
  wrap(
    'ar-community',
    `${glow('ar-community')}
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
  </g>`,
  );

export const ART = {
  shield: shield(),
  refund: refund(),
  support: support(),
  pay: pay(),
  delivery: delivery(),
  secure: secure(),
  design: design(),
  overlay: overlay(),
  community: community(),
} as const;

export type ArtName = keyof typeof ART;

/** پنل تصویرسازی: SVG + یک برچسب کوچک، بدون کادر و بدون عکس محصول. */
export const artPanel = (name: ArtName, label = ''): string => `
<figure class="art-panel">
  ${ART[name]}
  ${label ? `<figcaption>${label}</figcaption>` : ''}
</figure>`;

/** کارت امتیاز با تصویرسازی پرجزئیات (جای کارت آیکن ساده) */
export const artCard = (name: ArtName, title: string, text: string): string => `
<article class="art-card rv">
  <div class="ac-art">${ART[name]}</div>
  <h3>${title}</h3>
  <p>${text}</p>
</article>`;
