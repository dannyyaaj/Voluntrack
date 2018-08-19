import React, { Component } from 'react';
// material ui components
import { withStyles, FormControl, FormLabel, TextField, Button } from '@material-ui/core';


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
  render() {
    return (
 <div>
   Event Cards Go Here
 </div>
    )
  }
}



export default EventCardsView;