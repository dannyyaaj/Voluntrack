import React, { Component } from 'react';
import { connect } from 'react-redux';
// material ui components
import { withStyles, FormControl, TextField, Button } from '@material-ui/core';
import { Grid, Row, Col } from 'react-material-responsive-grid';
import moment from 'moment';
import { EVENT_ACTIONS } from '../../../../redux/actions/eventActions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const styles = () => ({
  form: {
    textAlign: 'center',
    margin: '2.5rem auto',
  },
  container: {
    width: '100%'
  },
  formTitle: {
    marginBottom: '2.5rem',
  },
  textField: {
    margin: '1rem auto',
    padding: '0 0 1.2rem 0'
  },
  datePicker: {
    width: '150%',
    borderColor: 'red',
    textAlign: 'center',
  },
  button: {
    marginTop: '3rem',
  }
});
class CreateEventsForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      start_time: moment.utc(),
      end_time: moment.utc(),
      date: moment.utc(),
      address: '',
      city: '',
      state: '',
      zipcode: '',
      coordinator: '',
      image_url: '',
      num_of_volunteers: '',
      roles: '',
    };
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  handleEndTimeChange = (time) => {
    this.setState({
      end_time: time
    });
  }

  handleStartTimeChange = (time) => {
    this.setState({
      date: time,
      start_time: time
    });
  }

  addEvent = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: EVENT_ACTIONS.POST_EVENT,
      payload: this.state
    })
    this.props.handleClose()
  }

  render() {
    console.log(this.state.date, 'local date')
    return (
      <Grid fixed={'center'}>
        <form
          className={this.props.classes.form}
          onSubmit={this.addEvent}
          noValidate
        >
          <FormControl component="fieldset"
            className={this.props.classes.container}>
            <Row
              top={['xs4', 'md', 'lg']}
            >
              <Col xs4={2} md={6} lg={6}>
                <TextField
                  className={this.props.classes.textField}
                  label="Event Name"
                  name="event_name"
                  placeholder="Add a short, clear name"
                  fullWidth
                  value={this.state.name}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleInputChangeFor('name')}
                />
              </Col>
              <Col xs4={1} md={3} lg={3}>
                <DatePicker
                  selected={this.state.start_time}
                  onChange={this.handleStartTimeChange}
                  showTimeSelect
                  timeIntervals={30}
                  dateFormat="ddd, MMM D, YYYY h:mm A"
                  className={this.props.classes.datePicker}
                  placeholderText={"Please Select Date/Start Time"}
                />

              </Col>
              <Col xs4={1} md={3} lg={3}>
                <DatePicker
                  selected={this.state.end_time}
                  onChange={this.handleEndTimeChange}
                  showTimeSelect
                  timeIntervals={30}
                  dateFormat="ddd, MMM D, YYYY h:mm A"
                  className={this.props.classes.datePicker}
                  placeholderText={"Please Select Date/End Time"}
                />
              </Col>
            </Row>
            <Row>
              <Col xs4={2} md={6} lg={6}>
                <TextField
                  className={this.props.classes.textField}
                  label="Address"
                  name="address"
                  fullWidth
                  value={this.state.address}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleInputChangeFor('address')}
                />
              </Col>
              <Col xs4={2} md={6} lg={6}>
                <TextField
                  className={this.props.classes.textField}
                  label="Volunteer Coordinator"
                  name="coordinator"
                  fullWidth
                  value={this.state.coordinator}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleInputChangeFor('coordinator')}
                />
              </Col>
            </Row>
            <Row>
              <Col xs4={2} md={6} lg={6}>
                <TextField
                  className={this.props.classes.textField}
                  label="City"
                  name="city"
                  fullWidth
                  value={this.state.city}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleInputChangeFor('city')}

                />
              </Col>
              <Col xs4={1} md={3} lg={3}>
                <TextField
                  className={this.props.classes.textField}
                  label="Number of Volunteers"
                  name="num_of_volunteers"
                  type="number"
                  fullWidth
                  value={this.state.num_of_volunteers}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleInputChangeFor('num_of_volunteers')}
                />
              </Col>
              <Col xs4={1} md={3} lg={3}>
                <TextField
                  className={this.props.classes.textField}
                  label="Upload An Image"
                  name="image_url"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleInputChangeFor('image_url')}
                />
              </Col>
            </Row>
            <Row>
              <Col xs4={2} md={3} lg={3}>
                <TextField
                  className={this.props.classes.textField}
                  label="State"
                  name="state"
                  fullWidth
                  value={this.state.state}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleInputChangeFor('state')}
                />
              </Col>
              <Col xs4={2} md={3} lg={3}>
                <TextField
                  className={this.props.classes.textField}
                  label="Zipcode"
                  name="zipcode"
                  fullWidth
                  value={this.state.zipcode}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleInputChangeFor('zipcode')}
                />
              </Col>
            </Row>
            <Row>
              <Col xs4={4} md={12} lg={12}>
                <TextField
                  className={this.props.classes.textField}
                  label="Description"
                  name="description"
                  placeholder="Tell people more about this event"
                  multiline
                  rows={2}
                  rowsMax={4}
                  fullWidth
                  value={this.state.description}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleInputChangeFor('description')}
                />
              </Col>
            </Row>
            <Row>
              <Col xs4={2} md={6} lg={6}>
                <Button
                  className={this.props.classes.button}
                  color="secondary"
                  variant="extendedFab"
                  onClick={this.props.handleClose}
                  fullWidth
                >
                  Cancel
                </Button>
              </Col>
              <Col xs4={2} md={6} lg={6}>
                <Button
                  className={this.props.classes.button}
                  color="primary"
                  variant="extendedFab"
                  type="submit"
                  fullWidth
                >
                  Create Event
                </Button>
              </Col>
            </Row>
          </FormControl>
        </form>
      </Grid>
    )
  }
}

const StyledCreateEventsForm = withStyles(styles)(CreateEventsForm);

export default connect()(StyledCreateEventsForm);