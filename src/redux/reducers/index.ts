import {combineReducers} from 'redux';
import usersReducer from './users';

export default combineReducers({
  users: usersReducer,
});

export type RootState = ReturnType<typeof combineReducers>;
