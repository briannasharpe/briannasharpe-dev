import classes from './About.module.scss';
// import React from 'react';

function About() {
  return(
    <>
      <section id="about" className={classes.about}>About</section>
      {/* <section id="about" className={[classes.about, classes['about-container'], classes['navbar-anchor']].join(' ')}>About</section> */}
    </>
  );
}

export default About;