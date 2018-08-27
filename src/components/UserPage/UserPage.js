import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminNav from '../UserAccess/AdminUser/AdminNav/AdminNav';
import VolunteerNav from '../UserAccess/VolunteerUser/VolunteerNav/VolunteerNav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
  user: state.user,
});

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('/home');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {

    let content = null;

    if (this.props.user.userName && this.props.user.data.admin_access === true) {
      content = (
        <div>
          <AdminNav />
          <h1
            id="welcome"
          >
            Welcome, {this.props.user.userName}!
          </h1>
        </div>
      )
    } else {
      content = (
        <div>
        <VolunteerNav />
          <h1
            id="welcome"
          >
            Welcome, {this.props.user.userName}!
        </h1>
          <p>Your ID is: {this.props.user.id}</p>
        </div>
      )
    }

    return (
      <div>
        {content}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

