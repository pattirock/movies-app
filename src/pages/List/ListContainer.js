import { connect } from 'react-redux';
import List from './List';

import { getMovies } from '../../modules/movies/actions';

const mapStateToProps = state => ({
  movies: state.movies.results,
  totalResults: state.movies.total_results,
  totalPages: state.movies.total_pages,
});

const mapDispatchToProps = dispatch => ({
  getMovies: (filter, page) => dispatch(getMovies(filter, page)),
});

const ListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);

export default ListContainer;
