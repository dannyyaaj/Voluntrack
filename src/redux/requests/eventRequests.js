import axios from 'axios';

export function addEvent(newEventData) {
  return axios.post('api/event', newEventData)
    .then(response => response.data)
    .catch((error) => {
      throw error.response || error
    });
}

export function callUpcomingEvent() {
  return axios.get('api/event/upcoming')
  .then(response => response.data)
  .catch((error) => { throw error.response || error});
}

export function callPastEvent() {
  return axios.get('api/event/past')
}

