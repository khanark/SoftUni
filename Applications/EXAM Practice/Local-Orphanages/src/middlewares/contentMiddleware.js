import { render } from '../../node_modules/lit-html/lit-html.js';

// needs to be edited
const root = document.getElementById('main-content');

export const contentMiddleware = (ctx, next) => {
  ctx.render = content => render(content, root);
  next();
};
