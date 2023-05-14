import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './Tabs.module.scss';

function Tabs({ contentArray, currentTheme }) {
  const [toggle, setToggle] = useState(1);

  const updateToggle = (tabNum) => {
    setToggle(tabNum)
  }

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
              <FontAwesomeIcon icon={tab.icon} />
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