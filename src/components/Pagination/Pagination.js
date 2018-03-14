import React, { Component } from 'react';
import PropTypes from 'prop-types';

/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions, max-len */
class Pagination extends Component {
  handleNextPage() {
    const { currentPage, totalPages, handlePageSelected } = this.props;

    if (currentPage < totalPages) {
      handlePageSelected(currentPage + 1);
    }
  }

  handlePreviousPage() {
    const { currentPage, handlePageSelected } = this.props;

    if (currentPage > 1) {
      handlePageSelected(currentPage - 1);
    }
  }

  render() {
    const {
      className, currentPage, totalPages, handlePageSelected,
    } = this.props;
    return (
      <div className={className}>
        <nav
          className="is-small"
          aria-label="pagination"
        >
          <a
            className="pagination-next"
            onClick={() => handlePageSelected(1)}
            disabled={currentPage === 1}
          >
            First page
          </a>
          <a
            className="pagination-previous"
            disabled={currentPage === 1}
            onClick={() => this.handlePreviousPage()}
          >
            &lt;
          </a>
          <a
            className="pagination-next"
            onClick={() => this.handleNextPage()}
            disabled={currentPage === totalPages}
          >
            &gt;
          </a>
          <a
            className="pagination-next"
            onClick={() => handlePageSelected(totalPages)}
            disabled={currentPage === totalPages}
          >
            Last page
          </a>
        </nav>
      </div>
    );
  }
}

Pagination.propTypes = {
  className: PropTypes.string,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number,
  handlePageSelected: PropTypes.func,
};

Pagination.defaultProps = {
  className: '',
  totalPages: 0,
  handlePageSelected: () => {},
};

export default Pagination;
