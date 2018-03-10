import types from './types';
import initialState from './initialState';

// Reducer
const filtersReducer = (filters = initialState, action) => {
  const { type } = action;

  switch (type) {
    case types.FILTER_BY: {
      const { filterName } = action;

      return Object.assign({}, { page: 1, filter: filterName });
    }
    case types.CHANGE_PAGE: {
      const { page } = action;

      return Object.assign({}, filters, { page });
    }
    default: {
      return filters;
    }
  }
};

export default {
  filters: filtersReducer,
};
