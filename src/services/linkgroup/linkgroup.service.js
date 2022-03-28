// Initializes the `linkgroup` service on path `/linkgroup`
const { Linkgroup } = require('./linkgroup.class');
const createModel = require('../../models/linkgroup.model');
const hooks = require('./linkgroup.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
  };

  // Initialize our service with any options it requires
  app.use('/linkgroup', new Linkgroup(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('linkgroup');

  service.hooks(hooks);
};
