function parseError(err) {
  if (err.name == 'ValidationError') {
    return Object.values(err.errors).map(val => val.message);
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
    console.log(req.body);
    res.render(path, { body: req.body, errors });
  };
};
