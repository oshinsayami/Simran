import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Topbar from './components/topbar/Topbar';


function App() {
  return (
    <Router>
      <div className="app">
        <Topbar/>
      Hello
    </div>
    </Router>
    
  );
}

export default App;
