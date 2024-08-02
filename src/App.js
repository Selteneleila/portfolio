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
      <About id="about" />
      <Skills id="skills" />
      <Education />
      <Projects id="projects" />
      <Footer id="footer" />
    </div>
  );
}

export default App;
