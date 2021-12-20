import React from 'react';
import '../App.css';
import '../bootstrap.css';

class FAQs extends React.Component {
    componentDidMount() {
        window.toggle();
    }

    render() {
        return (
            <div id="faqs">
                <header id="header" className="header">
                    <div className="header-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-xl-5">
                                    <div className="text-container">
                                        <h1>FAQs</h1>
                                        <button className="accordion">Question</button>
                                        <div className="panel">
                                            <p>Answer</p>
                                        </div>

                                        <button className="accordion">Question</button>
                                        <div className="panel">
                                            <p>Answer</p>
                                        </div>

                                        <button className="accordion">Question</button>
                                        <div className="panel">
                                            <p>Answer</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-7">
                                    <div className="image-container">
                                        <div className="img-wrapper">
                                            <img className="img-fluid margin" src={require('../images/questions.png')} alt="alternative" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default FAQs;