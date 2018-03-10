import types from './types';

/* eslint-disable import/prefer-default-export */
export const filterBy = (filterName, page) => ({
  type: types.FILTER_BY,
  filterName,
  page,
});

