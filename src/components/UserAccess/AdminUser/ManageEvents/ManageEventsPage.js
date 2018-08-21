import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminNav from '../AdminNav/AdminNav';
import ManageEventsView from './ManageEventsView';
import UserErrorMessage from '../../../ErrorNotFound/UserErrorMessage';
import { USER_ACTIONS } from '../../../../redux/actions/userActions';

const mapStateToProps = state => ({
  user: state.user,
});

class ManageEventsPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
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
            <AdminNav />
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

export default connect(mapStateToProps)(ManageEventsPage);