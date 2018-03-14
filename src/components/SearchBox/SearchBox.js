import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SearchBox.scss';

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchInput: '',
    };
  }

  render() {
    const { className, searchMovies, resetMovies } = this.props;
    const { searchInput } = this.state;

    return (
      <div className={`search-box ${className}`}>
        <div className="field has-addons">
          <p className="control">
            <a
              role="button"
              tabIndex="-1"
              className="delete"
              onClick={() => {
                this.setState({ searchInput: '' });
                resetMovies();
              }}
            >
              X
            </a>
          </p>
          <div className="control">
            <input
              className="input is-small"
              type="text"
              placeholder="Search a movie"
              value={searchInput}
              onChange={(event) => {
                const { target: { value } } = event;

                this.setState({ searchInput: value });

                if (value !== '') {
                  searchMovies(value);
                }
              }}
            />
          </div>
        </div>
      </div>
    );
  }
}

SearchBox.propTypes = {
  className: PropTypes.string,
  searchMovies: PropTypes.func,
  resetMovies: PropTypes.func,
};

SearchBox.defaultProps = {
  className: '',
  searchMovies: () => {},
  resetMovies: () => {},
};

export default SearchBox;
