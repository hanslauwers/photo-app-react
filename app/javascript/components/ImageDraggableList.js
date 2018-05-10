import React from "react"
import PropTypes from "prop-types"
import DraggableList from "react-draggable-list"
import ImageItem from "./ImageItem.js"

class ImageDraggableList extends React.Component {
  render () {
    return (
      <React.Fragment>
        <ImageItem />
      </React.Fragment>
    );
  }
}

export default ImageDraggableList
