import React, { useState } from 'react';
import './App.css';
import Navbar from './components/HomePage/Navbar';
import HackathonList from './components/HomePage/HackathonList';

const App = () => {

  const eventsList = [
    { name: 'DeltaHacks' , description: "McMaster's premier hackathon", date : "March 31st"},
    { name: 'PennApps' , description: "America's biggest hackathon which attracts more than 1000 people from around the world", date :Date.now()},
  ]
  return (
    <div className="App">
      <Navbar />
      <p> Description/slogan about what this platform is about</p>
      <br/>
      <HackathonList eventsArray={eventsList}/>
      <hr/>
      <h3>Your active workbenches...</h3>
    </div>
  )
}

export default App;
