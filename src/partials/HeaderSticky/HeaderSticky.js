import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderSticky.scss';

/* eslint-disable jsx-a11y/anchor-is-valid, max-len */
const HeaderSticky = () => (
  <section className="hero">
    <div className="hero-head">
      <nav className="navbar is-dark">
        <div className="container is-fluid">
          <div className="navbar-brand">
            <Link to="/" className="navbar-item brand-text">MoVieS</Link>
            <div className="navbar-burger burger" data-target="navMenu">
              <span />
              <span />
              <span />
            </div>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-end">
              <Link to="/" className="navbar-item " data-tool="Home">Home</Link>
              <a className="navbar-item">Examples</a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </section>
);

export default HeaderSticky;
