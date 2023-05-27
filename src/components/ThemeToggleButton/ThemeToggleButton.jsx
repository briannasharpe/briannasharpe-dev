import FontAwesomeIcons from '../Icons/FontAwesomeIcons';

import classes from './ThemeToggleButton.module.scss';

function ThemeToggleButton({ currentTheme, changeTheme }) {
  let icon = currentTheme === 'light' ? <FontAwesomeIcons icon="moon" /> : <FontAwesomeIcons icon="sun" />;

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