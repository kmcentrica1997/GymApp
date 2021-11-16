import {ActionTypes} from '../redux/constants/action-types';

const INITIAL_STATE = {
  items: [],
};

export default function users(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case ActionTypes.GET_USERS_SUCCESS: {
      return {
        ...state,
        items: action.payload.items,
      };
    }
    case ActionTypes.USERS_ERROR: {
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
