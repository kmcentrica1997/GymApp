import axios from 'axios';

export const getUsers = () => {
  axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then(function (response) {
      return JSON.stringify(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};
