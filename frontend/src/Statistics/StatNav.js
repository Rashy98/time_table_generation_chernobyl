import React,{Component} from "react";
import nav from "../assets/css/navbar.css";
import common from "../assets/css/common.css";
import location from "../assets/css/location.css";

export default class StatNav extends Component{
    render() {
        return (
            <div className="navbar">
                        <a href="/StuStats">Student Statistics</a>
                        <a  href="/LecturerStats">Lecturer Statistics</a>
                        <a  href="/SubjectStats">Subject Statistics</a>
            </div>
        );
    }
}
