import "./App.css";
import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="App">
      <Banner />
      <AboutMe />
      <Skills />
      <Education />
      <Projects />
    </div>
  );
}

export default App;
