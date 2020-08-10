import React,{Component} from "react";
import {Bar,Pie} from 'react-chartjs-2';
import common from "./../assets/css/common.css";
import StatNav from "./StatNav";
import axios from "axios";



export default class LecturerStats extends Component{
    constructor(props) {
        super(props);

        this.handleType = this.handleType.bind(this);
        this.state={
            lecturers:[],
            lecPerFac:{},
            lecByLevel:{},
            lecByCenter:{},
            lecByDep:{},
            faculties:[],
            selectedRadio:"",
            loading:true
        }
    }

    handleType(e){
        this.setState({
            selectedRadio:e.target.value

        })
        console.log(this.state.selectedRadio);
        this.lecturesByDepartment(this.state.lecturers,this.state.selectedRadio);

    }
    componentDidMount() {


        axios.get('/lecturer/')
            .then(response => {
                this.setState({
                    lecturers: response.data,
                })
                const lecturerSet = response.data;
                this.lecturesPerFaculty(lecturerSet);
                this.lecturesByLevel(lecturerSet);
                this.lecturesByCenter(lecturerSet);

            })

    }

    lecturesPerFaculty(lecData) {
        // axios.get('/lecturer/')
        //     .then(response => {

                // const lecData = response.data;
                let faculties = [];
                let facCounts =[];
                lecData.forEach(element => {
                    if (faculties.indexOf(element.faculty) === -1) {
                        faculties.push(element.faculty);
                    }
                });
                let lecturerPerFac= lecData.reduce((countData, lec, index) => {
                    if (!!countData[lec.faculty]) {
                        countData[lec.faculty] += 1;
                    } else {
                        countData[lec.faculty] = 1;
                    }
                    return countData;
                }, {})
                facCounts = Object.keys(lecturerPerFac).map(lec =>{
                    return lecturerPerFac[lec]
                })

                this.setState({
                    faculties:faculties,
                    loading:false,
                    lecPerFac : {
                        labels: faculties,
                        datasets: [{
                            data:facCounts
                            ,
                            backgroundColor: [
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            hoverBackgroundColor: [
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ]
                        }]
                    }
                })


    }
    lecturesByLevel(lecData) {

                let Level= [];
                let LevelCounts =[];
                lecData.forEach(element => {
                    if (Level.indexOf(element.level) === -1) {
                        Level.push(element.level);
                    }
                });
                let lecturersByLevel= lecData.reduce((countData, lec, index) => {
                    if (!!countData[lec.level]) {
                        countData[lec.level] += 1;
                    } else {
                        countData[lec.level] = 1;
                    }
                    return countData;
                }, {})
                LevelCounts = Object.keys(lecturersByLevel).map(lec =>{
                    return lecturersByLevel[lec]
                })

                let categories =[];
                Level.map(l =>{
                    switch (l) {
                        case 1: categories.push('Professor');break;
                        case 2: categories.push('Assistant Professor');break;
                        case 3: categories.push('Senior Lecture(HG)');break;
                        case 4: categories.push('Senior Lecture');break;
                        case 5: categories.push('Lecture');break;
                        case 6: categories.push('Assistant Lecture');break;
                        case 7: categories.push('Instructor');break;

                    }
                })

                this.setState({
                    loading:false,
                    lecByLevel : {
                        labels: categories,
                        datasets: [{
                            label:'Count',
                            data:LevelCounts,
                            backgroundColor: [
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            hoverBackgroundColor: [
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ]
                        }]
                    }
                })

    }
    lecturesByCenter(lecData) {

                let Centers= [];
                let LecCounts =[];
                lecData.forEach(element => {
                    if (Centers.indexOf(element.center) === -1) {
                        Centers.push(element.center);
                    }
                });
                let lecturerCountCenter= lecData.reduce((countData, lec, index) => {
                    if (!!countData[lec.center]) {
                        countData[lec.center] += 1;
                    } else {
                        countData[lec.center] = 1;
                    }
                    return countData;
                }, {})
                LecCounts = Object.keys(lecturerCountCenter).map(lec =>{
                    return lecturerCountCenter[lec]
                })

                this.setState({
                    loading:false,
                    lecByCenter : {
                        labels: Centers,
                        datasets: [{
                            // label:'Count',
                            data:LecCounts,
                            backgroundColor: [
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            hoverBackgroundColor: [
                                '#FF6384',
                                '#36A2EB',
                                '#FFCE56',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ]
                        }]
                    }
                })

    }
    lecturesByDepartment(lecData,fac) {

        let Departments= [];
        let LecCounts =[];
        lecData.forEach(element => {
            if (element.faculty === fac) {
                if (Departments.indexOf(element.department) === -1) {
                    Departments.push(element.department);
                }
            }
        });
        let lecturerCountDep= lecData.reduce((countData, lec, index) => {
            if (!!countData[lec.department]) {
                countData[lec.department] += 1;
            } else {
                countData[lec.department] = 1;
            }
            return countData;
        }, {})
        LecCounts = Object.keys(lecturerCountDep).map(lec =>{
            return lecturerCountDep[lec]
        })

        this.setState({
            loading:false,
            lecByDep : {
                labels: Departments,
                datasets: [{
                    // label:'Count',
                    data:LecCounts,
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ]
                }]
            }
        })

    }




    render() {
        return (
            <div className="main">
                <StatNav/>
                <h3>Lecturer Statistics</h3>

                <div className="container">
                        <div className="row">
                        <div className="col">
                            <h3>Lecturer count by level</h3>
                            <Bar data={this.state.lecByLevel}
                                 options={{
                                     scales: {
                                         yAxes: [{
                                             ticks: {
                                                 beginAtZero: true
                                             }
                                         }]
                                     }
                                 }}/>
                        </div>
                            <div className="col">
                                <h3>Lecturers per faculty</h3>
                                <Pie data={this.state.lecPerFac} />
                            </div>
                        </div>
                    <br/><br/>
                    <div className="row">
                        <div className="col">
                            <h3>Lecturer count by center</h3>


                            <Pie data={this.state.lecByCenter} />
                        </div>
                        <div className="col">
                            <h3>Lecturers per department</h3>

                                {this.state.faculties.map(lec =>{
                                   return(
                                    <div className="form-check form-check-inline mx-sm-3 mb-2">
                                        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value={lec}
                                               // checked={this.state.selectedRadio === 'Lecture hall'}
                                               onChange={this.handleType}/>
                                        <label className="form-check-label" htmlFor="inlineRadio1"  style={{fontSize: "16px",color: "#312450"}}>{lec}</label>
                                        </div>
                                   )


                                })
                                }


                            <Bar data={this.state.lecByDep}
                                 options={{
                                     scales: {
                                         yAxes: [{
                                             ticks: {
                                                 beginAtZero: true
                                             }
                                         }]
                                     }
                                 }}/>
                        </div>

                    </div>
                    </div>

            </div>

        );
    }
}

