const assert = require('assert');
const app = require('../../src/app');

describe('\'paths\' service', () => {
  it('registered the service', () => {
    const service = app.service('paths');

    assert.ok(service, 'Registered the service');
  });
});
