import React from 'react';
//import Icons
import { FaIdCard, FaGlobe, FaPhoneAlt, FaFacebook, FaTwitterSquare } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
//Import css for Footer
import '../../css/Footer.css';

function Footer() {
    return (
        <div className="main-footer">
            <div className="footer-middle">
                <div className="container-fluid">
                    <div className="row text-center">
                        {/* Column 1 */}
                        <div className="col-md-6 col-sm-12">
                            <h4><FaIdCard className="icons-footer" />Date de Contact</h4>
                            <hr className="light" />
                            <ul className="list-unstyled list-items">
                                <li><IoMdMail className="icons-contact" />Mail: admin.exam@examhub.com</li>
                                <li><FaPhoneAlt className="icons-contact" />Phone: 0725014594</li>

                            </ul>
                        </div>
                        {/* Column 2 */}
                        <div className="col-md-6 col-sm-12">
                            <h4><FaGlobe className="icons-footer" />Retele de Socializare</h4>
                            <hr className="light" />
                            <ul className="list-unstyled list-items">
                                <li><a target="_blank" href="/"><FaFacebook className="icons-retele" /></a><a target="_blank" href="/"><AiFillInstagram className="icons-retele" /></a><a target="_blank" href="/"><FaTwitterSquare className="icons-retele" /></a></li>

                            </ul>
                        </div>
                    </div>
                    {/* Footer Bottom */}
                    <div className="row footer-bottom text-center">
                        <div className="col-12">
                            <p style={{ fontWeight: 'bold' }}>&copy;{new Date().getFullYear()} ExamHub - Web application for exams</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Footer;

