/* @flow */
/* eslint-disable no-console, react/prop-types */

import React from "react"
import PropTypes from "prop-types"
import cx from 'classnames';
import DraggableList from "react-draggable-list"

type ImageListItem = {
  name: string;
  picture_url: string;
  image_path: string;
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

  getDragHeight = function() {
    return 100;
  }

  render() {
    const {item, itemSelected, dragHandle} = this.props;
    const {value} = this.state;
    const scale = itemSelected * 0.02 + 1;
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
        {dragHandle(<div className="dragHandle col-md-1" />)}
        <div className="col-md-4 image-item-name">
         <h2><a href={ item.image_path }>{ item.name }</a></h2>
        </div>
        <div className="col-md-7">
          <img src={ item.picture_url } style={{ width:'100px'}, {height:'100px'}}></img>
        </div>
      </div>
    );
  }
}

type ImageDraggableListState = {
  list: Array<ImageListItem>;
};

type ImageDraggableListProps = {
  imageslist: Array<*>;
}

export default class ImageDraggableList extends React.Component<ImageDraggableListProps, ImageDraggableListState> {
  _useContainer = true;
  
  
  state = {
    list: this.props.imageslist
  };
  
  
  render () {
    return (
      <React.Fragment>
        <DraggableList
            itemKey="name"
            template={ImageItem}
            list= { this.state.list }
            onMoveEnd={newList => this._onListChange(newList)}
            container={()=> document.body }
          />
      </React.Fragment>
    );
  }
  
  _onListChange(newList: Array<ImageListItem>) {
    this.setState({list: newList});
  }
}