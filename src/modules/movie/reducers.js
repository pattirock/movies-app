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
    default: {
      return movie;
    }
  }
};

export default {
  movie: movieReducer,
};
