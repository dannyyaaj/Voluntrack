import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminNav from '../../../Nav/AdminNav';
import ManageVolunteersView from './ManageVolunteersView';
import UserErrorMessage from '../../../ErrorNotFound/UserErrorMessage';
import { VOLUNTEER_ACTIONS } from '../../../../redux/actions/volunteerActions';

const mapStateToProps = state => ({
  user: state.user,
  volunteers: state.volunteer.allVolunteers,
  state: state,
});

class ManageVolunteersPage extends Component {
  async componentDidMount() {
    await new Promise(resolve => { setTimeout(resolve, 2000) })
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
            <ManageVolunteersView />
          </div>)
      } else {
        content = (
          <div>
            <UserErrorMessage />
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

export default connect(mapStateToProps)(ManageVolunteersPage);