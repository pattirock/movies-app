import * as creators from './creators';

/* eslint-disable import/prefer-default-export */
export const getMovies = (filterName, page) => (
  dispatch => dispatch(creators.getMovies(filterName, page))
);
