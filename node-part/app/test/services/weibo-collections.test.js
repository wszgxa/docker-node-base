const assert = require('assert');
const app = require('../../src/app');

describe('\'weibo_collections\' service', () => {
  it('registered the service', () => {
    const service = app.service('weibo-collections');

    assert.ok(service, 'Registered the service');
  });
});
