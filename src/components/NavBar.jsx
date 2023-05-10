import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import ThemeToggleButton from '../modules/ThemeToggleButton/ThemeToggleButton';

import { navLinks } from '../constants';

function NavBar({ currentTheme, changeTheme }) {
  return(
    <>
      <nav className="navbar-container">
        <div className="navbar-items">
          <div className="navbar-logo">
            <Link 
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

            {/* <div className={classes['navbar-links-mobile']}>
              <FontAwesomeIcon icon="fa-solid fa-bars" />
              <img
                src={toggle ? close : menu}
                alt="menu"
                className=""
                onClick={() => setToggle(!toggle)}
              />
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;