import {put, call, fork,  takeEvery} from 'redux-saga/effects';
import * as actions from '../actions/users';
import {ActionTypes} from '../constants/action-types';
import * as api from '../../services/api';


function* getUsers()  {
  try {
    const result = yield call(api.getUsers);
    yield put(
      actions.getTodosSuccess({
        items: result.data.data,
      }),
    );
  } catch (e) {
    yield put(
      actions.todosError({
        error: 'Cannot get todos',
      }),
    );
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(ActionTypes.GET_USERS_REQUEST, getUsers);
}

const userSagas = [fork(watchGetUsersRequest)];

export default userSagas;
