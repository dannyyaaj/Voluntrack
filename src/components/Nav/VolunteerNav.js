import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { triggerLogout } from '../../redux/actions/loginActions';
import { connect } from 'react-redux';
import Header from '../Header/Header';


class VolunteerNav extends Component {

  logOutUser = () => {
    this.props.dispatch(triggerLogout());
    window.location.href = "http://localhost:3000/#/home"
  }

  render() {
    return (
      <div className="navbar">
          <Header />
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
            <Link to="/events">
              My Events
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default connect()(VolunteerNav);