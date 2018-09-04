import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withStyles } from "@material-ui/core/styles";
import { Button, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core/';
import { addVolunteerToEvent } from '../../../../redux/actions/volunteerActions';
import moment from 'moment';


const mapStateToProps = state => ({
  user: state.user,
  volunteers: state.volunteer.allVolunteers,
});

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: '#EEEEEE',
    },
  }
});

class ManageVolunteersView extends Component {

  removeVolunteer = (volunteerId) => {
    this.props.dispatch(addVolunteerToEvent(volunteerId,' '))
  }

  render() {
    let organizationVolunteers = this.props.volunteers.map((volunteer, index) => {
      return (
        <TableRow className={this.props.classes.row} key={index}>
          <TableCell>{volunteer.id}</TableCell>
          <TableCell>{volunteer.first_name}</TableCell>
          <TableCell>{volunteer.last_name}</TableCell>
          <TableCell>{volunteer.person_email}</TableCell>
          <TableCell>{volunteer.primary_phone}</TableCell>
          <TableCell>{volunteer.person_address} {volunteer.person_city} {volunteer.person_state} {volunteer.person_zipcode}</TableCell>
          <TableCell>{volunteer.event_name || "Has Not Joined An Event"}</TableCell>
          <TableCell>{moment(volunteer.start_time).utc().format(" ddd, MMM D h:mm A") || "Has Not Joined An Event"}</TableCell>
          <TableCell>{moment(volunteer.end_time).utc().format(" ddd, MMM D h:mm A") || moment()}</TableCell>
          <TableCell>{volunteer.event_name ?
            <Button
              color="secondary"
              variant="raised"
              onClick={() => this.removeVolunteer(volunteer.id)}
            >
              Remove
          </Button> : " "}
          </TableCell>
        </TableRow>
      )
    })

    return (
      <div>
        <h1>Manage Volunteers</h1>
        <Paper className={this.props.classes.root}>
          <Table className={this.props.classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Volunteer ID</TableCell>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Primary Number</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Event</TableCell>
                <TableCell>Start Time</TableCell>
                <TableCell>End Time</TableCell>
                <TableCell>Edit</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {organizationVolunteers}
            </TableBody>
          </Table>
        </Paper>
      </div>
    )
  }
}

const StyledManageVolunteersView = withStyles(styles)(ManageVolunteersView)

export default connect(mapStateToProps)(StyledManageVolunteersView);