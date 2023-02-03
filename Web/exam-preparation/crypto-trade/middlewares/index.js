const session = require('../middlewares/session');
const trimmer = require('../middlewares/trimmer');
const error = require('../middlewares/error');

module.exports = {
  session,
  trimmer,
  error,
};
