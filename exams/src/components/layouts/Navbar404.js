import React from 'react'
import { Link } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';


function Navbar404() {

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

export default Navbar404
