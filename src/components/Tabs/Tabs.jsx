import { useState } from 'react';

import FontAwesomeIcons from '../Icons/FontAwesomeIcons';

import classes from './Tabs.module.scss';

function Tabs({ contentArray, currentTheme }) {
  /* ------------------------------- TAB TOGGLE ------------------------------- */
  const [toggle, setToggle] = useState(1);

  const updateToggle = (tabNum) => {
    setToggle(tabNum)
  }
  /* -------------------------------------------------------------------------- */


  /* -------------------------------- GET ICON -------------------------------- */
  const getIcon = (tab) => {
    switch(tab.title) {
      case 'About':
        return <FontAwesomeIcons icon="user-pen" />;
      case 'Tech':
        return <FontAwesomeIcons icon="code" />;
      }
  }
  /* -------------------------------------------------------------------------- */

  return(
    <>
      <div className={classes[`${currentTheme}`]}>
        <div className={classes['tabs-container']}>
          <ul className={classes['tabs-heading']}>
            {contentArray.map((tab) => (
              <li
                key={tab.id}
                className={toggle === tab.id ? classes['active'] : classes['inactive']}
                onClick={() => updateToggle(tab.id)}
              >
                <span>{tab.title}</span>
                {getIcon(tab)}
              </li>
            ))}
          </ul>
          {contentArray.map((tab) => (
            <div key={tab.id} className={toggle === tab.id ? classes['tabs-show-content'] : classes['tabs-content']}>
              {tab.content}
            </div>
          ))}
        </div>
    </div>
    </>
  );
}

export default Tabs;