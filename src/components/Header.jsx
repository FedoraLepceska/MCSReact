import React from "react";
import '../bootstrap.css';

function Header(props) {
    let content = {
        English: {
            title: "Reserve",
            description:
                "Reserve your charging station now!"
        },
        Macedonian: {
            title: "Резервирај",
            description:
            "Резервирај ја твојата станица сега!"
        },
        Albanian: {
            title: "Rezervë",
            description:
                "Rezervoni stacionin tuaj të karikimit tani!"
        }
    };

    if(props.language === "Macedonian") {
        content = content.Macedonian;
    }
    else if(props.language === "English"){
        content = content.English
    }else {
        content = content.Albanian
    }

    return (
        <header id="header" className="header">
            <div className="header-content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-5">
                            <div className="text-container">
                                <h1>{content.description}</h1>
                                <a className="btn-solid-lg page-scroll" href="sign-up.jsx">{content.title}</a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-7">
                            <div className="image-container">
                                <div className="img-wrapper">
                                    <img className="img-fluid" src={require('../images/header-software-app.png')} alt="alternative"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;