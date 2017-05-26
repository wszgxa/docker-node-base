// Initializes the `weibo_collections` service on path `/weibo-collections`
const createService = require('feathers-mongoose');
const createModel = require('../../models/weibo-collections.model');
const hooks = require('./weibo-collections.hooks');
const filters = require('./weibo-collections.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'weibo-collections',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/weibo-collections', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('weibo-collections');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
