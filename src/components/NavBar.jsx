// import classes from './NavBar.module.scss';
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

import classes from './NavBar.module.scss';
import { navLinks } from '../constants';

function NavBar() {
  const [active, setActive] = useState("");

  return(
    <>
    <nav className={classes['navbar-container']}>
      <div className={classes['navbar-items']}>
        <div className={classes['navbar-logo']}>
          <Link
            to="/"
            // className={classes['navbar-logo']}
            onClick = {() => {
              setActive("");
              window.scrollTo(0, 0)
            }}
          >
            <p>logo or name</p>
          </Link>

        </div>
        <div className={classes['navbar-links']}>
          <ul>
            {navLinks.map((link) => (
              <li
                key={link.id}
                className={classes.link}
                className={`${
                  active === link.title
                  ? "navbar-links-active"
                  : ""
                }`}
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
                {/* <NavLink to={`#${link.id}`} activeClassName={classes['navbar-links-active']}>{link.title}</NavLink> */}
                {/* <NavLink to={`#${link.id}`}>{link.title}</NavLink> */}
                
                {/* <NavLink to={`#${link.id}`} 
                //   className={({ isActive }) =>
                //   isActive ? "active" : ""
                // } 
                >{link.title}</NavLink> */}

                {/* <NavLink to={`#${link.id}`} 
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                  >{link.title}</NavLink> */}

                {/* <NavLink to={`#${link.id}`} 
                  // className={(state) => console.log(state)} // { isActive: true }
                  // className={({ isActive }) => (isActive.isActive ? 'active' : 'inactive')} end
                  // exact 
                //   className={(isActive) => {
                //     console.log(isActive.isActive);
                //     isActive.isActive === false ? console.log(isActive) : console.log("foo");
                // }}
                // end 
                // className={({isActive}) => //(isActive) --> ({isActive})
                //   (isActive ? "active" : "")
                // }
                className={({ isActive }) => isActive ? " active" : ""}
                activeStyle={"color: red"}
                >{link.title}</NavLink> */}

              </li>
            ))}
          </ul>
        </div>

        {/* <div className={classes['navbar-links']}>
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
                onClick={() => setActive(link.title)}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div> */}

      </div>
    </nav>
    </>
  );
}

export default NavBar;