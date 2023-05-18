import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { introLinks } from '../constants/sensitive';

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
                <FontAwesomeIcon icon="fa-brands fa-github" />
              </a>
              <a href={introLinks[1].link} title={introLinks[1].id} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon="fa-brands fa-linkedin" />
              </a>
            </div>
          </div>
          <div className="intro-pic">
            <img src="https://media.licdn.com/dms/image/C5603AQG94jKcoa5tTA/profile-displayphoto-shrink_800_800/0/1649988876583?e=1689811200&v=beta&t=uBPeZFBmm1-iWRyTsF3l5iaw0g3X49dZyLHuWhUY9AU" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Intro;