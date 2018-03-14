import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isEqual } from 'lodash';
import Header from '../../partials/Header';
import Footer from '../../partials/Footer';
import Pagination from '../../components/Pagination';
import NoFound from '../../components/NoFound';
import ListItem from './ListItem';
import CONSTANTS from '../../assets/javascripts/constants';
import './List.scss';

class List extends Component {
  componentDidMount() {
    const {
      getMovies, currentPage, filter, match: { params: { page } },
    } = this.props;
    let loadPage = currentPage;

    if (page) {
      loadPage = page;
    }
    getMovies(filter, loadPage);
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
    let itemList = [];

    if (movies.length > 0) {
      itemList = movies.map(mv => (
        <ListItem key={`movie-${mv.id}`} data={mv} />
      ));
    } else {
      itemList.push(<NoFound />);
    }

    return itemList;
  }

  isPaginationNeeded() {
    const { totalPages } = this.props;

    return totalPages > 1;
  }

  render() {
    return (
      <div className="list-page">
        <Header />
        <div className="container is-widescreen list-page-content">
          <div className="columns is-multiline is-gapless">
            {this.getItems()}
          </div>
        </div>
        <div className="container is-widescreen u-m-t-20 u-m-b-20">
          <div className="columns">
            {this.isPaginationNeeded() && <Pagination className="column is-5" />}
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
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.object,
    path: PropTypes.string,
    url: PropTypes.string,
  }),
  movies: PropTypes.arrayOf(PropTypes.object),
  totalPages: PropTypes.number,
};

List.defaultProps = {
  currentPage: 1,
  filter: CONSTANTS.defaultFilter,
  getMovies: () => {},
  match: {},
  movies: [],
  totalPages: 0,
};

export default List;
