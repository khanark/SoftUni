import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationTemplate } from '../views/navigationView.js';

const root = document.querySelector('.navigation-header');

export const navigationMiddleware = (ctx, next) => {
  render(navigationTemplate(ctx.user), root);
  next();
};
