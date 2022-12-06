import * as api from './api.js';

//  ************ Implement the data service **************
// Endpoints go here
const endpoints = {
  register: '/users/register',
  login: '/users/login',
  logout: '/users/logout',
  catalog: '/data/books?sortBy=_createdOn%20desc',
  create: '/data/books',
  like: '/data/likes',
  details: id => `/data/books/${id}`,
  profile: id => `/data/books?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`,
  total: bookId => `/data/likes?where=bookId%3D%22${bookId}%22&distinct=_ownerId&count`,
  own: (bookId, userId) => `/data/likes?where=bookId%3D%22${bookId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};
// export data functions go here

export const catalog = async () => {
  return await api.get(endpoints.catalog);
};

export const createBook = async data => {
  return await api.post(endpoints.create, data);
};

export const getDetails = async id => {
  return await api.get(endpoints.details(id));
};

export const totalLikes = async bookId => {
  return await api.get(endpoints.total(bookId));
};

export const checkLike = async (bookId, userId) => {
  return await api.get(endpoints.own(bookId, userId));
};

export const likeBook = async bookId => {
  return await api.post(endpoints.like, { bookId });
};

export const deleteBook = async id => {
  return await api.del(endpoints.details(id));
};

export const editBook = async (id, data) => {
  return await api.put(endpoints.details(id), data)
}

export const getOwnBooks = async (profileId) => {
  return await api.get(endpoints.profile(profileId))
}