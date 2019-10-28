import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import Sections from "./components/Sections/Sections";
import ScrollTransitions from "react-scroll-transitions";
import Example from "./components/AnimatedSections";
import {render} from "react-dom";

function App() {
  return (
      <div className="App">
          <Navbar/>
          <Sections/>
          {/*render(<Example />);*/}
      </div>
  );
}

export default App;
