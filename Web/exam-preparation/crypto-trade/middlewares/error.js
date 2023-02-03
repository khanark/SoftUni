function errorParser(err) {
  if (err.name == 'ValidationError') {
    return Object.values(err.error).map(val => val.message)[0];
  } else {
    return err.message.split('\n')[0];
  }
}

module.exports = () => {
  return (err, req, res, next) => {
    console.log(err);
    const error = errorParser(err);
    res.render(req.url.slice(req.url.lastIndexOf('/') + 1), {
      data: req.body,
      error,
    });
  };
};