import './App.css';
import Education from './components/Education/Education';
import Home from "./components/Home/Home";
import Proficiency from './components/Proficiency/Proficiency';
import Skills from "./components/Skills/Skills";


function App() {
  return (
    <div>
      <Home/>
      <Skills/>
      <Proficiency/>
      <Education/>
    </div>
  );
}

export default App;
