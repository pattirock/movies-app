import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import Header from '../../partials/Header';
import Footer from '../../partials/Footer';
import InfoBox from '../../components/InfoBox';
import Pagination from '../../components/Pagination';
import Filters from '../../components/Filters';
import ListItem from './ListItem';

import CONSTANTS from '../../assets/javascripts/constants';

class List extends Component {
  componentDidMount() {
    const { getMovies, currentPage, filter } = this.props;

    getMovies(filter, currentPage);
  }

  shouldComponentUpdate(nextProps) {
    const { movies, currentPage, filter } = this.props;

    return (
      currentPage !== nextProps.currentPage ||
      filter !== nextProps.filter ||
      !isEqual(movies, nextProps.movies)
    );
  }

  componentDidUpdate(prevProps) {
    const { getMovies, currentPage, filter } = this.props;

    if (filter !== prevProps.filter || currentPage !== prevProps.currentPage) {
      getMovies(filter, currentPage);
    }
  }

  getItems() {
    const { movies } = this.props;

    return movies.map(mv => (
      <ListItem key={`movie-${mv.id}`} data={mv} />
    ));
  }

  render() {
    const { totalPages, totalResults, currentPage } = this.props;
    return (
      <div className="list-page">
        <Header />
        <div className="container is-fluid list-page-content">
          <InfoBox
            totalPages={totalPages}
            totalResults={totalResults}
            page={currentPage}
            itemPerPage={CONSTANTS.itemPerPage}
          />
          <div className="navbar options-bar">
            <div className="container is-widescreen">
              <div className="navbar-start">
                <Pagination
                  totalPages={totalPages}
                />
              </div>
              <Filters
                className="movie-filters"
              />
            </div>
          </div>
          <div className="columns is-multiline">
            {this.getItems()}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

List.propTypes = {
  currentPage: PropTypes.number,
  filter: PropTypes.string,
  getMovies: PropTypes.func,
  movies: PropTypes.arrayOf(PropTypes.object),
  totalResults: PropTypes.number,
  totalPages: PropTypes.number,
};

List.defaultProps = {
  currentPage: 1,
  filter: 'popular',
  getMovies: () => {},
  movies: [],
  totalResults: 0,
  totalPages: 0,
};

export default List;
