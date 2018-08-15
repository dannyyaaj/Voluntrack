import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';

import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import UserPage from './components/UserPage/UserPage';
import InfoPage from './components/InfoPage/InfoPage';
import ErrorNotFound from './components/ErrorNotFound/ErrorNotFound';

import './styles/main.css';

const App = () => (
  <div>
    <Router>
      <div>
        <Header title="Voluntrack" />
        <Switch>
          <Redirect exact from="/" to="/home" />
          <Route
            exact path="/home"
            component={LandingPage}
          />
          <Route
            exact path="/login"
            component={LoginPage}
          />
          <Route
            exact path="/register"
            component={RegisterPage}
          />
          <Route
            exact path="/user"
            component={UserPage}
          />
          <Route
            exact path="/info"
            component={InfoPage}
          />
          <Route component={ErrorNotFound} />
        </Switch>
      </div>
    </Router>
  </div>
);

export default App;
