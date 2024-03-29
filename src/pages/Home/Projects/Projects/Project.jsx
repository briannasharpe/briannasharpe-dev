
import Button from '../../../../components/Button/Button';
import Technologies from '../../../../components/Technologies/Technologies';

import classes from './Project.module.scss';

function Project({ img, name, description, tech, code, demo, currentTheme }) {
  return(
    <>
      <div className={classes[`${currentTheme}`]}>
        <div className={classes['project-container']}>
          {img && 
            <div className={classes['project-image']}>
              <img src={img}></img>
            </div>
          }
          <div className={classes['project-info']}>
            <h2>{name}</h2>
            <p>{description}</p>

            <div className={classes['project-tech-container']}>
              <Technologies 
                techArray={tech}
                size="2rem"
              />
            </div>

            <div className={classes['project-button-container']}>
              <Button 
                link={code}
                text="Code"
                title="code link"
                icon="github"
              />
              {demo && 
                <span id={classes['button-icon']}>
                  <Button 
                    link={demo}
                    text="Demo"
                    title="demo link"
                    icon="arrow-up-right-from-square"
                  />
                </span>
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;