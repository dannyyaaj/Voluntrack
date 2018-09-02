import React, { Component } from 'react';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import PublicErrorMessage from './PublicErrorMessage';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  user: state.user,
});

class ErrorNotFound extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  // redirect user to landing or events page
  goHome = () => this.props.history.push('/');

  goUser = () => this.props.history.push('/events')

  render() {
    return (
      <div className="errorMessage">
        <PublicErrorMessage
          goUser={this.goUser}
          goHome={this.goHome}
        />
      </div>
    )
  }
}
export default connect(mapStateToProps)(ErrorNotFound)