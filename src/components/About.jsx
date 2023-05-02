import classes from './About.module.scss';
// import React from 'react';
// import GithubSVG from './svg/GithubSVG';

function About() {
  return(
    <>
      new
      <section id="about" className="about-container">
        <div className="about-pic">
          img
        </div>
        <div className="about-text">
          <h1>header</h1>
          <p>I love to create responsive web applications that provide beautiful interfaces for a smooth user experience. Though I have been working on personal projects using React, I am eager to learn and work with other technologies. I want to apply my skills in a team setting and collaborate with other developers!</p>
          <p></p>
        </div>
      </section>
      
      old
      <section id="about-old" className={classes['about-container']}>
        <div className={classes['about-pic']}>
          img
        </div>
        <div className={classes['about-text']}>
          <h1>header</h1>
          <p>I love to create responsive web applications that provide beautiful interfaces for a smooth user experience. Though I have been working on personal projects using React, I am eager to learn and work with other technologies. I want to apply my skills in a team setting and collaborate with other developers!</p>
          <p></p>
        </div>
      </section>

      {/* <section id="about" className={[classes.about, classes['about-container'], classes['navbar-anchor']].join(' ')}>About</section> */}
    </>
  );
}

export default About;