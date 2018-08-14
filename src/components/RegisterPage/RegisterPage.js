import React, { Component } from 'react';
import axios from 'axios';
import RegistrationForm from './RegistrationForm';
import { withStyles } from "@material-ui/core/styles";
import { Card, CardContent, Grid } from '@material-ui/core';

const styles = {
  card: {
    margin: '2rem auto',
    width: '50%',
    backgroundColor: '#DCEFF5',
  },
  cardActions: {
    padding: '0 40%'
  },
}

class RegisterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      firstName: '',
      lastName: '',
      admin_access: false
    };
  }

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.setState({
        message: 'Please complete all inputs!',
      });
    } else {
      const body = {
        username: this.state.username,
        password: this.state.password,
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        admin_access: this.state.admin_access
      };

      // making the request to the server to post the new user's registration
      axios.post('/api/user/register/', body)
        .then((response) => {
          if (response.status === 201) {
            this.props.history.push('/home');
          } else {
            this.setState({
              message: 'Ooops! That didn\'t work. The username might already be taken. Try again!',
            });
          }
        })
        .catch(() => {
          this.setState({
            message: 'Ooops! Something went wrong! Is the server running?',
          });
        });
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderAlert() {
    if (this.state.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.state.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    return (
      <Grid container justify="center">
        <Grid item xs={12}>
          <Card className={this.props.classes.card}>
            <CardContent>
              {this.renderAlert()}
              <h1 className="formHeader">Sign up and start volunteering today</h1>
              <RegistrationForm
                registerUser={this.registerUser}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                email={this.state.email}
                username={this.state.username}
                password={this.state.password}
                handleInputChangeFor={this.handleInputChangeFor}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      /* <form className="signUpForm" onSubmit={this.registerUser}>
        <div>
          <label htmlFor="firstName">
            First Name:
            <input
              type="text"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChangeFor('firstName')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="lastName">
            Last Name:
            <input
              type="text"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChangeFor('lastName')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email:
            <input
              type="text"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChangeFor('email')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="username">
            Username:
            <input
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChangeFor('username')}
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChangeFor('password')}
            />
          </label>
        </div>
        <div className="getStarted">
          <input
            type="submit"
            name="submit"
            value="Get Started"
          />
          <Link to="/home">Cancel</Link>
        </div>
      </form> */
    );
  }
}
const StyledRegisterPage = withStyles(styles)(RegisterPage)

export default StyledRegisterPage;

