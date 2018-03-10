import React from 'react';
import PropTypes from 'prop-types';
import './Filters.scss';

/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, jsx-a11y/anchor-is-valid */
const Filters = ({ className, filterBy }) => (
  <div
    className={`navbar-end is-hidden-mobile ${className}`}
  >
    <span className="navbar-item has-text-weight-semibold">Filters:</span>
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
  className: PropTypes.string,
  filterBy: PropTypes.func,
};

Filters.defaultProps = {
  className: '',
  filterBy: () => {},
};

export default Filters;
