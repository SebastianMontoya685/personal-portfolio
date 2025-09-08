import React from "react";
import NavBar from "./NavBar";
import ProjectShowcaseScroll from "./ProjectShowcaseScroll";
import "./ProjectShowcase.css";

function ProjectShowcase() {
    return (
        <div className="project-showcase" id="project-showcase">
            <NavBar />
            <div className="project-showcase-title">Finance App</div>
            <ProjectShowcaseScroll />
            
            <div className="project-showcase-description">
                A finance app that allows you to track your income and expenses.
                A finance app that allows you to track your income and expenses.
                A finance app that allows you to track your income and expenses.
                A finance app that allows you to track your income and expenses.
                A finance app that allows you to track your income and expenses.
            </div>
        </div>
    );
}

export default ProjectShowcase;