/* eslint-disable jsx-a11y/anchor-is-valid, max-len, camelcase, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, function-paren-newline */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { isEqual, isEmpty } from 'lodash';
import HeaderSticky from '../../partials/HeaderSticky';
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

const renderCards = (cards) => {
  const cardsList = [];

  if (!isEmpty(cards)) {
    const firstGroup = cards.slice(0, 6);
    firstGroup.map(item => cardsList.push(
      <li className="card" key={`card-${item.credit_id}`}>
        <a href="/person/21165-kim-dickens">
          <figure className="image">
            <img src={`http://image.tmdb.org/t/p/w154/${item.profile_path}`} alt={item.name} />
          </figure>
        </a>

        <p className="name">{item.name}</p>
        <p className="job">{item.job}</p>
      </li>));
  }

  return cardsList;
};

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
    } = this.props;
    return (
      <section className="hero is-default is-bold detail-page">
        <div className="hero-head">
          <HeaderSticky />
        </div>
        <div className="hero-body">
          <div className="container">
            <InfoBox
              className="info-box"
              voteAverage={vote_average}
              voteCount={vote_count}
              duration={durationToHours(runtime)}
              language="English"
            />
            <div className="columns is-vcentered">
              <div className="column is-4">
                <figure className="image is-square">
                  <img src={`http://image.tmdb.org/t/p/w500/${poster_path}`} alt={title} />
                </figure>
              </div>
              <div className="column is-7 is-offset-1 has-text-centered">
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

            <div className="columns recommend-movies">
              <div className="column is-12">
                <div className="tabs">
                  <ul>
                    <li
                      className={classnames({ 'is-active': this.state.tabSelected === 'cast' })}
                    >
                      <a
                        onClick={() => this.setState({ tabSelected: 'cast' })}
                      >
                        Cast
                      </a>
                    </li>
                    <li
                      className={classnames({ 'is-active': this.state.tabSelected === 'crew' })}
                    >
                      <a
                        onClick={() => this.setState({ tabSelected: 'crew' })}
                      >
                        Crew
                      </a>
                    </li>
                    <li
                      className={classnames({ 'is-active': this.state.tabSelected === 'photos' })}
                    >
                      <a
                        onClick={() => this.setState({ tabSelected: 'photos' })}
                      >
                        Photos
                      </a>
                    </li>
                    <li
                      className={classnames({ 'is-active': this.state.tabSelected === 'videos' })}
                    >
                      <a
                        onClick={() => this.setState({ tabSelected: 'videos' })}
                      >
                        Videos
                      </a>
                    </li>
                  </ul>
                </div>
                <div
                  id="cast-tab-content"
                  className={classnames({ 'is-hidden': this.state.tabSelected !== 'cast' })}
                >
                  <ol className="people">
                    {renderCards(cast)}
                  </ol>
                </div>
                <div
                  id="credits-content"
                  className={classnames({ 'is-hidden': this.state.tabSelected !== 'crew' })}
                >
                  <ol className="people">
                    {renderCards(crew)}
                  </ol>
                </div>
                <div
                  id="photos-tab-content"
                  className={classnames({ 'is-hidden': this.state.tabSelected !== 'photos' })}
                >
                  <h1 className="title">Here will be the contents of the Photos tab</h1>
                </div>
                <div
                  id="videos-tab-content"
                  className={classnames({ 'is-hidden': this.state.tabSelected !== 'videos' })}
                >
                  <h1 className="title">Here will be the contents of the Videos tab</h1>
                </div>
              </div>
            </div>

            {/* <div className="box">
              <p className="has-text-centered">
                <span className="tag is-primary">New</span> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div> */}
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
};

Detail.defaultProps = {
  getMovie: () => {},
  match: {},
  movie: {},
  cast: [],
  crew: [],
};

export default Detail;
