import { bodies } from '../data/bodies';
import { homePage } from './home';
import { productsPage } from './product';

export const pages: Record<string, () => string> = {
  index: homePage,
  products: productsPage,
};

const prettyLinks = (html: string): string =>
  html
    .replace(/href="index\.html"/g, 'href="./"')
    .replace(/href="((?:cat|blog|p)-[a-z0-9-]+|products|prices|process|guarantee|faq|about|contact|terms)\.html"/g, 'href="$1/"');

for (const [slug, html] of Object.entries(bodies)) {
  if (slug in pages) continue; // TS-rendered pages win over extracted bodies
  pages[slug] = () => prettyLinks(html);
}
