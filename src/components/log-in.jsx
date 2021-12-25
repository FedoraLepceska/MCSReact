import React from 'react';
import '../App.css';
import '../bootstrap.css';
import {Link} from "react-scroll";

function LogIn(props) {
    let contentLogin = {
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
        contentLogin = contentLogin.Macedonian;
    }
    else if(props.language === "English"){
        contentLogin = contentLogin.English
    }else {
        contentLogin = contentLogin.Albanian
    }
    return (
    <div id="log-in">
        <header id="header" className="ex-2-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1>Log In</h1>
                        <p>You don't have an account?
                            <span className="nav-item">
                                 <Link to="sign-up" spy={true} smooth={true} offset={50} duration={500} className="nav-link page-scroll" href="./sign-up">{contentLogin.Signup}</Link>
                            </span>
                        </p>
                        <div className="form-container">
                            <form id="logInForm" data-toggle="validator" data-focus="false">
                                <div className="form-group">
                                    <input type="email" className="form-control-input" id="lemail" required></input>
                                        <label className="label-control" htmlFor="lemail">Email</label>
                                        <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <input type="text" className="form-control-input" id="lpassword" required></input>
                                        <label className="label-control" htmlFor="lpassword">Password</label>
                                        <div className="help-block with-errors"></div>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="form-control-submit-button"
                                            href="home.jsx">LOG IN
                                    </button>
                                </div>
                                <div className="form-message">
                                    <div id="lmsgSubmit" className="h3 text-center hidden"></div>
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

export default LogIn;


