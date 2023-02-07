function parseError(err) {
  if (err.name == 'ValidationError') {
    return Object.values(err.errors).map(val => val.message);
  } else if (err.name == 'MongoServerError') {
    return ['User already exists'];
  } else {
    return err.message.split('\n');
  }
}

module.exports = () => {
  return (err, req, res, next) => {
    const errors = parseError(err);
    let path = req.url.slice(req.url.lastIndexOf('/') + 1);
    if (path == 'bid') {
      path = 'details';
    }
    res.render(path, { body: req.body, errors });
  };
};
