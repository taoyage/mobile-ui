import React from 'react';
import Dialog from './dialog';
import renderImptratively from '../utils/render-imperatively';

function show(props) {
  renderImptratively(/*#__PURE__*/ React.createElement(Dialog, props));
}

export default show;
