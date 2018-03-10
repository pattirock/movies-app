import types from './types';

// Reducer
const filtersReducer = (filters = [], action) => {
  const { type } = action;

  switch (type) {
    case types.FILTER_BY: {
      const { filterName, page } = action;

      return { filterName, page };
    }
    default: {
      return filters;
    }
  }
};

export default {
  filters: filtersReducer,
};
