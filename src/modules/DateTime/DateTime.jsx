import { useState } from 'react';
import moment from 'moment';
import 'moment-timezone';

function DateTime() {
  let time = moment().tz("America/Los_Angeles").format('MMMM Do YYYY, h:mm:ss a');
  console.log(moment().tz("America/Los_Angeles").format('MMMM Do YYYY, h:mm:ss a'))
  
  const [currentTime, setcurrentTime] = useState(time);

  const updateTime = () => {
    let time = moment().tz("America/Los_Angeles").format('MMMM Do YYYY, h:mm:ss a');
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