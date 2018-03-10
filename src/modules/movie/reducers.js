import types from './types';

// Reducer
const movieReducer = (movie = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_MOVIE_SUCCESS: {
      return payload.data;
    }
    default: {
      return movie;
    }
  }
};

export default {
  movie: movieReducer,
};
