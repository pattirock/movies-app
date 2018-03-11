import types from './types';

// Reducer
const movieReducer = (movie = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_MOVIE_SUCCESS: {
      return payload.data;
    }
    case types.GET_MOVIE_CREDITS_SUCCESS: {
      return Object.assign({}, movie, { crew: payload.data.crew, cast: payload.data.cast });
    }
    case types.GET_MOVIE_IMAGES_SUCCESS: {
      return Object.assign({}, movie, { images: payload.data });
    }
    case types.GET_MOVIE_RECOMMENDATIONS_SUCCESS: {
      return Object.assign({}, movie, { recommendations: payload.data });
    }
    default: {
      return movie;
    }
  }
};

export default {
  movie: movieReducer,
};
