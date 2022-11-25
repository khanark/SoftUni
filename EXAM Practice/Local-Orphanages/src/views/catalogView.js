import { html } from '../../node_modules/lit-html/lit-html.js';
import * as dataService from '../api/dataService.js';
import { postComponent } from '../component/postComponent.js';

const catalogTemplate = posts => html`
  <section id="dashboard-page">
    <h1 class="title">All Posts</h1>
    ${posts.length > 0
      ? html` <div class="all-posts">${posts.map(postComponent)}</div> `
      : html`<h1 class="title no-posts-title">No posts yet!</h1>`}
  </section>
`;

export const catalogView = async ctx => {
  const posts = await dataService.getAllPosts();
  ctx.render(catalogTemplate(posts));
};
