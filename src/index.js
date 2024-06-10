import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={SignIn} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    </Router>
);

ReactDOM.render(<App />, document.getElementById('root'));
