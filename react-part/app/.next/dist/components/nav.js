'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('./head');

var _head2 = _interopRequireDefault(_head);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var links = [{ href: 'https://github.com/segmentio/create-next-app', label: 'Github' }].map(function (link) {
  link.key = 'nav-link-' + link.href + '-' + link.label;
  return link;
});

var Nav = function Nav() {
  return _react2.default.createElement('nav', {
    'data-jsx': 1171467312
  }, _react2.default.createElement('ul', {
    'data-jsx': 1171467312
  }, _react2.default.createElement('li', {
    'data-jsx': 1171467312
  }, _react2.default.createElement(_link2.default, { prefetch: true, href: '/' }, _react2.default.createElement('a', {
    'data-jsx': 1171467312
  }, 'Home'))), _react2.default.createElement('ul', {
    'data-jsx': 1171467312
  }, links.map(function (_ref) {
    var key = _ref.key,
        href = _ref.href,
        label = _ref.label;
    return _react2.default.createElement('li', { key: key, 'data-jsx': 1171467312
    }, _react2.default.createElement(_link2.default, { href: href }, _react2.default.createElement('a', {
      'data-jsx': 1171467312
    }, label)));
  }))), _react2.default.createElement(_style2.default, {
    styleId: 1171467312,
    css: 'body {margin: 0;font-family: -apple-system,BlinkMacSystemFont,Avenir Next,Avenir,Helvetica,sans-serif;}nav[data-jsx="1171467312"] {text-align: center;}ul[data-jsx="1171467312"] {display:-webkit-flex; display:flex;justify-content: space-between;}nav[data-jsx="1171467312"] > ul[data-jsx="1171467312"] {padding: 4px 16px;}li[data-jsx="1171467312"] {display:-webkit-flex; display:flex;padding: 6px 8px;}a[data-jsx="1171467312"] {color: #067df7;text-decoration: none;font-size: 13px;}'
  }));
};

exports.default = Nav;