import { useState, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

// import { ThemeContext, ThemeProvider } from './context/ThemeContext'
import NavBar from './components/NavBar';
import Intro from './pages/Home/Intro';
import About from './pages/Home/About';
import Projects from './pages/Home/Projects';
import Contact from './pages/Home/Contact';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';

import './App.scss';

function App() {
  const [dark, setDark] = useState(false);
  const [theme, setTheme] = useState('light');
  // const [theme, setTheme] = useContext(ThemeContext);

// localStorage.setItem("theme", theme);
// console.log(localStorage.getItem("theme"))

// useEffect(() => {
//   setTheme(localStorage.getItem("theme"));
// }, []);

  return(
    <>
      <BrowserRouter>
      {/* <ThemeProvider> */}
        <div className={theme}>
            <NavBar 
              currentTheme={dark} 
              changeTheme={() => {
                setDark(!dark);
                (dark === true) ? setTheme('light') : setTheme('dark');
                // localStorage.setItem("theme", theme);
                // console.log(localStorage.getItem("theme"))
              }}
            />
            <Intro />
            <About currentTheme={theme} />
            <Projects currentTheme={theme} />
            <Contact />
            <BackToTopButton currentTheme={theme} />
          </div>
        {/* </ThemeProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App
