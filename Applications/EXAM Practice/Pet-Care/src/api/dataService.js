import * as api from './api.js';

//  ************ Implement the data service **************
// Endpoints go here
const endpoints = {
  getall: '/data/pets?sortBy=_createdOn%20desc&distinct=name',
  create: '/data/pets',
  catalog: id => `/data/pets/${id}`,
  getDonations: petId => `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`,
  donate: '/data/donation',
  isDonated: (petId, userId) => `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
};
// export data functions go here
export const getAllAnimals = async () => {
  return await api.get(endpoints.getall);
};

export const createAnimal = async data => {
  return await api.post(endpoints.create, data);
};

export const getSingleAnimal = async id => {
  return await api.get(endpoints.catalog(id));
};

export const deleteAnimal = async id => {
  return await api.del(endpoints.catalog(id));
};

export const checkIfDonated = async (petId, ownerId) => {
  return await api.get(endpoints.isDonated(petId, ownerId));
};

export const getAllDonations = async petId => {
  return await api.get(endpoints.getDonations(petId));
};

export const donate = async petId => {
  return await api.post(endpoints.donate, { petId });
};

export const updateAnimal = async (id, data) => {
  return await api.put(endpoints.catalog(id), data);
};
