import './App.scss';

import { BrowserRouter } from 'react-router-dom';

import NavBar from './components/NavBar';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Intro />
        <About />
        <Projects />
        <Contact />
      
      </BrowserRouter>

    </>
  )
}

export default App
