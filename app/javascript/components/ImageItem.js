/* @flow */
/* eslint-disable no-console, react/prop-types */

import React from "react"
import PropTypes from "prop-types"

type ImageListItem = {
  name: string;
  subtitle?: boolean;
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
  render () {
    return (
      <React.Fragment>
        ImageItem Test
      </React.Fragment>
    );
  }
}

export default ImageItem
