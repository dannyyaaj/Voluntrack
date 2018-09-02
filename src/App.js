import React from 'react';
import { HashRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import ErrorNotFound from './components/ErrorNotFound/ErrorNotFound';
import ManageEventsPage from './components/EventsPage/EventsPage';
import InfoPage from './components/InfoPage/InfoPage';
import LandingPage from './components/LandingPage/LandingPage';
import LoginPage from './components/LoginPage/LoginPage';
import ProfilePage from './components/ProfilePage/ProfilePage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import ManageVolunteersPage from './components/UserAccess/AdminUser/ManageVolunteers/ManageVolunteersPage';
import './styles/main.css';

const App = () => (
  <div>
    <Router>
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
          exact path="/info"
          component={InfoPage}
        />
        <Route
          exact path="/events"
          component={ManageEventsPage}
        />
        <Route
          exact path="/volunteers"
          component={ManageVolunteersPage}
        />
        <Route
          exact path="/profile"
          component={ProfilePage}
        />
        <Route component={ErrorNotFound} />
      </Switch>
    </Router>
  </div>
);

export default App;