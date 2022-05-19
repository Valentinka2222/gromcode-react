import React, { Component } from 'react';
import Greeting from './Greeting';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  onLogin = () => {
    this.setState({ isLoggedIn: true });
  };
  onLogOut = () => {
    this.setState({ isLoggedIn: false });
  };
  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <button onClick={this.onLogOut}>Logout</button>
        ) : (
          <button onClick={this.onLogin}>Login</button>
        )}
      </div>
    );
  }
}
export default Auth;
