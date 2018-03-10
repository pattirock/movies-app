import { combineReducers } from 'redux';
import { reducers as filtersReducer } from '../modules/filters';
import { reducers as movieReducer } from '../modules/movie';
import { reducers as moviesReducer } from '../modules/movies';

const rootReducer = combineReducers(Object.assign(
  {},
  filtersReducer,
  movieReducer,
  moviesReducer,
));

export default rootReducer;
