import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Users from './Users';
import Home from './Home';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="page">
          <ul className="navigation">
            <li className="navigation__item">
              <Link to="/users/github">Home</Link>
            </li>
            <li className="navigation__item">
              <Link to="/users">Users</Link>
            </li>
          </ul>

          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/users" component={Users}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};
export default App;
