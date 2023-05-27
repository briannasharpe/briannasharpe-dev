import FontAwesomeIcons from '../Icons/FontAwesomeIcons';

import classes from './Button.module.scss';

function Button({ link, text, title, icon }) {
  return(
    <>
      <div className={classes.button}>
        <a href={link} title={title} target="_blank" rel="noreferrer">
          {text}
          <FontAwesomeIcons icon={icon} />
        </a>
      </div>
    </>
  );
}

export default Button;