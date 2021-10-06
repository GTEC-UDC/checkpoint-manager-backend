const { authenticate } = require('@feathersjs/authentication').hooks;

const processPath = require('../../hooks/process-path');
const hooks = require('feathers-hooks-common');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [processPath()],
    update: [hooks.disallow('external')],
    patch: [hooks.disallow('external')],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
