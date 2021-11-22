import React from 'react';
import {act, create} from 'react-test-renderer';
import {DashBoard} from '../src/screens';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../src/redux/reducers/index';
import createSagaMiddleware from 'redux-saga';

import * as axios from 'axios';

// Mock out all top level functions, such as get, put, delete and post:
jest.mock('axios');
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  {users: ['hi']},
  applyMiddleware(sagaMiddleware),
);

jest.runAllTimers();
const tree = create(
  <Provider store={store}>
    <DashBoard />
  </Provider>,
);

test('good response', () => {
  axios.get.mockImplementation(() => Promise.resolve({data: {}}));
});

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});
test('item stored properly, expected to fail', () => {
  expect(store.getState().users.items.length).toEqual(10);
});
