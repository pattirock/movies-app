import types from './types';
import apiKey from '../../api/constants';

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

export const getImages = movieId => ({
  type: types.GET_MOVIE_IMAGES,
  payload: {
    request: {
      url: `/movie/${movieId}/images?api_key=${apiKey}`,
    },
  },
});

export const getRecommendations = movieId => ({
  type: types.GET_MOVIE_RECOMMENDATIONS,
  payload: {
    request: {
      url: `/movie/${movieId}/recommendations?api_key=${apiKey}`,
    },
  },
});
