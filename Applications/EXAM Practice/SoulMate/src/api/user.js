import * as api from './api.js';

const endpoints = {
  login: '/users/login',
  register: '/users/register',
  logout: '/users/logout',
};

async function login(email, password) {
  const res = await api.post(endpoints.login, { email, password });

  sessionStorage.setItem('userdata', JSON.stringify({ email: res.email, token: res.accessToken, id: res._id }));
}

async function register(email, password) {
  const res = await api.post(endpoints.register, { email, password });
  sessionStorage.setItem('userdata', JSON.stringify({ email: res.email, token: res.accessToken, id: res._id }));
}
async function logout() {
  await api.get(endpoints.logout);
  sessionStorage.clear();
}

export { login, register, logout };
