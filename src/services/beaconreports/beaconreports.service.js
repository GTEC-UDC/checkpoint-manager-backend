// Initializes the `beaconreports` service on path `/beaconreports`
const { Beaconreports } = require('./beaconreports.class');
const createModel = require('../../models/beaconreports.model');
const hooks = require('./beaconreports.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/beaconreports', new Beaconreports(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('beaconreports');

  service.hooks(hooks);
};
