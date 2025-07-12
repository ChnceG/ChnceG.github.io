import { Element } from "react-scroll";
import ParticleBackground from "./components/ParticleBackground"
import Home from "./pages/Home"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import About from "./pages/About"
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {

  return (
      <div className="relative h-screen">
        <Navbar />
        <div className="relative z-10">
          <div className="absolute inset-0 -z-10">
            <ParticleBackground />
          </div>
        
          <Element name="home">
            <Home />
          </Element>

          <Element name="skills">
            <Skills />
          </Element>
          
          <Element name="projects">
            <Projects />
          </Element>

          <Element name="about">
            <About />
          </Element>

          <Element name="contact">
            <Contact />
          </Element>
          
          <Footer />
        </div>
      </div>
  )
}

export default App