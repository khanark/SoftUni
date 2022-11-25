import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import * as postService from '../api/postsService.js';

const applyView = applyHandler => html`
  <div id="action-buttons">
    <a href="" id="apply-btn" @click=${applyHandler}>Apply</a>
  </div>
`;

const creatorView = (id, onDelete) => html`
  <div id="action-buttons">
    <a href="/edit/${id}" id="edit-btn">Edit</a>
    <a href="javascript:void()" id="delete-btn" @click=${onDelete}>Delete</a>
  </div>
`;

const detailsTemplate = (post, isOwner, canApply, onDelete, applyHandler, count) => html`
  <section id="details">
    <div id="details-wrapper">
      <img id="details-img" src="${post.imageUrl}" alt="example1" />
      <p id="details-title">${post.title}</p>
      <p id="details-category">Category: <span id="categories">${post.category}</span></p>
      <p id="details-salary">Salary: <span id="salary-number">${post.salary}</span></p>
      <div id="info-wrapper">
        <div id="details-description">
          <h4>Description</h4>
          <span>${post.description}</span>
        </div>
        <div id="details-requirements">
          <h4>Requirements</h4>
          <span>${post.requirements}</span>
        </div>
      </div>
      <!-- buttons go here -->
      <p>Applications: <strong id="applications">${count}</strong></p>

      ${isOwner ? creatorView(post._id, onDelete) : nothing} ${canApply ? applyView(applyHandler) : nothing}
    </div>
  </section>
`;

export const detailsView = async ctx => {
  const onDelete = async () => {
    try {
      await postService.deletePost(ctx.params.id);
      ctx.page.redicrect('/catalog');
    } catch (error) {
      alert(error.message);
    }
  };
  // requests
  const post = await postService.getSingle(ctx.params.id);
  const [applicationCount, isApplied] = await Promise.all([
    postService.getApplication(post._id),
    postService.checkIfApplied(post._id, ctx.user?._id),
  ]);
  const isOwner = ctx.user?._id == post._ownerId;
  const canApply = Boolean(ctx.user) && !isOwner && !isApplied;
  const onApply = async () => {
    await postService.addApplication({ offerId: post._id });
    window.history.back()
  };
  const renderPage = () => ctx.render(detailsTemplate(post, isOwner, canApply, onDelete, onApply, applicationCount));
  renderPage()
};
