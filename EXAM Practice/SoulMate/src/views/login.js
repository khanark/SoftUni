import { login } from '../api/user.js';
import { html } from '../lib/lib.js';
import { createSubmit } from '../util.js';

const loginTemplate = onSubmit => html`
  <section id="login">
    <div class="form" @submit=${onSubmit}>
      <h2>Login</h2>
      <form class="login-form">
        <input type="text" name="email" id="email" placeholder="email" />
        <input type="password" name="password" id="password" placeholder="password" />
        <button type="submit">login</button>
        <p class="message">Not registered? <a href="/register">Create an account</a></p>
      </form>
    </div>
  </section>
`;

export async function showLoginPage(ctx) {
  ctx.render(loginTemplate(createSubmit(onSubmit)));
  async function onSubmit(data, form) {
    debugger;
    if (Object.values(data).some(val => val == '')) {
      form.reset();
      return alert('please fill all the empty fields');
    }
    await login(data.email, data.password);
    ctx.page.redirect('/catalog');
  }
}
