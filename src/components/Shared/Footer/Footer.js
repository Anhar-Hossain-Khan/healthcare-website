import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer className=" py-2 mt-5">
        <div className="container-fluid footer">
            <div className="row text-white d-flex justify-content-center align-items-center">
            <div className="col-md-6">
                    <h4 className="text-dark">About Us</h4>
                    <p className="about text-dark">This Hospital is the fastest growing hospitals in dhaka,Bangladesh.This Hospital always strives to provide the best service to its patients at an affordable price.</p>
                </div>
                <div className="col-md-6 d-flex justify-content-center align-items-center ">
                    <p className="ms-2 fw-bolder">Block-E/275(7st floor), Road #12, <br />Uttara, Dhaka, Bangladesh</p>
                </div>
            </div>
            <div>
       <h6>©Copyrights - All Rights Are Reserved by Anhar Khan 2021</h6>
       </div>
        </div>
    </footer>
    );
};

export default Footer;