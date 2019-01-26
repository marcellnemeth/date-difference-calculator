import React, { Component } from 'react';
import Item from './components/Item';
import Target from './components/Target';
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import MultiBackend from 'react-dnd-multi-backend';
  import HTML5toTouch from 'react-dnd-multi-backend/lib/HTML5toTouch';

import './App.css';
import Box from './components/Box';
import axios from 'axios';
import Result from './components/Result';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items1: [
        { id: 1, name: '2019.01.22' },
        { id: 2, name: '2018.04.30' },
        { id: 3, name: '2015.08.10' },
        { id: 4, name: '2016.10.20' },
        { id: 5, name: '2019.01.22' },
        { id: 6, name: '2018.04.30' },
        { id: 7, name: '2015.08.10' },
        { id: 8, name: '2016.10.20' },
        { id: 9, name: '2019.01.22' },
        { id: 10, name: '2018.04.30' },
       
      ],
      items2: [],
      items3: [],
      result:null
    };
  }

  moveItem = (id, boxSource, boxTarget) => {
    if (boxSource && boxTarget) {
      if (boxSource === 1) {
        if (boxTarget === 1) {
          return;
        }
        if (boxTarget === 2) {
          this.setState(prevState => {
            let itemsSource = prevState.items1;
            let itemsTarget = prevState.items2;
            const index = itemsSource.findIndex(item => item.id === id);
          

            if (itemsTarget.length > 0) {
              itemsSource.push(itemsTarget[0]);
              itemsTarget.splice(0);
            }
            itemsTarget.push(itemsSource[index]);
          
            return itemsTarget;
          });
        }
        if (boxTarget === 3) {
          this.setState(prevState => {
            let itemsSource = prevState.items1;
            let itemsTarget = prevState.items3;
            const index = itemsSource.findIndex(item => item.id === id);

            if (itemsTarget.length > 0) {
              itemsSource.push(itemsTarget[0]);
              itemsTarget.splice(0);
            }
            itemsTarget.push(itemsSource[index]);
            return itemsTarget;
          });
        }
        this.setState(prevState => {
          let items1 = prevState.items1;

          const index = items1.findIndex(item => item.id === id);

          items1.splice(index, 1);

          return items1;
        });
      }

      if (boxSource === 2) {
        if(boxTarget == 2){
          return;
        }
        if (boxTarget === 1) {
          this.setState(prevState => {
            let itemsSource = prevState.items2;
            let itemsTarget = prevState.items1;
            const index = itemsSource.findIndex(item => item.id === id);

            itemsTarget.push(itemsSource[index]);
            return itemsTarget;
          });
        }
        if (boxTarget === 3) {
          this.setState(prevState => {
            let itemsSource = prevState.items2;
            let itemsTarget = prevState.items3;
            const index = itemsSource.findIndex(item => item.id === id);

            if (itemsTarget.length > 0) {
              itemsSource.push(itemsTarget[0]);
              itemsTarget.splice(0);
            }
            itemsTarget.push(itemsSource[index]);
            return itemsTarget;
          });
        }
        this.setState(prevState => {
          let items2 = prevState.items2;

          const index = items2.findIndex(item => item.id === id);

          items2.splice(index, 1);

          return items2;
        });
      }

      if (boxSource === 3) {
        if(boxTarget === 3){
          return;
        }
        if (boxTarget === 1) {
          this.setState(prevState => {
            let itemsSource = prevState.items3;
            let itemsTarget = prevState.items1;
            const index = itemsSource.findIndex(item => item.id === id);

            itemsTarget.push(itemsSource[index]);
            return itemsTarget;
          });
        }
        if (boxTarget === 2) {
          this.setState(prevState => {
            let itemsSource = prevState.items3;
            let itemsTarget = prevState.items2;
            const index = itemsSource.findIndex(item => item.id === id);

            if (itemsTarget.length > 0) {
              itemsSource.push(itemsTarget[0]);
              itemsTarget.splice(0);
            }

            itemsTarget.push(itemsSource[index]);
            return itemsTarget;
          });
        }
        this.setState(prevState => {
          let items3 = prevState.items3;

          const index = items3.findIndex(item => item.id === id);

          items3.splice(index, 1);

          return items3;
        });
      } else {
        return;
      }
      console.log('Boxsource:' + boxSource);
      console.log('Boxtarget:' + boxTarget);
      console.log('id:' + id);
    }
  };

  calculateDates = (date1,date2) => {
    const request = axios.get(`http://localhost:8080/${date1}-${date2}`)
    .then(response => {
      this.setState({result : response.data});
    });

  }
  componentDidUpdate(prevProps, prevState) {
    if(prevState.items2.length === 1 && prevState.items3.length === 1){
    this.calculateDates(prevState.items2[0].name,prevState.items3[0].name);
    }
  }
  render() {
    return (
      <div className="App">
        <div className="app-container">
          <div className="col">
            <Box
              boxSource={1}
              items={this.state.items1}
              handleMove={(id, boxSource, boxTarget) =>
                this.moveItem(id, boxSource, boxTarget)
              }
            />
          </div>
          <div className="col">
            <Box
              boxSource={2}
              items={this.state.items2}
              handleMove={(id, boxSource, boxTarget) =>
                this.moveItem(id, boxSource, boxTarget)
              }
            />
          </div>
          <div className="col">
            <Box
              boxSource={3}
              items={this.state.items3}
              handleMove={(id, boxSource, boxTarget) =>
                this.moveItem(id, boxSource, boxTarget)
              }
            />
          </div>
          
        </div>
        {this.state.result?<Result result={this.state.result}/>:''}
      </div>
    );
  }
}

export default DragDropContext(MultiBackend(HTML5toTouch))(App);
