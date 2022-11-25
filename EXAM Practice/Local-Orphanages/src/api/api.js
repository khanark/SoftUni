import * as authService from './authService.js';
const HOST = 'http://localhost:3030';

const request = async (method, url, data) => {
  const options = {
    method,
    headers: {},
  };
  const user = authService.getUser();
  if (data) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }
  if (user) {
    options.headers['X-Authorization'] = user.accessToken;
  }
  try {
    const res = await fetch(HOST + url, options);
    if (res.status == 204) {
      return;
    }
    const data = await res.json();
    if (res.ok == false) {
      if (res.status == 403) {
        sessionStorage.removeItem('userdata');
      }
      throw new Error(data.message);
    }
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const get = request.bind(null, 'get');
export const post = request.bind(null, 'post');
export const put = request.bind(null, 'put');
export const del = request.bind(null, 'delete');
