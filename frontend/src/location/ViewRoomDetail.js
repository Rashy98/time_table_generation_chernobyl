import React, { Component } from 'react';
import location from "../assets/css/location.css"
import stat from "../assets/css/stats.css"
import common from "../assets/css/common.css"
import LocNav from "./locationNav";

export default class ViewRoomDetails extends Component{
    render() {
        return (
            <div className="main">
                <LocNav/>
                <h3>View Room Details</h3>
            </div>
        );}}
