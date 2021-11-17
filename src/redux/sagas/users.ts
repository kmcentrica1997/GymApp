import {put, call, fork, takeEvery} from 'redux-saga/effects';
import * as actions from '../actions/users';
import {UserActionTypes} from '../constants/user-action-types';
import * as api from '../../services/api';

export interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* getUsers() {
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

function* watchGetUsersRequest() {
  yield takeEvery(UserActionTypes.GET_USERS_REQUEST, getUsers);
}

const userSagas = [fork(watchGetUsersRequest)];

export default userSagas;