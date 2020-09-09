import React,{Component} from "react";
import nav from "../assets/css/navbar.css";
import common from "../assets/css/common.css";
import logo from "../assets/Images/logo.png"

export default class NavBar extends Component{

    GoHome(){
        window.location = '/'
    }
    render() {
        return (
            <div>

            <div className="sidenav">

               <img src={logo} style={{width:'12em', height:'12em',marginLeft:'-2%'}} onClick={this.GoHome}/>
                <ul className="nav flex-sm-column">
                    <li className="nav-item">
                        <a className="nav-link" href="/LecHome">Lecture Details</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/SubHome">Subjects</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/WorkingDaysMain" id="WorkingDaysMain">Working days</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  id="addStu" href="/AddStudent">Student Details</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="/AddTag">Tags</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="/AddLocation" id="addLoc">Locations</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " id="addSession" href="/AddSession">Sessions</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="/ConsecutiveSessions">Time allocation</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="/RoomAlMain" id="roomAl">Room allocation</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link " href="/StuStats" id="stats">Statistics</a>
                    </li>
                    <br/>
                    <button>Generate</button>
                </ul>
            </div>
            </div>
        );
    }
}
