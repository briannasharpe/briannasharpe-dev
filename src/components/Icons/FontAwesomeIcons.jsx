import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { 
  faDownload,
  faArrowUpRightFromSquare,
  faEnvelope,
  faLocationDot,
  faClock,
  faBars,
  faXmark,
  faCircleArrowUp,
  faPaperPlane,
  faUserPen,
  faCode,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';

import { 
  faGithub,
  faLinkedin,
  faHtml5,
  faCss3Alt,
  faSass,
  faSquareJs,
  faReact,
  faGitAlt,
  faWindows,
  faLinux,
  faUbuntu,
} from '@fortawesome/free-brands-svg-icons';

function FontAwesomeIcons({ icon }) {
  const getIcon = (icon) => {
    switch(icon) {
      /* ---------------------------------- SOLID --------------------------------- */
      case 'download':
        return <FontAwesomeIcon icon={faDownload} />;
      case 'arrow-up-right-from-square':
        return <FontAwesomeIcon icon={faArrowUpRightFromSquare} />;
      case 'envelope':
        return <FontAwesomeIcon icon={faEnvelope} />;
      case 'location-dot':
        return <FontAwesomeIcon icon={faLocationDot} />;
      case 'clock':
        return <FontAwesomeIcon icon={faClock} />;
      case 'bars':
        return <FontAwesomeIcon icon={faBars} />;
      case 'xmark':
        return <FontAwesomeIcon icon={faXmark} />;
      case 'circle-arrow-up':
        return <FontAwesomeIcon icon={faCircleArrowUp} />;
      case 'paper-plane':
        return <FontAwesomeIcon icon={faPaperPlane} />;
      case 'user-pen':
        return <FontAwesomeIcon icon={faUserPen} />;
      case 'code':
        return <FontAwesomeIcon icon={faCode} />;
      case 'moon':
        return <FontAwesomeIcon icon={faMoon} />;
      case 'sun':
        return <FontAwesomeIcon icon={faSun} />;
      /* --------------------------------- BRANDS --------------------------------- */
      case 'github':
      case 'Github':
        return <FontAwesomeIcon icon={faGithub} />;
      case 'linkedin':
        return <FontAwesomeIcon icon={faLinkedin} />;
      case 'HTML':
        return <FontAwesomeIcon icon={faHtml5} />;
      case 'CSS':
        return <FontAwesomeIcon icon={faCss3Alt} />
      case 'Sass':
        return <FontAwesomeIcon icon={faSass} />
      case 'JavaScript':
        return <FontAwesomeIcon icon={faSquareJs} />
      case 'React':
        return <FontAwesomeIcon icon={faReact} />
      case 'Git':
        return <FontAwesomeIcon icon={faGitAlt} />
      case 'Windows':
        return <FontAwesomeIcon icon={faWindows} />
      case 'Linux':
        return <FontAwesomeIcon icon={faLinux} />
      case 'Ubuntu/Linux':
        return <FontAwesomeIcon icon={faUbuntu} />
    }
  }

  return(
    <>
      {getIcon(icon)}
    </>
  );
}

export default FontAwesomeIcons;