import { html } from '../../node_modules/lit-html/lit-html.js';
import { createItem } from '../api/dataService.js';
import { submitHandler } from '../utils/utils.js';

const createTemplate = (submitHandler) => html`
  <!-- Create Page ( Only for logged-in users ) -->
  <section id="create-page" class="auth">
    <form id="create" @submit=${submitHandler}>
      <div class="container">
        <h1>Create Game</h1>
        <label for="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title" placeholder="Enter game title..." />

        <label for="category">Category:</label>
        <input type="text" id="category" name="category" placeholder="Enter game category..." />

        <label for="levels">MaxLevel:</label>
        <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

        <label for="game-img">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

        <label for="summary">Summary:</label>
        <textarea name="summary" id="summary"></textarea>
        <input class="btn submit" type="submit" value="Create Game" />
      </div>
    </form>
  </section>
`;

export const createView = (ctx) => {
  const onSubmit = async (data, form) => {
    if(Object.values(data).some(val => val == "")) {
      return alert("please fill all the empty fields")
    }
    try {
      await createItem(data)
      ctx.page.redirect("/")
    } catch (error) {
      alert(error.message)
    }
    form.reset()
  }
  ctx.renderContent(createTemplate(submitHandler(onSubmit)))
}