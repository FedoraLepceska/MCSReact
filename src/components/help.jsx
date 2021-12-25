import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

function Help(){
    return (
        <div id="help">
            <header id="header" className="header">
                <div className="header-content">
                    <div className="container">
                        <div className="row">
                            <section className="mail">
                                <h1>Help</h1>
                                <span className="quesrep">Ask a question or report a problem</span>
                                <div className="container123">
                                    <form action="" method="POST" id="my-form">

                                        <div className="form-group">
                                            <label htmlFor="firstName"> First Name</label>
                                            <input type="text" id="firstName" name="firstName"/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="lastName">Last Name</label>
                                            <input type="text" id="lastName" name="lastName"/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" id="email" name="email"/>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="massage">Massage</label>
                                            <textarea name="massage" id="massage" cols="30" rows="5"></textarea>
                                        </div>

                                        <button type="submit" class="form-control-submit-button">Submit</button>
                                    </form>
                                </div>
                                <div id="status"></div>
                            </section>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Help;