// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Technologies from '../Technologies/Technologies';

import { technologies } from '../../constants';

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
      id: "Git",
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
    {/* <h2>as</h2> */}
      Languages
      <Technologies techArray={languages} size='2.5rem' />
      Frameworks/Libraries
      <Technologies techArray={frameworks_libraries} size='2.5rem' />
      Tooling/Software
      <Technologies techArray={tooling_software} size='2.5rem' />
      Services
      <Technologies techArray={services} size='2.5rem' />
      Platforms
      <Technologies techArray={platforms} size='2.5rem' />
    </>
  );
}

export default AboutTechStack;