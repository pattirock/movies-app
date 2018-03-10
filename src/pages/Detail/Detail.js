import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import Header from '../../partials/Header';
import Footer from '../../partials/Footer';
import InfoBox from '../../components/InfoBox';
import { getYear } from '../../assets/javascripts/utils';
import './Detail.scss';

const durationToHours = (min) => {
  const hours = Math.floor(min / 60);
  const minutes = min % 60;
  return `${hours}h ${minutes}min`;
};

const genresToString = genres => genres && genres.map(elem => elem.name).join(', ');

/* eslint-disable jsx-a11y/anchor-is-valid, max-len, camelcase */
class Detail extends Component {
  componentDidMount() {
    const { getMovie, match: { params: { id } } } = this.props;

    if (id) {
      getMovie(id);
    }
  }

  shouldComponentUpdate(nextProps) {
    const { movie } = this.props;

    return (
      !isEqual(movie, nextProps.movie) &&
      movie
    );
  }

  render() {
    const {
      movie: {
        title, overview, release_date, poster_path, runtime, genres, vote_average, vote_count,
      },
    } = this.props;
    return (
      <section className="hero is-fullheight is-default is-bold">
        <div className="hero-head">
          <Header />
        </div>
        <div className="hero-body">
          <div className="container">
            <Link to="/" className="is-6 back-button" data-tool="Back">&lt;&lt;</Link>
            <InfoBox
              className="info-box"
              voteAverage={vote_average}
              voteCount={vote_count}
              duration={durationToHours(runtime)}
              language="English"
            />
            <div className="columns is-vcentered">
              <div className="column is-5">
                <figure className="image is-square">
                  <img src={`http://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
                </figure>
              </div>
              <div className="column is-6 is-offset-1 has-text-centered">
                <p><span className="title">{title}</span> <span className="subtitle">[{getYear(release_date)}]</span></p>
                <p>{genresToString(genres)}</p>
                {/* <div className="c100 p25 small green">
                  <span>25%</span>
                  <div className="slice">
                    <div className="bar" />
                    <div className="fill" />
                  </div>
                </div> */}
                <br />
                <p className="has-text-centered">
                  {overview}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-foot">
          <Footer />
        </div>
        {/* <div className="box cta">
          <p className="has-text-centered">
            <span className="tag is-primary">New</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div> */}
      </section>
    );
  }
}

Detail.propTypes = {
  getMovie: PropTypes.func,
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.object,
    path: PropTypes.string,
    url: PropTypes.string,
  }),
  movie: PropTypes.objectOf(PropTypes.any),
};

Detail.defaultProps = {
  getMovie: () => {},
  match: {},
  movie: {},
};

export default Detail;
