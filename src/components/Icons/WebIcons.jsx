import AdobeAfterEffects from '../Icons/WebIcons/AdobeAfterEffects';
import AdobeIllustrator from '../Icons/WebIcons/AdobeIllustrator';
import AdobePhotoshop from '../Icons/WebIcons/AdobePhotoshop';
import AdobePremierePro from '../Icons/WebIcons/AdobePremierePro';
import Figma from '../Icons/WebIcons/Figma';
import Python from '../Icons/WebIcons/Python';
import VisualStudioCode from '../Icons/WebIcons/VisualStudioCode';

function WebIcons({ icon }) {
  const getIcon = (icon) => {
    switch(icon) {
      // case 'AdobeAfterEffects':
      case 'AfterEffects':
        return <AdobeAfterEffects />
        // case 'AdobeIllustrator':
      case 'Illustrator':
        return <AdobeIllustrator />
        // case 'AdobePhotoshop':
      case 'Photoshop':
        return <AdobePhotoshop />
        // case 'AdobePremierePro':
      case 'PremierePro':
        return <AdobePremierePro />
      case 'Figma':
        return <Figma />
      case 'Python':
        return <Python />
      case 'VSCode':
        return <VisualStudioCode />
    }
  }

  return(
    <>
      {getIcon(icon)}
    </>
  );
}

export default WebIcons;