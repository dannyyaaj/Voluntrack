import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { triggerLogout } from '../../../../redux/actions/loginActions';
import { connect } from 'react-redux';
// client side routes

class VolunteerNav extends Component {

  render() {
    return (
      <div className="navbar">
        <ul>
          <li>
            <button
              onClick={() => this.props.dispatch(triggerLogout())}
            >
              Log Out
          </button>
          </li>
          <li>
            <Link to="/profile">
              Profile
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

export default connect()(VolunteerNav);