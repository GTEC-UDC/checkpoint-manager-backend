const users = require('./users/users.service.js');
const routes = require('./routes/routes.service.js');
const paths = require('./paths/paths.service.js');
const checkpoints = require('./checkpoints/checkpoints.service.js');
const beaconreports = require('./beaconreports/beaconreports.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(routes);
  app.configure(paths);
  app.configure(checkpoints);
  app.configure(beaconreports);
};
