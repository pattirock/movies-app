import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CONSTANTS from '../../assets/javascripts/constants';
// import './Pagination.scss';

/* eslint-disable jsx-a11y/anchor-is-valid, no-continue, no-plusplus, jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions, max-len */
const getPageElement = (currentPage, index) => (
  <li
    key={`page-${index + 1}`}
  >
    <a
      className={classnames('pagination-link', { 'is-current': index + 1 === currentPage })}
      aria-label={`Goto page ${index + 1}`}
    >
      {index + 1}
    </a>
  </li>
);

class Pagination extends Component {
  getListPages() {
    const items = [];
    const {
      pageRangeDisplayed,
      totalPages,
      marginPagesDisplayed,
      breakLabel,
      currentPage,
    } = this.props;

    if (totalPages <= pageRangeDisplayed) {
      for (let index = 0; index < totalPages; index++) {
        items.push(getPageElement(index));
      }
    } else {
      let leftSide = (pageRangeDisplayed / 2);
      let rightSide = (pageRangeDisplayed - leftSide);

      if (currentPage > totalPages - (pageRangeDisplayed / 2)) {
        rightSide = totalPages - currentPage;
        leftSide = pageRangeDisplayed - rightSide;
      } else if (currentPage < pageRangeDisplayed / 2) {
        leftSide = currentPage;
        rightSide = pageRangeDisplayed - leftSide;
      }

      let page;
      let breakView;
      const createPageView = index => getPageElement(currentPage, index);

      for (let index = 0; index < totalPages; index++) {
        page = index + 1;

        if (page <= marginPagesDisplayed) {
          items.push(createPageView(index));
          continue;
        }

        if (page > totalPages - marginPagesDisplayed) {
          items.push(createPageView(index));
          continue;
        }

        if ((index >= currentPage - leftSide) && (index <= currentPage + rightSide)) {
          items.push(createPageView(index));
          continue;
        }


        const keys = Object.keys(items);
        const breakLabelKey = keys[keys.length - 1];
        const breakLabelValue = items[breakLabelKey];

        if (breakLabel && breakLabelValue !== breakView) {
          breakView = (
            <li key="break"><span className="pagination-ellipsis">&hellip;</span></li>
          );

          items.push(breakView);
        }
      }
    }

    return items;
  }

  handleNextPage() {
    const { currentPage, totalPages, handlePageSelected } = this.props;

    if (currentPage < totalPages - 1) {
      handlePageSelected(currentPage + 1);
    }
  }

  handlePreviousPage() {
    const { currentPage, handlePageSelected } = this.props;

    if (currentPage > 0) {
      handlePageSelected(currentPage - 1);
    }
  }

  render() {
    const { className, totalPages } = this.props;
    return (
      <nav
        className={`pagination is-small ${className}`}
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
        <ul className="pagination-list">
          {this.getListPages(totalPages)}
        </ul>
      </nav>
    );
  }
}

Pagination.propTypes = {
  breakLabel: PropTypes.string,
  className: PropTypes.string,
  currentPage: PropTypes.number.isRequired,
  handlePageSelected: PropTypes.func,
  marginPagesDisplayed: PropTypes.number,
  pageRangeDisplayed: PropTypes.number,
  totalPages: PropTypes.number.isRequired,
};

Pagination.defaultProps = {
  breakLabel: '&hellip;',
  className: '',
  handlePageSelected: () => {},
  marginPagesDisplayed: CONSTANTS.marginPagesDisplayed,
  pageRangeDisplayed: CONSTANTS.pageRangeDisplayed,
};

export default Pagination;
