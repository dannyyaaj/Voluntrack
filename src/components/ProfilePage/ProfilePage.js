import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminNav from '../Nav/AdminNav';
import ProfileView from '../ProfileView/ProfileView';
import VolunteerNav from '../Nav/VolunteerNav';
import UserErrorMessage from '../ErrorNotFound/UserErrorMessage';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { VOLUNTEER_ACTIONS } from '../../redux/actions/volunteerActions';

const mapStateToProps = state => ({
  user: state.user,
  profile: state.user.profile
});
class ProfilePage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch({
      type: VOLUNTEER_ACTIONS.FETCH_ALL_VOLUNTEERS
    });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('/home');
    }
  }

  render() {
    let content = null;
    if (this.props.user.data) {

      if (this.props.user.data.admin_access === true) {
        content = (
          <div>
            <AdminNav />
            <ProfileView />
          </div>

        )
      }
      else if (this.props.user.userName) {
        content = (
          <div>
            <VolunteerNav />
            <ProfileView />
          </div>
        )
      }
      else {
        content = (
          <UserErrorMessage />
        )
      }
    } else {
      console.log('admin_access property is not here yet');
    }
    return (
      <div>
        {content}
      </div>
    )
  }
}

export default connect(mapStateToProps)(ProfilePage)