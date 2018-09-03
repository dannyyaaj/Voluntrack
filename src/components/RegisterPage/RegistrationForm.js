import React, { Component } from 'react';
import { withRouter } from 'react-router';
// material ui components
import { withStyles, FormControl, FormLabel, TextField, Button } from '@material-ui/core';
import { Row, Col } from 'react-material-responsive-grid';

const styles = {
  form: {
    padding: '1.5rem 0',
    margin: '1.5rem auto',
    backgroundColor: 'white',
  },
  container: {
    width: '75%'
  },
  formTitle: {
    color: 'black',
    marginBottom: '2.5rem',
  },
  textField: {
    margin: '0 auto',
    padding: '0 0 1.5rem 0'
  },
  button: {
    margin: '0.25rem auto 0.5rem auto',
  }
};

class RegistrationForm extends Component {

  returnHome = () => {
    this.props.history.push('/home')
  }

  render() {
    return (
      <form
        className={this.props.classes.form}
        onSubmit={this.props.registerUser}>
        <FormControl component="fieldset"
          className={this.props.classes.container}>
          <Row>
            <Col xs4={4} md={12} lg={12}>
              <FormLabel htmlFor="firstName">
                <TextField
                  className={this.props.classes.textField}
                  label="First Name"
                  name="firstName"
                  fullWidth
                  margin="normal"
                  value={this.props.firstName}
                  onChange={this.props.handleInputChangeFor('firstName')}
                />
              </FormLabel>
            </Col>
          </Row>
          <Row>
            <Col xs4={4} md={12} lg={12}>
              <FormLabel htmlFor="lastName">
                <TextField
                  className={this.props.classes.textField}
                  label="Last Name"
                  name="lastName"
                  fullWidth
                  value={this.props.lastName}
                  onChange={this.props.handleInputChangeFor('lastName')}
                />
              </FormLabel>
            </Col>
          </Row>
          <Row>
            <Col xs4={4} md={12} lg={12}>
              <FormLabel htmlFor="email">
                <TextField
                  className={this.props.classes.textField}
                  label="Email"
                  name="email"
                  fullWidth
                  value={this.props.email}
                  onChange={this.props.handleInputChangeFor('email')}
                />
              </FormLabel>
            </Col>
          </Row>
          <Row>
            <Col xs4={4} md={12} lg={12}>
              <FormLabel htmlFor="username">
                <TextField
                  className={this.props.classes.textField}
                  label="Username"
                  name="username"
                  fullWidth
                  value={this.props.username}
                  onChange={this.props.handleInputChangeFor('username')}
                />
              </FormLabel>
            </Col>
          </Row>
          <Row>
            <Col xs4={4} md={12} lg={12}>
              <FormLabel htmlFor="password">
                <TextField
                  className={this.props.classes.textField}
                  label="Password"
                  type="password"
                  name="password"
                  fullWidth
                  value={this.props.password}
                  onChange={this.props.handleInputChangeFor('password')}
                />
              </FormLabel>
            </Col>
          </Row>
          <Row>
            <Col xs4={4} md={12} lg={12}>
              <Button
                className={this.props.classes.button}
                color="primary"
                variant="extendedFab"
                fullWidth
                type="submit"
              >
                Get Started
               </Button>
            </Col>
          </Row>
          <Row>
            <Col xs4={4} md={12} lg={12}>
              <Button
                className={this.props.classes.button}
                color="secondary"
                variant="extendedFab"
                fullWidth
                type="button"
                onClick={this.returnHome}
              >
                Cancel
          </Button>
            </Col>
          </Row>
        </FormControl>
      </form>
    )
  }
}

const StyledRegistrationForm =
  withStyles(styles)(RegistrationForm);
export default withRouter(StyledRegistrationForm);