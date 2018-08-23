import React, { Component } from 'react';
import { connect } from 'react-redux';
// material ui components
import { withStyles } from '@material-ui/core';
// event actions and reducer
import { EVENT_ACTIONS } from '../../../../redux/actions/eventActions';
import PastEventCards from './EventCards/PastEventCards';
import { Grid, Row, Col } from 'react-material-responsive-grid';

const mapStateToProps = state => ({
  pastEvents: state.event.past
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

class PastEventCardsView extends Component {
  componentWillMount() {
    this.props.dispatch({
      type: EVENT_ACTIONS.FETCH_PAST_EVENTS
    })
  }

  render() {
    let pastEventCards = null;
    if (this.props.pastEvents) {
      pastEventCards = this.props.pastEvents.map((event, index) => {
        return (
          <Col xs4={4} md={4} lg={4} key={index}>
            <PastEventCards
              event={event}
            />
          </Col>
        )
      })
    } else {
      console.log('past event cards not here yet')
    }
    return (
      <div>
        <Grid>
          <Row>
            {pastEventCards}
          </Row>
        </Grid>
      </div>
    )
  }
}

const StyledPastEventCardsView = withStyles(styles)(PastEventCardsView);

export default connect(mapStateToProps)(StyledPastEventCardsView);