import React, {Component} from "react";
import LecNav from "./Common/LecNav";
import AddLecturerDetails from "./AddLecturerDetails";
import ViewLecturerDetails from "./ViewLecturerDetails";
import LecPic from "./lecturer.jpg";
import history from "./Common/history";

export default class LecturerHomePage extends Component{

    // handleAddLecturerDetailsClick = () => {
    //     history.push('/AddLec');
    // }
    //
    // handleViewLecturerDetailsClick = () => {
    //     history.push('/ViewLec');
    // }

    render() {
        return (
            <div className="main">
                <LecNav/>
                <h3> Lecturer Details </h3>
                <div className="form">
                    <form>
                        <div>
                            <img className="MainPic" src={LecPic} alt={"Main Pic"}/>
                        </div>
                        {/*<div>*/}
                        {/*    <div className="form-group mx-sm-3 mb-2">*/}
                        {/*        <button id="AddLec" type="submit" className="btn my-1"*/}
                        {/*                style={{backgroundColor: "#312450", color: "white", float: "left"}}*/}
                        {/*                onClick={this.handleAddLecturerDetailsClick}> Add Lecturer Details*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*    <div className="form-group mx-sm-3 mb-2">*/}
                        {/*        <button id="ViewLec" type="submit" className="btn my-1"*/}
                        {/*                style={{backgroundColor: "#312450", color: "white", float: "right"}}*/}
                        {/*                onClick={this.handleViewLecturerDetailsClick}> View Lecturer*/}
                        {/*            Details*/}
                        {/*        </button>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </form>
                </div>
            </div>
        );
    }
}