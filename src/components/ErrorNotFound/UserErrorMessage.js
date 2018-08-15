import React, { Component } from 'react';
import { connect } from 'react-redux';


class UserErrorMessage extends Component {

  // redirect user to home page
  goUser = () => this.props.history.push('/user')

  render() {
    let content = (
      <div>
        <h1>404</h1>
        <p>OOPS, SORRY WE CAN'T FIND THAT PAGE!</p>
        <button onClick={this.goUser}>Home</button>
      </div>
    )
    return (
      <div>
        {content}
      </div>
    )
  }
}
export default connect()(UserErrorMessage)