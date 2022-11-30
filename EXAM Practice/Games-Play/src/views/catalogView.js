import { html } from '../../node_modules/lit-html/lit-html.js';
import { catalog } from '../api/dataService.js';
import { component } from '../component/component.js';

const catalogTemplate = articles => html`
  <section id="catalog-page">
    <h1>All Games</h1>
    <!-- Display div: with information about every game (if any) -->
    ${!articles.length ? html`<h3 class="no-articles">No articles yet</h3>` : articles.map(component)}
  </section>
`;

export const catalogView = async ctx => {
  const articles = await catalog();

  ctx.renderContent(catalogTemplate(articles));
};
