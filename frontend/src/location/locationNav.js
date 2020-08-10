import React,{Component} from "react";
// import nav from "../assets/css/navbar.css";
// import common from "../assets/css/common.css";
// import location from "../assets/css/location.css";

export default class LocNav extends Component{
    render() {
        return (
            <div className="navbar">
                <a href="/AddLocation">Add Building and Room</a>
                <a  href="/ViewLocation">View Building Data</a>
                <a  href="/ViewRoom">View Room Data</a>
            </div>
        );
    }
}
