import React, { Component } from 'react';
import Expand from './Expand';

class App extends Component {
  state = {
    isHide: true,
  };
  hideExpand = () => {
    this.setState({
      isHide: !this.state.isHide,
    });
  };
  render() {
    let elem;
    if (!this.state.isHide) {
      this.arrow = 'fa-chevron-up';
      elem = (
        <p>
          Hooks are a new addition in React 16.8. They let you use state and other React features
          without writing a class.
        </p>
      );
    } else {
      let elem = null;
      this.arrow = 'fa-chevron-down';
    }
    return (
      <div className="app">
        <Expand
          title="Some title"
          isHide={this.state.isHide}
          onClose={this.hideExpand}
          content={elem}
          arrow={this.arrow}
        >
          {elem}
        </Expand>
      </div>
    );
  }
}
export default App;
