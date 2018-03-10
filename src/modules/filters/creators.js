import types from './types';

export const filterBy = filterName => ({
  type: types.FILTER_BY,
  filterName,
});

export const changePage = page => ({
  type: types.CHANGE_PAGE,
  page,
});
