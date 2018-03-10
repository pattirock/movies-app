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
  constructor(props) {
    super(props);

    this.state = {
      filter: 'popular',
      page: 1,
    };
  }

  componentDidMount() {
    const { filter, page } = this.state;
    const { getMovies } = this.props;

    getMovies(filter, page);
  }

  shouldComponentUpdate(nextProps, nextState) {
    const { filter, page } = this.state;
    const { movies } = this.props;

    return (
      page !== nextState.page ||
      filter !== nextState.filter ||
      !isEqual(movies, nextProps.movies)
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { filter, page } = this.state;
    const { getMovies } = this.props;

    if (filter !== prevState.filter) {
      getMovies(filter, page);
    }
  }

  getItems() {
    const { movies } = this.props;

    return movies.map(mv => (
      <ListItem key={`movie-${mv.id}`} data={mv} />
    ));
  }

  render() {
    const { totalPages, totalResults } = this.props;
    return (
      <div className="list-page">
        <Header />
        <div className="container is-fluid list-page-content">
          <InfoBox
            totalPages={totalPages}
            totalResults={totalResults}
            page={1}
            itemPerPage={CONSTANTS.itemPerPage}
          />
          <div className="navbar options-bar">
            <div className="container is-widescreen">
              <div className="navbar-start">
                <Pagination />
              </div>
              <Filters
                className="movie-filters"
                filterBy={(filterName) => {
                  this.setState({
                    filter: filterName,
                  });
                }}
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
  getMovies: PropTypes.func,
  movies: PropTypes.arrayOf(PropTypes.object),
  totalResults: PropTypes.number,
  totalPages: PropTypes.number,
};

List.defaultProps = {
  getMovies: () => {},
  movies: [],
  totalResults: 0,
  totalPages: 0,
};

export default List;
