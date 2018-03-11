/* eslint-disable function-paren-newline, jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { sample, isEmpty } from 'lodash';

export const durationToHours = (min) => {
  const hours = Math.floor(min / 60);
  const minutes = min % 60;
  return `${hours}h ${minutes}min`;
};

export const genresTags = (genres) => {
  const genresList = [];
  const color = ['light', 'primary', 'info', 'warning', 'danger'];
  const tagColor = () => sample(color);

  if (genres) {
    genres.map(elem => genresList.push(<span key={`genre-${elem.id}`} className={`tag is-${tagColor()}`}>{elem.name}</span>));
  }

  return (<div className="tags">{genresList}</div>);
};

export const renderListCrew = (crew, numItem) => {
  const crewList = [];

  if (!isEmpty(crew)) {
    const firstGroup = numItem ? crew.slice(0, numItem) : crew;
    firstGroup.map(item => crewList.push(
      <li className="crew-list" key={`crew-${item.credit_id}`}>
        <p className="name">{item.name}</p>
        <p className="job">{item.job}</p>
      </li>));
  }

  return (<ol className="people">{crewList}</ol>);
};

export const renderCast = (cards, numItem) => {
  const cardsList = [];

  if (!isEmpty(cards)) {
    const firstGroup = numItem ? cards.slice(0, numItem) : cards;
    firstGroup.map(item => cardsList.push(
      <div className="column is-2" key={`card-${item.credit_id}`}>
        <div className="card">
          {item.profile_path ? (
            <figure className="image">
              <img src={`http://image.tmdb.org/t/p/w154/${item.profile_path}`} alt={item.name} />
            </figure>
          ) : <div className="image-not-found" />}

          <p className="name">{item.name}</p>
          <p className="job">{item.job}</p>
        </div>
      </div>));
  }

  return (
    <div className="columns is-multiline is-gapless cast">
      {cardsList}
    </div>);
};

export const renderRecommendations = (movies, numItem) => {
  const moviesList = [];

  if (!isEmpty(movies)) {
    const firstGroup = numItem ? movies.slice(0, numItem) : movies;
    firstGroup.map(item => moviesList.push(
      <div className="column is-2" key={`movie-${item.id}`}>
        <div className="card">
          <Link to={`/movie/${item.id}`}>
            {item.poster_path ? (
              <figure className="image">
                <img src={`http://image.tmdb.org/t/p/w154/${item.poster_path}`} alt={item.title} />
              </figure>
            ) : <div className="image-not-found" />}
          </Link>

          <Link to={`/movie/${item.id}`} className="name">{item.title}</Link>
        </div>
      </div>));
  }

  return (
    <div className="columns is-multiline is-gapless cast">
      {moviesList}
    </div>);
};

export const renderImages = (images, numItem) => {
  const imagesList = [];

  if (!isEmpty(images)) {
    const firstGroup = numItem ? images.slice(0, numItem) : images;
    firstGroup.map((item, index) => {
      const key = index;
      return imagesList.push(
        <div className="column is-2" key={`poster-${key}`}>
          {item.file_path && (
            <figure className="image">
              <img src={`http://image.tmdb.org/t/p/w154/${item.file_path}`} alt={item.name} />
            </figure>
          )}
        </div>);
    });
  }

  return (
    <div className="columns is-multiline posters">
      {imagesList}
    </div>);
};
