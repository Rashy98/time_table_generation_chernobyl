import React,{Component} from "react";
import workingDays from "../assets/css/workingdays.css";
import WorkingDaysNav from "./Common/AddWorkingDaysNav";

export default class AddWeekdayWorkingDays extends Component{

    render() {
        return (
            <div className="main">
                <WorkingDaysNav/>
                <div className="form">
                    <h3>Add Weekday</h3>
                    <br/>
                    <form>
                        <div classNameName="form-group mx-sm-3 mb-0">

                            <h5>Add Working Days</h5>
                            <label for="workingDays" className="sr-only">No.of Working Days</label>
                            <input type="number" className="form-control" id="workingDays" placeholder="Days"/><br/>

                            <h5>Select Working Days</h5>
                            <div className="row col-centered">
                                <div className="column">
                                    <label style={{fontSize:"15px"}}>
                                        <input type="checkbox" id="Monday" value="Monday" placeholder="Monday"/> Monday
                                    </label><br/>
                                    <label style={{fontSize:"15px"}}>
                                        <input type="checkbox" id="Tuesday" value="Tuesday"/> Tuesday
                                    </label><br/>
                                    <label style={{fontSize:"15px"}}>
                                        <input type="checkbox" id="Wednesday" value="Wednesday"/> Wednesday
                                    </label><br/>
                                    <label style={{fontSize:"15px"}}>
                                        <input type="checkbox" id="Thursday" value="Thursday"/> Thursday
                                    </label><br/>
                                    <label style={{fontSize:"15px"}}>
                                        <input type="checkbox" id="Friday" value="Friday"/> Friday
                                    </label>
                                </div>
                               <div className="column">
                                    <label style={{fontSize:"15px"}}>
                                        <input type="checkbox" id="Saturday" value="Saturday"/> Saturday
                                    </label><br/>
                                    <label style={{fontSize:"15px"}}>
                                        <input type="checkbox" id="Sunday" value="Sunday"/> Sunday
                                    </label>
                                </div>
                           </div>
                            <br/>

                            <h5>Add Working Hours</h5>
                            <div className="row">
                                <div className="column">
                                    <input type="number" className="form-control" id="Hours" placeholder="Hours"/>
                                </div>
                                <div className="column">
                                    <input type="number" className="form-control" id="Minutes" placeholder="Minutes"/>
                                </div>
                            </div>
                            <br/>

                            <h5>Select Time Slot</h5>
                            <div className="row col-centered">
                                <div className="column">
                                    <label style={{fontSize:"15px"}}>
                                        <input type="radio" id="oneHour" name="timeSlot"/> One Hour
                                   </label>
                                </div>
                                <div className="column">
                                    <label style={{fontSize:"15px"}}>
                                        <input type="radio" id="thirtyMinutes" name="timeSlot"/> Thirty Minutes
                                    </label>
                                </div>
                            </div>
                        </div>
                        <br/>
                         <div className="form-group mx-sm-3 mb-2">
                            <button type="submit" className="btn my-1" style={{backgroundColor: "#312450", color: "white"}}>Add</button>
                       </div>
                    </form>
                </div>
            </div>
        );
    }
}