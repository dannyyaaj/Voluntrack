import React, { Component } from 'react';
import { connect } from 'react-redux';
// material ui components
import { withStyles, FormControl, Button, Select, FormHelperText, Input, InputLabel, MenuItem } from '@material-ui/core';
import { Grid, Row, Col } from 'react-material-responsive-grid';
import { inviteVolunteerToEvent } from '../../../../redux/actions/volunteerActions';


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

class InviteVolunteerForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      volunteer_id: '',
    };
  }

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }

  inviteVolunteer = (event) => {
    event.preventDefault();
    this.props.dispatch(inviteVolunteerToEvent(this.state.volunteer_id, this.props.parentState))
    this.props.handleCloseModal();
  }

  render() {
    const volunteersList = this.props.volunteers.map((volunteer, index) => {
      return (
        <MenuItem key={index} value={volunteer.id}>{volunteer.first_name} {volunteer.last_name}</MenuItem>
      )
    })

    return (
      <Grid fixed={'center'}>
        <form
          className={this.props.classes.form}
          onSubmit={this.inviteVolunteer}
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
                  Invite
                </Button>
              </Col>
            </Row>
          </FormControl>
        </form>
      </Grid >
    )
  }
}

const StyledInviteVolunteerForm = withStyles(styles)(InviteVolunteerForm);

export default connect(mapStateToProps)(StyledInviteVolunteerForm);