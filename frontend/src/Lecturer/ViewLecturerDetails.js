import React, {Component} from "react";
import LecNav from "./Common/LecNav";
import ViewLecturer from "../assets/css/lecturer.css";

export default class ViewLecturerDetails extends Component{

    render() {
        return(
            <div className="main">
                <LecNav/>
                <div className="form" >
                    <h3> Lecturer Details </h3><br/>
                    <form>
                        <table>
                            <tr>
                                <th style={{fontSize: '15px'}}>Employee ID</th>
                                <th style={{fontSize: '15px'}}>Full Name</th>
                                <th style={{fontSize: '15px'}}>Faculty</th>
                                <th style={{fontSize: '15px'}}>Department</th>
                                <th style={{fontSize: '15px'}}>Center</th>
                                <th style={{fontSize: '15px'}}>Building</th>
                                <th style={{fontSize: '15px'}}>Level</th>
                                <th style={{fontSize: '15px'}}>Rank</th>
                                <th style={{fontSize: '15px'}}>Edit Or Delete</th>
                            </tr>
                            <tr>
                                <td style={{fontSize: '15px'}}>Alfreds Futterkiste</td>
                                <td style={{fontSize: '15px'}}>Maria Anders</td>
                                <td style={{fontSize: '15px'}}>Germany</td>
                                <td style={{fontSize: '15px'}}>Germany</td>
                                <td style={{fontSize: '15px'}}>Germany</td>
                                <td style={{fontSize: '15px'}}>Germany</td>
                                <td style={{fontSize: '15px'}}>Germany</td>
                                <td style={{fontSize: '15px'}}>Germany</td>
                                <td>
                                    <button type="submit" className="btn my-1" style={{backgroundColor: "#312450", color: "white", fontSize: '15px'}}>Edit</button><br/>
                                    <button type="submit" className="btn my-1" style={{backgroundColor: "#312450", color: "white", fontSize: '15px'}}>Delete</button>
                                </td>
                            </tr>

                        </table>
                    </form>
                </div>
            </div>
        );
    }
}