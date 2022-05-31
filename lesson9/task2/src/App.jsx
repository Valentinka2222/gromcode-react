import React, { Component } from 'react';
import UserForm from './UserForm';


class App extends Component {
  

  createUser = (data) => {
    console.log(data)
  }

  render() {



  return <UserForm onsubmit={()=> this.createUser()} />
}
};
export default App;
