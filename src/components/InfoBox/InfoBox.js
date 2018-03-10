import React from 'react';
import PropTypes from 'prop-types';
// import './InfoBox.scss';

const InfoBox = ({
  itemPerPage, page, totalPages, totalResults,
}) => (
  <nav className="level">
    <div className="level-item has-text-centered">
      <div>
        <p className="heading">Current Page</p>
        <p className="title">{page}</p>
      </div>
    </div>
    <div className="level-item has-text-centered">
      <div>
        <p className="heading">Items x Page</p>
        <p className="title">{itemPerPage}</p>
      </div>
    </div>
    <div className="level-item has-text-centered">
      <div>
        <p className="heading">Total Pages</p>
        <p className="title">{totalPages}</p>
      </div>
    </div>
    <div className="level-item has-text-centered">
      <div>
        <p className="heading">Total Results</p>
        <p className="title">{totalResults}</p>
      </div>
    </div>
  </nav>
);

InfoBox.propTypes = {
  itemPerPage: PropTypes.number,
  page: PropTypes.number,
  totalResults: PropTypes.number,
  totalPages: PropTypes.number,
};

InfoBox.defaultProps = {
  itemPerPage: 0,
  page: 0,
  totalResults: 0,
  totalPages: 0,
};

export default InfoBox;
