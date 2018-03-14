import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ListItem extends Component {
  render() {
    const { data: { id, poster_path, title } } = this.props;
    return (
      <div className="column is-3 image-container">
        {poster_path ?
          <figure className="image is-square">
            <img src={`http://image.tmdb.org/t/p/w342/${poster_path}`} alt={title} />
          </figure> : <div className="no-poster" />
        }
        <Link to={`/movie/${id}`}>
          <div className="overlay">
            <div className="text">{title}</div>
          </div>
        </Link>
      </div>
    );
  }
}

ListItem.propTypes = {
  data: PropTypes.shape({
    poster_path: PropTypes.string,
    adult: PropTypes.bool,
    overview: PropTypes.string,
    release_date: PropTypes.string,
    genre_ids: PropTypes.array,
    id: PropTypes.number,
    original_title: PropTypes.string,
    original_language: PropTypes.string,
    title: PropTypes.string,
    backdrop_path: PropTypes.string,
    popularity: PropTypes.number,
    vote_count: PropTypes.number,
    video: PropTypes.bool,
    vote_average: PropTypes.number,
  }),
};

ListItem.defaultProps = {
  data: {},
};

export default ListItem;
