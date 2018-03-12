import types from './types';
import apiKey from '../../api/constants';

export const getMovies = (filterName, page) => ({
  type: types.GET_MOVIES,
  payload: {
    request: {
      url: `/movie/${filterName}?api_key=${apiKey}&page=${page}`,
    },
  },
});

export const searchMovies = query => ({
  type: types.SEARCH_MOVIES,
  payload: {
    request: {
      url: `/search/movie?api_key=${apiKey}&&query=${query}`,
    },
  },
});

export const resetMovies = (filterName, page) => ({
  type: types.GET_MOVIES,
  payload: {
    request: {
      url: `/movie/${filterName}?api_key=${apiKey}&page=${page}`,
    },
  },
});
