import MotionContainer from "./MotionContainer";
import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
      </section>
    <section id="About"><Parallax type="about"/></section>
    <section>About</section>
    <section id="Projects"><Parallax type="projects"/></section>
    <section>Project1</section>
    <section>Project2</section>
    <section>Project3</section>
    <section id="Skills">Skills</section>
    <section id="Resume">Resume</section>
    <section id="Contact">Contact</section>
    {/* <MotionContainer/> */}
  </div>;
};

export default App;
