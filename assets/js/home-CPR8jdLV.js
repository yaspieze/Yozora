const s=(t,e,a,i=!1)=>`
  <a class="splash-btn" href="${t}" aria-label="${a}">
    <picture>
      <source srcset="${e}.webp" type="image/webp">
      <img src="${e}.png" alt="${a}" width="2520" height="1080"
           ${i?'fetchpriority="high"':'loading="lazy"'} decoding="async">
    </picture>
  </a>`,n=()=>`
<div class="splash">
${s("minecraft/","assets/img/banner-minecraft","ورود به فروشگاه محصولات ماینکرفت",!0)}
${s("hosting/","assets/img/banner-hosting","ورود به بخش سرور و هاستینگ")}
${s("others/","assets/img/banner-others","ورود به فروشگاه محصولات دیگر")}
</div>`;export{n as splashPage};
