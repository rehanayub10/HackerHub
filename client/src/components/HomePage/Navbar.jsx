import React from 'react';
import './Navbar.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import App from '../../App.js';
import Projects from '../HomePage/Projects';
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
           <div className="navbar">
                <div className="nav-header">
                    <h1>HackerHub</h1>
                </div>
                <ul className="nav-links">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/projects">Projects</a>
                    </li>
                    <li>Dashboard</li>
                    <li>Forum</li>
                </ul>
            </div>
    )
}

export default Navbar;