import React from 'react';
import { NavLink } from 'react-router-dom';

import './style.scss';
import logo from 'assets/logo.svg';
import menu from 'assets/icons/menu.svg';

const links = [
  { text: 'Schedule', to: '/schedule' },
  { text: 'Maps', to: '/maps' },
  { text: 'Prizes', to: '/prizes' },
  { text: 'Travel', to: '/travel' },
  { text: 'Projects', to: '/projects' },
];

export default function NavBar() {
  return (
    <div className="nav-bar">
      <img className="logo" src={logo} alt="HackIllinois Logo" />
      <div className="space" />
      {links.map(link => (
        <NavLink className="menu-item" to={link.to}>
          {link.text}
          <div className="line" />
        </NavLink>
      ))}

      <img className="mobile-menu-toggle" src={menu} alt="Menu Toggle" />
    </div>
  );
}
