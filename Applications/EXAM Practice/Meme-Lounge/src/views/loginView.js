import { html } from '../../node_modules/lit-html/lit-html.js';
import * as userService from '../api/userService.js';
import { submitHandler } from '../utils/utils.js';

const loginTemplate = submitHandler => html`
  <!-- *** render the login with the submit event -->
  <section id="login">
    <form id="login-form" @submit=${submitHandler}>
      <div class="container">
        <h1>Login</h1>
        <label for="email">Email</label>
        <input id="email" placeholder="Enter Email" name="email" type="text" />
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Enter Password" name="password" />
        <input type="submit" class="registerbtn button" value="Login" />
        <div class="container signin">
          <p>Dont have an account?<a href="/register">Sign up</a>.</p>
        </div>
      </div>
    </form>
  </section>
`;

export const loginView = ctx => {
  const onSubmit = async (data, form) => {
    // send request and validate
    try {
      if (Object.values(data).some(val => val == '')) {
        throw new Error('Please fill all the fields');
      }
      await userService.login(data.email, data.password);
      ctx.page.redirect('/memes');
    } catch (error) {
      ctx.renderError(error.message)
    }
    form.reset()
  };
  ctx.renderContent(loginTemplate(submitHandler(onSubmit)));
};
