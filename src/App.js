// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Dashboard from './components/Dashboard';
import Tables from './components/Tables';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/tables" component={Tables} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/" component={SignIn} />
      </Switch>
    </Router>
  );
};

export default App;
