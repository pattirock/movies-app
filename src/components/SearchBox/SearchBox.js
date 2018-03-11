import React from 'react';
import PropTypes from 'prop-types';
import './SearchBox.scss';

const SearchBox = ({ className }) => (
  <div className={`search-box ${className}`}>
    <div className="field ">
      <div className="control">
        <input className="input is-small" type="text" placeholder="Search a movie" />
      </div>
    </div>
  </div>
);

SearchBox.propTypes = {
  className: PropTypes.string,
};

SearchBox.defaultProps = {
  className: '',
};

export default SearchBox;
