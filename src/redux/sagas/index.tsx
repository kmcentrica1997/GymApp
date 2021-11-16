import todoSagas from './todos';
import {all} from '@redux-saga/core/effects';

export default function* rootSaga() {
  yield all([...todoSagas]);
}
