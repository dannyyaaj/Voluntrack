import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminNav from '../../components/Nav/AdminNav';
import UserErrorMessage from '../ErrorNotFound/UserErrorMessage';
import { USER_ACTIONS } from '../../redux/actions/userActions';

const mapStateToProps = state => ({
  user: state.user,
});

class ManageEvents extends Component {

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  render() {
    let content = null;
    if (this.props.user.data) {
      if (this.props.user.data.admin_access === true) {
        content = (<h1>Manage Events</h1>)
      } else {
        content = (<UserErrorMessage />)
      }
    } else {
      console.log('admin_access property is not here yet');

    }

    return (
      <div>
        <AdminNav />
        {content}
      </div>
    )
  }
}
export default connect(mapStateToProps)(ManageEvents);