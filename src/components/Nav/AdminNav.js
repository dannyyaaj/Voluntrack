import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { triggerLogout } from '../../redux/actions/loginActions';
import { connect } from 'react-redux';
import Header from '../Header/Header';

// client side routes

class AdminNav extends Component {

  logOutUser = () => {
    this.props.dispatch(triggerLogout());
  }

  render() {
    return (
      <div className="navbar">
          <Header />
        <ul>
          <li>
            <Link to="/home"
              onClick={() => this.logOutUser()}
            >
              Log Out
          </Link>
          </li>
          <li>
            <Link to="/profile">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/volunteers">
              Manage Volunteers
            </Link>
          </li>
          <li>
            <Link to="/events">
              Manage Events
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default connect()(AdminNav);