import React, { Component } from 'react'
import { connect } from 'react-redux';
import { withStyles, Button, Modal } from '@material-ui/core';
import EventCardsView from './EventCardsView';
import PastEventCardsView from './PastEventCardsView';
import CreateEventForm from './CreateEventForm';

const styles = () => ({
  modalStyle: {
    backgroundColor: 'white',
    margin: '0 auto',
    width: '90%',
    height: '90%',
    boxShadow: '0px 0px 30px rgba(0, 0, 0, 0.3)',
    marginTop: '10px',
    padding: '30px',
    opacity: '0.9'
  },
  button: {
    margin: '1.75rem 2.75rem 0 1.75rem'
  },
  header: {
    textAlign: 'center',

  }
})
class ManageEventsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      showCreateEvents: false,
      showPastEvents: false,
      toggleButtonText: false,
    };
  };


  openPastEvents = () => {
    this.setState({
      showPastEvents: true,
      toggleButtonText: !this.state.toggleButtonText,
    })
  }

  openCreateEvent = () => {
    this.setState({
      showCreateEvents: true,
      modalIsOpen: true,
      showPastEvents: false,
      toggleButtonText: false,
    })
  }

  handleClose = () => {
    this.setState({
      modalIsOpen: false,
      showCreateEvents: false,
      showPastEvents: false
    });
  };

  render() {
    let modalContent = null
    let pageContent = null
    let buttonText = null
    modalContent = (<CreateEventForm handleClose={this.handleClose} />)

    // Conditionally render Past or Upcoming events
    this.state.showPastEvents === true && this.state.toggleButtonText === true ?
      pageContent = (
        <div>
          <h1 className={this.props.classes.header}>Past Events</h1>
          <PastEventCardsView />
        </div>
      ) :
      pageContent = (
        <div>
          <h1 className={this.props.classes.header}>Upcoming Events</h1>
          <EventCardsView />
        </div>)
    this.state.toggleButtonText === false ?
      buttonText = 'View Past Events' :
      buttonText = ('Upcoming Events')
    return (
      <div>
        <Button
        className={this.props.classes.button}
          color="secondary"
          variant="raised"
          onClick={this.openPastEvents}
        >
          {buttonText}
        </Button>
        <Button
        className={this.props.classes.button}
          color="primary"
          variant="raised"
          onClick={this.openCreateEvent}
        >
          Create An Event
      </Button>
        <Modal
          aria-labelledby="create an event"
          aria-describedby="create a volunteer event"
          open={this.state.modalIsOpen}
          onClose={this.handleClose}
        >
          <div className={this.props.classes.modalStyle}>
            {modalContent}
          </div>
        </Modal>
        {pageContent}
      </div>
    )
  }
}

const StyledManageEventsView = withStyles(styles)(ManageEventsView);

export default connect()(StyledManageEventsView);