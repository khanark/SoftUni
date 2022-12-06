import { render } from '../../node_modules/lit-html/lit-html.js';
import { navigationTemplate } from '../views/navigationView.js';

// needs to be edited
const root = document.querySelector('.navigation-container');

export const navigationMiddleware = (ctx, next) => {
  render(navigationTemplate(Boolean(ctx.user)), root);
  next();
};
