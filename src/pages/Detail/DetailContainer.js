import { connect } from 'react-redux';
import Detail from './Detail';

import { getMovie, getCredits, getImages, getRecommendations } from '../../modules/movie/actions';

const mapStateToProps = state => ({
  movie: state.movie,
  cast: state.movie.cast,
  crew: state.movie.crew,
  images: state.movie.images,
  recommendations: state.movie.recommendations,
});

const mapDispatchToProps = dispatch => ({
  getMovie: (id) => {
    dispatch(getMovie(id));
    dispatch(getCredits(id));
  },
  getImages: (id) => {
    dispatch(getImages(id));
  },
  getRecommendations: (id) => {
    dispatch(getRecommendations(id));
  },
});

const DetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Detail);

export default DetailContainer;
