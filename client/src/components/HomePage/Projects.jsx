import React from 'react';
import ProjectCard from "./ProjectCard";
import './Projects.css';

export default function Projects() {
    const projectList = [
        {
            title : "UN Peacekeeping Mission",
            description : "We are organizing a missionary trip to Morocco. Feel free to drop by and hang!",
            maxCap: 45,
            membersArray: ["Ali", "Samuel", "Kristen", "Devi", "Neville"],
            tags: ["social good", "world peace", "not actually hacking"]
        } , 
        {
            title: "E-commerce platform",
            description : "As basic as it gets. This is not a unique idea. You might as well go on the peacekeeping trip",
            maxCap: 5,
            membersArray: ["Joanne", "John", "Jell-O", "Jim"],
            tags: ["full-stack web development", "ux/ui", "e-commerce"]
        },
        {
            title: "Big complicated project which we won't finish",
            description: "This is a very long description This is a very long description This is a very long description This is a very long description This is a very long description This is a very long description This is a very long description This is a very long description",
            maxCap: 4,
            membersArray: ["Raymond"],
            tags: []
        }
    ]
    return (
        <div className="project-list">
            { projectList.map(({title, description, maxCap, membersArray, tags}) => {
                return (
                    <ProjectCard title={title} description={description} maxCap={maxCap} membersArray={membersArray} tags={tags}/>
                )
            })}
        </div>
    )
}
