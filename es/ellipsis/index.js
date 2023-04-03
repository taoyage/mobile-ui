import _slicedToArray from '@babel/runtime-corejs3/helpers/slicedToArray';
import _sliceInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/slice';
import _forEachInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/for-each';
import _concatInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/concat';
import React from 'react';
import useIsomorphicLayoutEffect from '../hooks/useIsomorphicLayoutEffect';
import { pxToNumber } from './utils';
import useResizeObserver from '../hooks/useResizeObserver';
import './styles/index.scss';
var classPrefix = 'ygm-ellipsis';
var ellipsisTailing = '...';

var Ellipsis = function Ellipsis(props) {
  var _React$useState = React.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    exceeded = _React$useState2[0],
    setExceeded = _React$useState2[1];

  var _React$useState3 = React.useState(false),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    expanded = _React$useState4[0],
    setExpanded = _React$useState4[1];

  var _React$useState5 = React.useState(''),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    ellipsised = _React$useState6[0],
    setEllipsised = _React$useState6[1];

  var containerRef = React.useRef(null);
  var calcEllipsised = React.useCallback(
    function () {
      var element = containerRef.current;
      if (!element) return;
      var originStyle = window.getComputedStyle(element);
      var container = document.createElement('div');

      var styleNames = _sliceInstanceProperty(Array.prototype).apply(originStyle);

      _forEachInstanceProperty(styleNames).call(styleNames, function (name) {
        container.style.setProperty(name, originStyle.getPropertyValue(name));
      });

      container.innerText = props.text;
      container.style.height = 'auto';
      container.style.position = 'fixed';
      container.style.visibility = 'hidden';
      document.body.appendChild(container);
      var lineHeight = pxToNumber(originStyle.lineHeight);
      var maxHeight = lineHeight * props.rows;
      var height = container.getBoundingClientRect().height;

      var check = function check(left, right) {
        var l = left;
        var r = right;
        var text = '';

        while (l < r) {
          var _context, _context2, _context3, _context4;

          var m = Math.floor((l + r) / 2);

          if (l === m) {
            break;
          }

          var tempText = _sliceInstanceProperty((_context = props.text)).call(_context, l, m);

          container.innerText = _concatInstanceProperty(
            (_context2 = _concatInstanceProperty(
              (_context3 = _concatInstanceProperty((_context4 = ''.concat(text))).call(_context4, tempText))
            ).call(_context3, ellipsisTailing))
          ).call(_context2, props.expand);
          var _height = container.getBoundingClientRect().height;

          if (_height > maxHeight) {
            r = m;
          } else {
            text += tempText;
            l = m;
          }
        }

        return text;
      };

      if (maxHeight >= height) {
        setExceeded(false);
      } else {
        setExceeded(true);
        var ellipsisedValue = check(0, props.text.length);
        setEllipsised(ellipsisedValue);
      }

      document.body.removeChild(container);
    },
    [props.expand, props.rows, props.text]
  );
  useIsomorphicLayoutEffect(
    function () {
      calcEllipsised();
    },
    [calcEllipsised]
  );
  useResizeObserver(calcEllipsised, containerRef);

  var renderContent = function renderContent() {
    if (!exceeded) {
      return props.text;
    }

    if (expanded) {
      return /*#__PURE__*/ React.createElement(
        React.Fragment,
        null,
        props.text,
        props.collapse && /*#__PURE__*/ React.createElement('a', null, props.collapse)
      );
    } else {
      return /*#__PURE__*/ React.createElement(
        React.Fragment,
        null,
        ellipsised,
        ellipsisTailing,
        props.expand && /*#__PURE__*/ React.createElement('a', null, props.expand)
      );
    }
  };

  var onContent = function onContent(e) {
    e.stopPropagation();
    if (!props.expand && !props.collapse) return;

    if (props.expand && !props.collapse) {
      setExpanded(true);
      return;
    }

    setExpanded(!expanded);
  };

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classPrefix,
      ref: containerRef,
      onClick: onContent,
    },
    renderContent()
  );
};

Ellipsis.defaultProps = {
  text: '',
  rows: 1,
  expand: '',
  collapse: '',
};
Ellipsis.displayName = 'Ellipsis';
export default Ellipsis;
