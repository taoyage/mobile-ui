import _Object$keys from '@babel/runtime-corejs3/core-js-stable/object/keys';
import _Object$getOwnPropertySymbols from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols';
import _filterInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/filter';
import _Object$getOwnPropertyDescriptor from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor';
import _forEachInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/for-each';
import _Object$getOwnPropertyDescriptors from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors';
import _Object$defineProperties from '@babel/runtime-corejs3/core-js-stable/object/define-properties';
import _Object$defineProperty from '@babel/runtime-corejs3/core-js-stable/object/define-property';
import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';

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
import cx from 'classnames';
import './styles/index.scss';
var classPrefix = 'ygm-spinner-loading';

var SpinnerLoading = function SpinnerLoading(props) {
  return /*#__PURE__*/ React.createElement('div', {
    className: cx(''.concat(classPrefix), ''.concat(classPrefix, '-color-').concat(props.color)),
    style: _objectSpread(
      _objectSpread({}, props.style),
      {},
      {
        width: props.size,
        height: props.size,
      }
    ),
  });
};

SpinnerLoading.defaultProps = {
  color: 'default',
  size: 32,
};
export default SpinnerLoading;
SpinnerLoading.displayName = 'SpinnerLoading';
