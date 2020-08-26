import React from 'react'


//import Icons
import { FaIdCard, FaGlobe, FaPhoneAlt, FaFacebook, FaTwitterSquare } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';


import notFound from '../../img/undraw_not_found_60pq.svg';
import Navbar404 from './Navbar404';
import Footer from './Footer';


function Page404() {
    return (
        <>
            <Navbar404 />
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
            <Footer notFound={true} />

        </>
    )
}

export default Page404
