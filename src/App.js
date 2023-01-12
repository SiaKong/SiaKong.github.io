import React, { useState } from 'react';
//import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import About from './pages/About'
import Resume from './pages/Resume'
import Projects from './pages/Projects'
import styles from "./index.css"
import "animate.css/animate.min.css";
import { Helmet } from 'react-helmet';


function App() {
  return(
    <div classNmae="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Siana's Portfolio</title>
        <link rel="canonical" href="https://siakong.github.io/" />
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Navbar />
      <Home />
      <About />
      <Resume />
      <Projects />
    </div>
  );
}

export default App;
