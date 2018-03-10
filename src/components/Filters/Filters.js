import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, jsx-a11y/anchor-is-valid */
const Filters = ({ filterBy }) => (
  <div className="navbar-end is-hidden-mobile">
    <a
      className="navbar-item"
      onClick={() => filterBy('top_rated')}
    >
      Top Rated
    </a>
    <a
      className="navbar-item"
      onClick={() => filterBy('upcoming')}
    >
      Upcoming
    </a>
    <a
      className="navbar-item"
      onClick={() => filterBy('popular')}
    >
      Popular
    </a>
  </div>
);

Filters.propTypes = {
  filterBy: PropTypes.func,
};

Filters.defaultProps = {
  filterBy: () => {},
};

export default Filters;