import axios from 'axios';

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
