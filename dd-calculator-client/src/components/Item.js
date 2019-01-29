import React, { Component } from 'react';
import './Item.css';
import { DragSource } from 'react-dnd';

const itemSource = {
  beginDrag(props) {
    return props.item;
  },
  endDrag(props, monitor, component) {
    if (!monitor.didDrop()) {
      return;
    }
    let target = monitor.getDropResult().targetId.substring(1, 2);
    let targetNumber = parseInt(target, 10) + 1;
    return props.handleMove(props.item.id, props.boxSource, targetNumber);
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Item extends Component {
  render() {
    const { isDragging, connectDragSource } = this.props;
    const opacity = isDragging ? 0 : 1;
    return connectDragSource(
      <div className="item" style={{ opacity }}>
        {this.props.item.name}
      </div>
    );
  }
}

export default DragSource('item', itemSource, collect)(Item);
