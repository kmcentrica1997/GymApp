import {ActionTypes} from '../redux/constants/action-types';

const INITIAL_STATE = {
  items: [],
};

export default function todos(state = INITIAL_STATE, action: any) {
  switch (action.type) {
    case ActionTypes.GET_TODOS_SUCCESS: {
      return {
        ...state,
        items: action.payload.items,
      };
    }
    case ActionTypes.TODOS_ERROR: {
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
