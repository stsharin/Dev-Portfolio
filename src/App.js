import './App.css';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import Home from "./components/Home/Home";
import Proficiency from './components/Proficiency/Proficiency';
import Projects from './components/Projects/Projects';
import Skills from "./components/Skills/Skills";


function App() {
  return (
    <div>
      <Home />
      <Skills />
      <Proficiency />
      <Education />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
