import classes from './Button.module.scss';

function Button({ link, text, title, icon }) {
  return(
    <>
      <div className={classes.button}>
        <a href={link} title={title} target="_blank" rel="noreferrer">
          {text}
          <i className={icon}></i>
        </a>
      </div>
    </>
  );
}

export default Button;