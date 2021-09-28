const assert = require('assert');
const app = require('../../src/app');

describe('\'checkpoint\' service', () => {
  it('registered the service', () => {
    const service = app.service('checkpoint');

    assert.ok(service, 'Registered the service');
  });
});
