/* eslint-disable function-paren-newline, jsx-a11y/anchor-is-valid */
import React from 'react';
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
    genres.map(elem => genresList.push(<span className={`tag is-${tagColor()}`}>{elem.name}</span>));
  }

  return (<div className="tags">{genresList}</div>);
};

export const renderCards = (cards, numItem) => {
  const cardsList = [];

  if (!isEmpty(cards)) {
    const firstGroup = numItem ? cards.slice(0, numItem) : cards;
    firstGroup.map(item => cardsList.push(
      <li className="card" key={`card-${item.credit_id}`}>
        {item.profile_path ? (
          <figure className="image">
            <img src={`http://image.tmdb.org/t/p/w154/${item.profile_path}`} alt={item.name} />
          </figure>
        ) : <div className="image-not-found" />}

        <p className="name">{item.name}</p>
        <p className="job">{item.job}</p>
      </li>));
  }

  return cardsList;
};
