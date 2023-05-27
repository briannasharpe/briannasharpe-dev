import { useState, useEffect } from 'react';
import FontAwesomeIcons from '../Icons/FontAwesomeIcons';

import classes from './BackToTopButton.module.scss';

function BackToTopButton({ currentTheme }) {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return(
    <>
      <div className={classes[`${currentTheme}`]}>
        <div className={classes['back-to-top-button']}>
          {backToTopButton && (
            <button onClick={scrollUp}>
              <span className="sr-only">Back to top</span>
              <FontAwesomeIcons icon="circle-arrow-up" />
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default BackToTopButton;