import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Table from './components/Table';
import Contact from './components/Contact';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Profile from './components/Profile';

function App() {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">IoT Dashboard</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Dashboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/table">Table</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
              {!isLoggedIn && (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="/signin">Sign In</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/signup">Sign Up</a>
                  </li>
                </>
              )}
              {isLoggedIn && (
                <li className="nav-item">
                  <a className="nav-link" href="/profile">Profile</a>
                </li>
              )}
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/table" component={Table} />
          <Route path="/contact" component={Contact} />
          <Route path="/signin">
            {isLoggedIn ? <Redirect to="/" /> : <SignIn />}
          </Route>
          <Route path="/signup">
            {isLoggedIn ? <Redirect to="/" /> : <SignUp />}
          </Route>
          <Route path="/profile">
            {isLoggedIn ? <Profile /> : <Redirect to="/signin" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
