import React from 'react';
import { Link } from 'react-router-dom';

const Footer = (props) => {
    return(
        <footer className="site-footer">
            <div className="container">
                <div className="row pt-4">
                    <div className="col-6 col-md-4 text-center">
                        <address>
                                Toy Lending Library <br />
                                123 Playthings Boulevard <br />
                                Big City, USA <br />
                                <a className="footer-link" href="tel:+15635556789">Phone: (563) 555-6789</a><br />
                                <a className="footer-link" href="mailto:toylendinglibrary@email.com">Email: toylendinglibrary@email.com</a>
                        </address>
                    </div>
                    <div className="col-6 col-md-4 text-center">
                        <ul className="footer-link-list">
                            <li><Link className="footer-link" to='/home'>Home</Link></li>
                            <li><Link className="footer-link" to='/toys'>Toys</Link></li>
                            <li><Link className="footer-link" to='/about'>About Us</Link></li>
                            <li><Link className="footer-link" to='/signup'>Sign Up</Link></li>
                            <li><Link className="footer-link" to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4">
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/"><i className="fa fa-facebook-square" /></a>
                        <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram" /></a>  
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center my-2">
                        <small>&copy; 2022 M. Britton Designs </small>
                    </div>
                </div>
            </div>
        </footer>
    );
}

/* Social Icons are not working...why? */

export default Footer;