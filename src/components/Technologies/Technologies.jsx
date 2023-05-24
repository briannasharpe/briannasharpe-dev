import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AdobeAfterEffects from '../Icons/AdobeAfterEffects';
import AdobeIllustrator from '../Icons/AdobeIllustrator';
import AdobePhotoshop from '../Icons/AdobePhotoshop';
import AdobePremierePro from '../Icons/AdobePremierePro';
import Figma from '../Icons/Figma';
import Python from '../Icons/Python';
import VisualStudioCode from '../Icons/VisualStudioCode';

import { technologies } from '../../constants';

import classes from './Technologies.module.scss';


function Technologies({ techArray, size = '1.2rem' }) {
  /* --------------------------- SHOW NAMES ON HOVER -------------------------- */
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  /* -------------------------------------------------------------------------- */


  /* -------------------- GET TECH ARRAY FROM TECHNOLOGIES -------------------- */
  let finalTech = [];

  technologies.map((a) => {
    let matched = techArray.filter(b => a.id === b.id);
    if (matched.length) {
      finalTech.push(a);
  }});
  /* -------------------------------------------------------------------------- */


  /* -------------------------------------------------------------------------- */
  /*                             GET FA/NON-FA ICON                             */
  /* -------------------------------------------------------------------------- */
  const getIconType = (tech) => {
    if (tech.id === 'AdobeAfterEffects') {
      return <AdobeAfterEffects />
    } else if (tech.id === 'AdobeIllustrator') {
      return <AdobeIllustrator />
    } else if (tech.id === 'AdobePhotoshop') {
      return <AdobePhotoshop />
    } else if (tech.id === 'AdobePremierePro') {
      return <AdobePremierePro />
    } else if (tech.id === 'Figma') {
      return <Figma />
    } else if (tech.id === 'Python') {
      return <Python />
    } else if (tech.id === 'VisualStudioCode') {
      return <VisualStudioCode />
    } else {
      // return <FontAwesomeIcon icon={tech.icon} />
      return <i className={tech.icon}></i>
    }
  }
  /* -------------------------------------------------------------------------- */

  return(
    <>
      <div 
        className={classes.tech}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <ul>
          {finalTech.map((tech) => (
            <li
              key={tech.id}
              style={{color: tech.color, fontSize: size}}
            >
              {isHovering === false && getIconType(tech)}
              {isHovering && <span>{tech.id}</span>}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Technologies;