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
    this.setState({ isLoggedIn: true });
  };
  onLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <Logout onClick={this.onLogout} />
        ) : (
          <Login onClick={this.onLogin} />
        )}
      </div>
    );
  }
}
export default Auth;
