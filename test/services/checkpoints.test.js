const assert = require('assert');
const app = require('../../src/app');

describe('\'checkpoints\' service', () => {
  it('registered the service', () => {
    const service = app.service('checkpoints');

    assert.ok(service, 'Registered the service');
  });
});
