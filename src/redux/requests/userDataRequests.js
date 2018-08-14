import axios from 'axios';

export function callUserData() {
  return axios.get('api/userData')
    .then(response => response.data)
    .catch((error) => {
      throw error.response || error;
    });
}