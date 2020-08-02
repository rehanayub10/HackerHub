import React from 'react';
import HackathonList from '../HomePage/HackathonList';
import './Home.css';

export default function Home() {
    const eventsList = [
        { name: 'DeltaHacks' , description: "McMaster's premier hackathon", date : "March 31st"},
        { name: 'PennApps' , description: "America's biggest hackathon which attracts more than 1000 people from around the world", date :Date.now()},
      ]

    return (
        <div className="home">
            <p> Description/slogan about what this platform is about</p>
            <br/>
            <HackathonList eventsArray={eventsList}/>
            <hr/>
            <h3>Your active workbenches...</h3>
        </div>
    )
}
