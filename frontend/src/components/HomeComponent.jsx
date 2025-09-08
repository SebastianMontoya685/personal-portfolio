import React from "react";
import "./HomeComponent.css"
import HeroSection from "./HeroSection";
import HomePageBody from "./HomePageBody";
import NavBar from "./NavBar";
import ShowCaseVideo from "./ShowCaseVideo";
import FaviconSection from "./FaviconSection";
import Footer from "./Footer";

function HomeComponent() {
    return (
        <div className="home-container">
            <NavBar />
            <HeroSection />
            <HomePageBody />
            <Footer />
        </div>
    );
}

export default HomeComponent;