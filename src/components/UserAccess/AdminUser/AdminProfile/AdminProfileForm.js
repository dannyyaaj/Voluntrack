import React, { Component } from 'react';
// material ui components
import { withStyles, FormControl, FormLabel, TextField, Button } from '@material-ui/core';
// import FormLabel from '@material-ui/core/FormLabel';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { USER_DATA_ACTIONS } from '../../../../redux/actions/userDataActions';
import { triggerUpdateUser } from '../../../../redux/actions/userDataActions';

const mapStateToProps = state => ({
  user: state.user,
});

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
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      middle_name: '',
      last_name: '',
      email: '',
      primary_phone: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
    };
  }

  componentDidMount() {
    this.props.dispatch({ type: USER_DATA_ACTIONS.FETCH_USER_DATA });
  }

  goHome = () => {
    window.location.href = "http://localhost:3000/#/user"
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  updateUserProfile = (event) => {
    event.preventDefault();
    // Check local state for empty values and delete them from state object
    const acceptedValues = '';
    const oldState = this.state;
    const newState = {};
    for (let key in oldState) {
      if (oldState.hasOwnProperty(key)) {
        if (acceptedValues.indexOf(oldState[key]) === -1) {
          newState[key] = oldState[key];
        }
      }
    }

    console.log(newState);
    //dispatch to put request will go here
    this.props.dispatch(triggerUpdateUser(this.props.user.id, newState))
  }

  render() {
    return (
      <form
        className={this.props.classes.form}
        onSubmit={this.updateUserProfile}>
        <FormControl component="fieldset"
          className={this.props.classes.container}>
          <FormLabel htmlFor="first_name">
            <TextField
              className={this.props.classes.textField}
              label="First Name"
              name="first_name"
              placeholder={this.props.profile.first_name}
              fullWidth
              value={this.state.first_name}
              onChange={this.handleInputChangeFor('first_name')}
            />
          </FormLabel>
          <FormLabel htmlFor="middle_name">
            <TextField
              className={this.props.classes.textField}
              label="Middle Name"
              name="middle_name"
              placeholder={this.props.profile.middle_name}
              fullWidth
              margin="normal"
              value={this.state.middle_name}
              onChange={this.handleInputChangeFor('middle_name')}
            />
          </FormLabel>
          <FormLabel htmlFor="lastName">
            <TextField
              className={this.props.classes.textField}
              label="Last Name"
              name="last_name"
              placeholder={this.props.profile.last_name}
              fullWidth
              value={this.state.last_name}
              onChange={this.handleInputChangeFor('last_name')}
            />
          </FormLabel>
          <FormLabel htmlFor="email">
            <TextField
              className={this.props.classes.textField}
              label="Email"
              name="email"
              placeholder={this.props.profile.email}
              fullWidth
              value={this.state.email}
              onChange={this.handleInputChangeFor('email')}
            />
          </FormLabel>
          <FormLabel htmlFor="primary_phone"
            className={this.props.classes.formLabel}>
            <TextField
              className={this.props.classes.textField}
              label="Primary Phone xxx-xxx-xxxx"
              name="primary_phone"
              placeholder={this.props.profile.primary_phone}
              fullWidth
              value={this.state.primary_phone}
              onChange={this.handleInputChangeFor('primary_phone')}
            />
          </FormLabel>
          <FormLabel htmlFor="address">
            <TextField
              className={this.props.classes.textField}
              label="Address"
              name="address"
              placeholder={this.props.profile.address}
              fullWidth
              value={this.state.address}
              onChange={this.handleInputChangeFor('address')}
            />
          </FormLabel>
          <FormLabel htmlFor="city">
            <TextField
              className={this.props.classes.textField}
              label="City"
              name="city"
              placeholder={this.props.profile.city}
              fullWidth
              value={this.state.city}
              onChange={this.handleInputChangeFor('city')}
            />
          </FormLabel>
          <FormLabel htmlFor="state">
            <TextField
              className={this.props.classes.textField}
              label="State"
              name="state"
              placeholder={this.props.profile.state}
              fullWidth
              value={this.state.state}
              onChange={this.handleInputChangeFor('state')}
            />
          </FormLabel>
          <FormLabel htmlFor="zipcode">
            <TextField
              className={this.props.classes.textField}
              label="Zipcode"
              name="zipcode"
              placeholder={this.props.profile.zipcode}
              fullWidth
              value={this.state.zipcode}
              onChange={this.handleInputChangeFor('zipcode')}
            />
          </FormLabel>
          <div>
            <Button
              className={this.props.classes.button}
              color="primary"
              variant="extendedFab"
              fullWidth="true"
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
export default connect(mapStateToProps)(StyledAdminProfileForm);