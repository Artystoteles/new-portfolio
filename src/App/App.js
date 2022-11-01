import { useState } from "react";
import "./App.css";
//importing sections
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Sections/Hero/Hero";
import About from "../Sections/About/About";
import Projects from "../Sections/Projects/Projects";
import ContactMe from "../Sections/ContactMe/ContactMe";
import Footer from "../Components/Footer/Footer";
function App() {
  const [themes, setThemes] = useState("light");

  const switchTheme = () => {
    const newTheme = themes === "light" ? "dark" : "light";
    setThemes(newTheme);
  };
  return (
    <div className="App" data-theme={themes}>
      <Navbar theme={themes} handleTheme={switchTheme} />
      <Hero theme={themes} />
      <About />
      <Projects theme={themes} />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
