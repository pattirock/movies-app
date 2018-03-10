import { connect } from 'react-redux';
import Detail from './Detail';

import { getMovie } from '../../modules/movie/actions';

const mapStateToProps = state => ({
  movie: state.movie,
});

const mapDispatchToProps = dispatch => ({
  getMovie: (id) => {
    dispatch(getMovie(id));
  },
});

const DetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detail);

export default DetailContainer;
