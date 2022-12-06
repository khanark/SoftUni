import * as api from './api.js';

//  ************ Implement the data service **************
// Endpoints go here
const endpoints = {
  register: '/users/register',
  login: '/users/login',
  logout: '/users/logout',
  catalog: '/data/games?sortBy=_createdOn%20desc&distinct=category',
  allGames: '/data/games?sortBy=_createdOn%20desc',
  create: '/data/games',
  details: id => `/data/games/${id}`,
  delete: id => `/data/games/${id}`,
  comments: id => `/data/comments?where=gameId%3D%22${id}%22`,
  postComments: '/data/comments',
};
// export data functions go here

export const getAllGames = async () => {
  return await api.get(endpoints.allGames);
};

export const catalog = async () => {
  return await api.get(endpoints.catalog);
};

export const createItem = async data => {
  return api.post(endpoints.create, data);
};

export const getSingleItem = async id => {
  return await api.get(endpoints.details(id));
};

export const deleteItem = async id => {
  return await api.del(endpoints.delete(id));
};

export const getDetails = async id => {
  return await api.get(endpoints.details(id));
};

export const updateItem = async (id, data) => {
  return await api.put(endpoints.details(id), data);
};

export const getComments = async id => {
  return await api.get(endpoints.comments(id));
};

export const postComment = async (commentInfo) => {
  return await api.post(endpoints.postComments, commentInfo);
};
