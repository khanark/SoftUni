import * as authService from "../api/authService.js"

export const sessionMiddleware = (ctx, next) => {
  ctx.user = authService.getUser()
  next()
}