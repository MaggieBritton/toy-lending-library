import React from 'react';
import { Link } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return(
        <footer className="site-footer">
            <div className="container">
                <div className="row pt-4">
                    <div className="col-6 col-md-4 text-center my-auto">
                        <address>
                                <strong>Toy Lending Library</strong> <br />
                                123 Playthings Boulevard <br />
                                Big City, USA <br />
                                <a className="footer-link" href="tel:+15635556789">Phone: (563) 555-6789</a><br />
                                <a className="footer-link" href="mailto:info@toylendinglibrary.com">Email: info@toylendinglibrary.com</a>
                        </address>
                    </div>
                    <div className="col-6 col-md-4 text-center my-auto">
                        <ul className="footer-link-list">
                            <li><Link className="footer-link" to='/home'>Home</Link></li>
                            <li><Link className="footer-link" to='/toys'>Toys</Link></li>
                            <li><Link className="footer-link" to='/about'>About Us</Link></li>
                            <li><Link className="footer-link" to='/signup'>Sign Up</Link></li>
                            <li><Link className="footer-link" to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-4 text-center my-auto">
                        <SocialIcon network="facebook" url="http://www.facebook.com" bgColor="#fff" className="m-1"></SocialIcon>
                        <SocialIcon network="instagram" url="http://www.instagram.com" bgColor="#fff" className="m-1"></SocialIcon>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center my-2">
                        <small>&copy; 2022 Margaret Britton </small>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;