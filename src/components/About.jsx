import Tabs from '../modules/Tabs/Tabs';
import AboutInfo from '../modules/AboutSection/AboutInfo';
import AboutTechStack from '../modules/AboutSection/AboutTechStack';

function About({ currentTheme }) {
  let tabArray = [
    // {
    //   id: "",
    //   icon: "",
    //   tabNum: 0,
    //   content: "",
    // },
    {
      id: 1,
      icon: "fa-solid fa-user-pen",
      // tabNum: 1,
      content: <AboutInfo />,
    },
    {
      id: 2,
      icon: "fa-solid fa-code",
      // tabNum: 2,
      content: <AboutTechStack />,
    },
  ]

  return(
    <>
      <section id="about" className="about-container">
        <div className="about-content">
          {/* <div className="about-pic">
            img
          </div> */}
          <div className="about-text">
            <h1>About Me</h1>
            <Tabs 
              contentArray={tabArray} 
              currentTheme={currentTheme}
              />
          </div>
        </div>
      </section>
    </>
  );
}

export default About;