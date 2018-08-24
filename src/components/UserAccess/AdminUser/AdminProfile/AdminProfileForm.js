import React, { Component } from 'react';
import { connect } from 'react-redux';
// material ui components
import { withStyles, FormControl, FormLabel, TextField, Button } from '@material-ui/core';
// react material responsive grid components
import { Row, Col } from 'react-material-responsive-grid';

const mapStateToProps = state => ({
  user: state.user,
  userProfile: state.user.profile
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

  goHome = () => {
    window.location.href = "http://localhost:3000/#/user"
  }

  render() {
    return (
      <form
        className={this.props.classes.form}
        onSubmit={this.props.handleClickOpen}>
        <FormControl component="fieldset"
          className={this.props.classes.container}>
          <Row>
            <Col xs4={2} md={6} lg={6}>
              <FormLabel htmlFor="first_name">
                <TextField
                  className={this.props.classes.textField}
                  label="First Name"
                  name="first_name"
                  placeholder={this.props.profile.first_name}
                  fullWidth
                  defaultValue={this.props.profile.first_name}
                  onChange={this.props.handleInputChangeFor('first_name')}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormLabel>
            </Col>
            <Col xs4={2} md={6} lg={6}>
              <FormLabel htmlFor="middle_name">
                <TextField
                  className={this.props.classes.textField}
                  label="Middle Name"
                  name="middle_name"
                  placeholder={this.props.profile.middle_name}
                  fullWidth
                  margin="normal"
                  defaultValue={this.props.profile.middle_name}
                  onChange={this.props.handleInputChangeFor('middle_name')}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormLabel>
            </Col>
          </Row>
          <Row>
            <Col xs4={2} md={6} lg={6}>
              <FormLabel htmlFor="lastName">
                <TextField
                  className={this.props.classes.textField}
                  label="Last Name"
                  name="last_name"
                  placeholder={this.props.profile.last_name}
                  fullWidth
                  onChange={this.props.handleInputChangeFor('last_name')}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormLabel>
            </Col>
            <Col xs4={2} md={6} lg={6}>
              <FormLabel htmlFor="email">
                <TextField
                  className={this.props.classes.textField}
                  label="Email"
                  name="email"
                  placeholder={this.props.profile.email}
                  fullWidth
                  onChange={this.props.handleInputChangeFor('email')}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormLabel>
            </Col>
          </Row>
          <Row>
            <Col xs4={2} md={6} lg={6}>
              <FormLabel htmlFor="primary_phone"
                className={this.props.classes.formLabel}>
                <TextField
                  className={this.props.classes.textField}
                  label="Primary Phone xxx-xxx-xxxx"
                  name="primary_phone"
                  placeholder={this.props.profile.primary_phone}
                  fullWidth
                  onChange={this.props.handleInputChangeFor('primary_phone')}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormLabel>
            </Col>
            <Col xs4={2} md={6} lg={6}>
              <FormLabel htmlFor="address">
                <TextField
                  className={this.props.classes.textField}
                  label="Address"
                  name="address"
                  placeholder={this.props.profile.address}
                  fullWidth
                  onChange={this.props.handleInputChangeFor('address')}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormLabel>
            </Col>
          </Row>
          <Row>
            <Col xs4={2} md={6} lg={6}>
              <FormLabel htmlFor="city">
                <TextField
                  className={this.props.classes.textField}
                  label="City"
                  name="city"
                  placeholder={this.props.profile.city}
                  fullWidth
                  onChange={this.props.handleInputChangeFor('city')}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormLabel>
            </Col>
            <Col xs4={2} md={6} lg={6}>
              <FormLabel htmlFor="state">
                <TextField
                  className={this.props.classes.textField}
                  label="State"
                  name="state"
                  placeholder={this.props.profile.state}
                  fullWidth
                  onChange={this.props.handleInputChangeFor('state')}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormLabel>
            </Col>
          </Row>
          <Row>
            <Col xs4={2} md={6} lg={6}>
              <FormLabel htmlFor="zipcode">
                <TextField
                  className={this.props.classes.textField}
                  label="Zipcode"
                  name="zipcode"
                  placeholder={this.props.profile.zipcode}
                  fullWidth
                  onChange={this.props.handleInputChangeFor('zipcode')}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </FormLabel>
            </Col>
          </Row>
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
      </form>
    )
  }
}

const StyledAdminProfileForm =
  withStyles(styles)(AdminProfileForm);
export default connect(mapStateToProps)(StyledAdminProfileForm);