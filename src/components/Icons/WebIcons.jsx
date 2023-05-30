import AdobeAfterEffects from '../Icons/WebIcons/AdobeAfterEffects';
import AdobeIllustrator from '../Icons/WebIcons/AdobeIllustrator';
import AdobePhotoshop from '../Icons/WebIcons/AdobePhotoshop';
import AdobePremierePro from '../Icons/WebIcons/AdobePremierePro';
import Figma from '../Icons/WebIcons/Figma';
import Python from '../Icons/WebIcons/Python';
import VisualStudioCode from '../Icons/WebIcons/VisualStudioCode';

import Express from './WebIcons/Express';
import MongoDB from './WebIcons/MongoDB';
import Flask from './WebIcons/Flask';
import Dart from './WebIcons/Dart';
import Flutter from './WebIcons/Flutter';
import Firebase from './WebIcons/Firebase';

function WebIcons({ icon }) {
  const getIcon = (icon) => {
    switch(icon) {
      case 'AfterEffects':
        return <AdobeAfterEffects />
      case 'Illustrator':
        return <AdobeIllustrator />
      case 'Photoshop':
        return <AdobePhotoshop />
      case 'PremierePro':
        return <AdobePremierePro />
      case 'Figma':
        return <Figma />
      case 'Python':
        return <Python />
      case 'VSCode':
        return <VisualStudioCode />
      /* ---------------------------------- TEMP ---------------------------------- */
      case 'Express':
        return <Express />
      case 'MongoDB':
        return <MongoDB />
      case 'Flask':
        return <Flask />
      case 'Docker':
        return <Flask />
      case 'Dart':
        return <Dart />
      case 'Flutter':
        return <Flutter />
      case 'Firebase':
        return <Firebase />
    }
  }

  return(
    <>
      {getIcon(icon)}
    </>
  );
}

export default WebIcons;