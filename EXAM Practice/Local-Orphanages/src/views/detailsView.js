import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as dataService from '../api/dataService.js';

const buttonsTemplate = (id, onDelete) => html`
  <div class="btns">
    <a href="/edit/${id}" class="edit-btn btn">Edit</a>
    <a href="javascript:void(0)" class="delete-btn btn" @click=${onDelete}>Delete</a>
  </div>
`;

const donateTemplate = onDonate => html`
  <div class="btns">
    <a href="javascript:void(0)" class="donate-btn btn" @click=${onDonate}>Donate</a>
  </div>
`;

const detailsTemplate = (post, isAuthor, canDonate, onDelete, onDonate, count) => html`
  <!-- Details Page -->
  <section id="details-page">
    <h1 class="title">Post Details</h1>

    <div id="container">
      <div id="details">
        <div class="image-wrapper">
          <img src=${post.imageUrl} alt="Material Image" class="post-image" />
        </div>
        <div class="info">
          <h2 class="title post-title">${post.title}</h2>
          <p class="post-description">Description: ${post.description}</p>
          <p class="post-address">Address: ${post.address}</p>
          <p class="post-number">Phone number: ${post.phone}</p>
          <p class="donate-Item">Donate Materials: ${count}</p>

          <!--Edit and Delete are only for creator-->
          ${isAuthor ? buttonsTemplate(post._id, onDelete) : nothing} ${canDonate ? donateTemplate(onDonate) : nothing}
        </div>
      </div>
    </div>
  </section>
`;

export const detailsView = async ctx => {
  const post = await dataService.getSingle(ctx.params.id);
  const isDonated =  await dataService.checkUserDonation(post._id, ctx.user?._id);
  const donationsCount = await dataService.getAllDonations(post._id);
  const isAuthor = ctx.user?._id == post._ownerId;
  let canDonate = Boolean(ctx.user) && !isAuthor && !isDonated;
  const onDelete = async () => {
    if(confirm("Do you really want to delete this post?")) {
      await dataService.deletePost(post._id);
      ctx.page.redirect('/');
    } else {
      return
    }
  };
  const onDonate = async () => {
    await dataService.donate(post._id);
    ctx.page.redirect(`/details/${post._id}`);
  };
  ctx.render(detailsTemplate(post, isAuthor, canDonate, onDelete, onDonate, donationsCount));
};
