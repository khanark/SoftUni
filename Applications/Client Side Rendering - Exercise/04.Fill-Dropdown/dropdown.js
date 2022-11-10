import { get, post } from '/api/api.js';
import { render } from '/lib.js';
import template from './templates/dropDown.js';

const menu = document.getElementById('menu');

const endpoint = '/jsonstore/advanced/dropdown';

window.addEventListener('DOMContentLoaded', onLoad);

async function onLoad() {
  const data = await get(endpoint);
  render(Object.values(data).map(template), menu);
}

document.querySelector('form').addEventListener('submit', handleForm);

async function handleForm(ev) {
  ev.preventDefault();
  const formData = new FormData(ev.target);
  const text = formData.get('text');

  if (text == '') {
    return alert('empty string');
  }

  const res = await post(endpoint, { text });
  ev.target.reset();
  await onLoad();
}
