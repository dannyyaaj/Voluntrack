import React, { Component } from 'react';
// material ui components
import { withStyles, FormControl, FormLabel, TextField, Button } from '@material-ui/core';

const styles = () => ({
  form: {
    margin: '1.5rem auto',
    backgroundColor: 'white',
  },
  container: {
    width: '60%'
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
    marginTop: '1rem',
  }

});

class RegistrationForm extends Component {

  returnHome = () => {
    window.location.href = "http://localhost:3000/#/home"
  }

  render() {
    return (
      <form
        className={this.props.classes.form}
        onSubmit={this.props.registerUser}>
        <FormControl component="fieldset"
        className={this.props.classes.container}>
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
          <div>
            <Button
              className={this.props.classes.button}
              color="primary"
              variant="extendedFab"
              fullWidth
              type="submit"
            >
              Get Started
               </Button>
          </div>
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
        </FormControl>
      </form>
    )
  }
}

const StyledRegistrationForm =
  withStyles(styles)(RegistrationForm);
export default StyledRegistrationForm;