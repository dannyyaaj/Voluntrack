import axios from 'axios';


export function callAllVolunteers() {
  return axios.get('api/volunteers')
  .then(response => response.data)
  .catch((error) => { throw error.response || error});
}

export function callVolunteersToInvite() {
  return axios.get('api/volunteers/invite')
  .then(response => response.data)
  .catch((error) => { throw error.response || error});
}

export function inviteToEvent(eventAndPerson) {
  console.log(eventAndPerson.payload, 'payload in volunteer requests')
  return axios.put(`api/volunteers/invite/${eventAndPerson.payload[0]}`, eventAndPerson.payload[1])
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
}