import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

import classes from './ThemeToggleButton.module.scss';

function ThemeToggleButton() {
  const [dark, setDark] = useState(false);

  let icon = dark ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />;

  // const changeTheme = () => {

  //   const item = localStorage.getItem("theme");
  //   let theme;

  //   if (item === "light") {
  //     theme === "light";
  //     localStorage.setItem("theme", "light");
  //   } else {
  //     theme = "dark"
  //     localStorage.setItem("theme", "dark");
  //   }

  //   localStorage.setItem("theme", theme);
  //   document.body.className = localStorage.getItem("theme");
  // }
  
  return(
    <>
      <div className={classes.toggle} onClick={() => setDark(!dark)}>
        {icon}
        {/* { (dark === false) && <FontAwesomeIcon icon={faMoon} /> } */}
        {/* { (dark === true) && <FontAwesomeIcon icon={faSun} /> } */}
      </div>
    </>
  );
}

export default ThemeToggleButton;