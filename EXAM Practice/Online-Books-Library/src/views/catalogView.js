import { html } from '../../node_modules/lit-html/lit-html.js';
import { catalog } from '../api/dataService.js';
import { bookComponent } from '../component/component.js';

const catalogTemplate = books => html`
  <section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <!-- Display ul: with list-items for All books (If any) -->
    ${!books.length
      ? html`<p class="no-books">No books in database!</p>`
      : html`<ul class="other-books-list">
          <!-- books go here -->
          ${books.map(bookComponent)}
        </ul>`}
    <!-- Display paragraph: If there are no books in the database -->
  </section>
`;

export const catalogView = async ctx => {
  const books = await catalog();
  ctx.renderContent(catalogTemplate(books));
};
