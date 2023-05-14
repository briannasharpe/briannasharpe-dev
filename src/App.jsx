import { useState, useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

import NavBar from './components/NavBar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
// import { ThemeContext, ThemeProvider } from './context/ThemeContext'

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
          </div>
        {/* </ThemeProvider> */}
      </BrowserRouter>
    </>
  );
}

export default App
