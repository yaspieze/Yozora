import './main.css';
import { renderFooter } from './lib/layout';
import { renderLayout } from './lib/layout';
import { initInteractions } from './lib/interactions';
import { pages } from './pages';

const slug = document.body.dataset.page ?? 'index';
const active = document.body.dataset.active ?? slug;
const app = document.getElementById('app');

if (app) {
  const render = pages[slug] ?? pages.index;
  app.innerHTML = `${renderLayout(active)}${render()}</main>${renderFooter()}`;
  document.body.dataset.ready = '1';
  initInteractions();
} else {
  console.error('[kiniwa] #app not found');
}
