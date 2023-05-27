import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import FontAwesomeIcons from './Icons/FontAwesomeIcons';
import ThemeToggleButton from '../components/ThemeToggleButton/ThemeToggleButton';

import { navLinks } from '../constants';

function NavBar({ currentTheme, changeTheme }) {
  const [showMenu, setShowMenu] = useState(false);

  let menu;

  if (showMenu) {
    menu = 
      <div className="mobile-nav-links">
        <div className="close-nav" onClick={() => setShowMenu(!showMenu)}>
          <FontAwesomeIcons icon="xmark" />
        </div>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <NavHashLink 
                smooth to={`#${link.id}`}
                onClick={() => setShowMenu(!showMenu)}
              >
                {link.title}
              </NavHashLink>
            </li>
          ))}
          <li>
            {/* Change theme:  */}
            <ThemeToggleButton currentTheme={currentTheme} changeTheme={changeTheme}/>
          </li>
        </ul>
      </div>
  }

  return(
    <>
      {menu}
      <nav className="navbar-container">
        <div className="navbar-items">
          <div className="navbar-logo">
            <Link 
              // smooth="true" 
              smooth to="/"
              onClick = {() => {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }}
            >
              <span>briannasharpe<span className="navbar-logo-dot">.</span></span>
            </Link>
          </div>
          
          {/* ---------------------------- MOBILE NAV BUTTON --------------------------- */}
          <div className="mobile-nav-toggle" onClick={() => setShowMenu(!showMenu)}>
            <span className="sr-only">Menu</span>
            <FontAwesomeIcons icon="bars" />
          </div>
          {/* ---------------------------- MOBILE NAV BUTTON --------------------------- */}

          <div className="navbar-links">
            <ul>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <NavHashLink smooth to={`#${link.id}`}>
                    {link.title}
                  </NavHashLink>
                </li>
              ))}
              <li>
                <ThemeToggleButton currentTheme={currentTheme} changeTheme={changeTheme}/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;