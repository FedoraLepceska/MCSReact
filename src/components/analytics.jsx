import React, { useState } from "react";
import '../App.css';
import '../bootstrap.css';
import APIService from "../services/APIService";
import { Bar } from "react-chartjs-2"
import { FaStar } from "react-icons/fa";
import { Container, Radio, Rating } from "./RatingStyles";

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
    constructor(props) {
        super(props);
        this.state = {
            locationsList: [],
            rate: 0,
            selected_location_id: 0
        }
        this.handleChange = this.handleChange.bind(this);
    };


    componentDidMount() {
        this.getLocations();
    }

    getLocations() {
        APIService.getLocations()
            .then((response) => {
                
                this.setState({ locationsList: response })
            })
           console.log( this.state.locationsList.length);
    }

    rateStation(e) {

        var x = document.getElementById("station").selectedIndex;
        var y = document.getElementById("station").options.value;
        console.log(x.value);

        var select = document.getElementById('station');
        var location_id = select.selectedIndex.value;
        const rating  = {
            user_id : 51,
            location_id: location_id,
            rating: this.state.rate
        }
        console.log(JSON.stringify(rating))
        APIService.postRating(rating)
            .then((response) => {
               
            });

    }


    handleChange(e) {
        this.setState({ selected_location_id: e.target.value });
        console.log("Location Selected!! " +  this.state.selected_location_id);
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
                                        <select name="charger" id="stationRating" className="paddings"
                                        value={this.state.selected_location_id} onChange={this.handleChange}>
                                            {
                                                this.state.locationsList.length !== 0 ?
                                                    this.state.locationsList.map((locationRating) => (
                                                        <option value={locationRating.location_id}>{locationRating.address}</option>
                                                    ))
                                                    : <option value="0">No Charging Stations Available</option>
                                            }
                                        </select><br></br><br></br>
                                        <div className="flex">

                                            <Container>
                                                {[...Array(5)].map((item, index) => {
                                                    const givenRating = index + 1;
                                                    return (
                                                        <label>
                                                            <Radio
                                                                type="radio"
                                                                value={givenRating}
                                                                onClick={() => {
                                                                    this.setState({ rate: givenRating })
                                                                }}
                                                            />
                                                            <Rating>
                                                                <FaStar
                                                                    color={
                                                                        givenRating < this.state.rate || givenRating === this.state.rate
                                                                            ? "rgb(254,226,62)"
                                                                            : "fff"
                                                                    }
                                                                />
                                                            </Rating>
                                                        </label>
                                                    );
                                                })}
                                            </Container>



                                            <input onClick={(e) => this.rateStation(e)} type="submit" value="Rate" className="btn-solid-lg heightButton"></input>
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