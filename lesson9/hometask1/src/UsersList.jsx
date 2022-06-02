import React, { Component } from 'react';
import User from './User';
import Filter from './Filter';

class UsersList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      count: 0,
    };
  }
  onChange = event => {
    this.setState({
      filterText: event.target.value,
    });
  };
  render() {
    let usersList;

    if (this.state.filterText) {
      usersList = this.props.users.slice().filter(user => {
        if (user.name === this.state.filterText) {
          this.state.count = 0;
          return user;
        }
      });
      usersList.reduce((acc, user) => {
        acc += user ? (this.state.count += 1) : 0;

        return acc;
      }, this.state.count);
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
            <User {...user} />
          ))}
        </ul>
      </div>
    );
  }
}
export default UsersList;
//
