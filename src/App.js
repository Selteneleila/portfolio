import "./App.css";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="education">
        <Education />
      </div>
      <div id="projects">
        <Projects />
      </div>

      <Footer />
    </div>
  );
}

export default App;
