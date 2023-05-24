import { useState, useEffect } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
              {/* <FontAwesomeIcon icon="fa-solid fa-circle-arrow-up" /> */}
              <i className="fa-solid fa-circle-arrow-up"></i>
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default BackToTopButton;