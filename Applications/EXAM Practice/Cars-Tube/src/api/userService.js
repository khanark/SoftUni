import * as api from './api.js';
import * as authService from './authService.js';

const endpoints = {
  login: '/users/login',
  register: '/users/register',
  logout: '/users/logout',
};

export const login = async (username, password) => {
  const user = await api.post(endpoints.login, { username, password });
  authService.setUser(user);
};

export const register = async (username, password) => {
  const user = await api.post(endpoints.register, { username, password });
  authService.setUser(user);
};

export const logout = async () => {
  await api.get(endpoints.logout);
  sessionStorage.removeItem('userdata');
};
