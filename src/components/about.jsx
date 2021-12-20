import React from 'react';
import '../App.css'
import '../bootstrap.css';

function About(props){
    let content = {
        English: {
            title: "About us",
            description: "MyChargingStation development team is filled with eco-friendly gadgetism and are big advocates for ecology. " +
                "That being said we are a non-profit organisation, and with your help and contribution to the environement for being a electric vehicle owner, " +
                "in return we offer a ser\n" + "service which will fundamentally help you easen your life."
        },
        Macedonian: {
            title: "За Нас",
            description: "Мојата станица за полнење......дрндрн"
        },
        Albanian: {
            title: "Rreth nesh",
            description: "Thuaj diçka në shqip"
        }
    };

    if(props.language === "Macedonian") {
        content = content.Macedonian;
    }
    else if(props.language === "English") {
        content = content.English
    }else {
        content = content.Albanian
    }
    return (
        <div id="aboutUs">
            <header id="header" className="header">
                <div className="header-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-xl-5">
                                <div className="text-container">
                                    <h1 className="white-text ">{content.title}</h1>
                                </div>
                                <div className="text-container">
                                    <span className="white-text">{content.description}</span>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-7">
                                <div className="image-container">
                                    <div className="img-wrapper">
                                        <img className="img-fluid" src={require('../images/43140.png')} alt="alternative" />
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

export default About;