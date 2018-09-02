import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';


class UserErrorMessage extends Component {

  // redirect user to home page
  goUser = () => this.props.history.push('/events')

  render() {
    let content = (
      <div>
        <h1>404</h1>
        <p>OOPS, SORRY WE CAN'T FIND THAT PAGE!</p>
        <Button
          color="primary"
          variant="extendedFab"
          onClick={this.goUser}>
          Home
        </Button>
      </div>
    )
    return (
      <React.Fragment>
        {content}
      </React.Fragment>
    )
  }
}
export default connect()(UserErrorMessage)