import React,{Component} from "react";
import nav from "../assets/css/navbar.css";
import common from "../assets/css/common.css";
import location from "../assets/css/location.css";

export default class TagNav extends Component{
    render() {
        return (
            <div className="navbar">
                <a href="/AddTag">Add a Tag</a>
                <a href="/ViewTag">View Tag Data</a>
            </div>
        );
    }
}
