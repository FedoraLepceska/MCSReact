import React from 'react';
import '../App.css'
import { useTranslation } from "react-i18next";

function Analytics() {
    const { t } = useTranslation();
    return (
        <div>
            <header id="header" className="header">
                <div className="header-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-xl-5">
                                <div className="text-container">
                                    <h1>Reserve Your Charging Station Now!</h1>
                                    <a className="btn-solid-lg page-scroll" href="sign-up.jsx">{t("reserve")}</a>
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

export default Analytics;