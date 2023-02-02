function setCookieAndRedirect(location, response, token) {
    response.cookie('token', token, { httpOnly: true });
    response.redirect(location);
}

module.exports = {
    setCookieAndRedirect,
};
