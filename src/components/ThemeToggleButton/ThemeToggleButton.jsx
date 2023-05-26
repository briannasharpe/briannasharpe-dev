import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'

import classes from './ThemeToggleButton.module.scss';

function ThemeToggleButton({ currentTheme, changeTheme }) {
  // let icon = currentTheme === 'light' ? <FontAwesomeIcon icon="fa-solid fa-moon" /> : <FontAwesomeIcon icon="fa-solid fa-sun" />;
  let icon = currentTheme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />;

  return(
    <>
      <div className={classes.toggle} onClick={changeTheme}>
        <span className="sr-only">Theme Toggle</span>
        {icon}
        {/* <i className="fa-solid fa-moon"></i>
        <i className="fa-solid fa-sun"></i> */}
      </div>
    </>
  );
}

export default ThemeToggleButton;