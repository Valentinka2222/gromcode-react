import React, { Component } from 'react';

class Toggler extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isToggleOn: true,
    };
  }

  handleClick = () => {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  };

  render() {
    return (
      <div className="toggler" onClick={this.handleClick}>
        {this.state.isToggleOn ? 'Off' : 'On'}
      </div>
    );
  }
}
export default Toggler;
