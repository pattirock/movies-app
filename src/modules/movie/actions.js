import * as creators from './creators';

export const getMovie = movieId => (
  dispatch => dispatch(creators.getMovie(movieId))
);

export const getCredits = movieId => (
  dispatch => dispatch(creators.getCredits(movieId))
);

export const getImages = movieId => (
  dispatch => dispatch(creators.getImages(movieId))
);

export const getRecommendations = movieId => (
  dispatch => dispatch(creators.getRecommendations(movieId))
);
