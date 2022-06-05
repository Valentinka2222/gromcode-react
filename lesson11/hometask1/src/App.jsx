import React, { Component } from 'react';

import Expand from './Expand';

class App extends Component {
  state = {
    isHide: true,
    isArrow: 'fa-chevron-down',
  };

  showExpand = () => {
    this.setState({
      isHide: false,
      isArrow: 'fa-chevron-up',
    });
  };
  hideExpand = () => {
    this.setState({
      isHide: true,
      isArrow: 'fa-chevron-down',
    });
  };
  render() {
    const elem = (
      <p>
        Hooks are a new addition in React 16.8. They let you use state and other React features
        without writing a class.
      </p>
    );

    return (
      <div className="app">
        <Expand
          isHide={this.state.isHide}
          onClose={this.showExpand}
          onShow={this.hideExpand}
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
