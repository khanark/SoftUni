import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { deleteMeme, singleMeme } from '../api/dataService.js';

const detailsTemplate = (meme, isOwner, onDelete) => html`
  <!-- Details Meme Page (for guests and logged users) -->
  <section id="meme-details">
    <h1>Meme Title: ${meme.title}</h1>
    <div class="meme-details">
      <div class="meme-img">
        <img alt="meme-alt" src=${meme.imageUrl} />
      </div>
      <div class="meme-description">
        <h2>Meme Description</h2>
        <p>${meme.description}</p>

        <!-- Buttons Edit/Delete should be displayed only for creator of this meme  -->
        ${isOwner
          ? html`<a class="button warning" href="/edit/${meme._id}">Edit</a>
              <button class="button danger" @click=${onDelete}>Delete</button>`
          : nothing}
      </div>
    </div>
  </section>
`;

export const detailsView = async ctx => {
  const memeId = ctx.params.id;
  const meme = await singleMeme(memeId);
  const isOwner = ctx.user?._id == meme._ownerId;
  const onDelete = async () => {
    if(confirm("Do you really wnat to delete this awesome meme?")) {
      await deleteMeme(memeId);
      ctx.page.redirect("/memes")
    }
  };
  ctx.renderContent(detailsTemplate(meme, isOwner, onDelete));
};
