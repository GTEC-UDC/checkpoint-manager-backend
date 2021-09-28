const assert = require('assert');
const app = require('../../src/app');

describe('\'beaconreports\' service', () => {
  it('registered the service', () => {
    const service = app.service('beaconreports');

    assert.ok(service, 'Registered the service');
  });
});
