import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Intro from "./Components/Introduction";
import Navbar from './Components/Navbar';
import AboutMe from "./Components/AboutMe";
import Project from "./Components/Projects";
import Contact from "./Components/Contac";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <AboutMe/>
      <Project/>
      <Contact/>
    </div>
  );
}

export default App;
