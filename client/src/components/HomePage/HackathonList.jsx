import React, { useState } from 'react';
import HackathonCard from './HackathonCard';

const HackathonList = ({ eventsArray }) => {
    return (
        <div className="hackathon-list">
            <h3>Current Hackathons...</h3>
            {eventsArray.map(event => {
                return (
                    <div>
                        <HackathonCard 
                            name = {event.name}
                            description = {event.description}
                            date = {event.date}
                            logo = {event.logo}
                        />
                    </div>
                )
            })}
        </div>
    )
}

export default HackathonList;