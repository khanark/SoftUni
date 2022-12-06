import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { searchCar } from '../api/dataService.js';
import { component } from '../component/component.js';

const byYearTemplate = (onSearch, result) => html`
  <section id="search-cars">
    <h1>Filter by year</h1>

    <div class="container">
      <input id="search-input" type="text" name="search" placeholder="Enter desired production year" />
      <button class="button-list" @click=${onSearch}>Search</button>
    </div>

    <h2>Results:</h2>
    if${result == undefined
      ? nothing
      : html`<div class="listings">
          ${!result.length ? html`<p class="no-cars">No results.</p>` : result.map(component)}
        </div> `}
  </section>
`;

export function byYearView(ctx) {
  const onSearch = async () => {
    const result = await searchCar(document.getElementById('search-input').value);
    ctx.renderContent(byYearTemplate(onSearch, result));

  };
  ctx.renderContent(byYearTemplate(onSearch));
}
