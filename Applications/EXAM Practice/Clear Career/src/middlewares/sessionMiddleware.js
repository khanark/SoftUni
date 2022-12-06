import * as authService from '../api/authService.js';

export const session = (ctx, next) => {
  ctx.user = authService.getUser();
  next();
};
