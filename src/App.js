import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Topbar from './components/topbar/Topbar';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import Project from './components/projects/Project';
import Home from './components/home/Home'
import './app.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Topbar />
        <div className="sections">
          <Home/>
          <Intro />
          <Project />
          <Contact />
        </div>
      </div>
    </Router>
    
  );
}

export default App;
