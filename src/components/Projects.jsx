import Project from './Project';

import classes from './Projects.module.scss';

function Projects() {
  return(
    <>
    new
    <section id="projects" className="projects-container">
        <div className="projects-header">
          <h1>Projects</h1>
        </div>
        <Project />
      </section>

      old
      <section id="projects-old" className={classes['projects-container']}>
        <div className={classes['projects-header']}>
          <h1>Projects</h1>
        </div>
        <Project />
      </section>
    </>
  );
}

export default Projects;