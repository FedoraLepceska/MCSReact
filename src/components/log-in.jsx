import React, { useState, useEffect } from 'react';
import '../App.css';
import '../bootstrap.css';
import { Link } from "react-scroll";
import APIService from '../services/APIService';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

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

    const [Login_User, setLogin_User] = useState({
        username : "",
        password : ""
    })
 
    function onChangeLogin(e){
        const new_login_user = { ...Login_User };
        new_login_user[e.target.id] = e.target.value;
        setLogin_User(new_login_user);
        //console.log(new_login_user);
    }
 
    function login(e){
        e.preventDefault();
        document.getElementById("lmsgSubmit").innerHTML = "";

        APIService.login(Login_User)
            .then((response) => {        
                console.log("id " + response.id);
                
                localStorage.setItem('token', JSON.stringify(response.jwtToken));
                localStorage.setItem('user_id', JSON.stringify(response.id));
                // console.log(localStorage.getItem('token'))
                // console.log(localStorage.getItem('user_id'))
                // console.log(JSON.parse(localStorage.getItem('token')))
                // console.log(JSON.parse(localStorage.getItem('user_id')))
                window.location.reload(false);
            }).catch(err => {
                document.getElementById("lmsgSubmit").innerHTML = "Login not successful. <br/> Please try again.";
            })
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
                        <form onSubmit={(e) => login(e)} id="logInForm" data-toggle="validator" data-focus="false">
                                    <div className="form-group">
 
                                        <input
                                            onChange={(e) => onChangeLogin(e)}
                                            id="username"
                                            value={Login_User.username}
                                            placeholder="email"
                                            type="email"
                                            className="form-control-input"
                                            required>
                                        </input>

                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group">

                                        <input
                                            onChange={(e) => onChangeLogin(e)}
                                            id="password"
                                            value={Login_User.password}
                                            placeholder="password" 
                                            type="password"
                                            className="form-control-input"
                                            required>    
                                        </input>
 
                                        <div className="help-block with-errors"></div>
                                    </div>

                                    <div className="form-group">

                                        <button
                                            type="submit"
                                            className="form-control-submit-button">
                                            LOG IN
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


