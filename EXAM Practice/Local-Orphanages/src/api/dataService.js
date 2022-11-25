import * as api from './api.js';

// needs to be edited before staring
const endpoints = {
  getAll: '/data/posts?sortBy=_createdOn%20desc',
  getMy: (userId) => `/data/posts?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`,
  isDonated: (postId, userId) => `/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
  create: '/data/posts',
  getAllDonation: (postId) => `/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`,
  donate: "/data/donations",
  catalog: id => `/data/posts/${id}`,
};

export const getAllPosts = async () => {
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

export const getUserPosts = async (userId) => {
  return await api.get(endpoints.getMy(userId))
}

export const checkUserDonation = async (postId, userId) => {
  return await api.get(endpoints.isDonated(postId, userId))
}

export const getAllDonations = async (postId) => {
  return await api.get(endpoints.getAllDonation(postId))
}

export const donate = async (postId) => {
  return await api.post(endpoints.donate, {postId})
}