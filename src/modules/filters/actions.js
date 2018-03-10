import * as creators from './creators';

export const filterBy = filterName => (
  dispatch => dispatch(creators.filterBy(filterName))
);

export const changePage = page => (
  dispatch => dispatch(creators.changePage(page))
);
