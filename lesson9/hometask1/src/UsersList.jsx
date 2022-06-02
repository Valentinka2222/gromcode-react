import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      filterText: '',
    };
  }
  onChange = event => {
    this.setState({
      filterText: event.target.value,
    });
  };
  render() {
    let usersList;
    console.log(this.props.users);
    if (this.state.filterText) {
      usersList = this.props.users.slice().map(user => {
        if (user.name.includes(this.state.filterText)) {
          console.log(this.state.filterText);
          console.log(user);
          return user;
        }
      });
    } else {
      usersList = this.props.users;
    }
    return (
      <div>
        <Filter
          count={this.state.count}
          onChange={this.onChange}
          filterText={this.state.filterText}
        />

        <ul className="users">
          {usersList.map(user => (
            <User key={name} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}
export default UsersList;
//
