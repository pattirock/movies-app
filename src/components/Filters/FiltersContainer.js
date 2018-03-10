import { connect } from 'react-redux';
import Filters from './Filters';
import { filterBy } from '../../modules/filters/actions';

const mapStateToProps = state => ({
  filterName: state.filters.filter,
});

const mapDispatchToProps = dispatch => ({
  filterBy: filter => dispatch(filterBy(filter)),
});

const FiltersContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Filters);

export default FiltersContainer;
