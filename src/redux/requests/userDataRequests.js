import axios from 'axios';

export function callUserData() {
  return axios.get('api/userData')
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
}

export function updateUserData(payload) {
  return axios.put(`api/userData/${payload[0]}`, payload[1])
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
}

