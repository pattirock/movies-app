import { combineReducers } from 'redux';
import { reducers as movieReducer } from '../modules/movies';

const rootReducer = combineReducers(Object.assign(
  {},
  movieReducer,
));

export default rootReducer;
