import { html } from '../../node_modules/lit-html/lit-html.js';
import * as dataService from '../api/dataService.js';
import { postComponent } from '../component/postComponent.js';

const myPostsTemplate = posts => html`
  <section id="my-posts-page">
    <h1 class="title">My Posts</h1>
    ${posts.length > 0
      ? html`<div class="my-posts">${posts.map(postComponent)}</div>`
      : html`<h1 class="title no-posts-title">You have no posts yet!</h1>`}
  </section>
`;

export const myPostsView = async ctx => {
  const posts = await dataService.getUserPosts(ctx.user._id);
  console.log(posts);
  ctx.render(myPostsTemplate(posts));
};
