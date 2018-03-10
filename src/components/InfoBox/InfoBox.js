import React from 'react';
import PropTypes from 'prop-types';

const InfoBox = ({
  voteAverage, voteCount, duration, className, language,
}) => (
  <nav className={`level ${className}`}>
    <div className="level-item has-text-centered">
      <div>
        <p className="heading">Rating</p>
        <p className="title">{voteAverage}/10</p>
      </div>
    </div>
    <div className="level-item has-text-centered">
      <div>
        <p className="heading">Votes</p>
        <p className="title">{voteCount}</p>
      </div>
    </div>
    <div className="level-item has-text-centered">
      <div>
        <p className="heading">Duration</p>
        <p className="title">{duration}</p>
      </div>
    </div>
    <div className="level-item has-text-centered">
      <div>
        <p className="heading">Language</p>
        <p className="title">{language}</p>
      </div>
    </div>
  </nav>
);

InfoBox.propTypes = {
  className: PropTypes.string,
  duration: PropTypes.number,
  language: PropTypes.string,
  voteAverage: PropTypes.number,
  voteCount: PropTypes.number,
};

InfoBox.defaultProps = {
  className: '',
  duration: 0,
  language: '',
  voteAverage: 0,
  voteCount: 0,
};

export default InfoBox;
