function DarkModeToggle({ dark, toggleDark }) {
  return (
    <li className="nav-item">
      <button id="dark-mode-icon" onClick={toggleDark} title="Toggle Dark Mode">
        {dark ? (
          <img
            src="/portfolio/moon.svg"
            className="icon"
            alt="Enable Dark Mode"
          ></img>
        ) : (
          <img
            src="/portfolio/sun.svg"
            className="icon"
            alt="Enable Light Mode"
          ></img>
        )}
      </button>
    </li>
  );
}

export { DarkModeToggle };
