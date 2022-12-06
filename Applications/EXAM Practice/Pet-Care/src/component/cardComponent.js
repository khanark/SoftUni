import { html } from '../../node_modules/lit-html/lit-html.js';

export const cardComponent = card => html`
  <div class="animals-board">
    <img class="animal-image-cover" src=${card.image} />
    <h2 class="name">${card.name}</h2>
    <h3 class="breed">${card.breed}</h3>
    <div class="action">
      <a class="btn" href="/details/${card._id}">Details</a>
    </div>
  </div>
`;
