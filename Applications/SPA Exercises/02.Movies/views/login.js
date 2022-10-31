import { setUserData, showSection } from '../scripts/common.js';
import { homePageView } from './home.js';

document.getElementById('login-form').addEventListener('submit', handleForm);

export function loginPageView() {
  showSection(document.getElementById('form-login'));
}

async function handleForm(ev) {
  ev.preventDefault();
  const formData = new FormData(ev.target);
  const { email, password } = Object.fromEntries(formData);
  if (email == '' || password == '') {
    return alert('empty fields');
  }
  try {
    const res = await fetch('http://localhost:3030/users/login', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (res.ok == false) {
      throw new Error(data.message);
    }
    setUserData({ email: data.email, token: data.accessToken, id: data._id });
    homePageView();
  } catch (error) {
    alert(error.message);
  }
}
