import { render } from '/lib.js';
import { html } from '/lib.js';

const bookTemplate = (book, id) => html`
  <tr>
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>
      <button data-id=${id}>Edit</button>
      <button data-id=${id}>Delete</button>
    </td>
  </tr>
`;

export function showBooks(data) {
  const container = document.querySelector('tbody');
  render(
    Object.keys(data).map(key => bookTemplate(data[key], key)),
    container
  );
}
