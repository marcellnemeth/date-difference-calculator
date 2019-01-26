import React, {Component} from 'react';
import './Item.css';
import { DragSource } from 'react-dnd';


const itemSource = {
    beginDrag(props){
        return props.item;
    },
    endDrag(props,monitor,component){
        if(!monitor.didDrop()){
            return;
        }
        console.log(props.boxSource)
        let target = monitor.getDropResult().targetId.substring(1,2);
        let targetNumber = parseInt(target,10)+1;
        return props.handleMove(props.item.id,props.boxSource,targetNumber);
    },
  

}

function collect(connect, monitor) {
    return {
      // Call this function inside render()
      // to let React DnD handle the drag events:
      connectDragSource: connect.dragSource(),
      // You can ask the monitor about the current drag state:
      isDragging: monitor.isDragging()
    };
  }

class Item extends Component {
    render(){
        const {isDragging,connectDragSource,item,boxKey}= this.props;
        const opacity = isDragging?0:1;
        return connectDragSource(
            <div className="item" style={{opacity}}>
                {this.props.item.name}
            </div>
        );
    }
}

export default DragSource('item', itemSource, collect)(Item);