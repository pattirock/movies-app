import * as creators from './creators';

/* eslint-disable import/prefer-default-export */
export const filterBy = (filterName, page) => (
  dispatch => dispatch(creators.filterBy(filterName, page))
);
