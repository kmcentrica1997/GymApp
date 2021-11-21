import React from 'react';
import {create, act} from 'react-test-renderer';
import {DashBoard} from '../src/screens';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducer from '../src/redux/reducers/index';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  {items: 'users'},
  applyMiddleware(sagaMiddleware),
);

const tree = create(
  <Provider store={store}>
    <DashBoard />
  </Provider>,
);

test('snapshot', () => {
  expect(tree).toMatchSnapshot();
});
test('item stored properly', () => {
  expect(store.getState().status).toEqual('nothing');
});
