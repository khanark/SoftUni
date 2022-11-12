import { get, del, post, put } from './api.js';
const BASE_URL = '/jsonstore/collections/books';

const endpoints = {
  catalog: id => BASE_URL + '/' + id,
};

async function getSingleBook(id) {
  return await get(endpoints.catalog(id));
}

async function getAllBooks() {
  return await get(BASE_URL);
}

async function deleteBook(id) {
  await del(endpoints.catalog(id));
}

async function updateBook(id, data) {
  await put(endpoints.catalog(id), data);
}

async function createBook(author, title) {
  await post(BASE_URL, { author, title });
}

export { updateBook, deleteBook, getAllBooks, createBook, getSingleBook };
