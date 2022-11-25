import { html } from '../../node_modules/lit-html/lit-html.js';
import * as dataService from '../api/dataService.js';
import { submitHandler } from '../utils/utils.js';

const editTemplate = (post, submitHandler) => html`
  <!-- Edit Page (Only for logged-in users) -->
  <section id="edit-page" class="auth">
    <form id="edit" @submit=${submitHandler}>
      <h1 class="title">Edit Post</h1>

      <article class="input-group">
        <label for="title">Post Title</label>
        <input type="title" name="title" id="title" .value=${post.title} />
      </article>

      <article class="input-group">
        <label for="description">Description of the needs </label>
        <input type="text" name="description" id="description" .value=${post.description} />
      </article>

      <article class="input-group">
        <label for="imageUrl">Needed materials image</label>
        <input type="text" name="imageUrl" id="imageUrl" .value=${post.imageUrl} />
      </article>

      <article class="input-group">
        <label for="address">Address of the orphanage</label>
        <input type="text" name="address" id="address" .value=${post.address} />
      </article>

      <article class="input-group">
        <label for="phone">Phone number of orphanage employee</label>
        <input type="text" name="phone" id="phone" .value=${post.phone} />
      </article>

      <input type="submit" class="btn submit" value="Edit Post" />
    </form>
  </section>
`;

export const editView = async ctx => {
  const id = ctx.params.id
  const onSubmit = async (data, form) => {
    if (Object.values(data).some(val => val == '')) {
      return alert('plase fill all the fields');
    }
    try {
      await dataService.updatePost(id, data);
      ctx.page.redirect(`/details/${id}`)
    } catch (error) {
      alert(error.message);
    }
  };
  const post = await dataService.getSingle(id);
  ctx.render(editTemplate(post, submitHandler(onSubmit)));
};
