import Topbar from "./components/topbar/Topbar";
import Intro from './components/intro/Intro';
import Skills from './components/skills/Skills';
import Footer from "./components/footer/Footer";
import './app.scss'
import {useState} from 'react';
import Menu from "./components/menu/Menu";
import Projects from "./components/projects/Projects";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen= {setMenuOpen} />
     <Menu menuOpen={menuOpen} setMenuOpen= {setMenuOpen} />
     <div className="sections">
       <Intro />
       <Skills />
       <Projects />
     </div>
        <div className='foot'>
          <Footer />
        </div>
    </div>
  );
}

export default App;
