import React, { Component } from 'react';
import PublicNav from '../Nav/PublicNav';
import { connect } from 'react-redux';
import { triggerLogin, formError, clearError } from '../../redux/actions/loginActions';
import { USER_ACTIONS } from '../../redux/actions/userActions';
import { withStyles, Card, CardContent, FormControl, FormLabel, TextField, Button } from "@material-ui/core";
import { Row, Col, Grid } from 'react-material-responsive-grid';

const styles = {
  card: {
    textAlign: 'center',
    margin: '2rem auto',
    width: '50%',
    backgroundColor: '#DCEFF5',
  },
  form: {
    padding: '1.5rem 0',
    margin: '1.5rem auto',
    backgroundColor: 'white',
  },
  container: {
    width: '75%'
  },
  formTitle: {
    color: 'black',
    marginBottom: '2.5rem',
  },
  textField: {
    margin: '0 auto',
    padding: '0 0 1.5rem 0'
  },
  button: {
    margin: '0.25rem auto 0.5rem auto',
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
      this.props.history.push('events');
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
    this.props.history.push('/register');
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
        <Grid justify="center">
            <Card className={this.props.classes.card}>
              <CardContent>
                {this.renderAlert()}
                <h1>Please Login</h1>
                <form
                  className={this.props.classes.form}
                  onSubmit={this.login}>
                  <FormControl className={this.props.classes.container}
                    component="fieldset">
                    <Row>
                      <Col xs4={4} md={12} lg={12}>
                        <FormLabel htmlFor="username">
                          <TextField
                            className={this.props.classes.textField}
                            label="Username"
                            name="username"
                            fullWidth
                            value={this.state.username}
                            onChange={this.handleInputChangeFor('username')}
                          />
                        </FormLabel>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs4={4} md={12} lg={12}>
                        <FormLabel htmlFor="password">
                          <TextField
                            className={this.props.classes.textField}
                            label="Password"
                            name="password"
                            type="password"
                            fullWidth
                            value={this.state.password}
                            onChange={this.handleInputChangeFor('password')}
                          />
                        </FormLabel>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs4={4} md={12} lg={12}>
                        <Button
                          className={this.props.classes.button}
                          color="primary"
                          variant="extendedFab"
                          fullWidth
                          type="submit"
                        >
                          Log In
                    </Button>
                      </Col>
                    </Row>
                    <Row>
                      <Col xs4={4} md={12} lg={12}>
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
                      </Col>
                    </Row>
                  </FormControl>
                </form>
              </CardContent>
            </Card>
          </Grid>
      </div>
    );
  }
}

const StyledLoginPage = withStyles(styles)(LoginPage)

export default connect(mapStateToProps)(StyledLoginPage);