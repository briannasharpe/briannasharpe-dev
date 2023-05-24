// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Button.module.scss';

function Button({ link, text, title, icon }) {
  return(
    <>
      <div className={classes.button}>
        <a href={link} title={title} target="_blank" rel="noreferrer">
          {text}
          {/* <FontAwesomeIcon icon={icon} /> */}
          <i className={icon}></i>
        </a>
      </div>
    </>
  );
}

export default Button;