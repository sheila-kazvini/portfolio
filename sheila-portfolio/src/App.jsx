import { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { getProjects } from "./project-accessor";
import { ProjectTable } from "./components/ProjectTable";
import { NavBar } from "./components/NavBar";

import "./App.css";

function App() {
  function toggleDark() {
    setDarkMode(!darkMode);
  }
  let projects = getProjects();
  const [darkMode, setDarkMode] = useState(false);
  // dynamic classes - default classes for each element
  // append the dark mode class if darkMode is true
  const containerClasses = darkMode
    ? "container darkMode"
    : "container lightMode";
  const tableClasses = darkMode
    ? "table table-striped darkMode"
    : "table table-striped lightMode";
  const navClass = darkMode ? "darkMode" : "lightMode";
  return (
    <>
      <header className="text-center">
        <div id="lead-text">
          <h1 className="display-4">Sheila Kazvini</h1>
          <p className="lead">
            Junior Full-Stack Software Developer based in Saint John, New
            Brunswick
          </p>
        </div>
      </header>
      <NavBar className={navClass} dark={darkMode} toggle={toggleDark}></NavBar>
      <main>
        <div className={containerClasses} id="container">
          <div className="block">
            <h2 id="heading-about-me">About Me</h2>
            <div id="about-me">
              <div id="blurb" className={navClass}>
                <p id="about-me-paragraph">
                  Hey there! I'm Sheila, a student full-stack software developer
                  living in Saint John, New Brunswick, CA.{" "}
                </p>
                <p>
                  I am currently in my second year of the Software Dev program
                  at NBCC, graduating in June 2026. My goal is to write
                  <strong>
                    &nbsp;efficient and robust code that follows best practices
                    and prioritizes a positive user experience.
                  </strong>
                </p>
                <p>
                  My most cherished skills are my ability to solve problems, my
                  persistence, and my interpersonal skills. I am most proficient
                  in C# and JavaScript, and using the MERN (MongoDB, Express,
                  React.js, Node.js) stack to write basic apps, with basic
                  working proficiency in Java and C++.
                </p>
                <p>
                  My hobbies include programming (of course!) with an interest
                  in embedded systems and game development, drawing digital
                  artwork (including pixel art), gaming, and photography.
                </p>
              </div>
              <img
                src="/portfolio/headshot-circle.jpg"
                id="headshot"
                alt="Headshot of a woman with brown hair in a black jacket and black top"
              ></img>
            </div>
          </div>
          <hr></hr>
          <section>
            <div className="block">
              <h2 id="heading-skills">I am comfortable working with...</h2>
              <div id="logos">
                <img src="/portfolio/cs.svg" id="cs-logo" alt="C# logo"></img>
                <img
                  src="/portfolio/cpp.png"
                  id="cpp-logo"
                  alt="C++ logo"
                ></img>
                <img
                  src="/portfolio/mern.png"
                  id="mern-pic"
                  alt="MERN image"
                ></img>
                <img
                  src="/portfolio/arduion.png"
                  id="ard-logo"
                  alt="Arduino logo"
                ></img>
                <img
                  src="/portfolio/springboot.svg"
                  id="spr-logo"
                  alt="Spring Boot logo"
                ></img>
                <img
                  src="/portfolio/PHP-logo.svg"
                  id="php-logo"
                  alt="PHP logo"
                ></img>
                <img
                  src="/portfolio/git.png"
                  id="git-logo"
                  alt="Git logo"
                ></img>
              </div>
              <p className="lead text-center" id="learn-blurb">
                and always willing to push forward + learn new frameworks,
                languages, and skills
              </p>
            </div>
          </section>
          <hr></hr>
          <section>
            <div className="block">
              <div id="projects-div">
                <h2 id="heading-projects">Projects</h2>
                <p id="project-blurb" className={navClass}>
                  The following table shows the list of some projects that I
                  completed in my Fall 2025 semester in the Software Development
                  program. At my instructors' request, the code is only
                  available to employers upon request, rather than publicly
                  available on GitHub :)
                </p>
                <ProjectTable
                  projArray={projects}
                  className={tableClasses}
                ></ProjectTable>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
