import { html } from '/lib.js';

const template = data => html` <option .value=${data._id}>${data.text}</option> `;

export default template;
