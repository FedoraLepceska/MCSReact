import React from 'react';
import '../App.css'

class Help extends React.Component{
    constructor(props){
        super(props);
    };
    render() {
        let contentHelp = {
            English: {
                Report: "Ask a question or report a problem",
                FirstName: "First Name",
                LastName: "Last Name",
                Email: "Email",
                Message: "Message",
                Submit: "Submit"
            },
            Macedonian: {
                Report: "Поставете прашање или пријавете проблем",
                FirstName: "Име",
                LastName: "Презиме",
                Email: "Е-Пошта",
                Message: "Порака",
                Submit: "Потврди"
            },
            Albanian: {
                Report: "Bëni një pyetje ose raportoni një problem",
                FirstName: "Emri",
                LastName: "Mbiemri",
                Email: "Email",
                Message: "Mesazh",
                Submit: "Paraqisni"

            }
        }
        if(this.props.language === "Macedonian") {
            contentHelp = contentHelp.Macedonian;
        }
        else if(this.props.language === "English") {
            contentHelp = contentHelp.English
        }else {
            contentHelp = contentHelp.Albanian
        }
        return (
            <div id="help">
                <header id="header" className="header">
                    <div className="header-content">
                        <div className="container">
                            <div className="row">
                                <section className="mail">
                                    <h1>Help</h1>
                                    <span className="quesrep">{contentHelp.Report}</span>
                                    <div className="container123">
                                        <form action="" method="POST" id="my-form">

                                            <div className="form-group">
                                                <label htmlFor="firstName">{contentHelp.FirstName}</label>
                                                <input type="text" id="firstName" name="firstName"/>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="lastName">{contentHelp.LastName}</label>
                                                <input type="text" id="lastName" name="lastName"/>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="email">{contentHelp.Email}</label>
                                                <input type="email" id="email" name="email"/>
                                            </div>

                                            <div className="form-group">
                                                <label htmlFor="massage">{contentHelp.Message}</label>
                                                <textarea name="massage" id="massage" cols="30" rows="5"></textarea>
                                            </div>

                                            <button type="submit" class="form-control-submit-button">{contentHelp.Submit}</button>
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
}

export default Help;