import { html } from '../../node_modules/lit-html/lit-html.js';

// *** create the componen here and late use it to create the templates ***

export const bookComponent = book => html`
  <li class="otherBooks">
    <h3>${book.title}</h3>
    <p>Type: ${book.type}</p>
    <p class="img"><img src=${book.imageUrl} /></p>
    <a class="button" href="/details/${book._id}">Details</a>
  </li>
`;
