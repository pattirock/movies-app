import React from 'react';
import './NoFound.scss';

const NoFound = () => (
  <section className="hero is-white is-large no-found">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">
          There are not movies with this title.
        </h1>
      </div>
    </div>
  </section>);

export default NoFound;
