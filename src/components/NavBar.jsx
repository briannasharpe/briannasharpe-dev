import React, { useState, useEffect } from 'react';
import { Link, NavLink, Route } from 'react-router-dom';
import { HashLink, NavHashLink } from 'react-router-hash-link';

import { navLinks } from '../constants';

function NavBar() {
  const [active, setActive] = useState("");
  // const [toggle, setToggle] = useState(false);

  useEffect(() => {
    window.scroll(0, 0);
}, []);

  return(
    <>
      <nav className="navbar-container">
        <div className="navbar-items">
          <div className="navbar-logo">
            <HashLink smooth
              to="/"
              // className={classes['navbar-logo']}
              onClick = {() => {
                setActive("");
                // window.scrollTo(0, 0)
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                })
              }}
            >
              <p>briannasharpe.</p>
            </HashLink>
          </div>
          <div className="navbar-links">
            {/* <ul>
              {navLinks.map((link) => (
                <span
                  key={link.id}
                  // className={classes.link}
                  // className={`${
                  //   active === link.title
                  //   ? "navbar-links-active"
                  //   : ""
                  // }`}
                  onClick={() => setActive(link.title)}
                > */}
                  {/* <a href={`#${link.id}`}>{link.title}</a> */}

                  {/* <NavHashLink 
                    smooth to={`#${link.id}`} 
                    // activeClassName={classes['navbar-links-active']} 
                    // activestyle={{ color: 'red' }}
                  >
                    {link.title}
                  </NavHashLink>

                </span>
              ))}
              <span className={classes.theme}>
                <FontAwesomeIcon icon={faMoon} />
              </span>
            </ul> */}

            
            {navLinks.map((link) => (
                <span
                  key={link.id}
                  // className={classes.link}
                  // className={`${
                  //   active === link.title
                  //   ? "navbar-links-active"
                  //   : ""
                  // }`}
                  onClick={() => setActive(link.title)}
                >
                  {/* <a href={`#${link.id}`}>{link.title}</a> */}

                  <NavHashLink 
                    smooth to={`#${link.id}`} 
                    // activeClassName={classes['navbar-links-active']} 
                    // activestyle={{ color: 'red' }}
                  >
                    {link.title}
                  </NavHashLink>

                </span>
              ))}
            <span className="theme">
              <i className="fa-solid fa-moon"></i>
            </span>


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