// Initializes the `checkpoints` service on path `/checkpoints`
const { Checkpoints } = require('./checkpoints.class');
const createModel = require('../../models/checkpoints.model');
const hooks = require('./checkpoints.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: {
      default: 10,
      max: 100
    }
  };

  // Initialize our service with any options it requires
  app.use('/checkpoints', new Checkpoints(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('checkpoints');

  service.hooks(hooks);
};
