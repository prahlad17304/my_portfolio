import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/pages/Home";
import About from "./component/pages/About";
import Resume from "./component/pages/Resume";
import Blog from "./component/pages/Blog";
import Works from "./component/pages/Works";
import Contact from "./component/pages/Contact";
import bg from "./assets/bg.jpg"; // adjust path if needed

const App = () => {
  // Dark mode state
  const [darkMode, setDarkMode] = useState(
    () =>
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

  return (
    <div
      className="min-h-screen w-full bg-center bg-cover bg-no-repeat transition-colors duration-300 dark:bg-[#181824]"
      style={{
        backgroundImage: darkMode
          ? undefined // let Tailwind provide dark background, or set a dark image here
          : `url(${bg})`
      }}
    >
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/works" element={<Works />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;


