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
    const { filterText, count } = this.state;
    const { users } = this.props;
    if (filterText) {
      usersList = users.slice().filter(user => {
        if (user.name.toLowerCase().includes(filterText.toLowerCase())) {
         count = 0;
          return user;
        }
      });
      usersList.reduce((acc, user) => {
        acc += user ? (count += 1) : 0;
        return acc;
      }, count);
    } else {
      usersList = users;
    }
    return (
      <div>
        <Filter
          count={count}
          onChange={this.onChange}
          filterText={filterText}
        />

        <ul className="users">
          {usersList.map(user => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}
export default UsersList;
//
