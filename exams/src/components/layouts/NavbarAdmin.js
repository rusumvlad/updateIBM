import React from 'react';
//import Icons
import { FaBars } from 'react-icons/fa';
//Import router-dom
import { Link } from 'react-router-dom';

function NavbarAdmin() {

    return (
        <nav className="navbar navbar-expand-lg">

            <Link className="navbar-brand ml-5" to="/"><img className="logo-img" alt="" />Admin</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span style={{ color: '#fff' }}><FaBars /></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto  text-uppercase ">
                    <li className="nav-item">
                        <Link className="nav-link  ml-5" to="home">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ml-5" to="userslist">Lista Utilizatori</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ml-5" to="studentslist">Lista Studenti</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link ml-5" to="pend">Examene in asteptare</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link  ml-5" to="/">Log out</Link>
                    </li>

                </ul>

            </div>
        </nav>
    )
}
export default NavbarAdmin;