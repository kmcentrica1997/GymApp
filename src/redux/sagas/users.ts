import {put, call, fork, takeEvery} from 'redux-saga/effects';
import * as actions from '../actions/users';
import * as api from '../../services/api';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

// yield allows for generator functions to be run sequentially (similar to async and await)
// yield call inspects the return type (in this case im returning a promise);
// generator functions do not return a value instead return an iterator object with a sequence of values
// can be exited and later-entered
function* getUsersGenerator() {
  try {
    const result: ResponseGenerator = yield call(api.getUsers);
    yield put(
      actions.getUsersSuccess({
        items: result.data.data,
      }),
    );
  } catch (e) {
    yield put(
      actions.usersError({
        error: 'Cannot get users',
      }),
    );
  }
}

// allows for concurrent actions to be handled, I could've used takeLatest here as I do not have a button and
// watches for whenever getusersrequest action is dispatched, if so calls getUseers generator
// forks a worker on every action
function* watchGetUsersRequest() {
  yield takeEvery(actions.getUsersRequest, getUsersGenerator);
}
// allows for multiple sagas to run without being blocked if one is blocked
const userSagas = [fork(watchGetUsersRequest)];

export default userSagas;
