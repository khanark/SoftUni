import * as api from './api.js';

const endpoints = {
  getAll: '/data/offers?sortBy=_createdOn%20desc',
  create: '/data/offers',
  catalog: id => `/data/offers/${id}`,
  add: '/data/applications',
  getApplication: query => `/data/applications?where=offerId%3D%22${query}%22&distinct=_ownerId&count`,
  checkIfApplied: (query, userId) =>
    `/data/applications?where=offerId%3D%22${query}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};

export const getAll = async () => {
  return await api.get(endpoints.getAll);
};

export const createPost = async data => {
  return await api.post(endpoints.create, data);
};

export const getSingle = async id => {
  return await api.get(endpoints.catalog(id));
};

export const deletePost = async id => {
  return await api.del(endpoints.catalog(id));
};

export const updatePost = async (id, data) => {
  return await api.put(endpoints.catalog(id), data);
};

export const addApplication = async (data) => {
  return await api.post(endpoints.add, data);
};

export const getApplication = async (query) => {
  return api.get(endpoints.getApplication(query));
};

export const checkIfApplied = async (query, userId) => {
  return api.get(endpoints.checkIfApplied(query, userId));
};
