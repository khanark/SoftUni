const session = require('../middlewares/session');
const guards = require('../middlewares/guards');
const trimmer = require('../middlewares/trimmer');
const error = require('../middlewares/error');
const preload = require('../middlewares/preload');

module.exports = {
  session,
  guards,
  trimmer,
  error,
  preload,
};
