import React, {Component} from "react";
import LecNav from "./Common/LecNav";
import axios from 'axios';

export default class AddLecturerDetails extends Component{

    // constructor(props) {
    //     super(props);
    //     this.state={
    //         empId :"",
    //         fullName:"",
    //         faculty:"",
    //         department:"",
    //         center:"",
    //         building:"",
    //         level:"",
    //         rank:"",
    //     }
    //     this.AddLecturer = this.AddLecturer(this);
    // }
    // componentDidMount() {
    //     axios.get('/lecturer/')
    //         .then(res => {
    //             this.setState({
    //                 Lecturer: res.data
    //             })
    //         });
    // }
    //
    // AddLecturer(e){
    //     e.preventDefault();
    //     if(this.handleValidation()) {
    //         const lecturer = {
    //             empId: this.state.empId,
    //             fullName: this.state.fullName,
    //             faculty: this.state.faculty,
    //             department: this.state.department,
    //             center: this.state.center,
    //             building: this.state.building,
    //             level: this.state.level,
    //             rank: this.state.rank
    //
    //         }
    //         console.log(this.state.lecture);
    //         axios.post("/lecturer/addLec", lecturer)
    //             .then(res => console.log(res.data));
    //
    //         this.setState({
    //             empId: "",
    //             fullName: "",
    //             faculty: "",
    //             department: "",
    //             center: "",
    //             building: "",
    //             level: "",
    //             rank: ""
    //         })
    //         alert("Lecturer Details added!")
    //     }
    //     else{
    //         alert("Lecturer Details not added!")
    //     }
    // }

    render() {
        return (
            <div className="main">
                <LecNav/>
                <div className="form">
                    <h3>Add Lecturer Details</h3>
                    <form>
                        <div className="form-group mx-sm-3 mb-2">
                            <label htmlFor="empID" style={{fontSize: '16px', color: "mediumslateblue"}}>Employee ID</label>
                            <input type="text" className="form-control" id="ID" placeholder="Employee ID" required/>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <label htmlFor="fullName" style={{fontSize: '16px', color: "mediumslateblue"}}>Full Name</label>
                            <input type="text" className="form-control" id="Name" placeholder="Full Name" required/>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <label style={{fontSize: '16px', color: "mediumslateblue"}} htmlFor="FacultySelect">Faculty Name</label>
                            <select className="form-control " id="FacultySelect" required>
                                <option selected style={{fontSize:'15px'}}>Choose Faculty...</option>
                                <option value="Computing">Computing</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Business">Business</option>
                                <option value="Humanities_Sciences">Humanities & Sciences</option>
                            </select>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <label style={{fontSize: '16px', color: "mediumslateblue"}} htmlFor="DepartmentSelect">Department Name</label>
                            <select className="form-control " id="DepartmentSelect" required>
                                <option selected style={{fontSize: '15px'}}>Choose Department...</option>
                                <option value="1">Software Engineering</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <label style={{fontSize: '16px', color: "mediumslateblue"}} htmlFor="CenterSelect">Center Name</label>
                            <select className="form-control " id="CenterSelect" required>
                                <option selected style={{fontSize: '15px'}}>Choose Center...</option>
                                <option value="Malabe">Malabe</option>
                                <option value="Metro">Metro</option>
                                <option value="Matara">Matara</option>
                                <option value="Kandy">Kandy</option>
                                <option value="Kurunagala">Kurunagala</option>
                                <option value="Jaffna">Jaffna</option>
                            </select>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <label style={{fontSize: '16px', color: "mediumslateblue"}} htmlFor="BuildingSelect">Building Name</label>
                            <select className="form-control " id="BuildingSelect" required>
                                <option selected style={{fontSize: '15px'}}>Choose Building...</option>
                                <option value="1">Computing</option>
                                <option value="2">Engineering</option>
                                <option value="3">Business</option>
                                <option value="4">New Building</option>
                            </select>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <label style={{fontSize: '16px', color: "mediumslateblue"}} htmlFor="LevelSelect">Level</label>
                            <select className="form-control " id="LevelSelect" required>
                                <option selected style={{fontSize: '15px'}}>Choose Level...</option>
                                <option value="1">Professor - 1</option>
                                <option value="2">Assistant Professor - 2</option>
                                <option value="3">Senior Lecturer(HG) - 3</option>
                                <option value="4">Senior Lecturer - 4</option>
                                <option value="5">Lecturer - 5</option>
                                <option value="6">Assistant Lecturer - 6</option>
                                <option value="7">Instructors - 7</option>
                            </select>
                        </div>
                        <div className="form-group mx-sm-3 mb-2">
                            <label htmlFor="RankInput" style={{fontSize: '16px', color: "mediumslateblue"}}>Rank</label>
                            <input type="text" className="form-control" id="RankInput" placeholder="Rank" disabled/>
                        </div><br/>
                        <div className="form-group mx-sm-3 mb-2">
                            <button type="submit" className="btn my-1" style={{backgroundColor: "#312450", color: "white", float: "right"}}>Save Details</button>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}