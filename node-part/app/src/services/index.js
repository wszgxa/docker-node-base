const weiboCollections = require('./weibo-collections/weibo-collections.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(weiboCollections);
};
