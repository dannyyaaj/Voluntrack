import React, { Component } from 'react';
// material ui components
import { withStyles } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = () => ({
  form: {
    textAlign: 'center',
    margin: '1.5rem auto',
    backgroundColor: 'white',
  },
  container: {
    width: '90%'
  },
  formTitle: {
    color: 'black',
    marginBottom: '2.5rem',
  },
  textField: {
    margin: '.5rem auto',
    padding: '0 0 1.4rem 0'
  },
  button: {

  }
});

class AdminProfileForm extends Component {

  goHome = () => {
    window.location.href = "http://localhost:3000/#/user"
  }

  render() {
    console.log(this.props)
    return (
      <form
        className={this.props.classes.form}
        onSubmit={this.props.registerUser}>
        <FormControl component="fieldset"
          className={this.props.classes.container}>
          <FormLabel htmlFor="first_name">
            <TextField
              className={this.props.classes.textField}
              label="First Name"
              name="first_name"
              placeholder=""
              fullWidth
              value={this.props.user.first_name}
              onChange={this.props.handleInputChangeFor('first_name')}
            />
          </FormLabel>
          <FormLabel htmlFor="middle_name">
            <TextField
              className={this.props.classes.textField}
              label="Middle Name"
              name="middle_name"
              placeholder=""
              fullWidth
              margin="normal"
              value={this.props.user.middle_name}
              onChange={this.props.handleInputChangeFor('middle_name')}
            />
          </FormLabel>
          <FormLabel htmlFor="lastName">
            <TextField
              className={this.props.classes.textField}
              label="Last Name"
              name="lastName"
              placeholder=""
              fullWidth
              margin="normal"
              value={this.props.lastName}
              onChange={this.props.handleInputChangeFor('lastName')}
            />
          </FormLabel>
          <FormLabel htmlFor="email">
            <TextField
              className={this.props.classes.textField}
              label="Email"
              name="email"
              placeholder=""
              fullWidth
              value={this.props.email}
              onChange={this.props.handleInputChangeFor('email')}
            />
          </FormLabel>
          <FormLabel htmlFor="primary_phone"
            className={this.props.classes.formLabel}>
            <TextField
              className={this.props.classes.textField}
              label="Primary Phone xxx-xxx-xxxx"
              name="primary_phone"
              placeholder=""
              fullWidth
              value={this.props.user.primary_phone}
              onChange={this.props.handleInputChangeFor('primary_phone')}
            />
          </FormLabel>
          <FormLabel htmlFor="address">
            <TextField
              className={this.props.classes.textField}
              label="Address"
              name="address"
              placeholder=""
              fullWidth
              value={this.props.user.address}
              onChange={this.props.handleInputChangeFor('address')}
            />
          </FormLabel>
          <FormLabel htmlFor="city">
            <TextField
              className={this.props.classes.textField}
              label="City"
              name="city"
              placeholder=""
              fullWidth
              value={this.props.user.city}
              onChange={this.props.handleInputChangeFor('city')}
            />
          </FormLabel>
          <FormLabel htmlFor="state">
            <TextField
              className={this.props.classes.textField}
              label="State"
              name="state"
              placeholder=""
              fullWidth
              value={this.props.user.state}
              onChange={this.props.handleInputChangeFor('state')}
            />
          </FormLabel>
          <FormLabel htmlFor="zipcode">
            <TextField
              className={this.props.classes.textField}
              label="Zipcode"
              name="zipcode"
              placeholder=""
              fullWidth
              value={this.props.user.zipcode}
              onChange={this.props.handleInputChangeFor('zipcode')}
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
              Update Profile
               </Button>
          </div>
          <div>
            <Button
              className={this.props.classes.button}
              color="secondary"
              variant="extendedFab"
              fullWidth
              onClick={this.goHome}
            >
              cancel
          </Button>
          </div>
        </FormControl>
      </form >
    )
  }
}

const StyledAdminProfileForm =
  withStyles(styles)(AdminProfileForm);
export default StyledAdminProfileForm