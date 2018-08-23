import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import {
  Card, CardHeader, CardMedia, CardContent,
  CardActions, Collapse, IconButton,
  Typography
} from '@material-ui/core/';
import red from '@material-ui/core/colors/red';
import {
  Edit as EditIcon,
  PersonAdd as PersonAddIcon,
  ExpandMore as ExpandMoreIcon,
  MoreVert as MoreVertIcon
} from '@material-ui/icons';
import moment from 'moment';
import { Row, Col } from 'react-material-responsive-grid';


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
      marginRight: -150,
      color: red[500],
    }
  },
  startTime: {

  },
  endTime: {

  },
  location: {
    textAlign: 'center',
  },
});

class PastEventCards extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    let eventDate = null;
    let eventStartTime = null;
    let eventEndTime = null;
    const { classes } = this.props;
    eventDate = moment(this.props.event.date).format('dddd, MMM Do, YYYY');
    eventStartTime = moment(this.props.event.start_time).format('h:mm a');
    eventEndTime = moment(this.props.event.end_time).format('h:mm a');

    return (
      <Card className={classes.card}>
        <CardHeader
          action={
            <IconButton>
              <MoreVertIcon />
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
          <Row>
            <Col xs4={2} md={6} lg={6}>
              <Typography className={classes.startTime} component="p">
                {eventStartTime}
              </Typography>
            </Col>
            <Col xs4={2} md={6} lg={6}>
              <Typography className={classes.endTime} component="p">
                {eventEndTime}
              </Typography>
            </Col>
          </Row>
          <Typography className={classes.location} component="p">
            {this.props.event.address} {this.props.event.city}, {this.props.event.state} {this.props.event.zipcode}
          </Typography>
        </CardContent>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton aria-label="Edit">
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
            <Typography paragraph variant="body2">
              Description:
            </Typography>
            <Typography paragraph>
              {this.props.event.description}
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    )
  }
}

const StyledUpcomingEventCards = withStyles(styles)(PastEventCards)

export default StyledUpcomingEventCards;