import axios from 'axios';

export function callUserData() {
  return axios.get('api/userData')
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
}

export function updateUserData(action) {
  return axios.put('api/userData/', action)
    .then(response => response.data)
    .catch((error) => { throw error.response || error; });
}

