import { html } from '../../node_modules/lit-html/lit-html.js';
import * as dataService from '../api/dataService.js';
import { cardComponent } from '../component/cardComponent.js';

const catalogTemplate = animals => html`
  <!--Dashboard-->
  <section id="dashboard">
    <h2 class="dashboard-title">Services for every animal</h2>
    <!-- card goes here -->
    <div class="animals-dashboard">
      ${!animals.length ? html`<div><p class="no-pets">No pets in dashboard</p></div>` : animals.map(cardComponent)}
    </div>
  </section>
`;

export const catalogView = async ctx => {
  const animals = await dataService.getAllAnimals();
  ctx.renderContent(catalogTemplate(animals));
};
