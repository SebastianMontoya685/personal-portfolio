import React from "react";
import { useState } from "react";
import "./ProjectShowcaseScroll.css";

function ProjectShowcaseScroll() {
    const images = [
        {title:"Project 1", image: "carousel_image_1.jpg"},
        {title:"Project 2", image: "carousel_image_2.jpg"},
        {title:"Project 3", image: "carousel_image_3.jpg"}
    ]

    // A state tracker.
    const [currentImage, setCurrentImage] = useState(0);
    
    // Function to move to the next image.
    const moveToNextImage = () => {
        setCurrentImage((currentImage) => (currentImage + 1) % images.length);
    }

    const moveToPreviousImage = () => {
        setCurrentImage((currentImage) => (currentImage - 1 + images.length) % images.length);
    }

    return (
        <div className="carousel-container">
            <button className="carousel-button" onClick={moveToPreviousImage}>{"<"}</button>
            <div className="carousel-slide">
                <h3>{images[currentImage].title}</h3>
                <div className="carousel-image-container">
                    <img className="carousel-image" src={`/${images[currentImage].image}`} alt={images[currentImage].title} />
                </div>
                <button className="project-button">View More</button>
            </div>
            <button className="carousel-button" onClick={moveToNextImage}>{">"}</button>
        </div>
    )
}

export default ProjectShowcaseScroll;