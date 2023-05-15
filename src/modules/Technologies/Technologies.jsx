import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AdobeAfterEffects from '../Icons/AdobeAfterEffects';
import AdobeIllustrator from '../Icons/AdobeIllustrator';
import AdobePhotoshop from '../Icons/AdobePhotoshop';
import AdobePremiereProects from '../Icons/AdobePremierePro';
import Figma from '../Icons/Figma';
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

  /* ------------------------- CHECK FOR NON FA ICONS ------------------------- */

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
              {isHovering === false && <FontAwesomeIcon icon={tech.icon} />}
              {isHovering && <span>{tech.id}</span>}
              {/* <span>{tech.id}</span> */}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Technologies;