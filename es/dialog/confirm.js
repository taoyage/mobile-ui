import _Object$keys from '@babel/runtime-corejs3/core-js-stable/object/keys';
import _Object$getOwnPropertySymbols from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-symbols';
import _filterInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/filter';
import _Object$getOwnPropertyDescriptor from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor';
import _forEachInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/for-each';
import _Object$getOwnPropertyDescriptors from '@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptors';
import _Object$defineProperties from '@babel/runtime-corejs3/core-js-stable/object/define-properties';
import _Object$defineProperty from '@babel/runtime-corejs3/core-js-stable/object/define-property';
import _asyncToGenerator from '@babel/runtime-corejs3/helpers/asyncToGenerator';
import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import _regeneratorRuntime from '@babel/runtime-corejs3/regenerator';

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
    var _context3, _context4;
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? _forEachInstanceProperty((_context3 = ownKeys(Object(source), !0))).call(_context3, function (key) {
          _defineProperty(target, key, source[key]);
        })
      : _Object$getOwnPropertyDescriptors
      ? _Object$defineProperties(target, _Object$getOwnPropertyDescriptors(source))
      : _forEachInstanceProperty((_context4 = ownKeys(Object(source)))).call(_context4, function (key) {
          _Object$defineProperty(target, key, _Object$getOwnPropertyDescriptor(source, key));
        });
  }
  return target;
}

import _Promise from '@babel/runtime-corejs3/core-js-stable/promise';
import show from './show';

var confirm = function confirm(props) {
  var _props$confirmText = props.confirmText,
    confirmText = _props$confirmText === void 0 ? '确定' : _props$confirmText,
    _props$cancelText = props.cancelText,
    cancelText = _props$cancelText === void 0 ? '取消' : _props$cancelText;
  return new _Promise(function (resolve) {
    show(
      _objectSpread(
        _objectSpread({}, props),
        {},
        {
          closeOnAction: true,
          actions: [
            {
              key: 'cancel',
              text: cancelText,
              onClick: (function () {
                var _onClick = _asyncToGenerator(
                  /*#__PURE__*/ _regeneratorRuntime.mark(function _callee() {
                    var _props$onCancel;

                    return _regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch ((_context.prev = _context.next)) {
                          case 0:
                            _context.next = 2;
                            return (_props$onCancel = props.onCancel) === null || _props$onCancel === void 0
                              ? void 0
                              : _props$onCancel.call(props);

                          case 2:
                            resolve(false);

                          case 3:
                          case 'end':
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  })
                );

                function onClick() {
                  return _onClick.apply(this, arguments);
                }

                return onClick;
              })(),
            },
            {
              key: 'confirm',
              text: confirmText,
              color: 'primary',
              onClick: (function () {
                var _onClick2 = _asyncToGenerator(
                  /*#__PURE__*/ _regeneratorRuntime.mark(function _callee2() {
                    var _props$onConfirm;

                    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch ((_context2.prev = _context2.next)) {
                          case 0:
                            _context2.next = 2;
                            return (_props$onConfirm = props.onConfirm) === null || _props$onConfirm === void 0
                              ? void 0
                              : _props$onConfirm.call(props);

                          case 2:
                            resolve(true);

                          case 3:
                          case 'end':
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  })
                );

                function onClick() {
                  return _onClick2.apply(this, arguments);
                }

                return onClick;
              })(),
            },
          ],
        }
      )
    );
  });
};

export default confirm;
