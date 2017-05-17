import React, { Component } from 'react';
import NavLink from './NavLink';

class Header extends Component {
  render() {
    return (
      <nav className="animated fadeInDown navbar navbar-toggleable-md navbar-light">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">Navbar</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink to="/">
                  <i className="material-icons left">home</i>
                  Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/cards">
                <i className="material-icons left">credit_card</i>
                Cards
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/stats">
                <i className="material-icons left">poll</i>
                Stats
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about">
                <i className="material-icons left">help</i>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Me">
                <i className="material-icons left">settings</i>
                Conf
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/logout">
                <i className="material-icons left">exit_to_app</i>
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
export default Header;
