import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';
import logo from 'assets/logo.svg';
import logoWhite from 'assets/logo_white.svg';
import menu from 'assets/icons/menu.svg';

const links = [
  { text: 'Maps', to: '/maps' },
  { text: 'Mentors', to: '/mentors' },
  { text: 'Prizes', to: '/prizes' },
  { text: 'Schedule', to: '/schedule' },
  { text: 'Travel', to: '/travel' },
];

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileMenuOpen: false,
    };
  }

  render() {
    const { mobileMenuOpen } = this.state;

    const menuItems = links.map(link => (
      <NavLink className="menu-item" to={link.to} key={link.text}>
        {link.text}
        <div className="line" />
      </NavLink>
    ));

    const className = `nav-bar${(mobileMenuOpen ? ' menu-open' : '')}`;
    return (
      <div className={className}>
        <NavLink to="/" className="logo">
          <img src={logo} alt="HackIllinois Logo" />
        </NavLink>

        <div className="space" />
        {menuItems}

        <button
          type="button"
          className="mobile-menu-toggle"
          onClick={() => this.setState({ mobileMenuOpen: true })}
        >
          <img src={menu} alt="Menu Toggle" />
        </button>

        <div className="mobile-menu">
          <NavLink to="/" className="logo">
            <img src={logoWhite} alt="HackIllinois Logo" />
          </NavLink>

          <NavLink className="menu-item" to="/" exact key="Home">
            Home
            <div className="line" />
          </NavLink>

          {menuItems}
        </div>

        <button
          type="button"
          className="menu-background"
          onClick={() => this.setState({ mobileMenuOpen: false })}
          aria-label="Close Menu"
        />
      </div>
    );
  }
}
