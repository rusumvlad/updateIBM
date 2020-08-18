import React from 'react';
//import Icons
import { FaBars } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi'
import { GoHome } from 'react-icons/go'
//Import router-dom
import { Link } from 'react-router-dom';


function NavbarStudent() {

    return (
        <nav className="navbar navbar-expand-lg">

            <Link className="navbar-brand ml-5" to="/"><img className="logo-img" alt="" />Student</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span style={{ color: '#fff' }}><FaBars /></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto text-uppercase ">
                    <li className="nav-item active">
                        <Link className="nav-link text-white ml-5" to="home"><GoHome className='Icon' /><span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white ml-5" to="../"><FiLogOut className='Icon' /></Link>
                    </li>

                </ul>


            </div>
        </nav>
    )
}
export default NavbarStudent;