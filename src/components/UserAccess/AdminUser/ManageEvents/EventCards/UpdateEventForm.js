import React, { Component } from 'react';
import { connect } from 'react-redux';
// material ui components
import moment from 'moment';
import { withStyles, FormControl, TextField, Button } from '@material-ui/core';
import { Grid, Row, Col } from 'react-material-responsive-grid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { triggerUpdateEvent } from '../../../../../redux/actions/eventActions';

const mapStateToProps = state => ({
  upcomingEvents: state.event.upcoming
})

const styles = {
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
  datePicker: {
    width: '125%',
    borderColor: 'red',
    textAlign: 'center',
  },
  button: {
    margin: '0.25rem auto 0.5rem auto',
  },
  coverImage: {
    height: '20vh',
    paddingBottom: '3rem',
    marginBottom: '2rem',
  }
};
class UpdateEventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      start_time: '',
      end_time: '',
      date: '',
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

  componentDidMount() {
    this.setValues();
  }

  setValues = () => {
    const oldEventName = this.props.eventToUpdate.name;
    const oldEventDescription = this.props.eventToUpdate.description;
    const oldEventStartTime = this.props.eventToUpdate.start_time;
    const oldEventEndTime = this.props.eventToUpdate.end_time;
    const oldEventDate = this.props.eventToUpdate.date;
    const oldEventAddress = this.props.eventToUpdate.address;
    const oldEventCity = this.props.eventToUpdate.city;
    const oldEventState = this.props.eventToUpdate.state;
    const oldEventZipcode = this.props.eventToUpdate.zipcode;
    const oldEventCoordinator = this.props.eventToUpdate.coordinator;
    const oldEventImageUrl = this.props.eventToUpdate.image_url;
    const oldEventNumOfVolunteers = this.props.eventToUpdate.num_of_volunteers;
    const oldEventRoles = this.props.eventToUpdate.roles;


    this.setState({
      name: oldEventName,
      description: oldEventDescription,
      start_time: oldEventStartTime,
      end_time: oldEventEndTime,
      date: oldEventDate,
      address: oldEventAddress,
      city: oldEventCity,
      state: oldEventState,
      zipcode: oldEventZipcode,
      coordinator: oldEventCoordinator,
      image_url: oldEventImageUrl,
      num_of_volunteers: oldEventNumOfVolunteers,
      roles: oldEventRoles,
    })
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

  updateEvent = (event) => {
    event.preventDefault();
    this.props.dispatch(triggerUpdateEvent(this.props.eventId, this.state))
    this.props.handleCloseModal();
  }

  render() {
    return (
      <Grid fixed={'center'}>
        <form
          className={this.props.classes.form}
          onSubmit={this.updateEvent}
          noValidate
        >
          <FormControl component="fieldset"
            className={this.props.classes.container}>
            <Row>
              <Col xs4={4} md={12} lg={12}>
                <div
                  className={this.props.classes.coverImage}
                  style={{
                    background: `url(${this.props.eventToUpdate.image_url})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                </div>
              </Col>
            </Row>
            <Row
              top={['xs4','md', 'lg']}
            >
              <Col xs4={4} md={6} lg={6}>
                <TextField
                  className={this.props.classes.textField}
                  label="Event Name"
                  name="event_name"
                  fullWidth
                  placeholder={this.props.eventToUpdate.name}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleInputChangeFor('name')}
                />
              </Col>
              <Col xs4={4} md={3} lg={3}>
                <DatePicker
                  selected={moment(this.state.start_time).utc()}
                  onChange={this.handleStartTimeChange}
                  showTimeSelect
                  timeIntervals={30}
                  dateFormat="ddd, MMM D, YYYY h:mm A"
                  className={this.props.classes.datePicker}
                  placeholderText={
                    moment(this.props.eventToUpdate.start_time).utc()
                      .format("ddd, MMM D, YYYY h:mm A")}
                />

              </Col>
              <Col xs4={4} md={3} lg={3}>
                <DatePicker
                  selected={moment(this.state.end_time).utc()}
                  onChange={this.handleEndTimeChange}
                  showTimeSelect
                  timeIntervals={30}
                  dateFormat="ddd, MMM D, YYYY h:mm A"
                  className={this.props.classes.datePicker}
                  placeholderText={
                    moment(this.props.eventToUpdate.end_time).utc()
                      .format("ddd, MMM D, YYYY h:mm A")}
                />
              </Col>
            </Row>
            <Row>
              <Col xs4={4} md={6} lg={6}>
                <TextField
                  className={this.props.classes.textField}
                  label="Address"
                  name="address"
                  fullWidth
                  placeholder={this.props.eventToUpdate.address}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleInputChangeFor('address')}
                />
              </Col>
              <Col xs4={4} md={6} lg={6}>
                <TextField
                  className={this.props.classes.textField}
                  label="Volunteer Coordinator"
                  name="coordinator"
                  fullWidth
                  placeholder={this.props.eventToUpdate.coordinator}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleInputChangeFor('coordinator')}
                />
              </Col>
            </Row>
            <Row>
              <Col xs4={4} md={6} lg={6}>
                <TextField
                  className={this.props.classes.textField}
                  label="City"
                  name="city"
                  fullWidth
                  placeholder={this.props.eventToUpdate.city}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleInputChangeFor('city')}

                />
              </Col>
              <Col xs4={4} md={3} lg={3}>
                <TextField
                  className={this.props.classes.textField}
                  label="Number of Volunteers"
                  name="num_of_volunteers"
                  type="number"
                  fullWidth
                  placeholder={this.props.eventToUpdate.num_of_volunteers}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleInputChangeFor('num_of_volunteers')}
                />
              </Col>
              <Col xs4={4} md={3} lg={3}>
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
              <Col xs4={4} md={3} lg={3}>
                <TextField
                  className={this.props.classes.textField}
                  label="State"
                  name="state"
                  fullWidth
                  placeholder={this.props.eventToUpdate.state}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleInputChangeFor('state')}
                />
              </Col>
              <Col xs4={4} md={3} lg={3}>
                <TextField
                  className={this.props.classes.textField}
                  label="Zipcode"
                  name="zipcode"
                  fullWidth
                  placeholder={this.props.eventToUpdate.zipcode}
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
                  multiline
                  rows={2}
                  rowsMax={4}
                  fullWidth
                  placeholder={this.props.eventToUpdate.description}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  onChange={this.handleInputChangeFor('description')}
                />
              </Col>
            </Row>
            <Row>
              <Col xs4={4} md={6} lg={6}>
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
              <Col xs4={4} md={6} lg={6}>
                <Button
                  className={this.props.classes.button}
                  color="primary"
                  variant="extendedFab"
                  type="submit"
                  fullWidth
                >
                  Save
                </Button>
              </Col>
            </Row>
          </FormControl>
        </form>
      </Grid >
    )
  }
}

const StyledUpdateEventForm = withStyles(styles)(UpdateEventForm);

export default connect(mapStateToProps)(StyledUpdateEventForm);