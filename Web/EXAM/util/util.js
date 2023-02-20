module.exports = {
  hasEmptyFields,
  parseError,
};

function hasEmptyFields(body) {
  return Object.values(body).some(val => val == '');
}

function parseError(err) {
  if (err.name == 'ValidationError') {
    return Object.values(err.errors)[0].message;
  } else {
    return err.message;
  }
}
