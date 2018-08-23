import React, { Component } from 'react';
import { connect } from 'react-redux';
// material ui components
import moment from 'moment';
import { withStyles, FormControl, TextField, Button } from '@material-ui/core';
import { Grid, Row, Col } from 'react-material-responsive-grid';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { triggerUpdateEvent, EVENT_ACTIONS } from '../../../../../redux/actions/eventActions';

const mapStateToProps = state => ({
  upcomingEvents: state.event.upcoming
})

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
  },
  coverImage: {
    height: '15vh',
    paddingBottom: '3rem',
    marginBottom: '2rem',
  }
});

class UpdateEventForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventToUpdate: {}
    };
  }

  componentDidMount() {
    this.setValues();
  }

  setValues = () => {
    this.setState({
      eventToUpdate: this.props.eventToUpdate
    })
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      eventToUpdate: {
        ...this.state.eventToUpdate,
        [propertyName]: event.target.value,
      }
    });
  }

  handleEndTimeChange = (time) => {
    this.setState({
      eventToUpdate: {
        ...this.state.eventToUpdate,
        end_time: time
      }
    });
  }

  handleStartTimeChange = (time) => {
    this.setState({
      eventToUpdate: {
        ...this.state.eventToUpdate,
        start_time: time
      }
    });
  }

  updateEvent = (event) => {
    event.preventDefault();
    this.props.dispatch(triggerUpdateEvent(this.props.eventId, this.state.eventToUpdate))
  }

  render() {

    console.log(this.props.eventToUpdate, 'eventToUpdate')
    console.log(this.state, 'local state')
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
                    backgroundSize: 'auto',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                </div>
              </Col>
            </Row>
            <Row
              top={['xs4', 'md', 'lg']}
            >
              <Col xs4={2} md={6} lg={6}>
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
              <Col xs4={1} md={3} lg={3}>
                <DatePicker
                  selected={this.state.start_time}
                  onChange={this.handleStartTimeChange}
                  showTimeSelect
                  timeIntervals={30}
                  dateFormat="ddd, MMM D, YYYY h:mm A"
                  // timeCaption="Time"
                  className={this.props.classes.datePicker}
                  placeholderText={
                    moment(this.props.eventToUpdate.start_time).utc()
                      .format("ddd, MMM D, YYYY h:mm A")}
                />

              </Col>
              <Col xs4={1} md={3} lg={3}>
                <DatePicker
                  selected={this.state.end_time}
                  onChange={this.handleEndTimeChange}
                  showTimeSelect
                  timeIntervals={30}
                  dateFormat="ddd, MMM D, YYYY h:mm A"
                  // timeCaption="Time"
                  className={this.props.classes.datePicker}
                  placeholderText={
                    moment(this.props.eventToUpdate.end_time).utc()
                      .format("ddd, MMM D, YYYY h:mm A")}
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
                  placeholder={this.props.eventToUpdate.address}
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
                  placeholder={this.props.eventToUpdate.coordinator}
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
                  placeholder={this.props.eventToUpdate.city}
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
                  placeholder={this.props.eventToUpdate.num_of_volunteers}
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
                  placeholder={this.props.eventToUpdate.state}
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

const StyledCreateEventsForm = withStyles(styles)(UpdateEventForm);

export default connect(mapStateToProps)(StyledCreateEventsForm);