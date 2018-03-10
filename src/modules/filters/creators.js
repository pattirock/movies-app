import types from './types';

export const filterBy = (filterName, page) => ({
  type: types.FILTER_BY,
  filterName,
  page,
});

export const changePage = page => ({
  type: types.CHANGE_PAGE,
  page,
});
