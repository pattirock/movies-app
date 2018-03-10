import * as creators from './creators';

/* eslint-disable import/prefer-default-export */
export const getMovie = movieId => (
  dispatch => dispatch(creators.getMovie(movieId))
);
