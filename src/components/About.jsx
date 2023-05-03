// import React from 'react';
import Button from '../modules/Button';

function About() {
  return(
    <>
      <section id="about" className="about-container">
        <div className="about-content">
          <div className="about-pic">
            img
          </div>
          <div className="about-text">
            <h1>About Me</h1>
            <p>I love to create responsive web applications that have beautiful interfaces for a smooth user experience. Though I have been working on personal projects using React, I am eager to learn and work with other technologies. I want to apply my skills in a team setting and collaborate with other developers!</p>
            {/* <p></p> */}
            <div className="about-links">
              <Button 
                link="/"
                text="Resume"
                title="resume link"
                icon="fa-solid fa-download"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;