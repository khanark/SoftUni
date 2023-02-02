function parseError(error) {
  if (error.name == 'ValidationError') {
    return Object.values(error.errors).map(val => val.message)[0];
  } else {
    return error.message.split('\n')[0];
  }
}

module.exports = (err, req, res, next) => {
  const error = parseError(err);
  res.render(req.path.slice(req.path.lastIndexOf('/') + 1), {
    data: req.body,
    err: {
      message: error,
    },
  });
};
