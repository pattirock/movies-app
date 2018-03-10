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

