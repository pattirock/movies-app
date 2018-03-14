import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderSticky.scss';

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
        </div>
      </nav>
    </div>
  </section>
);

export default HeaderSticky;
