import * as creators from './creators';

export const filterBy = (filterName, page) => (
  dispatch => dispatch(creators.filterBy(filterName, page))
);

export const changePage = page => (
  dispatch => dispatch(creators.changePage(page))
);
