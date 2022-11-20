import { getDetails, updateItem } from '../api/data.js';
import { html } from '../lib/lib.js';
import { createSubmit } from '../util.js';

const editTemplate = (item, onSubmit) => html`
  <section id="edit">
    <div class="form">
      <h2>Edit item</h2>
      <form class="edit-form" @submit=${onSubmit}>
        <input type="text" name="brand" id="shoe-brand" placeholder="Brand" .value=${item.brand} />
        <input type="text" name="model" id="shoe-model" placeholder="Model" .value=${item.model} />
        <input type="text" name="imageUrl" id="shoe-img" placeholder="Image url" .value=${item.imageUrl} />
        <input type="text" name="release" id="shoe-release" placeholder="Release date" .value=${item.release} />
        <input type="text" name="designer" id="shoe-designer" placeholder="Designer" .value=${item.designer} />
        <input type="text" name="value" id="shoe-value" placeholder="Value" .value=${item.value} />

        <button type="submit">post</button>
      </form>
    </div>
  </section>
`;

export async function showEditPage(ctx) {
  const item = await getDetails(ctx.params.id);
  ctx.render(editTemplate(item, createSubmit(onSubmit)));
  async function onSubmit(data, form) {
    if (Object.values(data).some(val => val == '')) {
      return alert('please fill all empty fields');
    }
    await updateItem(ctx.params.id, data);
    ctx.page.redirect('/catalog');
  }
}
