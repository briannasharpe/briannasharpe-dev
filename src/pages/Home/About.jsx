import Tabs from '../../components/Tabs/Tabs';
import AboutInfo from './About/AboutInfo/AboutInfo';
import AboutTechStack from './About/AboutTechStack/AboutTechStack';

function About({ currentTheme }) {
  let tabArray = [
    // {
    //   id: ,
    //   title: "",
    //   icon: "",
    //   content: "",
    // },
    {
      id: 1,
      title: "About",
      icon: "user-pen",
      content: <AboutInfo />,
    },
    {
      id: 2,
      title: "Tech",
      icon: "code",
      content: <AboutTechStack currentTheme={currentTheme} />,
    },
  ]

  return(
    <>
      <section id="about" className="about-container">
        <div className="about-header">
          <h1>About Me</h1>
        </div>
        <div className="about-content">
          <Tabs 
            contentArray={tabArray} 
            currentTheme={currentTheme}
          />
        </div>
      </section>
    </>
  );
}

export default About;