import { render } from '../../node_modules/lit-html/lit-html.js';

export const addRender = (main, nav, notification) => {
  return (ctx, next) => {
    ctx.renderContent = view => render(view, main);
    ctx.renderNav = template => render(template, nav);
    ctx.renderError = template => render(template, notification)
    next();
  };
};
