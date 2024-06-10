import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Table from './components/Table';
import Contact from './components/Contact';
import Login from './components/Login';
import Register from './components/Register';

function App() {
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
              <li className="nav-item">
                <a className="nav-link" href="/login">Sign In</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/register">Register</a>
              </li>
            </ul>
          </div>
        </nav>

        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/table" component={Table} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
