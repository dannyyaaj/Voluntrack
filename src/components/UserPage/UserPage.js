import React, { Component } from 'react';
import { connect } from 'react-redux';

import AdminNav from '../../components/Nav/AdminNav';

import { USER_ACTIONS } from '../../redux/actions/userActions';
import { triggerLogout } from '../../redux/actions/loginActions';


const mapStateToProps = state => ({
  user: state.user,
  state: state,
});

class UserPage extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName === null) {
      this.props.history.push('home');
    }
  }

  logout = () => {
    this.props.dispatch(triggerLogout());
    // this.props.history.push('home');
  }

  render() {
    console.log(this.props.user)
    let content = null;

    if (this.props.user.userName) {
      content = (
        <div>
          <h1
            id="welcome"
          >
            Welcome, {this.props.user.userName}!
          </h1>
          <p>Your ID is: {this.props.user.id}</p>
          <button
            onClick={this.logout}
          >
            Log Out
          </button>
        </div>
      );
    }

    return (
      <div>
        <AdminNav />
        {content}
      </div>
    );
  }
}

// this allows us to use <App /> in index.js
export default connect(mapStateToProps)(UserPage);

