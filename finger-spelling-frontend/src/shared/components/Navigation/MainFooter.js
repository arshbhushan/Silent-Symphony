// MainFooter.js
import React from "react";
import "./MainFooter.css";

function MainFooter() {
	return (
        <section>
		<div className="footer-container">
			<div className="footer-content">
				<h1>Silent Symphony</h1>
				<div className="footer-links">
					<a href="#about">About Us</a>
					<a href="#services">Services</a>
					<a href="#contact">Contact</a>
					<a href="#privacy">Privacy Policy</a>
				</div>
				<div className="footer-social">
					<a href="#facebook" className="social-link">Facebook</a>
					<a href="#twitter" className="social-link">Twitter</a>
					<a href="#instagram" className="social-link">Instagram</a>
				</div>
			</div>
			<div className="footer-bottom">
				<p>&copy; 2024 Silent Symphony. All Rights Reserved.</p>
			</div>
		</div>
        </section>
	);
}

export default MainFooter;
