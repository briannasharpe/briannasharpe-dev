// import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { NavHashLink } from 'react-router-hash-link';

import { navLinks } from '../constants';
import ThemeToggleButton from '../modules/ThemeToggleButton/ThemeToggleButton';

function NavBar({ currentTheme, changeTheme }) {
  // const [active, setActive] = useState("");
  // const [toggle, setToggle] = useState(false);

//   useEffect(() => {
//     window.scroll(0, 0);
// }, []);

  return(
    <>
      <nav className="navbar-container">
        <div className="navbar-items">
          <div className="navbar-logo">
            <Link 
            smooth to="/"
              // className={classes['navbar-logo']}
              onClick = {() => {
                // setActive("");
                // window.scrollTo(0, 0)
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
                <li
                  key={link.id}
                  // className={classes.link}
                  // className={`${
                  //   active === link.title
                  //   ? "navbar-links-active"
                  //   : ""
                  // }`}
                  // onClick={() => setActive(link.title)}
                >
                  {/* <a href={`#${link.id}`}>{link.title}</a> */}

                  <NavHashLink 
                    smooth to={`#${link.id}`} 
                    // activeClassName={classes['navbar-links-active']} 
                    // activestyle={{ color: 'red' }}
                  >
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