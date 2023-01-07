import React from 'react';
//import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import styles from "./index.css"


function App() {
  return(
    <div classNmae="App">
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Projects />
    </div>
  );
}

export default App;
