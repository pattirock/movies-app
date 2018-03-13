import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

/* eslint-disable jsx-a11y/anchor-is-valid, jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions, max-len */
class Pagination extends Component {
  handleNextPage() {
    const { currentPage, totalPages, history } = this.props;

    if (currentPage < totalPages) {
      console.debug(`/page/${currentPage + 1}`);
      history.push(`/page/${currentPage + 1}`);
    }
  }

  handlePreviousPage() {
    const { currentPage, history } = this.props;

    if (currentPage > 1) {
      history.push(`/page/${currentPage - 1}`);
    }
  }

  render() {
    const { className } = this.props;
    return (
      <div className={className}>
        <nav
          className="is-small"
          aria-label="pagination"
        >
          <a
            className="pagination-previous"
            onClick={() => this.handlePreviousPage()}
          >
            &lt;
          </a>
          <a
            className="pagination-next"
            onClick={() => this.handleNextPage()}
          >
            &gt;
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
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

Pagination.defaultProps = {
  className: '',
  totalPages: 0,
};

export default withRouter(Pagination);
