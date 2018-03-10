import types from './types';
import apiKey from '../../api/constants';

/* eslint-disable import/prefer-default-export */
export const getMovies = (filterName, page) => ({
  type: types.GET_MOVIES,
  payload: {
    request: {
      url: `/movie/${filterName}?api_key=${apiKey}&page=${page}`,
    },
  },
});

