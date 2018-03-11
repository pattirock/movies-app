/* eslint-disable jsx-a11y/anchor-is-valid, max-len, camelcase, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, function-paren-newline */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import HeaderSticky from '../../partials/HeaderSticky';
import Footer from '../../partials/Footer';
import InfoBox from '../../components/InfoBox';
import { getYear } from '../../assets/javascripts/utils';
import { durationToHours, genresTags, renderListCrew } from './utils';
import RelatedInfo from './RelatedInfo';
import './Detail.scss';

class Detail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabSelected: 'cast',
    };
  }
  componentDidMount() {
    const { getMovie, match: { params: { id } } } = this.props;

    if (id) {
      this.movieId = id;
      getMovie(id);
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { movie } = this.props;
    const { tabSelected } = this.state;

    return (
      tabSelected !== nextState.tabSelected ||
      (!isEqual(movie, nextProps.movie) &&
      movie !== undefined)
    );
  }

  render() {
    const {
      movie: {
        title, overview, release_date, poster_path, runtime, genres, vote_average, vote_count,
      },
      crew,
      cast,
      images,
      recommendations,
    } = this.props;
    return (
      <section className="hero is-default is-bold detail-page">
        <div className="hero-head">
          <HeaderSticky />
        </div>
        <div className="hero-body">
          <div className="container">
            <div className="columns is-centered">
              <div className="column is-four-fifth-mobile is-four-fifth-tablet is-three-quarters-desktop is-two-thirds-widescreen is-two-thirds-fullhd">
                <InfoBox
                  className="info-box"
                  voteAverage={vote_average}
                  voteCount={vote_count}
                  duration={durationToHours(runtime)}
                  language="English"
                />
                <div className="columns">
                  <div className="column is-4 detail-image">
                    <figure className="image is-square">
                      <img src={`http://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
                    </figure>
                  </div>
                  <div className="column is-8 detail-info">
                    <p>
                      <span className="title">{title}</span>
                      <span className="subtitle">&nbsp;[{getYear(release_date)}]</span>
                    </p>
                    <div className="genres">{genresTags(genres)}</div>
                    <h4 className="has-text-left has-text-weight-bold is-size-6">Overview</h4>
                    <p >
                      {overview}
                    </p>
                    <h4 className="has-text-left has-text-weight-bold is-size-6">Featured Team</h4>
                    {renderListCrew(crew, 16)}
                  </div>
                </div>

                <RelatedInfo
                  cast={cast}
                  images={images}
                  recommendations={recommendations}
                  handleClickPhotos={() => this.movieId && this.props.getImages(this.movieId)}
                  handleClickRecommendations={() => this.movieId && this.props.getRecommendations(this.movieId)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hero-foot">
          <Footer />
        </div>
      </section>
    );
  }
}

Detail.propTypes = {
  getMovie: PropTypes.func,
  getImages: PropTypes.func,
  getRecommendations: PropTypes.func,
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.object,
    path: PropTypes.string,
    url: PropTypes.string,
  }),
  movie: PropTypes.objectOf(PropTypes.any),
  cast: PropTypes.arrayOf(PropTypes.shape({
    cast_id: PropTypes.number,
    character: PropTypes.string,
    credit_id: PropTypes.string,
    gender: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
    order: PropTypes.number,
    profile_path: PropTypes.string,
  })),
  crew: PropTypes.arrayOf(PropTypes.shape({
    credit_id: PropTypes.string,
    department: PropTypes.string,
    gender: PropTypes.number,
    id: PropTypes.number,
    job: PropTypes.string,
    name: PropTypes.string,
    profile_path: PropTypes.string,
  })),
  images: PropTypes.shape({
    id: PropTypes.number,
    backdrops: PropTypes.array,
    posters: PropTypes.array,
  }),
  recommendations: PropTypes.shape({
    page: PropTypes.number,
    results: PropTypes.array,
    total_pages: PropTypes.number,
    total_results: PropTypes.number,
  }),
};

Detail.defaultProps = {
  getMovie: () => {},
  getImages: () => {},
  getRecommendations: () => {},
  match: {},
  movie: {},
  cast: [],
  crew: [],
  images: {},
  recommendations: {},
};

export default Detail;
