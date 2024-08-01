import "./App.css";
import Banner from "./components/banner/Banner";
import Education from "./components/education/education";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="about">
        <Banner />
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
      <Footer id="footer" />
    </div>
  );
}

export default App;
