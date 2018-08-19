import React, { Component } from 'react';
// material ui components
import { withStyles, FormControl, FormLabel, TextField, Button } from '@material-ui/core';


const styles = () => ({
  form: {
    textAlign: 'center',
    margin: '1.5rem auto',
  },
  container: {
    width: '80%',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  },
  formTitle: {
    marginBottom: '2.5rem',
  },
  textField: {
    margin: '.5rem auto',
    padding: '0 0 1.4rem 0'
  },
  button: {

  }
});

class CreateEventsForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      start_time: '',
      end_time: '',
      email: '',
      primary_phone: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      coordinator: '',
      image_url: '',
      roles: [],
    };
  }

  render() {
    return (
      <form
        className={this.props.classes.form}
        onSubmit={this.updateUserProfile}>
        <FormControl component="fieldset"
          className={this.props.classes.container}>
          <FormLabel htmlFor="event_name">
            <TextField
              className={this.props.classes.textField}
              label="Event Name"
              name="event_name"
            />
          </FormLabel>
          <FormLabel htmlFor="middle_name">
            <TextField
              className={this.props.classes.textField}
              label="Middle Name"
              name="middle_name"
              margin="normal"
            />
          </FormLabel>
          <FormLabel htmlFor="lastName">
            <TextField
              className={this.props.classes.textField}
              label="Last Name"
              name="last_name"
            />
          </FormLabel>
          <FormLabel htmlFor="email">
            <TextField
              className={this.props.classes.textField}
              label="Email"
              name="email"
            />
          </FormLabel>
          <FormLabel htmlFor="primary_phone"
            className={this.props.classes.formLabel}>
            <TextField
              className={this.props.classes.textField}
              label="Primary Phone xxx-xxx-xxxx"
              name="primary_phone"
            />
          </FormLabel>
          <FormLabel htmlFor="address">
            <TextField
              className={this.props.classes.textField}
              label="Address"
              name="address"
            />
          </FormLabel>
          <FormLabel htmlFor="city">
            <TextField
              className={this.props.classes.textField}
              label="City"
              name="city"
            />
          </FormLabel>
          <FormLabel htmlFor="state">
            <TextField
              className={this.props.classes.textField}
              label="State"
              name="state"
            />
          </FormLabel>
          <FormLabel htmlFor="zipcode">
            <TextField
              className={this.props.classes.textField}
              label="Zipcode"
              name="zipcode"
            />
          </FormLabel>
          <Button
            className={this.props.classes.button}
            color="primary"
            variant="extendedFab"
            type="submit"
          >
            Update Profile
          </Button>
          <Button
            className={this.props.classes.button}
            color="secondary"
            variant="extendedFab"
            onClick={this.goHome}
          >
            cancel
        </Button>
        </FormControl>
      </form>
    )
  }
}

const StyledCreateEventsForm = withStyles(styles)(CreateEventsForm);

export default StyledCreateEventsForm;