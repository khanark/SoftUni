import { html } from '../../node_modules/lit-html/lit-html.js';
import { singleMeme, updateMeme } from '../api/dataService.js';
import { submitHandler } from '../utils/utils.js';

const editTemplate = (meme, submitHandler) => html`
  <!-- Edit Meme Page ( Only for logged user and creator to this meme )-->
  <section id="edit-meme">
    <form id="edit-form" @submit=${submitHandler}>
      <h1>Edit Meme</h1>
      <div class="container">
        <label for="title">Title</label>
        <input id="title" type="text" placeholder="Enter Title" name="title" .value=${meme.title} />
        <label for="description">Description</label>
        <textarea
          id="description"
          placeholder="Enter Description"
          name="description"
          .value=${meme.description}
        ></textarea>
        <label for="imageUrl">Image Url</label>
        <input id="imageUrl" type="text" placeholder="Enter Meme ImageUrl" name="imageUrl" .value=${meme.imageUrl} />
        <input type="submit" class="registerbtn button" value="Edit Meme" />
      </div>
    </form>
  </section>
`;

export const editView = async ctx => {
  const memeId = ctx.params.id;
  const meme = await singleMeme(memeId);
  const onSubmit = async (data, form) => {
    try {
      if (Object.values(data).some(val => val == '')) {
        throw new Error('please fill all the empty fields');
      }
      await updateMeme(memeId, data);
      ctx.page.redirect(`/details/${memeId}`);
    } catch (error) {
      ctx.renderError(error.message);
    }
  };
  ctx.renderContent(editTemplate(meme, submitHandler(onSubmit)));
};
