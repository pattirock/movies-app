import { connect } from 'react-redux';
import SearchBox from './SearchBox';

import { resetMovies, searchMovies } from '../../modules/movies/actions';

const mapDispatchToProps = dispatch => ({
  searchMovies: (query) => {
    dispatch(searchMovies(query));
  },
  resetMovies: () => dispatch(resetMovies()),
});

const SearchBoxContainer = connect(
  null,
  mapDispatchToProps,
)(SearchBox);

export default SearchBoxContainer;
