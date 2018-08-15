import React, { Component } from 'react';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  user: state.user,
});

class ErrorNotFound extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  // redirect user to home page
  goHome = () => this.props.history.push('/');

  goUser = () => this.props.history.push('/user')

  render() {
    let content = null;
    if (this.props.user.userName) {
      content = (
        <div>
          <h1>404</h1>
          <p>OOPS, SORRY WE CAN'T FIND THAT PAGE!</p>
          <button onClick={this.goUser}>Home</button>
        </div>
      )
    } else {
      content = (
        <div>
          <h1>404</h1>
          <p>OOPS, SORRY WE CAN'T FIND THAT PAGE!</p>
          <button onClick={this.goHome}>Home Page</button>
        </div>
      )
    }
    return (
      <div>
        {content}
      </div>
    )
  }
}
export default connect(mapStateToProps)(ErrorNotFound)