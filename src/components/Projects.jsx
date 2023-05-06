import Project from '../modules/Project/Project';
import { projectData } from '../constants';

function Projects({ currentTheme }) {
  return(
    <>
      <section id="projects" className="projects-container">
        <div className="projects-header">
          <h1>Projects</h1>
        </div>
        <div className="projects-content">
          {projectData.map((project) => (
            <Project 
              key={project.id}
              img={project.image} 
              name={project.name}
              description={project.description}
              code={project.code}
              demo={project.demo}
              currentTheme={currentTheme}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;