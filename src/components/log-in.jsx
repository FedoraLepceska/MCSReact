import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

function LogIn() {
    return (
        <div>
            <header id="header" className="ex-2-header">
                <div className="container">
                    <Link to={"/log-in"}></Link>
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>Log In</h1>
                            <p>You don't have a password? Then please <a className="white" href="sign-up.jsx">Sign
                                Up</a></p>
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