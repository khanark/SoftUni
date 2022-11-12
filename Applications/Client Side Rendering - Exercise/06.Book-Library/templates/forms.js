import { render, html } from '/lib.js';

const editForm = data => html`
  <form id="edit-form">
    <!-- <input type="hidden" name="id" /> -->
    <h3>Edit book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." .value=${data.title} />
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." .value=${data.author} />
    <input type="submit" value="Save" />
  </form>
`;

const addForm = html`
  <form id="add-form">
    <h3>Add book</h3>
    <label>TITLE</label>
    <input type="text" name="title" placeholder="Title..." />
    <label>AUTHOR</label>
    <input type="text" name="author" placeholder="Author..." />
    <input type="submit" value="Submit" />
  </form>
`;

function showForm(form) {
  const container = document.getElementById('forms');
  render(form, container);
}

export { showForm, editForm, addForm };
