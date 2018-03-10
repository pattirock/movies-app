import { connect } from 'react-redux';
import Filters from './Filters';

const mapStateToProps = state => ({
  filterName: state.filters.filterName,
});

const FiltersContainer = connect(mapStateToProps)(Filters);

export default FiltersContainer;
