import React, { Component } from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      hidden:false };
    
  }
  handleLogin = () => {
    this.setState({
      hidden: true
   });
   setTimeout(() => {
      this.setState({
       isLoggedIn: true,
        hidden:false
      })
    }, 2000);
   
  
  };

  handleLogout = () => {
    this.setState({
     isLoggedIn: false,
     hidden: false
   });
   
  };

  render() {
    
    return ( 
      <div className="panel">
        {this.state.isLoggedIn
          ? (<Logout onLogout={this.handleLogout} />)
          : (<Login onLogin={this.handleLogin} />)}
    {this.state.hidden && <Spinner size={'50px'} />} 
      
</div>)
  }
}
export default Auth;
