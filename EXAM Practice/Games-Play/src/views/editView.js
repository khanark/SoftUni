import { html } from '../../node_modules/lit-html/lit-html.js';
import { getDetails, updateItem } from '../api/dataService.js';
import { submitHandler } from '../utils/utils.js';

const editTemplate = (item, submitHandler) => html`
  <!-- Edit Page ( Only for the creator )-->
  <section id="edit-page" class="auth">
    <form id="edit" @submit=${submitHandler}>
      <div class="container">
        <h1>Edit Game</h1>
        <label for="leg-title">Legendary title:</label>
        <input type="text" id="title" name="title" .value=${item.title} />

        <label for="category">Category:</label>
        <input type="text" id="category" name="category" .value=${item.category} />

        <label for="levels">MaxLevel:</label>
        <input type="number" id="maxLevel" name="maxLevel" min="1" .value=${item.maxLevel} />

        <label for="game-img">Image:</label>
        <input type="text" id="imageUrl" name="imageUrl" .value=${item.imageUrl} />

        <label for="summary">Summary:</label>
        <textarea name="summary" id="summary" .value=${item.summary}></textarea>
        <input class="btn submit" type="submit" value="Edit Game" />
      </div>
    </form>
  </section>
`;

export const editView = async ctx => {
  const item = await getDetails(ctx.params.id);
  const onSubmit = async (data, form) => {
    if (Object.values(data).some(val => val == '')) {
      return alert('please fill all the empty fields');
    }
    try {
      await updateItem(item._id, data);
      ctx.page.redirect(`/details/${item._id}`);
    } catch (error) {
      alert(error.message);
    }
    form.reset();
  };
  ctx.renderContent(editTemplate(item, submitHandler(onSubmit)));
};
