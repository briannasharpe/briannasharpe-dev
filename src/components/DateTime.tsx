import { useState } from 'react';
import moment from 'moment';
import 'moment-timezone';

export function DateTime() {
  const timezone = 'America/Los_Angeles'
  
  const [currentTime, setCurrentTime] = useState(moment().tz(timezone).format('MMMM Do YYYY, h:mm:ss a'));

  const updateTime = () => {
    setCurrentTime(moment().tz(timezone).format('MMMM Do YYYY, h:mm:ss a'));
  }

  setInterval(updateTime, 1000);

  // let time = moment().tz(contactInfo[1].tz).format('MMMM Do YYYY, h:mm:ss a');
  
  // const [currentTime, setcurrentTime] = useState(time);

  // const updateTime = () => {
  //   let time = moment().tz(contactInfo[1].tz).format('MMMM Do YYYY, h:mm:ss a');
  //   setcurrentTime(time);
  // }

  // setInterval(updateTime, 1000);

  return(
    <>
      {currentTime}
    </>
  );
}
