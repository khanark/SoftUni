import { html } from '/lib.js';

const template = data => html`
  <tr>
    <td>${data.firstName} ${data.lastName}</td>
    <td>${data.email}</td>
    <td>${data.course}</td>
  </tr>
`;

export default template;
