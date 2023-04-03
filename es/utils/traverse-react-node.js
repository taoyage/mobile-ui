import _forEachInstanceProperty from '@babel/runtime-corejs3/core-js-stable/instance/for-each';
import React from 'react';
import { isFragment } from 'react-is';
export var traverseReactNode = function traverseReactNode(children, fn) {
  var handle = function handle(target) {
    var _context;

    var i = 0;

    _forEachInstanceProperty((_context = React.Children)).call(_context, target, function (child) {
      if (!isFragment(child)) {
        fn(child, i);
        i++;
      } else {
        handle(child.props.children);
      }
    });
  };

  handle(children);
};
