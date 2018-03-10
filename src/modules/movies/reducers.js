import types from './types';

// Reducer
const moviesReducer = (movies = [], action) => {
  const { type, payload } = action;

  switch (type) {
    case types.GET_MOVIES_SUCCESS: {
      return payload.data;
    }
    default: {
      return movies;
    }
  }
};

export default {
  movies: moviesReducer,
};
