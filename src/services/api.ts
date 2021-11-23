import axios from 'axios';
// for asynchronous operation
// either resolves with the data, or catches the error.
export const BASE_URL = 'https://rem-rest-api.herokuapp.com/api';
export const getUsers = () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${BASE_URL}/users`)
      .then(res => {
        resolve(res);
      })
      .catch(err => reject(err));
  });
};
