import Button from '../../../components/Button/Button';

function AboutInfo() {
  return(
    <>
      {/* <h2></h2> */}
      <p>I love to create responsive web applications that have beautiful interfaces for a smooth user experience. Though I have been working on personal projects using React, I am eager to learn and work with other technologies. I want to apply my skills in a team setting and collaborate with other developers!</p>
      {/* <p></p> */}
      <div className="about-links">
        <Button 
          link="/"
          text="Resume"
          title="resume download link"
          icon="fa-solid fa-download"
        />
      </div>
    </>
  );
}

export default AboutInfo;