import { html } from '../../node_modules/lit-html/lit-html.js';
import * as userService from '../api/userService.js';
import { submitHandler } from '../utils/utils.js';

const loginTemplate = submitHandler => html`
  <!-- Login Page ( Only for Guest users ) -->
  <section id="login-page" class="auth">
    <form id="login" @submit=${submitHandler}>
      <div class="container">
        <div class="brand-logo"></div>
        <h1>Login</h1>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

        <label for="login-pass">Password:</label>
        <input type="password" id="login-password" name="password" />
        <input type="submit" class="btn submit" value="Login" />
        <p class="field">
          <span>If you don't have profile click <a href="#">here</a></span>
        </p>
      </div>
    </form>
  </section>
`;

export const loginView = ctx => {
  const onSubmit = async (data, form) => {
    // send request and validate
    if (Object.values(data).some(val => val == '')) {
      return alert('Please fill all the fields');
    }
    try {
      await userService.login(data.email, data.password);
      ctx.page.redirect('/');
    } catch (error) {
      alert(error.message);
    }
  };
  ctx.renderContent(loginTemplate(submitHandler(onSubmit)));
};
