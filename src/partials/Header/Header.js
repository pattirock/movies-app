import React from 'react';
import { Link } from 'react-router-dom';
import Filters from '../../components/Filters';
import SearchBox from '../../components/SearchBox';
import './Header.scss';

/* eslint-disable jsx-a11y/anchor-is-valid, max-len */
const Header = () => (
  <section className="hero has-background is-medium">
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
          {/* <div id="navMenu" className="navbar-menu">
            <div className="navbar-end">
              <Link to="/" className="navbar-item " data-tool="Home">Home</Link>
            </div>
          </div> */}
        </div>
      </nav>
    </div>
    <div className="hero-body">
      <div className="container has-text-centered">
        <h3 className="is-size-3 has-text-white"><cite> - There is no end. There is no beginning. There is only the infinite passion of life. -</cite></h3>
        <h5 className="is-size-6">Federico Fellini</h5>
      </div>
    </div>
    <div className="hero-foot">
      <div className="navbar options-bar">
        <div className="container is-fluid">
          <SearchBox
            className="navbar-start"
          />
          <Filters
            className="navbar-end movie-filters"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Header;
