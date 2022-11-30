import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { deleteItem, getComments, getSingleItem, postComment } from '../api/dataService.js';
import { submitHandler } from '../utils/utils.js';

const detailsTemplate = (item, comments, isOwner, isLogged, onDelete, onComment) => html`
  <section id="game-details">
    <h1>Game Details</h1>
    <div class="info-section">
      <div class="game-header">
        <img class="game-img" src=${item.imageUrl} />
        <h1>${item.title}</h1>
        <span class="levels">MaxLevel: ${item.maxLevel}</span>
        <p class="type">${item.category}</p>
      </div>
      <p class="text">${item.summary}</p>
      <!-- Bonus ( for Guests and Users ) -->
      ${!isOwner
        ? html`<div class="details-comments">
            <h2>Comments:</h2>
            ${!comments.length
              ? html`<p class="no-comment">No comments.</p>`
              : html`<ul>
                  ${comments.map(c => html`<li>Content: ${c.comment}</li>`)}
                </ul>`}
            <!-- Display paragraph: If there are no games in the database -->
          </div>`
        : nothing}
      ${isOwner
        ? html` <div class="buttons">
            <a href="/edit/${item._id}" class="button">Edit</a>
            <a href="javascript:void(0)" class="button" @click=${onDelete}>Delete</a>
          </div>`
        : nothing}
    </div>
    <!-- Bonus -->
    <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) -->
    ${isLogged && !isOwner
      ? html`<article class="create-comment">
          <label>Add new comment:</label>
          <form class="form" @submit=${onComment}>
            <textarea name="comment" placeholder="Comment......"></textarea>
            <input class="btn submit" type="submit" value="Add Comment" />
          </form>
        </article>`
      : nothing}
  </section>
`;

export const detailsView = async ctx => {
  const gameId = ctx.params.id;
  const item = await getSingleItem(gameId);
  const isOwner = ctx.user?._id == item._ownerId;
  const isLogged = Boolean(ctx.user);
  // get all the comments
  const comments = await getComments(gameId);

  const onDelete = async () => {
    await deleteItem(item._id);
    ctx.page.redirect('/');
  };
  const onComment = async (data, form) => {
    data.gameId = gameId;
    await postComment(data);
    ctx.page.redirect(`/details/${gameId}`);
    form.reset();
  };
  ctx.renderContent(detailsTemplate(item, comments, isOwner, isLogged, onDelete, submitHandler(onComment)));
};
