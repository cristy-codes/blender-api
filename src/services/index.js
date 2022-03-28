const linkgroup = require('./linkgroup/linkgroup.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(linkgroup);
};
