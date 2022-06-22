import User from './User';
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

function Users() {
  return (
    <>
      <div className="page__content">
        <h1>Users</h1>
        <ul className="navigation">
          <li className="navigation__item">
            <Link to="/users/github">Github</Link>
          </li>
          <li className="navigation__item">
            <Link to="/users/facebook">Facebook</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/users/:userId" component={User}></Route>
        </Switch>
      </div>
    </>
  );
}
export default Users;
