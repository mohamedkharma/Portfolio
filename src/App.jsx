import MotionContainer from "./MotionContainer";
import "./app.scss"
import About from "./components/about/About";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Projects from "./components/projects/Projects";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
      </section>
    <section id="About"><Parallax type="about"/></section>
    <section><About /></section>
    <section id="Projects"><Parallax type="projects"/></section>
    <Projects />
    <section id="Skills">Skills</section>
    <section id="Resume">Resume</section>
    <section id="Contact">Contact</section>
    {/* <MotionContainer/> */}
  </div>;
};

export default App;
