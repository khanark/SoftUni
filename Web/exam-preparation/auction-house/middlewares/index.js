const session = require('../middlewares/session');
const error = require('../middlewares/error');
const data = require('../middlewares/data');
const guards = require('../middlewares/guards');
const trimmer = require('../middlewares/trimmer');

module.exports = {
  session,
  error,
  data,
  trimmer,
  guards,
};
