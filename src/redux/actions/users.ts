import {UserActionTypes} from '../constants/user-action-types';

export const getUsersRequest = () => ({
  type: UserActionTypes.GET_USERS_REQUEST,
});

export const getUsersSuccess = ({items}: {items: any}) => ({
  type: UserActionTypes.GET_USERS_SUCCESS,
  payload: {
    items,
  },
});

export const usersError = ({error}: {error: any}) => ({
  type: UserActionTypes.USERS_ERROR,
  payload: {
    error,
  },
});
