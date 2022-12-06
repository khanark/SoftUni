import { html } from '../../node_modules/lit-html/lit-html.js';
import { getOwnBooks } from '../api/dataService.js';
import { bookComponent } from '../component/component.js';

const myBooksTemplate = books => html`
  <section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    <!-- Display ul: with list-items for every user's books (if any) -->
    ${!books.length
      ? html`<p class="no-books">No books in database!</p>`
      : html` <ul class="my-books-list">
          ${books.map(bookComponent)}
        </ul>`}
  </section>
`;

export const myBooksView = async ctx => {
  const books = await getOwnBooks(ctx.user._id);
  ctx.renderContent(myBooksTemplate(books));
};
