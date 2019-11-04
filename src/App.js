import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar.js";
import Sections from "./components/Sections/Sections";


function App() {
  return (
      <div className="App">
          <Navbar/>
          <Sections/>
      </div>
  );
}

export default App;
