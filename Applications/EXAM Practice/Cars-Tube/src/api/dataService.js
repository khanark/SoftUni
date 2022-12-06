import * as api from './api.js';

//  ************ Implement the data service **************
// Endpoints go here
const endpoints = {
  catalog: '/data/cars?sortBy=_createdOn%20desc',
  create: '/data/cars',
  details: id => `/data/cars/${id}`,
  delete: id => `/data/cars/${id}`,
  profile: id => `/data/cars?where=_ownerId%3D%22${id}%22&sortBy=_createdOn%20desc`,
  search: query => `/data/cars?where=year%3D${query}`,
};

// export data functions go here
export const getAllCars = async () => {
  return api.get(endpoints.catalog)
}

export const createCar = async (data) => {
  return api.post(endpoints.create, data)
}

export const getDetails = async (id) => {
  return api.get(endpoints.details(id))
}

export const deleteCar = async (id) => {
  return api.del(endpoints.delete(id))
}

export const getProfile = async (ownerId) => {
  return api.get(endpoints.profile(ownerId))
}

export const searchCar = async (query) => {
  return api.get(endpoints.search(query))
}

export const editCar = async (id, data) => {
  return api.put(endpoints.details(id), data)
} 