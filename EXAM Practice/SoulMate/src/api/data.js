import * as api from './api.js';

const endpoints = {
  getItems: '/data/shoes?sortBy=_createdOn%20desc',
  createItem: '/data/shoes',
  catalog: id => `/data/shoes/${id}`,
  search: query => `/data/shoes?where=brand%20LIKE%20%22${query}%22`,
};

export async function getItems() {
  return await api.get(endpoints.getItems);
}

export async function createItem(data) {
  return await api.post(endpoints.createItem, data);
}

export async function getDetails(id) {
  return await api.get(endpoints.catalog(id));
}

export async function deleteItem(id) {
  return await api.del(endpoints.catalog(id));
}

export async function updateItem(id, data) {
  return await api.put(endpoints.catalog(id), data);
}

export async function searchItem(query) {
  return await api.get(endpoints.search(query));
}
