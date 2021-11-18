import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers/index';
import rootSaga from './sagas';
import {logger} from './sagas/logger';
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
sagaMiddleware.run(rootSaga);
export default store;
