const session = require('../middlewares/session');
const trimmer = require('../middlewares/trimmer');
const error = require('../middlewares/error');
const getData = require('../middlewares/data');
const guards = require('../middlewares/guards');

module.exports = {
  session,
  trimmer,
  error,
  getData,
  guards,
};
