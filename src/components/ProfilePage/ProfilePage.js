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
    let adminAccess;

    if (this.props.user.data) {

      adminAccess = this.props.user.data.admin_access;

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

      console.log('not here yet');
    }


    // switch (this.props.user.userName, this.props.user.data.admin_access) {
    //   case !null, false:
    //     content = (
    //       <h1>User Profile Page</h1>
    //     )
    //     break;
    //   case !null, true:
    //     content = (
    //       <h1>Admin Profile Page</h1>
    //     )
    //     break;
    //   case false, false:
    //     content = (
    //       <UserErrorMessage />
    //     )
    //   default:
    //     content = (
    //       <UserErrorMessage />
    //     )
    // }
    return (
      <div>
        <AdminNav />
        {content}
      </div >
    )
  }
}

export default connect(mapStateToProps)(ProfilePage)