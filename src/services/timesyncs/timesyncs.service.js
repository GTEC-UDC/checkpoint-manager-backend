// Initializes the `timesyncs` service on path `/timesyncs`
const { Timesyncs } = require('./timesyncs.class');
const createModel = require('../../models/timesyncs.model');
const hooks = require('./timesyncs.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/timesyncs', new Timesyncs(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('timesyncs');

  service.hooks(hooks);
};
