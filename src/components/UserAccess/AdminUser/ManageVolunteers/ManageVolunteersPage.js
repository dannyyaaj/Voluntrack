import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminNav from '../AdminNav/AdminNav';
import ManageVolunteersView from './ManageVolunteersView';
import UserErrorMessage from '../../../ErrorNotFound/UserErrorMessage';
import { USER_ACTIONS } from '../../../../redux/actions/userActions';

const mapStateToProps = state => ({
  user: state.user,
});

class ManageVolunteersPage extends Component {
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