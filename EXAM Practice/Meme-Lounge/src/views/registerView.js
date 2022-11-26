import { html } from '../../node_modules/lit-html/lit-html.js';
import * as userService from '../api/userService.js';
import { errorTemplate } from '../component/errorComponent.js';
import { submitHandler } from '../utils/utils.js';

const registerTemplate = submitHandler => html`
  <!-- *** render the login with the submit event -->
  <!-- Register Page ( Only for guest users ) -->
  <section id="register">
    <form id="register-form" @submit=${submitHandler}>
      <div class="container">
        <h1>Register</h1>
        <label for="username">Username</label>
        <input id="username" type="text" placeholder="Enter Username" name="username" />
        <label for="email">Email</label>
        <input id="email" type="text" placeholder="Enter Email" name="email" />
        <label for="password">Password</label>
        <input id="password" type="password" placeholder="Enter Password" name="password" />
        <label for="repeatPass">Repeat Password</label>
        <input id="repeatPass" type="password" placeholder="Repeat Password" name="repeatPass" />
        <div class="gender">
          <input type="radio" name="gender" id="female" value="female" />
          <label for="female">Female</label>
          <input type="radio" name="gender" id="male" value="male" checked />
          <label for="male">Male</label>
        </div>
        <input type="submit" class="registerbtn button" value="Register" />
        <div class="container signin">
          <p>Already have an account?<a href="#">Sign in</a>.</p>
        </div>
      </div>
    </form>
  </section>
`;

export const registerView = ctx => {
  const onSubmit = async (data, form) => {
    // send request and validate
    try {
      if (Object.values(data).some(val => val == '')) {
        throw new Error('Please fill all the fields');
      }
      if (data.password !== data.repeatPass) {
        throw new Error('password missmatch');
      }
      await userService.register(data.username, data.email, data.password, data.gender);
      ctx.page.redirect('/memes');
    } catch (error) {
      ctx.renderError(errorTemplate(error))
    }
    form.reset()
  };
  ctx.renderContent(registerTemplate(submitHandler(onSubmit)));
};
