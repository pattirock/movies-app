import { connect } from 'react-redux';
import Detail from './Detail';

const mapStateToProps = state => ({
  movie: state.movie,
});

const DetailContainer = connect(mapStateToProps)(Detail);

export default DetailContainer;
