module.exports = {
  setCookie,
};

function setCookie(response, token) {
  response.cookie('token', token, { httpOnly: true });
}
