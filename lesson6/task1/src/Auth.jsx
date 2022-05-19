import React, { Component } from 'react';
import Greeting from './Greeting';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };
  handleLogOut = () => {
    this.setState({ isLoggedIn: false });
  };
  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <button onClick={this.handleLogOut}>Logout</button>
        ) : (
          <button onClick={this.handleLogin}>Login</button>
        )}
      </div>
    );
  }
}
export default Auth;
