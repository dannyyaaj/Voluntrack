import React, { Component } from 'react';
// material ui components
import { withStyles, FormControl, TextField, Button, Select, MenuItem } from '@material-ui/core';
import { Grid, Row, Col } from 'react-material-responsive-grid';
import moment from 'moment';

const styles = () => ({
  form: {
    textAlign: 'center',
    margin: '1.5rem auto',
  },
  container: {
    width: '100%'
    // display: 'grid',
    // gridGap: '10px',
    // gridTemplateColumns: '1fr 1fr',
    // gridTemplateRows: 'repeat(5, 1fr)',
  },
  formTitle: {
    marginBottom: '2.5rem',
  },
  textField: {
    margin: '1rem auto',
    padding: '0 0 1.2rem 0'
  },
  selectField: {
    margin: '.5rem auto',
    padding: '0 0 1.25rem 0'
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
      start_time: '',
      end_time: '',
      date: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      coordinator: '',
      image_url: '',
      roles: [],
    };
  }

  render() {
    const currentDate = moment().format('YYYY-MM-DD', new Date());
    return (
      <Grid>
        <form
          className={this.props.classes.form}
          onSubmit={this.updateUserProfile}
          noValidate
        >
          <FormControl component="fieldset"
            className={this.props.classes.container}>
            <Row>
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
                />
                {/* <Select
                  className={this.props.classes.selectField}
                  label="Volunteer Coordinator"
                  value={this.state.coordinator}
                  name="coordinator"
                  fullWidth
                  value={this.state.}
                >
                  <MenuItem value="" disabled>
                    Placeholder
                  </MenuItem>
                  <MenuItem value="test">
                    Test
                  </MenuItem>
                  <MenuItem value={2}>
                    Test
                  </MenuItem>
                  <MenuItem value={3}>
                    Test
                  </MenuItem>
                </Select> */}
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
                />
              </Col>
              <Col xs4={2} md={6} lg={6}>
                <TextField
                  className={this.props.classes.textField}
                  label="Date"
                  // name="date"
                  margin="normal"
                  name="date"
                  type="date"
                  defaultValue={currentDate}
                  fullWidth
                  value={this.state.date}
                  InputLabelProps={{
                    shrink: true,
                  }}
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
                />
              </Col>
              <Col xs4={2} md={3} lg={3}>
                <TextField
                  className={this.props.classes.textField}
                  label="Start Time"
                  name="start_time"
                  type="time"
                  defaultValue="07:30"
                  fullWidth
                  value={this.state.start_time}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
              </Col>
              <Col xs4={2} md={3} lg={3}>
                <TextField
                  className={this.props.classes.textField}
                  label="End Time"
                  name="end_time"
                  fullWidth
                  value={this.state.end_time}
                  type="time"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col xs4={2} md={6} lg={6}>
                <TextField
                  className={this.props.classes.textField}
                  label="State"
                  name="state"
                  fullWidth
                  value={this.state.state}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Col>
              <Col xs4={2} md={6} lg={6}>
                <TextField
                  className={this.props.classes.textField}
                  label="Volunteer Roles"
                  name="volunteer_roles"
                  fullWidth
                  value={this.state.roles}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col xs4={2} md={6} lg={6}>
                <TextField
                  className={this.props.classes.textField}
                  label="Zipcode"
                  name="zipcode"
                  fullWidth
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

              </Col>
              <Col xs4={2} md={6} lg={6}>
                <TextField
                  className={this.props.classes.textField}
                  label="Number of Volunteers"
                  name="roles"
                  type="number"
                  fullWidth
                  value={this.state.zipcode}
                  InputLabelProps={{
                    shrink: true,
                  }}
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
                  Update Profile
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

export default StyledCreateEventsForm;