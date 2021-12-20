import React from 'react';
import '../App.css';
import '../bootstrap.css';

class Reserve extends React.Component {
    componentDidMount() {
        window.nav();
        window.nav2();
    }
    render () {
        return (
            <div id="reserve">
                <header id="header" className="header">
                    <div className="header-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-xl-5">
                                    <div className="text-container">
                                        <h1>Reserve now!</h1>
                                        <label htmlFor="charger">Choose charging type:</label>&nbsp;
                                        <select name="charger" id="charger">
                                            <option value="Wallbe Pro">Wallbe Pro</option>
                                            <option value="Wallbe Pro Plus">Wallbe Pro Plus</option>
                                        </select><br></br><br></br>
                                        <label htmlFor="carPlate">CarPlate:</label>&nbsp;
                                        <input type="text" id="carPlate" name="carPlate"></input><br></br><br></br>
                                        <label htmlFor="date">Date:</label>&nbsp;
                                        <input type="date" id="date" name="date"></input><br></br><br></br>
                                        <label htmlFor="from">From</label>&nbsp;
                                        <input type="time" id="from" name="from"></input>
                                        <label htmlFor="until">Until</label>&nbsp;
                                        <input type="time" id="until" name="until"></input><br></br><br></br>
                                        <input type="submit" value="Reserve" className="btn-solid-lg "></input>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-7">
                                    <div className="image-container">
                                        <div className="img-wrapper">
                                            <iframe className="map"
                                                src="https://www.google.com/maps/d/embed?mid=1fE1jGMC_BN6HX2F03CHACuOvArQ&hl=en&ehbc=2E312F"></iframe>
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

export default Reserve;
