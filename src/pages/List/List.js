import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import Header from '../../partials/Header';
import Footer from '../../partials/Footer';
import Pagination from '../../components/Pagination';
import Filters from '../../components/Filters';
import ListItem from './ListItem';

/* eslint-disable max-len, jsx-a11y/anchor-is-valid */
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
    return (
      <div className="list-page">
        <Header />
        <div className="container is-fluid list-page-content">
          <div className="navbar options-bar">
            <div className="container is-widescreen">
              <Filters
                className="navbar-end movie-filters"
              />
            </div>
          </div>
          <div className="columns is-multiline">
            {this.getItems()}
          </div>
        </div>
        <div className="container is-widescreen u-m-30">
          <div className="columns is-centered">
            <Pagination className="column is-6" />
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
};

List.defaultProps = {
  currentPage: 1,
  filter: 'popular',
  getMovies: () => {},
  movies: [],
};

export default List;
