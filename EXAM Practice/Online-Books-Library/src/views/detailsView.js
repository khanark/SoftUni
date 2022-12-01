import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { checkLike, deleteBook, likeBook, totalLikes } from '../api/dataService.js';

const detailsTemplate = (book, actions) => html`
  <section id="details-page" class="details">
    <div class="book-information">
      <h3>${book.title}</h3>
      <p class="type">Type: ${book.type}</p>
      <p class="img"><img src=${book.imageUrl} /></p>
      <div class="actions">
        <!-- Edit/Delete buttons ( Only for creator of this book )  -->
        ${book.isOwner
          ? html`
              <a class="button" href="/edit/${book._id}">Edit</a>
              <a class="button" href="javascript:void(0)" @click=${actions.onDelete}>Delete</a>
            `
          : nothing}

        <!-- Bonus -->
        <!-- Like button ( Only for logged-in users, which is not creators of the current book ) -->
        ${book.isLogged && !book.isOwner && book.canLike == 0
          ? html` <a class="button" href="javascript:void(0)" @click=${actions.onLike}>Like</a>`
          : nothing}

        <!-- ( for Guests and Users )  -->
        <div class="likes">
          <img class="hearts" src="/images/heart.png" />
          <span id="total-likes">Likes: ${book.likes}</span>
        </div>
        <!-- Bonus -->
      </div>
    </div>
    <div class="book-description">
      <h3>Description:</h3>
      <p>${book.description}</p>
    </div>
  </section>
`;

export const detailsView = async ctx => {
  const id = ctx.params.id;
  ctx.data.likes = await totalLikes(id);
  if(ctx.user) {
    ctx.data.canLike = await checkLike(id, ctx.user._id);
  }
  const onLike = async () => {
    await likeBook(id);
    ctx.page.redirect(`/details/${id}`);
  };
  const onDelete = async () => {
    await deleteBook(id);
    ctx.page.redirect(`/catalog`);
  };
  const actions = {
    onLike,
    onDelete,
  };
  ctx.renderContent(detailsTemplate(ctx.data, actions));
};
