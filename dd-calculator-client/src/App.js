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
import CustomModal from './components/CustomModal';
import AppHeader from './components/AppHeader';
import AppFooter from './components/AppFooter';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items1: [
        { id: 1, name: '1997.01.05' },
        { id: 2, name: '1998sdsd.10.6' },
        { id: 3, name: '1971.07.30' },
        { id: 4, name: '2016.10.20' },
        { id: 5, name: '2019.01.27' },
        { id: 6, name: '2000.04.30' },
        { id: 7, name: '2015.08.10' },
        { id: 8, name: '2010.10.20' },
        { id: 9, name: '2022.01.22' },
        { id: 10, name: '2011.04.30' }
      ],
      items2: [],
      items3: [],
      result: null,
      open: false
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
        if (boxTarget == 2) {
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
        if (boxTarget === 3) {
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

  calculateDates = (date1, date2) => {
    const request = axios
      .get(`http://localhost:8080/${date1}-${date2}`)
      .then(response => {
        
        if (this.state.result !== response.data) {
          this.setState({ result: response.data });
          this.onOpenModal();
        }
      })
      .catch(error => {
        if(error.response){
        this.setState({ result: error.response.data.message });
        this.onOpenModal();
        }
      });
  };
  componentDidUpdate(prevProps, prevState) {
    if (prevState.open !== true) {
      if (prevState.items2.length === 1 && prevState.items3.length === 1) {
        this.calculateDates(prevState.items2[0].name, prevState.items3[0].name);
      }
    }
  }

  onOpenModal = () => {
    this.setState({ open: true });
  };
  onCloseModal = () => {
    this.setState({ open: false });
  };

  resetState = () => {
    console.log('first');
    if (this.state.items2.length !== 0 && this.state.items3.length !== 0) {
      console.log('second');
      this.setState(prevState => {
        console.log('third');
        prevState.items1.push(prevState.items2[0]);
        prevState.items1.push(prevState.items3[0]);
        prevState.items2.splice(0);
        prevState.items3.splice(0);
        return prevState.items1;
      });
    } else if (this.state.items2.length !== 0) {
      console.log('second');
      this.setState(prevState => {
        console.log('third');
        prevState.items1.push(prevState.items2[0]);
        prevState.items2.splice(0);
        return prevState.items1;
      });
    } else if (this.state.items3.length !== 0) {
      console.log('second');
      this.setState(prevState => {
        console.log('third');
        prevState.items1.push(prevState.items3[0]);
        prevState.items3.splice(0);
        return prevState.items1;
      });
    }
  };
  render() {
    return (
      <div className="wrapper">
        <AppHeader />
        <div className="hint">
          <p>
            <span className="text-highlight">Hint: </span>This application tells
            you difference between two dates in days. You only have to grab a
            date and drop to the first container and drop another to the second.
            The application will calculate the difference (Note that if the
            first date is smaller than the result will be negative)
          </p>
        </div>
        <div className="container">
          <div className="first">
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
        {this.state.result ? (
          <CustomModal
            open={this.state.open}
            onClose={this.onCloseModal}
            result={this.state.result}
          />
        ) : (
          ''
        )}
        <button onClick={this.resetState} className="button">
          RESET
        </button>
        <AppFooter />
      </div>
    );
  }
}

export default DragDropContext(MultiBackend(HTML5toTouch))(App);
