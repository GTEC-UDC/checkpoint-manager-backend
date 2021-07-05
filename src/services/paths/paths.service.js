// Initializes the `paths` service on path `/paths`
const { Paths } = require('./paths.class');
const createModel = require('../../models/paths.model');
const hooks = require('./paths.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/paths', new Paths(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('paths');

  service.hooks(hooks);
};
