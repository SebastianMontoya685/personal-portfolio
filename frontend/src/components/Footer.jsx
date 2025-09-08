import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-container-left">
                <div className="footer-container-left-inner">
                    <h2>Home</h2>
                    <h2>Projects</h2>
                    <h2>Get To Know Me</h2>
                    <h2>Contact Me</h2>
                </div>
                <div className="footer-container-left-inner">
                    <h2>Instagram</h2>
                    <h2>LinkedIn</h2>
                    <h2>GitHub</h2>
                    <h2>X (Twitter)</h2>
                </div>
            </div>
            <div className="footer-container-right">
                <h2>Sebastian Montoya</h2>
            </div>
        </div>
    );
}

export default Footer;