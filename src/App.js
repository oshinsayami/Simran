import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from './components/Home'

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route exact path="/" component={Home} />
        </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
