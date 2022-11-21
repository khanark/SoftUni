import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAll } from '../api/postsService.js';

const postTemplate = post => html`
  <div class="offer">
    <img src="${post.imageUrl}" alt="example1" />
    <p><strong>Title: </strong><span class="title">${post.title}</span></p>
    <p><strong>Salary:</strong><span class="salary">${post.salary}</span></p>
    <a class="details-btn" href="/details/${post._id}">Details</a>
  </div>
`;

const catalogTemplate = posts => html`
  <!-- Dashboard page -->
  <section id="dashboard">
    <h2>Job Offers</h2>

    <!-- Display a div with information about every post (if any)-->
    ${posts.length == 0 ? html`<h2>No offers yet.</h2>` : posts.map(postTemplate)}
    <!-- Display an h2 if there are no posts -->
    <!-- <h2>No offers yet.</h2> -->
  </section>
`;

export const catalogView = async ctx => {
  const posts = await getAll()
  console.log(posts)
  ctx.render(catalogTemplate(posts));
};
