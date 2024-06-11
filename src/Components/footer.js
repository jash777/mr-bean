import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './footer.css'; // Import custom styles

const Footer = () => {
    return (
        <footer className="footer">
             <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">Join Us</a></li>
  	 				<li><a href="#">Mail</a></li>
                    <li><a href="#">GitHub</a></li>

  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Programs</h4>
  	 			<ul>
  	 				<li><a href="#">NFT Market Place</a></li>
  	 				<li><a href="#">Token Documentation</a></li>
                       <li><a href="#">AI Chat</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><i class="fab fa-facebook-f"></i></a>
  	 				<a href="#"><i class="fab fa-twitter"></i></a>
  	 				<a href="#"><i class="fab fa-instagram"></i></a>
  	 				<a href="#"><i class="fab fa-linkedin-in"></i></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
        </footer>
    );
};

export default Footer;
