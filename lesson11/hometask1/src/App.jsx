import React, { Component } from 'react';

import Expand from './Expand';

class App extends Component {
  state = {
    isHide: false,
    isArrow: 'fa-chevron-down',
  };
  hideExpand = () => {
    this.setState({
      isHide: false,
      isArrow: 'fa-chevron-down',
    });
  };
  showExpand = () => {
    this.setState({
      isHide: true,
      isArrow: 'fa-chevron-up',
    });
  };
  render() {
    const elem = (
      <p>
        Hooks are a new addition in React 16.8. They let you use state and other React features
        without writing a class.
      </p>
    );
    let button = (
      <button className="expand__toggle-btn" onClick={this.showExpand}>
        <i className={`fas ${this.state.isArrow}`}></i>
      </button>
    );

    if (!this.state.isHide) {
      button = button;
    } else {
      button = null;
    }
    return (
      <div className="app">
        {button}
        <Expand
          isHide={this.state.isHide}
          onClose={this.hideExpand}
          title="some title"
          content={elem}
          isArrow={this.state.isArrow}
        >
          {elem}
        </Expand>
      </div>
    );
  }
}
export default App;
