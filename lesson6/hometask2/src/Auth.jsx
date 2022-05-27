import React, { Component } from 'react';

import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    


    };
    
  }
  handleLogin = () => {
   this.setState({
    isLoggedIn: true})};

  handleLogout = () => {

    this.setState({
      isLoggedIn: false,
  
         

    });
  };

  render() {
    
    setTimeout(() => {
      this.setState({
    isLoggedIn: false})
      
      }, 2000);
   
    return ( 
     


      <div className="panel">
         {this.state.isLoggedIn && <Spinner size={50} /> }
        {!this.state.isLoggedIn ?
        <Login onLogin={this.handleLogin} /> :<Logout onLogout={this.handleLogout} />
         }
    
      </div>
    );
  }
}
export default Auth;
// export const delay = time => {
//   const p = new Promise(resolve => {
//     setTimeout(() => {
//       resolve();
//     }, time);
//   });
//   return p;
// };
// delay(3000).then(() => console.log('Done'));
