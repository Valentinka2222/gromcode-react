import React, { Component } from 'react';
import UserForm from './UserForm';


class App extends Component {
  constructor(props) {
    super(props);
    
this.func=this.createUser.bind(this)
  
 
  }
  createUser(data) {
    console.log(data)
  }
  render() {



  return <UserForm func = {this.func} />
}
};
export default App;
