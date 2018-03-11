import { connect } from 'react-redux';
import Detail from './Detail';

import { getMovie, getCredits } from '../../modules/movie/actions';

const mapStateToProps = state => ({
  movie: state.movie,
  cast: state.movie.cast,
  crew: state.movie.crew,
});

const mapDispatchToProps = dispatch => ({
  getMovie: (id) => {
    dispatch(getMovie(id));
    dispatch(getCredits(id));
  },
});

const DetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detail);

export default DetailContainer;
