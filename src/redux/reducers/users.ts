import {UserActionTypes} from '../constants/user-action-types';

const INITIAL_STATE = {
  items: ['not working'],
};

export default function users(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case UserActionTypes.GET_USERS_SUCCESS: {
      return {
        ...state,
        items: action.payload.items,
      };
    }
    case UserActionTypes.USERS_ERROR: {
      return {
        ...state,
        items: action.payload.error,
      };
    }
    default: {
      return state;
    }
  }
}
