import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMemes } from '../api/dataService.js';
import { component } from '../component/component.js';

const catalogTemplate = memes => html`
  <!-- All Memes Page ( for Guests and Users )-->
  <section id="meme-feed">
    <h1>All Memes</h1>
    <div id="memes">
      <!-- Display : All memes in database ( If any ) -->
      ${!memes.length ? html`<p class="no-memes">No memes in database.</p>` : memes.map(component)}
    </div>
  </section>
`;

export const catalogView = async ctx => {
  const memes = await getMemes();
  ctx.renderContent(catalogTemplate(memes));
};
