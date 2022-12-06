import * as userService from '../api/userService.js';

export const onLogout = async ctx => {
  await userService.logout();
  ctx.page.redirect('/');
};
