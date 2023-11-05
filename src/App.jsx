import MotionContainer from "./MotionContainer";
import "./app.scss"
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return <div>
    <section id="Homepage">
      <Navbar/>
      <Hero/>
      </section>
    <section>Parallax</section>
    <section id="About">About</section>
    <section id="Projects">Parallax</section>
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
