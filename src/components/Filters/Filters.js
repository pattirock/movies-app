import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../assets/javascripts/constants';
import { toTitleCase } from '../../assets/javascripts/utils';
import './Filters.scss';

const filters = CONSTANTS.movieFilters;

/* eslint-disable jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, jsx-a11y/anchor-is-valid, max-len */
const Filters = ({ className, filterBy, filterName }) => (
  <div
    className={`is-hidden-mobile ${className}`}
  >
    <span className="navbar-item has-text-weight-semibold">FILTERS:</span>
    {filters && filters.map(f => (
      <a
        key={`filter-${f}`}
        onClick={() => filterBy(f)}
        className={classnames('navbar-item', { selected: filterName === f })}
      >
        {toTitleCase(f)}
      </a>))}
  </div>
);

Filters.propTypes = {
  className: PropTypes.string,
  filterBy: PropTypes.func,
  filterName: PropTypes.string.isRequired,
};

Filters.defaultProps = {
  className: '',
  filterBy: () => {},
};

export default Filters;
