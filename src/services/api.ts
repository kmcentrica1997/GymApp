import axios from 'axios';
// for asynchronous operation
// either resolves with the data, or catches the error.

export const getUsers = () => {
  return new Promise((resolve, reject) => {
    axios
      .get('https://rem-rest-api.herokuapp.com/api/users')
      .then(res => {
        resolve(res);
      })
      .catch(err => reject(err));
  });
};
