import _slicedToArray from '@babel/runtime-corejs3/helpers/slicedToArray';
import _mapInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/map';
import _setInterval from '@babel/runtime-corejs3/core-js-stable/set-interval';
import React from 'react';
import SwiperItem from './swiper-item';
import SwiperPageIndicator from './swiper-page-indicator';
import { modulus } from './utils';
import './styles/swiper.scss';
var classPrefix = 'ygm-swiper';

var Swiper = function Swiper(props) {
  var _React$useState = React.useState(props.defaultIndex || 0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    currentIndex = _React$useState2[0],
    setCurrentIndex = _React$useState2[1];

  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    dragging = _React$useState4[0],
    setDragging = _React$useState4[1];

  var startRef = React.useRef(0);
  var slideRatioRef = React.useRef(0);
  var trackRef = React.useRef(null);
  var autoPlaying = React.useRef(false);
  var intervalRef = React.useRef(0);

  var _React$useMemo = React.useMemo(
      function () {
        var _context;

        var count = 0;

        var validChildren = _mapInstanceProperty((_context = React.Children)).call(
          _context,
          props.children,
          function (child) {
            // 验证对象是否是一个React元素
            if (!(/*#__PURE__*/ React.isValidElement(child))) return null; // 验证是否是一个SwiperItem类型

            if (child.type !== SwiperItem) {
              console.warn('Swiper children must be Swiper.Item components');
            }

            count++;
            return child;
          }
        );

        return {
          validChildren: validChildren,
          count: count,
        };
      },
      [props.children]
    ),
    validChildren = _React$useMemo.validChildren,
    count = _React$useMemo.count;

  var getFinalPosition = function getFinalPosition(index) {
    var finalPosition = -currentIndex * 100 + index * 100;
    if (!props.loop) return finalPosition;
    var totalWidth = count * 100; // 无限轮播，当前图的前后平均分配轮播图数量

    var flagWidth = totalWidth / 2; // 1 2 3 4 ===》3 4 1 2
    // 4===> 300 , flagWidth = 200
    // (300 + 200) % 400 = 100 100 - flagWidth ===> -100

    finalPosition = modulus(finalPosition + flagWidth, totalWidth) - flagWidth;
    return finalPosition;
  };

  var getTransition = function getTransition(position) {
    if (dragging) {
      return '';
    } else if (autoPlaying.current) {
      if (position === -100 || position === 0) {
        return 'transform 0.3s ease-out';
      } else {
        return '';
      }
    } else if (position < -100) {
      return '';
    }

    return 'transform 0.3s ease-out';
  };

  var renderSwiperItem = function renderSwiperItem() {
    var _context2;

    return /*#__PURE__*/ React.createElement(
      'div',
      {
        className: ''.concat(classPrefix, '-track-inner'),
      },
      _mapInstanceProperty((_context2 = React.Children)).call(_context2, validChildren, function (child, index) {
        var position = getFinalPosition(index);
        return /*#__PURE__*/ React.createElement(
          'div',
          {
            className: ''.concat(classPrefix, '-slide'),
            style: {
              left: '-'.concat(index * 100, '%'),
              transform: 'translate3d('.concat(position, '%,0,0)'),
              transition: getTransition(position),
            },
          },
          child
        );
      })
    );
  };

  var getSlideRatio = function getSlideRatio(diff) {
    var element = trackRef.current;
    if (!element) return 0;
    return diff / element.offsetWidth;
  };

  var boundIndex = React.useCallback(
    function (currentIndex) {
      var min = 0;
      var max = count - 1;
      var ret = currentIndex;
      ret = Math.max(currentIndex, min);
      ret = Math.min(ret, max);
      return ret;
    },
    [count]
  );
  var swipeTo = React.useCallback(
    function (index) {
      var targetIndex = props.loop ? modulus(index, count) : boundIndex(index);
      setCurrentIndex(targetIndex);
    },
    [boundIndex, count, props.loop]
  );
  var swipeNext = React.useCallback(
    function () {
      swipeTo(currentIndex + 1);
    },
    [swipeTo, currentIndex]
  );

  var onTouchEnd = function onTouchEnd() {
    var index = Math.round(slideRatioRef.current);
    slideRatioRef.current = 0;
    var position = currentIndex + index;
    swipeTo(position);
    setDragging(false);
    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('touchend', onTouchEnd);
  };

  var onTouchMove = function onTouchMove(e) {
    var currentX = e.changedTouches[0].clientX;
    var diff = startRef.current - currentX;
    slideRatioRef.current = getSlideRatio(diff);
    var position = currentIndex + slideRatioRef.current;

    if (!props.loop) {
      position = boundIndex(position);
    }

    setCurrentIndex(position);
  };

  var onTouchStart = function onTouchStart(e) {
    startRef.current = e.changedTouches[0].clientX;
    setDragging(true);
    clearInterval(intervalRef.current);
    autoPlaying.current = false;
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onTouchEnd);
  };

  React.useEffect(
    function () {
      if (!props.autoplay || dragging) return;
      intervalRef.current = _setInterval(function () {
        autoPlaying.current = true;
        swipeNext();
      }, props.autoPlayInterval);
      return function () {
        clearInterval(intervalRef.current);
      };
    },
    [dragging, props.autoPlayInterval, props.autoplay, swipeNext]
  );

  if (count === 0 || !validChildren) {
    console.warn('Swiper at least one child element is required');
    return null;
  }

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classPrefix,
      style: props.style,
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: ''.concat(classPrefix, '-track'),
        onTouchStart: onTouchStart,
        ref: trackRef,
      },
      renderSwiperItem()
    ),
    props.showIndicator &&
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: ''.concat(classPrefix, '-indicator'),
        },
        /*#__PURE__*/ React.createElement(SwiperPageIndicator, {
          total: count,
          current: slideRatioRef.current > 0 ? Math.floor(currentIndex) : Math.ceil(currentIndex),
          indicatorClassName: props.indicatorClassName,
        })
      )
  );
};

export default Swiper;
Swiper.defaultProps = {
  autoplay: false,
  defaultIndex: 0,
  showIndicator: true,
  loop: false,
  autoPlayInterval: 3000,
};
Swiper.displayName = 'Swiper';
