import { useState } from 'react';

import SunIcon from '../Icons/SunIcon';
import MoonIcon from '../Icons/MoonIcon';

import classes from './ThemeToggleButton.module.scss';

function ThemeToggleButton() {
  const [dark, setDark] = useState(false);

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

  // let icon = dark ? <SunIcon /> : <MoonIcon />;
  
  return(
    <>
      <span className={classes.toggle} onClick={() => setDark(!dark)}>
        {console.log(dark)}
        {/* {icon} */}

        {/* { (dark === false) && <MoonIcon /> } */}
        {/* { (dark === true) && <SunIcon /> } */}
        { (dark === false) && 'a' }
        { (dark === true) && 'b' }
        
      </span>
    </>
  );
}

export default ThemeToggleButton;