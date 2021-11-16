import {put, fork, takeEvery} from 'redux-saga/effects';
import * as actions from '../actions/todos';
import {ActionTypes} from '../constants/action-types';
function* getTodos() {
  try {
  } catch (e) {
    yield put(
      actions.todosError({
        error: 'Cannot get todos',
      }),
    );
  }
}

function* watchGetUsersRequest() {
  yield takeEvery(ActionTypes.GET_TODOS_REQUEST, getTodos);
}

const todoSagas = [fork(watchGetUsersRequest)];

export default todoSagas;
