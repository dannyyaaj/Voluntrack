import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminProfileForm from '../AdminProfile/AdminProfileForm';

import { withStyles } from "@material-ui/core/styles";
import { Button, Card, CardContent, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import { Grid, Row, Col } from 'react-material-responsive-grid';

import { USER_DATA_ACTIONS } from '../../../../redux/actions/userDataActions';
import { triggerUpdateUser } from '../../../../redux/actions/userDataActions';

const mapStateToProps = state => ({
  user: state.user,
  profile: state.user.profile
});

const styles = {
  card: {
    margin: '2rem auto',
    padding: '0 2rem',
    width: '50%',
    backgroundColor: '#DCEFF5',
  },
  cardActions: {
    padding: '0 40%'
  },
  dialogModal: {
    textAlign: 'center',
  }
}

class AdminProfileView extends Component {
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
      dialogIsOpen: false
    };
  }

  componentWillMount() {
    this.props.dispatch({ type: USER_DATA_ACTIONS.FETCH_USER_DATA });
  }

  // Wait for redux state to load, then set the local state's values
  async componentDidMount() {
    await new Promise(resolve => { setTimeout(resolve, 500) })
    this.setValues();
  }

  componentWillUnmount() {
    this.props.dispatch({ type: USER_DATA_ACTIONS.UNSET_USER_DATA });
  }

  // Store redux state values in local variable
  setValues = () => {
    const oldFirstName = this.props.profile.first_name;
    const oldMiddleName = this.props.profile.middle_name;
    const oldLastName = this.props.profile.last_name;
    const oldEmail = this.props.profile.email;
    const oldPrimaryPhone = this.props.profile.primary_phone;
    const oldAddress = this.props.profile.address;
    const oldCity = this.props.profile.city;
    const oldState = this.props.profile.state;
    const oldZipcode = this.props.profile.zipcode;

    // Initialize local state values to the most current user information in database, which is stored in redux state
    this.setState({
      first_name: oldFirstName,
      middle_name: oldMiddleName,
      last_name: oldLastName,
      email: oldEmail,
      primary_phone: oldPrimaryPhone,
      address: oldAddress,
      city: oldCity,
      state: oldState,
      zipcode: oldZipcode,
    })
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value
    });
  }

  updateUserProfile = () => {
    this.setState({
      dialogIsOpen: false
    });
    /** Send user id and component local state as 
    arguments to redux saga for PUT request */

    this.props.dispatch(triggerUpdateUser(this.props.user.id, this.state))

  }

  // Opens modal
  handleClickOpen = (event) => {
    event.preventDefault();
    this.setState({
      dialogIsOpen: true
    });
  };
 
  // Closes modal
  handleClose = () => {
    this.setState({
      dialogIsOpen: false
    });
  }

  render() {
    return (
      <Grid
        fixed="center"
      >
        <Card className={this.props.classes.card}>
          <CardContent>
            <h1 className="formHeader">Your Profile</h1>
            <p className="formDescription">Manage your basic information below - name, email, and phone number - to make it easier for organizations to get in touch.</p>
            <AdminProfileForm
              handleInputChangeFor={this.handleInputChangeFor}
              profile={this.state}
              handleClickOpen={this.handleClickOpen}
            />
          </CardContent>
        </Card>
        <div>
          <Dialog
            fullWidth
            className={this.props.classes.dialogModal}
            open={this.state.dialogIsOpen}
            onClose={this.handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle>{"Update Profile"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Are you sure everything is correct?
                  </DialogContentText>
            </DialogContent>
            <DialogActions
            >
              <Row>
                <Col xs4={2} md={6} lg={6}>
                  <Button
                    onClick={this.handleClose}
                    color="primary">
                    Cancel
                    </Button>
                </Col>
                <Col xs4={2} md={6} lg={6}>
                  <Button
                    onClick={this.updateUserProfile}
                    color="primary"
                    autoFocus>
                    Save
                    </Button>
                </Col>
              </Row>
            </DialogActions>
          </Dialog>
        </div>
      </Grid>
    );
  }
}

const StyledAdminProfileView = withStyles(styles)(AdminProfileView)

export default connect(mapStateToProps)(StyledAdminProfileView);