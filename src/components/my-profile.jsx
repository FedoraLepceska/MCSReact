import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

function MyProfile(){
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                <div className="container">
                    <Link to={"/"}></Link>
                    <a className="navbar-brand logo-image" href="/home"><img src={require('../images/krajno.png')} alt="alternative"/></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-awesome fas fa-bars"></span>
                        <span className="navbar-toggler-awesome fas fa-times"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link page-scroll first-item" href="/home">Home <span
                                    className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="/reserve">Reserve</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle page-scroll" href="/faqs" id="navbarDropdown2"
                                   role="button" aria-haspopup="true" aria-expanded="false">FAQs</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/analytics"><span
                                        className="item-text">Analytics</span></a>
                                </div>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="/about">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link page-scroll" href="/my-profile">My Profile</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle page-scroll icon-bar" role="button" aria-haspopup="true" aria-expanded="false" href="/my-profile">
                                    <img src={require('../images/macedonia-flag-png-xl.png')} alt="alternative"/>
                                </a>
                                <div className="dropdown-menu icon-bar" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/"><span><img src={require('../images/2560px-Flag_of_the_United_Kingdom.svg.png')} alt="alternative"/></span></a>
                                    <a className="dropdown-item" href="/"><span><img src={require('../images/2560px-Flag_of_Albania.svg.png')} alt="alternative"/></span></a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <header id="header" className="header">
                <div className="header-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-xl-5">
                                <div className="text-container">
                                    <h1>Reserve Your Charging Station Now!</h1>
                                    <a className="btn-solid-lg page-scroll" href="sign-up.jsx">Reserve</a>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-7">
                                <div className="image-container">
                                    <div className="img-wrapper">
                                        <img className="img-fluid" src="../images/header-software-app.png"
    alt="alternative"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default MyProfile;