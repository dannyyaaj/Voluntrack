import React, { Component } from 'react';
import { connect } from 'react-redux';
// material ui components
import { withStyles, FormControl, Button, Select, FormHelperText, Input, InputLabel, MenuItem } from '@material-ui/core';
import { Grid, Row, Col } from 'react-material-responsive-grid';
import { addVolunteerToEvent } from '../../../../redux/actions/volunteerActions';

//rename list of volunteers not assigned to an event from redux store as volunteers
const mapStateToProps = state => ({
  upcomingEvents: state.event.upcoming,
  volunteers: state.volunteer.inviteVolunteers,
})

const styles = () => ({
  form: {
    font: 'black',
    textAlign: 'center',
    margin: '5rem auto',
  },
  container: {
    width: '100%',
  },
  formTitle: {
    marginBottom: '2.5rem',
  },
  selectField: {
    margin: '1rem auto',
    padding: '0 0 1.2rem 0'
  },
  datePicker: {
    width: '150%',
    borderColor: 'red',
    textAlign: 'center',
  },
  button: {
    marginTop: '60%',
  },
});

class AddVolunteerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volunteer_id: '',
    };
  }

  //Stores volunteer id on local state
  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  //Dispatch PUT request with volunteer id stored on local state and event id stored on parent state
  addVolunteer = (event) => {
    event.preventDefault();
    this.props.dispatch(addVolunteerToEvent(this.state.volunteer_id, this.props.parentState))
    this.props.handleCloseModal();
  }

  render() {
    let volunteersList = []
    if (this.props.volunteers) {
      // map through all volunteers who are not yet assigned to an event
      volunteersList = this.props.volunteers.map((volunteer, index) => {
        return (
          <MenuItem key={index} value={volunteer.id}>{volunteer.first_name} {volunteer.last_name}</MenuItem>
        )
      })
    } else {
      console.log('volunteers list is not here yet')
    }

    return (
      <Grid fixed={'center'}>
        <form
          className={this.props.classes.form}
          onSubmit={this.addVolunteer}
          noValidate
        >
          <FormControl component="fieldset"
            className={this.props.classes.container}>
            <Row>
              <Col xs4={4} md={12} lg={12}>
                <InputLabel htmlFor="age-helper">Volunteers</InputLabel>
                <Select
                  className={this.props.classes.selectField}
                  value={this.state.volunteer_id}
                  onChange={this.handleInputChangeFor('volunteer_id')}
                  input={<Input name="Select a Volunteer" />}
                  autoWidth
                  fullWidth
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {volunteersList}
                </Select>
                <FormHelperText>Select a volunteer to invite</FormHelperText>
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
                  Add
                </Button>
              </Col>
            </Row>
          </FormControl>
        </form>
      </Grid>
    )
  }
}

const StyledAddVolunteerForm = withStyles(styles)(AddVolunteerForm);

export default connect(mapStateToProps)(StyledAddVolunteerForm);