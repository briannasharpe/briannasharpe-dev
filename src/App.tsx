import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home'
import Projects from './pages/projects'
import PageNotFound from './pages/404';
import { Header } from '@/components/Header.tsx'

function App() {

  return (
    <div className="mx-auto min-h-screen max-w-4xl px-8 text-lg">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
