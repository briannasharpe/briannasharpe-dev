import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classes from './InfoRow.module.scss';

function InfoRow({ icon, title, content }) {
  return(
    <>
      <div className={classes['info-row-container']}>
        <div className={classes['info-icon']}>
          {/* <i className={icon}></i> */}
          <FontAwesomeIcon icon={icon} />
        </div>
        <div className={classes['info-content']}>
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
}

export default InfoRow;






