const app = require('../../src/app');

describe('\'linkgroup\' service', () => {
  it('registered the service', () => {
    const service = app.service('linkgroup');
    expect(service).toBeTruthy();
  });
});
