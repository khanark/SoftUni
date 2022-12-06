import { createItem } from '../api/data.js';
import { html } from '../lib/lib.js ';
import { createSubmit } from '../util.js';

const createTemplate = onSubmit => html`
  <section id="create">
    <div class="form" @submit=${onSubmit}>
      <h2>Add item</h2>
      <form class="create-form">
        <input type="text" name="brand" id="shoe-brand" placeholder="Brand" />
        <input type="text" name="model" id="shoe-model" placeholder="Model" />
        <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" />
        <input type="text" name="release" id="shoe-release" placeholder="Release date" />
        <input type="text" name="designer" id="shoe-designer" placeholder="Designer" />
        <input type="text" name="value" id="shoe-value" placeholder="Value" />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export async function showCreatePage(ctx) {
  ctx.render(createTemplate(createSubmit(onSubmit)));
  async function onSubmit(data, form) {
    if (Object.values(data).some(val => val == '')) {
      return alert('please fill all the empty fields');
    }
    await createItem(data);
    form.reset();
    ctx.page.redirect('/catalog');
  }
}
