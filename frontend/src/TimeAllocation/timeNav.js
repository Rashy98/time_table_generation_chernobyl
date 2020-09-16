import React,{Component} from "react";
import nav from "../assets/css/navbar.css";
import common from "../assets/css/common.css";
import location from "../assets/css/location.css";

export default class timeNav extends Component{
    render() {
        return (
            <div className="navbar" >
                <a style={{width:'25%'}} href="/TimeAllocationMain">Not Available</a>
                <a style={{width:'25%'}} href="/ConsecutiveSessions">Consecutive Sessions</a>
                <a style={{width:'25%'}} href="/ParallelSessions">Parallel Sessions</a>
                <a style={{width:'25%'}} href="/OverlapSessions">Sessions Should Not Overlap</a>
            </div>
        );
    }
}