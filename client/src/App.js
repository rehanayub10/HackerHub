import React, { useState } from 'react';
import './App.css';
import Navbar from './components/HomePage/Navbar';
import Home from "./components/HomePage/Home";
import Projects from "./components/HomePage/Projects";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <Router>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/projects" component={Projects}/>
      </Switch>
      </Router>
    </div>
  )
}

export default App;
