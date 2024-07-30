import "./App.css";
import Banner from "./components/banner/Banner";
import Education from "./components/education/education";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar id="navbar" />
      <Banner id="banner" />
      <Skills id="skills" />
      <Education id="education" />
      <Projects id="projects" />
    </div>
  );
}

export default App;
