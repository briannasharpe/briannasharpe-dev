// import React from 'react';

import { introLinks } from '../constants';

function Intro() {
  return(
    <>
      <section id="intro" className="intro-container">
        <div className="intro-content">
          <div className="intro-text">
            <h1>Hello! I'm</h1>
            <h1>Brianna Sharpe</h1>
            <p>I am a Front End Developer based in Los Angeles, California.</p>
            <div className="intro-links">
              <a href={introLinks[0].link} title={introLinks[0].id} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-github"></i>
              </a>
              <a href={introLinks[1].link} title={introLinks[1].id} target="_blank" rel="noreferrer">
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
          <div className="intro-pic">
            img
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;