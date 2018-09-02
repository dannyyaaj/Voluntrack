import React, { Component } from 'react';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { connect } from 'react-redux';
import { withStyles, Button } from '@material-ui/core';

const mapStateToProps = state => ({
  user: state.user,
});

const styles = {
  button: {
    margin: '0.25rem auto',
  }
};

class ErrorNotFound extends Component {
  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
  }

  render() {
    let content = null;
    if (this.props.user.userName) {
      content = (
        <div>
          <h1>404</h1>
          <p>OOPS, SORRY WE CAN'T FIND THAT PAGE!</p>
          <Button
            className={this.props.classes.button}
            color="primary"
            variant="extendedFab"
            onClick={this.props.goUser}>
            Home
           </Button>
        </div>
      )
    } else {
      content = (
        <div>
          <h1>404</h1>
          <p>OOPS, SORRY WE CAN'T FIND THAT PAGE!</p>
          <Button
            className={this.props.classes.button}
            color="primary"
            variant="extendedFab"
            onClick={this.props.goHome}>
            Home Page
           </Button>
        </div>
      )
    }
    return (
      <React.Fragment>
        {content}
      </React.Fragment>
    )
  }
}

const StyledErrorNotFound = withStyles(styles)(ErrorNotFound)

export default connect(mapStateToProps)(StyledErrorNotFound)