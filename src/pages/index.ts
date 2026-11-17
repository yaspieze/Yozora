import { bodies } from '../data/bodies';
import { homePage } from './home';

export const pages: Record<string, () => string> = {
  index: homePage,
};

for (const [slug, html] of Object.entries(bodies)) {
  pages[slug] = () => html;
}
