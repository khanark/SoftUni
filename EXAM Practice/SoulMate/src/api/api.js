const HOST = 'http://localhost:3030';

async function request(method, url, data) {
  const options = {
    method,
    headers: {},
  };
  // whenever the user logs in check the name of the user token, because u might have changed it after using the login and register functions
  const user = JSON.parse(sessionStorage.getItem('userdata'));
  if (user) {
    options.headers['X-Authorization'] = user.token;
  }
  if (data) {
    options.headers['Content-Type'] = 'application/json';
    options.body = JSON.stringify(data);
  }
  try {
    const res = await fetch(HOST + url, options);
    if (res.status == 403) {
      sessionStorage.clear();
    }
    if (res.status == 204) {
      return
    }
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message);
    } else {
      return data;
    }
  } catch (error) {
    alert(error.message);
    throw new Error(error);
  }
}

const get = request.bind(null, 'get');
const post = request.bind(null, 'post');
const put = request.bind(null, 'put');
const del = request.bind(null, 'delete');

export { get, post, put, del };
