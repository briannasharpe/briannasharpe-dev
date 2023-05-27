import { useState } from 'react';

import FontAwesomeIcons from '../Icons/FontAwesomeIcons';
import WebIcons from '../Icons/WebIcons';

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


  /* --------------------------- GET FA/NON-FA ICON --------------------------- */
  const getIconType = (tech) => {
    switch(tech.id) {
      case 'HTML':
      case 'CSS':
      case 'Sass':
      case 'JavaScript':
      case 'React':
      case 'Git':
      case 'Github':
      case 'Windows':
      case 'Linux':
      case 'Ubuntu/Linux':
        return <FontAwesomeIcons icon={tech.id} />
      // case 'AdobeAfterEffects':
      // case 'AdobeIllustrator':
      // case 'AdobePhotoshop':
      // case 'AdobePremierePro':
      case 'AfterEffects':
      case 'Illustrator':
      case 'Photoshop':
      case 'PremierePro':
      case 'Figma':
      case 'Python':
      case 'VSCode':
      // case 'VisualStudioCode':
        return <WebIcons icon={tech.id} />
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