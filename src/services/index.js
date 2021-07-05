const users = require('./users/users.service.js');
const routes = require('./routes/routes.service.js');
const paths = require('./paths/paths.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(routes);
  app.configure(paths);
};
