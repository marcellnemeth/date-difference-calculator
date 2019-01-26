import React, {Component} from 'react';
import { DropTarget } from 'react-dnd';
import "./Target.css";


function collect(connect, monitor) {
    return {
      // Call this function inside render()
      // to let React DnD handle the drag events:
      connectDropTarget: connect.dropTarget(),
      // You can ask the monitor about the current drag state:
      isOver: monitor.isOver(),
      isOverCurrent: monitor.isOver({ shallow: true }),
      canDrop: monitor.canDrop(),
      itemType: monitor.getItemType()
    };
  }

class Target extends Component{
    render(){
        const { isOver, canDrop, connectDropTarget } = this.props;
        const hovered = isOver?"lightblue":"white";
        return connectDropTarget(
            <div className="target" style={{background:hovered}}>
                Target
            </div>
        );
    }
}
export default DropTarget('item', {}, collect)(Target);