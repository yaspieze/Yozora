import { CATEGORIES, DISCORD, FAQ_ITEMS, PRODUCTS } from '../data/catalog';
import { DETAILS } from '../data/details';

const SITE = 'https://yaspieze.github.io/kiniwa';

const script = (data: unknown): void => {
  const el = document.createElement('script');
  el.type = 'application/ld+json';
  el.textContent = JSON.stringify(data);
  document.head.appendChild(el);
};

export function injectJsonLd(slug: string, productId?: string): void {
  script({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'یوزورا شاپ',
    alternateName: 'Yozora Shop',
    url: `${SITE}/`,
    logo: `${SITE}/assets/img/logo.png`,
    sameAs: [DISCORD],
    description: 'فروشگاه گیمینگ یوزورا؛ اکانت ماینکرفت، پول دونات اس ام پی، هایپیکسل، خدمات فتوشاپ، اورلی استریم، کازمتیک و کیپ اپتیفاین.',
  });

  if (productId) {
    const p = PRODUCTS.find((x) => x.id === productId);
    if (p) {
      const detail = DETAILS[p.id];
      script({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: p.title,
        description: detail?.long ?? p.desc,
        image: `${SITE}/${p.image}`,
        brand: { '@type': 'Brand', name: 'یوزورا شاپ' },
        offers: {
          '@type': 'Offer',
          priceCurrency: p.price.includes('تومان') ? 'IRR' : undefined,
          price: p.price.replace(/[^۰-۹0-9]/g, '') || undefined,
          availability: 'https://schema.org/InStock',
          url: `${SITE}/product/${p.id}/`,
          seller: { '@type': 'Organization', name: 'یوزورا شاپ' },
        },
      });
    }
  }

  if (slug === 'faq' || slug === 'index') {
    script({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: FAQ_ITEMS.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }

  if (slug === 'products') {
    script({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: [...PRODUCTS, ...CATEGORIES.map(() => null)].filter(Boolean).map((p, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: (p as { title: string }).title,
        url: `${SITE}/product/${(p as { id: string }).id}/`,
      })),
    });
  }
}
