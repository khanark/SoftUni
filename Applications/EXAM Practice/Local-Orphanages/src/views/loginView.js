import { html } from '../../node_modules/lit-html/lit-html.js';
import { submitHandler } from '../utils/utils.js';
import * as userService from '../api/userService.js';

// change template before every
const loginTemplate = submitHandler => html`
  <!-- Login Page (Only for Guest users) -->
  <section id="login-page" class="auth">
    <form id="login" @submit=${submitHandler}>
      <h1 class="title">Login</h1>

      <article class="input-group">
        <label for="login-email">Email: </label>
        <input type="email" id="login-email" name="email" />
      </article>

      <article class="input-group">
        <label for="password">Password: </label>
        <input type="password" id="password" name="password" />
      </article>

      <input type="submit" class="btn submit-btn" value="Log In" />
    </form>
  </section>
`;

export const loginView = async ctx => {
  const onSubmit = async (data, form) => {
    debugger;
    if (Object.values(data).some(val => val == '')) {
      return alert('please fill all empty fields');
    }
    try {
      await userService.login(data.email, data.password);
      ctx.page.redirect('/');
    } catch (error) {
      alert(error.message);
    }
    form.reset();
  };
  ctx.render(loginTemplate(submitHandler(onSubmit)));
};
