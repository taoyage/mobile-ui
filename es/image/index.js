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
import useIntersectionObserver from '../hooks/useIntersectionObserver';

var Image = function Image(props) {
  var imageRef = React.useRef(null);
  var observerEntry = useIntersectionObserver(imageRef, {
    freezeOnceVisible: true,
  });
  return /*#__PURE__*/ React.createElement('img', {
    className: props.className,
    ref: imageRef,
    src:
      (observerEntry !== null && observerEntry !== void 0 && observerEntry.isIntersecting) || !props.lazy
        ? props.src
        : props.loading,
    alt: props.alt,
    style: _objectSpread(
      _objectSpread({}, props.style),
      {},
      {
        objectFit: props.fit,
      }
    ),
    width: props.width,
    height: props.height,
    onClick: props.onClick,
    onError: props.onError,
    onLoad: props.onLoad,
    draggable: false,
  });
};

Image.defaultProps = {
  alt: '',
  width: '100%',
  height: '100%',
  lazy: false,
  fit: 'fill',
  loading:
    'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mM8/x8AAqMB0Fk+W34AAAAASUVORK5CYII=',
};
Image.displayName = 'Image';
export default Image;
