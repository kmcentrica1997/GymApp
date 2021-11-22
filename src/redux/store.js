import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, compose} from 'redux';
import reducers from './reducers/index';
import rootSaga from './sagas';
import {logger} from './sagas/logger';

const sagaMiddleware = createSagaMiddleware();

const enhancers = compose(
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware, logger),
  enhancers,
);
sagaMiddleware.run(rootSaga);

export default store;
