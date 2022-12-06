import { html } from '../../node_modules/lit-html/lit-html.js';
import * as userService from '../api/userService.js';
import { submitHandler } from '../utils/utils.js';

const loginTemplate = submitHandler => html`
  <section id="login">
    <div class="container">
      <form id="login-form" action="#" method="post" @submit=${submitHandler}>
        <h1>Login</h1>
        <p>Please enter your credentials.</p>
        <hr />

        <p>Username</p>
        <input placeholder="Enter Username" name="username" type="text" />

        <p>Password</p>
        <input type="password" placeholder="Enter Password" name="password" />
        <input type="submit" class="registerbtn" value="Login" />
      </form>
      <div class="signin">
        <p>Dont have an account? <a href="/register">Sign up</a>.</p>
      </div>
    </div>
  </section>
`;

export const loginView = ctx => {
  const onSubmit = async (data, form) => {
    // send request and validate
    if (Object.values(data).some(val => val == '')) {
      return alert('Please fill all the fields');
    }
    try {
      await userService.login(data.username, data.password);
      ctx.page.redirect('/catalog');
    } catch (error) {
      alert(error.message);
    }
  };
  ctx.renderContent(loginTemplate(submitHandler(onSubmit)));
};
