import classes from './Squares.module.scss';

function Squares({ heading, content, currentTheme }) {
  return(
    <>
      <div className={classes[`${currentTheme}`]}>
        <div className={classes['squares-container']}>
          <h2>{heading}</h2>
          <span>{content}</span>
        </div>
      </div>
    </>
  );
}

export default Squares;