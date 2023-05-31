import Project from '../Projects/Project';

import { wipProjectData } from '../../../../constants';

import classes from '../Projects.module.scss';

function WIPProjects({ currentTheme }) {
  return(
    <>
      <div className={classes['projects-tabs']}>
        {wipProjectData.map((project) => (
          <Project 
            key={project.id}
            img={project.image} 
            name={project.name}
            description={project.description}
            tech={project.technologies}
            code={project.code}
            demo={project.demo}
            currentTheme={currentTheme}
          />
        ))}
      </div>
    </>
  );
}

export default WIPProjects;