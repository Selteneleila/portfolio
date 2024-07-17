import "./App.css";
import AboutMe from "./components/AboutMe";
import Banner from "./components/banner/Banner";
import Education from "./components/Education";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <AboutMe />
      <Skills />
      <Education />
      <Projects />
    </div>
  );
}

export default App;
