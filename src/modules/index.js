import { combineReducers } from 'redux';
import { reducers as filtersReducer } from '../modules/filters';
import { reducers as moviesReducer } from '../modules/movies';

const rootReducer = combineReducers(Object.assign(
  {},
  filtersReducer,
  moviesReducer,
));

export default rootReducer;
