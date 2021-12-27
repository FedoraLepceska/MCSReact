import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

class MyProfile extends React.Component{
    constructor(props){
        super(props);
    };
    render() {
        let contentProfile = {
            English: {
                myprofile: "My Profile",
                name: "Name",
                surname: "Surname",
                carmodel: "Car Model",
                carplate: "Car Plate",
                mobilenumber: "Mobile Number",
                email: "E-mail",
                saveprofile: "Save Profile",
                addnewcar: "Add new car",
                addcurrentcar: "Add Car",
                changepassword: "Change Password",
                oldpassword: "Old Password",
                newpassword: "New Password",
                confirmpassword: "Confirm Password",
                profileSettings: "Profile Settings"
            },
            Macedonian: {
                myprofile: "Мој Профил",
                name: "Име",
                surname: "Презиме",
                carmodel: "Модел на кола",
                carplate: "Регистрациски таблици на кола",
                mobilenumber: "Телефонски број",
                email: "е-маил",
                saveprofile: "Зачувај Профил",
                addnewcar: "Додади нова кола",
                addcurrentcar: "Додади Кола",
                changepassword: "Промени лозинка",
                oldpassword: "Стара Лозинка",
                newpassword: "Нова Лозинка",
                confirmpassword: "Потврди Лозинка",
                profileSettings: "Конфигурација на профил"
            },
            Albanian: {
                myprofile: "Profili im",
                name: "Emri",
                surname: "Mbiemri",
                carmodel: "Modeli i makinës",
                carplate: "Pllaka e makinës",
                mobilenumber: "Numri i celularit",
                email: "E-mail",
                saveprofile: "Ruaj profilin",
                addnewcar: "Shto makinë të re",
                addcurrentcar: "Shto makinë",
                changepassword: "Ndrysho fjalëkalimin",
                oldpassword: "Fjalëkalimi i vjetër",
                newpassword: "Fjalëkalimi i ri",
                confirmpassword: "Konfirmo fjalëkalimin",
                profileSettings: "Cilësimet e profilit"
            }
        }
            if(this.props.language === "Macedonian") {
            contentProfile = contentProfile.Macedonian;
            }
            else if(this.props.language === "English") {
            contentProfile = contentProfile.English
            }else {
            contentProfile = contentProfile.Albanian
            }
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
                                        className="font-weight-bold">{contentProfile.myprofile}</span><span
                                        className="text-black-50"></span></div>
                                </div>
                                <div className="col-md-5 border-right">
                                    <div className="p-3 py-5">
                                        <div className="d-flex justify-content-between align-items-center mb-3">
                                            <h4 className="text-right">{contentProfile.profileSettings}</h4>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-md-6"><label className="labels">{contentProfile.name}</label><input
                                                type="text" className="form-control" placeholder="first name"
                                                value=""></input>
                                            </div>
                                            <div className="col-md-6"><label className="labels">{contentProfile.surname}</label><input
                                                type="text" className="form-control" value=""
                                                placeholder="surname"></input></div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-12"><label className="labels">{contentProfile.carmodel}</label><input
                                                type="text" className="form-control" placeholder="enter car model"
                                                value=""></input>
                                            </div>
                                            <div className="col-md-12"><label className="labels">{contentProfile.carplate}</label><input
                                                type="text" className="form-control" placeholder="enter car plate"
                                                value=""></input>
                                            </div>
                                            <div className="col-md-12"><label className="labels">{contentProfile.mobilenumber}</label><input
                                                type="text" className="form-control" placeholder="enter phone number"
                                                value=""></input></div>
                                            <div className="col-md-12"><label className="labels">{contentProfile.email}</label><input
                                                type="text" className="form-control" placeholder="enter email"
                                                value=""></input>
                                            </div>
                                        </div>
                                        <div className="mt-5 text-center">
                                            <button className="btn btn-primary profile-button" type="button">{contentProfile.saveprofile}
                                            </button>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <h4 className="text-right">{contentProfile.addnewcar}</h4>
                                            </div>
                                            <div className="col-md-12"><label className="labels">{contentProfile.carmodel}</label><input
                                                type="text" className="form-control" placeholder="enter car model"
                                                value=""></input>
                                            </div>
                                            <div className="col-md-12"><label className="labels">{contentProfile.carplate}</label><input
                                                type="text" className="form-control" placeholder="enter car plate"
                                                value=""></input>
                                            </div>
                                        </div>
                                        <div className="mt-5 text-center">
                                            <button className="btn btn-primary profile-button" type="button">{contentProfile.addnewcar}
                                            </button>
                                        </div>

                                    </div>
                                </div>
                                <div className="col-md-4 border-right">
                                    <div className="p-3 py-5">
                                        <div className="d-flex justify-content-between align-items-center mb-4">
                                            <h4 className="text-right">{contentProfile.changepassword}</h4>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-12"><label className="labels">{contentProfile.oldpassword}</label><input
                                                type="password" className="form-control" value=""></input></div>
                                            <div className="col-md-12"><label className="labels">{contentProfile.newpassword}</label><input
                                                type="password" className="form-control" value=""></input></div>
                                            <div className="col-md-12"><label className="labels">{contentProfile.confirmpassword}</label><input type="password" className="form-control"
                                                                       value=""></input>
                                            </div>
                                        </div>
                                        <div className="mt-5 text-center">
                                            <button className="btn btn-primary profile-button" type="button">{contentProfile.changepassword}
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
}

export default MyProfile;