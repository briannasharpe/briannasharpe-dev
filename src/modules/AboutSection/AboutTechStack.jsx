// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Technologies from '../Technologies/Technologies';

import { technologies } from '../../constants';

import classes from './AboutTechStack.module.scss';

function AboutTechStack() {
  return(
    <>
    {/* <h2>as</h2> */}
      lang
      <Technologies techArray={technologies} size='2.5rem' />
    </>
  );
}

export default AboutTechStack;