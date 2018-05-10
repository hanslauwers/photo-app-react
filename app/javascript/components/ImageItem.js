/* @flow */
/* eslint-disable no-console, react/prop-types */

import React from "react";
import cx from 'classnames';
import PropTypes from "prop-types";

type ImageListItem = {
  name: string;
  picture_url: string;
};

type ImageProps = {
  item: ImageListItem;
  itemSelected: number;
  dragHandle: *;
};
type ImageState = {
  value: number;
};

class ImageItem extends React.Component<ImageProps, ImageState> {
  state = {
    value: 0
  };

  _inc() {
    this.setState({
      value: this.state.value+1
    });
  }

  getDragHeight() {
    return this.props.item.name ? 47 : 28;
  }

  render() {
    const {item, itemSelected, dragHandle} = this.props;
    const {value} = this.state;
    const scale = itemSelected * 0.05 + 1;
    const shadow = itemSelected * 15 + 1;
    const dragged = itemSelected !== 0;

    return (
      <div
        className={cx('item', {dragged})}
        style={{
          transform: `scale(${scale})`,
          boxShadow: `rgba(0, 0, 0, 0.3) 0px ${shadow}px ${2 * shadow}px 0px`
        }}
      >
        {dragHandle(<div className="dragHandle" />)}
        <h2>{ item.name }</h2>
        <div>
          <img src={ item.picture_url }></img>
        </div>
      </div>
    );
  }
}
