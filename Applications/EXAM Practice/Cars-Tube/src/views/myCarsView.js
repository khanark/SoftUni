import { html } from '../../node_modules/lit-html/lit-html.js';
import { getProfile } from '../api/dataService.js';
import { component } from '../component/component.js';

const myCarsTemplate = cars => html`
  <section id="my-listings">
    <h1>My car listings</h1>
    <div class="listings">
      ${!cars.length ? html`<p class="no-cars">You haven't listed any cars yet.</p>` : cars.map(component)}
    </div>
  </section>
`;

export const myCarsView = async ctx => {  const cars =  await getProfile(ctx.user._id);
  ctx.renderContent(myCarsTemplate(cars));
};
