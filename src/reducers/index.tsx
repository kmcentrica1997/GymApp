import {combineReducers} from 'redux';
import TodosReducer from './todos';

export default combineReducers({
  todos: TodosReducer,
});
