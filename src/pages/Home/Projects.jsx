import Tabs from '../../components/Tabs/Tabs';
import RecentProjects from './Projects/RecentProjects/RecentProjects';
import SchoolProjects from './Projects/SchoolProjects/SchoolProjects';

function Projects({ currentTheme }) {
  let tabArray = [
    // {
    //   id: ,
    //   title: "",
    //   icon: "",
    //   content: "",
    // },
    {
      id: 1,
      title: "Recent",
      icon: "wrench",
      content: <RecentProjects currentTheme={currentTheme} />,
    },
    {
      id: 2,
      title: "School",
      icon: "graduation-cap",
      content: <SchoolProjects currentTheme={currentTheme} />,
    },
  ]

  return(
    <>
      <section id="projects" className="projects-container">
        <div className="projects-header">
          <h1>Projects</h1>
        </div>
        <div className="projects-content">
          <Tabs 
            contentArray={tabArray} 
            currentTheme={currentTheme}
          />
        </div>
      </section>
    </>
  );
}

export default Projects;