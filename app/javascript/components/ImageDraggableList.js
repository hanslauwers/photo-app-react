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
  id: number;
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
        <div className="col-sm-2 image-item-name">
         <h2><a href={ item.image_path }>{ item.name }</a></h2>
        </div>
        <div className="col-sm-4 image-item-picture">
          {dragHandle(<div className="dragHandle"><i className="fa fa-anchor anchor-symbol"></i></div>)}
          <img src={ item.picture_url } style={{ width:'200px'}, {height:'200px'}}></img>
        </div>
        <div className="col-sm-6 filler"></div>
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
  
  componentDidUpdate () {
    this.updateImagesOrder(this.state.list);
  }
  
  updateImagesOrder (newList: Array<*>)
  {
      var newestList = JSON.stringify(newList);
      fetch('/images/update_order.json', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: newestList
      });
  }
  
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