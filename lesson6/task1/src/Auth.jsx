import React, { Component } from 'react';
import Greeting from './Greeting';
import OnLogin from './Login';
import OnLogout from './Logout';
import ReactDOM from 'react-dom';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
    this.handleLogout.bind(this);
  }
  handleLogin = () => {
    this.setState({ isLoggedIn: true });
  };
  handleLogout = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <OnLogout onClick={this.handleLogout} />
        ) : (
          <OnLogin onClick={this.handleLogin} />
        )}
      </div>
    );
  }
}
export default Auth;
