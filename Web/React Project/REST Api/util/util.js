module.exports = {
  handleError,
  userViewModel,
};

function handleError(response, statusCode, err) {
  if (err.name == 'ValidationError') {
    msg = Object.values(err.errors)[0].message;
  } else {
    msg = err.message;
  }
  response.status(statusCode).json({ err: msg, statusCode: statusCode });
}

function userViewModel(user, token) {
  const { _id, username, email, isBanned, role, photo } = user;
  return { _id, username, email, isBanned, role, photo, token };
}
