import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="nav-header">
                <h1>HackerHub</h1>
            </div>
            <ul className="nav-links">
                <li>Home</li>
                <li>Dashboard</li>
                <li>Projects</li>
                <li>Forum</li>
            </ul>
        </div>
    )
}

export default Navbar;