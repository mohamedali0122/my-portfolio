import "./App.css";
import { useState, useRef } from "react";
import Maincontanr from "./componets/Maincontanr";
import About from "./componets/About";
import Skills from "./componets/Skills";
import Services from "./componets/Services";
import Projects from "./componets/Projectas";
import Contactus from "./componets/Contactus";
import Info from "./componets/Info";
import WelcomePage from "./componets/Welcomepage";
function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);

  const [darkMode, setDarkMode] = useState(false);

  const handelDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={` flex-col space-y-4 ${
        darkMode ? "bg-darkbg pb-0" : "bg-primaryblue pb-10"
      } `}
    >
      <WelcomePage />
      <Maincontanr
        scrollToAbout={() =>
          aboutRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
        scrollToServices={() =>
          servicesRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
        scrollToproject={() =>
          projectRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
        scrollToContact={() =>
          contactRef.current.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
        handelDarkMode={handelDarkMode}
        darkMode={darkMode}
      />
      <div className="order-2" ref={aboutRef}>
        <About darkMode={darkMode} />
      </div>
      <div className="order-3">
        <Skills darkMode={darkMode} />
      </div>
      <div className="order-4" ref={servicesRef}>
        <Services darkMode={darkMode} />
      </div>
      <div className="order-5" ref={projectRef}>
        <Projects darkMode={darkMode} />
      </div>
      <div className="order-6" ref={contactRef}>
        <Contactus darkMode={darkMode} />
      </div>

      <div className="order-7">
        <Info darkMode={darkMode} />
      </div>
    </div>
  );
}

export default App;
