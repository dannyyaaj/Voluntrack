import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import {
  Card, CardHeader, CardMedia, CardContent,
  CardActions, Collapse, Avatar, IconButton,
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

const styles = theme => ({
  card: {
    maxWidth: 400,
    margin: '1rem',
    // float: 'left'
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
  avatar: {
    backgroundColor: red[500],
  },
  addPerson: {
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -150,
    }
  }
});

class UpcomingEventCards extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState(state => ({ expanded: !state.expanded }));
  };

  render() {
    let eventDate = null;
    const { classes } = this.props;
    eventDate = moment(this.props.event.date).format('dddd, MMMM DD, YYYY');

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Event" className={classes.avatar}>
              Test
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={this.props.event.name}
          subheader={eventDate}
        />
        <CardMedia
          className={classes.media}
          image={this.props.event.image_url}
        />
        <CardContent>
          <Typography component="p">
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
    );
  }
}

const StyledUpcomingEventCards = withStyles(styles)(UpcomingEventCards)

export default StyledUpcomingEventCards;