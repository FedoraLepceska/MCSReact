import React, { useState } from 'react';
import '../App.css'
import { Link } from "react-scroll";
import APIService from '../services/APIService';

function SignUp(props) {

    let contentSignup = {
        English: {
            home: "Home",
            reserve: "Reserve",
            FAQs: "FAQs",
            Analytics: "Analytics",
            AboutUs: "About us",
            MyProfile: "My Profile",
            Help: "Help",
            Login: "Login",
            Signup: "Sign up"
        },
        Macedonian: {
            home: "Почетна",
            reserve: "Резервирај",
            FAQs: "FAQs",
            Analytics: "Аналитика",
            AboutUs: "За нас",
            MyProfile: "Мој профил",
            Help: "Помош",
            Login: "Најава",
            Signup: "Регистрирај се"
        },
        Albanian: {
            home: "Shtëpi",
            reserve: "Rezervë",
            FAQs: "FAQs",
            Analytics: "Analitikë",
            AboutUs: "Rreth nesh",
            MyProfile: "Profili im",
            Help: "",
            Login: "Login",
            Signup: "Sign up"
        }
    };

    if (props.language === "Macedonian") {
        contentSignup = contentSignup.Macedonian;
    }
    else if (props.language === "English") {
        contentSignup = contentSignup.English
    } else {
        contentSignup = contentSignup.Albanian
    }

    const [MCS_User, setMCS_User] = useState({
        name: "",
        surname: "",
        email: "",
        password: "",
        phone: "",
        car_model: "",
        car_plate: ""
    })

    const [ConfirmPassword, setConfirmPassword] = useState('')

    // function checkPasswords(e){
    //     document.getElementById("msgPass").innerHTML = ""
    //     setConfirmPassword(e.target.value);

    //     console.log(ConfirmPassword);
    //     if(MCS_User.password !== ConfirmPassword)
    //         document.getElementById("msgPass").innerHTML = "Passwords don't match."
    // }

    function onChangeSignUp(e) {
        document.getElementById("smsgSubmit").innerHTML = ""
        const new_mcs_user = { ...MCS_User };
        new_mcs_user[e.target.id] = e.target.value;
        setMCS_User(new_mcs_user);
        //console.log(new_mcs_user);
    }

    function register(e) {
        e.preventDefault();
       // console.log("clicked");
        document.getElementById("smsgSubmit").innerHTML = "";
        document.getElementById("msgPass").innerHTML = "";

        
        // make API call
        APIService.register(MCS_User)
            .then((response) => {
                document.getElementById("smsgSubmit").innerHTML = "You've been successfully signed up. <br/> Please login now.";
            }).catch(err => {
                document.getElementById("smsgSubmit").innerHTML = "Register not successful. <br/> Please try again.";
            })
    }


    return (
        <div id="sign-up">
            <header id="header" className="ex-2-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Sign Up</h1>
                            <p>Fill out the form below to sign up. Already signed up? Then just
                                <span className="nav-item">
                                    <Link to="log-in" spy={true} smooth={true} offset={50} duration={500} className="nav-link page-scroll" href="./log-in">{contentSignup.Login}</Link>
                                </span></p>
                            <div className="form-container">
                                <form onSubmit={(e) => register(e)} id="signUpForm" data-toggle="validator" data-focus="false">
                                    <div className="form-group">
                                        <input
                                            onChange={(e) => onChangeSignUp(e)}
                                            id="name"
                                            value={MCS_User.name}
                                            placeholder="name"
                                            pe="text"
                                            className="form-control-input"
                                            required>
                                        </input>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            onChange={(e) => onChangeSignUp(e)}
                                            id="surname"
                                            value={MCS_User.surname}
                                            placeholder="surname"
                                            type="text"
                                            className="form-control-input"
                                            required>
                                        </input>
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group">
                                        <input
                                            onChange={(e) => onChangeSignUp(e)}
                                            id="phone"
                                            value={MCS_User.phone}
                                            placeholder="phone"
                                            type="text"
                                            className="form-control-input"
                                            required>
                                        </input>
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group">
                                        <input
                                            onChange={(e) => onChangeSignUp(e)}
                                            id="car_model"
                                            value={MCS_User.car_model}
                                            placeholder="car model"
                                            type="text"
                                            className="form-control-input"
                                            required>
                                        </input>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            onChange={(e) => onChangeSignUp(e)}
                                            id="car_plate"
                                            value={MCS_User.car_plate}
                                            placeholder="car plate"
                                            type="text"
                                            className="form-control-input"
                                            required>
                                        </input>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            onChange={(e) => onChangeSignUp(e)}
                                            id="email"
                                            value={MCS_User.email}
                                            placeholder="email"
                                            type="email"
                                            className="form-control-input"
                                            required>
                                        </input>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            onChange={(e) => onChangeSignUp(e)}
                                            id="password"
                                            value={MCS_User.password}
                                            placeholder="password"
                                            type="password"
                                            className="form-control-input"
                                            required>
                                        </input>
                                        <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <input
                                            // onChange={(e) => checkPasswords(e)}
                                            id="confirmPassword"
                                            placeholder="confirm password"
                                            type="password"
                                            value={ConfirmPassword}
                                            className="form-control-input"
                                            required>
                                        </input>
                                        <div id="msgPass" className="help-block with-errors"></div>
                                    </div>


                                    <div className="form-group">
                                        <button type="submit" className="form-control-submit-button"
                                            href="home.jsx">SIGN UP
                                        </button>
                                    </div>
                                    <div className="form-message">
                                        <div id="smsgSubmit" className="h3 text-center hidden"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default SignUp;