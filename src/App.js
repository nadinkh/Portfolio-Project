
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Header from "./components/Header"
import Particles from "react-particles-js"
import AboutMe from './components/AboutMe'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Contacts from "./components/Contacts";
import TechSkills from "./components/TechSkills";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              },

            },
            shape: {
              type: "star",
              stroke: {
                width: 6,
                color: "#f9ab00"
              }
            },

          }
        }}


      />
      <div>
        <Navbar />
        <Header />
        <AboutMe />
        <TechSkills />
        <Experience />
        <Portfolio />
        <Contacts />
        <Footer />
      </div>
    </>
  );
}

export default App;
