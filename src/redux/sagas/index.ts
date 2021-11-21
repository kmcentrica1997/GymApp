import {all} from '@redux-saga/core/effects';
import watchGetUsersRequest from './users';

export default function* rootSaga() {
  yield all([watchGetUsersRequest()]);
}
