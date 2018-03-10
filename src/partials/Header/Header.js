import React from 'react';
import './Header.scss';

const Header = () => (
  <nav className="navbar is-white has-shadow">
    <div className="container">
      <div className="navbar-start">
        <div className="navbar-brand">
          <a className="navbar-item brand-text" href="../">MoVieS</a>
          <div className="navbar-burger burger" data-target="navMenu">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <div className="navbar-end">
        {/* <div id="navMenu" className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="admin.html">Home</a>
          </div>
        </div> */}
        <div className="field ">
          <div className="control has-icons-right">
            <input className="input is-small" type="text" placeholder="Search a movie" />
            <span className="icon is-small is-right">
              <i className="fas fa-search" />
            </span>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
