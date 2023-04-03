import _defineProperty from '@babel/runtime-corejs3/helpers/defineProperty';
import _mapInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/map';
import _fillInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/fill';
import React from 'react';
import cx from 'classnames';
import './styles/swiper-page-indicator.scss';
var classPrefix = 'ygm-swiper-page-indicator';

var SwiperPageIndicator = function SwiperPageIndicator(props) {
  var dots = React.useMemo(
    function () {
      var _context, _context2;

      return _mapInstanceProperty(
        (_context = _fillInstanceProperty((_context2 = Array(props.total))).call(_context2, 0))
      ).call(_context, function (_, index) {
        return /*#__PURE__*/ React.createElement('div', {
          key: index,
          className: cx(
            ''.concat(classPrefix, '-dot'),
            _defineProperty({}, ''.concat(classPrefix, '-dot-active'), props.current === index)
          ),
        });
      });
    },
    [props]
  );
  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classPrefix,
    },
    dots
  );
};

export default SwiperPageIndicator;
SwiperPageIndicator.displayName = 'SwiperPageIndicator';
