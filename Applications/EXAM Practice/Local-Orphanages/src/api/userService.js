import * as api from "./api.js"
import * as authService from "./authService.js"

const endpoints = {
  login: "/users/login",
  register: "/users/register",
  logout: "/users/logout"
};

export const login = async (email, password)  => {
  const res = await api.post(endpoints.login, {email, password})
  authService.setUser(res)
}

export const register = async (email, password)  => {
  const res = await api.post(endpoints.register, {email, password})
  authService.setUser(res)
}

export const logout = async () => {
  await api.get(endpoints.logout)
  authService.clearUser()
}
