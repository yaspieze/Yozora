import { bodies } from '../data/bodies';
import { homePage } from './home';
import { productsPage } from './product';

export const pages: Record<string, () => string> = {
  index: homePage,
  products: productsPage,
};

for (const [slug, html] of Object.entries(bodies)) {
  if (slug in pages) continue; // TS-rendered pages win over extracted bodies
  pages[slug] = () => html;
}
