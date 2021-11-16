import {combineReducers} from 'redux';
import TodosReducer from './users';

export default combineReducers({
  todos: TodosReducer,
});
