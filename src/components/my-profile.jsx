import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

function MyProfile(){
    return (
        <div id="my-profile">
            <header id="header" className="header">
                <div className="header-content">
                    <div className="container rounded bg-white mt-5 mb-5">
                        <div className="row">
                            <div className="col-md-3 border-right">
                                <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img
                                    className="rounded-circle mt-5" width="150px"
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Circle-icons-profile.svg/1024px-Circle-icons-profile.svg.png"></img><span
                                    className="font-weight-bold">My Profile</span><span
                                    className="text-black-50"></span></div>
                            </div>
                            <div className="col-md-5 border-right">
                                <div className="p-3 py-5">
                                    <div className="d-flex justify-content-between align-items-center mb-3">
                                        <h4 className="text-right">Profile Settings</h4>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-md-6"><label className="labels">Name</label><input
                                            type="text" className="form-control" placeholder="first name" value=""></input>
                                        </div>
                                        <div className="col-md-6"><label className="labels">Surname</label><input
                                            type="text" className="form-control" value="" placeholder="surname"></input></div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-12"><label className="labels">Car Model</label><input
                                            type="text" className="form-control" placeholder="enter car model" value=""></input>
                                        </div>
                                        <div className="col-md-12"><label className="labels">Car Plate</label><input
                                            type="text" className="form-control" placeholder="enter car plate" value=""></input>
                                        </div>
                                        <div className="col-md-12"><label className="labels">Mobile Number</label><input
                                            type="text" className="form-control" placeholder="enter phone number"
                                            value=""></input></div>
                                        <div className="col-md-12"><label className="labels">Email</label><input
                                            type="text" className="form-control" placeholder="enter email" value=""></input>
                                        </div>
                                    </div>
                                    <div className="mt-5 text-center">
                                        <button className="btn btn-primary profile-button" type="button">Save Profile
                                        </button>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h4 className="text-right">Add New Car</h4>
                                        </div>
                                        <div className="col-md-12"><label className="labels">Car Model</label><input
                                            type="text" className="form-control" placeholder="enter car model" value=""></input>
                                        </div>
                                        <div className="col-md-12"><label className="labels">Car Plate</label><input
                                            type="text" className="form-control" placeholder="enter car plate" value=""></input>
                                        </div>
                                    </div>
                                    <div className="mt-5 text-center">
                                        <button className="btn btn-primary profile-button" type="button">Add Car
                                        </button>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-4 border-right">
                                <div className="p-3 py-5">
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h4 className="text-right">Change Password</h4>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-12"><label className="labels">Old Password</label><input
                                            type="password" className="form-control" value=""></input></div>
                                        <div className="col-md-12"><label className="labels">New Password</label><input
                                            type="password" className="form-control" value=""></input></div>
                                        <div className="col-md-12"><label className="labels">Confirm
                                            Password</label><input type="password" className="form-control" value=""></input>
                                        </div>
                                    </div>
                                    <div className="mt-5 text-center">
                                        <button className="btn btn-primary profile-button" type="button">Change
                                            Password
                                        </button>
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

export default MyProfile;