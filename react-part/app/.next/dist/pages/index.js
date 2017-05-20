'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('../components/head');

var _head2 = _interopRequireDefault(_head);

var _nav = require('../components/nav');

var _nav2 = _interopRequireDefault(_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  return _react2.default.createElement('div', {
    'data-jsx': 904707230
  }, _react2.default.createElement(_head2.default, { title: 'Home' }), _react2.default.createElement(_nav2.default, null), _react2.default.createElement('div', { className: 'hero', 'data-jsx': 904707230
  }, _react2.default.createElement('h1', { className: 'title', 'data-jsx': 904707230
  }, 'Welcome to Next!'), _react2.default.createElement('p', { className: 'description', 'data-jsx': 904707230
  }, 'To get started, edit ', _react2.default.createElement('code', {
    'data-jsx': 904707230
  }, 'pages/index.js'), ' and save to reload.'), _react2.default.createElement('div', { className: 'row', 'data-jsx': 904707230
  }, _react2.default.createElement(_link2.default, { href: 'https://github.com/zeit/next.js#getting-started' }, _react2.default.createElement('a', { className: 'card', 'data-jsx': 904707230
  }, _react2.default.createElement('h3', {
    'data-jsx': 904707230
  }, 'Getting Started \u2192'), _react2.default.createElement('p', {
    'data-jsx': 904707230
  }, 'Learn more about Next on Github and in their examples'))), _react2.default.createElement(_link2.default, { href: 'https://open.segment.com/create-next-app' }, _react2.default.createElement('a', { className: 'card', 'data-jsx': 904707230
  }, _react2.default.createElement('h3', {
    'data-jsx': 904707230
  }, 'Examples \u2192'), _react2.default.createElement('p', {
    'data-jsx': 904707230
  }, 'Find other example boilerplates on the ', _react2.default.createElement('code', {
    'data-jsx': 904707230
  }, 'create-next-app'), ' site'))), _react2.default.createElement(_link2.default, { href: 'https://github.com/segmentio/create-next-app' }, _react2.default.createElement('a', { className: 'card', 'data-jsx': 904707230
  }, _react2.default.createElement('h3', {
    'data-jsx': 904707230
  }, 'Create Next App \u2192'), _react2.default.createElement('p', {
    'data-jsx': 904707230
  }, 'Was this tool helpful? Let us know how we can improve it'))))), _react2.default.createElement(_style2.default, {
    styleId: 904707230,
    css: '.hero[data-jsx="904707230"] {width: 100%;color: #333;}.title[data-jsx="904707230"] {margin: 0;width: 100%;padding-top: 80px;line-height: 1.15;font-size: 48px;}.title[data-jsx="904707230"],.description[data-jsx="904707230"] {text-align: center;}.row[data-jsx="904707230"] {max-width: 880px;margin: 80px auto 40px;display:-webkit-flex; display:flex;-webkit-flex-direction: row;-moz-flex-direction: row;flex-direction: row;justify-content: space-around;}.card[data-jsx="904707230"] {padding: 18px 18px 24px;width: 220px;text-align: left;text-decoration: none;color: #434343;border: 1px solid #9B9B9B;}.card[data-jsx="904707230"]:hover {border-color: #067df7;}.card[data-jsx="904707230"] h3[data-jsx="904707230"] {margin: 0;color: #067df7;font-size: 18px;}.card[data-jsx="904707230"] p[data-jsx="904707230"] {margin: 0;padding: 12px 0 0;font-size: 13px;color: #333;}'
  }));
};