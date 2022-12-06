import { html } from '../../node_modules/lit-html/lit-html.js';
import * as userService from '../api/userService.js';
import { submitHandler } from '../utils/utils.js';

const registerTemplate = submitHandler => html`
  <!--Register Page-->
  <section id="register">
    <div class="container">
      <form id="register-form" @submit=${submitHandler}>
        <h1>Register</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />

        <p>Username</p>
        <input type="text" placeholder="Enter Username" name="username" required />

        <p>Password</p>
        <input type="password" placeholder="Enter Password" name="password" required />

        <p>Repeat Password</p>
        <input type="password" placeholder="Repeat Password" name="repeatPass" required />
        <hr />

        <input type="submit" class="registerbtn" value="Register" />
      </form>
      <div class="signin">
        <p>Already have an account? <a href="/login">Sign in</a>.</p>
      </div>
    </div>
  </section>
`;

export const registerView = ctx => {
  const onSubmit = async (data, form) => {
    // send request and validate
    if (Object.values(data).some(val => val == '')) {
      return alert('Please fill all the fields');
    }
    if (data.password !== data.repeatPass) {
      return alert('password missmatch');
    }
    try {
      await userService.register(data.username, data.password);
      ctx.page.redirect('/catalog');
    } catch (error) {
      alert(error.message);
    }
  };
  ctx.renderContent(registerTemplate(submitHandler(onSubmit)));
};
