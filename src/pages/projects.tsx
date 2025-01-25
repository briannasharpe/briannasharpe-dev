import { Project } from "@/components/Project";
import { projectInfo } from "@/data/projects";

function Projects() {

  return (
    <section className="px-8">
      <div className="text-4xl font-bold pb-4">
        <h1>projects</h1>
      </div>
      <p>to be updated soon!</p>
      {/* {projectInfo.map((project, index) => (
        <Project 
          key={index}
          projectTitle={project.title}
          projectDescription={project.description}
          projectTech={project.tech}
          projectLink={project.link}
        />
      ))} */}
    </section>
  )
}

export default Projects
