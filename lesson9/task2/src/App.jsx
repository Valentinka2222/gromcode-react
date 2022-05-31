import React, { Component } from 'react';
import UserForm from './UserForm';


class App extends Component {
  constructor(props) {
    super(props);
    
this.createUser=this.createUser.bind(this)
  
 
  }
  createUser(data) {
    console.log(data)
  }
  render() {



  return <UserForm createUser= {this.createUser} />
}
};
export default App;
