import React, { Component } from 'react';
import { connect } from 'react-redux';
// material ui components
import { withStyles, FormControl, FormLabel, TextField, Button } from '@material-ui/core';
// event actions and reducer
import { EVENT_ACTIONS } from '../../../../redux/actions/eventActions';
import UpcomingEventCards from './EventCards/UpcomingEventCards';

const mapStateToProps = state => ({
  upcomingEvents: state.event.upcoming
})

const styles = () => ({
  form: {
    textAlign: 'center',
    margin: '1.5rem auto',
    backgroundColor: 'white',
  },
  container: {
    width: '90%'
  },
  formTitle: {
    color: 'black',
    marginBottom: '2.5rem',
  },
  textField: {
    margin: '.5rem auto',
    padding: '0 0 1.4rem 0'
  },
  button: {

  }
});

class EventCardsView extends Component {
  componentWillMount() {
    this.props.dispatch({
      type: EVENT_ACTIONS.FETCH_UPCOMING_EVENTS
    })
  }

  render() {
    let upcomingEventCards = null;
    if (this.props.upcomingEvents) {
      upcomingEventCards = this.props.upcomingEvents.map((event, index) => {
        return (
          <div key={index}>
            <UpcomingEventCards
              event={event}
            />

          </div>
        )
      })
    } else {
      console.log('event cards not here yet');
    }
    return (
      <div>
        Event Cards Go Here
        {upcomingEventCards}
      </div>
    )
  }
}

const StyledEventCardsView = withStyles(styles)(EventCardsView);

export default connect(mapStateToProps)(StyledEventCardsView);