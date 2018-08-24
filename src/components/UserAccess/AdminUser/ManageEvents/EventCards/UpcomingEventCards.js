import React from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import {
  Card, CardHeader, CardMedia, CardContent,
  CardActions, Collapse, IconButton, Modal,
  Typography
} from '@material-ui/core/';
import { red, amber, blue } from '@material-ui/core/colors';
import {
  Edit as EditIcon,
  PersonAdd as PersonAddIcon,
  ExpandMore as ExpandMoreIcon,
  DeleteForever
} from '@material-ui/icons';
import moment from 'moment';
import { Row, Col } from 'react-material-responsive-grid';
// import UpdateEventForm from './UpdateEventForm';
import TestUpdateEventForm from './TestUpdateEventForm';
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
  addPerson: {
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: '-60%',
      color: blue[500],
    }
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

class UpcomingEventCards extends React.Component {
  state = {
    eventId: '',
    expanded: false,
    updateEventModalOpen: false,
    eventToUpdate: {},
  };

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

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleDeleteEvent = (eventId) => {
    // dispatch props to event saga
    this.props.dispatch(triggerDeleteEvent(eventId))
  }

  render() {
    console.log(this.props.event, 'event object inside UpcomingEventCards from EventCardsView')
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
                onClick={() => this.handleDeleteEvent(this.props.event.id)}
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
                  className={classes.startTime}
                  component="p"
                  variant="subheading"
                >
                  {eventStartTime}
                </Typography>
              </Col>
              <Col xs4={2} md={6} lg={6}>
                <Typography
                  className={classes.endTime}
                  component="p"
                  variant="subheading"
                >
                  {eventEndTime}
                </Typography>
              </Col>
            </Row>
            <Typography variant="body2" className={classes.location} component="p">
              {this.props.event.address} {this.props.event.city}, {this.props.event.state} {this.props.event.zipcode}
            </Typography>
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
            <IconButton aria-label="Invite"
              className={classnames(classes.addPerson)}
            >
              <PersonAddIcon />
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
              <Typography paragraph variant="body2">
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
            <TestUpdateEventForm
              eventId={this.state.eventId}
              eventToUpdate={this.state.eventToUpdate}
              handleCloseModal={this.handleCloseModal}
            />
          </div>
        </Modal>
      </div>
    )
  }
}

const StyledUpcomingEventCards = withStyles(styles)(UpcomingEventCards)

export default connect()(StyledUpcomingEventCards);