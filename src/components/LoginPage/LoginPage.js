import React, { Component } from 'react';
import PublicNav from '../PublicNav/PublicNav';
import { connect } from 'react-redux';
import { triggerLogin, formError, clearError } from '../../redux/actions/loginActions';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { withStyles, Card, CardContent, Grid, FormControl, FormLabel, TextField, Button } from "@material-ui/core";

const styles = {
  card: {
    margin: '2rem auto',
    width: '50%',
    backgroundColor: '#DCEFF5',
  },
  cardActions: {
    padding: '0 40%'
  },
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
  },
  button: {
    marginTop: '1rem',
  }
}

const mapStateToProps = state => ({
  user: state.user,
  login: state.login,
});

class LoginPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: '',
    };
  }

  componentDidMount() {
    this.props.dispatch({ type: USER_ACTIONS.FETCH_USER });
    this.props.dispatch(clearError());
  }

  componentDidUpdate() {
    if (!this.props.user.isLoading && this.props.user.userName !== null) {
      this.props.history.push('user');
    }
  }

  login = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
      this.props.dispatch(formError());
    } else {
      this.props.dispatch(triggerLogin(this.state.username, this.state.password));
    }
  }

  register = () => {
    window.location.href = "http://localhost:3000/#/register"
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  renderAlert() {
    if (this.props.login.message !== '') {
      return (
        <h2
          className="alert"
          role="alert"
        >
          {this.props.login.message}
        </h2>
      );
    }
    return (<span />);
  }

  render() {
    return (
      <div>
        <PublicNav />
        <Grid container justify="center">
          <Grid item xs={12}>
            <Card className={this.props.classes.card}>
              <CardContent>
                {this.renderAlert()}
                <form
                  className={this.props.classes.container}
                  onSubmit={this.login}>
                  <FormControl component="fieldset">
                    <h1>Please Login</h1>
                    <FormLabel htmlFor="username">
                      <TextField
                        className={this.props.classes.textField}
                        label="Username"
                        name="username"
                        fullWidth
                        margin="normal"
                        value={this.state.username}
                        onChange={this.handleInputChangeFor('username')}
                      />
                    </FormLabel>
                    <FormLabel htmlFor="password">
                      <TextField
                        className={this.props.classes.textField}
                        label="Password"
                        name="password"
                        fullWidth
                        margin="normal"
                        value={this.state.password}
                        onChange={this.handleInputChangeFor('password')}
                      />
                    </FormLabel>
                    <Button
                      className={this.props.classes.button}
                      color="primary"
                      variant="extendedFab"
                      fullWidth
                      type="submit"
                    >
                      Log In
                    </Button>
                    <Button
                      onClick={() => this.register()}
                      className={this.props.classes.button}
                      color="secondary"
                      type="button"
                      name="register"
                      variant="extendedFab"
                      fullWidth
                    >
                      Register
                      </Button>
                  </FormControl>
                </form>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
const StyledLoginPage = withStyles(styles)(LoginPage)

export default connect(mapStateToProps)(StyledLoginPage);
