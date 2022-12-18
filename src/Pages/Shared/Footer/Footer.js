import React from 'react';
import './Footer.css';
import logo from '../../../assets/images/logo-small.png';
import { Link } from 'react-router-dom';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="text-center text-lg-start bg-light text-muted">
            {/* <!-- Section: Social media --> */}
            <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                {/* <!-- Left --> */}
                <div className="me-5 d-none d-lg-block">
                    <span>Get connected with us on social networks:</span>
                </div>
                {/* <!-- Left --> */}

                {/* <!-- Right --> */}
                <div>
                    <a href="#!" className="me-4 text-reset">
                        <FaFacebook />
                    </a>
                    <a href="#!" className="me-4 text-reset">
                        <FaTwitter />
                    </a>
                    <a href="#!" className="me-4 text-reset">
                        <FaGoogle />
                    </a>
                    <a href="#!" className="me-4 text-reset">
                        <FaInstagram />
                    </a>
                    <a href="#!" className="me-4 text-reset">
                        <FaLinkedin />
                    </a>
                    <a href="#!" className="me-4 text-reset">
                        <FaGithub />
                    </a>
                </div>
                {/* <!-- Right --> */}
            </section>
            {/* <!-- Section: Social media --> */}

            {/* <!-- Section: Links  --> */}
            <section className="">
                <div className="container text-center text-md-start mt-5">
                    {/* <!-- Grid row --> */}
                    <div className="row mt-3">
                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                            {/* <!-- Content --> */}
                            <div className='d-flex align-items-center gap-2 mb-4 footer-brand'>
                                <img src={logo} alt="logo" />
                                <h6 className="text-uppercase fw-bold m-0">Emmy's Consultancy
                                </h6>
                            </div>
                            <p>
                              Trusted consultancy service. We provide all the information you need to migrate and settle in your dream country.
                            </p>
                            Image by <a href="https://www.freepik.com/free-photo/travel-concept-with-landmarks_19894672.htm#query=travel&position=2&from_view=search&track=sph">Freepik</a>
                        </div>
                        {/* <!-- Grid column --> */}


                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Useful links
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Home</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">FAQ</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Services</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">About</a>
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">
                                Legal
                            </h6>
                            <p>
                                <a href="#!" className="text-reset">Terms of use</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Privacy Policy</a>
                            </p>
                            <p>
                                <a href="#!" className="text-reset">Cookie Policy</a>
                            </p>
                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                            {/* <!-- Links --> */}
                            <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                            <p><i className="fas fa-home me-3"></i> Gulshan-2, Dhaka-1212, BD</p>
                            <p>
                                <i className="fas fa-envelope me-3"></i>
                                consult@emmys.com
                            </p>
                            <p><i className="fas fa-phone me-3"></i> + 880 234 567 884</p>
                            <p><i className="fas fa-print me-3"></i> + 880 234 567 895</p>
                        </div>
                        {/* <!-- Grid column --> */}
                    </div>
                    {/* <!-- Grid row --> */}
                </div>
            </section>
            {/* <!-- Section: Links  --> */}

            {/* <!-- Copyright --> */}
            <div className="text-center p-4" style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}>
                © 2022 Copyright:{" "}
                <Link className="text-reset fw-bold" to="/">Emmy's Consultancy</Link>
            </div>
            {/* <!-- Copyright --> */}
        </footer>
    );
};

export default Footer;