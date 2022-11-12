import { showBody } from './templates/body.js';
import { showBooks } from './templates/book.js';
import { editForm, addForm, showForm } from './templates/forms.js';
import { createBook, getAllBooks, updateBook, getSingleBook, deleteBook } from './api/data.js';

onRender();

function onRender() {
  showBody();
  showForm(addForm);
}

document.getElementById('loadBooks').addEventListener('click', loadBooks);

async function loadBooks() {
  const library = await getAllBooks();

  showBooks(library);
}

document.querySelector('tbody').addEventListener('click', handleContainer);

renderForm();

function renderForm(id) {
  document.querySelector('form').addEventListener('submit', handleForm);
  async function handleForm(ev) {
    ev.preventDefault();
    const data = getFormData(ev);
    handleButtons(data, id, ev);
  }
}

function getFormData(ev) {
  const formData = new FormData(ev.target);
  const { title, author } = Object.fromEntries(formData);

  if (title == '' || author == '') {
    return alert('empty fields');
  }
  return { title, author };
}

async function handleButtons(data, id, ev) {
  if (ev.target.id.includes('add')) {
    await onSubmit(data.author, data.title);
  } else {
    await onSave(id, data.author, data.title);
  }
  ev.target.reset();
}

function handleContainer(ev) {
  if (ev.target.nodeName !== 'BUTTON') {
    return;
  }
  const id = ev.target.dataset.id;
  ev.target.textContent == 'Delete' ? onDelete(id) : onEdit(id);
}

async function onSubmit(author, title) {
  await createBook(author, title);
  loadBooks();
}

async function onSave(id, author, title) {
  await updateBook(id, { author, title });
  showForm(addForm);
  loadBooks();
}

async function onEdit(id) {
  const data = await getSingleBook(id);
  showForm(editForm(data));
  renderForm(id);
}

async function onDelete(id) {
  await deleteBook(id);
  loadBooks();
}
