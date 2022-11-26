import { html } from '../../node_modules/lit-html/lit-html.js';

// *** create the componen here and late use it to create the templates ***

export const component = item => html`
  <!-- *** html goes here *** -->
  <div class="meme">
    <div class="card">
      <div class="info">
        <p class="meme-title">${item.title}</p>
        <img class="meme-image" alt="meme-img" src=${item.imageUrl} />
      </div>
      <div id="data-buttons">
        <a class="button" href="/details/${item._id}">Details</a>
      </div>
    </div>
  </div>
`;
