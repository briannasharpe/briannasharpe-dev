import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './ThemeToggleButton.module.scss';

function ThemeToggleButton({ currentTheme, changeTheme }) {
  let icon = currentTheme === 'light' ? <FontAwesomeIcon icon="fa-solid fa-moon" /> : <FontAwesomeIcon icon="fa-solid fa-sun" />;

  return(
    <>
      <div className={classes.toggle} onClick={changeTheme}>
        <span className="sr-only">Theme Toggle</span>
        {icon}
      </div>
    </>
  );
}

export default ThemeToggleButton;