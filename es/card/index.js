import React from 'react';
import cx from 'classnames';
import './styles/index.scss';
var classPrefix = 'ygm-card';

var Card = function Card(props) {
  var renderHeader = function renderHeader() {
    if (!(props.title || props.extra)) {
      return null;
    }

    return /*#__PURE__*/ React.createElement(
      'div',
      {
        className: cx(''.concat(classPrefix, '-header'), props.headerClassName),
        onClick: props.onHeaderClick,
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: cx(''.concat(classPrefix, '-header-title'), props.titleClassName),
        },
        props.title
      ),
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: cx(''.concat(classPrefix, '-header-extra'), props.extraClassName),
        },
        props.extra
      )
    );
  };

  var renderBody = function renderBody() {
    if (!props.children) {
      return null;
    }

    return /*#__PURE__*/ React.createElement(
      'div',
      {
        className: cx(''.concat(classPrefix, '-body'), props.bodyClassName),
        onClick: props.onBodyClick,
        style: {
          paddingTop: props.title || props.extra ? 0 : 13,
        },
      },
      props.children
    );
  };

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      className: classPrefix,
    },
    renderHeader(),
    renderBody()
  );
};

export default Card;
Card.displayName = 'Card';
