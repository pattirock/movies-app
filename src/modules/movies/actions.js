import * as creators from './creators';
import CONSTANTS from '../../assets/javascripts/constants';

export const getMovies = (filterName, page) => (
  dispatch => dispatch(creators.getMovies(filterName, page))
);

export const searchMovies = query => (
  dispatch => dispatch(creators.searchMovies(query))
);

export const resetMovies = () => (
  dispatch => dispatch(creators.resetMovies(CONSTANTS.defaultFilter, 1))
);
