import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    };
  }

  handleButtonClick = () => {
    this.setState({ showModal: true });
  };

  render() {
    return (
      <div className="parent">
        <h1>Parent Component</h1>
        <ChildComponent
          showModal={this.state.showModal}
          onButtonClick={this.handleButtonClick}
        />
      </div>
    );
  }
}

export default ParentComponent;
