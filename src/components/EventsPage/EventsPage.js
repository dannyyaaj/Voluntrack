import React, { Component } from 'react';
import { connect } from 'react-redux';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import MyEventsView from '../UserAccess/VolunteerUser/MyEventsView/MyEventsView';
import VolunteerNav from '../Nav/VolunteerNav';
import AdminNav from '../Nav/AdminNav';
import ManageEventsView from '../UserAccess/AdminUser/ManageEvents/ManageEventsView';

const mapStateToProps = state => ({
  user: state.user,
});

class EventsPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: USER_ACTIONS.FETCH_USER
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
            <ManageEventsView />
          </div>)
      } else {
        content = (
          <div>
            <VolunteerNav />
            <MyEventsView />
          </div>
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

export default connect(mapStateToProps)(EventsPage);