import Project from './Project';

function Projects() {
  return(
    <>
    <section id="projects" className="projects-container">
      <div className="projects-header">
        <h1>Projects</h1>
      </div>
      <div className="projects-content">
        <Project />

      </div>
    </section>
    </>
  );
}

export default Projects;