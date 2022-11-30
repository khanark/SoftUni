import { html } from '../../node_modules/lit-html/lit-html.js';

// *** create the componen here and late use it to create the templates ***

export const component = item => html`
  <!-- *** html goes here *** -->
  <div class="allGames">
    <div class="allGames-info">
      <img src=${item.imageUrl} />
      <h6>${item.category}</h6>
      <h2>${item.title}</h2>
      <a href="/details/${item._id}" class="details-button">Details</a>
    </div>
  </div>
`;
