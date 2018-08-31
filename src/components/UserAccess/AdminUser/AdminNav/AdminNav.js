import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { triggerLogout } from '../../../../redux/actions/loginActions';
import { connect } from 'react-redux';
// client side routes

class AdminNav extends Component {

  logOutUser = () => {
    this.props.dispatch(triggerLogout());
    window.location.href = "https://secure-cove-24503.herokuapp.com/#/home"
  }

  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <a
              onClick={() => this.logOutUser()}
            >
              Log Out
          </a>
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
          <li>
            <Link to="/user">
              Home
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default connect()(AdminNav);