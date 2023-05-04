import { useState, useEffect } from 'react';
// import Switch from 'react-switch';

import classes from './ThemeToggle.module.scss';

function ThemeToggle() {
  // const [theme, setTheme] = useState("light-theme");
  // const toggleTheme = () => {
    
  // }
  
  // useEffect(() => {}, []);
  
  let sun = "sun";
  let moon = "moon";

  const [dark, setDark] = useState(false);
  const [icon, setIcon] = useState(moon);

  let changeTheme = () => {
    setDark(!dark);

    if (dark === false) {
      setIcon(moon)
    } else {
      setIcon(sun)
    }
  }

  

  return(
    <>
      <span className={classes['toggle-container']} onClick={changeTheme}>
        {(dark) ? <i className="fa-solid fa-moon"></i> : <i className="fa-solid fa-sun"></i> }
        {console.log(dark)}
        {console.log(icon)}
      </span>


      {/* <i className="fa-solid fa-moon"></i>
      <i className="fa-solid fa-sun"></i> */}
    </>
  );
}

export default ThemeToggle;