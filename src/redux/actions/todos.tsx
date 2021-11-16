import {ActionTypes} from '../constants/action-types';

export const getTodosRquest = () => ({
  type: ActionTypes.GET_TODOS_REQUEST,
});

export const getTodosSuccess = ({items}) => ({
  type: ActionTypes.GET_TODOS_SUCCESS,
  payload: {
    items,
  },
});

export const todosError = ({error}) => ({
  type: ActionTypes.TODOS_ERROR,
  payload: {
    error,
  },
});
