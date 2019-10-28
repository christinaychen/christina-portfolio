import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home.js';
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
