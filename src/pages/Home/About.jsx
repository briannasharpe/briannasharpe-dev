import Tabs from '../../components/Tabs/Tabs';
import AboutInfo from './About/AboutInfo';
import AboutTechStack from './About/AboutTechStack';

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
      icon: "fa-solid fa-user-pen",
      content: <AboutInfo />,
    },
    {
      id: 2,
      title: "Tech",
      icon: "fa-solid fa-code",
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
          {/* <div className="about-pic">
            img
          </div> */}
          {/* <div className="about-text"> */}
            <Tabs 
              contentArray={tabArray} 
              currentTheme={currentTheme}
              />
          {/* </div> */}
        </div>
      </section>
    </>
  );
}

export default About;