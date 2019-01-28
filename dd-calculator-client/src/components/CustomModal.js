import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-responsive-modal';
import Result from '../components/Result';
 
export default class CustomModal extends React.Component {
  state = {
    open: true,
  };
 
 
 
  onCloseModal = () => {
    this.props.onClose();
  };

 
  render() {
    const { open } = this.state;
    return (
      <div>
        <Modal open={this.props.open} onClose={this.onCloseModal} center>
        <Result result={this.props.result}/>
        </Modal>
      </div>
    );
  }
}
 