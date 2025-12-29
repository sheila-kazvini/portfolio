import { useState } from "react";
import "/src/App.css";
import { DarkModeToggle } from "./DarkModeToggle";
function NavBar({ dark, toggle }) {
  const [scrolled, setScrolled] = useState(false);
  const defaultClasses = "navbar navbar-expand-lg sticky-top";
  const navClass = dark
    ? `${defaultClasses} bg-secondary`
    : `${defaultClasses}`;
  let navBarClasses = scrolled ? `${navClass} active` : `${navClass} navbar`;
  const changeBackground = () => {
    if (window.scrollY >= 145) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", changeBackground);
  return (
    <>
      <nav className={navBarClasses}>
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-supported-content"
            aria-controls="navbar-supported-content"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbar-supported-content"
          >
            <ul className="navbar-nav navbar-scroll me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#heading-about-me">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#heading-skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#heading-projects">
                  Projects
                </a>
              </li>
              <DarkModeToggle dark={dark} toggleDark={toggle}></DarkModeToggle>
            </ul>
            <ul className="navbar-nav" id="icons-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="mailto:sheilakazvini@gmail.com"
                  title="Email"
                  aria-label="Email"
                >
                  <img
                    src="/portfolio/email.svg"
                    className="icon"
                    aria-hidden="true"
                  ></img>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://linkedin.com/in/sheila-kz"
                  title="Connect On LinkedIn"
                  aria-label="LinkedIn"
                >
                  <img
                    src="/portfolio/linkedin-logo.svg"
                    className="icon"
                    aria-hidden="true"
                  ></img>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://github.com/sheila-kazvini"
                  title="Follow On GitHub"
                  aria-label="GitHub"
                >
                  <img
                    src="/portfolio/github.svg"
                    className="icon"
                    aria-hidden="true"
                  ></img>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export { NavBar };
