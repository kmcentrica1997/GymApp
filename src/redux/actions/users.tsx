import {ActionTypes} from '../constants/action-types';

export const getTodosRequest = () => ({
  type: ActionTypes.GET_USERS_REQUEST,
});

export const getTodosSuccess = ({items}) => ({
  type: ActionTypes.GET_USERS_SUCCESS,
  payload: {
    items,
  },
});

export const todosError = ({error}) => ({
  type: ActionTypes.USERS_ERROR,
  payload: {
    error,
  },
});
