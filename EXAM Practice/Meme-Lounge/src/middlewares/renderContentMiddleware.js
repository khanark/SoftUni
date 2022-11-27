import { render } from '../../node_modules/lit-html/lit-html.js';

export const addRender = (main, nav, errorTemplate) => {
  return (ctx, next) => {
    ctx.renderContent = view => render(view, main);
    ctx.renderNav = template => render(template, nav);
    ctx.renderError =  (msg) => {
      render(errorTemplate(msg), document.getElementById('notifications'));
      document.getElementById('errorBox').style.display = 'block'
      setTimeout(() => (document.getElementById('errorBox').style.display = 'none'), 3000);
    };
    next();
  };
};
