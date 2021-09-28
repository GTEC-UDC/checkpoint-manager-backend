const { authenticate } = require('@feathersjs/authentication').hooks;
const hooks = require('feathers-hooks-common');

const setOwner = require('../../hooks/set-owner');

module.exports = {
  before: {
    all: [ authenticate('jwt') ],
    find: [],
    get: [],
    create: [setOwner()],
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
