import { render } from '/lib.js';
import { get } from '/api/api.js';
import template from './templates/table.js';

const endpoint = '/jsonstore/advanced/table';
const table = document.querySelector('tbody');
const input = document.getElementById('searchField');

window.addEventListener('DOMContentLoaded', onLoad);

async function onLoad() {
  const data = await get(endpoint);
  render(Object.values(data).map(template), table);
}

document.getElementById('searchBtn').addEventListener('click', onSearch.bind(null, [reset, update]));

function onSearch(functions = [], ev) {
  const cells = Array.from(document.querySelectorAll('td'));
  functions.forEach(f => f(cells));
  input.value = '';
}

function reset(fields) {
  fields.forEach(f => f.parentNode.classList.remove('select'));
}

function update(fields) {
  fields.forEach(c => {
    if (c.textContent.toLowerCase().includes(input.value.toLowerCase())) {
      c.parentNode.classList.add('select');
    }
  });
}
