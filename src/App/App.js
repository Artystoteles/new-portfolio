import { useState } from "react";
import "./App.css";
//importing sections
import Navbar from "../Components/Navbar/Navbar";
import Hero from "../Sections/Hero/Hero";
function App() {
  const [lightMode, setLightMode] = useState(true);
  return (
    <div className="App">
      <Navbar mode={lightMode} changeMode={() => setLightMode(!lightMode)} />
      <Hero mode={lightMode} />
    </div>
  );
}

export default App;
