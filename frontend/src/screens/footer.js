import React from 'react'
import './App.css';
const footer = () => {
    return (
        <div className="footer-main">
            <div className="container">
				<div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
						<div className="footer-top-box">
							<h3>Newsletter</h3>
							<form className="newsletter-box">
								<div className="form-group">
									<input className="" type="email" name="Email" placeholder="Email Address*" />
									<i className="fa fa-envelope"></i>
								</div>
								<button className="btn hvr-hover" type="submit">Submit</button>
							</form>
						</div>Name
					</div>
									
					<div className="col-lg-4 col-md-12 col-sm-12">
						<div className="footer-top-box">
							<h3>Social Media</h3>
							<p>Follow us on our social media platforms to get more informtion about our products and services.</p>
							<ul>
                                <li><a href="#"><i className="fab fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-twitter" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-linkedin" aria-hidden="true"></i></a></li>
                                <li><a href="#"><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
                            </ul>
						</div>
					</div>
				</div>
				
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="footer-widget">
                            <h4>About Omart</h4>
                            <p>Omart is a one stop shop About all things eco-friendly in Kenya. Our aim is to sell products that are sourced, manufactured and shipped in eco-friendly ways and onl works with manufacturers using bettert materials like upcycled cotton and bamboo.</p> 							
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="footer-link">
                            <h4>Information</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Customer Service</a></li>
                                <li><a href="#">Terms &amp; Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Delivery Information</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="footer-link-contact">
                            <h4>Contact Us</h4>
                            <ul>
                                <li>
                                    <p><i className="fas fa-map-marker-alt"></i>Address: Tom Mboya Street Mombasa, Kenya</p>
                                </li>
                                <li>
                                    <p><i className="fas fa-phone-square"></i>Phone: <a href="tel:+254705274875">+254705274875</a><br/>
                                    <a href="tel:+254791648620">+254791648620</a></p>
                                </li>
                                <li>
                                    <p><i className="fas fa-envelope"></i>Email: <a href="omartkenya@gmail.com">omartkenya@gmail.com</a></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default footer;
