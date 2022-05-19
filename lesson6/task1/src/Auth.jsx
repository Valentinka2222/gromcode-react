import React, { Component } from 'react';
import Greeting from './Greeting';
import Login from './Login';
import Logout from './Logout';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  onLogin = () => {
    this.setState({ isLoggedIn: false });
  };
  onLogout = () => {
    this.setState({ isLoggedIn: true });
  };

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <Login onClick={this.onLogin} />
        ) : (
          <Logout onClick={this.onLogout} />
        )}
      </div>
    );
  }
}
export default Auth;
