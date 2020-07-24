import React from 'react'

export default function HackathonCard({ name, description, date, logo}) {
    return (
        <div className="hackathon-card">
            <div className="header">
                <img src={logo}></img>
                <h4>{name}</h4>
            </div>
            <p class="description">{description}</p>
            <div className="date-block">
                <h5> {date} </h5>
            </div>
        </div>
    )
}
