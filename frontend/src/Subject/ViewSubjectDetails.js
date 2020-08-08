import React, {Component} from "react";
import SubNav from "./Common/SubNav";

export default class ViewSubjectDetails extends Component {

    render() {
        return(
            <div className="main">
                <SubNav/>
                <div className="form" >
                    <h3> Subject Details </h3><br/>
                    <form>
                        <table>
                            <tr>
                                <th style={{fontSize: '15px'}}>Offered Year</th>
                                <th style={{fontSize: '15px'}}>Offered Semester</th>
                                <th style={{fontSize: '15px'}}>Subject Name</th>
                                <th style={{fontSize: '15px'}}>Subject Code</th>
                                <th style={{fontSize: '15px'}}>Lecture hours</th>
                                <th style={{fontSize: '15px'}}>Tutorial hours</th>
                                <th style={{fontSize: '15px'}}>Lab hours</th>
                                <th style={{fontSize: '15px'}}>Evaluation hours</th>
                                <th style={{fontSize: '15px'}}>Edit Or Delete</th>
                            </tr>
                            <tr>
                                <td style={{fontSize: '15px'}}>2nd</td>
                                <td style={{fontSize: '15px'}}>2nd</td>
                                <td style={{fontSize: '15px'}}>OOP</td>
                                <td style={{fontSize: '15px'}}>IT2020</td>
                                <td style={{fontSize: '15px'}}>03</td>
                                <td style={{fontSize: '15px'}}>01</td>
                                <td style={{fontSize: '15px'}}>02</td>
                                <td style={{fontSize: '15px'}}>02</td>
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