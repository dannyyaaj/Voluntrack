import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// material ui components
import { withStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

const styles = () => ({
  container: {
    textAlign: 'center',
    margin: '1.5rem auto',
    padding: '1.5rem 2rem',
    backgroundColor: 'white',
  },
  formTitle: {
    color: 'black',
    marginBottom: '2.5rem',
  },
  textField: {
    width: 500,
    margin: '0 auto',
    padding: '0 0 1.5rem 0'
  }
});

class RegistrationForm extends Component {
  render() {
    return (
      <form
        className={this.props.classes.container}
        onSubmit={this.props.registerUser}>
        <FormControl component="fieldset">
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
            <input
              type="submit"
              name="submit"
              value="Get Started"
            />
            <Link to="/home">Cancel</Link>
          </div>
        </FormControl>
      </form>
    )
  }
}

const StyledRegistrationForm =
  withStyles(styles)(RegistrationForm);
export default StyledRegistrationForm;