import { getItems } from '../api/data.js';
import { html } from '../lib/lib.js';

const cardTemplate = data => html`
  <li class="card">
    <img src=${data.imageUrl} alt="travis" />
    <p><strong>Brand: </strong><span class="brand">${data.brand}</span></p>
    <p><strong>Model: </strong><span class="model">${data.model}</span></p>
    <p><strong>Value:</strong><span class="value">${data.value}</span>$</p>
    <a class="details-btn" href="/details/${data._id}">Details</a>
  </li>
`;

const catalogTemplate = data => html`
  <section id="dashboard">
    <h2>Collectibles</h2>
    <ul class="card-wrapper">
      <!-- Display a li with information about every post (if any)-->
      ${data.length > 0 ? data.map(cardTemplate) : html`<h2>There are no items added yet.</h2>`}
    </ul>
  </section>
`;

export async function showCatalogPage(ctx) {
  const data = await getItems();
  ctx.render(catalogTemplate(data));
}
