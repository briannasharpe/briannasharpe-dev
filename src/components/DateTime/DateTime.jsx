import { useState } from 'react';
import moment from 'moment';
import 'moment-timezone';

import { contactInfo } from '../../constants/misc';

function DateTime() {
  let time = moment().tz(contactInfo[1].tz).format('MMMM Do YYYY, h:mm:ss a');
  
  const [currentTime, setcurrentTime] = useState(time);

  const updateTime = () => {
    let time = moment().tz(contactInfo[1].tz).format('MMMM Do YYYY, h:mm:ss a');
    setcurrentTime(time);
  }

  setInterval(updateTime, 1000);

  return(
    <>
      {currentTime}
    </>
  );
}

export default DateTime;