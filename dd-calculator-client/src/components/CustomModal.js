import React from 'react';

import Modal from 'react-responsive-modal';
import Result from '../components/Result';

export default class CustomModal extends React.Component {
  state = {
    open: true
  };

  onCloseModal = () => {
    this.props.onClose();
  };

  render() {
    return (
      <div>
        <Modal open={this.props.open} onClose={this.onCloseModal} center>
          <Result result={this.props.result} />
        </Modal>
      </div>
    );
  }
}
