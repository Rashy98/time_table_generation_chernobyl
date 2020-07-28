import React,{Component} from "react";
import {Bar} from 'react-chartjs-2';
import common from "./../assets/css/common.css";
import StatNav from "./StatNav";

const state = {
    labels: ['January', 'February', 'March',
        'April', 'May'],
    datasets: [
        {
            label: 'Rainfall',
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [65, 59, 80, 81, 56]
        }
    ]
}

export default class LecturerStats extends Component{
    render() {
        return (
            <div className="main">
                <StatNav/>
                <h3>Lecturer Statistics</h3>



                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Bar
                                data={state}
                                options={{
                                    title:{
                                        display:true,
                                        text:'Average Rainfall per month',
                                        fontSize:20
                                    },
                                    legend:{
                                        display:true,
                                        position:'right'
                                    }
                                }}
                            />
                        </div>
                        <div className="col">
                            <Bar
                                data={state}
                                options={{
                                    title:{
                                        display:true,
                                        text:'Average Rainfall per month',
                                        fontSize:20
                                    },
                                    legend:{
                                        display:true,
                                        position:'right'
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

