import './main.css';
import { renderFooter, renderLayout } from './lib/layout';
import { initInteractions } from './lib/interactions';
import { injectJsonLd } from './lib/seo';
import { pages } from './pages';
import { productPage } from './pages/product';

const body = document.body;
const slug = body.dataset.page ?? 'index';
const active = body.dataset.active ?? slug;
const app = document.getElementById('app');

if (app) {
  const productId = body.dataset.product;
  const render = productId ? () => productPage(productId) : (pages[slug] ?? pages.index);
  app.innerHTML = `${renderLayout(active)}${render()}</main>${renderFooter()}`;
  initInteractions();
  injectJsonLd(slug, productId);
} else {
  console.error('[kiniwa] #app not found');
}
