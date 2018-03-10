import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Header from '../../partials/Header';
import Footer from '../../partials/Footer';

// import CONSTANTS from '../../assets/javascripts/constants';

class Detail extends Component {
  render() {
    return (
      <div className="detail-page">
        <Header />
        <div className="container is-fluid detail-page-content">
          <div>Detail</div>
        </div>
        <Footer />
      </div>
    );
  }
}

// Detail.propTypes = {
//   currentPage: PropTypes.number,
//   filter: PropTypes.string,
//   getMovies: PropTypes.func,
//   movies: PropTypes.arrayOf(PropTypes.object),
//   totalResults: PropTypes.number,
//   totalPages: PropTypes.number,
// };

// Detail.defaultProps = {
//   currentPage: 1,
//   filter: 'popular',
//   getMovies: () => {},
//   movies: [],
//   totalResults: 0,
//   totalPages: 0,
// };

export default Detail;
