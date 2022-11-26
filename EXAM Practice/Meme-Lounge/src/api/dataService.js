import * as api from './api.js';

//  ************ Implement the data service **************
// Endpoints go here
const endpoints = {
  memes: '/data/memes?sortBy=_createdOn%20desc',
  create: '/data/memes',
  user: userId => `/data/memes?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
  catalog: id => `/data/memes/${id}`,
};
// export data functions go here

export const getMemes = async () => {
  return await api.get(endpoints.memes);
};

export const create = async data => {
  return api.post(endpoints.create, data);
};

export const userMemes = async userId => {
  return await api.get(endpoints.user(userId));
};

export const singleMeme = async id => {
  return await api.get(endpoints.catalog(id));
};

export const deleteMeme = async id => {
  return await api.del(endpoints.catalog(id))
}

export const updateMeme = async (id, data) => {
  return await api.put(endpoints.catalog(id), data)
}