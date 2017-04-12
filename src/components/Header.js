import React, { Component } from 'react';
import NavLink from './NavLink';

class Header extends Component {
  render() {
    return (
        <nav className="white">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo left">
              <i className="material-icons">code</i>
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <NavLink to="/">
                    <i className="material-icons left">home</i>
                    Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/cards">
                  <i className="material-icons left">credit_card</i>
                  Cards
                </NavLink>
              </li>
              <li>
                <NavLink to="/stats">
                  <i className="material-icons left">poll</i>
                  Stats
                </NavLink>
              </li>
              <li>
                <NavLink to="/about">
                  <i className="material-icons left">help</i>
                  About
                </NavLink>
              </li>
              <li>
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
