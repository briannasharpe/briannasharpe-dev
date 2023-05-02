import classes from './Project.module.scss';

function Project({ project }) {
  return(
    <>
      <div className={classes['project-container']}>
        <div className={classes['project-image']}>
          <img src="https://cdn.shopify.com/s/files/1/2420/2037/files/Kep1er_4th_Mini_Album_-_LOVESTRUCK_INFO_STRIP_NO_POSTER.png?v=1679585478"></img>
        </div>
        <div className={classes['project-info']}>
          <h1>Project Title</h1>
          <p>Project description. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi consequuntur iste, maiores distinctio earum inventore ducimus dolore consequatur fuga, explicabo, voluptatem ab maxime facilis repellat vitae libero illo temporibus necessitatibus!</p>
        </div>
        <div className={classes['project-button-container']}>
          <a href="/#projects">
            Code
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="/#projects">
            Demo
            <i className="fa-solid fa-arrow-up-right-from-square"></i>
          </a>
        </div>
      </div>
    </>
  );
}

export default Project;