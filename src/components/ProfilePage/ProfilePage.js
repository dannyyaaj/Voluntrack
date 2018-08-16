import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminNav from '../../components/Nav/AdminNav';
import AdminProfileView from '../UserAccess/AdminUser/AdminProfile/AdminProfileView';
import UserErrorMessage from '../ErrorNotFound/UserErrorMessage';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
  user: state.user,
});
class ProfilePage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
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
          <AdminProfileView />
        )
      }
      else if (this.props.user.userName) {
        content = (
          <h1>User Profile Page</h1>
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
        <AdminNav />
        {content}
      </div >
    )
  }
}

export default connect(mapStateToProps)(ProfilePage)