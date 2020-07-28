import React,{Component} from "react";
import nav from "../assets/css/navbar.css";
import common from "../assets/css/common.css";

export default class NavBar extends Component{
    render() {
        return (
            <div className="sidenav">
                <img src=""/>
                <ul className="nav flex-sm-column">
                    <li className="nav-item">
                        <a className="nav-link" href="">Lecture Details</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Subjects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Working days</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-section="addStu" id="addStu" href="#addStu">Student Details</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Tags</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="/AddLocation" id="addLoc">Locations</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Sessions</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#">Section 3</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="#" id="roomAl">Room allocation</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="/StuStats" id="stats">Statistics</a>
                    </li>
                    <button>Generate</button>
                </ul>
            </div>
        );
    }
}
