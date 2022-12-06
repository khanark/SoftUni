import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllCars } from '../api/dataService.js';
import { component } from '../component/component.js';

const catalogTemplate = cars => html`
  <section id="car-listings">
    <h1>Car Listings</h1>
    <div class="listings">
      ${!cars.length ? html`<p class="no-cars">No cars in database.</p>` : cars.map(component)}
    </div>
  </section>
`;

export const catalogView = async ctx => {
  const cars = await getAllCars();
  ctx.renderContent(catalogTemplate(cars));
};
