import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminProfileForm from './AdminProfileForm';
import { withStyles } from "@material-ui/core/styles";
import { Card, CardContent, Grid } from '@material-ui/core';
import { USER_DATA_ACTIONS } from '../../../../redux/actions/userDataActions';

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
    };
  }

  componentWillMount() {
    this.props.dispatch({ type: USER_DATA_ACTIONS.FETCH_USER_DATA });
  }

  // Wait for reduxState to load, then set the local state's values
  async componentDidMount() {
    await new Promise(resolve => { setTimeout(resolve, 500) })
    this.setValues();
  }

  componentWillUnmount() {
    this.props.dispatch({ type: USER_DATA_ACTIONS.UNSET_USER_DATA });
  }

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

    // Sets local state's values to the most current user information in database, which is stored in reduxState
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

  render() {
    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Card className={this.props.classes.card}>
              <CardContent>
                <h1 className="formHeader">Your Profile</h1>
                <p className="formDescription">Manage your basic information below - name, email, and phone number - to make it easier for organizations to get in touch.</p>
                <AdminProfileForm
                  profile={this.state}
                />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}

const StyledAdminProfileView = withStyles(styles)(AdminProfileView)

export default connect(mapStateToProps)(StyledAdminProfileView);

