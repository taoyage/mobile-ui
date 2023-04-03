import _Object$keys from '@babel/runtime-corejs3/core-js-stable/object/keys';
import _Object$getOwnPropertySymbols from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols';
import _filterInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/filter';
import _Object$getOwnPropertyDescriptor from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor';
import _forEachInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/for-each';
import _Object$getOwnPropertyDescriptors from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors';
import _Object$defineProperties from '@babel/runtime-corejs3/core-js-stable/object/define-properties';
import _Object$defineProperty from '@babel/runtime-corejs3/core-js-stable/object/define-property';
import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import _slicedToArray from '@babel/runtime-corejs3/helpers/slicedToArray';

function ownKeys(object, enumerableOnly) {
  var keys = _Object$keys(object);
  if (_Object$getOwnPropertySymbols) {
    var symbols = _Object$getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = _filterInstanceProperty(symbols).call(symbols, function (sym) {
        return _Object$getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var _context, _context2;
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? _forEachInstanceProperty((_context = ownKeys(Object(source), !0))).call(_context, function (key) {
          _defineProperty(target, key, source[key]);
        })
      : _Object$getOwnPropertyDescriptors
      ? _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source))
      : _forEachInstanceProperty((_context2 = ownKeys(Object(source)))).call(_context2, function (key) {
          _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}

import React from 'react';
import { renderToBody } from './render';

var renderImptratively = function renderImptratively(element) {
  var Wraper = function Wraper() {
    var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      visible = _React$useState2[0],
      setVisible = _React$useState2[1];

    var onClose = function onClose() {
      var _element$props, _element$props$onClos;

      (_element$props = element.props) === null || _element$props === void 0
        ? void 0
        : (_element$props$onClos = _element$props.onClose) === null || _element$props$onClos === void 0
        ? void 0
        : _element$props$onClos.call(_element$props);
      setVisible(false);
    };

    var afterClose = function afterClose() {
      unmout();
    };

    React.useEffect(function () {
      setVisible(true);
    }, []);
    return /*#__PURE__*/ React.cloneElement(
      element,
      _objectSpread(
        _objectSpread({}, element.props),
        {},
        {
          visible: visible,
          onClose: onClose,
          afterClose: afterClose,
        }
      )
    );
  };

  var unmout = renderToBody(/*#__PURE__*/ React.createElement(Wraper, null));
};

export default renderImptratively;
