const a=(t,s,e)=>`
  <a class="splash-btn" href="${t}" aria-label="${e}">
    <picture>
      <source srcset="${s}.webp" type="image/webp">
      <img src="${s}.png" alt="${e}" width="2520" height="1080" fetchpriority="high" decoding="async">
    </picture>
  </a>`,i=`
<button class="theme-btn splash-theme" data-theme-btn type="button" aria-label="حالت روشن و تیره" aria-pressed="false" title="تغییر حالت نمایش">
  <span class="tb-ico tb-sun" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.6v2.2M12 19.2v2.2M2.6 12h2.2M19.2 12h2.2M5.4 5.4l1.6 1.6M17 17l1.6 1.6M18.6 5.4L17 7M7 17l-1.6 1.6"/></svg></span>
  <span class="tb-ico tb-moon" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.5A8.2 8.2 0 0 1 9.5 4a8.3 8.3 0 1 0 10.5 10.5Z"/></svg></span>
</button>`,n=()=>`${i}
<div class="splash">
  <div class="splash-intro">
    <p class="splash-kicker">یوزورا شاپ، معتبرترین فروشگاه محصولات دیجیتال</p>
    <h1 class="splash-title">فروشگاه خود را انتخاب کنید</h1>
  </div>
  <div class="splash-list">
    ${a("minecraft/","assets/img/banner-minecraft","ورود به فروشگاه محصولات ماینکرفت")}
  </div>
</div>`;export{n as splashPage};
