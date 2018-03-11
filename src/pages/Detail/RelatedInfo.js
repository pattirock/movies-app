/* eslint-disable jsx-a11y/anchor-is-valid, max-len, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, function-paren-newline */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { renderCards } from './utils';
import './RelatedInfo.scss';

class RelatedInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tabSelected: 'cast',
    };
  }

  render() {
    const { tabSelected } = this.state;
    const { cast } = this.props;

    return (
      <div className="columns related-info">
        <div className="column is-12">
          <div className="tabs">
            <ul>
              <li
                className={classnames({ 'is-active': tabSelected === 'cast' })}
              >
                <a
                  onClick={() => this.setState({ tabSelected: 'cast' })}
                >
                  Cast
                </a>
              </li>
              <li
                className={classnames({ 'is-active': tabSelected === 'photos' })}
              >
                <a
                  onClick={() => this.setState({ tabSelected: 'photos' })}
                >
                  Photos
                </a>
              </li>
              <li
                className={classnames({ 'is-active': tabSelected === 'videos' })}
              >
                <a
                  onClick={() => this.setState({ tabSelected: 'videos' })}
                >
                  Videos
                </a>
              </li>
            </ul>
          </div>
          <div
            id="cast-tab-content"
            className={classnames({ 'is-hidden': tabSelected !== 'cast' })}
          >
            <ol className="people">
              {renderCards(cast)}
            </ol>
          </div>
          <div
            id="photos-tab-content"
            className={classnames({ 'is-hidden': tabSelected !== 'photos' })}
          >
            <h1 className="title">Here will be the contents of the Photos tab</h1>
          </div>
          <div
            id="videos-tab-content"
            className={classnames({ 'is-hidden': tabSelected !== 'videos' })}
          >
            <h1 className="title">Here will be the contents of the Videos tab</h1>
          </div>
        </div>
      </div>);
  }
}

RelatedInfo.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.shape({
    cast_id: PropTypes.number,
    character: PropTypes.string,
    credit_id: PropTypes.string,
    gender: PropTypes.number,
    id: PropTypes.number,
    name: PropTypes.string,
    order: PropTypes.number,
    profile_path: PropTypes.string,
  })),
};

RelatedInfo.defaultProps = {
  cast: [],
};

export default RelatedInfo;
