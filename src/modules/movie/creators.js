import types from './types';
import apiKey from '../../api/constants';

/* eslint-disable import/prefer-default-export */
export const getMovie = movieId => ({
  type: types.GET_MOVIE,
  payload: {
    request: {
      url: `/movie/${movieId}?api_key=${apiKey}`,
    },
  },
});

export const getCredits = movieId => ({
  type: types.GET_MOVIE_CREDITS,
  payload: {
    request: {
      url: `/movie/${movieId}/credits?api_key=${apiKey}`,
    },
  },
});
