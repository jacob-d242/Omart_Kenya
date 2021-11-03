import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css';
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
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
						</div>
					</div>
				</div>
				
                <div className="row">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="footer-widget">
                            <h4><Link to="./AbotUs">About Us</Link></h4> 							
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="footer-link">
                            <h4>Information</h4>
            
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="footer-link-contact">
                        <h4><Link to="./contactus">Contact</Link></h4> 
                            <ul>
                                <li>
                                    <p><i className="fas fa-map-marker-alt"></i>Address: Tom Mboya Street Mombasa, Kenya</p>
                                </li>
                                <li>
                                    <p><i className="fas fa-envelope"></i>Email: <Link to="omartkenya@gmail.com">omartkenya@gmail.com</Link></p>
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
