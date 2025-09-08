import React from "react";
import './HeroSection.css';
import './Button.css';
import { useNavigate } from "react-router-dom";

function HeroSection() {
    const navigate = useNavigate();
    return (
          <div className="hero-content">
            <div>
                <h1>$ print(Sebastian. Montoya.)</h1>
                <button 
                className="button"
                onClick={() => navigate("/project-showcase")}>View My Projects</button>
                <button className="button" onClick={() => navigate("/project-showcase")}>View Professional Experience</button>
            </div>
          </div>
    );
}

export default HeroSection;