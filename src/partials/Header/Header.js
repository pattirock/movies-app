import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

/* eslint-disable jsx-a11y/anchor-is-valid */
const Header = () => (
  <nav className="navbar is-dark">
    <div className="container">
      <div className="navbar-start">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item brand-text">MoVieS</Link>
          <div className="navbar-burger burger" data-target="navMenu">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <div className="navbar-end">
        <div className="field ">
          <div className="control has-icons-right">
            <input className="input is-small" type="text" placeholder="Search a movie" />
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
