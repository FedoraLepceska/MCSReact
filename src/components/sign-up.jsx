import React from 'react';
import '../App.css'
import {Link} from "react-scroll";

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

    if(props.language === "Macedonian") {
        contentSignup = contentSignup.Macedonian;
    }
    else if(props.language === "English"){
        contentSignup = contentSignup.English
    }else {
        contentSignup = contentSignup.Albanian
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
                                <form id="signUpForm" data-toggle="validator" data-focus="false">
                                    <div className="form-group">
                                        <input type="email" className="form-control-input" id="semail" required></input>
                                            <label className="label-control" htmlFor="semail">Email</label>
                                            <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control-input" id="sname" required></input>
                                            <label className="label-control" htmlFor="sname">Name</label>
                                            <div className="help-block with-errors"></div>
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control-input" id="spassword" required></input>
                                            <label className="label-control" htmlFor="spassword">Password</label>
                                            <div className="help-block with-errors"></div>
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