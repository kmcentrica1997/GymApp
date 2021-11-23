import React from 'react';
import {create} from 'react-test-renderer';
import {DashBoard} from '../src/screens';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../src/redux/reducers/index';
import createSagaMiddleware from 'redux-saga';
import {BASE_URL, getUsers} from '../src/services/api';
import * as axios from 'axios';

// Mock out all top level functions, such as get, put, delete and post:
jest.mock('axios');
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  {users: []},
  applyMiddleware(sagaMiddleware),
);

jest.runAllTimers();
const tree = create(
  <Provider store={store}>
    <DashBoard />
  </Provider>,
);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});
test('item stored properly, expected to fail', () => {
  expect(store.getState().users.length).toEqual(10);
});

describe('getUsers', () => {
  describe('When API call is successful', () => {
    it('should return users list', async () => {
      const users = [
        {id: 1, name: 'Karthikan'},
        {id: 2, name: 'Murugathas'},
      ];
      axios.get.mockResolvedValueOnce(users);

      const results = await getUsers();
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
      expect(results).toEqual(users);
    });
  });
});
console.log(store.getState().users.length);
