import React from "react";
import './HomePageBody.css';

function HomePageBody() {
    return (
        <div className="project-container">
            <div className="project-container-1">
                <div className="project-container-1-text" style={{ width: "50%" }}>
                    <h1>Hey this is a nice project</h1>
                    <div className="project-container-1-paragraph-text">
                        <p>This is a nice project</p>
                        <p>This is a nice project</p>
                        <p>This is a nice project</p>
                        <p>This is a nice project</p>
                    </div>
                </div>
                <img src="/project-1_image.jpg" alt="project-1-image" style={{ width: "50%", borderRadius: "12px" }}/>
            </div>  
            <div className="project-container-2">
                <img src="/project-1_image.jpg" alt="project-1-image" style={{ width: "50%", borderRadius: "12px" }}/>
                <div style={{ width: "50%", textAlign: "center" }}>Hey this is a nice project</div>
            </div>
            </div>
    );
}

export default HomePageBody;