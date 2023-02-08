const session = require('../middlewares/session');
const error = require('../middlewares/error');
const data = require('../middlewares/data');
const guards = require('../middlewares/guards');

module.exports = {
  session,
  error,
  data,
  guards,
};
