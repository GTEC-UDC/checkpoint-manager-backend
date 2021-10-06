const assert = require('assert');
const app = require('../../src/app');

describe('\'timesyncs\' service', () => {
  it('registered the service', () => {
    const service = app.service('timesyncs');

    assert.ok(service, 'Registered the service');
  });
});
