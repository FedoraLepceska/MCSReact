import React from 'react';
import '../App.css';
import '../bootstrap.css';
import APIService from "../services/APIService";
import Rating from "./Rating";
import { Bar } from "react-chartjs-2"

const state = {
    labels: ['Monday', 'Tuesday', 'Wednesday',
        'Thursday', 'Friday'],
    datasets: [
        {
            label: 'Rainfall',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
        }
    ]
}

class Analytics extends React.Component {
    constructor(props){
        super(props);
        this.state ={
            locationsList:[]
        }
    };

    componentDidMount() {
        this.getLocations();
    }

    getLocations(){
        APIService.getLocations()
            .then((response) => {
                this.setState({locationsList : response})
            });
    }
    render() {
        return (
            <div id="analytics">
                <header id="header" className="header">
                    <div className="header-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6 col-xl-5">
                                    <div className="text-container">
                                        <h1>Rate a station</h1>
                                        <select name="charger" id="station" className="paddings">
                                            {
                                                this.state.locationsList !== 0 ?
                                                    this.state.locationsList.map((location) => (
                                                        <option value={location.id}>{location.address}</option>
                                                    ))
                                                    : <option value="0">No Charging Station Available</option>
                                            }
                                        </select><br></br><br></br>
                                        <div className="flex">
                                            <Rating />
                                            <input type="submit" value="Rate" className="btn-solid-lg heightButton"></input>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-xl-7">
                                    <div className="image-container">
                                        <div className="img-wrapper">
                                            <img className="img-fluid margin" src={require('../images/4403.png')} alt="alternative" />
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
}

export default Analytics;