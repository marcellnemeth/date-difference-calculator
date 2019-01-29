import React, { Component } from 'react';
import './Box.css';
import Item from './Item';
import { DropTarget } from 'react-dnd';


var boxTarget;
function collect(connect, monitor) {
    return {
      connectDropTarget: connect.dropTarget(),
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop(),
      itemType: monitor.getItemType()
    };
  }

const BoxObject = {
    drop(props, monitor, component) {
        boxTarget=props.boxSource;
        
        console.log(monitor.targetId)
        const obj = {
            targetId: monitor.targetId
        }
        return obj;
          
    }
}

class Box extends Component {
  render() {
      
    const { isOver, connectDropTarget } = this.props;
    const hovered = isOver?"gainsboro":"white";
   
    return connectDropTarget(
      <div className="box" style={{background:hovered}}>
        <div className="items">
          {this.props.items?this.props.items.map(item => (
            <Item
              key={item.id}
              item={item}
              handleMove={this.props.handleMove}
              boxSource={this.props.boxSource}
              boxTarget={boxTarget}
            />
          )):''}
        </div>
      </div>
    );
  }
}

export default DropTarget('item', BoxObject, collect)(Box);
