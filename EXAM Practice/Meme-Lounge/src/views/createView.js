import { html } from '../../node_modules/lit-html/lit-html.js';
import { create } from '../api/dataService.js';
import { submitHandler } from '../utils/utils.js';

const createTemplate = submitHandler => html`
  <!-- Create Meme Page ( Only for logged users ) -->
  <section id="create-meme">
    <form id="create-form" @submit=${submitHandler}>
      <div class="container">
        <h1>Create Meme</h1>
        <label for="title">Title</label>
        <input id="title" type="text" placeholder="Enter Title" name="title" />
        <label for="description">Description</label>
        <textarea id="description" placeholder="Enter Description" name="description"></textarea>
        <label for="imageUrl">Meme Image</label>
        <input id="imageUrl" type="text" placeholder="Enter meme ImageUrl" name="imageUrl" />
        <input type="submit" class="registerbtn button" value="Create Meme" />
      </div>
    </form>
  </section>
`;

export const createView = (ctx) => {
  const onSubmit = async (data, form) => {
    try {
      if(Object.values(data).some(val => val == "")) {
        throw new Error("please fill all the empty fields")
      }
      await create(data)
      ctx.page.redirect("/memes")
    } catch (error) {
      ctx.renderError(error.message)
    }
    form.reset()
  }
  ctx.renderContent(createTemplate(submitHandler(onSubmit)))
}