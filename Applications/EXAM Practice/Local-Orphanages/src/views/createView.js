import { html } from '../../node_modules/lit-html/lit-html.js';
import * as dataService from '../api/dataService.js';
import { submitHandler } from '../utils/utils.js';

const createTemplate = submitHandler => html`
  <!-- Create Page (Only for logged-in users) -->
  <section id="create-page" class="auth">
    <form id="create" @submit=${submitHandler}>
      <h1 class="title">Create Post</h1>

      <article class="input-group">
        <label for="title">Post Title</label>
        <input type="title" name="title" id="title" />
      </article>

      <article class="input-group">
        <label for="description">Description of the needs </label>
        <input type="text" name="description" id="description" />
      </article>

      <article class="input-group">
        <label for="imageUrl"> Needed materials image </label>
        <input type="text" name="imageUrl" id="imageUrl" />
      </article>

      <article class="input-group">
        <label for="address">Address of the orphanage</label>
        <input type="text" name="address" id="address" />
      </article>

      <article class="input-group">
        <label for="phone">Phone number of orphanage employee</label>
        <input type="text" name="phone" id="phone" />
      </article>

      <input type="submit" class="btn submit" value="Create Post" />
    </form>
  </section>
`;

export const createView = (ctx) => {
  const onSubmit = async (data, form) => {
    if(Object.values(data).some(val => val == "")) {
      return alert("please fill all the fields")
    }
    try {
      await dataService.createPost(data)
      ctx.page.redirect("/")
    } catch (error) {
      alert(error.message)
    }
    form.reset()
  }
  ctx.render(createTemplate(submitHandler(onSubmit)))
}