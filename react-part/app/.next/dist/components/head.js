'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _propTypes = require('prop-types');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultDescription = '';
var defaultOGURL = '';
var defaultOGImage = '';

var Head = function Head(props) {
  return _react2.default.createElement(_head2.default, null, _react2.default.createElement('meta', { charset: 'UTF-8' }), _react2.default.createElement('title', null, props.title || ''), _react2.default.createElement('meta', { name: 'description', content: props.description || defaultDescription }), _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }), _react2.default.createElement('link', { rel: 'icon', sizes: '192x192', href: '/static/touch-icon.png' }), _react2.default.createElement('link', { rel: 'apple-touch-icon', href: '/static/touch-icon.png' }), _react2.default.createElement('link', { rel: 'mask-icon', href: '/static/favicon-mask.svg', color: '#49B882' }), _react2.default.createElement('link', { rel: 'icon', href: '/static/favicon.ico' }), _react2.default.createElement('meta', { property: 'og:url', content: props.url || defaultOGURL }), _react2.default.createElement('meta', { property: 'og:title', content: props.title || '' }), _react2.default.createElement('meta', { property: 'og:description', content: props.description || defaultDescription }), _react2.default.createElement('meta', { name: 'twitter:site', content: props.url || defaultOGURL }), _react2.default.createElement('meta', { name: 'twitter:card', content: 'summary_large_image' }), _react2.default.createElement('meta', { name: 'twitter:image', content: props.ogImage || defaultOGImage }), _react2.default.createElement('meta', { property: 'og:image', content: props.ogImage || defaultOGImage }), _react2.default.createElement('meta', { property: 'og:image:width', content: '1200' }), _react2.default.createElement('meta', { property: 'og:image:height', content: '630' }));
};

exports.default = Head;