import React from 'react'


//import Icons
import { FaBars } from 'react-icons/fa';
import { FaIdCard, FaGlobe, FaPhoneAlt, FaFacebook, FaTwitterSquare } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';
//Import router-dom
import { Link } from 'react-router-dom'

import notFound from '../../img/undraw_not_found_60pq.svg';


function Navbar() {

    return (
        <nav className="navbar navbar-expand-lg">

            <Link className="navbar-brand ml-5" to="home"><img className="logo-img" alt="" />Exam HUB</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span style={{ color: '#fff' }}><FaBars /></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto  text-uppercase ">
                    <li className="nav-item active">
                        <Link className="nav-link text-white ml-5" to="/">Log in<span className="sr-only">(current)</span></Link>
                    </li>


                </ul>

            </div>
        </nav>
    )
}

function Footer() {
    return (
        <div className="main-footer">
            <div className="footer-notfound">
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

function Page404() {
    return (
        <>
            <Navbar />
            <div className="container mt-5">
                <div className="row d-flex">
                    <div className="col-6">
                        <p className="align-self-center"><img className="img-notfound" src={notFound} alt='Not Found' /></p>
                    </div>
                    <div className="col-6">
                        <h1 className="title-notfound align-self-center">404</h1>
                        <h2 className="titleSecond-notfound align-self-center" style={{ color: "red" }}>Page not found!</h2>
                    </div>

                </div>
            </div>
            <Footer />

        </>
    )
}

export default Page404
