/* eslint-disable jsx-a11y/anchor-is-valid, max-len, jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, function-paren-newline */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { renderCast, renderImages, renderRecommendations } from './utils';
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
    const { cast, images, recommendations } = this.props;

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
                  onClick={() => {
                    this.setState({ tabSelected: 'photos' });
                    this.props.handleClickPhotos();
                  }}
                >
                  Photos
                </a>
              </li>
              <li
                className={classnames({ 'is-active': tabSelected === 'recommendations' })}
              >
                <a
                  onClick={() => {
                    this.setState({ tabSelected: 'recommendations' });
                    this.props.handleClickRecommendations();
                  }}
                >
                  Recommendations
                </a>
              </li>
            </ul>
          </div>
          <div
            id="cast-tab-content"
            className={classnames({ 'is-hidden': tabSelected !== 'cast' })}
          >
            {renderCast(cast)}
          </div>
          <div
            id="photos-tab-content"
            className={classnames({ 'is-hidden': tabSelected !== 'photos' })}
          >
            {renderImages(images.posters)}
          </div>
          <div
            id="recommendations-tab-content"
            className={classnames({ 'is-hidden': tabSelected !== 'recommendations' })}
          >
            {renderRecommendations(recommendations.results)}
          </div>
        </div>
      </div>);
  }
}

RelatedInfo.propTypes = {
  handleClickPhotos: PropTypes.func,
  handleClickRecommendations: PropTypes.func,
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
  images: PropTypes.shape({
    id: PropTypes.number,
    backdrops: PropTypes.array,
    posters: PropTypes.array,
  }),
  recommendations: PropTypes.shape({
    page: PropTypes.number,
    results: PropTypes.array,
    total_pages: PropTypes.number,
    total_results: PropTypes.number,
  }),
};

RelatedInfo.defaultProps = {
  handleClickPhotos: () => {},
  handleClickRecommendations: () => {},
  cast: [],
  images: {},
  recommendations: {},
};

export default RelatedInfo;
