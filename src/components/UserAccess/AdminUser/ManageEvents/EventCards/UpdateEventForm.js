import React, { Component } from 'react';
import { connect } from 'react-redux';
// material ui components
import { withStyles, FormControl, TextField, Button } from '@material-ui/core';
import { Grid, Row, Col } from 'react-material-responsive-grid';
import moment from 'moment';
import { EVENT_ACTIONS } from '../../../../../redux/actions/eventActions';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const mapStateToProps = state => ({
  upcomingEvents: state.event.upcoming
})

const styles = () => ({
  form: {
    textAlign: 'center',
    margin: '3rem auto',
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
  button: {
    marginTop: '3rem',
  },
  coverImage: {
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
  }
});

class UpdateEventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      description: '',
      start_time: moment(),
      end_time: moment(),
      date: moment(),
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

  // componentDidMount() {
  //   this.setValues();
  // }

  // setValues = () => {

  //   if (this.props.eventId = event.)
  //   const oldEventId = this.props.eventId;
  //   const oldEventName = this.props.upcomingEvents.name;
  //   const oldEventDescription = this.props.upcomingEvents.description;
  //   const oldEventStart_time = this.props.upcomingEvents.start_time;
  //   const oldEventEnd_time = this.props.upcomingEvents.end_time;
  //   const oldEventDate = this.props.upcomingEvents.date;
  //   const oldEventAddress = this.props.upcomingEvents.address;
  //   const oldEventCity = this.props.upcomingEvents.city;
  //   const oldEventState = this.props.upcomingEvents.state;
  //   const oldEventZipcode = this.props.upcomingEvents.zipcode;
  //   const oldEventCoordinator = this.props.upcomingEvents.coordinator;
  //   const oldEventImage_url = this.props.upcomingEvents.image_url;
  //   const oldEventNum_of_volunteers = this.props.upcomingEvents.num_of_volunteers;
  //   const oldEventRoles = this.props.upcomingEvents.roles;

  //   // Initialize local state values to the most current user information in database, which is stored in redux state
  //   this.setState({
  //     id: oldEventId,
  //     name: oldEventName,
  //     description: oldEventDescription,
  //     start_time: oldEventStart_time,
  //     end_time: oldEventEnd_time,
  //     date: oldEventDate,
  //     address: oldEventAddress,
  //     city: oldEventCity,
  //     state: oldEventState,
  //     zipcode: oldEventZipcode,
  //     coordinator: oldEventCoordinator,
  //     image_url: oldEventImage_url,
  //     num_of_volunteers: oldEventNum_of_volunteers,
  //     roles: oldEventRoles,
  //   })
  // }

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
      start_time: time
    });
  }

  handleDateChange = (newDate) => {
    this.setState({
      date: newDate
    });
  }

  addEvent = (event) => {
    event.preventDefault();
    this.props.dispatch({
      type: EVENT_ACTIONS.POST_EVENT,
      payload: this.state
    })
  }

  render() {
    const newEventsArray = this.props.upcomingEvents.map((event, index) => {
      return (
        <div key={index}>{event.name}</div>
      )
    })
    console.log(newEventsArray,'all events')
    console.log(this.props.eventId, 'event Id')
    console.log(this.props.upcomingEvents, 'image url')
    return (
      <Grid fixed={'center'}>
        <form
          className={this.props.classes.form}
          onSubmit={this.addEvent}
          noValidate
        >
          <FormControl component="fieldset"
            className={this.props.classes.container}>
            <Row>
              <Col xs4={4} md={12} lg={12}>
                <div
                  style={{
                    background: `url(${this.props.upcomingEvents.image_url})`,
                    height: '20vh',
                  }}
                  className={this.props.classes.coverImage}
                >
                </div>
              </Col>
            </Row>
            <Row
              start={['xs4', 'md', 'lg']}
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
              <Col xs4={0.33} md={2} lg={2}>
                <DatePicker
                  // inline
                  selected={this.state.date}
                  onChange={this.handleDateChange}
                />
              </Col>
              <Col xs4={0.33} md={2} lg={2}>
                <DatePicker
                  selected={this.state.start_time}
                  onChange={this.handleStartTimeChange}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={30}
                  dateFormat="LT"
                  timeCaption="Time"
                />
              </Col>
              <Col xs4={0.33} md={2} lg={2}>
                <DatePicker
                  selected={this.state.end_time}
                  onChange={this.handleEndTimeChange}
                  showTimeSelect
                  showTimeSelectOnly
                  timeIntervals={30}
                  dateFormat="LT"
                  timeCaption="Time"
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
                  label="Volunteer Roles"
                  name="volunteer_roles"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleInputChangeFor('roles')}
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
                  onClick={this.props.handleCloseModal}
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
      </Grid >
    )
  }
}

const StyledCreateEventsForm = withStyles(styles)(UpdateEventForm);

export default connect(mapStateToProps)(StyledCreateEventsForm);