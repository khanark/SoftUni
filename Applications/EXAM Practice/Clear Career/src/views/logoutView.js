import * as userService from "../api/userService.js"

export const logoutView = async (ctx) => {
  await userService.logout()
  ctx.page.redirect("/")
}