import { post, get } from './api.js';

const endpoints = {
    login: '/users/login',
    register: '/users/register',
    logout: '/users/logout',
};

async function handleUser(endpoint, data) {
    const res = await post(endpoint, data);
    sessionStorage.setItem('userdata', JSON.stringify({ email: res.email, token: res.accessToken, id: res._id }));
}

export async function login(data) {
    await handleUser(endpoints.login, data);
}

export async function register(data) {
    await handleUser(endpoints.register, data);
}

export async function logout() {
    await get(endpoints.logout);
    sessionStorage.clear();
}
