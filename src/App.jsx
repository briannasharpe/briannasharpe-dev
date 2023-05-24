import { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ThemeContext } from './context/ThemeContext'
import NavBar from './components/NavBar';
import Intro from './pages/Home/Intro';
import About from './pages/Home/About';
import Projects from './pages/Home/Projects';
import Contact from './pages/Home/Contact';
import BackToTopButton from './components/BackToTopButton/BackToTopButton';

import './App.scss';

function App() {
  const { theme, setTheme } = useContext(ThemeContext);

  return(
    <>
      <BrowserRouter>
        <div className={theme}>
            <NavBar 
              currentTheme={theme}
              changeTheme={() => {
                setTheme(theme === 'light' ? 'dark' : 'light');
              }}
            />
            <Intro />
            <About currentTheme={theme} />
            <Projects currentTheme={theme} />
            <Contact />
            <BackToTopButton currentTheme={theme} />
          </div>
      </BrowserRouter>
    </>
  );
}

export default App
