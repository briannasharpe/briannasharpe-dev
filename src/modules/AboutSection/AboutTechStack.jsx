import Technologies from '../Technologies/Technologies';

import classes from './AboutTechStack.module.scss';

function AboutTechStack() {
  let languages = [
    {
      id: "HTML",
    },
    {
      id: "CSS",
    },
    {
      id: "Sass",
    },
    {
      id: "JavaScript",
    },
  ];

  let frameworks_libraries = [
    {
      id: "React",
    },
  ];

  let tooling_software = [
    {
      id: "VisualStudioCode",
    },
    {
      id: "Git",
    },
    {
      id: "AdobePhotoshop",
    },
    {
      id: "AdobeIllustrator",
    },
    {
      id: "AdobePremierePro",
    },
    {
      id: "AdobeAfterEffects",
    },
    {
      id: "Figma",
    },
  ];

  let services = [
    {
      id: "Github",
    },
  ];

  let platforms = [
    {
      id: "Windows",
    },
    {
      id: "Linux",
    },
    {
      id: "Ubuntu/Linux",
    },
  ];

  return(
    <>
      <div className={classes['tech-row']}>
        <h2>Languages</h2>
        <Technologies techArray={languages} size='2.5rem' />
      </div>
      <div className={classes['tech-row']}>
        <h2>Frameworks/Libraries</h2>
        <Technologies techArray={frameworks_libraries} size='2.5rem' />
      </div>
      <div className={classes['tech-row']} id={classes.tooling}>
        <h2>Tooling/Software</h2>
        <Technologies techArray={tooling_software} size='2.5rem' />
      </div>
      <div className={classes['tech-row']}>
        <h2>Services</h2>
        <Technologies techArray={services} size='2.5rem' />
      </div>
      <div className={classes['tech-row']}>
        <h2>Platforms</h2>
        <Technologies techArray={platforms} size='2.5rem' />
      </div>
    </>
  );
}

export default AboutTechStack;