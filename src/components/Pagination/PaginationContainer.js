import { connect } from 'react-redux';
import Pagination from './Pagination';

import { changePage } from '../../modules/filters/actions';

const mapStateToProps = state => ({
  currentPage: state.filters.page,
  totalPages: state.movies.total_pages,
});

const mapDispatchToProps = dispatch => ({
  handlePageSelected: (page) => {
    dispatch(changePage(page));
  },
});

const PaginationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Pagination);

export default PaginationContainer;
