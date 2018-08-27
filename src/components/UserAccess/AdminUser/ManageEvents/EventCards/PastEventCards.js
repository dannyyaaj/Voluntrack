import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import {
  Card, CardHeader, CardMedia, CardContent,
  CardActions, Collapse, IconButton, Modal, Button,
  Dialog, DialogActions, DialogContent, DialogContentText,
  DialogTitle, Typography
} from '@material-ui/core/';
import { red, amber } from '@material-ui/core/colors';
import {
  Edit as EditIcon,
  ExpandMore as ExpandMoreIcon,
  DeleteForever
} from '@material-ui/icons';
import moment from 'moment';
import { Row, Col } from 'react-material-responsive-grid';
import UpdateEventForm from './UpdateEventForm';
import { triggerDeleteEvent } from '../../../../../redux/actions/eventActions';


const styles = theme => ({
  card: {
    maxWidth: '90%',
    margin: '1rem',
    // float: 'left'
  },
  title: {
    fontSize: '5px',
    textAlign: 'center'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  deleteEvent: {
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      color: red[500],
    }
  },
  editEvent: {
    [theme.breakpoints.up('sm')]: {
      color: amber[500],
    }
  },
  location: {
    margin: '1rem 0 0.5rem 0',
    textAlign: 'center',
  },
  modalStyle: {
    backgroundColor: 'white',
    margin: '0 auto',
    width: '90%',
    height: '90%',
    boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.3)',
    marginTop: '10px',
    padding: '30px',
    opacity: '.95'
  }
});

class PastEventCards extends React.Component {
  state = {
    eventId: '',
    expanded: false,
    updateEventModalOpen: false,
    eventToUpdate: {},
    confirmationDeleteIsOpen: false
  };

  //! Opens modal containing update event form and stores volunteer event object and id on local state for children component (update event form) to use
  handleUpdateEvent = (eventId, eventToUpdate) => {
    this.setState({
      updateEventModalOpen: true,
      eventId: eventId,
      eventToUpdate: eventToUpdate
    })
  }

  handleCloseModal = () => {
    this.setState({
      updateEventModalOpen: false,
    });
  };

  // Expands card to show volunteer event description 
  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  // // Opens modal
  handleConfirmDelete = () => {
    this.setState({
      confirmationDeleteIsOpen: true
    });
  };

  handleCloseDelete = () => {
    this.setState({
      confirmationDeleteIsOpen: false
    });
  };


  handleDeleteEvent = (eventId) => {
    this.setState({
      confirmationDeleteIsOpen: false
    });
    // Dispatches delete request to event saga with payload of volunteer event id
    this.props.dispatch(triggerDeleteEvent(eventId))
  }

  render() {
    let eventDate = null;
    let eventStartTime = null;
    let eventEndTime = null;
    const { classes } = this.props;
    eventDate = moment(this.props.event.date).utc().format("ddd, MMM D, YYYY");
    eventStartTime = moment(this.props.event.start_time).utc().format("h:mm A");
    eventEndTime = moment(this.props.event.end_time).utc().format("h:mm A");
    return (
      <div>
        <Card className={classes.card}
        >
          <CardHeader
            action={
              <IconButton
                className={classnames(classes.deleteEvent)}
                // onClick={() => this.handleDeleteEvent(this.props.event.id)}
                onClick={this.handleConfirmDelete}
              >
                <DeleteForever />
              </IconButton>
            }
            className={classes.title}
            title={this.props.event.name}
            subheader={eventDate}
          />
          <CardMedia
            className={classes.media}
            image={this.props.event.image_url}
          />
          <CardContent>
            <Row
              center={['xs4', 'md', 'lg']}
              top={['xs4', 'md', 'lg']}
            >
              <Col xs4={2} md={6} lg={6}>
                <Typography
                  align="left"
                  className={classes.startTime}
                  component="p"
                  variant="subheading"
                >
                  {eventStartTime}
                </Typography>
              </Col>
              <Col xs4={2} md={6} lg={6}>
                <Typography
                  align="right"
                  className={classes.endTime}
                  component="p"
                  variant="subheading"
                >
                  {eventEndTime}
                </Typography>
              </Col>
            </Row>
            <Typography variant="body1" className={classes.location} component="p">
              {this.props.event.address} {this.props.event.city}, {this.props.event.state} {this.props.event.zipcode}
            </Typography>
            {/* <Typography variant="body1" className={classes.location} component="p">
              Volunteers Needed: {this.props.event.num_of_volunteers}
            </Typography> */}
          </CardContent>
          <CardActions
            className={classes.actions}
            disableActionSpacing>
            <IconButton
              className={classnames(classes.editEvent)}
              onClick={() => this.handleUpdateEvent(this.props.event.id, this.props.event)}
              aria-label="Edit">
              <EditIcon />
            </IconButton>
            <IconButton
              className={classnames(classes.expand, {
                [classes.expandOpen]: this.state.expanded,
              })}
              onClick={this.handleExpandClick}
              aria-expanded={this.state.expanded}
              aria-label="Show more"
            >
              <ExpandMoreIcon />
            </IconButton>
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              <Typography paragraph variant="body1">
                Description:
            </Typography>
              <Typography paragraph variant="body1">
                {this.props.event.description}
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
        <Modal
          aria-labelledby="create an event"
          aria-describedby="create a volunteer event"
          open={this.state.updateEventModalOpen}
          onClose={this.handleCloseModal}
        >
          <div className={this.props.classes.modalStyle}>
            <UpdateEventForm
              eventId={this.state.eventId}
              eventToUpdate={this.state.eventToUpdate}
              handleCloseModal={this.handleCloseModal}
            />
          </div>
        </Modal>
        <Dialog
          open={this.state.confirmationDeleteIsOpen}
          onClose={this.handleCloseDelete}
          fullWidth
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle>{"Delete Event"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Are you want to delete this event?
                  </DialogContentText>
          </DialogContent>
          <DialogActions
          >
            <Row>
              <Col xs4={2} md={6} lg={6}>
                <Button
                  onClick={this.handleCloseDelete}
                  color="primary">
                  Cancel
                    </Button>
              </Col>
              <Col xs4={2} md={6} lg={6}>
                <Button
                  onClick={() => this.handleDeleteEvent(this.props.event.id)}
                  color="primary"
                  autoFocus>
                  Delete
                    </Button>
              </Col>
            </Row>
          </DialogActions>
        </Dialog>
      </div>
    )
  }
}

const StyledPastEventCards = withStyles(styles)(PastEventCards)

export default connect()(StyledPastEventCards);