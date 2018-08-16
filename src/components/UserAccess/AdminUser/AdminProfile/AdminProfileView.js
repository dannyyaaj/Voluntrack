import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminProfileForm from './AdminProfileForm';
import { withStyles } from "@material-ui/core/styles";
import { Card, CardContent, Grid } from '@material-ui/core';

const mapStateToProps = state => ({
  user: state.user,
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
      zipcode: ''
    };
  }

  updateUserProfile = (event) => {
    event.preventDefault();

  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }



  render() {
    console.log(this.state, 'local state')
    return (
      <div>
        <Grid container justify="center">
          <Grid item xs={12}>
            <Card className={this.props.classes.card}>
              <CardContent>
                <h1 className="formHeader">Your Profile</h1>
                <p className="formDescription">Manage your basic information below - name, email, and phone number - to make it easier for organizations to get in touch.</p>
                <AdminProfileForm
                  user={this.state}
                  handleInputChangeFor={this.handleInputChangeFor}
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

