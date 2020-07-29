import React,{Component} from "react";
import workingDays from "../assets/css/workingdays.css";
import WorkingDaysNav from "./Common/ViewWorkingDaysNav";

export default class ViewWeekdayWorkingDays extends Component{

    render() {
        return (
            <div className="main">
                <WorkingDaysNav/>
                <h3>Weekday</h3>
                <div className="form">
                    <table style={{width:"100%"}}>
                        <tr>
                            <th style={{fontSize:"15px"}}>Total Working Days</th>
                            <td style={{fontSize:"15px"}}>05</td>
                        </tr>
                        <tr>
                            <th style={{fontSize:"15px"}}>Days</th>
                            <td style={{fontSize:"15px"}}>
                                Monday<br/>
                                Tuesday<br/>
                                Wednesday<br/>
                                Thursday<br/>
                                Friday
                            </td>
                        </tr>
                        <tr>
                            <th style={{fontSize:"15px"}}>Working Hours</th>
                            <td style={{fontSize:"15px"}}>8 hours 30 minutes</td>
                        </tr>
                        <tr>
                            <th style={{fontSize:"15px"}}>Time Slot</th>
                            <td style={{fontSize:"15px"}}>One Hour</td>
                        </tr>
                    </table>
                    <br/>
                    
                    <form>
                        <div className="row">
                            <div className="column">
                                <button type="submit"
                                    className="btn mb-2"
                                    style={{backgroundColor: "#312450", color: "white", marginLeft: "50%", width: "100px"}}
                                >Edit</button>
                            </div>
                            <div className="column">
                                <button type="submit"
                                    className="btn mb-2"
                                    style={{backgroundColor: "#312450", color: "white", marginLeft: "40px", width: "100px"}}
                                >Delete</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}