import { searchItem } from '../api/data.js';
import { html, nothing } from '../lib/lib.js';
import { createSubmit } from '../util.js';

const cardTemplate = data => html`
<li class="card">
  <img src=${data.imageUrl} alt="travis" />
  <p><strong>Brand: </strong><span class="brand">${data.brand}</span></p>
  <p><strong>Model: </strong><span class="model">${data.model}</span></p>
  <p><strong>Value:</strong><span class="value">${data.value}</span>$</p>
  ${data.user && data.user.id == data._ownerId
    ? html`<a class="details-btn" href="/details/${data._id}">Details</a>`
    : nothing}
</li>`;

const searchTemplate = (onSubmit, data) => html`
  <section id="search">
    <h2>Search by Brand</h2>

    <form class="search-wrapper cf" @submit=${onSubmit}>
      <input id="#search-input" type="text" name="search" placeholder="Search here..." required />
      <button type="submit">Search</button>
    </form>

    <h3>Results:</h3>

    <div id="search-container">
      <ul class="card-wrapper">
        <!-- Display a li with information about every post (if any)-->
        ${data && data.length > 0 ? data.map(cardTemplate) : nothing}
      </ul>
      ${data && data.length == 0 ? html`<h2>There are no results found.</h2>` : nothing}
      <!-- Display an h2 if there are no posts -->
      <!-- <h2>There are no results found.</h2> -->
    </div>
  </section>
`;

export async function showSearchPage(ctx) {
  ctx.render(searchTemplate(createSubmit(onSubmit)));
  const update = data => ctx.render(searchTemplate(createSubmit(onSubmit), data));
  async function onSubmit(data, form) {
    if (data) {
      if (data.search == '') {
        return alert('please fill all empty fields');
      }
    }
    const result = await searchItem(data.search);
    result.forEach(res => (res.user = ctx.user));
    update(result);
  }
}
